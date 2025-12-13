import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { content } from '../shared/schema';

async function addMovies() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
  }
  
  const sql = neon(process.env.DATABASE_URL);
  const db = drizzle(sql);
  
  console.log("Adding movies to database...");
  
  const movies = [
    {
      id: "tt11655566",
      title: "Lilo & Stitch",
      year: 2025,
      rating: "6.8",
      duration: "108 min",
      genre: "Animação",
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
      embed: "https://embed.warezcdn.link/filme/tt11655566",
      featured: true,
      type: "movie"
    },
    {
      id: "872585",
      title: "Oppenheimer",
      year: 2023,
      rating: "8.4",
      duration: "180 min",
      genre: "Drama",
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
      genre: "Ficção Científica",
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
      genre: "Comédia",
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
  
  for (const movie of movies) {
    try {
      const result = await db.insert(content).values(movie).returning();
      console.log(`Inserted: ${movie.title}`);
    } catch (error: any) {
      console.log(`Error inserting ${movie.title}:`, error.message);
    }
  }
  
  console.log("Movies added!");
}

addMovies().catch(console.error);
