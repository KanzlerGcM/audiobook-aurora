
import { ScrollArea } from "@/components/ui/scroll-area";
import BookListItem from "@/components/BookListItem";
import { Book } from "@/types/book";

interface BookListProps {
  books: Book[];
  selectedBook: Book;
  onSelectBook: (book: Book) => void;
}

const BookList = ({ books, selectedBook, onSelectBook }: BookListProps) => {
  return (
    <ScrollArea className="h-[60vh] md:h-[65vh] rounded-lg border border-hakim-medium/10 p-1">
      <div className="space-y-1 pr-3">
        {books.map((book, index) => (
          <BookListItem 
            key={book.id}
            book={book}
            isSelected={selectedBook.id === book.id}
            isLast={index === books.length - 1}
            onSelect={onSelectBook}
          />
        ))}
      </div>
    </ScrollArea>
  );
};

export default BookList;
