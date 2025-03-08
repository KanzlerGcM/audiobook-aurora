
import { ChevronRight, BookPlus } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Book } from "@/types/book";
import { useLanguage } from "@/context/LanguageContext";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  
  const handleClick = () => {
    onSelect(book);
    navigate(`/book/${book.id}`);
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
            className="flex items-center text-xs text-hakim-light bg-hakim-medium/10 px-2 py-1 rounded hover:bg-hakim-medium/20"
            onClick={(e) => {
              e.stopPropagation();
              // Add to library functionality would go here
              console.log(`Added "${book.title}" to library`);
            }}
          >
            <BookPlus className="w-3 h-3 mr-1" />
            {t('addToLibrary')}
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
