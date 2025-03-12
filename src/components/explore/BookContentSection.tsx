import { useState, useEffect, useRef } from 'react';
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
  const { isLoggedIn, library } = useAuth();
  const navigate = useNavigate();
  const detailsContainerRef = useRef<HTMLDivElement>(null);
  
  const [selectedBook, setSelectedBook] = useState<Book | undefined>(
    initialBook || (books && books.length > 0 ? books[0] : undefined)
  );
  
  const [forceUpdateCounter, setForceUpdateCounter] = useState(0);
  const forceRerender = () => setForceUpdateCounter(prev => prev + 1);
  
  useEffect(() => {
    if (selectedBook && detailsContainerRef.current) {
      const container = detailsContainerRef.current;
      container.style.position = 'relative';
      container.style.overflow = 'hidden';
      
      const existingOverlay = container.querySelector('.book-color-overlay');
      if (existingOverlay) {
        existingOverlay.remove();
      }
      
      const overlay = document.createElement('div');
      overlay.className = 'book-color-overlay';
      overlay.style.position = 'absolute';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.right = '0';
      overlay.style.bottom = '0';
      overlay.style.opacity = '0.55';
      overlay.style.filter = 'blur(150px)';
      overlay.style.transform = 'translateZ(0)';
      overlay.style.zIndex = '0';
      
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = selectedBook.coverImage;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (context) {
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img, 0, 0);
          
          const topColor = getColorFromCanvas(context, 0, 0);
          const middleColor = getColorFromCanvas(context, Math.floor(img.width/2), Math.floor(img.height/2));
          const bottomColor = getColorFromCanvas(context, Math.floor(img.width/2), img.height - 1);
          
          overlay.style.background = `radial-gradient(circle at top left, ${topColor}aa 10%, ${middleColor}99 40%, ${bottomColor}77 90%)`;
          container.insertBefore(overlay, container.firstChild);
        }
      };
      
      img.onerror = () => {
        overlay.style.background = 'radial-gradient(circle at top left, rgba(80, 80, 120, 0.6) 0%, rgba(60, 60, 90, 0.7) 50%, rgba(40, 40, 60, 0.8) 100%)';
        container.insertBefore(overlay, container.firstChild);
      };
    }
  }, [selectedBook]);
  
  const getColorFromCanvas = (context: CanvasRenderingContext2D, x: number, y: number): string => {
    const pixel = context.getImageData(x, y, 1, 1).data;
    return `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, 0.85)`;
  };
  
  useEffect(() => {
    forceRerender();
  }, [library]);
  
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
            onLibraryUpdate={forceRerender}
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
          onLibraryUpdate={forceRerender}
          key={`booklist-${forceUpdateCounter}`}
        />
      </div>
      <div className="md:col-span-2 rounded-xl overflow-hidden backdrop-blur-md border border-white/5 shadow-2xl relative w-full h-full transition-all duration-300" ref={detailsContainerRef}>
        <div className="relative z-10">
          <BookDetails 
            book={selectedBook} 
            onLibraryUpdate={forceRerender}
            key={`bookdetails-${forceUpdateCounter}`}
          />
        </div>
      </div>
    </div>
  );
};

export default BookContentSection;
