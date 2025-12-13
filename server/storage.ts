import { type User, type InsertUser, type Content, type InsertContent, type UserList, type InsertUserList, type WatchProgress, type InsertWatchProgress, users, content, userLists, watchProgress } from "@shared/schema";
import * as schema from "@shared/schema";
import { randomUUID } from "crypto";
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { eq, ilike, or, sql } from 'drizzle-orm';
import { HARDCODED_CONTENT, getHardcodedContent, getHardcodedMovies, getHardcodedSeries, getHardcodedFeatured, getHardcodedContentById } from "@shared/hardcoded-content";

// Função para gerar embed baseado no tipo e ID (TMDB)
function generateEmbed(id: string, type: 'movie' | 'series'): string {
  // Usar Fembed para filmes e séries com IDs do TMDB
  return `https://fembed.sx/e/${id}`;
}

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getAllContent(): Promise<Content[]>;
  getContentById(id: string): Promise<Content | undefined>;
  getContentByType(type: 'movie' | 'series'): Promise<Content[]>;
  getFeaturedContent(): Promise<Content[]>;
  searchContent(query: string): Promise<Content[]>;

  getUserList(visitorId: string): Promise<string[]>;
  addToUserList(visitorId: string, contentId: string): Promise<UserList>;
  removeFromUserList(visitorId: string, contentId: string): Promise<boolean>;
  isInUserList(visitorId: string, contentId: string): Promise<boolean>;

  getWatchProgress(visitorId: string, contentId: string, seasonNumber?: number, episodeNumber?: number): Promise<WatchProgress | undefined>;
  saveWatchProgress(progress: InsertWatchProgress): Promise<WatchProgress>;
  deleteWatchProgress(visitorId: string, contentId: string, seasonNumber?: number, episodeNumber?: number): Promise<boolean>;
  getAllWatchProgress(visitorId: string): Promise<WatchProgress[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private content: Map<string, Content>;
  private userLists: Map<string, UserList[]>;

  constructor() {
    this.users = new Map();
    this.content = new Map();
    this.userLists = new Map();

    // Initialize with sample content
    this.initializeContent();
  }

  private initializeContent() {
    // Conteúdo será carregado do TMDB via banco de dados
    const sampleContent: Content[] = [];

    sampleContent.forEach(content => {
      this.content.set(content.id, content);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    this.userLists.set(id, []);
    return user;
  }

  async getAllContent(): Promise<Content[]> {
    return Array.from(this.content.values());
  }

  async getContentById(id: string): Promise<Content | undefined> {
    return this.content.get(id);
  }

  async getContentByType(type: 'movie' | 'series'): Promise<Content[]> {
    return Array.from(this.content.values()).filter(content => content.type === type);
  }

  async getFeaturedContent(): Promise<Content[]> {
    return Array.from(this.content.values()).filter(content => content.featured);
  }

  async searchContent(query: string): Promise<Content[]> {
    const searchTerm = query.toLowerCase();
    return Array.from(this.content.values()).filter(content =>
      content.title.toLowerCase().includes(searchTerm) ||
      content.genre.toLowerCase().includes(searchTerm) ||
      (content.cast as Array<{name: string, photo: string}>).some(actor => actor.name.toLowerCase().includes(searchTerm))
    );
  }

  async getUserList(visitorId: string): Promise<string[]> {
    const userLists = this.userLists.get(visitorId) || [];
    return userLists.map(item => item.contentId);
  }

  async addToUserList(visitorId: string, contentId: string): Promise<UserList> {
    const userList: UserList = {
      id: randomUUID(),
      visitorId,
      contentId,
      addedAt: new Date().toISOString()
    };

    const existingLists = this.userLists.get(visitorId) || [];
    existingLists.push(userList);
    this.userLists.set(visitorId, existingLists);

    return userList;
  }

  async removeFromUserList(visitorId: string, contentId: string): Promise<boolean> {
    const existingLists = this.userLists.get(visitorId) || [];
    const filteredLists = existingLists.filter(item => item.contentId !== contentId);

    if (filteredLists.length !== existingLists.length) {
      this.userLists.set(visitorId, filteredLists);
      return true;
    }

    return false;
  }

  async isInUserList(visitorId: string, contentId: string): Promise<boolean> {
    const userLists = this.userLists.get(visitorId) || [];
    return userLists.some(item => item.contentId === contentId);
  }

  private watchProgressMap: Map<string, WatchProgress> = new Map();

  async getWatchProgress(visitorId: string, contentId: string, seasonNumber?: number, episodeNumber?: number): Promise<WatchProgress | undefined> {
    const key = `${visitorId}-${contentId}-${seasonNumber || 0}-${episodeNumber || 0}`;
    return this.watchProgressMap.get(key);
  }

  async saveWatchProgress(progress: InsertWatchProgress): Promise<WatchProgress> {
    const key = `${progress.visitorId}-${progress.contentId}-${progress.seasonNumber || 0}-${progress.episodeNumber || 0}`;
    const existing = this.watchProgressMap.get(key);
    const savedProgress: WatchProgress = {
      id: existing?.id || randomUUID(),
      visitorId: progress.visitorId,
      contentId: progress.contentId,
      seasonNumber: progress.seasonNumber || null,
      episodeNumber: progress.episodeNumber || null,
      positionSeconds: progress.positionSeconds || 0,
      durationSeconds: progress.durationSeconds || 0,
      updatedAt: new Date().toISOString()
    };
    this.watchProgressMap.set(key, savedProgress);
    return savedProgress;
  }

  async deleteWatchProgress(visitorId: string, contentId: string, seasonNumber?: number, episodeNumber?: number): Promise<boolean> {
    const key = `${visitorId}-${contentId}-${seasonNumber || 0}-${episodeNumber || 0}`;
    return this.watchProgressMap.delete(key);
  }

  async getAllWatchProgress(visitorId: string): Promise<WatchProgress[]> {
    return Array.from(this.watchProgressMap.values()).filter(p => p.visitorId === visitorId);
  }
}

class DbStorage implements IStorage {
  private db;
  
  constructor() {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not set");
    }
    const queryClient = postgres(process.env.DATABASE_URL);
    this.db = drizzle(queryClient, { schema });
  }
  
  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const result = await this.db.select().from(users).where(eq(users.username, username));
      if (!result || !Array.isArray(result)) {
        console.error("getUserByUsername: invalid result", result);
        return undefined;
      }
      return result[0];
    } catch (error) {
      console.error("getUserByUsername error:", error);
      throw error;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async getAllContent(): Promise<Content[]> {
    try {
      const dbContent = await this.db.select().from(content);
      // Merge hardcoded content with database content (hardcoded takes priority)
      const hardcoded = getHardcodedContent();
      const hardcodedIds = new Set(hardcoded.map(c => c.id));
      const uniqueDbContent = dbContent.filter(c => !hardcodedIds.has(c.id));
      return [...hardcoded, ...uniqueDbContent];
    } catch (error) {
      console.error("Error fetching content from DB, using hardcoded:", error);
      return getHardcodedContent();
    }
  }

  async getContentById(id: string): Promise<Content | undefined> {
    // First check hardcoded content
    const hardcoded = getHardcodedContentById(id);
    if (hardcoded) return hardcoded;
    
    const result = await this.db.select().from(content).where(eq(content.id, id));
    return result[0];
  }

  async getContentByType(type: 'movie' | 'series'): Promise<Content[]> {
    try {
      const dbContent = await this.db.select().from(content).where(eq(content.type, type));
      const hardcoded = type === 'movie' ? getHardcodedMovies() : getHardcodedSeries();
      const hardcodedIds = new Set(hardcoded.map(c => c.id));
      const uniqueDbContent = dbContent.filter(c => !hardcodedIds.has(c.id));
      return [...hardcoded, ...uniqueDbContent];
    } catch (error) {
      console.error("Error fetching content by type from DB, using hardcoded:", error);
      return type === 'movie' ? getHardcodedMovies() : getHardcodedSeries();
    }
  }

  async getFeaturedContent(): Promise<Content[]> {
    try {
      const dbContent = await this.db.select().from(content).where(eq(content.featured, true));
      const hardcoded = getHardcodedFeatured();
      const hardcodedIds = new Set(hardcoded.map(c => c.id));
      const uniqueDbContent = dbContent.filter(c => !hardcodedIds.has(c.id));
      return [...hardcoded, ...uniqueDbContent];
    } catch (error) {
      console.error("Error fetching featured content from DB, using hardcoded:", error);
      return getHardcodedFeatured();
    }
  }

  async searchContent(query: string): Promise<Content[]> {
    const searchTerm = query.toLowerCase();
    const hardcoded = getHardcodedContent().filter(c => 
      c.title.toLowerCase().includes(searchTerm) ||
      c.genre.toLowerCase().includes(searchTerm)
    );
    
    try {
      const searchPattern = `%${query}%`;
      const dbContent = await this.db.select().from(content).where(
        or(
          ilike(content.title, searchPattern),
          ilike(content.genre, searchPattern)
        )
      );
      const hardcodedIds = new Set(hardcoded.map(c => c.id));
      const uniqueDbContent = dbContent.filter(c => !hardcodedIds.has(c.id));
      return [...hardcoded, ...uniqueDbContent];
    } catch (error) {
      console.error("Error searching content in DB, using hardcoded:", error);
      return hardcoded;
    }
  }

  async getUserList(visitorId: string): Promise<string[]> {
    const lists = await this.db.select().from(userLists).where(eq(userLists.visitorId, visitorId));
    if (!lists || !Array.isArray(lists)) {
      console.error("getUserList returned invalid result:", lists);
      return [];
    }
    return lists.map(item => item.contentId);
  }

  async addToUserList(visitorId: string, contentId: string): Promise<UserList> {
    const result = await this.db.insert(userLists).values({
      visitorId,
      contentId
    }).returning();
    return result[0];
  }

  async removeFromUserList(visitorId: string, contentId: string): Promise<boolean> {
    const result = await this.db.delete(userLists).where(
      sql`${userLists.visitorId} = ${visitorId} AND ${userLists.contentId} = ${contentId}`
    ).returning();
    return result.length > 0;
  }

  async isInUserList(visitorId: string, contentId: string): Promise<boolean> {
    const result = await this.db.select().from(userLists).where(
      sql`${userLists.visitorId} = ${visitorId} AND ${userLists.contentId} = ${contentId}`
    );
    return result.length > 0;
  }

  async getWatchProgress(visitorId: string, contentId: string, seasonNumber?: number, episodeNumber?: number): Promise<WatchProgress | undefined> {
    try {
      let query;
      if (seasonNumber !== undefined && episodeNumber !== undefined) {
        query = await this.db.select().from(watchProgress).where(
          sql`${watchProgress.visitorId} = ${visitorId} AND ${watchProgress.contentId} = ${contentId} AND ${watchProgress.seasonNumber} = ${seasonNumber} AND ${watchProgress.episodeNumber} = ${episodeNumber}`
        );
      } else {
        query = await this.db.select().from(watchProgress).where(
          sql`${watchProgress.visitorId} = ${visitorId} AND ${watchProgress.contentId} = ${contentId} AND ${watchProgress.seasonNumber} IS NULL`
        );
      }
      return query[0];
    } catch (error) {
      console.error("Error getting watch progress:", error);
      return undefined;
    }
  }

  async saveWatchProgress(progress: InsertWatchProgress): Promise<WatchProgress> {
    try {
      const existing = await this.getWatchProgress(
        progress.visitorId, 
        progress.contentId, 
        progress.seasonNumber ?? undefined, 
        progress.episodeNumber ?? undefined
      );

      if (existing) {
        const result = await this.db.update(watchProgress)
          .set({
            positionSeconds: progress.positionSeconds,
            durationSeconds: progress.durationSeconds,
            updatedAt: new Date().toISOString()
          })
          .where(eq(watchProgress.id, existing.id))
          .returning();
        return result[0];
      } else {
        const result = await this.db.insert(watchProgress).values({
          visitorId: progress.visitorId,
          contentId: progress.contentId,
          seasonNumber: progress.seasonNumber,
          episodeNumber: progress.episodeNumber,
          positionSeconds: progress.positionSeconds,
          durationSeconds: progress.durationSeconds
        }).returning();
        return result[0];
      }
    } catch (error) {
      console.error("Error saving watch progress:", error);
      throw error;
    }
  }

  async deleteWatchProgress(visitorId: string, contentId: string, seasonNumber?: number, episodeNumber?: number): Promise<boolean> {
    try {
      let result;
      if (seasonNumber !== undefined && episodeNumber !== undefined) {
        result = await this.db.delete(watchProgress).where(
          sql`${watchProgress.visitorId} = ${visitorId} AND ${watchProgress.contentId} = ${contentId} AND ${watchProgress.seasonNumber} = ${seasonNumber} AND ${watchProgress.episodeNumber} = ${episodeNumber}`
        ).returning();
      } else {
        result = await this.db.delete(watchProgress).where(
          sql`${watchProgress.visitorId} = ${visitorId} AND ${watchProgress.contentId} = ${contentId} AND ${watchProgress.seasonNumber} IS NULL`
        ).returning();
      }
      return result.length > 0;
    } catch (error) {
      console.error("Error deleting watch progress:", error);
      return false;
    }
  }

  async getAllWatchProgress(visitorId: string): Promise<WatchProgress[]> {
    try {
      return await this.db.select().from(watchProgress).where(eq(watchProgress.visitorId, visitorId));
    } catch (error) {
      console.error("Error getting all watch progress:", error);
      return [];
    }
  }
}

// Using DbStorage with PostgreSQL via Neon
export const storage = new DbStorage();
