
import { useState } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from "@/hooks/use-language";
import { useAuth } from '@/hooks/use-auth';
import { Book } from "@/types/book";
import BookTags from './book-details/BookTags';
import BookActions from './book-details/BookActions';
import BookButtons from './book-details/BookButtons';
import BookPreview from './book-details/BookPreview';
import LoginPrompt from './book-details/LoginPrompt';
import BookDescription from './book-details/BookDescription';

interface BookDetailsProps {
  book: Book;
  onLibraryUpdate?: () => void;
}

const BookDetails = ({ book, onLibraryUpdate }: BookDetailsProps) => {
  const { t } = useLanguage();
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);
  const { isLoggedIn, addToLibrary } = useAuth();
  const navigate = useNavigate();
  
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

  const handleAddToLibrary = () => {
    if (!isLoggedIn) {
      toast.error("Please login to add books to your library");
      navigate('/login');
      return;
    }
    
    addToLibrary(book.id);
    toast.success(t('addToLibrarySuccess') || `"${book.title}" added to your library`);
    
    if (onLibraryUpdate) {
      onLibraryUpdate();
    }
  };

  return (
    <div className="md:col-span-2 h-full p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 shadow-2xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <img 
            src={book.coverImage} 
            alt={book.title} 
            className="w-40 h-60 object-cover rounded-xl shadow-xl border border-white/10 hover:shadow-2xl transition-all duration-300" 
          />
        </div>
        
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2 text-white text-gradient">{book.title}</h2>
          <p className="text-hakim-light mb-3 text-opacity-90">{t('by')} {book.author}</p>
          
          <BookTags 
            rating={book.rating}
            duration={book.duration}
            category={book.category}
            releaseDate={book.releaseDate}
          />
          
          <div className="my-4 glass-dark p-5 rounded-lg backdrop-blur-md shadow-inner animate-fade-in">
            <BookDescription 
              description={book.description}
              additionalText={book.additionalText}
            />
          </div>
          
          <BookActions 
            bookId={book.id}
            title={book.title}
            isLoggedIn={isLoggedIn}
          />
          
          <BookButtons 
            bookId={book.id}
            isLoggedIn={isLoggedIn}
            isPreviewPlaying={isPreviewPlaying}
            togglePreview={togglePreview}
            handleLogin={handleLogin}
            onLibraryUpdate={onLibraryUpdate}
          />
        </div>
      </div>
      
      {isLoggedIn && (
        <BookPreview 
          isPreviewPlaying={isPreviewPlaying}
          title={book.title}
          author={book.author}
          coverImage={book.coverImage}
        />
      )}
      
      {!isLoggedIn && <LoginPrompt />}
    </div>
  );
};

export default BookDetails;
