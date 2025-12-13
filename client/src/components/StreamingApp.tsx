import { useState, useEffect, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Search,
  Play,
  Star,
  Clock,
  X,
  Home,
  Tv,
  Film,
  Heart,
  ArrowLeft,
  Info,
  Plus,
  Check,
  Sword,
  Laugh,
  Drama,
  Skull,
  Zap,
  Users,
  Compass,
  AlertTriangle,
  Sparkles,
  Shield,
  PaintBucket,
  Ghost,
  Filter,
  Calendar,
  TrendingUp,
  SortAsc,
  ChevronDown,
  ChevronUp,
  Flame,
  Award,
  Clapperboard,
  Crown,
  MonitorPlay
} from "lucide-react";
import { useLockPortrait } from "@/hooks/useScreenOrientation";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import ModernVideoPlayer from '@/components/ModernVideoPlayer';
import type { Content } from "@shared/schema";

interface ExtendedContent extends Content {
  playbackUrl?: string;
  episodeLinks?: Array<{ season: number; episode: number; url: string }>;
  status?: string[];
}

// Configuração da API TMDB
const TMDB_API_KEY = '684c7dd6657929028f2ad1bd1ef6e3c8';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p';

interface TMDBContent {
  id: number;
  title?: string;
  name?: string;
  original_title?: string;
  original_name?: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date?: string;
  first_air_date?: string;
  vote_average: number;
  media_type?: 'movie' | 'tv';
  genre_ids?: number[];
  genres?: { id: number; name: string }[];
}

interface Genre {
  id: number;
  name: string;
}

// Função para buscar da API TMDB
async function fetchTMDB(endpoint: string): Promise<any> {
  const url = `${TMDB_BASE_URL}${endpoint}${endpoint.includes('?') ? '&' : '?'}api_key=${TMDB_API_KEY}&language=pt-BR`;
  const response = await fetch(url);
  if (!response.ok) {
    console.error(`TMDB API error for ${url}: ${response.statusText}`);
    throw new Error(`TMDB API error: ${response.statusText}`);
  }
  return response.json();
}

// Cache para gêneros
let genresCache: Genre[] = [];

// Mapeamento de gêneros do TMDB para categorias do app em português
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

// Função para traduzir gêneros do TMDB para categorias do app
function translateGenres(tmdbGenres: string[]): string[] {
  const translatedGenres: Set<string> = new Set();
  
  for (const genre of tmdbGenres) {
    if (genreMapping[genre]) {
      genreMapping[genre].forEach(g => translatedGenres.add(g));
    } else {
      // Se não há mapeamento, usa o gênero original
      translatedGenres.add(genre);
    }
  }
  
  return Array.from(translatedGenres);
}

// Função para buscar gêneros
async function getGenres(type: 'movie' | 'tv'): Promise<Genre[]> {
  if (genresCache.length > 0) return genresCache;
  try {
    const response = await fetchTMDB(`/${type}/genres`);
    genresCache = response.genres;
    return genresCache;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
}

// Converter TMDBContent para Content
async function convertToContent(item: TMDBContent, type: 'movie' | 'tv'): Promise<Content> {
  const title = item.title || item.name || item.original_title || item.original_name || 'Unknown Title';
  const releaseDate = item.release_date || item.first_air_date || '';
  const year = releaseDate ? new Date(releaseDate).getFullYear() : new Date().getFullYear();
  const genres = await getGenres(type);
  const itemGenres = genres.filter(genre => item.genre_ids?.includes(genre.id));
  const tmdbGenreNames = itemGenres.map(g => g.name);
  const translatedGenres = translateGenres(tmdbGenreNames);
  const genreName = translatedGenres.length > 0 ? translatedGenres.join(', ') : 'Unknown';

  // Placeholder for classification, as TMDB doesn't always provide this directly in a standardized way for all regions.
  // You might need a more complex logic or a different API endpoint if precise classification is critical.
  const classification = item.vote_average >= 8 ? '12+' : 'L'; 

  return {
    id: String(item.id),
    title,
    year,
    rating: item.vote_average.toFixed(1),
    duration: null,
    seasons: null,
    episodes: null,
    genre: genreName,
    classification: classification,
    cast: [], // Placeholder, cast would need a separate fetch
    description: item.overview || 'Sem descrição disponível.',
    fullDescription: item.overview || 'Sem descrição disponível.',
    poster: item.poster_path
      ? `${TMDB_IMAGE_BASE}/w300_and_h450_bestv2${item.poster_path}`
      : 'https://via.placeholder.com/300x450?text=No+Poster',
    backdrop: item.backdrop_path
      ? `${TMDB_IMAGE_BASE}/w1280${item.backdrop_path}`
      : 'https://via.placeholder.com/1280x720?text=No+Backdrop',
    embed: '', // Embed URL will be generated on demand
    featured: false,
    type: type === 'tv' ? 'series' : 'movie'
  };
}

const getClassificationColor = (classification: string) => {
  switch (classification) {
    case "L":
    case "Livre":
      return "bg-green-600";
    case "10+":
      return "bg-blue-700";
    case "12+":
      return "bg-yellow-600";
    case "14+":
      return "bg-orange-600";
    case "16+":
      return "bg-red-600";
    case "18+":
      return "bg-black";
    default:
      return "bg-gray-600";
  }
};

const getCategoryIcon = (category: string, size: number = 24) => {
  const iconProps = { size, className: "text-blue-400 group-hover:text-white transition-colors" };

  switch (category.toLowerCase()) {
    case "ação":
      return <Sword {...iconProps} />;
    case "comédia":
      return <Laugh {...iconProps} />;
    case "drama":
      return <Drama {...iconProps} />;
    case "terror":
      return <Skull {...iconProps} />;
    case "ficção científica":
      return <Zap {...iconProps} />;
    case "romance":
      return <Heart {...iconProps} />;
    case "aventura":
      return <Compass {...iconProps} />;
    case "thriller":
      return <AlertTriangle {...iconProps} />;
    case "fantasia":
      return <Sparkles {...iconProps} />;
    case "crime":
      return <Shield {...iconProps} />;
    case "animação":
      return <PaintBucket {...iconProps} />;
    case "sobrenatural":
      return <Ghost {...iconProps} />;
    default:
      return <Film {...iconProps} />;
  }
};

const getCategoryDescription = (category: string, type: 'movie' | 'series') => {
  const descriptions: Record<string, { movie: string; series: string }> = {
    "Ação": {
      movie: "Filmes com muita adrenalina e emoção",
      series: "Séries cheias de ação e aventura"
    },
    "Comédia": {
      movie: "Filmes para rir e se divertir",
      series: "Séries hilariantes e divertidas"
    },
    "Drama": {
      movie: "Histórias profundas e emocionantes",
      series: "Narrativas envolventes e dramáticas"
    },
    "Terror": {
      movie: "Filmes de terror e suspense",
      series: "Séries para arrepiar e assustar"
    },
    "Ficção Científica": {
      movie: "Futurismo e tecnologia avançada",
      series: "Explore universos futuristas"
    },
    "Romance": {
      movie: "Histórias de amor emocionantes",
      series: "Romances cativantes e apaixonantes"
    },
    "Aventura": {
      movie: "Jornadas épicas e descobertas",
      series: "Aventuras emocionantes e épicas"
    },
    "Thriller": {
      movie: "Suspense de tirar o fôlego",
      series: "Mistérios e suspense intenso"
    },
    "Fantasia": {
      movie: "Mundos mágicos e fantásticos",
      series: "Universos mágicos e encantados"
    },
    "Crime": {
      movie: "Investigações e mistérios criminais",
      series: "Crimes e investigações policiais"
    },
    "Animação": {
      movie: "Animações para toda família",
      series: "Séries animadas e divertidas"
    },
    "Sobrenatural": {
      movie: "Fenômenos além do natural",
      series: "Mistérios sobrenaturais e paranormais"
    }
  };

  return descriptions[category]?.[type] || `${type === 'movie' ? 'Filmes' : 'Séries'} de ${category.toLowerCase()}`;
};

// Interface para progresso de visualização
interface WatchProgress {
  contentId: string;
  currentTime: number;
  duration: number;
  episodeNumber?: number;
  seasonNumber?: number;
  updatedAt: number;
}

// Visitor ID para identificar o usuário sem autenticação
const getVisitorId = (): string => {
  let visitorId = localStorage.getItem('visitorId');
  if (!visitorId) {
    visitorId = 'visitor_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
    localStorage.setItem('visitorId', visitorId);
  }
  return visitorId;
};

// Funções para gerenciar progresso no localStorage (cache local)
const getWatchProgressLocal = (): WatchProgress[] => {
  try {
    const allProgress: WatchProgress[] = JSON.parse(localStorage.getItem('watchProgress') || '[]');
    return allProgress.sort((a, b) => b.updatedAt - a.updatedAt);
  } catch {
    return [];
  }
};

const saveWatchProgressLocal = (progress: WatchProgress) => {
  const allProgress = getWatchProgressLocal();
  const key = progress.seasonNumber !== undefined && progress.episodeNumber !== undefined
    ? `${progress.contentId}-${progress.seasonNumber}-${progress.episodeNumber}`
    : progress.contentId;
  
  const filteredProgress = allProgress.filter(p => {
    const pKey = p.seasonNumber !== undefined && p.episodeNumber !== undefined
      ? `${p.contentId}-${p.seasonNumber}-${p.episodeNumber}`
      : p.contentId;
    return pKey !== key;
  });
  
  filteredProgress.unshift(progress);
  const trimmed = filteredProgress.slice(0, 50);
  localStorage.setItem('watchProgress', JSON.stringify(trimmed));
};

// Salvar progresso no servidor (chamada assíncrona em background)
const saveWatchProgressToServer = async (progress: WatchProgress) => {
  try {
    const visitorId = getVisitorId();
    await fetch('/api/watch-progress', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitorId,
        contentId: progress.contentId,
        seasonNumber: progress.seasonNumber || null,
        episodeNumber: progress.episodeNumber || null,
        positionSeconds: Math.floor(progress.currentTime),
        durationSeconds: Math.floor(progress.duration)
      })
    });
  } catch (error) {
    console.error('Error saving watch progress to server:', error);
  }
};

// Throttle para salvar progresso (evitar muitas requisições)
let saveProgressTimeout: NodeJS.Timeout | null = null;
const saveWatchProgress = (progress: WatchProgress) => {
  saveWatchProgressLocal(progress);
  
  if (saveProgressTimeout) {
    clearTimeout(saveProgressTimeout);
  }
  saveProgressTimeout = setTimeout(() => {
    saveWatchProgressToServer(progress);
  }, 5000);
};

// Buscar progresso do servidor
const fetchProgressFromServer = async (contentId: string, season?: number, episode?: number): Promise<WatchProgress | null> => {
  try {
    const visitorId = getVisitorId();
    const params = new URLSearchParams({ visitorId });
    if (season !== undefined) params.append('season', season.toString());
    if (episode !== undefined) params.append('episode', episode.toString());
    
    const response = await fetch(`/api/watch-progress/${contentId}?${params}`);
    if (!response.ok) return null;
    
    const data = await response.json();
    if (data.positionSeconds > 0) {
      return {
        contentId,
        currentTime: data.positionSeconds,
        duration: data.durationSeconds || 0,
        seasonNumber: data.seasonNumber,
        episodeNumber: data.episodeNumber,
        updatedAt: Date.now()
      };
    }
    return null;
  } catch {
    return null;
  }
};

const getContentProgress = (contentId: string, season?: number, episode?: number): WatchProgress | null => {
  const allProgress = getWatchProgressLocal();
  return allProgress.find(p => {
    if (p.contentId !== contentId) return false;
    if (season !== undefined && p.seasonNumber !== season) return false;
    if (episode !== undefined && p.episodeNumber !== episode) return false;
    return true;
  }) || null;
};

export default function StreamingApp() {
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("home");
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [currentView, setCurrentView] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchFilters, setSearchFilters] = useState({
    type: "all",
    genre: "all",
    yearRange: "all",
    rating: "all"
  });
  const [recentSearches, setRecentSearches] = useState<string[]>(
    JSON.parse(localStorage.getItem('recentSearches') || '[]')
  );
  const [showSearchFilters, setShowSearchFilters] = useState(false);
  const [favoritesFilterGenre, setFavoritesFilterGenre] = useState("all");
  const [favoritesActiveTab, setFavoritesActiveTab] = useState("movies");
  const [movieCategories] = useState([
    "Ação", "Comédia", "Drama", "Terror", "Ficção Científica",
    "Romance", "Aventura", "Thriller", "Fantasia", "Crime", "Animação"
  ]);
  const [seriesCategories] = useState([
    "Ação", "Comédia", "Drama", "Terror", "Ficção Científica",
    "Romance", "Aventura", "Thriller", "Fantasia", "Crime", "Animação"
  ]);
  
  // Estados para player interno e popup de episódios
  const [showPlayer, setShowPlayer] = useState(false);
  const [playerUrl, setPlayerUrl] = useState("");
  const [isVideoPlayer, setIsVideoPlayer] = useState(false);
  const [showEpisodesModal, setShowEpisodesModal] = useState(false);
  const [currentEpisodeInfo, setCurrentEpisodeInfo] = useState<{season: number; episode: number; episodeTitle?: string} | null>(null);
  const [playerInitialTime, setPlayerInitialTime] = useState(0);
  
  // Lock screen to portrait when not in player mode
  useLockPortrait(!showPlayer);
  
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Hooks for local images (kept for potential fallback or specific assets)
  const { getActorImage, getPosterImage } = useLocalImages();

  // Fetch all registered content with TMDB data
  const { data: allContent = [] } = useQuery<ExtendedContent[]>({
    queryKey: ["/api/registered-content"],
    queryFn: async () => {
      const res = await fetch("/api/registered-content");
      const data = await res.json();
      return Array.isArray(data) ? data : [];
    },
  });

  // Filtered featured content from registered content
  const featuredContent = allContent.filter((item: ExtendedContent) => 
    item.status?.includes('featured') || item.featured
  );

  // Fetch user list from your API
  const { data: userListContent = [] } = useQuery<Content[]>({
    queryKey: ["/api/user-list"],
    queryFn: async () => {
      try {
        const visitorId = getVisitorId();
        const res = await fetch(`/api/user-list?visitorId=${encodeURIComponent(visitorId)}`);
        if (!res.ok) throw new Error("Failed to fetch user list");
        const data = await res.json();
        return Array.isArray(data) ? data : [];
      } catch (error) {
        console.error("Error fetching user list:", error);
        return [];
      }
    },
  });

  // Mutations for user list
  const addToListMutation = useMutation({
    mutationFn: (contentId: string) => {
      const visitorId = getVisitorId();
      return apiRequest("POST", "/api/user-list", { contentId, visitorId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/user-list"] });
      toast({ title: "Adicionado à sua lista!" });
    },
    onError: (error) => {
      toast({ title: "Erro ao adicionar", description: error.message });
    }
  });

  const removeFromListMutation = useMutation({
    mutationFn: (contentId: string) => {
      const visitorId = getVisitorId();
      return apiRequest("DELETE", `/api/user-list/${contentId}?visitorId=${encodeURIComponent(visitorId)}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/user-list"] });
      toast({ title: "Removido da sua lista!" });
    },
    onError: (error) => {
      toast({ title: "Erro ao remover", description: error.message });
    }
  });

  // Helper functions for search
  const addToRecentSearches = (term: string) => {
    if (term.trim() && !recentSearches.includes(term)) {
      const newRecentSearches = [term, ...recentSearches.slice(0, 4)];
      setRecentSearches(newRecentSearches);
      localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const applySearchFilters = (results: Content[]) => {
    let filtered = results;

    // Filter by type
    if (searchFilters.type !== "all") {
      filtered = filtered.filter(item => item.type === searchFilters.type);
    }

    // Filter by genre
    if (searchFilters.genre !== "all") {
      filtered = filtered.filter(item => item.genre.includes(searchFilters.genre));
    }

    // Filter by year range
    if (searchFilters.yearRange !== "all") {
      switch (searchFilters.yearRange) {
        case "2020s":
          filtered = filtered.filter(item => parseInt(item.year.toString()) >= 2020);
          break;
        case "2010s":
          filtered = filtered.filter(item => parseInt(item.year.toString()) >= 2010 && parseInt(item.year.toString()) < 2020);
          break;
        case "2000s":
          filtered = filtered.filter(item => parseInt(item.year.toString()) >= 2000 && parseInt(item.year.toString()) < 2010);
          break;
        case "1990s":
          filtered = filtered.filter(item => parseInt(item.year.toString()) >= 1990 && parseInt(item.year.toString()) < 2000);
          break;
      }
    }

    // Filter by rating
    if (searchFilters.rating !== "all") {
      switch (searchFilters.rating) {
        case "high":
          filtered = filtered.filter(item => parseFloat(item.rating.toString()) >= 8.0);
          break;
        case "good":
          filtered = filtered.filter(item => parseFloat(item.rating.toString()) >= 6.0);
          break;
      }
    }

    return filtered;
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim()) {
      addToRecentSearches(term.trim());
    }
  };

  const getSearchSuggestions = () => {
    if (!searchTerm || searchTerm.length < 2) return [];

    const suggestions = new Set<string>();

    // Add matching titles from TMDB results
    searchResults.forEach(item => {
      if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        suggestions.add(item.title);
      }
    });

    // Add matching genres
    const allGenres = [...movieCategories, ...seriesCategories];
    allGenres.forEach(genre => {
      if (genre.toLowerCase().includes(searchTerm.toLowerCase())) {
        suggestions.add(genre);
      }
    });

    return Array.from(suggestions).slice(0, 5);
  };

  // Helper functions for favorites management

  const filterFavorites = (favorites: Content[]) => {
    let filtered = favorites;

    // Filter by active tab (movies or series)
    filtered = filtered.filter(item =>
      favoritesActiveTab === "movies" ? item.type === "movie" : item.type === "series"
    );

    // Filter by genre
    if (favoritesFilterGenre !== "all") {
      filtered = filtered.filter(item => item.genre.includes(favoritesFilterGenre));
    }

    return filtered;
  };


  // Get processed favorites (filtered and sorted)
  const processedFavorites = filterFavorites(userListContent);

  // Filter movies and series from local database content
  const movies = allContent.filter(item => item.type === 'movie');
  const series = allContent.filter(item => item.type === 'series');

  // Search in local content (allContent) instead of TMDB API
  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    const term = searchTerm.toLowerCase();
    let filtered = allContent.filter(item => 
      item.title.toLowerCase().includes(term) ||
      item.genre.toLowerCase().includes(term) ||
      (item.description && item.description.toLowerCase().includes(term))
    );

    // Apply filters
    if (searchFilters.type !== "all") {
      filtered = filtered.filter(item => item.type === searchFilters.type);
    }
    if (searchFilters.genre !== "all") {
      filtered = filtered.filter(item => item.genre.includes(searchFilters.genre));
    }
    if (searchFilters.yearRange !== "all") {
      switch (searchFilters.yearRange) {
        case "2020s":
          filtered = filtered.filter(item => item.year >= 2020);
          break;
        case "2010s":
          filtered = filtered.filter(item => item.year >= 2010 && item.year < 2020);
          break;
        case "2000s":
          filtered = filtered.filter(item => item.year >= 2000 && item.year < 2010);
          break;
        case "1990s":
          filtered = filtered.filter(item => item.year >= 1990 && item.year < 2000);
          break;
      }
    }
    if (searchFilters.rating !== "all") {
      switch (searchFilters.rating) {
        case "high":
          filtered = filtered.filter(item => parseFloat(item.rating) >= 8.0);
          break;
        case "good":
          filtered = filtered.filter(item => parseFloat(item.rating) >= 6.0);
          break;
      }
    }

    return filtered;
  }, [searchTerm, allContent, searchFilters]);

  const getContentByCategory = () => {
    switch(activeCategory) {
      case "movies":
        return movies;
      case "series":
        return series;
      case "mylist":
        return userListContent;
      default:
        return allContent;
    }
  };

  const [selectedSeason, setSelectedSeason] = useState<number>(1);
  const [selectedEpisode, setSelectedEpisode] = useState<number>(1);
  const [seasonData, setSeasonData] = useState<any>(null);
  const [expandedEpisodeSynopsis, setExpandedEpisodeSynopsis] = useState<number | null>(null);
  const [seasonDropdownOpen, setSeasonDropdownOpen] = useState(false);

  const openDetails = async (content: Content) => {
    setSelectedContent(content);
    setCurrentView("details");
    setSelectedSeason(1);
    setSelectedEpisode(1);
    window.scrollTo(0, 0);

    // Para séries, buscar dados da temporada 1
    if (content.type === 'series') {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${content.id}/season/1?api_key=684c7dd6657929028f2ad1bd1ef6e3c8&language=pt-BR`);
        const data = await response.json();
        setSeasonData(data);
      } catch (error) {
        console.error("Erro ao carregar temporada:", error);
        setSeasonData(null);
      }
    } else {
      setSeasonData(null);
    }
  };

  // Abrir player para filme
  const openMoviePlayer = async (content: ExtendedContent) => {
    const extContent = content as ExtendedContent;
    setSelectedContent(content);
    
    if (extContent.playbackUrl) {
      // Buscar progresso do servidor ou usar cache local
      let initialTime = 0;
      const localProgress = getContentProgress(content.id);
      if (localProgress) {
        initialTime = localProgress.currentTime;
      } else {
        const serverProgress = await fetchProgressFromServer(content.id);
        if (serverProgress) {
          initialTime = serverProgress.currentTime;
          saveWatchProgressLocal(serverProgress);
        }
      }
      
      setPlayerInitialTime(initialTime);
      setPlayerUrl(extContent.playbackUrl);
      setIsVideoPlayer(true);
      setShowPlayer(true);
    } else {
      openDetails(content);
      toast({ title: "Abrindo detalhes do filme...", description: "O link direto de reprodução será buscado" });
    }
  };

  // Abrir modal de episódios para série (inteligente - abre na temporada/episódio onde parou)
  const openSeriesEpisodes = async (content: Content, savedSeason?: number) => {
    setSelectedContent(content);
    setExpandedEpisodeSynopsis(null);
    setSeasonDropdownOpen(false);
    
    // Usar a temporada do progresso salvo ou default para 1
    const progress = getContentProgress(content.id);
    const seasonToLoad = savedSeason || (progress?.seasonNumber) || 1;
    
    setSelectedSeason(seasonToLoad);
    setShowEpisodesModal(true);
    
    try {
      const response = await fetch(`https://api.themoviedb.org/3/tv/${content.id}/season/${seasonToLoad}?api_key=684c7dd6657929028f2ad1bd1ef6e3c8&language=pt-BR`);
      const data = await response.json();
      setSeasonData(data);
    } catch (error) {
      console.error("Erro ao carregar temporada:", error);
      setSeasonData(null);
    }
  };

  // Reproduzir episódio específico (com fallback para modal de episódios se falhar)
  const playEpisode = async (contentId: string, season: number, episode: number, fallbackToModal: boolean = false, episodeTitle?: string) => {
    // Definir o conteúdo selecionado imediatamente
    const content = allContent.find(c => c.id === contentId);
    if (content) {
      setSelectedContent(content);
    }
    
    try {
      const response = await fetch(`/api/episode-url/${contentId}/${season}/${episode}`);
      
      if (!response.ok) {
        if (fallbackToModal && content) {
          toast({ title: "Abrindo lista de episódios...", description: "O link direto não está disponível" });
          openSeriesEpisodes(content, season);
          return;
        }
        toast({ title: "Episódio não disponível", variant: "destructive" });
        return;
      }
      
      const data = await response.json();
      
      if (data.url) {
        // Buscar progresso do servidor ou usar cache local
        let initialTime = 0;
        const localProgress = getContentProgress(contentId, season, episode);
        if (localProgress) {
          initialTime = localProgress.currentTime;
        } else {
          const serverProgress = await fetchProgressFromServer(contentId, season, episode);
          if (serverProgress) {
            initialTime = serverProgress.currentTime;
            saveWatchProgressLocal(serverProgress);
          }
        }
        
        setPlayerInitialTime(initialTime);
        setPlayerUrl(data.url);
        setIsVideoPlayer(true);
        setCurrentEpisodeInfo({ season, episode, episodeTitle });
        setShowPlayer(true);
        setShowEpisodesModal(false);
      } else {
        if (fallbackToModal && content) {
          toast({ title: "Abrindo lista de episódios..." });
          openSeriesEpisodes(content, season);
          return;
        }
        toast({ title: "Link do episódio não encontrado", variant: "destructive" });
      }
    } catch (error) {
      if (fallbackToModal && content) {
        toast({ title: "Abrindo lista de episódios...", description: "Erro ao carregar episódio diretamente" });
        openSeriesEpisodes(content, season);
        return;
      }
      toast({ title: "Erro ao carregar episódio", variant: "destructive" });
    }
  };

  // Reproduzir próximo episódio
  const playNextEpisode = async () => {
    if (!selectedContent || !currentEpisodeInfo) return;
    
    const { season, episode } = currentEpisodeInfo;
    const content = selectedContent as ExtendedContent;
    
    // Tenta próximo episódio na mesma temporada
    let nextSeason = season;
    let nextEpisode = episode + 1;
    
    // Verifica se existe próximo episódio na temporada atual
    const episodeLinks = content.episodeLinks || [];
    const hasNextInSeason = episodeLinks.some(
      ep => ep.season === nextSeason && ep.episode === nextEpisode
    );
    
    if (!hasNextInSeason && content.seasons && season < content.seasons) {
      // Vai para primeira episódio da próxima temporada
      nextSeason = season + 1;
      nextEpisode = 1;
    }
    
    playEpisode(selectedContent.id, nextSeason, nextEpisode, false);
  };

  // Verificar se há próximo episódio
  const hasNextEpisode = (): boolean => {
    if (!selectedContent || !currentEpisodeInfo || selectedContent.type !== 'series') return false;
    
    const { season, episode } = currentEpisodeInfo;
    const content = selectedContent as ExtendedContent;
    const episodeLinks = content.episodeLinks || [];
    
    // Verifica próximo episódio na mesma temporada
    const hasNextInSeason = episodeLinks.some(
      ep => ep.season === season && ep.episode === episode + 1
    );
    
    if (hasNextInSeason) return true;
    
    // Verifica se há próxima temporada
    if (content.seasons && season < content.seasons) {
      return episodeLinks.some(ep => ep.season === season + 1 && ep.episode === 1);
    }
    
    return false;
  };

  // Fechar player
  const closePlayer = () => {
    setShowPlayer(false);
    setPlayerUrl("");
    setIsVideoPlayer(false);
    setCurrentEpisodeInfo(null);
  };

  // Função para lidar com clique em "Assistir"
  const handleWatchClick = (content: Content) => {
    if (content.type === 'movie') {
      openMoviePlayer(content as ExtendedContent);
    } else {
      openSeriesEpisodes(content);
    }
  };

  const goBack = () => {
    setCurrentView("home");
    setSelectedContent(null);
    setSearchTerm("");
    setSelectedCategory(null);
    window.scrollTo(0, 0);
  };

  const openSearch = () => {
    setSearchTerm("");
    setCurrentView("search");
    setActiveCategory("search"); // Set active category to search
  };


  const toggleFavorite = (content: Content) => {
    const isInList = userListContent.some(item => item.id === content.id);
    if (isInList) {
      removeFromListMutation.mutate(content.id);
    } else {
      addToListMutation.mutate(content.id);
    }
  };

  const isInUserList = (contentId: string) => {
    return userListContent.some(item => item.id === contentId);
  };


  // Limpar sinopse expandida quando mudar de temporada
  useEffect(() => {
    setExpandedEpisodeSynopsis(null);
  }, [seasonData]);

  // Auto-rotate featured content with progress
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (featuredContent.length > 1 && activeCategory === "home") {
      setProgress(0);

      // Progress animation
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 1;
        });
      }, 100); // 100ms * 100 = 10 seconds

      // Content rotation
      const contentInterval = setInterval(() => {
        setFadeClass('fade-out');
        setTimeout(() => {
          setFeaturedIndex((prev) => (prev + 1) % featuredContent.length);
          setFadeClass('fade-in');
          setProgress(0);
        }, 500);
      }, 10000);

      return () => {
        clearInterval(progressInterval);
        clearInterval(contentInterval);
      };
    }
  }, [featuredContent.length, activeCategory]);

  const currentFeatured = featuredContent[featuredIndex] || featuredContent[0];


  // Search page view
  if (currentView === "search") {
    return (
      <div className="min-h-screen bg-black text-foreground pb-32">
        {/* Enhanced Search Header */}
        <div className="sticky top-0 z-40 bg-gradient-to-r from-gray-900/30 via-blue-900/30 to-gray-900/30 backdrop-blur-xl border-b border-gradient-to-r from-blue-500/40 to-blue-500/40 p-6 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            {/* Welcome Text */}
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white via-blue-200 to-blue-200 bg-clip-text text-transparent mb-2">
                🔍 Descobrir Conteúdo
              </h1>
              <p className="text-gray-300 text-lg">Encontre seus filmes e séries favoritos</p>
            </div>

            {/* Enhanced Search Input */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-blue-600/30 rounded-3xl blur-lg group-focus-within:blur-xl group-focus-within:scale-105 transition-all duration-500"></div>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-blue-300 z-10" size={24} />
                <input
                  type="text"
                  placeholder="Digite o nome do filme ou série..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 bg-black/60 backdrop-blur-sm border-2 border-blue-500/50 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-400 transition-all text-xl text-white placeholder-gray-300 shadow-2xl"
                  autoFocus
                />
                <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="p-6">
          {searchTerm && (
            <>
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                  {searchResults.map((item) => (
                    <ContentCard
                      key={item.id}
                      item={item}
                      onDetailsClick={() => openDetails(item)}
                      onPlayClick={() => openDetails(item)}
                      onFavoriteClick={() => toggleFavorite(item)}
                      isInUserList={isInUserList(item.id)}
                      getPosterImage={getPosterImage}
                      compact={true}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <h3 className="text-xl font-semibold mb-2 text-gray-400">Nenhum resultado encontrado</h3>
                  <p className="text-gray-500 mb-4">Tente buscar por outro termo</p>
                </div>
              )}
            </>
          )}

        </div>

        {/* Mobile Navigation - Same as home page */}
        <div className="fixed bottom-6 left-1/2 z-50 mobile-nav-floating">
          <div className="flex items-center space-x-2 bg-black/90 backdrop-blur-xl rounded-full p-2 border border-blue-500/30 bottom-nav-shadow-enhanced mobile-optimized">
            <button
              onClick={() => {
                setCurrentView("home");
                setActiveCategory("home");
                setSelectedCategory(null);
                setSearchTerm("");
              }}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/10 ${activeCategory === 'home' ? '!text-white bg-gradient-to-r from-blue-600 to-blue-600' : ''}`}
              data-testid="nav-home"
            >
              <Home size={22} />
            </button>

            <button
              onClick={() => {
                setCurrentView("home");
                setActiveCategory("movies");
                setSelectedCategory(null);
                setSearchTerm("");
              }}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/10 ${activeCategory === 'movies' ? '!text-white bg-gradient-to-r from-blue-600 to-blue-600' : ''}`}
              data-testid="nav-movies"
            >
              <Film size={22} />
            </button>

            <button
              onClick={() => {
                setCurrentView("home");
                setActiveCategory("series");
                setSelectedCategory(null);
                setSearchTerm("");
              }}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/10 ${activeCategory === 'series' ? '!text-white bg-gradient-to-r from-blue-600 to-blue-600' : ''}`}
              data-testid="nav-series"
            >
              <Tv size={22} />
            </button>

            <button
              onClick={() => {
                openSearch(); // Call openSearch function
              }}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/10 ${currentView === "search" ? '!text-white bg-gradient-to-r from-blue-600 to-blue-600' : ''}`}
              data-testid="nav-search"
            >
              <Search size={22} />
            </button>

            <button
              onClick={() => {
                setCurrentView("home");
                setActiveCategory("mylist");
                setSelectedCategory(null);
                setSearchTerm("");
              }}
              className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 text-gray-400 hover:text-white hover:bg-white/10 ${activeCategory === 'mylist' ? '!text-white bg-gradient-to-r from-blue-600 to-blue-600' : ''}`}
              data-testid="nav-favorites"
            >
              <Heart size={22} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Details page view
  if (currentView === "details" && selectedContent) {
    const isInList = isInUserList(selectedContent.id);

    return (
      <div className="min-h-screen bg-background text-foreground">
        {/* Seção com banner: título, informações e atores */}
        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url(${selectedContent.backdrop})` }} // Use backdrop from converted content
        >
          <div className="absolute inset-0 details-gradient" />

          <button
            onClick={goBack}
            className="absolute top-6 left-6 z-20 flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-black/80 transition-colors"
            data-testid="button-back"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>


          <div className="relative z-10 px-6 md:px-12 pt-20 pb-12">
            {/* Poster acima do título */}
            <div className="text-center mb-8">
              <div className="mb-6">
                <div className="w-48 h-72 mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl">
                  <img
                    src={selectedContent.poster} // Use poster from converted content
                    alt={selectedContent.title}
                    className="w-full h-full object-cover"
                    data-testid="img-poster-details"
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-shadow mb-6" data-testid="text-title">
                {selectedContent.title}
              </h1>

              {/* Tags: duração, nota IMDb, ano, gênero e classificação */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm mb-8">
                {selectedContent.duration && ( // Duration might not be directly available from TMDB in Content schema
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                    <Clock size={14} />
                    <span className="text-white" data-testid="text-duration">{selectedContent.duration}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/30">
                  <IMDbIcon size={16} className="text-yellow-400" />
                  <span className="text-white font-semibold" data-testid="text-rating">{selectedContent.rating}</span>
                </div>
                <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white" data-testid="text-year">{selectedContent.year}</span>
                {selectedContent.seasons && (
                  <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white" data-testid="text-seasons">
                    {selectedContent.seasons} temporadas • {selectedContent.episodes} episódios
                  </span>
                )}
              </div>
            </div>

            {/* Linha de separação */}
            <div className="w-full max-w-2xl mx-auto mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            </div>

            {/* Atores na horizontal sem título */}
            <div className="w-full overflow-x-auto mb-8 scrollbar-hide">
              <div className="flex items-center gap-6 text-white justify-center min-w-max px-4">
                {(selectedContent.cast as any[]).map((actor: any, index: number) => {
                  const actorName = typeof actor === 'string' ? actor : actor.name;
                  const actorPhoto = typeof actor === 'string' ?
                    getActorImage(actorName) :
                    actor.photo || getActorImage(actorName);

                  return (
                    <div key={index} className="flex items-center space-x-3 flex-shrink-0">
                      <img
                        src={actorPhoto}
                        alt={actorName}
                        className="w-12 h-12 rounded-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = getActorImage(actorName); // Fallback to local image
                        }}
                      />
                      <span className="font-semibold whitespace-nowrap">{actorName}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Seção com fundo escuro */}
        <div className="bg-black">
          <div className="px-6 md:px-12 pt-8 pb-10">
            {/* Sinopse ainda menor */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto" data-testid="text-description">
                {selectedContent.fullDescription}
              </p>
            </div>

            {/* Linha de separação */}
            <div className="w-full max-w-xl mx-auto mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
            </div>

            {/* Botões Assistir e Favoritar */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleWatchClick(selectedContent)}
                className="flex items-center space-x-2 px-8 py-3 rounded-full font-semibold transition-all shadow-lg hover:scale-105 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                data-testid="button-watch"
              >
                <Play size={18} fill="currentColor" />
                <span>Assistir</span>
              </button>
              <button
                onClick={() => toggleFavorite(selectedContent)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all shadow-lg hover:scale-105 ${
                  isInList
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white'
                  : 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white'
                }`}
                data-testid="button-favorite"
              >
                {isInList ? <Check size={18} /> : <Heart size={18} />}
                <span>{isInList ? "Favorito" : "Favoritar"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Player de Vídeo Moderno Estilo Netflix/Apple TV */}
        {showPlayer && selectedContent && (
          <ModernVideoPlayer
            videoUrl={playerUrl}
            title={selectedContent.title}
            subtitle={`${selectedContent.year} • ${selectedContent.genre}`}
            poster={selectedContent.backdrop}
            onClose={closePlayer}
            episodeInfo={currentEpisodeInfo || undefined}
            hasNextEpisode={hasNextEpisode()}
            onNextEpisode={hasNextEpisode() ? playNextEpisode : undefined}
            initialTime={playerInitialTime}
            onProgress={(currentTime, duration) => {
              if (currentTime > 30) {
                saveWatchProgress({
                  contentId: selectedContent.id,
                  currentTime,
                  duration,
                  seasonNumber: currentEpisodeInfo?.season,
                  episodeNumber: currentEpisodeInfo?.episode,
                  updatedAt: Date.now()
                });
              }
            }}
          />
        )}

        {/* Modal de Episódios para Séries - Design Moderno */}
        {showEpisodesModal && selectedContent && (
          <div className="fixed inset-0 z-50 bg-black/95 overflow-y-auto">
            <div className="min-h-screen">
              {/* Header Fixo com Backdrop */}
              <div className="sticky top-0 z-10 bg-gradient-to-b from-black via-black/95 to-transparent pb-4">
                <div className="px-4 pt-4 pb-2">
                  <div className="max-w-4xl mx-auto">
                    {/* Botão Fechar e Título */}
                    <div className="flex items-center gap-3 mb-4">
                      <button
                        onClick={() => {
                          setShowEpisodesModal(false);
                          setExpandedEpisodeSynopsis(null);
                          setSeasonDropdownOpen(false);
                        }}
                        className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all flex-shrink-0"
                      >
                        <ArrowLeft size={20} />
                      </button>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-lg md:text-xl font-bold text-white truncate">{selectedContent.title}</h2>
                        <p className="text-gray-400 text-sm">
                          {seasonData?.episodes?.length || 0} episódios
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setShowEpisodesModal(false);
                          setExpandedEpisodeSynopsis(null);
                          setSeasonDropdownOpen(false);
                        }}
                        className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all flex-shrink-0"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    {/* Seletor de Temporada - Dropdown Moderno */}
                    {selectedContent.seasons && selectedContent.seasons > 1 && (
                      <div className="relative">
                        <button
                          onClick={() => setSeasonDropdownOpen(!seasonDropdownOpen)}
                          className="w-full flex items-center justify-between bg-gradient-to-r from-blue-600/20 to-blue-600/20 border border-blue-500/30 hover:border-blue-400/50 text-white px-4 py-3 rounded-xl font-semibold transition-all"
                        >
                          <span className="flex items-center gap-2">
                            <Tv size={18} className="text-blue-400" />
                            Temporada {selectedSeason}
                          </span>
                          <ChevronDown 
                            size={20} 
                            className={`text-gray-400 transition-transform duration-200 ${seasonDropdownOpen ? 'rotate-180' : ''}`} 
                          />
                        </button>
                        
                        {/* Dropdown de Temporadas */}
                        {seasonDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900/95 backdrop-blur-lg border border-gray-700 rounded-xl overflow-hidden shadow-2xl max-h-60 overflow-y-auto z-20">
                            {Array.from({ length: selectedContent.seasons }, (_, i) => i + 1).map((season) => {
                              const progress = getContentProgress(selectedContent.id);
                              const isCurrentSeason = progress?.seasonNumber === season;
                              
                              return (
                                <button
                                  key={season}
                                  onClick={async () => {
                                    setSelectedSeason(season);
                                    setSeasonDropdownOpen(false);
                                    setExpandedEpisodeSynopsis(null);
                                    try {
                                      const response = await fetch(`https://api.themoviedb.org/3/tv/${selectedContent.id}/season/${season}?api_key=684c7dd6657929028f2ad1bd1ef6e3c8&language=pt-BR`);
                                      const data = await response.json();
                                      setSeasonData(data);
                                    } catch (error) {
                                      console.error("Erro ao carregar temporada:", error);
                                    }
                                  }}
                                  className={`w-full flex items-center justify-between px-4 py-3 transition-all ${
                                    selectedSeason === season
                                      ? 'bg-blue-600/30 text-white'
                                      : 'text-gray-300 hover:bg-gray-800'
                                  }`}
                                >
                                  <span>Temporada {season}</span>
                                  {isCurrentSeason && (
                                    <span className="text-xs bg-blue-500/30 text-blue-300 px-2 py-1 rounded-full">
                                      Assistindo
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}
