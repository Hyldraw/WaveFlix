import { Content } from "@shared/schema";

const TMDB_API_KEY = process.env.TMDB_API_KEY || "684c7dd6657929028f2ad1bd1ef6e3c8";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";

interface TMDBMovie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  adult: boolean;
}

interface TMDBMovieDetails extends TMDBMovie {
  runtime: number;
  genres: Array<{ id: number; name: string }>;
  credits: {
    cast: Array<{
      name: string;
      profile_path: string | null;
    }>;
  };
}

interface TMDBTVShow {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date: string;
  vote_average: number;
  genre_ids: number[];
}

interface TMDBTVDetails extends TMDBTVShow {
  number_of_seasons: number;
  number_of_episodes: number;
  genres: Array<{ id: number; name: string }>;
  credits: {
    cast: Array<{
      name: string;
      profile_path: string | null;
    }>;
  };
}

async function fetchTMDB(endpoint: string): Promise<any> {
  const url = `${TMDB_BASE_URL}${endpoint}${endpoint.includes('?') ? '&' : '?'}api_key=${TMDB_API_KEY}&language=pt-BR`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`TMDB API error: ${response.statusText}`);
  }
  return response.json();
}

export async function getPopularMovies(page: number = 1): Promise<TMDBMovie[]> {
  const data = await fetchTMDB(`/movie/popular?page=${page}`);
  return data.results;
}

export async function getTopRatedMovies(page: number = 1): Promise<TMDBMovie[]> {
  const data = await fetchTMDB(`/movie/top_rated?page=${page}`);
  return data.results;
}

export async function getMovieDetails(movieId: number): Promise<TMDBMovieDetails> {
  return fetchTMDB(`/movie/${movieId}?append_to_response=credits`);
}

export async function getPopularTVShows(page: number = 1): Promise<TMDBTVShow[]> {
  const data = await fetchTMDB(`/tv/popular?page=${page}`);
  return data.results;
}

export async function getTopRatedTVShows(page: number = 1): Promise<TMDBTVShow[]> {
  const data = await fetchTMDB(`/tv/top_rated?page=${page}`);
  return data.results;
}

export async function getTVDetails(tvId: number): Promise<TMDBTVDetails> {
  return fetchTMDB(`/tv/${tvId}?append_to_response=credits`);
}

export async function getTrendingMoviesWeek(page: number = 1): Promise<TMDBMovie[]> {
  const data = await fetchTMDB(`/trending/movie/week?page=${page}`);
  return data.results;
}

export async function getTrendingTVWeek(page: number = 1): Promise<TMDBTVShow[]> {
  const data = await fetchTMDB(`/trending/tv/week?page=${page}`);
  return data.results;
}

export async function getNowPlayingMovies(page: number = 1): Promise<TMDBMovie[]> {
  const data = await fetchTMDB(`/movie/now_playing?page=${page}`);
  return data.results;
}

export async function getUpcomingMovies(page: number = 1): Promise<TMDBMovie[]> {
  const data = await fetchTMDB(`/movie/upcoming?page=${page}`);
  return data.results;
}

function getClassification(adult: boolean, voteAverage: number): string {
  if (adult) return "18+";
  if (voteAverage >= 8) return "12+";
  if (voteAverage >= 6) return "10+";
  return "L";
}

// Mapeamento de gêneros do TMDB para categorias em português
const genreMapping: { [key: string]: string[] } = {
  "Action & Adventure": ["Ação", "Aventura"],
  "Sci-Fi & Fantasy": ["Ficção Científica", "Fantasia"],
  "War & Politics": ["Guerra", "Drama"],
  "Action": ["Ação"],
  "Adventure": ["Aventura"],
  "Science Fiction": ["Ficção Científica"],
  "Fantasy": ["Fantasia"],
  "Horror": ["Terror"],
  "Thriller": ["Thriller"],
  "Mystery": ["Mistério", "Thriller"],
  "Mistério": ["Mistério", "Thriller"],
  "Comedy": ["Comédia"],
  "Comédia": ["Comédia"],
  "Drama": ["Drama"],
  "Romance": ["Romance"],
  "Crime": ["Crime"],
  "Animation": ["Animação"],
  "Animação": ["Animação"],
  "Documentary": ["Documentário"],
  "Documentário": ["Documentário"],
  "Family": ["Família"],
  "Família": ["Família"],
  "Kids": ["Infantil", "Animação"],
  "Western": ["Faroeste"],
  "Faroeste": ["Faroeste"],
  "Music": ["Musical"],
  "History": ["História"],
  "War": ["Guerra"],
  "TV Movie": ["Drama"],
};

// Função para traduzir gêneros do TMDB para categorias em português
function translateGenres(tmdbGenres: string[]): string {
  const translatedGenres: Set<string> = new Set();
  
  for (const genre of tmdbGenres) {
    if (genreMapping[genre]) {
      genreMapping[genre].forEach(g => translatedGenres.add(g));
    } else {
      translatedGenres.add(genre);
    }
  }
  
  return Array.from(translatedGenres).join(', ');
}

export function convertMovieToContent(movie: TMDBMovieDetails, featured: boolean = false): any {
  const tmdbGenres = movie.genres.map(g => g.name);
  const genres = translateGenres(tmdbGenres) || "Ação";
  const cast = movie.credits.cast.slice(0, 4).map(actor => ({
    name: actor.name,
    photo: actor.profile_path 
      ? `${TMDB_IMAGE_BASE}/w138_and_h175_face${actor.profile_path}`
      : "https://via.placeholder.com/138x175"
  }));

  // Extrair ano de forma segura
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : new Date().getFullYear();
  
  // Marcar como featured se for lançamento recente (últimos 2 anos) e se o featured flag for true
  const currentYear = new Date().getFullYear();
  const isRecentRelease = featured && year >= currentYear - 1;

  const result: any = {
    id: String(movie.id),
    title: movie.title,
    year: year || new Date().getFullYear(),
    rating: movie.vote_average.toFixed(1),
    genre: genres,
    classification: getClassification(movie.adult, movie.vote_average),
    cast: cast,
    description: movie.overview || "Sem descrição disponível.",
    fullDescription: movie.overview || "Sem descrição disponível.",
    poster: movie.poster_path 
      ? `${TMDB_IMAGE_BASE}/w300_and_h450_bestv2${movie.poster_path}`
      : "https://via.placeholder.com/300x450",
    backdrop: movie.backdrop_path
      ? `${TMDB_IMAGE_BASE}/w1280${movie.backdrop_path}`
      : "https://via.placeholder.com/1280x720",
    embed: "",
    featured: isRecentRelease,
    type: "movie"
  };

  // Adicionar duration apenas se runtime existir
  if (movie.runtime) {
    result.duration = `${movie.runtime} min`;
  }

  // Não incluir seasons/episodes para filmes (omitir em vez de null)
  
  return result;
}

export function convertTVToContent(tv: TMDBTVDetails, featured: boolean = false): any {
  const tmdbGenres = tv.genres.map(g => g.name);
  const genres = translateGenres(tmdbGenres) || "Drama";
  const cast = tv.credits.cast.slice(0, 4).map(actor => ({
    name: actor.name,
    photo: actor.profile_path 
      ? `${TMDB_IMAGE_BASE}/w138_and_h175_face${actor.profile_path}`
      : "https://via.placeholder.com/138x175"
  }));

  // Extrair ano de forma segura
  const year = tv.first_air_date ? new Date(tv.first_air_date).getFullYear() : new Date().getFullYear();
  
  // Marcar como featured se for lançamento recente (últimos 2 anos) e se o featured flag for true
  const currentYear = new Date().getFullYear();
  const isRecentRelease = featured && year >= currentYear - 1;

  const result: any = {
    id: String(tv.id),
    title: tv.name,
    year: year || new Date().getFullYear(),
    rating: tv.vote_average.toFixed(1),
    genre: genres,
    classification: getClassification(false, tv.vote_average),
    cast: cast,
    description: tv.overview || "Sem descrição disponível.",
    fullDescription: tv.overview || "Sem descrição disponível.",
    poster: tv.poster_path 
      ? `${TMDB_IMAGE_BASE}/w300_and_h450_bestv2${tv.poster_path}`
      : "https://via.placeholder.com/300x450",
    backdrop: tv.backdrop_path
      ? `${TMDB_IMAGE_BASE}/w1280${tv.backdrop_path}`
      : "https://via.placeholder.com/1280x720",
    embed: "",
    featured: isRecentRelease,
    type: "series"
  };

  // Adicionar seasons e episodes se existirem
  if (tv.number_of_seasons) {
    result.seasons = tv.number_of_seasons;
  }
  if (tv.number_of_episodes) {
    result.episodes = tv.number_of_episodes;
  }

  return result;
}
