
import { ScrollArea } from "@/components/ui/scroll-area";
import BookListItem from "@/components/BookListItem";
import { Book } from "@/types/book";

interface BookListProps {
  books: Book[];
  selectedBook: Book | undefined;
  onSelectBook: (book: Book) => void;
}

const BookList = ({ books, selectedBook, onSelectBook }: BookListProps) => {
  if (!books || books.length === 0) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <p className="text-foreground/70">No books available</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-[60vh] md:h-[65vh] rounded-lg border border-hakim-medium/10 p-1">
      <div className="space-y-1 pr-3">
        {books.map((book, index) => (
          <BookListItem 
            key={book.id}
            book={book}
            isSelected={selectedBook ? selectedBook.id === book.id : false}
            isLast={index === books.length - 1}
            onSelect={onSelectBook}
          />
        ))}
      </div>
    </ScrollArea>
  );
};

export default BookList;
