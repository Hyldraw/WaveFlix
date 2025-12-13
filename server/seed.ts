import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { content } from '../shared/schema';

function generateEmbed(id: string, type: 'movie' | 'series'): string {
  const baseUrl = 'https://embed.warezcdn.link';
  if (type === 'movie') {
    return `${baseUrl}/filme/${id}`;
  } else {
    return `${baseUrl}/serie/${id}`;
  }
}

async function seed() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }
  
  const sql = neon(process.env.DATABASE_URL);
  const db = drizzle(sql);
  
  console.log("Seeding database with sample content...");
  
  const sampleContent = [
    {
      id: "tt33043892",
      title: "Dexter: Ressurreição",
      year: 2025,
      rating: "9.2",
      duration: null,
      seasons: 1,
      episodes: 1,
      genre: "Crime, Drama, Suspense",
      classification: "18+",
      cast: [
        { name: "Michael C. Hall", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/7zUMGoujuev5PUwwv4Gl6ikB50k.jpg" },
        { name: "Uma Thurman", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/sBgAZWi3o4FsnaTvnTNtK6jpQcF.jpg" },
        { name: "Jack Alcott", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/jJEcVQx10KNASfMmwGE9KPRQW8u.jpg" }
      ],
      description: "Depois de ser baleado por seu filho Harrison, Dexter acorda do coma e descobre que ele está desaparecido. Ele o procura em Nova York para se reconciliar, mas Batista chega com perguntas do passado.",
      fullDescription: "Depois de ser baleado por seu filho Harrison, Dexter acorda do coma e descobre que ele está desaparecido. Ele o procura em Nova York para se reconciliar, mas Batista chega com perguntas do passado.",
      poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/wG6GBTreXHoBhxsFY4vVSQtYey5.jpg",
      backdrop: "https://media.themoviedb.org/t/p/w533_and_h300_bestv2/8J0SjKToFBbg8dKpocVOCsrC77C.jpg",
      embed: generateEmbed("tt33043892", "series"),
      featured: true,
      type: "series"
    },
    {
      id: "tt11655566",
      title: "Lilo & Stitch",
      year: 2025,
      rating: "6.8",
      duration: "108 min",
      genre: "Animação, Família, Comédia",
      classification: "10+",
      cast: [
        { name: "Maia Kealoha", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/jqsKbBF28V2Oq5tKPR5USkNufwC.jpg" },
        { name: "Sydney Agudong", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/3K5hJ3meeClHWsPKetqd9qgyveJ.jpg" },
        { name: "Chris Sanders", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/6CtrIOCxggJ5eIAWeFQqd4Hs9FP.jpg" }
      ],
      description: "Stitch, um alienígena, chega ao planeta Terra após fugir de sua prisão e tenta se passar por um cachorro para se camuflar.",
      fullDescription: "Stitch, um alienígena, chega ao planeta Terra após fugir de sua prisão e tenta se passar por um cachorro para se camuflar. As coisas mudam quando Lilo, uma travessa menina, o adota de um abrigo de animais.",
      poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/bTnWeKXYU3Fal6rc8Bm4lBcEHSV.jpg",
      backdrop: "https://media.themoviedb.org/t/p/w1280/hJKqLN8P6rKVKKcYDvOF0xH04Y.jpg",
      embed: generateEmbed("tt11655566", "movie"),
      featured: true,
      type: "movie"
    },
    {
      id: "1396",
      title: "Breaking Bad",
      year: 2008,
      rating: "9.5",
      duration: null,
      seasons: 5,
      episodes: 62,
      genre: "Drama, Crime, Suspense",
      classification: "18+",
      cast: [
        { name: "Bryan Cranston", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/7Jahy5LZX2Fo8fGJltMreAI49hC.jpg" },
        { name: "Aaron Paul", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/8Ac9uuoYwZoYVAIJPbPTtCKrl3c.jpg" },
        { name: "Anna Gunn", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/lKlGjfmu9mJcF4upNrhtG3X9uyq.jpg" },
        { name: "Dean Norris", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/owHByV6k5TOI9xY8XT9Nkq0n2Dq.jpg" }
      ],
      description: "Quando um professor de química do ensino médio é diagnosticado com câncer de pulmão inoperável, ele se volta para a fabricação e venda de metanfetamina para garantir o futuro de sua família.",
      fullDescription: "Quando Walter White, um professor de química do ensino médio de Albuquerque, Novo México, é diagnosticado com câncer de pulmão inoperável no estágio III, ele se volta para a fabricação e venda de metanfetamina com um ex-aluno, Jesse Pinkman, para garantir o futuro de sua família antes de morrer.",
      poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
      backdrop: "https://media.themoviedb.org/t/p/w1280/gc8PfyTqzqltKPW3X0cIVUGmagz.jpg",
      embed: "https://embed.warezcdn.link/serie/tt0903747",
      featured: true,
      type: "series"
    },
    {
      id: "66732",
      title: "Stranger Things",
      year: 2016,
      rating: "8.6",
      duration: null,
      seasons: 4,
      episodes: 34,
      genre: "Ficção Científica, Terror, Drama",
      classification: "16+",
      cast: [
        { name: "Millie Bobby Brown", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/4HjUVt2Gv6d2jLGqKEvB1yKidEC.jpg" },
        { name: "Finn Wolfhard", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/5TBB2TnKfxxgJ0q8JtcbU3bSrMX.jpg" },
        { name: "Winona Ryder", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/5eAhYLkbyGphKKoKpjkrJEhYqYS.jpg" },
        { name: "David Harbour", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/nvxFE9TXLEi5gOdRaJYmgDFdMdE.jpg" }
      ],
      description: "Quando um garoto desaparece, a cidade toda participa na busca. Mas o que encontram são segredos, forças sobrenaturais e uma garotinha.",
      fullDescription: "Na pequena cidade de Hawkins, Indiana, quando um garoto chamado Will Byers desaparece misteriosamente, seus amigos, sua família e a polícia local se envolvem em uma busca extraordinária. O que eles descobrem é uma série de segredos sobrenaturais, experimentos governamentais e uma garota com poderes telecinéticos chamada Eleven.",
      poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
      backdrop: "https://media.themoviedb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
      embed: "https://embed.warezcdn.link/serie/tt4574334",
      featured: true,
      type: "series"
    },
    {
      id: "100088",
      title: "The Last of Us",
      year: 2023,
      rating: "8.8",
      duration: null,
      seasons: 2,
      episodes: 16,
      genre: "Ação, Drama, Aventura",
      classification: "18+",
      cast: [
        { name: "Pedro Pascal", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/rJSRFiDSMYgBfQ8LzZU3xRxW9LL.jpg" },
        { name: "Bella Ramsey", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/5MmEK0AWJBY5CYe0BkG3ZfN1COS.jpg" },
        { name: "Anna Torv", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/hJrAcbzPdfkZW06aQmQ2qK2YTYY.jpg" },
        { name: "Gabriel Luna", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/e9UzlcPVGRbm35pXOvFE7slGXHq.jpg" }
      ],
      description: "Após uma pandemia global que destruiu a civilização, um sobrevivente endurecido assume a custódia de uma garota de 14 anos que pode ser a última esperança da humanidade.",
      fullDescription: "Vinte anos após a destruição da civilização moderna por uma pandemia fúngica, Joel, um sobrevivente endurecido, é contratado para contrabandear Ellie, uma garota de 14 anos, para fora de uma zona de quarentena opressiva. O que começa como um pequeno trabalho logo se torna uma jornada brutal e comovente através dos Estados Unidos.",
      poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dY18bfoffI1B7u4xIR6aaSmB8e5.jpg",
      backdrop: "https://media.themoviedb.org/t/p/w1280/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
      embed: "https://embed.warezcdn.link/serie/tt3581920",
      featured: true,
      type: "series"
    },
    {
      id: "872585",
      title: "Oppenheimer",
      year: 2023,
      rating: "8.4",
      duration: "180 min",
      genre: "Drama, História, Suspense",
      classification: "16+",
      cast: [
        { name: "Cillian Murphy", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/llkbyWKwpfowZ6C8peBjIV9jj99.jpg" },
        { name: "Emily Blunt", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/iqVvHRq8qGTk0xqUBrF07U2Dblm.jpg" },
        { name: "Matt Damon", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/At3JgvaNeEN4Z4ESKlhhes85Xo3.jpg" },
        { name: "Robert Downey Jr.", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg" }
      ],
      description: "A história de J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica.",
      fullDescription: "A história de J. Robert Oppenheimer e seu papel como diretor científico do Projeto Manhattan, o programa secreto da Segunda Guerra Mundial que desenvolveu as primeiras armas nucleares do mundo. O filme explora sua vida, seu gênio científico e as consequências morais da criação da bomba atômica.",
      poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      backdrop: "https://media.themoviedb.org/t/p/w1280/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
      embed: "https://embed.warezcdn.link/filme/tt15398776",
      featured: true,
      type: "movie"
    },
    {
      id: "693134",
      title: "Duna: Parte Dois",
      year: 2024,
      rating: "8.2",
      duration: "166 min",
      genre: "Ficção Científica, Aventura, Ação",
      classification: "14+",
      cast: [
        { name: "Timothée Chalamet", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/BE2sdjpgsa2rNTFa66f7upkaOP.jpg" },
        { name: "Zendaya", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/AigWpWk5Cw4g4iJkNddnSoZI7WZ.jpg" },
        { name: "Rebecca Ferguson", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/rFzRCsrPLxXMEqCogFGWtg9E1tL.jpg" },
        { name: "Austin Butler", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/rXBLVjCzk0GVQE1pRn9J8RjjAHB.jpg" }
      ],
      description: "Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família.",
      fullDescription: "Paul Atreides se une a Chani e aos Fremen em uma jornada de vingança contra os conspiradores que destruíram sua família. Enfrentando uma escolha entre o amor de sua vida e o destino do universo conhecido, ele deve impedir um futuro terrível que só ele pode prever.",
      poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/aQCFm0eAhz4wq3JlMNFE1LBZAWb.jpg",
      backdrop: "https://media.themoviedb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
      embed: "https://embed.warezcdn.link/filme/tt15239678",
      featured: true,
      type: "movie"
    },
    {
      id: "346698",
      title: "Barbie",
      year: 2023,
      rating: "7.0",
      duration: "114 min",
      genre: "Comédia, Fantasia, Aventura",
      classification: "12+",
      cast: [
        { name: "Margot Robbie", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/5bBRXwPaSrgKkAhkcdBOdo5L5HD.jpg" },
        { name: "Ryan Gosling", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/lyUyVARQKhGxaxy0FbPJCQRpiaW.jpg" },
        { name: "America Ferrera", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/2KYbx9nDNHnNMomN1cXMi6JNMOl.jpg" },
        { name: "Kate McKinnon", photo: "https://media.themoviedb.org/t/p/w138_and_h175_face/vmUGI9R4omIpNvyPxPmVTz9VQYI.jpg" }
      ],
      description: "Barbie e Ken estão se divertindo no mundo colorido de Barbieland. Quando eles têm a chance de ir ao mundo real, logo descobrem as alegrias e perigos de viver entre humanos.",
      fullDescription: "Barbie vive em Barbieland, uma utopia colorida onde todas as versões de Barbie vivem em harmonia. Quando Barbie Estereótipo começa a ter pensamentos sobre a morte e outros problemas do mundo real, ela parte para uma jornada ao mundo real, acompanhada por Ken, para descobrir a fonte de sua crise existencial.",
      poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      backdrop: "https://media.themoviedb.org/t/p/w1280/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
      embed: "https://embed.warezcdn.link/filme/tt1517268",
      featured: false,
      type: "movie"
    }
  ];
  
  for (const item of sampleContent) {
    try {
      await db.insert(content).values(item).onConflictDoNothing();
      console.log(`Inserted: ${item.title}`);
    } catch (error) {
      console.log(`Skipped: ${item.title} (already exists or error)`);
    }
  }
  
  console.log("Seeding complete!");
}

seed().catch(console.error);
