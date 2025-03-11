
import { ChevronRight, BookPlus } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Book } from "@/types/book";
import { useLanguage } from "@/hooks/use-language";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { toast } from "sonner";

interface BookListItemProps {
  book: Book;
  isSelected: boolean;
  isLast: boolean;
  onSelect: (book: Book) => void;
}

const BookListItem = ({ 
  book, 
  isSelected, 
  isLast, 
  onSelect 
}: BookListItemProps) => {
  const { t } = useLanguage();
  const location = useLocation();
  const { isLoggedIn, addToLibrary, isInLibrary, removeFromLibrary } = useAuth();
  
  const handleClick = () => {
    onSelect(book);
    // No navigation, just selecting the book
  };
  
  const isBookInLibrary = isLoggedIn && isInLibrary(book.id);
  
  const handleLibraryToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isBookInLibrary) {
      removeFromLibrary(book.id);
    } else {
      addToLibrary(book.id);
      toast.success(t('bookAddedToLibrary'));
    }
  };
  
  return (
    <div>
      <div 
        className={`flex items-center p-3 rounded-lg cursor-pointer transition-all hover:bg-hakim-medium/10 ${isSelected ? 'bg-hakim-medium/10' : ''}`}
        onClick={handleClick}
      >
        <img 
          src={book.coverImage} 
          alt={book.title} 
          className="w-16 h-24 object-cover rounded-md" 
        />
        <div className="ml-4 flex-1">
          <h3 className={`font-medium line-clamp-1 ${isSelected ? 'text-hakim-light' : 'text-foreground'}`}>
            {book.title}
          </h3>
          <p className="text-sm text-foreground/70 mb-2">
            {book.author}
          </p>
          <button 
            className={`flex items-center text-xs px-2 py-1 rounded hover:bg-hakim-medium/20 ${
              isBookInLibrary 
                ? 'bg-hakim-medium text-white' 
                : 'bg-hakim-medium/10 text-hakim-light'
            }`}
            onClick={handleLibraryToggle}
            aria-label={isBookInLibrary ? t('removeFromLibrary') : t('addToLibrary')}
          >
            <BookPlus className="w-3 h-3 mr-1" />
            {isBookInLibrary ? t('removeFromLibrary') : t('addToLibrary')}
          </button>
        </div>
        <ChevronRight className={`w-5 h-5 ${isSelected ? 'text-hakim-light' : 'text-foreground/50'}`} />
      </div>
      {!isLast && (
        <Separator className="my-1 bg-hakim-medium/10" />
      )}
    </div>
  );
};

export default BookListItem;
