# StreamFlix - Streaming Platform

## Overview

StreamFlix is a modern streaming platform application built as a full-stack web application. The project features a Netflix-style interface for browsing movies and TV series, with content discovery, search functionality, and user watchlist management. The application uses a monorepo structure with a React frontend and Node.js/Express backend, implementing a clean separation between client-side and server-side code through a shared schema layer.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### Player de Vídeo Moderno Estilo Netflix/Apple TV (December 12, 2025)
- **Novo Componente ModernVideoPlayer**: Player de vídeo personalizado com design premium inspirado em Netflix, Apple TV e Stremio
- **Controles Customizados**: Play/pause, barra de progresso interativa, volume com slider, fullscreen, skip ±10 segundos
- **Auto-hide dos Controles**: Controles desaparecem após 3 segundos de inatividade durante reprodução
- **Atalhos de Teclado**: Espaço/K (play/pause), J/L (skip -10s/+10s), M (mute), F (fullscreen), N (próximo episódio)
- **Gestos Mobile**: Deslizar para esquerda/direita para pular, toque para play/pause, barra de progresso touch-friendly
- **Velocidade de Reprodução**: Menu de configurações com opções de 0.5x até 2x
- **Próximo Episódio**: Prompt automático nos últimos 15 segundos para séries com botão "Assistir agora"
- **Compatibilidade Cross-Browser**: Suporte a fullscreen com prefixos webkit para Safari/iOS
- **Estados de Loading/Erro**: Indicadores visuais e botão de retry para falhas de carregamento
- **Informações do Episódio**: Overlay mostrando temporada, episódio e título durante reprodução

### Player Inteligente e Seletor de Episódios Moderno (December 12, 2025)
- **Continue a Assistir Inteligente**: Ao clicar em uma série no "Continue a Assistir", abre diretamente o episódio onde parou com fallback para lista de episódios se o link não estiver disponível
- **Seletor de Temporadas Dropdown**: Substituído botões por dropdown moderno com indicador de "Assistindo" na temporada atual
- **Cards de Episódios Modernos**: Layout compacto e responsivo com thumbnails, badges de episódio atual, e data de lançamento
- **Sinopse Expandível**: Botão "Ver sinopse" em cada episódio que expande/colapsa a descrição completa
- **Layout Mobile Otimizado**: Thumbnails adaptativas (w-20 sm:w-28 md:w-36) e padding responsivo para telas pequenas
- **CSS Scrollbar Hide**: Adicionado utilitário .scrollbar-hide para scroll horizontal limpo

### Sistema de Registro de Conteúdo Simplificado (December 12, 2025)
- **Novo Content Registry**: Criado `shared/content-registry.ts` com estrutura simplificada - apenas TMDB ID + links de reprodução MP4 + status
- **Carregamento Dinâmico do TMDB**: Informações de filmes/séries (poster, atores, sinopse, etc.) são carregadas na hora do TMDB
- **Player de Vídeo Nativo**: Substituído iframe embed por elemento `<video>` HTML5 para reprodução de arquivos .MP4
- **Novos Endpoints API**: `/api/registered-content` e `/api/episode-url/:tmdbId/:season/:episode`
- **Remoção de Embeds**: Removido todo código relacionado a embeds (fembed, warezcdn, vidsrc.to)
- **Status de Conteúdo**: Suporte para categorias: trending, popular, new, classic, featured

### Content Persistence System (December 12, 2025)
- **Hardcoded Content System**: Created `shared/hardcoded-content.ts` with 4 movies and 4 series that persist across all environments
- **Database Fallback**: Server storage now merges hardcoded content with database content (hardcoded takes priority)
- **Continue Watching Fix**: Deduplication ensures only the most recent episode per series is shown
- **Home Screen Cleanup**: Removed genre category sections from home - they only appear in Movies/Series pages
- **Sections Displayed**: Lançamentos 2025, Populares, Mais Bem Avaliados, Séries em Destaque

### Content Expansion (December 12, 2025)
- **Series**: Dexter: Ressurreição, Breaking Bad, Stranger Things, The Last of Us
- **Movies**: Lilo & Stitch, Oppenheimer, Duna: Parte Dois, Barbie
- **TMDB Integration**: All content uses TMDB API for posters, backdrops, ratings, cast photos, and synopses
- **Episode Support**: Series include season/episode counts for browsing episodes with thumbnails and descriptions
- **Hardcoded Links**: Playback links use embed.warezcdn.link for movies and series

### Player e Sistema de Progresso (Dezembro 2025)
- **Player Interno Fullscreen**: Implementado player em tela cheia que abre ao clicar em "Assistir" - substitui o embed pequeno na página de detalhes
- **Continue a Assistir**: Sistema de progresso usando localStorage que exibe conteúdos recentemente assistidos na tela inicial
- **Modal de Episódios**: Popup para séries com lista de episódios, miniaturas, nomes e sinopses organizados por temporada
- **Performance**: Removidos efeitos de blur excessivos para navegação mais fluida
- **Limpeza de Código**: Removido script morto populate-tmdb.ts
- **Conteúdo Hardcoded**: Dados de exemplo em seed.ts (Dexter: Ressurreição, Lilo & Stitch) - TMDB usado apenas para metadados

### Watch Button and Embedded Player Implementation (November 10, 2025)
- **Watch Button Behavior**: Modified all "Assistir" (Watch) buttons throughout the application to navigate to the details page instead of opening a fullscreen modal
- **Embedded Player**: Implemented large embedded player at the bottom of the details page using iframe with embedder.net service
- **Fullscreen Control**: Added fullscreen button to the embedded player for enhanced viewing experience
- **Modal Removal**: Completely removed the fullscreen modal player code (showPlayer state and related components)

### Frontend Data Source Migration (November 8, 2025)
- **Local Database Integration**: Migrated frontend from fetching TMDB API directly to using local database content populated by populate-tmdb.ts script
- **Content Queries Updated**: Changed allContent, featuredContent, movies, and series queries to fetch from /api/content endpoints instead of TMDB
- **4,821 Movies Displayed**: Application now successfully displays all movies from local PostgreSQL database with proper posters, ratings, and metadata
- **Performance Improvement**: Reduced external API calls by using locally cached movie data

### Database Driver Fix (November 8, 2025)
- **Database Connection Fixed**: Switched from Neon HTTP driver to postgres.js driver for proper compatibility with Replit's PostgreSQL database
- **Frontend Error Handling**: Added defensive array coercion in React Query hooks to prevent runtime errors when API returns error objects
- **Database Schema**: Successfully created all database tables (users, content, user_lists) using Drizzle Kit push
- **Application Status**: All API endpoints now returning 200 OK responses with proper empty arrays; application fully functional

### Replit Environment Setup (November 2025)
- **GitHub Import Setup**: Configured the imported GitHub project to run in Replit environment
- **Vite Configuration**: Updated vite.config.ts to allow all hosts for Replit proxy support
- **Database Setup**: PostgreSQL database provisioned and schema pushed using Drizzle Kit
- **Storage Layer**: Created DbStorage class for PostgreSQL integration using postgres.js driver
- **Workflow Configuration**: Set up development workflow running on port 5000 with webview output
- **Deployment Configuration**: Configured autoscale deployment with build and run scripts
- **Dependencies**: Installed all npm dependencies and verified application runs successfully

### UI/UX Improvements (September 2025)
- **Enhanced Category Pages**: Completely redesigned movie and series category pages with gradient headers, animated cards, statistical displays, and color-coded visual themes for improved user engagement
- **Simplified Search Interface**: Streamlined search functionality by removing complex filter selectors, focusing on clean input with recent search history and intelligent suggestions
- **Optimized Favorites Management**: Simplified favorites interface by removing unnecessary category selectors while maintaining essential sorting options and movie/series tab separation
- **Improved Category-Specific Views**: Enhanced individual category pages with rich visual headers featuring gradients, category icons, descriptions, and animated content grids with staggered loading effects

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Styling**: Tailwind CSS with custom CSS variables for theming, using a dark Netflix-inspired color scheme
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture  
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Storage**: In-memory storage implementation with interfaces for future database integration
- **API Design**: RESTful API with content endpoints for movies/series and user list management
- **Development**: Hot reload with tsx and Vite integration for seamless development experience

### Data Storage Solutions
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Database**: PostgreSQL configured through Neon Database serverless connection
- **Schema**: Shared schema definitions using Drizzle with Zod validation
- **Migration**: Database migrations managed through Drizzle Kit

### Database Schema Design
The application uses three main entities:
- **Users**: Authentication and user management with username/password
- **Content**: Movies and TV series with metadata (title, year, rating, genre, cast, descriptions, media URLs)
- **User Lists**: Many-to-many relationship between users and content for watchlist functionality

### Authentication and Authorization
- Session-based authentication using connect-pg-simple for PostgreSQL session storage
- Cookie-based session management with secure defaults
- User registration and login endpoints (prepared for implementation)

### External Dependencies
- **Database**: Neon Database serverless PostgreSQL instance
- **UI Framework**: Radix UI for accessible component primitives
- **Styling**: Tailwind CSS with PostCSS for utility-first styling
- **Form Handling**: React Hook Form with Hookform resolvers for validation
- **Date Utilities**: date-fns for date manipulation and formatting
- **Development Tools**: Replit-specific plugins for development environment integration