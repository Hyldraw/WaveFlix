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
  { // Stranger Things
    tmdbId: "66732",
    type: "series",
    episodes: [
      { season: 1, episode: 1, url: "https://example.com/stranger-things-s01e01.mp4" },
      { season: 1, episode: 2, url: "https://example.com/stranger-things-s01e02.mp4" },
    ],
    status: ['featured']
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
