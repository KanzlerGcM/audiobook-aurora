
import { Star, Clock, Calendar, BookOpenText, ThumbsUp, ThumbsDown, Headphones, Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Book } from "@/types/book";
import { useLanguage } from "@/hooks/use-language";
import { useState } from 'react';
import { toast } from 'sonner';
import AudioPlayer from '@/components/AudioPlayer';
import { useAuth } from '@/hooks/use-auth';
import { useNavigate } from 'react-router-dom';

interface BookDetailsProps {
  book: Book;
}

const BookDetails = ({ book }: BookDetailsProps) => {
  const { t } = useLanguage();
  const [liked, setLiked] = useState<boolean | null>(null);
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);
  const { isLoggedIn, addToLibrary, isInLibrary, removeFromLibrary } = useAuth();
  const navigate = useNavigate();
  
  const isBookInLibrary = isLoggedIn && isInLibrary(book.id);

  const handleLike = () => {
    if (!isLoggedIn) {
      toast.error("Please login to like books");
      return;
    }
    
    if (liked === true) {
      setLiked(null);
      toast.info(`Removed like from "${book.title}"`);
    } else {
      setLiked(true);
      toast.success(`You liked "${book.title}"`);
    }
  };

  const handleDislike = () => {
    if (!isLoggedIn) {
      toast.error("Please login to rate books");
      return;
    }
    
    if (liked === false) {
      setLiked(null);
      toast.info(`Removed dislike from "${book.title}"`);
    } else {
      setLiked(false);
      toast.error(`You disliked "${book.title}"`);
    }
  };

  const togglePreview = () => {
    if (!isLoggedIn) {
      toast.error("Please login to play previews");
      return;
    }
    
    setIsPreviewPlaying(!isPreviewPlaying);
    if (!isPreviewPlaying) {
      toast.info(`Playing preview for "${book.title}"`);
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleListenClick = () => {
    navigate(`/audiobook/${book.id}`);
  };

  const handleLibraryToggle = () => {
    if (isBookInLibrary) {
      removeFromLibrary(book.id);
    } else {
      addToLibrary(book.id);
    }
  };

  return (
    <div className="md:col-span-2 bg-hakim-dark/10 p-6 rounded-xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img 
            src={book.coverImage} 
            alt={book.title} 
            className="w-40 h-60 object-cover rounded-xl shadow-lg" 
          />
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
          <p className="text-hakim-light mb-3">{t('by')} {book.author}</p>
          
          <div className="flex flex-wrap gap-4 my-4">
            <div className="flex items-center space-x-1 bg-hakim-medium/10 px-3 py-1.5 rounded-full">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-sm">{book.rating}</span>
            </div>
            
            <div className="flex items-center space-x-1 bg-hakim-medium/10 px-3 py-1.5 rounded-full">
              <Clock className="w-4 h-4 text-hakim-light" />
              <span className="text-sm">{book.duration}</span>
            </div>
            
            {book.category && (
              <div className="flex items-center space-x-1 bg-hakim-medium/10 px-3 py-1.5 rounded-full">
                <BookOpenText className="w-4 h-4 text-hakim-light" />
                <span className="text-sm">{book.category}</span>
              </div>
            )}
            
            {'releaseDate' in book && (
              <div className="flex items-center space-x-1 bg-hakim-medium/10 px-3 py-1.5 rounded-full">
                <Calendar className="w-4 h-4 text-hakim-light" />
                <span className="text-sm">{book.releaseDate}</span>
              </div>
            )}
          </div>
          
          <p className="text-foreground/80 leading-relaxed my-4">
            {book.description}
          </p>
          
          <div className="flex items-center gap-3 my-4">
            <button 
              onClick={handleLike}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-full transition-colors ${
                liked === true 
                  ? 'bg-green-500/20 text-green-500' 
                  : 'bg-hakim-medium/10 hover:bg-hakim-medium/20'
              }`}
            >
              <ThumbsUp className={`w-4 h-4 ${liked === true ? 'fill-green-500' : ''}`} />
            </button>
            <button 
              onClick={handleDislike}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-full transition-colors ${
                liked === false 
                  ? 'bg-red-500/20 text-red-500' 
                  : 'bg-hakim-medium/10 hover:bg-hakim-medium/20'
              }`}
            >
              <ThumbsDown className={`w-4 h-4 ${liked === false ? 'fill-red-500' : ''}`} />
            </button>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-3">
            {isLoggedIn ? (
              <>
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
              </>
            ) : (
              <Button 
                variant="default" 
                className="gap-2"
                onClick={handleLogin}
              >
                <Lock className="h-4 w-4" />
                Login to access
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {isPreviewPlaying && isLoggedIn && (
        <div className="mt-6">
          <AudioPlayer 
            title={book.title}
            author={book.author}
            coverImage={book.coverImage}
            miniPlayer={true}
          />
        </div>
      )}
      
      {!isLoggedIn && (
        <div className="mt-6 p-4 bg-hakim-dark/20 rounded-lg border border-hakim-medium/20 text-center">
          <Lock className="h-8 w-8 mx-auto mb-2 text-hakim-light/50" />
          <h3 className="text-lg font-medium mb-2">Member-only content</h3>
          <p className="text-foreground/70 mb-4">
            Sign in to access our extensive audiobook library, including previews, ratings, and more.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="default" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="outline" onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
