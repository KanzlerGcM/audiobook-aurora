
import { Star, Clock, Calendar, BookOpenText, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Book } from "@/types/book";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from 'react';
import { toast } from 'sonner';

interface BookDetailsProps {
  book: Book;
}

const BookDetails = ({ book }: BookDetailsProps) => {
  const { t } = useLanguage();
  const [liked, setLiked] = useState<boolean | null>(null);

  const handleLike = () => {
    if (liked === true) {
      setLiked(null);
      toast.info(`Removed like from "${book.title}"`);
    } else {
      setLiked(true);
      toast.success(`You liked "${book.title}"`);
    }
  };

  const handleDislike = () => {
    if (liked === false) {
      setLiked(null);
      toast.info(`Removed dislike from "${book.title}"`);
    } else {
      setLiked(false);
      toast.error(`You disliked "${book.title}"`);
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
            <Button variant="default" className="gap-2">
              {t('listen')}
            </Button>
            <Button variant="outline" className="gap-2">
              {t('addToLibrary')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
