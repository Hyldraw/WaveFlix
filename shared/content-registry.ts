export type ContentStatus = 'trending' | 'popular' | 'new' | 'classic' | 'featured';

export interface EpisodeLink {
  season: number;
  episode: number;
  url: string;
}

export interface RegisteredContent {
  tmdbId: string;
  type: 'movie' | 'series';
  playbackUrl?: string;
  episodes?: EpisodeLink[];
  status: ContentStatus[];
}

export const REGISTERED_CONTENT: RegisteredContent[] = [
  {
    tmdbId: "1396",
    type: "series",
    episodes: [
      { season: 1, episode: 1, url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4" },
      { season: 1, episode: 2, url: "https://example.com/breaking-bad-s01e02.mp4" },
      { season: 1, episode: 3, url: "https://example.com/breaking-bad-s01e03.mp4" },
    ],
    status: ['featured', 'popular', 'classic']
  },
  {
    tmdbId: "66732",
    type: "series",
    episodes: [
      { season: 1, episode: 1, url: "https://example.com/stranger-things-s01e01.mp4" },
      { season: 1, episode: 2, url: "https://example.com/stranger-things-s01e02.mp4" },
    ],
    status: ['featured', 'popular']
  },
  {
    tmdbId: "100088",
    type: "series",
    episodes: [
      { season: 1, episode: 1, url: "https://example.com/last-of-us-s01e01.mp4" },
      { season: 1, episode: 2, url: "https://example.com/last-of-us-s01e02.mp4" },
    ],
    status: ['featured', 'trending']
  },
  {
  tmdbId: "1084242",      // Pegue no site themoviedb.org
  type: "movie",
  playbackUrl: "https://media-limit-xr8a2.peliculaplay.com/b0eea4cccc2671f09d505114c0db0102/d607a5be5bbc0b427916861014dfe418-ld.m3u8?hdnts=exp=1766184400_acl=/b0eea4cccc2671f09d505114c0db0102/*_hmac=34ea385bd1608e2701e6cfb240b8a2006f72a86d298c2ed25cb23d8d90a22ab5",  // Link do vídeo
  status: ['featured', 'popular']  // Tags de destaque
  },
  { // Oppenheimer
    tmdbId: "872585",
    type: "movie",
    playbackUrl: "https://vod-limit-res.cuevana.life/a01bfb1b259d71f094734177d0d10102/0ad45b8b88d04f2bbff37f81475eb164-dfb32bd8c24ba01cc515bb710b5f3844-ld.m3u8?hdnts=exp=1766181361_acl=/a01bfb1b259d71f094734177d0d10102/*_hmac=75b767e0788e1067a755951f2eed6ba2a79832fec7f2996745207500368b6a82",
    status: ['featured', 'popular']
  },
  {
    tmdbId: "693134",
    type: "movie",
    playbackUrl: "https://example.com/dune-part-two.mp4",
    status: ['featured', 'new']
  },
  {
    tmdbId: "346698",
    type: "movie",
    playbackUrl: "https://example.com/barbie.mp4",
    status: ['popular']
  },
{
    tmdbId: "177572",
    type: "movie",
    playbackUrl: "https://data-limit-c.solo-latino.com/d03355eb660371f088324177d0d10102/396c3321846240da8f54e7df5abcf0ae-56c2966cc5f3cce87b877bc96d2117dc-ld.m3u8?hdnts=exp=1766245428_acl=/d03355eb660371f088324177d0d10102/*_hmac=b8db56ad3b1637d466677e367c7750d2af196e0082e9d0f11ad257b98a0a72d8",
    status: ['popular']
  },
  {
    tmdbId: "438631",
    type: "movie",
    playbackUrl: "https://example.com/dune.mp4",
    status: ['popular', 'classic']
  },
  {
    tmdbId: "157336",
    type: "movie",
    playbackUrl: "https://example.com/interstellar.mp4",
    status: ['popular', 'classic']
  }
];

export function getRegisteredContent(): RegisteredContent[] {
  return REGISTERED_CONTENT;
}

export function getRegisteredContentById(tmdbId: string): RegisteredContent | undefined {
  return REGISTERED_CONTENT.find(c => c.tmdbId === tmdbId);
}

export function getRegisteredMovies(): RegisteredContent[] {
  return REGISTERED_CONTENT.filter(c => c.type === 'movie');
}

export function getRegisteredSeries(): RegisteredContent[] {
  return REGISTERED_CONTENT.filter(c => c.type === 'series');
}

export function getContentByStatus(status: ContentStatus): RegisteredContent[] {
  return REGISTERED_CONTENT.filter(c => c.status.includes(status));
}

export function getFeaturedContent(): RegisteredContent[] {
  return getContentByStatus('featured');
}

export function getEpisodeUrl(tmdbId: string, season: number, episode: number): string | undefined {
  const content = getRegisteredContentById(tmdbId);
  if (!content || content.type !== 'series' || !content.episodes) {
    return undefined;
  }
  const ep = content.episodes.find(e => e.season === season && e.episode === episode);
  return ep?.url;
}
