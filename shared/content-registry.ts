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
    tmdbId: "1117857",
    type: "movie",
    playbackUrl: "https://vod-limit-media.123flmsfree.com/60e86579c13371f0800d5114c1ca0102/b02d2ba88f6ab009beca46af2ab4a893-ld.m3u8?hdnts=exp=1766264117_acl=/60e86579c13371f0800d5114c1ca0102/*_hmac=6f755fd1bd108f434f0626c0772af153e25556bc2ecac28b42ab2b0f364dc0d3",
    status: ['popular', 'featured']
  },
{
    tmdbId: "196322",
    type: "series",
    episodes: [
      { season: 1, episode: 1, url: "https://vod-limit-media.123flmsfree.com/50c4d2061ce571f0bff14177d1c10102/15e035d560ad4eb9aa2b33d88a7341f3-58e0fc024904863d21003b1934343dbd-sd.m3u8?hdnts=exp=1766264697_acl=/50c4d2061ce571f0bff14177d1c10102/*_hmac=85da1e2a0acbf5faf950556f3215c91c02bf15be083eac53a43ae941f9c6fb1f" },
      { season: 1, episode: 2, url: "https://vod-limit.cuevanalatino.net/a07e96061ce571f0bfa497c6360c0102/5c2aef8fb2eb45729c8fcc6c264d80ec-ec2982de9fc54ab49aecaac0c4e23132-sd.m3u8?hdnts=exp=1766260922_acl=/a07e96061ce571f0bfa497c6360c0102/*_hmac=2d25e42dc216ec8e3f53d09a08b98003b437753614396c0cf124232732f80a1b" },
      { season: 1, episode: 3, url: "https://r-limit.flixlat.com/100ad7061ce571f0bfd687c7371d0102/f44cc3e4679b49e48cff60af0cb5b982-df165dd4f0f85ff927514b07b608e4e2-sd.m3u8?hdnts=exp=1766264411_acl=/100ad7061ce571f0bfd687c7371d0102/*_hmac=2774e102b4a4d3897bdd084d48d9520c6947033e084098cdc1253ae6dc17979c" },
{ season: 1, episode: 4, url: "https://vod-limit.cuevanalatino.net/b09eac061ce571f0a18d5114c0db0102/c6d0f8c8a07e4d1b9080d82450b0b65d-aac4eaa66f281279a94cdbf017cef94c-sd.m3u8?hdnts=exp=1766264793_acl=/b09eac061ce571f0a18d5114c0db0102/*_hmac=b5dc3b1dbc237099a5d5f44df817c30208c766a327021cd28710fafd17e0b7aa" },
{ season: 1, episode: 5, url: "https://vod-limit.cuevanalatino.net/4033ba061ce571f0bfd036a5e8aa0102/0e73b4b57428471b990915df5641cb34-4585a4f383c64363da883ba73474336c-sd.m3u8?hdnts=exp=1766264844_acl=/4033ba061ce571f0bfd036a5e8aa0102/*_hmac=b2cfdb474c00f7b9173b1c85a28bdf96e5ff3bc5afdbe1f5feae384665516487" },
{ season: 1, episode: 6, url: "https://r-limit.flixlat.com/50b4ab061ce571f0907c5114c1ca0102/379c41ec5529470ba377d7862ad8080c-89a53bb78a509a80027a1b7adea8f721-sd.m3u8?hdnts=exp=1766264866_acl=/50b4ab061ce571f0907c5114c1ca0102/*_hmac=ae5e0197d4407983b78a63d16285394821dc7a65905371d0ca5a8156eca7af20" },
{ season: 1, episode: 7, url: "https://vod-limit.cuevanalatino.net/3048e7651ce571f0bff14177d1c10102/dd424e93782540259f03cc60245d0b55-b3ac9c97cb10aaa55c4f04b8f46b8594-sd.m3u8?hdnts=exp=1766264895_acl=/3048e7651ce571f0bff14177d1c10102/*_hmac=6b7bca0570765e763e34d71ba17bb88435ff14eb00759a6365338856dc91acb8" },
{ season: 1, episode: 8, url: "https://vod-limit.cuevanalatino.net/c08faa701ce571f0907c5114c1ca0102/50ace15820b64ba48daee6e093e41c82-e3e584c4c64bfd86dc447fb5ba743241-sd.m3u8?hdnts=exp=1766264924_acl=/c08faa701ce571f0907c5114c1ca0102/*_hmac=fdd9ff38eecdfeb2d5a44ec985a68e3815fdf169891251fbd9f07b47b69a210f" },
{ season: 1, episode: 9, url: "https://vod-limit.cuevanalatino.net/20a063741ce571f0bff14177d1c10102/c371d9dd59204e31831cd2e3a3743062-07ddbc3eafc6c8649e37f41fada906ff-sd.m3u8?hdnts=exp=1766264965_acl=/20a063741ce571f0bff14177d1c10102/*_hmac=1d6f60911d91282f5f425036bc9e81b3cd871cdd76082cce49a7a4e29a01de02" },
    ],
    status: ['featured', 'popular', 'classic']
  },
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
