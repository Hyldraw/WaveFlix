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
    status: ['popular', 'featured', 'classic']
  },
{ // Minecraft: The Movie
    tmdbId: "950387",
    type: "movie",
    playbackUrl: "https://data-limit-c.solo-latino.com/f07b88c55e3171f0bf9f4177d0d10102/ec0843b0bc020c8990fe727507559b16-sd.m3u8?hdnts=exp=1766259869_acl=/f07b88c55e3171f0bf9f4177d0d10102/*_hmac=041991b17e8e4d6b7f490b11032cc9f3e42522ca1eb9c1a50257d8b96aa51398",
    status: ['popular']
  },
{ // Five nights at Freddy's
    tmdbId: "507089",
    type: "movie",
    playbackUrl: "https://vod-limit-media.123flmsfree.com/00fe1a795e1d71f0bfef87c7371d0102/b0b29cfeaa0b4d959982a1029d173e50-d211a3a7d932b6d147da3e39da3ebb9f-sd.m3u8?hdnts=exp=1766255014_acl=/00fe1a795e1d71f0bfef87c7371d0102/*_hmac=51bc82fd988947a82c557ceb228ad6a8f735bf1d1b06dd90b83a9d6f675db3c3",
    status: ['popular']
  },
{ // Severance
    tmdbId: "95396",
    type: "series",
    episodes: [
      { season: 1, episode: 1, url: "https://data-limit-c.solo-latino.com/40cbab7b139071f0bfb787c6371c0102/339a2606f6754699b704ac7434bb9c49-2dce5c33744a15bbb90bcc89c53bd28e-sd.m3u8?hdnts=exp=1766271727_acl=/40cbab7b139071f0bfb787c6371c0102/*_hmac=757409bc1854f4a38fe1f8c585f29df73289786d8e53f3c3c2530a94592cb98a" },
      { season: 1, episode: 2, url: "https://data-limit-c.solo-latino.com/7008028b139071f0bf935014c1ca0102/d83e56ed788a46e8add30c77ba565f07-7324574bea78bd224b0fee8f176efd99-sd.m3u8?hdnts=exp=1766271955_acl=/7008028b139071f0bf935014c1ca0102/*_hmac=cf89fb594ae91a1a339030158cd6b6a00428b93c42caf2ccfc208797f8bd8cfe" },
      { season: 1, episode: 3, url: "https://vod-limit.cuevanalatino.net/9025b39c139071f0bf935014c1ca0102/2062fc67cbc64a6bbbe93ec0af042a33-6f9140ae26fc78071cad4e6141bae469-sd.m3u8?hdnts=exp=1766271974_acl=/9025b39c139071f0bf935014c1ca0102/*_hmac=ffa924f7eb4a1b2c409ce76b855e009264d2af1336d4f9af77627f49265f0e3d" },
{ season: 1, episode: 4, url: "https://stream-limit-vid.321moviesfree.com/b0e12ebd139071f0bffb5014c1da0102/ec4acaa431874cc384d26881f3425c1a-7db9e4f252b060f96bc7bb54fe3cdb4c-sd.m3u8?hdnts=exp=1766271991_acl=/b0e12ebd139071f0bffb5014c1da0102/*_hmac=912ef0fefaf84d99cad7128e1603ebde46a3c7503ad04e8f5dd5f17c371da5f7" },
{ season: 1, episode: 5, url: "https://data-limit-c.solo-latino.com/00e897d0139071f0bf935014c1ca0102/aba17a5dcdcc4908ac98646c266cb813-0db21c10bf9a630111511d85e3f62f5d-sd.m3u8?hdnts=exp=1766272012_acl=/00e897d0139071f0bf935014c1ca0102/*_hmac=619c79dc245cc3b49a8957b1ed0b0c6de5efa74df8734d6661bef00e467cd18e" },
{ season: 1, episode: 6, url: "https://data-limit-c.solo-latino.com/800c18ed139071f0bffb5014c1da0102/ae623cec9b694cccb4940fbc080a4219-8564e817e1a035ea99163225c636f214-sd.m3u8?hdnts=exp=1766272034_acl=/800c18ed139071f0bffb5014c1da0102/*_hmac=9836c6687f6ccad9575d17ad67726e22cdf7e9fe22728762d8f1f15550e00ba1" },
{ season: 1, episode: 7, url: "https://vod-limit-stream.dramasfree.com/2071adf8139071f090214177d1c00102/62a1e369911e4c1e8dde233995b99032-f20a2427694c0032d52f2bae829f8873-sd.m3u8?hdnts=exp=1766272060_acl=/2071adf8139071f090214177d1c00102/*_hmac=81487a480a5a4744b495552199c018cc56640f10e282be0175e61f8d2d43cb26" },
{ season: 1, episode: 8, url: "https://data-limit-c.solo-latino.com/004621fd139071f0bfca2680f9ea0102/63a0667e43334881afd36608a027786f-112632bc543550c835e5ad3dc1967896-sd.m3u8?hdnts=exp=1766272080_acl=/004621fd139071f0bfca2680f9ea0102/*_hmac=c05f2c22b133e8a5d609cfdd27a910f4fbdbc70c90c0a8270d27d254678b65e5" },
{ season: 1, episode: 9, url: "https://vod-limit.cuevanalatino.net/c018c912139171f0bfb387c7361c0102/77afb2d0311a44f690a75f1441055430-92088bb2f3587c5549e5fcc2b6c38576-sd.m3u8?hdnts=exp=1766272099_acl=/c018c912139171f0bfb387c7361c0102/*_hmac=e9fe2eb59580dfd88209d993a71ab7c9012b9b9df9812f0a522c840ce872c663" },
{ season: 2, episode: 1, url: "https://data-limit-c.solo-latino.com/d0b2384d106871f0bfad87c6371c0102/596be9c28287415fbedebf0e4929db19-0a30684956745394862c69bf8a2b37f2-sd.m3u8?hdnts=exp=1766266146_acl=/d0b2384d106871f0bfad87c6371c0102/*_hmac=0c48da90f3c6ec477a120e6ec7e30c1015aa259c8bd6d0d816ee0e632463d9e9" },
{ season: 2, episode: 2, url: "https://data-limit-c.solo-latino.com/50cf7352106871f0bf8d5014c1ca0102/a445c11828ff4fd684ec07d84b7fd26e-8d2caaa3ab02e3562da04c7354f10105-ld.m3u8?hdnts=exp=1766272132_acl=/50cf7352106871f0bf8d5014c1ca0102/*_hmac=3c8f41ebffbad9c1586d978a0f8d8e3bc73f12da04430d0cc6492b61dd122d32" },
{ season: 2, episode: 3, url: "https://data-limit-c.solo-latino.com/70d6d1a9106871f0bfad87c6371c0102/d74a6c16a2c14af5ab87db1478465b27-045cbe80c59b69390e56dab5462c14e5-sd.m3u8?hdnts=exp=1766272149_acl=/70d6d1a9106871f0bfad87c6371c0102/*_hmac=db6f7c7bdc1c132e06fb4ac95d138a8850efb0562dbc5683fbe5001f71d43501" },
{ season: 2, episode: 4, url: "https://data-limit-c.solo-latino.com/10cb02ad106871f0bfaa97c6360c0102/f184de33a95840fda2ee9af22e823f59-907c84842e540404f59169ad459228f1-sd.m3u8?hdnts=exp=1766272166_acl=/10cb02ad106871f0bfaa97c6360c0102/*_hmac=f99072403f0ccf7f92738cc9914381bb77f32082dc0eaf71360773f40b17f3d4" },
{ season: 2, episode: 5, url: "https://data-limit-c.solo-latino.com/f07a91b1106871f0bfad87c6371c0102/97f5f14a0ebe4784ae93fa0a7abca0e7-84ce142b8942d121ba2c68793d8b9f59-sd.m3u8?hdnts=exp=1766272185_acl=/f07a91b1106871f0bfad87c6371c0102/*_hmac=ed0a37bee8f92e25afefd15a65b595a6287b648da4760ccb26588f48a49b045a" },
{ season: 2, episode: 6, url: "https://vod-limit.cuevanalatino.net/4029d4b1106871f0bfaa97c6360c0102/e41a83f48ec14d9b80780ceec137f52e-df160a7a075d2db3b882f8b03cff2c95-sd.m3u8?hdnts=exp=1766272203_acl=/4029d4b1106871f0bfaa97c6360c0102/*_hmac=16817cc897e039709b202dfb609e0ba3807871b101e0781bb386148b9ba01ac2" },
{ season: 2, episode: 7, url: "https://data-limit-c.solo-latino.com/c0a408b9106871f0bfed5014c1da0102/5e60e7f3c2ed48258116d055c5805f73-945def3134abfb6d7d7b3a8841943cc0-sd.m3u8?hdnts=exp=1766272219_acl=/c0a408b9106871f0bfed5014c1da0102/*_hmac=05c04367f57aba4c4c22f4024f9b50d2caec9adb78ce1ad2177c56ff0f16e321" },
{ season: 2, episode: 8, url: "https://data-limit-c.solo-latino.com/50ee1ec4106871f095814177d1c10102/aa81c64450b24870878907676ab52c78-839e461e873b6a8fea91b61d287c8656-sd.m3u8?hdnts=exp=1766272237_acl=/50ee1ec4106871f095814177d1c10102/*_hmac=0b40272beb8e73ebe94388797664bb07ddb4f6027919676ff7b6d1fdce9fa6a3" },
{ season: 2, episode: 9, url: "https://data-limit-c.solo-latino.com/b0bb530c106971f090174177d1c00102/ff9874c4b18e4e5390720d6239e8400d-0c70fa2db2fcadf852c93cc505e091f1-sd.m3u8?hdnts=exp=1766272255_acl=/b0bb530c106971f090174177d1c00102/*_hmac=852cbcb050882fe61f4855e48aa8ecec16c4f30afa83ddaed57803cd81bb9a5e" },
{ season: 2, episode: 10, url: "https://data-limit-c.solo-latino.com/f00e5d10106971f0b5195114c1ca0102/5b4d8437514a48aebb4f5b791297c034-12b28bef326dfeef4059329edc7ae5bc-sd.m3u8?hdnts=exp=1766272292_acl=/f00e5d10106971f0b5195114c1ca0102/*_hmac=11ed29846debaac9f4310c9cfa13ab85a665058b93c675b9d000a219fa921cbd" },
    ],
    status: ['popular']
  }, 
{ // Dark Matter 
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
    status: ['popular']
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
