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
{ // It- Bem vindo a Derry 
    tmdbId: "200875",
    type: "series",
    episodes: [
      { season: 1, episode: 1, url: "https://vod-limit-res.cuevana.life/003e4b21b2fb71f0a43a97c6360c0102/875585138697848b3660f67bc597a720-sd.m3u8?hdnts=exp=1766375063_acl=/003e4b21b2fb71f0a43a97c6360c0102/*_hmac=61175cefec825fb08cd27961bdffa913505253d4e6fa0176a64bce53e3cd2288" },
      { season: 1, episode: 2, url: "https://vod-limit-media.123flmsfree.com/8043b81ab8aa71f0b3bc4177d1c10102/45ab858f620eb2070858950a4eea181d-sd.m3u8?hdnts=exp=1766375690_acl=/8043b81ab8aa71f0b3bc4177d1c10102/*_hmac=08953742599d3ab1e09e71a1eaacc902ca1a92749bf3fd694d17f47f06e6ff30" },
      { season: 1, episode: 3, url: "https://vod-limit-res.cuevana.life/50fc5d57be2571f0a5384177d1c10102/bf662935b2c3c66e9635ecbb090976e5-sd.m3u8?hdnts=exp=1766387656_acl=/50fc5d57be2571f0a5384177d1c10102/*_hmac=5abc90403decee727033bd2a0d9a469c43b44f067c8e4facd684ac8970f77748" },
{ season: 1, episode: 4, url: "https://vod-limit-res.cuevana.life/50fc5d57be2571f0a5384177d1c10102/bf662935b2c3c66e9635ecbb090976e5-sd.m3u8?hdnts=exp=1766387656_acl=/50fc5d57be2571f0a5384177d1c10102/*_hmac=5abc90403decee727033bd2a0d9a469c43b44f067c8e4facd684ac8970f77748" },
{ season: 1, episode: 5, url: "https://vod-limit-media.123flmsfree.com/600773e0c91071f0bfa93108f4940102/3ae2ff02200bfa814bcf5eb1dad9627a-sd.m3u8?hdnts=exp=1766386946_acl=/600773e0c91071f0bfa93108f4940102/*_hmac=7869bf9058e3b4a789c40fb22476d570655d8756989fa9238239752920c3cc5e" },
{ season: 1, episode: 6, url: "https://vod-limit-media.123flmsfree.com/20c12dd0ceb471f0bffc87c7371d0102/307366fe081b1794cc39fe30cfb6d710-sd.m3u8?hdnts=exp=1766394614_acl=/20c12dd0ceb471f0bffc87c7371d0102/*_hmac=2891c3611825b7f49d0bedd7c829b3bce78ca88ba05c803c964c172ed4f7b98f" },
{ season: 1, episode: 7, url: "https://vod-limit-media.123flmsfree.com/b00d8ba1d41271f0bfbb4076d1d30102/002e3e7531c65e68859359218079e19a-sd.m3u8?hdnts=exp=1766382991_acl=/b00d8ba1d41271f0bfbb4076d1d30102/*_hmac=6dfad4d2e9364f65c23c06476d99544eb17fee7119f93286491d328cd51ad0eb" },
{ season: 1, episode: 8, url: "" },
    ],
    status: ['featured']
  }, 
{ // John Wick (2014)
  tmdbId: "245891",
  type: "movie",
  playbackUrl: "https://vod-limit-stream.dramasfree.com/103b69adea7671ef802387c6371c0102/efa44600caa647a782b9881385ee4432-2a1f284d4464bd8d8de826e78cd1c56c-sd.m3u8?hdnts=exp=1766345025_acl=/103b69adea7671ef802387c6371c0102/*_hmac=7d4927d5493e95e4cec7b12468d82c333c281b11144340b2cf41372be41469c4",
  status: []
},
{ // John Wick: Chapter 2 (2017)
  tmdbId: "324552",
  type: "movie",
  playbackUrl: "https://vod-limit-stream.dramasfree.com/c05f6858346271f0bf8b2680f9ea0102/6c9e0e5f165b47059ec3786844b9ad9e-f713b83613df9f759fe74bb555059a6f-ld.m3u8?hdnts=exp=1766301242_acl=/c05f6858346271f0bf8b2680f9ea0102/*_hmac=7a1f71e3e1817676c3c55b9d8f33a6fa140032559fa6ec7a85bfff389f897972",
  status: []
},
{ // John Wick: Chapter 3 - Parabellum (2019)
  tmdbId: "458156",
  type: "movie",
  playbackUrl: "https://vod-limit-stream.dramasfree.com/50b743b2500b71f0800286c6360c0102/1852e54dbc5e4e6f9fadecb95ea25481-3574ecb5a1a01839ca5ddc5e10458ed0-ld.m3u8?hdnts=exp=1766344603_acl=/50b743b2500b71f0800286c6360c0102/*_hmac=5a9c56fd318a17ba865e83aeab7934b5f0bccbf0915217b07df4fb2d20935a76",
  status: []
},
{ // John Wick: Chapter 4 (2023)
  tmdbId: "603692",
  type: "movie",
  playbackUrl: "https://vod-limit-stream.dramasfree.com/60f2a75c620e71f0bfca5114c1ca0102/9269d4ab98684565802cbad123ad8d9f-7a2096ba32f3756bf4933f8190ca50b3-sd.m3u8?hdnts=exp=1766342467_acl=/60f2a75c620e71f0bfca5114c1ca0102/*_hmac=4a137e422d3a348e9e4a4f882c44746457d6786fcec2cc09b968a8e2d4034ee5",
  status: []
},
{ // Now You See Me (2013)
  tmdbId: "75656",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/502110e1613f71f0bfd05014c1da0102/80f8ca93696042dc8e5e60f00ed7f419-afac948fa7d29f5ecdfcd53ddf4c5d0b-sd.m3u8?hdnts=exp=1766342203_acl=/502110e1613f71f0bfd05014c1da0102/*_hmac=494c438b812416cefba3f8aa3c33e5966ab746f12c9ef2e8627f0611d30143a1",
  status: []
},
{ // Now You See Me 2 (2016)
  tmdbId: "291805",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/20ca0ae1613f71f0bfa55114c0db0102/1a02ba4080b74762bebe112419678de6-9b39e672c999e45d43c53def6fa5d2d7-ld.m3u8?hdnts=exp=1766348632_acl=/20ca0ae1613f71f0bfa55114c0db0102/*_hmac=86475a99cf36bd38e09743cc72d5bcbc8dceeea3a086e7a209a8095ea0640d8b",
  status: []
},
{ // Now You See Me 3 (2025)
  tmdbId: "425274",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/80969a52c10771f09e895114c0db0102/0c7f6fdf4a65a6d2ca28a877329bc461-sd.m3u8?hdnts=exp=1766331805_acl=/80969a52c10771f09e895114c0db0102/*_hmac=4cb2aaf336944d5d60609c62aec956d3ab3a2df058d6cd1d7a9ff7a1ca3d884c",
  status: ['featured']
},
{ // Jurassic Park (1993)
  tmdbId: "329",
  type: "movie",
  playbackUrl: "https://vod-limit-02.playspelis.com/d0d9872a736671f0ae542680f9ea0102/bfc55ff8ff814bc68bc31b89778baf60-1fb1ab081d6dfb838b5e19e9052c256c-sd.m3u8?hdnts=exp=1766311369_acl=/d0d9872a736671f0ae542680f9ea0102/*_hmac=3e0036911bbe017f28b6b9a55a7f9a12093d56cce8c6b0c3ea0d61013bdc0ad5",
  status: []
},
{ // The Lost World: Jurassic Park (1997)
  tmdbId: "330",
  type: "movie",
  playbackUrl: "https://vod-limit-02.playspelis.com/a04e4cbd526371f0988e5114c0db0102/a3719784025840be89c5da666660dede-a2bac32dc36154c46794c77f100a1cd1-ld.m3u8?hdnts=exp=1766344841_acl=/a04e4cbd526371f0988e5114c0db0102/*_hmac=b93f6e5c0a77cbc31d523d8d33fbd5dd67bab0ece2e776b3be258e142758ecbd",
  status: []
},
{ // Jurassic Park III (2001)
  tmdbId: "331",
  type: "movie",
  playbackUrl: "https://data-limit-c.solo-latino.com/5091d9d2685871f0867a36a5e8aa0102/ac79d2914e8d4ca7acb8b82a6fbb3dd6-dbb3a787b2d0806cc001bdc251d45b61-sd.m3u8?hdnts=exp=1766351760_acl=/5091d9d2685871f0867a36a5e8aa0102/*_hmac=dc02a110c359fb005a9063e2bcd6bbe632cac372aed0f71e1721b31add0327f3",
  status: []
},
{ // Jurassic World (2015)
  tmdbId: "135397",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/a099fb56eb8271ef801986c6360c0102/e033b1bdb1264393aa0f6c54cb5d9437-5072d186cff9d552f3e0a7553c6f6b85-ld.m3u8?hdnts=exp=1766351806_acl=/a099fb56eb8271ef801986c6360c0102/*_hmac=41e4b0f718902ae9045ae2a3c9c9de1265fbd9e174769dc0f9455c4a1b9c0f2a",
  status: []
},
{ // Jurassic World: Fallen Kingdom (2018)
  tmdbId: "351286",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/b06e8b64eb8271efadaa97c6360c0102/97927b94c31a4a4baeee855136443811-8e9ee72e45f33fd2ccca75e737383dc5-ld.m3u8?hdnts=exp=1766351856_acl=/b06e8b64eb8271efadaa97c6360c0102/*_hmac=043d74bff5bfc6d4de124828064015e814fe523d122218e7b22328197e0a9467",
  status: []
},
{ // Jurassic World: Dominion (2022)
  tmdbId: "507086",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/e0cc81ec66c771f0bfec87c6371c0102/630566a165b543d0aae33e5e6cdce718-1f310e797edd5e9923eac92846cc1225-sd.m3u8?hdnts=exp=1766326921_acl=/e0cc81ec66c771f0bfec87c6371c0102/*_hmac=48f88f96d2faae69b1b1a198aea348260d57d7b5dc2214e7229e8582555574d5",
  status: []
},
{ // Jurassic World 4 (2025)
  tmdbId: "1234821",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/a06647c778e371f0944786c6360c0102/7729c7f22f38d6814285a32faa20459d-sd.m3u8?hdnts=exp=1766351892_acl=/a06647c778e371f0944786c6360c0102/*_hmac=c517adb8dd0ddc1b73153f7bd65afcd0c87b6bb2beb36050856e87d03632e41f",
  status: ['featured']
},
{ // Harry Potter and the Sorcerer's Stone (2001)
  tmdbId: "671",
  type: "movie",
  playbackUrl: "https://vod-limit-02.playspelis.com/903afb4c41be71f0bff32680f9ea0102/3de29655f1be4a509db33126f17deef4-5684bbf5caa1ea6c3d36a87071929970-ld.m3u8?hdnts=exp=1766324278_acl=/903afb4c41be71f0bff32680f9ea0102/*_hmac=d290932fb80b64ee1da59bf6d40c0ea3c250fb9096dc89c27ec241542251eacd",
  status: []
},
{ // Harry Potter and the Chamber of Secrets (2002)
  tmdbId: "672",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/c0a4a9977ca971f0800436a5e8aa0102/7a2e42628aa3f422ff8ad0115e36e6db-ld.m3u8?hdnts=exp=1766323098_acl=/c0a4a9977ca971f0800436a5e8aa0102/*_hmac=0bc38e63b7a374c0e23e65a38facd7fd725e3e862b67bf6afa22916bf2938082",
  status: []
},
{ // Harry Potter and the Prisoner of Azkaban (2004)
  tmdbId: "673",
  type: "movie",
  playbackUrl: "https://vod-limit-02.playspelis.com/3082b1fd475071f0bff95014c1ca0102/b67a809180764eb7be3afc73cc6b8645-617dadd082fa7dc192839a0a925fcc01-sd.m3u8?hdnts=exp=1766345610_acl=/3082b1fd475071f0bff95014c1ca0102/*_hmac=c5c47978bfae2d4360fdf9e13efbd7294168187fd88b0564b5b0bf9f86335741",
  status: []
},
{ // Harry Potter and the Goblet of Fire (2005)
  tmdbId: "674",
  type: "movie",
  playbackUrl: "https://stream-limit-vid.321moviesfree.com/b0f057b1475871f0906587c7371d0102/6e90a23cf0554fc7ae76de8b3c64e348-0de7450b177e3facd2e6a44b95aadcdc-sd.m3u8?hdnts=exp=1766313473_acl=/b0f057b1475871f0906587c7371d0102/*_hmac=a2c4b7fa88231ac198a952fd2680ebacc4a2064da4f74cc0905e4a2bacb372c0",
  status: []
},
{ // Harry Potter and the Order of the Phoenix (2007)
  tmdbId: "675",
  type: "movie",
  playbackUrl: "https://vod-limit-02.playspelis.com/10797d40476171f0bfa087c7361c0102/d07b4d1addb142b5b41b82c0cd6a85ba-6dae30484d1e2e959b6a41d7e8fd4833-ld.m3u8?hdnts=exp=1766344698_acl=/10797d40476171f0bfa087c7361c0102/*_hmac=80c028c94513f46dad0481e267c6eb2c787e7086fc2fb828795c6b18f810cbc7",
  status: []
},
{ // Harry Potter and the Half-Blood Prince (2009)
  tmdbId: "767",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/d0651d3b481971f0bfa487c7361c0102/58daa22a6a8e4b77979fd559b78225f3-3cd475a1c48d9cb8d50a2f28eb0ed881-sd.m3u8?hdnts=exp=1766340564_acl=/d0651d3b481971f0bfa487c7361c0102/*_hmac=8c1a32aba04f822d5d0d59b5e35ba8b3af1264d2ff9eb47146a066391525f194",
  status: []
},
{ // Harry Potter and the Deathly Hallows: Part 1 (2010)
  tmdbId: "12444",
  type: "movie",
  playbackUrl: "https://vod-limit-02.playspelis.com/1024420e476571f0bfa087c7361c0102/b33a21469d6a49acaf22ba542900bdc8-30cb5921eb4daac5473d3c13c4f283f7-ld.m3u8?hdnts=exp=1766328049_acl=/1024420e476571f0bfa087c7361c0102/*_hmac=efe1f0ffe86f7e4e5627b4b9860ea1f30caa0d3151fb0662c5844aae7fd035e3",
  status: []
},
{ // Harry Potter and the Deathly Hallows: Part 2 (2011)
  tmdbId: "12445",
  type: "movie",
  playbackUrl: "https://vod-limit.cuevanalatino.net/405615f22a4571f094794177d0d10102/9d8255b19fe5457b9bfa4a03b143bc8c-dd34ae1a0c8d99349176ff2008b4a991-sd.m3u8?hdnts=exp=1766346773_acl=/405615f22a4571f094794177d0d10102/*_hmac=5caf8f47def21671ad12075e5cc80ea7f965189a63129905a6c21320f8b27aaf",
  status: []
},
{ // How to Train Your Dragon (2010)
  tmdbId: "10191",
  type: "movie",
  playbackUrl: "https://vod-limit.cuevanalatino.net/603323f82b0671f0bff55014c1da0102/7a86c247785a41ab8ca9633f7b43d45c-3c94050e01bbbd36f330ee9510722895-ld.m3u8?hdnts=exp=1766344755_acl=/603323f82b0671f0bff55014c1da0102/*_hmac=d3d01540c9ee2df7a5614a3e92a87565f5588156bd4b684ccd6fb3dd560d1cdd",
  status: []
},
{ // How to Train Your Dragon 2 (2014)
  tmdbId: "82702",
  type: "movie",
  playbackUrl: "https://vod-limit.cuevanalatino.net/802732f82b0671f0bff55014c1da0102/cfc466df7ea742569234936687b898df-14055ceee4085fd5a277868e535837d8-ld.m3u8?hdnts=exp=1766348972_acl=/802732f82b0671f0bff55014c1da0102/*_hmac=1202298218c0c8886a650359a279b9e4e719f1e2632ab94c650dda60ab48d649",
  status: []
},
{ // How to Train Your Dragon: The Hidden World (2019)
  tmdbId: "166428",
  type: "movie",
  playbackUrl: "https://vod-limit.cuevanalatino.net/702e54f82b0671f0bff55014c1da0102/e69b24bcbb904fab829b2c837d6fd67c-cb4ca98cc9052dd9047c0818e6052525-sd.m3u8?hdnts=exp=1766339440_acl=/702e54f82b0671f0bff55014c1da0102/*_hmac=40930189de3d7bc48d8b77d940acdde742746784a0b8b2e3b21825a38da68d57",
  status: []
},
{ // The Lord of the Rings: The Fellowship of the Ring (2001)
  tmdbId: "120",
  type: "movie",
  playbackUrl: "https://r-limit.flixlat.com/f049478affc671ef86444177d1c00102/7b40f629387045c98095a84546a54889-8e8f463ef8fe92c9ba0d6c8692750ac9-sd.m3u8?hdnts=exp=1766344092_acl=/f049478affc671ef86444177d1c00102/*_hmac=323644bd9ab3cd76c9a310625b02644bb0fa56057502f64f11e92846b98b89a6",
  status: []
},
{ // The Lord of the Rings: The Two Towers (2002)
  tmdbId: "121",
  type: "movie",
  playbackUrl: "https://r-limit.flixlat.com/40f93cc8ffd971ef96652680f9ea0102/bfa9ec60a1eb44289c51d247edf8bb3d-5043c2d9ce6f573d79a79b2d0cc967da-ld.m3u8?hdnts=exp=1766340477_acl=/40f93cc8ffd971ef96652680f9ea0102/*_hmac=2b6ad989f21b9647cad38fca276c90bedd1057d10b7485ee45237901e39305e0",
  status: []
},
{ // The Lord of the Rings: The Return of the King (2003)
  tmdbId: "122",
  type: "movie",
  playbackUrl: "https://r-limit.flixlat.com/607552b0ffcc71efa25436a5e8aa0102/cddcfb58422549039a832e0047f682e0-f71adc3540d34cf6e0aa2a7ec9d66f1f-ld.m3u8?hdnts=exp=1766337253_acl=/607552b0ffcc71efa25436a5e8aa0102/*_hmac=90b6705e1719aac4570df359fb7c36b0f132ea5c8b30dccdfcd0563be1471ae7",
  status: []
},
{ // Deadpool (2016)
  tmdbId: "293660",
  type: "movie",
  playbackUrl: "https://vod-limit.cuevanalatino.net/60850308679271f0bfe85114c0db0102/93965095efc249f09540220c7476aaa2-f2039b455b83086948650aa50c1f5b77-ld.m3u8?hdnts=exp=1766346065_acl=/60850308679271f0bfe85114c0db0102/*_hmac=39e1f45f6d8e46ea0406a05145a0f3c02811c780597af48b50c8a336a774d68c",
  status: []
},
{ // Deadpool 2 (2018)
  tmdbId: "383498",
  type: "movie",
  playbackUrl: "https://data-limit-c.solo-latino.com/8038fdb14cd671f0bfd297c6360c0102/30ebc9c9846f4c2e9380e4fadd8ee9e7-6e7a6e60b6aeabf132f944ad8b56b8b2-ld.m3u8?hdnts=exp=1766352551_acl=/8038fdb14cd671f0bfd297c6360c0102/*_hmac=a8298785190a97060f46af6315b8164b80af48666771c4513a7e5c29b9b7c4d1",
  status: []
},
{ // Venom (2018)
  tmdbId: "335983",
  type: "movie",
  playbackUrl: "https://vod-limit-stream.dramasfree.com/b0f8006d1c3571f0b40f5014c1da0102/6ca2acbcf5124287833dbac55bb5d432-83476c1cf4908a516e6dc4ccdcb064ec-sd.m3u8?hdnts=exp=1766352699_acl=/b0f8006d1c3571f0b40f5014c1da0102/*_hmac=0796f8fb33b7bf8c805a8c743eccbfdfc44346fafccddbdfdd844ee5b2ec1faa",
  status: []
},
{ // Venom: Let There Be Carnage (2021)
  tmdbId: "580489",
  type: "movie",
  playbackUrl: "https://delivery-limit-c.123pelicula.com/806b75aee92471ef801086c6360c0102/7dabf6a7b2d04091b829c99374607b84-a880787aa6f275c77e1447167cb5dddf-ld.m3u8?hdnts=exp=1766344700_acl=/806b75aee92471ef801086c6360c0102/*_hmac=b2b3c1aed73ed25f74b9ac368d3b2538db1a0bbd61c199aad48cf4eb62909ad7",
  status: []
},
{ // Venom: The Last Dance (2024)
  tmdbId: "912649",
  type: "movie",
  playbackUrl: "https://delivery-limit-c.123pelicula.com/2046e299620f71f094314177d1c10102/102deee7ee0f44ea8b7f27fa027bdbb4-25d3ab4242b9450324e5dc933de59893-sd.m3u8?hdnts=exp=1766349168_acl=/2046e299620f71f094314177d1c10102/*_hmac=3ccc5973f522098db1aef3d3911087ab29cbda94fbf0d5b1961bd4d3ffa023c2",
  status: []
},
{ // Batman Begins (2005)
  tmdbId: "272",
  type: "movie",
  playbackUrl: "https://stream-limit-vid.321moviesfree.com/900fedcf025971f0a0af5014c1da0102/2c1d4c6a56cc42fe9e20276c993642c3-c7d304c766b10ad96561c88b5b6338aa-sd.m3u8?hdnts=exp=1766332647_acl=/900fedcf025971f0a0af5014c1da0102/*_hmac=ed7642b543c7d665416bd882a704da97c87a0b92a2b56694474db1034bd1e080",
  status: []
},
{ // The Dark Knight (2008)
  tmdbId: "155",
  type: "movie",
  playbackUrl: "https://stream-limit-vid.321moviesfree.com/c05c46ca00a871f0801087c7371d0102/a1ccdf9996244bb692acb716368c1b30-a2e4b416d4e1053081b7b7e65bf11037-sd.m3u8?hdnts=exp=1766326226_acl=/c05c46ca00a871f0801087c7371d0102/*_hmac=7fa93cd1834f475bb2dd5158c20ecec9103dac761186f8014ea523cac2162e6f",
  status: []
},
{ // The Dark Knight Rises (2012)
  tmdbId: "49026",
  type: "movie",
  playbackUrl: "https://stream-limit-vid.321moviesfree.com/f0f23dd4023471f086454177d1c00102/8be06d8409c947e58b0237f2bfa489a3-b8d55f9891a9a4ca8ca36bc12daa402c-ld.m3u8?hdnts=exp=1766326231_acl=/f0f23dd4023471f086454177d1c00102/*_hmac=3f626ff172b5707a9fa21faf27f814e0bd9bfab305fa0b7e2c92aa8180190068",
  status: []
},
{ // Man of Steel (2013)
  tmdbId: "49521",
  type: "movie",
  playbackUrl: "https://media-limit-xr8a2.peliculaplay.com/200084c400ae71f0801187c6371c0102/2a958a84f1f046e385eaea6cdcb38a6f-5ee6884dcc09cb1eb52bc4ce18b07ab2-sd.m3u8?hdnts=exp=1766321568_acl=/200084c400ae71f0801187c6371c0102/*_hmac=bd1a150590444e6de0bb3818ab09116d85940c64af106228a9293ca3e32a34d3",
  status: []
},
{ // Batman v Superman: Dawn of Justice (2016)
  tmdbId: "209112",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/e01c83c3025971f0a25836a5e8aa0102/c248fd70994741bb9dbac3eddfa0028e-c0b78525b06ac6a0cd278d1f46a9cbcb-ld.m3u8?hdnts=exp=1766327965_acl=/e01c83c3025971f0a25836a5e8aa0102/*_hmac=a35e2b841c73e47a4a95aec878818320ec40f43accc0a93fd1477ff244060669",
  status: []
},
{ // Suicide Squad (2016)
  tmdbId: "297761",
  type: "movie",
  playbackUrl: "https://r-limit.flixlat.com/20ce8d23023a71f0b1ab5014c1ca0102/6d58f959e68c485ab089b2adf19a5918-977798cbaa97044b43b39eb160c86148-sd.m3u8?hdnts=exp=1766303770_acl=/20ce8d23023a71f0b1ab5014c1ca0102/*_hmac=2b2a8f4d585ea85254272597f7c035ef32b8a0ab01e6c6edf32bb81e09e862e0",
  status: []
},
{ // Wonder Woman (2017)
  tmdbId: "297762",
  type: "movie",
  playbackUrl: "https://vod-limit-res.cuevana.life/70f386eaffde71efbfc686c6360c0102/d271852c4ba34ca4849475b312aa0c92-064c1aff0e15cd2242c53f1bdbd7488d-sd.m3u8?hdnts=exp=1766340178_acl=/70f386eaffde71efbfc686c6360c0102/*_hmac=b79a254e611e7ccd27ed5216e30dc5dce1b62a188b9910b3b6fc5befbab6f68d",
  status: []
},
{ // Justice League (2017)
  tmdbId: "141052",
  type: "movie",
  playbackUrl: "https://vod-limit-stream.dramasfree.com/70b0fd9a019471f0801487c6371c0102/bce04447c83a4f558e6e800fa20bbeaf-0162217945f6fad8a76436e6c48ccbc6-sd.m3u8?hdnts=exp=1766345474_acl=/70b0fd9a019471f0801487c6371c0102/*_hmac=750f71798c6d91003d0e10da4987a4438beeefa7f78aa305dba8f3a165b84392",
  status: []
},
{ // Aquaman (2018)
  tmdbId: "297802",
  type: "movie",
  playbackUrl: "https://vod-limit-res.cuevana.life/3097ca4cffdf71ef80265114c0db0102/2c8a48efed5f4f34aa6d27f7c6a442c1-66d5542a03c68e302f5be9ab66b01904-ld.m3u8?hdnts=exp=1766345520_acl=/3097ca4cffdf71ef80265114c0db0102/*_hmac=8fdbe377123ba89a0e6567246ecf9e1575f6d85b09378a24d54d18a0c62c2330",
  status: []
},
{ // Shazam! (2019)
  tmdbId: "287947",
  type: "movie",
  playbackUrl: "https://media-limit-xr8a2.peliculaplay.com/706a0943025d71f099444177d0d10102/bbeb42e937c54bda91349a0c348bd397-98bfb5d66e2ef122a0db781a315936db-sd.m3u8?hdnts=exp=1766317985_acl=/706a0943025d71f099444177d0d10102/*_hmac=c69d341675bab92fa85e7e85d38f75837c27550156659be5a0c59089a7c56a44",
  status: []
},
{ // Birds of Prey (2020)
  tmdbId: "495764",
  type: "movie",
  playbackUrl: "https://r-limit.flixlat.com/20152aa1017071f0bfc986c6360c0102/cd2b0830db7646058b203c47d9b628bf-4e45bc855459c3bf244a80705651ca69-sd.m3u8?hdnts=exp=1766328081_acl=/20152aa1017071f0bfc986c6360c0102/*_hmac=211d6a2e30835663110211c3af692d5bc0742e348bf81d56e0390456f94aaf54",
  status: []
},
{ // Wonder Woman 1984 (2020)
  tmdbId: "464052",
  type: "movie",
  playbackUrl: "https://vod-limit-res.cuevana.life/f098b1bfffdc71efbfbf4177d1c10102/93fe8b0e8b1442de9c1f330ab1a51b0a-67f23e12363391bb0eb22978604fd031-sd.m3u8?hdnts=exp=1766341739_acl=/f098b1bfffdc71efbfbf4177d1c10102/*_hmac=b4052eb7163245cc63a027b79376465b0f5622263391e7a3e5b089e8a9c78336",
  status: []
},
{ // Zack Snyder's Justice League (2021)
  tmdbId: "791373",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/903c8fd8046171f0bffd87c6371c0102/19188bad8a544cedbe46f3ad3b024859-e22b78681eb2adf3a3d88a7e334edea4-ld.m3u8?hdnts=exp=1766345832_acl=/903c8fd8046171f0bffd87c6371c0102/*_hmac=d68f4f25847196146b0a2741d9427f397e297eb29b3fdbbd202d9c1f85f1d477",
  status: []
},
{ // The Suicide Squad (2021)
  tmdbId: "436969",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/b0d4081fffe971efbfc65114c1ca0102/fc62bd461a5c4fbb95d85884c727c712-64a3b17d3318cdaaa007e2d0bb409fba-ld.m3u8?hdnts=exp=1766345248_acl=/b0d4081fffe971efbfc65114c1ca0102/*_hmac=cc9582d997df5b869959902837b410ab0b297257d7ae6febfae204981a1cab6c",
  status: []
},
{ // The Batman (2022)
  tmdbId: "414906",
  type: "movie",
  playbackUrl: "https://stream-limit-vid.321moviesfree.com/500df22a00a771f086444177d1c00102/0521f9f727e7462cbc8fff02409beef1-6b967ce17a11a14208e326955c81350c-sd.m3u8?hdnts=exp=1766343505_acl=/500df22a00a771f086444177d1c00102/*_hmac=9d1ede4dcf6f29bbbb6d66d0f07f04a8312265fca5cd02ede62df967047283c6",
  status: []
},
{ // Black Adam (2022)
  tmdbId: "436270",
  type: "movie",
  playbackUrl: "https://stream-limit-vid.321moviesfree.com/20a0e93300a871f099434177d0d10102/ce6bf80e8efa49f5a9545b795c13a5ba-77df297d19160e4fa655ea7104385094-sd.m3u8?hdnts=exp=1766327718_acl=/20a0e93300a871f099434177d0d10102/*_hmac=4f85703361dcd4e68124dc58fa7207cc7398c7aca788de0a3afdc22af3d840b9",
  status: []
},
{ // Shazam! Fury of the Gods (2023)
  tmdbId: "594767",
  type: "movie",
  playbackUrl: "https://media-limit-xr8a2.peliculaplay.com/a024ce93025d71f0955b87c7361c0102/a0b42e7af00f4248b5fa57222c8c935a-055a9dfc7f5dc5722f031bd132ae8ad2-sd.m3u8?hdnts=exp=1766329625_acl=/a024ce93025d71f0955b87c7361c0102/*_hmac=9f54d43ebcd32c75836a57933e5aab9b1b3624ea5672009463db2b7a61af0f23",
  status: []
},
{ // The Flash (2023)
  tmdbId: "298618",
  type: "movie",
  playbackUrl: "https://vod-limit.cuevanalatino.net/6024d380ffd671ef955887c7361c0102/6c2b5a8935fb49b99082b947b9f5e590-e0313a9a3e11837ae7843b73cbc02476-sd.m3u8?hdnts=exp=1766325441_acl=/6024d380ffd671ef955887c7361c0102/*_hmac=deb47f876b5d6d25872decfcbb31085fda9e98bf89a1423b959c3bbf03bccbc9",
  status: []
},
{ // Blue Beetle (2023)
  tmdbId: "565770",
  type: "movie",
  playbackUrl: "https://media-limit-xr8a2.peliculaplay.com/50b309b8016a71f0955b87c7361c0102/b056bab59e974417a75d3c6a95418d44-78b08e9803347f09cf9538959e42ee74-sd.m3u8?hdnts=exp=1766329021_acl=/50b309b8016a71f0955b87c7361c0102/*_hmac=dc61210da230f250bb3dd5153889e31068bf0d584fcba3a307cb5b89e6c46648",
  status: []
},
{ // Aquaman and the Lost Kingdom (2023)
  tmdbId: "572802",
  type: "movie",
  playbackUrl: "https://stream-limit-vid.321moviesfree.com/20838329683771f0a02587c6371c0102/1ddcedf989154e2b895e844382b5d619-4c74ab40eda5ab63fa9766304304625b-sd.m3u8?hdnts=exp=1766337836_acl=/20838329683771f0a02587c6371c0102/*_hmac=056a0066b158675a4f1808f0b046b20d4bfedd4eceb446865b556d026a5be602",
  status: []
},
{ // Joker (2019)
  tmdbId: "475557",
  type: "movie",
  playbackUrl: "https://data-limit-c.solo-latino.com/70063f5f2f1571f0b71a5014c1ca0102/4ee44e06454a4e79992b4c0d565e5c9d-f56cc0e7cdda41afcad50146f57feb42-sd.m3u8?hdnts=exp=1766319234_acl=/70063f5f2f1571f0b71a5014c1ca0102/*_hmac=85aa0c6fb01239d79de635bc385fa6cecbb40aa5c4a19e95d6605d5799cd91ca",
  status: []
},
{ // Joker: Folie à Deux (2024)
  tmdbId: "889737",
  type: "movie",
  playbackUrl: "https://delivery-limit-c.123pelicula.com/108284fea87d71ef80115114c0db0102/606290e4df414537a62d419d3c0279e7-fb89cf666110b8ea29e95d0fd108e605-sd.m3u8?hdnts=exp=1766326906_acl=/108284fea87d71ef80115114c0db0102/*_hmac=d02929e2dd74e3f436a562146e8a6e2283b216364ed8e9b08698e76b29b5603e",
  status: []
},
{ // Superman (2025)
  tmdbId: "1061474",
  type: "movie",
  playbackUrl: "https://stream-limit-vid.321moviesfree.com/10c01edb8d2471f0800b4177d1c00102/c156a285f3c3f50fa51e2a411472c2c0-sd.m3u8?hdnts=exp=1766323109_acl=/10c01edb8d2471f0800b4177d1c00102/*_hmac=437ae5ff5320b66f175c7ef153cae3734c32c6f30855f812e92136aefdd0ea43",
  status: []
},
{ // Iron Man (2008)
  tmdbId: "1726",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/90720646678e71f0949e97c6360c0102/1a5d78d32235403f9c0968f94c87962d-d00f78837f33a9bc356bc5cd7b71c3a2-ld.m3u8?hdnts=exp=1766310650_acl=/90720646678e71f0949e97c6360c0102/*_hmac=1f08c97710464bc9e193b5f622edf7bb5b7dd5d09a8b3a086318a845b3c654e4",
  status: []
},
{ // The Incredible Hulk (2008)
  tmdbId: "1724",
  type: "movie",
  playbackUrl: "https://data-limit-c.solo-latino.com/00662a46316f71f0a5155014c1ca0102/e314f4efcb26460987d2f65635b102aa-6f9e1bea71016501c5bf3a90e4a4664c-sd.m3u8?hdnts=exp=1766305507_acl=/00662a46316f71f0a5155014c1ca0102/*_hmac=1bbba55f971b5ac3d3c869cad3b46a43ffd5d95d90e7c5b9661a01e85cd922ec",
  status: []
},
{ // Iron Man 2 (2010)
  tmdbId: "10138",
  type: "movie",
  playbackUrl: "https://vod-limit-res.cuevana.life/20092851480571f0bfb22680f9ea0102/50b785464a76496d8cd2788602c14478-617a380a4b18cedab285b76e9699dc12-sd.m3u8?hdnts=exp=1766338161_acl=/20092851480571f0bfb22680f9ea0102/*_hmac=7dd364184d4739a886c84620c34728494413d28c859098033a03be9bd2a0d7d6",
  status: []
},
{ // Thor (2011)
  tmdbId: "10195",
  type: "movie",
  playbackUrl: "https://vod-limit-02.playspelis.com/80451b751c2371f0a1895114c0db0102/f5d81c55cbdc47eda6e2fe77965ec972-b4f7cd99454837da62d7e58545c80020-sd.m3u8?hdnts=exp=1766310831_acl=/80451b751c2371f0a1895114c0db0102/*_hmac=ef79f7308b386fdff34946d4ced7d1562e60755c179548b86efd62d8d6b719cd",
  status: []
},
{ // Captain America: The First Avenger (2011)
  tmdbId: "1771",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/80a0045f0c6e71f0913a5014c1da0102/0ca141234bfd4f1b981f8c11f5024ae6-d176ee989380c71fce0f38bc5e5060d2-sd.m3u8?hdnts=exp=1766338401_acl=/80a0045f0c6e71f0913a5014c1da0102/*_hmac=c61ebe40863038e13193d46b4c16266f35ee50d051356d5dd9db1b3632c88c15",
  status: []
},
{ // The Avengers (2012)
  tmdbId: "24428",
  type: "movie",
  playbackUrl: "https://vod-limit.cuevanalatino.net/6004b4b6240671f0bfef87c7361c0102/265f10cf3e0a4b70a30c77927591d106-61649e8a2ae5e466ddaeca83406d6e0d-sd.m3u8?hdnts=exp=1766320658_acl=/6004b4b6240671f0bfef87c7361c0102/*_hmac=796c9b25954280dabf94bfd060f3f8bdfa7e2e78dee87685987edfb92700a798",
  status: []
},
{ // Iron Man 3 (2013)
  tmdbId: "68721",
  type: "movie",
  playbackUrl: "https://vod-limit-res.cuevana.life/90b398c7767571f0bfe04177d1c00102/0474e61f5d3edee193eb0534de3fc5f9-ld.m3u8?hdnts=exp=1766335762_acl=/90b398c7767571f0bfe04177d1c00102/*_hmac=e9693d78a1adaac6033818581bbaf9777a735999bad21bba728dd94a80ba4c00",
  status: []
},
{ // Thor: The Dark World (2013)
  tmdbId: "76338",
  type: "movie",
  playbackUrl: "https://vod-limit-stream.dramasfree.com/908a16751c2371f0bfa187c7361c0102/a764c07525d1485baf058b8c352703b9-40f335d31569d805481141b887bddaaa-sd.m3u8?hdnts=exp=1766328022_acl=/908a16751c2371f0bfa187c7361c0102/*_hmac=e716097d3c6b2d5a49f6d7b7e7e4a118c137e3b8ad374ce7ae7cdd4086962773",
  status: []
},
{ // Captain America: The Winter Soldier (2014)
  tmdbId: "100402",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/50eb1d940c6e71f09e8c4177d1c10102/28489eb492584a949cc96148328c00ee-75ec9ccf018bb948de68018c349fa9aa-ld.m3u8?hdnts=exp=1766338437_acl=/50eb1d940c6e71f09e8c4177d1c10102/*_hmac=040906ed596e2918c33b46e66c534fff5be3e43d343b5f01dfb312d9bca681b6",
  status: []
},
{ // Guardians of the Galaxy (2014)
  tmdbId: "118340",
  type: "movie",
  playbackUrl: "https://data-limit-c.solo-latino.com/f001a5f00d3c71f085895114c1ca0102/8e9d857c30c1461e8b402638b5c76e8b-e2f59b2e4d1063d56c5b644c54e70bd5-sd.m3u8?hdnts=exp=1766320693_acl=/f001a5f00d3c71f085895114c1ca0102/*_hmac=ac3bf08fd6578c94d64232afb5fae33005cbc4874712f6e3aa45b505270d43b3",
  status: []
},
{ // Avengers: Age of Ultron (2015)
  tmdbId: "99861",
  type: "movie",
  playbackUrl: "https://vod-limit.cuevanalatino.net/50c250e3686d71f0b7325014c1ca0102/fe9c9489b09a4eda91687510d0dca70c-45c705a86e870b8d82771134b4273731-ld.m3u8?hdnts=exp=1766318224_acl=/50c250e3686d71f0b7325014c1ca0102/*_hmac=da7891296ce04e04b3c8903648ed74b50496e0b7566aefc06a3fc34b813faa93",
  status: []
},
{ // Ant-Man (2015)
  tmdbId: "102899",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/806ef6960e1571f080085014c1ca0102/401212b7b968420b82fa24714322c6e4-701beab7316d4b5cab5b085ae31b70d7-sd.m3u8?hdnts=exp=1766338790_acl=/806ef6960e1571f080085014c1ca0102/*_hmac=98063e25335bc931ea5e5e22fb51de04e5c6b59f09b448c823778328ae5ccb07",
  status: []
},
{ // Captain America: Civil War (2016)
  tmdbId: "271110",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/d0b52509686471f0bf955014c1da0102/e928aec1b2c7448fbd49f86a107e1445-79473d7b42402b7b65a186cd3ffd652b-sd.m3u8?hdnts=exp=1766338451_acl=/d0b52509686471f0bf955014c1da0102/*_hmac=9d6b06fbf71fe99fcc1171de46b63478386e99be62ce1765467d6a0b42c63c33",
  status: []
},
{ // Doctor Strange (2016)
  tmdbId: "284052",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/606788b40c8471f0ba3486c6360c0102/79997b6f4426432a82ef9a2545d627b1-6f27a4f8cea042e91f020c87f9349870-sd.m3u8?hdnts=exp=1766338901_acl=/606788b40c8471f0ba3486c6360c0102/*_hmac=35e13d5adfd0ae4be9e762a81db64d3a40ba254a752fa160005f73e751a0ee69",
  status: []
},
{ // Guardians of the Galaxy Vol. 2 (2017)
  tmdbId: "283995",
  type: "movie",
  playbackUrl: "https://data-limit-c.solo-latino.com/b0507cd80d3c71f0bfa836a5e8aa0102/6be09c3de5c54ca782f3846c51416ff5-c2f5d9b533aaba0b953a3527b36c0acf-ld.m3u8?hdnts=exp=1766322146_acl=/b0507cd80d3c71f0bfa836a5e8aa0102/*_hmac=6639f68569e3c80610a5467c7ed05aa88ecafdca51e9d6c1ee4a8121a033f2af",
  status: []
},
{ // Spider-Man: Homecoming (2017)
  tmdbId: "315635",
  type: "movie",
  playbackUrl: "https://r-limit.flixlat.com/50024da91f4b71f0bffd4177d0d10102/73669720362c489596b3549dc823c148-15cbb6fd9786aee5c879e9d3e1b0b755-ld.m3u8?hdnts=exp=1766323215_acl=/50024da91f4b71f0bffd4177d0d10102/*_hmac=b285243334e475cebbf59d68f272553b0ef547cad74a5fc8259f6875742793e3",
  status: []
},
{ // Thor: Ragnarok (2017)
  tmdbId: "284053",
  type: "movie",
  playbackUrl: "https://vod-limit-02.playspelis.com/70a094884b3f71f0bfc55114c0db0102/3be68ebe2e5e44ffa52d841c53be82bf-838a0134b7873b2e67e30179d737d58d-ld.m3u8?hdnts=exp=1766333243_acl=/70a094884b3f71f0bfc55114c0db0102/*_hmac=b02001340f93dcd55539d4f812d8747f897aae29aa57eba9ba42b0278e3c4174",
  status: []
},
{ // Black Panther (2018)
  tmdbId: "284054",
  type: "movie",
  playbackUrl: "https://media-limit-xr8a2.peliculaplay.com/600d47e80c4671f09e8c4177d1c10102/b053e0bf86d848de882e72374d37e681-2a8710e74e1deec5f965885ba7bf7c1f-sd.m3u8?hdnts=exp=1766318912_acl=/600d47e80c4671f09e8c4177d1c10102/*_hmac=aec76e2db2a97ddcf7a816402235fe3af07de7d1b585a3dde23e194916012a60",
  status: []
},
{ // Avengers: Infinity War (2018)
  tmdbId: "299536",
  type: "movie",
  playbackUrl: "https://vod-limit-02.playspelis.com/401ff492620b71f0b1802680f9ea0102/8be48ac6f88940e5a557533a4a2dffc3-dd85e86f7403ecb98ecb1b9fb6ae594c-sd.m3u8?hdnts=exp=1766334939_acl=/401ff492620b71f0b1802680f9ea0102/*_hmac=f55bee2e5f63bdf7f386f7c8a67cb5876211edd1ba227e4e304ef276f7ed1b97",
  status: []
},
{ // Ant-Man and the Wasp (2018)
  tmdbId: "363088",
  type: "movie",
  playbackUrl: "https://delivery-limit-c.123pelicula.com/80818d650e1571f08e492680f9ea0102/67fa5f70d0dc49bc97b6f1e28228bdd1-03efddedca26a2a52a19d5d49bd346f5-ld.m3u8?hdnts=exp=1766338824_acl=/80818d650e1571f08e492680f9ea0102/*_hmac=be16a21ab1f54e2ec3c0672f25f73f780d1ef48549856bd621c743fe9d0c68b5",
  status: []
},
{ // Captain Marvel (2019)
  tmdbId: "299537",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/8028185f0c6e71f0bfa536a5e8aa0102/df1f6e9173d744d698f4d63911b615af-9418e7609fb87cf1317267bef5c69e2b-ld.m3u8?hdnts=exp=1766333502_acl=/8028185f0c6e71f0bfa536a5e8aa0102/*_hmac=c2775e2e46d2d9f355ef59cfeba80cf97d7e8baaa5380e3db7f4f567b8f9b01a",
  status: []
},
{ // Avengers: Endgame (2019)
  tmdbId: "299534",
  type: "movie",
  playbackUrl: "https://r-limit.flixlat.com/a04e3268637b71f0bfce5114c1ca0102/8205a27f3bf9419d8c41630d8f3f3bdc-9965c5f5b41d315318069fc91a5704e6-ld.m3u8?hdnts=exp=1766338652_acl=/a04e3268637b71f0bfce5114c1ca0102/*_hmac=45ee949038ee5113c2bd1ed49e2a42d56f2a6a4ae4365242ee068e9ae2a4ceb4",
  status: []
},
{ // Spider-Man: Far From Home (2019)
  tmdbId: "429617",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/40e50e704fd871f0bc2d87c7361c0102/7774bc415ef2424a8db1eb4db954e15e-dc657d51a3275f67521c15bca78dae08-sd.m3u8?hdnts=exp=1766321702_acl=/40e50e704fd871f0bc2d87c7361c0102/*_hmac=22437e8fa9da349b0f5571c19774106b93e92a86ddf14daf10fcf1243944507b",
  status: []
},
{ // Black Widow (2021)
  tmdbId: "497698",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/70e8df8e0c4971f09e8c4177d1c10102/e4452146e3cc4e189f6047b2f47ba800-2e50dc097a4dae6bdad178fd153532a6-sd.m3u8?hdnts=exp=1766339440_acl=/70e8df8e0c4971f09e8c4177d1c10102/*_hmac=408b9f5f3095a8a4a912e7d57048ed0e74d30692afc4c85fc0af7eb076e7ec4e",
  status: []
},
{ // Shang-Chi and the Legend of the Ten Rings (2021)
  tmdbId: "566525",
  type: "movie",
  playbackUrl: "https://delivery-limit-c.123pelicula.com/a0812799202471f0bfd45014c1da0102/2daf5abf72e74a70a8c3dc2c3dd63d60-d87c89c4f953651772d4f3aed985bbed-sd.m3u8?hdnts=exp=1766322052_acl=/a0812799202471f0bfd45014c1da0102/*_hmac=6baaf3121566848f906693923026cd910613bd6e6b6c512b714a7fc249a6970e",
  status: []
},
{ // Eternals (2021)
  tmdbId: "524434",
  type: "movie",
  playbackUrl: "https://media-limit-xr8a2.peliculaplay.com/d07152df0d3771f0bfc087c7371d0102/ee8fd5798d604e8a85d0d20fefc30487-fd9e493a5c3aa3cddc64f46bb7028c20-sd.m3u8?hdnts=exp=1766318393_acl=/d07152df0d3771f0bfc087c7371d0102/*_hmac=831f39a5be13ce1196e1b53812fa06f815378cdabe94d14187113beae5c2ab48",
  status: []
},
{ // Spider-Man: No Way Home (2021)
  tmdbId: "634649",
  type: "movie",
  playbackUrl: "https://r-limit.flixlat.com/5049aee4ec5471ef803c5014c1da0102/6d50768eb9ab46caa66ee2b8bb157d7b-2f54f03bc0512135e6036389e683fdf3-ld.m3u8?hdnts=exp=1766335274_acl=/5049aee4ec5471ef803c5014c1da0102/*_hmac=39fcad14be349ae0180a4ccf64a60f263fd40b5bda92e0313d8ddc7eea9e5a55",
  status: []
},
{ // Doctor Strange in the Multiverse of Madness (2022)
  tmdbId: "453395",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/405ebbb40c8471f0bfc24177d0d10102/d0e83320f9094ea5b7e8b33f29ffbc79-08ced09063d63f3de33a56194d25850c-sd.m3u8?hdnts=exp=1766338935_acl=/405ebbb40c8471f0bfc24177d0d10102/*_hmac=25260b4a6bee701556305f0d88ea26694776c5376d559df69dcdb4092755c01a",
  status: []
},
{ // Thor: Love and Thunder (2022)
  tmdbId: "616037",
  type: "movie",
  playbackUrl: "https://vod-limit-02.playspelis.com/c0692f751c2371f0b22d5014c1ca0102/f0ae21e220794ac3b52fc5e735d4a34b-e77959824864742949cd01d4f4c83a92-sd.m3u8?hdnts=exp=1766327555_acl=/c0692f751c2371f0b22d5014c1ca0102/*_hmac=5a93e35b4d742e295f5ead6a98d46a5637f4f9186e4734a7d036b2a2f742d276",
  status: []
},
{ // Black Panther: Wakanda Forever (2022)
  tmdbId: "505642",
  type: "movie",
  playbackUrl: "https://media-limit-xr8a2.peliculaplay.com/806974e80c4771f0ba3386c6360c0102/02654674153845a0a0716da66dfee750-9cc5f837dcbe2151fca90c5636d5ab2c-ld.m3u8?hdnts=exp=1766315254_acl=/806974e80c4771f0ba3386c6360c0102/*_hmac=c3c26fa8cc7c73348ebe6add7d023c9dbc6dc8c10b17bb12e33ee05e18e432db",
  status: []
},
{ // Ant-Man and the Wasp: Quantumania (2023)
  tmdbId: "640146",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/20aca0540dd071f0bfc44177d0d10102/bd099818b39c4a20bf2a27b64ef885ea-db33d86e60ce5c710a6e3a59fe73dffb-ld.m3u8?hdnts=exp=1766338841_acl=/20aca0540dd071f0bfc44177d0d10102/*_hmac=4064d58e64051f8a4d5e7f8d1f65b1ecf9d4b727330e3ca6afc8c0d0dd1f123e",
  status: []
},
{ // Guardians of the Galaxy Vol. 3 (2023)
  tmdbId: "447365",
  type: "movie",
  playbackUrl: "https://data-limit-c.solo-latino.com/00333bb50d3c71f080075014c1ca0102/485138b191844a04b04f39a78d54afe7-a4babd88d80007be858662819df900b2-ld.m3u8?hdnts=exp=1766321180_acl=/00333bb50d3c71f080075014c1ca0102/*_hmac=0daebd1691c6bf2c3a8fa816eb981ee24772cf67197688c72e35266cf67e5540",
  status: []
},
{ // The Marvels (2023)
  tmdbId: "609681",
  type: "movie",
  playbackUrl: "https://vod-limit-stream.dramasfree.com/80fd415724d271f0814e4177d1c00102/d939f6166aa44403b723ca0b2db522e9-2ced2e69cf5d62b5c745fc71aaac4eb7-sd.m3u8?hdnts=exp=1766315739_acl=/80fd415724d271f0814e4177d1c00102/*_hmac=d3b86feb14af7e098496674f4d9f49a51339016004ea9c112c4ad69dfa179c5e",
  status: []
},
{ // Deadpool & Wolverine (2024)
  tmdbId: "533535",
  type: "movie",
  playbackUrl: "https://vod-limit-stream.dramasfree.com/80d21458a87e71efa68f87c6371c0102/f21ddae12d6b49ed81939fd55c00ad90-fb25cc09f51d3febc795add44a718709-sd.m3u8?hdnts=exp=1766295132_acl=/80d21458a87e71efa68f87c6371c0102/*_hmac=353615efb1cbdec29b0d101a62bd7b8ffe7dc6438032cf1812ef2577f562ab9a",
  status: []
},
{ // Captain America: Brave New World (2025)
  tmdbId: "822119",
  type: "movie",
  playbackUrl: "https://vod-limit-media.123flmsfree.com/30d04e4a19a671f0801a86c6360c0102/7752985b78cf49e9a16da374d244d6de-e6c0080a7ba5e5184ae6c6789ac3d6fe-sd.m3u8?hdnts=exp=1766340179_acl=/30d04e4a19a671f0801a86c6360c0102/*_hmac=de2fd8189cd1711f8423dd13c699652b07e609350b661d911e0c4fe933990621",
  status: []
},
{ // Thunderbolts* (2025)
  tmdbId: "986056",
  type: "movie",
  playbackUrl: "https://stream-limit-vid.321moviesfree.com/d0bbbafa8d2a71f0bb9d86c6360c0102/8c1762480027a4fb19d7f8a172c6ba38-sd.m3u8?hdnts=exp=1766337781_acl=/d0bbbafa8d2a71f0bb9d86c6360c0102/*_hmac=ea0253e6b438da66705dd86901fcd738e02f052feff3c96663a23ea68ae7f957",
  status: []
},
  { // Tá chovendo hambúrguer
    tmdbId: "22794",
    type: "movie",
    playbackUrl: "https://r-limit.flixlat.com/4086a54d008171f0a0ab5014c1da0102/cdac4027f02a49f89c18a7b392416dae-b53756c2a4773f524d8c28eeae9030b7-sd.m3u8?hdnts=exp=1766308567_acl=/4086a54d008171f0a0ab5014c1da0102/*_hmac=03137618a3a9357626a14394d29488d38d213db16365364540d9c7bb05cdab06",
    status: []
  },
{ // Tá chovendo hambúrguer 2
    tmdbId: "109451",
    type: "movie",
    playbackUrl: "https://r-limit.flixlat.com/408ec764fd5271efb1a65014c1ca0102/59779cbf771a4480a7984abec1ce4a9b-f1befe41a1cd17e917a17e6b3b371dbc-ld.m3u8?hdnts=exp=1766307019_acl=/408ec764fd5271efb1a65014c1ca0102/*_hmac=b38c44a6d3963b4744413ffd69cd73d55a239e67796111662d87e82ca7c2a090",
    status: []
  },
{ // Viva a vida como um festa
    tmdbId: "354912",
    type: "movie",
    playbackUrl: "https://vod-limit-media.123flmsfree.com/c0ac069b40f071f08f085114c0db0102/45384569bc5b4236b38134fc2e7ec5b3-e80ad349f5d60930aab6d2a3061f4216-sd.m3u8?hdnts=exp=1766254875_acl=/c0ac069b40f071f08f085114c0db0102/*_hmac=c3d16f98fe8bb84508912cbcc92f0cc809d58a8179ae33069c07287f15a0e3ba",
    status: []
  },
{ // Vivo
    tmdbId: "449406",
    type: "movie",
    playbackUrl: "https://data-limit-c.solo-latino.com/c01f29aeef4471efbffe87c7371d0102/aa8e74e25db2402f93beb4b5825d5dfe-3923e6239fd4c660cb88efbaced88b15-ld.m3u8?hdnts=exp=1766318859_acl=/c01f29aeef4471efbffe87c7371d0102/*_hmac=2d19cbf58f01df5b4bf960bb8774256d2454426016393e6414b2cf10eafce793",
    status: []
  },
{ // Dois irmãos
    tmdbId: "508439",
    type: "movie",
    playbackUrl: "https://delivery-limit-c.123pelicula.com/609dce912e4a71f0b7185014c1ca0102/39570c3e218b4a2fa76304c2e328fde8-1b93ca241e289151cee25b93d8934fff-sd.m3u8?hdnts=exp=1766319205_acl=/609dce912e4a71f0b7185014c1ca0102/*_hmac=63189625d6ba7886b3a76d5b699f1a80c4b36a56115722543ae0b32a054e9cb3",
    status: []
  },
{ // Ups altas aventuras
    tmdbId: "14160",
    type: "movie",
    playbackUrl: "https://vod-limit-media.123flmsfree.com/b0f003d419ad71f0962e5014c1ca0102/0e1458b982c24fe6adf17704ab0000df-a3f39e3f1427de258f70118c33c2d71b-sd.m3u8?hdnts=exp=1766304580_acl=/b0f003d419ad71f0962e5014c1ca0102/*_hmac=f33b619027851a6b773c8e2b09a6a87fcf278c0f194283f7241081fe44609d3e",
    status: []
  },
{ // Mario bros 1
    tmdbId: "502356",
    type: "movie",
    playbackUrl: "https://data-limit-c.solo-latino.com/e03070d3191871f0b19697c6360c0102/d093ce2ad46b4d61b16f4ca43ea8d2af-63764c68c599de9fe0e5d099b720dafb-sd.m3u8?hdnts=exp=1766306261_acl=/e03070d3191871f0b19697c6360c0102/*_hmac=ec14ddb090b30e7b25c5a52687f17280c7e85ee8b3d066501b1b69a8fadf70f2",
    status: []
  },
{ // Pluribus
    tmdbId: "225171",
    type: "series",
    episodes: [
      { season: 1, episode: 1, url: "https://vod-limit.cuevanalatino.net/8011ae00bb9e71f0bfb897c6360c0102/2b72624d3a9d77e7f740c224b988b92e-sd.m3u8?hdnts=exp=1766299784_acl=/8011ae00bb9e71f0bfb897c6360c0102/*_hmac=bdb2b7cb782de9d0af1f5de0f3adc08e52f9be0dd2d50ee6949face85501dd37" },
      { season: 1, episode: 2, url: "https://r-limit.flixlat.com/b08bff00bdf571f0bfb997c6360c0102/f02703d7818dcdb57b5de8d36f478c49-sd.m3u8?hdnts=exp=1766299798_acl=/b08bff00bdf571f0bfb997c6360c0102/*_hmac=353fa0110a274e0b036682a6201d8b4e67196cc59e473427e1224dbbadbb22f9" },
      { season: 1, episode: 3, url: "https://vod-limit.cuevanalatino.net/50088f52c10871f0bf8f4077c0c30102/576cb4e4dbb585606f06db05bdf14aa5-sd.m3u8?hdnts=exp=1766286219_acl=/50088f52c10871f0bf8f4077c0c30102/*_hmac=78b789ea954a7abb9b8db3cd0ea073cf745e18196ec916a69e5d02f9980eeb8f" },
{ season: 1, episode: 4, url: "https://vod-limit.cuevanalatino.net/c0f6748ec68771f080754076d1d30102/26d768c43165218717a91a904498d6fd-sd.m3u8?hdnts=exp=1766288360_acl=/c0f6748ec68771f080754076d1d30102/*_hmac=7c1dfd22f7705715eee2def792dd747129a2207f846e1192dbf5987e5e4cf48c" },
{ season: 1, episode: 5, url: "https://vod-limit-media.123flmsfree.com/707df6d9cc8271f0a3555114c1ca0102/7496734f392fd3e20a3b307af5565196-sd.m3u8?hdnts=exp=1766302870_acl=/707df6d9cc8271f0a3555114c1ca0102/*_hmac=521188405194f0311d876b0f341733eaca85d21967814f6dbacac8bd6e1039b7" },
{ season: 1, episode: 6, url: "https://r-limit.flixlat.com/a00c7c0bd18571f0bff687c6371c0102/db29c6c7944d29a9730303f71cdd1039-sd.m3u8?hdnts=exp=1766310069_acl=/a00c7c0bd18571f0bff687c6371c0102/*_hmac=81fdbd8e2d65ad0c0c3ae0d78103299b44ca16ceed4e2e3371d2db54b1a7fa01" },
{ season: 1, episode: 7, url: "https://vod-limit.cuevanalatino.net/f0e15c11d70a71f0bfbf4076d1d30102/1cffd7407aeb5f816cb5a8b055de2c83-sd.m3u8?hdnts=exp=1766310085_acl=/f0e15c11d70a71f0bfbf4076d1d30102/*_hmac=6347a4c4ed68b71216f2dbed70d02f7af6bf9fa81328bcfa63ef30dc2076b74c" },
    ],
    status: ['featured', 'Leg']
  }, 
{ // Nos seus sonhos
    tmdbId: "1117857",
    type: "movie",
    playbackUrl: "https://vod-limit-media.123flmsfree.com/60e86579c13371f0800d5114c1ca0102/b02d2ba88f6ab009beca46af2ab4a893-ld.m3u8?hdnts=exp=1766264117_acl=/60e86579c13371f0800d5114c1ca0102/*_hmac=6f755fd1bd108f434f0626c0772af153e25556bc2ecac28b42ab2b0f364dc0d3",
    status: ['featured']
  },
{ // Minecraft: The Movie
    tmdbId: "950387",
    type: "movie",
    playbackUrl: "https://data-limit-c.solo-latino.com/f07b88c55e3171f0bf9f4177d0d10102/ec0843b0bc020c8990fe727507559b16-sd.m3u8?hdnts=exp=1766259869_acl=/f07b88c55e3171f0bf9f4177d0d10102/*_hmac=041991b17e8e4d6b7f490b11032cc9f3e42522ca1eb9c1a50257d8b96aa51398",
    status: []
  },
{ // Five nights at Freddy's
    tmdbId: "507089",
    type: "movie",
    playbackUrl: "https://vod-limit-media.123flmsfree.com/00fe1a795e1d71f0bfef87c7371d0102/b0b29cfeaa0b4d959982a1029d173e50-d211a3a7d932b6d147da3e39da3ebb9f-sd.m3u8?hdnts=exp=1766255014_acl=/00fe1a795e1d71f0bfef87c7371d0102/*_hmac=51bc82fd988947a82c557ceb228ad6a8f735bf1d1b06dd90b83a9d6f675db3c3",
    status: []
  },
{ // Round 6
    tmdbId: "93405",
    type: "series",
    episodes: [
      { season: 1, episode: 1, url: "https://vod-limit-stream.dramasfree.com/d04b9f32a88271efab9297c6360c0102/3b1a55548f9b5bebe33fda3bc2e321e6-sd.m3u8?hdnts=exp=1766227327_acl=/d04b9f32a88271efab9297c6360c0102/*_hmac=ef3108fd579eb4cf8c524b4ec4bda0948780d7a739fb78e0fec139b03d4a23a4" },
      { season: 1, episode: 2, url: "https://stream-limit-vid.321moviesfree.com/501d1f39a88271ef80175014c1da0102/7c3ec3c368034a60f9b9da1b28ea7c0f-ld.m3u8?hdnts=exp=1766238641_acl=/501d1f39a88271ef80175014c1da0102/*_hmac=4b75e5de8bbd18d207cb125e97c750312d8f59a6192b1b66f02d03bef764110f" },
      { season: 1, episode: 3, url: "https://vod-limit-stream.dramasfree.com/50c1f5efa88271ef801987c7371d0102/65606e46cec784779566f281de80898e-sd.m3u8?hdnts=exp=1766262435_acl=/50c1f5efa88271ef801987c7371d0102/*_hmac=08882e937f4ea1c469afad5870af4b5b2623af53ff2a3c9a018d303255469451" },
{ season: 1, episode: 4, url: "https://vod-limit-res.cuevana.life/806418f0a88271ef80115114c0db0102/3f4b72500233b612c4b4fbdf2fb56f62-sd.m3u8?hdnts=exp=1766262599_acl=/806418f0a88271ef80115114c0db0102/*_hmac=cba8024801c689bd277c22d5219959f49f6da21346643456d6bc3bea8ea24fca" },
{ season: 1, episode: 5, url: "https://vod-limit-stream.dramasfree.com/909f1c50a88371ef801987c7371d0102/7ff0ff408b11217904709ee374c94233-sd.m3u8?hdnts=exp=1766236011_acl=/909f1c50a88371ef801987c7371d0102/*_hmac=477699b4f6f2ec1ad613b45c6be71200f869116ec1b0902e70d6d560bef482d5" },
{ season: 1, episode: 6, url: "https://vod-limit-stream.dramasfree.com/1005d673a88471ef80175014c1da0102/cb0b76732d45c0cdf76619062c3d0586-sd.m3u8?hdnts=exp=1766263858_acl=/1005d673a88471ef80175014c1da0102/*_hmac=c8cd3715c0f18cdc3d68f449b8cae78f9d995aaae1fc03b2c3d51eaf8b591224" },
{ season: 1, episode: 7, url: "https://vod-limit.cuevanalatino.net/50ca1ff6a88571efbff05014c1ca0102/e71ab10bb6dd53fe0c778baf9b1dae10-ld.m3u8?hdnts=exp=1766244393_acl=/50ca1ff6a88571efbff05014c1ca0102/*_hmac=560ad06644427417ad3fef20024e1a6924d60688853665e3ef31db7b509303f4" },
{ season: 1, episode: 8, url: "https://data-limit-c.solo-latino.com/90fee209a88671ef80115114c0db0102/107c081ac6d5b78bda6ea39dce186dbb-sd.m3u8?hdnts=exp=1766254039_acl=/90fee209a88671ef80115114c0db0102/*_hmac=822b2341ca5c5f0cabd92d2a35f2813cbc28d9e8229ae99927e74bfe4851c28f" },
{ season: 1, episode: 9, url: "https://delivery-limit-c.123pelicula.com/806ab67fa88671efbff05014c1ca0102/c739ffa44e439c46de45e8b57fc27153-ld.m3u8?hdnts=exp=1766230140_acl=/806ab67fa88671efbff05014c1ca0102/*_hmac=cd3c115f8e5548fd24c10a5629f8afcad41f9903790dbe6271ccdf38bbcb7bbb" },
{ season: 2, episode: 1, url: "https://vod-limit-stream.dramasfree.com/b0d823ffef3171efbfb936a5e8aa0102/93ad0df4aece4d87b5119a6e1f13a0f9-sd.m3u8?hdnts=exp=1766231591_acl=/b0d823ffef3171efbfb936a5e8aa0102/*_hmac=88376a4b78179168ac0e6adc6c44fd107c31296d6b4d636772d070c9f208986d" },
{ season: 2, episode: 2, url: "https://vod-limit-stream.dramasfree.com/407d58ffef3171efbf982680f9ea0102/5f6b3cd5919c492df471034eb5e567b7-sd.m3u8?hdnts=exp=1766281198_acl=/407d58ffef3171efbf982680f9ea0102/*_hmac=bab8c44981e50e9e32917c980d24dbdb4570b747a631e2f4c4b1c026607fa149" },
{ season: 2, episode: 3, url: "https://delivery-limit-c.123pelicula.com/70a63bffef3171efaa2c4177d1c00102/52ef8c2b4601042e4f50a4e5e038e5c7-sd.m3u8?hdnts=exp=1766276898_acl=/70a63bffef3171efaa2c4177d1c00102/*_hmac=9054d706099009100cc580a50111e2c6273e0002bb1fe1a1aa482bb0af03ff94" },
{ season: 2, episode: 4, url: "https://stream-limit-vid.321moviesfree.com/d03d35ffef3171efbf8a5114c0db0102/33ac1ea7a5859abc4e6af5c19e5cd0c6-sd.m3u8?hdnts=exp=1766281226_acl=/d03d35ffef3171efbf8a5114c0db0102/*_hmac=55c7d3cab336572229031f33f8f5eef290702a071420cc7ace278b84008c5f3c" },
{ season: 2, episode: 5, url: "https://data-limit-c.solo-latino.com/900210ffef3171efbfdf4177d0d10102/2e42cdafbaffd18400d7c44552d2f738-sd.m3u8?hdnts=exp=1766265618_acl=/900210ffef3171efbfdf4177d0d10102/*_hmac=c2d70588de2700ee91c089300f7c209529e2faf43ce200bd88cb8e9eba5221d3" },
{ season: 2, episode: 6, url: "https://vod-limit-media.123flmsfree.com/e0be26ffef3171efbfca4177d1c10102/062be21d8c922b70521ec920af84108c-sd.m3u8?hdnts=exp=1766269430_acl=/e0be26ffef3171efbfca4177d1c10102/*_hmac=9298a691e701901cfe5b216e1d6c3594aaf6660f8e8210b860499017b9e6e7dc" },
{ season: 2, episode: 7, url: "https://vod-limit.cuevanalatino.net/f0db646bef3271efbff55014c1da0102/1a9c0503b2646f9c87053299261c8e9c-sd.m3u8?hdnts=exp=1766270451_acl=/f0db646bef3271efbff55014c1da0102/*_hmac=57592c9c5643e80343e4f8a2cee48892a272f500b8fadbb20a8170f734b15474" },
{ season: 3, episode: 1, url: "https://vod-limit-stream.dramasfree.com/50565f5b532771f0bfda4177d0d10102/ef12be1bc08fabbfdb858e8cdbc450b4-sd.m3u8?hdnts=exp=1766230148_acl=/50565f5b532771f0bfda4177d0d10102/*_hmac=b053632e14a27bc967c183a78cf2c52fab3ecbe911f4e86ffb52d66f9fa075ea" },
{ season: 3, episode: 2, url: "https://vod-limit-stream.dramasfree.com/704930bf532a71f0bfde5014c1ca0102/4d187ea9ff35fcfb471b11472ff68521-sd.m3u8?hdnts=exp=1766227231_acl=/704930bf532a71f0bfde5014c1ca0102/*_hmac=9a50b39e0301181c5f948e3c6989fb5bcb6501f583ef347a8641b3c4fbf8002a" },
{ season: 3, episode: 3, url: "https://vod-limit-stream.dramasfree.com/c057b64f532971f0bc3c87c7361c0102/2d6fa7d44df1d7e21dfb6572321fafc0-ld.m3u8?hdnts=exp=1766233630_acl=/c057b64f532971f0bc3c87c7361c0102/*_hmac=34b7f3a72246294d35421a34badcd1dfd7a3f0362e68aaf69552291e0dfdddb7" },
{ season: 3, episode: 4, url: "https://vod-limit-stream.dramasfree.com/d0dca994532971f0bf9a87c6371c0102/832dc5a9bdc285e503c266c2f2e7940b-ld.m3u8?hdnts=exp=1766228447_acl=/d0dca994532971f0bf9a87c6371c0102/*_hmac=9a6fb9f5fad81f6c57a1183e3131150ed655402dc860062cd30eeffb35b1191d" },
{ season: 3, episode: 5, url: "https://vod-limit-stream.dramasfree.com/e08182b2532871f0bfde5014c1ca0102/af4f491e99331ddfec0436d63291baab-sd.m3u8?hdnts=exp=1766257382_acl=/e08182b2532871f0bfde5014c1ca0102/*_hmac=e5880041a87bb3bcde43629c3a49cadfb67ee225f9ae5b50954f6c0cd4724057" },
{ season: 3, episode: 6, url: "https://vod-limit-stream.dramasfree.com/b0d2deb2532871f0bfee87c7371d0102/7048069449f4a719950d2351734126a2-sd.m3u8?hdnts=exp=1766274556_acl=/b0d2deb2532871f0bfee87c7371d0102/*_hmac=5dd63b2b2e11927e68b0d9d3858155bc129368d0b97e4c25f6e367eb635d8e1d" },
    ],
    status: []
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
    status: []
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
    status: []
  },
  { // Breaking Bad
    tmdbId: "1396",
    type: "series",
    episodes: [
      { season: 1, episode: 1, url: "https://media-limit-xr8a2.peliculaplay.com/d0363098eff471efaa2c4177d1c00102/87051d6d69214fa0977a45ed09139c25-3332a7d2308b908ea0132feca743c5e1-sd.m3u8?hdnts=exp=1766271506_acl=/d0363098eff471efaa2c4177d1c00102/*_hmac=9780ca73731c57e459a4604dad6cdf51d4eab23de93c012f42f3c364182af998" },
      { season: 1, episode: 2, url: "https://delivery-limit-c.123pelicula.com/50761b98eff471efbf8e5114c0db0102/bccf2dc9c7d04f72ba12ebc075f90cc5-856e7b65d06f0f7747c28b9778843e80-sd.m3u8?hdnts=exp=1766260831_acl=/50761b98eff471efbf8e5114c0db0102/*_hmac=ee7ba989ecb56defc0ac712b385183870e75f3bdb04057df3a396fa20b9a6f3d" },
      { season: 1, episode: 3, url: "https://media-limit-xr8a2.peliculaplay.com/f09b4198eff471efbff75014c1da0102/9c72aee29d65df913e860294d48d3a65-sd.mp4.m3u8?hdnts=exp=1766262755_acl=/f09b4198eff471efbff75014c1da0102/*_hmac=55b20fd0ed95d86ac039ef745061c8f3699388ad99b7ff786f5687b7aef1e2f9" },
{ season: 1, episode: 4, url: "https://media-limit-xr8a2.peliculaplay.com/00772498eff471efbffe87c7371d0102/2e43e4ecfba94362b0a8144658456ac5-297576f24f7bc392727ed95fdf4949e5-sd.m3u8?hdnts=exp=1766281554_acl=/00772498eff471efbffe87c7371d0102/*_hmac=10863e878d6edaaed15940906f11cfee7f1d102ba85cad4bad76bb71b0915780" },
{ season: 1, episode: 5, url: "https://media-limit-xr8a2.peliculaplay.com/d0824d98eff471efbfc85014c1ca0102/c1d6aca176d241629a9d24f8a4b3a644-70348e032f8ecdde4a073cf05b0fc644-sd.m3u8?hdnts=exp=1766274241_acl=/d0824d98eff471efbfc85014c1ca0102/*_hmac=3c8f426da6454413bf8357462dd60ae830c4b4dfc9da757e6f22a21804923d48" },
{ season: 1, episode: 6, url: "https://vod-limit-stream.dramasfree.com/90aa5698eff471efbff75014c1da0102/39454f1eddd248508300af87ac918f0f-2aadf8c6ff02eaf39d6ee97bf02b2124-sd.m3u8?hdnts=exp=1766256221_acl=/90aa5698eff471efbff75014c1da0102/*_hmac=035ddaf6fd2e105085ddf63b40443511eaacfc1eb56cd6ee6e0c3b7856bb2bc9" },
{ season: 1, episode: 7, url: "https://media-limit-xr8a2.peliculaplay.com/80903220eff771efbfe34177d0d10102/d96aa25f36d5491cafb0523be58a41f7-946b5ff7c4fe8fece1a8a6fb2bcf9ed0-sd.m3u8?hdnts=exp=1766275788_acl=/80903220eff771efbfe34177d0d10102/*_hmac=93dd30a7bdc3b5e31941b69a9463ef069f74085e74b7141e6741d15cd57f8aeb" },
{ season: 2, episode: 1, url: "https://media-limit-xr8a2.peliculaplay.com/70cdc221eff771efbfac87c6371c0102/b0de2683dc8a4958be20573f3a6437f1-43af119e05aa494cd448835a0684da69-sd.m3u8?hdnts=exp=1766260450_acl=/70cdc221eff771efbfac87c6371c0102/*_hmac=3c72ec0096d7ab6821149214096cbc691e571233edb656aae72e43727a450960" },
{ season: 2, episode: 2, url: "https://vod-limit-res.cuevana.life/a090f294eff771efbfcd4177d1c10102/762b1ebeb6234ac3b9c69d821742ee50-ca07a9c6b4b373408b179c8750512db8-sd.m3u8?hdnts=exp=1766263283_acl=/a090f294eff771efbfcd4177d1c10102/*_hmac=59342de2757f266551bfc145ea9c0d300bbba5000ffe77a8bb336a27de9ed467" },
{ season: 2, episode: 3, url: "https://vod-limit-media.123flmsfree.com/a0551bb6eff771efbf9c2680f9ea0102/fd0f95b0ea9d4c9987753e24799aa179-3e009aad770d85765485dfeaa863249a-sd.m3u8?hdnts=exp=1766270279_acl=/a0551bb6eff771efbf9c2680f9ea0102/*_hmac=c4e005e289543bfdf036c5116d8320a1df8cd5b00cee4e0958eb1a39bb3483e2" },
{ season: 2, episode: 4, url: "https://data-limit-c.solo-latino.com/9041982feff871efbf8e5114c0db0102/bd0cc3edbbb941a8b4a4588d8137828b-bc90cb21b839a1fe0f5744aee095b09d-sd.m3u8?hdnts=exp=1766266076_acl=/9041982feff871efbf8e5114c0db0102/*_hmac=26716d4d93029eebeb0f3c8c4b072ef6ebc4feaed59716f8dc0eeca33c4f0958" },
{ season: 2, episode: 5, url: "https://media-limit-xr8a2.peliculaplay.com/606f4fc5eff871efbfac87c6371c0102/bc5a0e7b636d4c2db27ed45572d01e9c-c33b24a2f04169fde82d9c29d7f83f34-sd.m3u8?hdnts=exp=1766282220_acl=/606f4fc5eff871efbfac87c6371c0102/*_hmac=9cb69be6b0104de991d6b3934338885f03c30c96500307695663e49635258d39" },
{ season: 2, episode: 6, url: "https://vod-limit-media.123flmsfree.com/a0ca9849eff971efbf9586c6360c0102/1d2c64678872482682d8da28e3dbac51-b1fa1f96fb178d3cbb306c9f0a945dac-sd.m3u8?hdnts=exp=1766265849_acl=/a0ca9849eff971efbf9586c6360c0102/*_hmac=e0f1ae517f10b7ee0797b10f68c387d50b9a14db0ee365574883683a9a3b9af8" },
{ season: 2, episode: 7, url: "https://media-limit-xr8a2.peliculaplay.com/e03c6bbaeff971efbfbd36a5e8aa0102/4d0ac48a74b74023bb24a5530e345ef2-0001860f688e87a857f9c36c0473179f-sd.m3u8?hdnts=exp=1766264759_acl=/e03c6bbaeff971efbfbd36a5e8aa0102/*_hmac=b904da0293cd0f27848bcf4f6700d3643bb46debc70e74f67b75e57a673e7740" },
{ season: 2, episode: 8, url: "https://delivery-limit-c.123pelicula.com/608e2cffeff971efbfbd36a5e8aa0102/071cd0605a334370897ba0a341180511-416564a87e4edcee3ee60664815c2e75-sd.m3u8?hdnts=exp=1766265860_acl=/608e2cffeff971efbfbd36a5e8aa0102/*_hmac=67eb42a1c7ffe8b436548cee7759b4f6868e1fdb2ea6f154c9709b568b5a74f9" },
{ season: 2, episode: 9, url: "https://vod-limit-res.cuevana.life/9026bffeeff971efaa2c4177d1c00102/d0c07aa0e8064ad69719f084ad47ea2d-22fb954aff2beb03954e16af202c7e42-sd.m3u8?hdnts=exp=1766270423_acl=/9026bffeeff971efaa2c4177d1c00102/*_hmac=29242b027306c62fb0cd8aabb713cecffc67b3d2b3799668f00928bca87fcc21" },
{ season: 2, episode: 10, url: "https://media-limit-xr8a2.peliculaplay.com/60bfe2c1effa71ef930e5114c1ca0102/332eed2379d3463cb4404922de5f9f0e-a1f8fffeea8eefcb23f302989afc052a-sd.m3u8?hdnts=exp=1766273198_acl=/60bfe2c1effa71ef930e5114c1ca0102/*_hmac=e5bde03ef5a7f131713867409c51d3511060e3577b87241371503a9e5913e061" },
{ season: 2, episode: 11, url: "https://media-limit-xr8a2.peliculaplay.com/902ce530effb71efbff75014c1da0102/72722c70404448e69c7af3beea09c43d-3df44d3e21cd25e77102c1050d5e08f2-sd.m3u8?hdnts=exp=1766284960_acl=/902ce530effb71efbff75014c1da0102/*_hmac=bcbe37d53852535e54e93708da1d83853ea2ab34f95ee51c37faf8aeedce7552" },
{ season: 2, episode: 12, url: "https://r-limit.flixlat.com/30c2c6e6effb71efaa2c4177d1c00102/1df379d51d5e46ed9e919678e39162e7-a14cb6faf20672927283453055fd0e7b-sd.m3u8?hdnts=exp=1766273198_acl=/30c2c6e6effb71efaa2c4177d1c00102/*_hmac=f06fbcfaa1c27308ae6cbc38902f9897244be76f0ccff3d7fa3a7ed8984a93e1" },
{ season: 2, episode: 13, url: "https://media-limit-xr8a2.peliculaplay.com/508a06e7effb71efbfe34177d0d10102/ef35cd121d5440bca60d34af3de4cd34-fc6418ecb03e4223dadf391da589b65d-sd.m3u8?hdnts=exp=1766258492_acl=/508a06e7effb71efbfe34177d0d10102/*_hmac=334ac520f397188db43c8849f510d762cb898208b9715596cc87ea8b4f185243" },
{ season: 3, episode: 1, url: "https://media-limit-xr8a2.peliculaplay.com/b0c82ac4effc71efbfe34177d0d10102/f24666da06b541debba467d84f2918a6-c560d69ecc105a6f912c0dbecbce9e53-sd.m3u8?hdnts=exp=1766282421_acl=/b0c82ac4effc71efbfe34177d0d10102/*_hmac=0ef27297536c47ff405ecaadce866b964489b10cdffa7de11a115dfec505d642" },
{ season: 3, episode: 2, url: "https://vod-limit-media.123flmsfree.com/90f026f2effc71efbff75014c1da0102/7eaef8e077a94950b255d39727c5d53a-00a136e1ccfbab28e8d43d687b449fa7-sd.m3u8?hdnts=exp=1766261358_acl=/90f026f2effc71efbff75014c1da0102/*_hmac=8095fcf8af19a4e902837e80c9333508466c67dab8a209d8c3a47ce9c2d3b59f" },
{ season: 3, episode: 3, url: "https://media-limit-xr8a2.peliculaplay.com/70b15072effd71efbfcd4177d1c10102/f5f6ff18babc4764b27cb2fbc4d3bd6d-495f5def049e1b9fa5ebfe387ba124b6-ld.m3u8?hdnts=exp=1766264047_acl=/70b15072effd71efbfcd4177d1c10102/*_hmac=12c2615fe0aa2ad5438760a57d7405c929b225b2aea70b18e3a16aff2591d9e7" },
{ season: 3, episode: 4, url: "https://media-limit-xr8a2.peliculaplay.com/7057cd30effe71efbb3097c6360c0102/e74a724897774ff092676b4a68713ab6-5619a03bcf7a2afdec51b89ec5253f9d-sd.m3u8?hdnts=exp=1766262357_acl=/7057cd30effe71efbb3097c6360c0102/*_hmac=a1020a90301a3f680af3b37fcf63b9ffe597e4d83ce029ab3f907683576f71f5" },
{ season: 3, episode: 5, url: "https://vod-limit.cuevanalatino.net/20e440d0effe71efbf9c2680f9ea0102/4b4d133c5a46432d90918e83c231a50c-bc23641f95a678681620c9c16dde4848-sd.m3u8?hdnts=exp=1766262251_acl=/20e440d0effe71efbf9c2680f9ea0102/*_hmac=02f7460faa8fe7ee492ade8b9d6a5b548d515d8a50fcd9f6fc94e38b8f1fc998" },
{ season: 3, episode: 6, url: "https://vod-limit-res.cuevana.life/f0b46f5fefff71efbb3097c6360c0102/cb92eeb0011040b0b43958a621cd7cfc-45d1986a71c3231934983023d763f363-sd.m3u8?hdnts=exp=1766269249_acl=/f0b46f5fefff71efbb3097c6360c0102/*_hmac=a15d294f47ed3243ed254412fbaa5d584fac9ff0c386e6a8941101f411aad9fe" },
{ season: 3, episode: 7, url: "https://media-limit-xr8a2.peliculaplay.com/a055bc80efff71efbf9586c6360c0102/cc6b28ec4dd14b278ac59e576c3cc98c-7820b30657fedc2b7343c13b5b0b1062-ld.m3u8?hdnts=exp=1766275483_acl=/a055bc80efff71efbf9586c6360c0102/*_hmac=6fa5e24bcc9068af9d6c2803f91afa495ab3823884da94d5dc5449a26e3d6deb" },
{ season: 3, episode: 8, url: "https://media-limit-xr8a2.peliculaplay.com/a08d33b8efff71efbff75014c1da0102/d4189fafb0d246c0b12a66e49fd47683-70787a9a3c098747d6e578dd6dc33232-ld.m3u8?hdnts=exp=1766276149_acl=/a08d33b8efff71efbff75014c1da0102/*_hmac=dfeabbf4ce9a057b3b46845a73d9a8140fa60c6a41f70f3e35f7ae77ba3a8760" },
{ season: 3, episode: 9, url: "https://r-limit.flixlat.com/00077ed5efff71efbb3097c6360c0102/d910fb449c454a1eb9153ca40bb27ae0-79b8bef76a54111f2509c217194e4736-ld.m3u8?hdnts=exp=1766264357_acl=/00077ed5efff71efbb3097c6360c0102/*_hmac=96529e962aadf3176ba304ee73e88e7695790bd95bcd034a0e463237113e0cb9" },
{ season: 3, episode: 10, url: "https://media-limit-xr8a2.peliculaplay.com/50eb4051f00071efbfcd4177d1c10102/5c31aabb629c438b8f91a46248c936ed-b1acf93a9e061616cebdedd32f22106f-ld.m3u8?hdnts=exp=1766279729_acl=/50eb4051f00071efbfcd4177d1c10102/*_hmac=6188269f136f7e26c7bc07b7ce79c1775df591555730b3524e518c52a44e87cd" },
{ season: 3, episode: 11, url: "https://media-limit-xr8a2.peliculaplay.com/e09a34d6f00171efbfac87c6371c0102/1542af4b2e2e4a02a1619ff4f51c55a2-4966f13a317c5687c02c77657e1f48cc-sd.m3u8?hdnts=exp=1766282307_acl=/e09a34d6f00171efbfac87c6371c0102/*_hmac=73c616321e344d250361450c493883d172d16759bf34c8a7c98239a492921641" },
{ season: 3, episode: 12, url: "https://media-limit-xr8a2.peliculaplay.com/f09d22daf00171efa32e87c7361c0102/49e8b713b883429ea4f565746fc7808c-8e1f99dc0d8ff7b79d281afa32c068e7-ld.m3u8?hdnts=exp=1766277936_acl=/f09d22daf00171efa32e87c7361c0102/*_hmac=2cdf4681a9624823ea694302b00c5575b6830be7b668bf4e32f68d53ad5d65d5" },
{ season: 3, episode: 13, url: "https://media-limit-xr8a2.peliculaplay.com/b0d30817f00271efa32e87c7361c0102/fe01ba5c11f54b688cf4503b5674694a-09f199cc08f8f399c65f9bf8806f7db4-sd.m3u8?hdnts=exp=1766278968_acl=/b0d30817f00271efa32e87c7361c0102/*_hmac=95b3cbe142c178333acf412aec4827f1dd214baccd4573d7b6bdf5301de439ed" },
{ season: 4, episode: 1, url: "https://vod-limit-res.cuevana.life/b022914ef00271efbfcd4177d1c10102/a23fc2f65b344558a439cf4a2ae137e9-61a72b337740e168665a3ae4ffc05f5d-sd.m3u8?hdnts=exp=1766261857_acl=/b022914ef00271efbfcd4177d1c10102/*_hmac=4f69b4caade8d5447057703cf05e4f9cfede0bde0d9cb8c062a9d25413e9519c" },
{ season: 4, episode: 2, url: "https://media-limit-xr8a2.peliculaplay.com/10c45e5cf00271efbfe34177d0d10102/2f9f6b6424374c298328f23ebf46100d-6421a80f4e83da8c10ea4fe0b0d2f855-sd.m3u8?hdnts=exp=1766279109_acl=/10c45e5cf00271efbfe34177d0d10102/*_hmac=29ee6856ec985a495621d131a1c6fbd10e515d44f09452e850cfb45a29fa22ae" },
{ season: 4, episode: 3, url: "https://media-limit-xr8a2.peliculaplay.com/d0cecb19f00371efbff75014c1da0102/7486114456a14a9895a3e33479fb8ab6-527ba8d3ee56e12e7fa092b86fd5aae9-sd.m3u8?hdnts=exp=1766276578_acl=/d0cecb19f00371efbff75014c1da0102/*_hmac=54adf73f6d41f9447cc4a576b057a2fdf37a4ae4c7f903184caf0498978dd9d6" },
{ season: 4, episode: 4, url: "https://vod-limit-02.playspelis.com/60a301d4f00371ef930e5114c1ca0102/e159562f64214908bbf03ac519245841-393078dd19229b7eed976adb1eb953c8-sd.m3u8?hdnts=exp=1766275609_acl=/60a301d4f00371ef930e5114c1ca0102/*_hmac=44b381b1ab1bae1c7f5446ac1379faba09f7f3e9d05de29298aae1e9265e9d4d" },
{ season: 4, episode: 5, url: "https://vod-limit.cuevanalatino.net/f02506d6f00371efbfe34177d0d10102/aa394e384490496d92e5b6999dfdc644-89f2b4efeec8f1841056944f589b67d1-sd.m3u8?hdnts=exp=1766263539_acl=/f02506d6f00371efbfe34177d0d10102/*_hmac=36b9d7d8c12f52ca09a98239dd3cfe709e1be745f3b733bf85b33a7516adeb3f" },
{ season: 4, episode: 6, url: "https://vod-limit-02.playspelis.com/a0f2c705f00471efbfbd36a5e8aa0102/8fe8652313064b4693f8ce6b9405c1f6-ea47efeea40d322b4ec39d463918d81b-sd.m3u8?hdnts=exp=1766283178_acl=/a0f2c705f00471efbfbd36a5e8aa0102/*_hmac=138e20e4ff58cda0dbdaa3f256e22d21f87cb9925239f6425855830a90b66e35" },
{ season: 4, episode: 7, url: "https://media-limit-xr8a2.peliculaplay.com/f07228a2f00471efbfe34177d0d10102/33688b0997e14c188fd77ec57022b0c4-4c945b232330f76bc69db6df02f2cfa4-sd.m3u8?hdnts=exp=1766277275_acl=/f07228a2f00471efbfe34177d0d10102/*_hmac=62aa6548d059c7579b2f39a830f2310c76a208715afd86d9060165a85b861740" },
{ season: 4, episode: 8, url: "https://media-limit-xr8a2.peliculaplay.com/008fafb2f00471efbb3097c6360c0102/e398a1eb37214db9b1c7506896b3eb23-29e76ee6ee08872fa43c3ded592b4a00-sd.m3u8?hdnts=exp=1766278635_acl=/008fafb2f00471efbb3097c6360c0102/*_hmac=671d26bdc81d28a06359f7dd763e4e862389face5bd69676f7539b8e016658cb" },
{ season: 4, episode: 9, url: "https://media-limit-xr8a2.peliculaplay.com/0004bd34f00571ef930e5114c1ca0102/8f0cbf7ae4cb4eccb4763ee4ca397b41-fda425fd39b66846227c1c496172e142-sd.m3u8?hdnts=exp=1766272836_acl=/0004bd34f00571ef930e5114c1ca0102/*_hmac=e7e97714b8136e46338805eade94714dadbb025c018f18734a51ba8c4f60f681" },
{ season: 4, episode: 10, url: "https://media-limit-xr8a2.peliculaplay.com/f032e5a1f00571efbffe87c7371d0102/64eb4d8ff21f4a49870c58560bf635c6-aae4010b3547d6d701a4c71dc87f6ebb-sd.m3u8?hdnts=exp=1766263800_acl=/f032e5a1f00571efbffe87c7371d0102/*_hmac=7879ef84e4d7a134ff32f99239ab3821863ce516a4a6b53455a6f9b19fe7c50b" },
{ season: 4, episode: 11, url: "https://media-limit-xr8a2.peliculaplay.com/d0ae43e7f00571efbfbd36a5e8aa0102/c99a2788a45846e3ae11ec464117e821-246b4196b7ef7341554efd35901fafe5-ld.m3u8?hdnts=exp=1766267719_acl=/d0ae43e7f00571efbfbd36a5e8aa0102/*_hmac=98f5e1e02f5346ca2bcd63aa2d18c10ba0b6973f2d5451457e263e54a2986dbd" },
{ season: 4, episode: 12, url: "https://media-limit-xr8a2.peliculaplay.com/903b6d0cf00671efbfc85014c1ca0102/f6fc1b1413cc437d8d8c485bcf826bda-c1abc2965d1cfa25e19bf73f64338e92-sd.m3u8?hdnts=exp=1766268883_acl=/903b6d0cf00671efbfc85014c1ca0102/*_hmac=5a1fe75a829da934fbbd0bbe75a1d013f780a27a395fcfb0cb6048dab3f96f2d" },
{ season: 4, episode: 13, url: "https://vod-limit-res.cuevana.life/506b6385f00671ef930e5114c1ca0102/fd5d28f712a4440f9eda69883ad06123-1646a09486f19d233e6dc5a02103b4b1-sd.m3u8?hdnts=exp=1766268936_acl=/506b6385f00671ef930e5114c1ca0102/*_hmac=a5d293d2ba718415041d81b210c5cbd8712deb62f4bb3ba94e08764021e5c22c" },
{ season: 5, episode: 1, url: "https://vod-limit-02.playspelis.com/a05716bef00671efbfcd4177d1c10102/89405d4e9a51451f990343b17eb67597-ddd7744b8d1a4d40075b3fdd9279c434-sd.m3u8?hdnts=exp=1766271229_acl=/a05716bef00671efbfcd4177d1c10102/*_hmac=0ec3676775b9d875ec9c92024b65aec1686690b79a13727ad7459526df561799" },
{ season: 5, episode: 2, url: "https://media-limit-xr8a2.peliculaplay.com/10373afff00671efbfc85014c1ca0102/eab4071166ec4f7e9a572b1e722ef465-97a48b489c2cac4009b2825a1e741fc2-sd.m3u8?hdnts=exp=1766275027_acl=/10373afff00671efbfc85014c1ca0102/*_hmac=1ed62c62997c38feae470474e26824625d8323092aba9e821046dee1dff7d5ea" },
{ season: 5, episode: 3, url: "https://media-limit-xr8a2.peliculaplay.com/308a3d6af00771ef930e5114c1ca0102/bca1fa061f7d4263bec0cc27f8ee5971-4813c10f18b031ed7ce55fe035461a2e-sd.m3u8?hdnts=exp=1766264438_acl=/308a3d6af00771ef930e5114c1ca0102/*_hmac=fa0a862e778a0031d189948670c9ec541e44d2cf15a5f2bdca090d4613058a30" },
{ season: 5, episode: 4, url: "https://media-limit-xr8a2.peliculaplay.com/d014a28af00771efbf9586c6360c0102/add2f9ebd26a43099acffb529d42a910-8b8723019f9abf3b553a5d7aef332fb7-sd.m3u8?hdnts=exp=1766272265_acl=/d014a28af00771efbf9586c6360c0102/*_hmac=e8d8fe3956142b507adc8cb663da36bce4b7b4b977ec11d7a21c06df38b7815d" },
{ season: 5, episode: 5, url: "https://media-limit-xr8a2.peliculaplay.com/f06d1490f00771efbb3097c6360c0102/232b7b97ba674ffa9a7550a7f3b02881-6f7d7d26d7c38d5f138795d467417d24-ld.m3u8?hdnts=exp=1766273916_acl=/f06d1490f00771efbb3097c6360c0102/*_hmac=15d7b7d36ce211ba2bde7fe83f1e67e0293d03074ac7c697c6d1f00cc955f7a0" },
{ season: 5, episode: 6, url: "https://data-limit-c.solo-latino.com/7072b901f00871efbf9586c6360c0102/8460cdedf2b4421e810685b8e599f4fe-574b85e46a63b66e3f3b4cb548dbbb18-ld.m3u8?hdnts=exp=1766276927_acl=/7072b901f00871efbf9586c6360c0102/*_hmac=14a5c27aad3611ce5aafabe07a744a87d70a72a7143c66e6a4e13f44408bbdd3" },
{ season: 5, episode: 7, url: "https://data-limit-c.solo-latino.com/f0fa3338f00871efbfcd4177d1c10102/324a140f7a9c4d8eaaa1eb15aca57a57-a7f078ed1cc4f822c7ac9eacc174508b-sd.m3u8?hdnts=exp=1766273182_acl=/f0fa3338f00871efbfcd4177d1c10102/*_hmac=08bac4cec1b1e45e6d81ccf6511edc41b85015bf419e4a64909fb007bb38677e" },
{ season: 5, episode: 8, url: "https://vod-limit-02.playspelis.com/f0d07458f00871ef930e5114c1ca0102/514498e13da142269ad32c51eb749abb-096ce923d3ee96e635e86815ae374f18-sd.m3u8?hdnts=exp=1766272647_acl=/f0d07458f00871ef930e5114c1ca0102/*_hmac=d5a15df81452a76e979be95fe4baa5d6b3d69837114e8a5842ce96e4ff94c7c2" },
{ season: 5, episode: 9, url: "https://media-limit-xr8a2.peliculaplay.com/d03a34b8f00871efaa2c4177d1c00102/4fd9f362d31d4324b96672b6a1d7bf13-c94bb10ab43ecade9b977b3648675839-sd.m3u8?hdnts=exp=1766261846_acl=/d03a34b8f00871efaa2c4177d1c00102/*_hmac=0ce2f2a4ae5825f0f1599f4720bfa3925debc689a59925766ee75e98cfb981e1" },
{ season: 5, episode: 10, url: "https://media-limit-xr8a2.peliculaplay.com/20b3fae2f00871efa32e87c7361c0102/64d911919a6d4040a949c3ba173884c1-169e692295f6a73765ff88e070a7f14d-ld.m3u8?hdnts=exp=1766263849_acl=/20b3fae2f00871efa32e87c7361c0102/*_hmac=d3149bb0706610ad091e1c5144b0022eda036141acf3b63e2f3797112d5552ec" },
{ season: 5, episode: 11, url: "https://media-limit-xr8a2.peliculaplay.com/704ce9fbf00871efbfcd4177d1c10102/91cd6a4ffdbc465a97b6f921f647e8d4-ead256981836e4c8e325d2ebed78a5f5-sd.m3u8?hdnts=exp=1766264332_acl=/704ce9fbf00871efbfcd4177d1c10102/*_hmac=4074716eb93085feaf7b237a78f0fbbb4c08b484085c363da9b87d22ce6de07c" },
{ season: 5, episode: 12, url: "https://media-limit-xr8a2.peliculaplay.com/b019d80ef00971efbffe87c7371d0102/01c8ab70bb614dacb3ffdd3f083d6029-ad07c2d830e4a7d052d9f61efed151c5-sd.m3u8?hdnts=exp=1766279804_acl=/b019d80ef00971efbffe87c7371d0102/*_hmac=918303c79e382f884859876dc4b135fa3d4d763bb62c03dde2a88399c5420659" },
{ season: 5, episode: 13, url: "https://stream-limit-vid.321moviesfree.com/e0db5279f00971efbf9c2680f9ea0102/5619b1424a314fc2a441f3abad62ed48-38ad35f980fe7a2ad8058ed9e9e32dce-sd.m3u8?hdnts=exp=1766286041_acl=/e0db5279f00971efbf9c2680f9ea0102/*_hmac=8919b8666bb095198afef98631681f936a6a50b96c70fb576d662c0b5027bcbd" },
{ season: 5, episode: 14, url: "https://media-limit-xr8a2.peliculaplay.com/40c1ea9bf00971efbfac87c6371c0102/ecb68ecc363a42b7b6db34da420823f8-d978db687511abeafa5be60cceafde76-sd.m3u8?hdnts=exp=1766282772_acl=/40c1ea9bf00971efbfac87c6371c0102/*_hmac=18354442254600278627f6883f007c451f6b0a29c89a715bacd4bbc28f5bab1e" },
{ season: 5, episode: 15, url: "https://vod-limit-02.playspelis.com/d0845221f00a71ef930e5114c1ca0102/aaa8938136d24020b52200706acb6ed0-847161c6a02159b70efee160c8c3946b-sd.m3u8?hdnts=exp=1766285520_acl=/d0845221f00a71ef930e5114c1ca0102/*_hmac=3dafbf0a59be49afe74e1539f55d498d249a2520bb34e39feb6485fca15ec519" },
{ season: 5, episode: 16, url: "https://media-limit-xr8a2.peliculaplay.com/a03c0b36f00a71efbfe34177d0d10102/32bf0a61bd044eb49429ebbbbdd79213-d84ee6a0ef48e2b82cd81adcce82d96c-ld.m3u8?hdnts=exp=1766286092_acl=/a03c0b36f00a71efbfe34177d0d10102/*_hmac=55fcea8a5ecd919309921fb8de4015a4cc95007f2de64f1ac2c4f315bf395606" },

    ],
    status: []
  }, 
  { // Stranger things
    tmdbId: "66732",
    type: "series",
    episodes: [
      { season: 1, episode: 1, url: "https://media-limit-xr8a2.peliculaplay.com/20820cc6ee6971efb1a35114c0db0102/6665af3c033b4aefbdb0992b6dc25d05-d1d48d95f3debc256bb2542f9b44f2d4-sd.m3u8?hdnts=exp=1766366805_acl=/20820cc6ee6971efb1a35114c0db0102/*_hmac=2eb8afa9d367ca9934c5cbca0b22f75e24bf89d13a5f9243c4e8cefeeb6ac390" },
      { season: 1, episode: 2, url: "https://r-limit.flixlat.com/b04fc045ee6a71efb1a35114c0db0102/0171534ae2b641558f7d1e65ee15e69c-4d0488448de5c896d67573e5c625d830-ld.m3u8?hdnts=exp=1766372827_acl=/b04fc045ee6a71efb1a35114c0db0102/*_hmac=d2496d59da18784173dcefed6686a15c670757ceea6cf52e85d4ffe9d8e84a5e" },
      { season: 1, episode: 3, url: "https://vod-limit-02.playspelis.com/b031d56cee6a71efb1a35114c0db0102/d057ea7f143f498baf78e816e128c3e3-ead1ed5f87a80a9b387dceb3af0e5e6c-sd.m3u8?hdnts=exp=1766371510_acl=/b031d56cee6a71efb1a35114c0db0102/*_hmac=6677fe4e26b9cd0464165b53dab0b8d6a758ddc8823288442b2f7ead43bbdc0c" },
{ season: 1, episode: 4, url: "https://vod-limit-02.playspelis.com/c0c2d8aeee6a71ef9bc487c7361c0102/04f4668361dd4bc7aee545b7e756076a-36974b1c903e5e87878034260c5c4caa-sd.m3u8?hdnts=exp=1766377805_acl=/c0c2d8aeee6a71ef9bc487c7361c0102/*_hmac=b57de27fc749908b4c29dc941ba28ff4f8d96fc34e0bfcde7d29c96daf7c5d85" },
{ season: 1, episode: 5, url: "https://vod-limit-media.123flmsfree.com/5061ae3bee6b71efaf495114c1ca0102/3814473fc1804b0f9402ec11431c2671-163d441d59b4b525d53c232f02e7ab2e-sd.m3u8?hdnts=exp=1766374535_acl=/5061ae3bee6b71efaf495114c1ca0102/*_hmac=3214f77f32de990905b3f10b80e33c1a2d06940f4882bbb2238e799a53923f84" },
{ season: 1, episode: 6, url: "https://vod-limit-02.playspelis.com/f00d674eee6c71efb1a35114c0db0102/adca271b7f134abe83be4cd4e247642c-81d650c3bcf0d964f201c1918712c170-sd.m3u8?hdnts=exp=1766387454_acl=/f00d674eee6c71efb1a35114c0db0102/*_hmac=147cd29f68d8898118c4ccf49b289a245151dc3bb31a951e2168b09d7f64f4ac" },
{ season: 1, episode: 7, url: "https://vod-limit-02.playspelis.com/40df0042ee8171ef80032680f9ea0102/ef7c6082ecdd4b41bdb2a7bc1366b69e-f62f1a97051bcbbd587f1ed99568735f-sd.m3u8?hdnts=exp=1766387534_acl=/40df0042ee8171ef80032680f9ea0102/*_hmac=a738486d84d7b53fe36d4d0a00811a7369d27c7dd4bbaaea5da50bfb6884ff83" },
{ season: 1, episode: 8, url: "https://vod-limit-02.playspelis.com/80cce8faee8071ef98074177d1c10102/2d76e87f0e7b440ea91c1847b8a40517-a6311e89d5945044873e6db5897d08ac-sd.m3u8?hdnts=exp=1766317395_acl=/80cce8faee8071ef98074177d1c10102/*_hmac=535dc72bb7106345e728524a46d333b431ad6d9b7c7be9523d1a294c6b78107d" },
{ season: 2, episode: 1, url: "https://vod-limit-02.playspelis.com/b00f11d3ee8071ef803e5014c1da0102/73989a4ff3114a6bb9193a6de76c1932-1b86356d3802bc6780858231e8d2c936-sd.m3u8?hdnts=exp=1766382704_acl=/b00f11d3ee8071ef803e5014c1da0102/*_hmac=5e8214a85214ae99ff4acf8b4ce1f23845c151e05617de25642b001a29059859" },
{ season: 2, episode: 2, url: "https://vod-limit-media.123flmsfree.com/30f641f6ee7f71ef9e815014c1ca0102/705f60debfbd413fa52d66114ffcaa93-ceb421a12f89fcaba3aa111e39091876-sd.m3u8?hdnts=exp=1766378485_acl=/30f641f6ee7f71ef9e815014c1ca0102/*_hmac=eb7fc9e82a9119bfc8ea18d17926c3096d853ec029ee8e7e999ea4eca9bd93fe" },
{ season: 2, episode: 3, url: "https://vod-limit-02.playspelis.com/f01b60bbee7f71ef80032680f9ea0102/463f0fec21594c44ac8eb88615aa3fcf-f9ebd5a8a1d8265cd27c20289f54835d-sd.m3u8?hdnts=exp=1766388017_acl=/f01b60bbee7f71ef80032680f9ea0102/*_hmac=851ff73e9d72fd1e5416c72b72f4c74e898f324432bd66f28e067aad83760b1f" },
{ season: 2, episode: 4, url: "https://media-limit-xr8a2.peliculaplay.com/4038c981ee7f71ef9e815014c1ca0102/995fabc4d4bc47378a8a63d66cc20f8a-465786e9d9d84d47ce6cc15240690daf-sd.m3u8?hdnts=exp=1766372983_acl=/4038c981ee7f71ef9e815014c1ca0102/*_hmac=c786076be027ded2c84e606d2547afc57729cd01d87adcf10529c3c6aec2c2cf" },
{ season: 2, episode: 5, url: "https://vod-limit-02.playspelis.com/a0337868ee7f71ef80032680f9ea0102/6d4c77aa21e84140a99efd8408b4c31f-ce6e3bd7fd878bdf478e6a73dab93b42-sd.m3u8?hdnts=exp=1766395687_acl=/a0337868ee7f71ef80032680f9ea0102/*_hmac=90ffc3d9cf194186fb4d73f821a3ef5f30e56e63d3a47413763799756edcc670" },
{ season: 2, episode: 6, url: "https://vod-limit-02.playspelis.com/a0fe9cceee7e71ef802e87c6371c0102/0c5df9db29db4f3f9bd1e63858c5828e-f48e1150692eda208ddb173a54c75f52-sd.m3u8?hdnts=exp=1766388069_acl=/a0fe9cceee7e71ef802e87c6371c0102/*_hmac=daabfc76e73f9585fd68f56de214d34c67eeb0c1bf5502465c0ed0d71cd24f3b" },
{ season: 2, episode: 7, url: "https://vod-limit-02.playspelis.com/606e24b8ee7e71efbfe64177d0d10102/056ea3bf9ea74e5dbbbb1b80de3acf05-76640cc3ea74b8065c786f13831fc572-sd.m3u8?hdnts=exp=1766385364_acl=/606e24b8ee7e71efbfe64177d0d10102/*_hmac=1beefb217a5ae2c8d5467eceb1353cf51762c3a29400e4208e92595fc694297a" },
{ season: 2, episode: 8, url: "https://delivery-limit-c.123pelicula.com/b01d4890ee7e71ef803e5014c1da0102/151eb4a76857453dbdd94e17945613f0-3d5ead03bacc97db2248c7fe83a5fb0b-sd.m3u8?hdnts=exp=1766380298_acl=/b01d4890ee7e71ef803e5014c1da0102/*_hmac=38845b7b7e035ad2f21ccd6242251c785b9f66eba2c77afb5cc8abd3a6f2ed5a" },
{ season: 2, episode: 9, url: "https://vod-limit-02.playspelis.com/10c51336ee7e71ef802e87c6371c0102/e38f08dad87448d1865206a962e6310a-34bcb61178c422cbe3b5438ed2fc7951-sd.m3u8?hdnts=exp=1766395765_acl=/10c51336ee7e71ef802e87c6371c0102/*_hmac=a70ca898c5a82288f760e7463988c4ae32eda956aa66a46942ab0a9b63101c12" },
{ season: 3, episode: 1, url: "https://vod-limit-02.playspelis.com/603d3e80ee7d71ef98074177d1c10102/e5412b7b9fb44c9aafff0c8fc12da021-99fea48e4f0be71075ca2fb1f380b48d-sd.m3u8?hdnts=exp=1766395783_acl=/603d3e80ee7d71ef98074177d1c10102/*_hmac=8b5aff893e8b335d348c8593e65dd18d4d8573e4ebfe59f93e2fdf1959e2de90" },
{ season: 3, episode: 2, url: "https://vod-limit-02.playspelis.com/40f43c45ee7d71ef98074177d1c10102/9a7adfdbc38e466086c86b39103f509b-5467fa6551d241499a36cee626a93226-sd.m3u8?hdnts=exp=1766367632_acl=/40f43c45ee7d71ef98074177d1c10102/*_hmac=a6631ffb22846f8cf534a0755cfebd1bfa9638dd2d28f00a34acf18cbb022047" },
{ season: 3, episode: 3, url: "https://vod-limit-02.playspelis.com/90c987d0ee7c71ef9e815014c1ca0102/d6868faa96b14fe18f56aa82aa4ca6ac-6fd5a632193e98cadef0d31100ca357f-sd.m3u8?hdnts=exp=1766344032_acl=/90c987d0ee7c71ef9e815014c1ca0102/*_hmac=01ec33cdecf1eaa4912f879e3ed1ab91b33d04af8243c049377a6b2da8a995cb" },
{ season: 3, episode: 4, url: "https://vod-limit-media.123flmsfree.com/f00f63b8ee7c71ef80032680f9ea0102/52d3d285927b4b89881f062b194b851c-aebcc55ec991fb069cd4704387858280-sd.m3u8?hdnts=exp=1766368887_acl=/f00f63b8ee7c71ef80032680f9ea0102/*_hmac=918565317e61ccc30d1f6d3c31dace34a78132fd4f36f824652993ac679d6d29" },
{ season: 3, episode: 5, url: "https://vod-limit-02.playspelis.com/70f3b7a1ee7b71ef9bc687c7361c0102/72cf7f0db7b448d98d35ffd731b7e2ec-b5c9d25a9620b56cc5c418bec6438fc9-sd.m3u8?hdnts=exp=1766395841_acl=/70f3b7a1ee7b71ef9bc687c7361c0102/*_hmac=b8b38fe76da8600716fe44956e8783f12aca761cfba94a5d122f1b8ad0acd795" },
{ season: 3, episode: 6, url: "https://vod-limit-02.playspelis.com/70d35e11ee7b71ef802e87c6371c0102/1d6f40faab2c4e778bb29024b6f02425-9b68b2dad6df54a4de1113f0fcb9ec67-sd.m3u8?hdnts=exp=1766381573_acl=/70d35e11ee7b71ef802e87c6371c0102/*_hmac=c0fda86d0d1bec1d3c8f908d86a6387216e5a9b6cb3e597558e7805902013704" },
{ season: 3, episode: 7, url: "https://vod-limit-02.playspelis.com/d07ae0ecee7a71ef9e815014c1ca0102/0f27f218129a453b9c21d8926b017a02-dad4952a6ca9605aa856bdb56b0957b5-sd.m3u8?hdnts=exp=1766387879_acl=/d07ae0ecee7a71ef9e815014c1ca0102/*_hmac=e9660414e63bbcef624c131a5b0e04b53e4538437e36ecc604469c975a15adb8" },
{ season: 3, episode: 8, url: "https://vod-limit-02.playspelis.com/10585ec5ee7a71efb1a35114c0db0102/1feb89936f394a43901ecd1dc53b1ce5-cbf972fd0380f602b0064c700b8846b4-ld.m3u8?hdnts=exp=1766377056_acl=/10585ec5ee7a71efb1a35114c0db0102/*_hmac=3a97c45749e821bd33b013e1758e7c1eea6f73598f240f41d5aa62f63356600f" },
{ season: 4, episode: 1, url: "https://vod-limit-02.playspelis.com/804393f4ee7971ef9e815014c1ca0102/2129edb6fed0488aa5d1fc7c904e47f6-7008be797121a203075b513dcbe12456-sd.m3u8?hdnts=exp=1766387898_acl=/804393f4ee7971ef9e815014c1ca0102/*_hmac=b12ae662d6465f80010af7bebf3b94abaaf9f9366757ca78e863b428c304acd3" },
{ season: 4, episode: 2, url: "https://vod-limit-02.playspelis.com/305362e4ee7871ef955b87c7371d0102/92263f2383c1490e8dc0f7601da0734e-6612312e145762a27675d92cdb80776f-sd.m3u8?hdnts=exp=1766348268_acl=/305362e4ee7871ef955b87c7371d0102/*_hmac=d03500bc8db8e7d4605f2acc2702c8131cf043da54495fdab5602523f2370a6a" },
{ season: 4, episode: 3, url: "https://c4-limit.cuevana4br.com/d0bb5fa7ee7871ef802686c6360c0102/6e8fc622d33f4425956181e9080dab77-cd6800a14f1228fc93cc4ffb2a87e58d-sd.m3u8?hdnts=exp=1766374055_acl=/d0bb5fa7ee7871ef802686c6360c0102/*_hmac=6de4e16ebe5722a0c79d5556ed1bae007e0f5ef15a916e09e47b9c089d3fd14f" },
{ season: 4, episode: 4, url: "https://vod-limit-02.playspelis.com/20edcba0ee7871efb1a35114c0db0102/7c5750bb3df342949ac3b8e5e793923b-639fa95d044494f1a085502949648be5-sd.m3u8?hdnts=exp=1766379571_acl=/20edcba0ee7871efb1a35114c0db0102/*_hmac=42b4bb21d3dcc8bd4ffadf4df4fa04a52c0d6246a46f6a641eb6f269c5776b1d" },
{ season: 4, episode: 5, url: "https://vod-limit-media.123flmsfree.com/10c1b9ffee7671ef9e815014c1ca0102/7c16cf36afdd48fc9f5e8ef3a9c384bd-842a3657f6b77c94006887b4375f7779-ld.m3u8?hdnts=exp=1766369344_acl=/10c1b9ffee7671ef9e815014c1ca0102/*_hmac=efafd802591f8202150f331169820c71fbeb3f0b2aa28fb93d5440b9a6905ca3" },
{ season: 4, episode: 6, url: "https://vod-limit-02.playspelis.com/e0aff344ee7571efbfe64177d0d10102/6e2c41bc99de4b0b8b6c6f284f6dcd25-229d4301515403472254344a1329fa07-sd.m3u8?hdnts=exp=1766395974_acl=/e0aff344ee7571efbfe64177d0d10102/*_hmac=996a9e04c6249aeeaf2f0731ab9fed297d2331f582c887e1b6cc3e405a5211cd" },
{ season: 4, episode: 7, url: "https://vod-limit-02.playspelis.com/9037bac4ee7471efbf984177d1c00102/d4c350c6dc1c4c01a924131696cf5fd7-ca544e3a6b2c4a70cc5771419154d130-sd.m3u8?hdnts=exp=1766378184_acl=/9037bac4ee7471efbf984177d1c00102/*_hmac=3655ab3fc1ebdadbf73288b444a3c1ddf378ee2d317c6d828d9e52fb3e48f8fe" },
{ season: 4, episode: 8, url: "https://vod-limit-media.123flmsfree.com/10cedd1cee7471ef803e5014c1da0102/2e2d4997dd9a40f698b334c7f9330c53-437c5b00d53fa9ebd1e48500af03333c-ld.m3u8?hdnts=exp=1766364957_acl=/10cedd1cee7471ef803e5014c1da0102/*_hmac=54a80d78d9218c6d9674d7a4a60802eb0a8b4ffb97e0fcb6f9b172f66a8dfa3c" },
{ season: 4, episode: 9, url: "https://vod-limit-02.playspelis.com/e0d2050cee7471ef9bc587c7361c0102/e685511897ac49a099d4822bce0e9828-4525944b9b532be38a081e976990e547-sd.m3u8?hdnts=exp=1766369876_acl=/e0d2050cee7471ef9bc587c7361c0102/*_hmac=ba0fda9a8c056fb140200a54772d6f2b301560f9766c955a05322ba90300107a" },
{ season: 5, episode: 1, url: "https://vod-limit-02.playspelis.com/20cb5657cb3071f0bf933108f4850102/507f520f6dcfbced13be5f9beaea2eb9-sd.m3u8?hdnts=exp=1766362584_acl=/20cb5657cb3071f0bf933108f4850102/*_hmac=0cd7dcb7108611014a7fcd33f3f778a7ebf6aa54cfb25a27b78202fc4f979270" },
{ season: 5, episode: 2, url: "https://vod-limit-02.playspelis.com/701eaa75cb2f71f0bfbc4077c0c20102/0db6993eafa393645016d55eb8395214-sd.m3u8?hdnts=exp=1766373099_acl=/701eaa75cb2f71f0bfbc4077c0c20102/*_hmac=95c3d1e00d8df095c3c0a33ea313ef54dbd7560ec0130863ee8f6236977ceff0" },
{ season: 5, episode: 3, url: "https://vod-limit-02.playspelis.com/20b11525cb3171f0b0784177d1c00102/02cdaa2f3df60b343581de546d5b7e23-sd.m3u8?hdnts=exp=1766392973_acl=/20b11525cb3171f0b0784177d1c00102/*_hmac=50b2e7f5ddc6662c942bbf41801f263f13be9481d669f93466ee95b095da6c39" },
{ season: 5, episode: 4, url: "https://stream-limit-vid.321moviesfree.com/60fe6f63cb3371f0a97f4076d1d30102/eb86b644e4117a07f297e87444f93663-sd.m3u8?hdnts=exp=1766380046_acl=/60fe6f63cb3371f0a97f4076d1d30102/*_hmac=d013a4daf714e96a2dc691cc044aa36227659d3b2912c2e12b59856a92421d44" },
{ season: 5, episode: 5, url: "" },
{ season: 5, episode: 6, url: "" },
{ season: 5, episode: 7, url: "" },
{ season: 5, episode: 8, url: "" },


    ],
    status: ['featured',]
  }, 
  { // The Last of Us
    tmdbId: "100088",
    type: "series",
    episodes: [
      { season: 1, episode: 1, url: "https://example.com/last-of-us-s01e01.mp4" },
      { season: 1, episode: 2, url: "https://example.com/last-of-us-s01e02.mp4" },
    ],
    status: []
  },
  { // Zootopia 2
  tmdbId: "1084242",
  type: "movie",
  playbackUrl: "https://media-limit-xr8a2.peliculaplay.com/b0eea4cccc2671f09d505114c0db0102/d607a5be5bbc0b427916861014dfe418-ld.m3u8?hdnts=exp=1766184400_acl=/b0eea4cccc2671f09d505114c0db0102/*_hmac=34ea385bd1608e2701e6cfb240b8a2006f72a86d298c2ed25cb23d8d90a22ab5", 
  status: ['featured'] 
  },
  { // Oppenheimer
    tmdbId: "872585",
    type: "movie",
    playbackUrl: "https://vod-limit-res.cuevana.life/a01bfb1b259d71f094734177d0d10102/0ad45b8b88d04f2bbff37f81475eb164-dfb32bd8c24ba01cc515bb710b5f3844-ld.m3u8?hdnts=exp=1766181361_acl=/a01bfb1b259d71f094734177d0d10102/*_hmac=75b767e0788e1067a755951f2eed6ba2a79832fec7f2996745207500368b6a82",
    status: []
  },
  { // Barbie Live Action
    tmdbId: "346698",
    type: "movie",
    playbackUrl: "https://example.com/barbie.mp4",
    status: []
  },
{ // Operação Big Hero
    tmdbId: "177572",
    type: "movie",
    playbackUrl: "https://data-limit-c.solo-latino.com/d03355eb660371f088324177d0d10102/396c3321846240da8f54e7df5abcf0ae-56c2966cc5f3cce87b877bc96d2117dc-ld.m3u8?hdnts=exp=1766245428_acl=/d03355eb660371f088324177d0d10102/*_hmac=b8db56ad3b1637d466677e367c7750d2af196e0082e9d0f11ad257b98a0a72d8",
    status: []
  },
  { // Dune
    tmdbId: "438631",
    type: "movie",
    playbackUrl: "https://example.com/dune.mp4",
    status: []
  },
  { // Interstellar
    tmdbId: "157336",
    type: "movie",
    playbackUrl: "https://example.com/interstellar.mp4",
    status: []
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
