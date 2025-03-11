
import { useState } from 'react';
import BookList from "@/components/BookList";
import BookDetails from "@/components/BookDetails";
import { Book } from "@/types/book";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BookContentSectionProps {
  books: Book[];
  initialBook?: Book;
}

const BookContentSection = ({ books, initialBook }: BookContentSectionProps) => {
  const isMobile = useIsMobile();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  
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

  if (!isLoggedIn) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="md:col-span-1">
          <BookList 
            books={books} 
            selectedBook={selectedBook} 
            onSelectBook={setSelectedBook} 
          />
        </div>
        <div className="md:col-span-2 bg-hakim-dark/10 p-8 rounded-xl flex flex-col items-center justify-center">
          <Lock className="h-12 w-12 mb-4 text-hakim-light/50" />
          <h2 className="text-xl font-medium mb-2">Member-only content</h2>
          <p className="text-center text-foreground/70 mb-6 max-w-md">
            Sign in to browse our full audiobook library and access all features.
          </p>
          <div className="flex gap-4">
            <Button variant="default" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button variant="outline" onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
          </div>
        </div>
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
