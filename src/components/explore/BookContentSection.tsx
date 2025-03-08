
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
  const [selectedBook, setSelectedBook] = useState<Book>(initialBook || books[0]);
  const isMobile = useIsMobile();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      <div className="md:col-span-1">
        <BookList 
          books={books} 
          selectedBook={selectedBook} 
          onSelectBook={setSelectedBook} 
        />
      </div>
      {!isMobile && (
        <div className="md:col-span-2">
          <BookDetails book={selectedBook} />
        </div>
      )}
    </div>
  );
};

export default BookContentSection;
