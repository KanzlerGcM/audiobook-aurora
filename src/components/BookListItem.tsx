
import { ChevronRight } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Book } from "@/types/book";

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
  return (
    <div>
      <div 
        className={`flex items-center p-3 rounded-lg cursor-pointer transition-all hover:bg-hakim-medium/10 ${isSelected ? 'bg-hakim-medium/10' : ''}`}
        onClick={() => onSelect(book)}
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
          <p className="text-sm text-foreground/70">
            {book.author}
          </p>
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
