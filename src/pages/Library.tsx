
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpenText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";
import { getBookById } from "@/data/books";
import { Book } from "@/types/book";
import { useAuth } from "@/hooks/use-auth";
import AudiobookCard from "@/components/AudiobookCard";
import { Button } from "@/components/ui/button";

const Library = () => {
  const [libraryBooks, setLibraryBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn, library } = useAuth();
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const fetchBooks = () => {
      const books: Book[] = [];
      library.forEach((bookId) => {
        const book = getBookById(bookId);
        if (book) books.push(book);
      });
      setLibraryBooks(books);
      setLoading(false);
    };

    fetchBooks();
  }, [isLoggedIn, library, navigate]);

  if (!isLoggedIn) {
    return null; // Will navigate to login
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 pt-28">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('library')}</h1>
          <p className="text-foreground/70">{t('yourSavedAudiobooks')}</p>
        </div>
        
        {loading ? (
          <div className="w-full py-10 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-foreground/70">{t('loading')}</p>
          </div>
        ) : libraryBooks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {libraryBooks.map((book, index) => (
              <AudiobookCard 
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                coverImage={book.coverImage}
                duration={book.duration || "Unknown"}
                rating={book.rating}
                category={book.category || "Unknown"}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-hakim-dark/10 rounded-xl">
            <BookOpenText className="h-16 w-16 mx-auto mb-4 text-hakim-light/50" />
            <h2 className="text-xl font-semibold mb-2">{t('yourLibraryIsEmpty')}</h2>
            <p className="max-w-md mx-auto mb-6 text-foreground/70">
              {t('browseAudiobooksToAddToLibrary')}
            </p>
            <Button 
              onClick={() => navigate('/explore')}
              variant="default"
            >
              {t('exploreAudiobooks')}
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Library;
