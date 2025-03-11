
import { useState } from 'react';
import BookList from "@/components/BookList";
import BookDetails from "@/components/BookDetails";
import { Book } from "@/types/book";
import { useIsMobile } from "@/hooks/use-mobile";

interface BookContentSectionProps {
  books: Book[];
  initialBook?: Book;
}

const BookContentSection = ({ books, initialBook }: BookContentSectionProps) => {
  const isMobile = useIsMobile();
  // Safely handle empty books array
  const [selectedBook, setSelectedBook] = useState<Book | undefined>(
    initialBook || (books && books.length > 0 ? books[0] : undefined)
  );

  // If no books are available, show a placeholder
  if (!books || books.length === 0) {
    return (
      <div className="flex justify-center items-center p-10">
        <p className="text-foreground/70">No books available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      <div className="md:col-span-1">
        <BookList 
          books={books} 
          selectedBook={selectedBook} 
          onSelectBook={setSelectedBook} 
        />
      </div>
      {!isMobile && selectedBook && (
        <div className="md:col-span-2">
          <BookDetails book={selectedBook} />
        </div>
      )}
    </div>
  );
};

export default BookContentSection;
