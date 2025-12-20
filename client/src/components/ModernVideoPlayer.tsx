import { useState, useRef, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  SkipBack,
  SkipForward,
  ArrowLeft,
  Settings,
  ChevronRight,
  X,
  Loader2,
  RotateCcw,
  Tv
} from "lucide-react";
import { useLockLandscape } from "@/hooks/useScreenOrientation";

interface ModernVideoPlayerProps {
  videoUrl: string;
  title: string;
  subtitle?: string;
  poster?: string;
  onClose: () => void;
  onNextEpisode?: () => void;
  hasNextEpisode?: boolean;
  episodeInfo?: {
    season: number;
    episode: number;
    episodeTitle?: string;
  };
  onProgress?: (currentTime: number, duration: number) => void;
  initialTime?: number;
}

export default function ModernVideoPlayer({
  videoUrl,
  title,
  subtitle,
  poster,
  onClose,
  onNextEpisode,
  hasNextEpisode,
  episodeInfo,
  onProgress,
  initialTime = 0
}: ModernVideoPlayerProps) {
  // Always lock to landscape when this component is mounted
  useLockLandscape(true);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const hideControlsTimeout = useRef<NodeJS.Timeout | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [buffered, setBuffered] = useState(0);
  const [showNextEpisodePrompt, setShowNextEpisodePrompt] = useState(false);
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [hoverPosition, setHoverPosition] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isDraggingProgress, setIsDraggingProgress] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const formatTime = (seconds: number): string => {
    if (isNaN(seconds) || seconds < 0) return "0:00";
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const resetHideControlsTimer = useCallback(() => {
    if (hideControlsTimeout.current) {
      clearTimeout(hideControlsTimeout.current);
    }
    setShowControls(true);
    if (isPlaying && !showSettings) {
      hideControlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  }, [isPlaying, showSettings]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      if (initialTime > 0 && initialTime < video.duration) {
        video.currentTime = initialTime;
      }
    };

    const handleTimeUpdate = () => {
      if (!isDraggingProgress) {
        setCurrentTime(video.currentTime);
      }
      if (video.buffered.length > 0) {
        setBuffered((video.buffered.end(video.buffered.length - 1) / video.duration) * 100);
      }
      onProgress?.(video.currentTime, video.duration);
      
      if (hasNextEpisode && video.duration - video.currentTime <= 15 && video.duration > 0) {
        setShowNextEpisodePrompt(true);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleWaiting = () => setIsLoading(true);
    const handleCanPlay = () => {
      setIsLoading(false);
      setHasError(false);
    };
    const handleError = () => {
      setIsLoading(false);
      setHasError(true);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      if (hasNextEpisode && onNextEpisode) {
        setShowNextEpisodePrompt(true);
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
      video.removeEventListener("ended", handleEnded);
    };
  }, [initialTime, onProgress, hasNextEpisode, onNextEpisode, isDraggingProgress]);

  useEffect(() => {
    // Reset next episode prompt when video URL changes (new episode loaded)
    setShowNextEpisodePrompt(false);
    setCurrentTime(0);
  }, [videoUrl, episodeInfo]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document as any;
      setIsFullscreen(!!(doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);
    
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key.toLowerCase()) {
        case " ":
        case "k":
          e.preventDefault();
          togglePlay();
          break;
        case "arrowleft":
        case "j":
          e.preventDefault();
          skip(-10);
          break;
        case "arrowright":
        case "l":
          e.preventDefault();
          skip(10);
          break;
        case "arrowup":
          e.preventDefault();
          adjustVolume(0.1);
          break;
        case "arrowdown":
          e.preventDefault();
          adjustVolume(-0.1);
          break;
        case "m":
          e.preventDefault();
          toggleMute();
          break;
        case "f":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "escape":
          if (isFullscreen) {
            exitFullscreen();
          } else {
            onClose();
          }
          break;
        case "n":
          if (hasNextEpisode && onNextEpisode) {
            e.preventDefault();
            onNextEpisode();
          }
          break;
      }
      resetHideControlsTimer();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, hasNextEpisode, onNextEpisode, resetHideControlsTimer]);

  useEffect(() => {
    resetHideControlsTimer();
    return () => {
      if (hideControlsTimeout.current) {
        clearTimeout(hideControlsTimeout.current);
      }
    };
  }, [isPlaying, resetHideControlsTimer]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    
    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
  };

  const skip = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + seconds));
    resetHideControlsTimer();
  };

  const adjustVolume = (delta: number) => {
    const video = videoRef.current;
    if (!video) return;
    const newVolume = Math.max(0, Math.min(1, volume + delta));
    setVolume(newVolume);
    video.volume = newVolume;
    if (newVolume > 0) setIsMuted(false);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const requestFullscreen = async () => {
    const elem = containerRef.current as any;
    if (!elem) return;
    
    try {
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        await elem.webkitRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        await elem.mozRequestFullScreen();
      } else if (elem.msRequestFullscreen) {
        await elem.msRequestFullscreen();
      }
    } catch (e) {
      console.log("Fullscreen not supported");
    }
  };

  const exitFullscreen = async () => {
    const doc = document as any;
    try {
      if (doc.exitFullscreen) {
        await doc.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        await doc.webkitExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        await doc.mozCancelFullScreen();
      } else if (doc.msExitFullscreen) {
        await doc.msExitFullscreen();
      }
    } catch (e) {
      console.log("Exit fullscreen failed");
    }
  };

  const toggleFullscreen = () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      requestFullscreen();
    }
  };

  const seekToPosition = (clientX: number) => {
    const video = videoRef.current;
    const progressBar = progressRef.current;
    if (!video || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    video.currentTime = pos * video.duration;
    setCurrentTime(pos * video.duration);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    seekToPosition(e.clientX);
    resetHideControlsTimer();
  };

  const handleProgressHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = progressRef.current;
    if (!progressBar || !duration) return;

    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    setHoverTime(pos * duration);
    setHoverPosition(e.clientX - rect.left);
  };

  const handleProgressTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingProgress(true);
    const touch = e.touches[0];
    seekToPosition(touch.clientX);
    resetHideControlsTimer();
  };

  const handleProgressTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDraggingProgress) return;
    const touch = e.touches[0];
    seekToPosition(touch.clientX);
  };

  const handleProgressTouchEnd = () => {
    setIsDraggingProgress(false);
  };

  const handleContainerTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('.controls-area')) return;
    setTouchStartX(e.touches[0].clientX);
    resetHideControlsTimer();
  };

  const handleContainerTouchEnd = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('.controls-area')) return;
    
    if (touchStartX !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchEndX - touchStartX;
      
      if (Math.abs(diff) > 50) {
        skip(diff > 0 ? 10 : -10);
      }
    }
    setTouchStartX(null);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    video.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const handleSpeedChange = (speed: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = speed;
    setPlaybackSpeed(speed);
    setShowSettings(false);
  };

  const handleRetry = () => {
    const video = videoRef.current;
    if (!video) return;
    setHasError(false);
    setIsLoading(true);
    video.load();
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      onMouseMove={resetHideControlsTimer}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      onTouchStart={handleContainerTouchStart}
      onTouchEnd={handleContainerTouchEnd}
    >
      <video
        ref={videoRef}
        src={videoUrl}
        poster={poster}
        className="w-full h-full object-contain"
        playsInline
        autoPlay
      />

      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-none">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-16 h-16 text-white animate-spin" />
            <p className="text-white/80 text-sm">Carregando...</p>
          </div>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/90">
          <div className="flex flex-col items-center gap-4 text-center px-8">
            <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center">
              <X className="w-10 h-10 text-red-500" />
            </div>
            <h3 className="text-white text-xl font-bold">Erro ao reproduzir</h3>
            <p className="text-gray-400 max-w-md">
              Não foi possível carregar o vídeo. Verifique sua conexão e tente novamente.
            </p>
            <div className="flex gap-3 mt-2">
              <button
                onClick={handleRetry}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all"
              >
                <RotateCcw size={18} />
                Tentar novamente
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        className={`controls-area absolute top-0 left-0 right-0 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-gradient-to-b from-black/90 via-black/50 to-transparent p-4 md:p-6">
          <div className="flex items-center gap-4">
            <button
              onClick={onClose}
              className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
            <div className="flex-1 min-w-0">
              <h1 className="text-white font-bold text-lg md:text-xl lg:text-2xl truncate">
                {title}
              </h1>
              {(episodeInfo || subtitle) && (
                <p className="text-gray-400 text-sm md:text-base truncate">
                  {episodeInfo
                    ? `T${episodeInfo.season}:E${episodeInfo.episode}${episodeInfo.episodeTitle ? ` - ${episodeInfo.episodeTitle}` : ""}`
                    : subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {!isLoading && !hasError && (
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-200 ${
            !isPlaying && showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="p-6 rounded-full bg-black/40 backdrop-blur-sm">
            <Play className="w-16 h-16 md:w-20 md:h-20 text-white" fill="white" />
          </div>
        </div>
      )}

      <div
        className={`controls-area absolute bottom-0 left-0 right-0 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-gradient-to-t from-black/95 via-black/70 to-transparent px-4 md:px-6 pb-4 md:pb-6 pt-16">
          <div
            ref={progressRef}
            className="relative h-3 md:h-4 mb-4 cursor-pointer group touch-none"
            onClick={handleProgressClick}
            onMouseMove={handleProgressHover}
            onMouseLeave={() => setHoverTime(null)}
            onTouchStart={handleProgressTouchStart}
            onTouchMove={handleProgressTouchMove}
            onTouchEnd={handleProgressTouchEnd}
          >
            <div className="absolute inset-0 bg-white/20 rounded-full overflow-hidden">
              <div
                className="absolute h-full bg-white/30 rounded-full"
                style={{ width: `${buffered}%` }}
              />
              <div
                className="absolute h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <div
              className="absolute top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 bg-white rounded-full shadow-lg transform scale-0 group-hover:scale-100 group-active:scale-100 transition-transform"
              style={{ left: `calc(${progress}% - 10px)` }}
            />
            
            {hoverTime !== null && (
              <div
                className="absolute -top-10 transform -translate-x-1/2 bg-black/90 text-white text-sm px-3 py-1.5 rounded-lg font-mono"
                style={{ left: `${hoverPosition}px` }}
              >
                {formatTime(hoverTime)}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={togglePlay}
                className="p-3 md:p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 md:w-7 md:h-7 text-white" fill="white" />
                ) : (
                  <Play className="w-6 h-6 md:w-7 md:h-7 text-white" fill="white" />
                )}
              </button>

              <button
                onClick={() => skip(-10)}
                className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-105 active:scale-95 group relative"
              >
                <SkipBack className="w-5 h-5 md:w-6 md:h-6 text-white" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  -10s
                </span>
              </button>

              <button
                onClick={() => skip(10)}
                className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-105 active:scale-95 group relative"
              >
                <SkipForward className="w-5 h-5 md:w-6 md:h-6 text-white" />
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white bg-black/80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  +10s
                </span>
              </button>

              <div className="hidden md:flex items-center gap-2 group">
                <button
                  onClick={toggleMute}
                  className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  )}
                </button>
                <div className="w-0 group-hover:w-24 overflow-hidden transition-all duration-300">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-24 h-1.5 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full"
                  />
                </div>
              </div>

              <div className="text-white text-sm md:text-base font-mono ml-2">
                <span>{formatTime(currentTime)}</span>
                <span className="text-white/50 mx-1">/</span>
                <span className="text-white/70">{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="relative">
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  <Settings className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>

                {showSettings && (
                  <div className="absolute bottom-full right-0 mb-2 bg-gray-900/95 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden min-w-48 shadow-2xl">
                    <div className="p-3 border-b border-white/10">
                      <p className="text-white/70 text-sm font-medium">Velocidade</p>
                    </div>
                    <div className="p-2">
                      {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                        <button
                          key={speed}
                          onClick={() => handleSpeedChange(speed)}
                          className={`w-full px-4 py-2.5 text-left rounded-lg transition-all ${
                            playbackSpeed === speed
                              ? "bg-blue-600 text-white"
                              : "text-white/80 hover:bg-white/10"
                          }`}
                        >
                          {speed === 1 ? "Normal" : `${speed}x`}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={toggleFullscreen}
                className="p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
              >
                {isFullscreen ? (
                  <Minimize className="w-5 h-5 md:w-6 md:h-6 text-white" />
                ) : (
                  <Maximize className="w-5 h-5 md:w-6 md:h-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showNextEpisodePrompt && hasNextEpisode && onNextEpisode && (
        <button
          onClick={() => {
            setShowNextEpisodePrompt(false);
            onNextEpisode?.();
          }}
          className="absolute bottom-24 right-4 md:right-8 px-6 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-lg transition-all text-sm border border-white/20 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          Próximo Episódio
        </button>
      )}

      <button
        onClick={toggleMute}
        className={`md:hidden absolute top-20 right-4 p-3 rounded-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {isMuted || volume === 0 ? (
          <VolumeX className="w-5 h-5 text-white" />
        ) : (
          <Volume2 className="w-5 h-5 text-white" />
        )}
      </button>
    </div>
  );
}
