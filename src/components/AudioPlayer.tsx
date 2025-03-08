
import { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Repeat, 
  Shuffle,
  Clock
} from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useLanguage } from '@/context/LanguageContext';

interface AudioPlayerProps {
  title: string;
  author: string;
  coverImage: string;
  audioSrc?: string;
  miniPlayer?: boolean;
}

const AudioPlayer = ({ 
  title, 
  author, 
  coverImage, 
  audioSrc = '',
  miniPlayer = false
}: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Demo purposes - simulate progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      // For demo, we'll just increment the progress
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          const newProgress = prev + 0.5;
          
          // Update current time based on progress (mock for demo)
          const mockDurationSeconds = 360; // 6 minutes in seconds
          const currentSeconds = (newProgress / 100) * mockDurationSeconds;
          setCurrentTime(formatTime(currentSeconds));
          
          return newProgress;
        });
      }, 1000);
      
      // Set a mock duration
      setDuration('6:00');
    }
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (miniPlayer) {
    return (
      <div className="fixed bottom-0 left-0 right-0 glass-dark shadow-lg border-t border-white/10 animate-slide-up py-3 px-4 z-40">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={coverImage} alt={title} className="w-12 h-12 rounded-md object-cover" />
            <div>
              <h3 className="font-medium text-sm line-clamp-1">{title}</h3>
              <p className="text-foreground/70 text-xs">{author}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="p-2">
              <SkipBack className="w-4 h-4" />
            </button>
            <button 
              className="w-9 h-9 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90"
              onClick={togglePlay}
              title={isPlaying ? t('pause') : t('play')}
            >
              {isPlaying 
                ? <Pause className="w-4 h-4 text-white" /> 
                : <Play className="w-4 h-4 text-white ml-0.5" />
              }
            </button>
            <button className="p-2">
              <SkipForward className="w-4 h-4" />
            </button>
          </div>
          
          <div className="hidden md:block w-1/3">
            <div className="flex items-center">
              <span className="text-xs mr-2">{currentTime}</span>
              <Slider 
                value={[progress]} 
                max={100}
                step={1}
                className="w-full"
                onValueChange={(value) => setProgress(value[0])}
              />
              <span className="text-xs ml-2">{duration}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass rounded-xl p-6 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-auto">
          <div className="relative aspect-square w-full max-w-[250px] mx-auto md:mx-0 rounded-lg overflow-hidden">
            <img 
              src={coverImage} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <button 
                className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center"
                onClick={togglePlay}
                title={isPlaying ? t('pause') : t('play')}
              >
                {isPlaying 
                  ? <Pause className="w-8 h-8 text-accent" /> 
                  : <Play className="w-8 h-8 text-accent ml-1" />
                }
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex-1 w-full">
          <div className="mb-4 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-medium mb-1">{title}</h2>
            <p className="text-foreground/70">{author}</p>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-foreground/70">{currentTime}</span>
              <span className="text-sm text-foreground/70">{duration}</span>
            </div>
            <Slider 
              value={[progress]} 
              max={100}
              step={1}
              className="w-full"
              onValueChange={(value) => setProgress(value[0])}
            />
          </div>
          
          <div className="flex items-center justify-center md:justify-between">
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-foreground/70 hover:text-accent transition-colors">
                <Shuffle className="w-5 h-5" />
              </button>
              <button className="text-foreground/70 hover:text-accent transition-colors">
                <Repeat className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <button 
                  className="text-foreground/70 hover:text-accent transition-colors"
                  onClick={toggleMute}
                >
                  {isMuted 
                    ? <VolumeX className="w-5 h-5" /> 
                    : <Volume2 className="w-5 h-5" />
                  }
                </button>
                <Slider 
                  value={[isMuted ? 0 : volume]} 
                  max={100}
                  className="w-24"
                  onValueChange={(value) => {
                    setVolume(value[0]);
                    setIsMuted(value[0] === 0);
                  }}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors">
                <SkipBack className="w-5 h-5" />
              </button>
              <button 
                className="w-16 h-16 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors"
                onClick={togglePlay}
              >
                {isPlaying 
                  ? <Pause className="w-8 h-8 text-white" /> 
                  : <Play className="w-8 h-8 text-white ml-1" />
                }
              </button>
              <button className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors">
                <SkipForward className="w-5 h-5" />
              </button>
            </div>
            
            <div className="hidden md:flex items-center">
              <button className="flex items-center space-x-1 text-sm text-foreground/70 hover:text-accent transition-colors">
                <Clock className="w-4 h-4" />
                <span>1.5x</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
