
import { Headphones } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from "@/hooks/use-language";
import { useAuth } from '@/hooks/use-auth';

interface BookButtonsProps {
  bookId: string;
  isLoggedIn: boolean;
  isPreviewPlaying: boolean;
  togglePreview: () => void;
  handleLogin: () => void;
}

const BookButtons = ({ bookId, isLoggedIn, isPreviewPlaying, togglePreview, handleLogin }: BookButtonsProps) => {
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
    } else {
      addToLibrary(bookId);
      navigate('/library');
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
          onClick={handleLibraryToggle}
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
