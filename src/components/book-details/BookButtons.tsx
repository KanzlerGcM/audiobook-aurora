
import { Headphones } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from "@/hooks/use-language";
import { useAuth } from '@/hooks/use-auth';
import { toast } from "sonner";

interface BookButtonsProps {
  bookId: string;
  isLoggedIn: boolean;
  isPreviewPlaying: boolean;
  togglePreview: () => void;
  handleLogin: () => void;
  onLibraryUpdate?: () => void;
}

const BookButtons = ({ 
  bookId, 
  isLoggedIn, 
  isPreviewPlaying, 
  togglePreview, 
  handleLogin,
  onLibraryUpdate
}: BookButtonsProps) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { isInLibrary, addToLibrary, removeFromLibrary } = useAuth();
  
  const isBookInLibrary = isLoggedIn && isInLibrary(bookId);

  const handleListenClick = () => {
    navigate(`/audiobook/${bookId}`);
  };

  const handleLibraryToggle = () => {
    if (isBookInLibrary) {
      removeFromLibrary(bookId);
      toast.success(t('removeFromLibrarySuccess') || "Book removed from library");
    } else {
      addToLibrary(bookId);
      toast.success(t('addToLibrarySuccess') || "Book added to library");
    }
    
    if (onLibraryUpdate) {
      onLibraryUpdate();
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="mt-6 flex flex-wrap gap-3">
        <Button 
          variant="default" 
          className="gap-2"
          onClick={handleListenClick}
        >
          {t('listen')}
        </Button>
        <Button 
          variant="outline" 
          className="gap-2"
          onClick={handleLogin}
        >
          {t('addToLibrary')}
        </Button>
        <Button 
          variant="secondary" 
          className="gap-2"
          onClick={togglePreview}
        >
          <Headphones className="h-4 w-4" />
          {t('preview')}
        </Button>
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <Button 
        variant="default" 
        className="gap-2"
        onClick={handleListenClick}
      >
        {t('listen')}
      </Button>
      <Button 
        variant={isBookInLibrary ? "secondary" : "outline"} 
        className="gap-2"
        onClick={handleLibraryToggle}
      >
        {isBookInLibrary ? t('removeFromLibrary') : t('addToLibrary')}
      </Button>
      <Button 
        variant="secondary" 
        className="gap-2"
        onClick={togglePreview}
      >
        <Headphones className="h-4 w-4" />
        {isPreviewPlaying ? t('stopPreview') : t('preview')}
      </Button>
    </div>
  );
};

export default BookButtons;
