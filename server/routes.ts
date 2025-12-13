import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getMovieDetails, getTVDetails, convertMovieToContent, convertTVToContent } from "./tmdb";
import { getRegisteredContent, getRegisteredContentById, getEpisodeUrl, type RegisteredContent } from "@shared/content-registry";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/registered-content", async (req, res) => {
    try {
      const registeredItems = getRegisteredContent();
      const contentPromises = registeredItems.map(async (item) => {
        try {
          if (item.type === 'movie') {
            const tmdbData = await getMovieDetails(parseInt(item.tmdbId));
            const content = convertMovieToContent(tmdbData, item.status.includes('featured'));
            return {
              ...content,
              playbackUrl: item.playbackUrl,
              status: item.status
            };
          } else {
            const tmdbData = await getTVDetails(parseInt(item.tmdbId));
            const content = convertTVToContent(tmdbData, item.status.includes('featured'));
            return {
              ...content,
              episodeLinks: item.episodes,
              status: item.status
            };
          }
        } catch (error) {
          console.error(`Error fetching TMDB data for ${item.tmdbId}:`, error);
          return null;
        }
      });

      const contents = (await Promise.all(contentPromises)).filter(Boolean);
      res.json(contents);
    } catch (error) {
      console.error("Error fetching registered content:", error);
      res.status(500).json({ message: "Failed to fetch content" });
    }
  });

  app.get("/api/registered-content/:tmdbId", async (req, res) => {
    try {
      const { tmdbId } = req.params;
      const registeredItem = getRegisteredContentById(tmdbId);
      
      if (!registeredItem) {
        return res.status(404).json({ message: "Content not registered" });
      }

      let content;
      if (registeredItem.type === 'movie') {
        const tmdbData = await getMovieDetails(parseInt(tmdbId));
        content = convertMovieToContent(tmdbData, registeredItem.status.includes('featured'));
        content.playbackUrl = registeredItem.playbackUrl;
      } else {
        const tmdbData = await getTVDetails(parseInt(tmdbId));
        content = convertTVToContent(tmdbData, registeredItem.status.includes('featured'));
        content.episodeLinks = registeredItem.episodes;
      }
      
      content.status = registeredItem.status;
      res.json(content);
    } catch (error) {
      console.error("Error fetching content:", error);
      res.status(500).json({ message: "Failed to fetch content" });
    }
  });

  app.get("/api/episode-url/:tmdbId/:season/:episode", async (req, res) => {
    try {
      const { tmdbId, season, episode } = req.params;
      const url = getEpisodeUrl(tmdbId, parseInt(season), parseInt(episode));
      
      if (!url) {
        return res.status(404).json({ message: "Episode URL not found" });
      }

      res.json({ url });
    } catch (error) {
      res.status(500).json({ message: "Failed to get episode URL" });
    }
  });

  app.get("/api/content", async (req, res) => {
    try {
      const { type, featured, search } = req.query;
      
      let content;
      
      if (search && typeof search === 'string') {
        content = await storage.searchContent(search);
      } else if (type === 'movie' || type === 'series') {
        content = await storage.getContentByType(type);
      } else if (featured === 'true') {
        content = await storage.getFeaturedContent();
      } else {
        content = await storage.getAllContent();
      }
      
      res.json(content);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch content" });
    }
  });

  app.get("/api/content/:id", async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ message: "Invalid content ID" });
      }
      
      const content = await storage.getContentById(id);
      if (!content) {
        return res.status(404).json({ message: "Content not found" });
      }
      
      res.json(content);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch content" });
    }
  });

  app.get("/api/user-list", async (req, res) => {
    try {
      const { visitorId } = req.query;
      
      if (!visitorId || typeof visitorId !== 'string') {
        return res.json([]);
      }
      
      const contentIds = await storage.getUserList(visitorId);
      
      // Fetch full content details for each ID from TMDB via registered content
      const contentPromises = contentIds.map(async (id) => {
        try {
          const registeredItem = getRegisteredContentById(id);
          if (!registeredItem) return null;
          
          if (registeredItem.type === 'movie') {
            const tmdbData = await getMovieDetails(parseInt(registeredItem.tmdbId));
            const content = convertMovieToContent(tmdbData, registeredItem.status.includes('featured'));
            return {
              ...content,
              playbackUrl: registeredItem.playbackUrl,
              status: registeredItem.status
            };
          } else {
            const tmdbData = await getTVDetails(parseInt(registeredItem.tmdbId));
            const content = convertTVToContent(tmdbData, registeredItem.status.includes('featured'));
            return {
              ...content,
              episodeLinks: registeredItem.episodes,
              status: registeredItem.status
            };
          }
        } catch (error) {
          console.error(`Error fetching TMDB data for content ${id}:`, error);
          return null;
        }
      });
      
      const contents = await Promise.all(contentPromises);
      
      // Filter out any null values (content that might have been deleted or failed to load)
      const validContents = contents.filter(content => content !== null);
      
      res.json(validContents);
    } catch (error) {
      console.error("GET /api/user-list error:", error);
      res.status(500).json({ message: "Failed to fetch user list" });
    }
  });

  app.post("/api/user-list", async (req, res) => {
    try {
      const { contentId, visitorId } = req.body;
      
      if (!contentId || !visitorId) {
        return res.status(400).json({ message: "Content ID and Visitor ID are required" });
      }
      
      const isInList = await storage.isInUserList(visitorId, contentId);
      if (isInList) {
        return res.status(400).json({ message: "Content already in list" });
      }
      
      const userList = await storage.addToUserList(visitorId, contentId);
      res.json(userList);
    } catch (error) {
      console.error("POST /api/user-list error:", error);
      res.status(500).json({ message: "Failed to add content to list" });
    }
  });

  app.delete("/api/user-list/:contentId", async (req, res) => {
    try {
      const contentId = req.params.contentId;
      const { visitorId } = req.query;
      
      if (!contentId || !visitorId || typeof visitorId !== 'string') {
        return res.status(400).json({ message: "Invalid content ID or visitor ID" });
      }
      
      const removed = await storage.removeFromUserList(visitorId, contentId);
      if (!removed) {
        return res.status(404).json({ message: "Content not found in list" });
      }
      
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ message: "Failed to remove content from list" });
    }
  });

  app.get("/api/watch-progress/:contentId", async (req, res) => {
    try {
      const { contentId } = req.params;
      const { visitorId, season, episode } = req.query;

      if (!visitorId || typeof visitorId !== 'string') {
        return res.status(400).json({ message: "Visitor ID is required" });
      }

      const seasonNum = season ? parseInt(season as string) : undefined;
      const episodeNum = episode ? parseInt(episode as string) : undefined;

      const progress = await storage.getWatchProgress(visitorId, contentId, seasonNum, episodeNum);
      
      if (!progress) {
        return res.json({ positionSeconds: 0, durationSeconds: 0 });
      }

      res.json(progress);
    } catch (error) {
      console.error("Error getting watch progress:", error);
      res.status(500).json({ message: "Failed to get watch progress" });
    }
  });

  app.get("/api/watch-progress", async (req, res) => {
    try {
      const { visitorId } = req.query;

      if (!visitorId || typeof visitorId !== 'string') {
        return res.status(400).json({ message: "Visitor ID is required" });
      }

      const progress = await storage.getAllWatchProgress(visitorId);
      res.json(progress);
    } catch (error) {
      console.error("Error getting all watch progress:", error);
      res.status(500).json({ message: "Failed to get watch progress" });
    }
  });

  app.put("/api/watch-progress", async (req, res) => {
    try {
      const { visitorId, contentId, seasonNumber, episodeNumber, positionSeconds, durationSeconds } = req.body;

      if (!visitorId || !contentId) {
        return res.status(400).json({ message: "Visitor ID and Content ID are required" });
      }

      const progress = await storage.saveWatchProgress({
        visitorId,
        contentId,
        seasonNumber: seasonNumber || null,
        episodeNumber: episodeNumber || null,
        positionSeconds: positionSeconds || 0,
        durationSeconds: durationSeconds || 0
      });

      res.json(progress);
    } catch (error) {
      console.error("Error saving watch progress:", error);
      res.status(500).json({ message: "Failed to save watch progress" });
    }
  });

  app.delete("/api/watch-progress/:contentId", async (req, res) => {
    try {
      const { contentId } = req.params;
      const { visitorId, season, episode } = req.query;

      if (!visitorId || typeof visitorId !== 'string') {
        return res.status(400).json({ message: "Visitor ID is required" });
      }

      const seasonNum = season ? parseInt(season as string) : undefined;
      const episodeNum = episode ? parseInt(episode as string) : undefined;

      const deleted = await storage.deleteWatchProgress(visitorId, contentId, seasonNum, episodeNum);
      res.json({ success: deleted });
    } catch (error) {
      console.error("Error deleting watch progress:", error);
      res.status(500).json({ message: "Failed to delete watch progress" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
