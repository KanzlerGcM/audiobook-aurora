
import { useState, useEffect } from 'react';
import { BookX } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useAuth } from '@/hooks/use-auth';
import { Book } from '@/types/book';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AudiobookCard from '@/components/AudiobookCard';
import { Button } from '@/components/ui/button';
import { getAudiobooks, getBookById } from '@/data/books';

const Library = () => {
  const { t } = useLanguage();
  const { isLoggedIn, library, removeFromLibrary } = useAuth();
  const [userBooks, setUserBooks] = useState<Book[]>([]);
  
  useEffect(() => {
    if (isLoggedIn && library) {
      // Fetch books that are in user's library
      const libraryBooks: Book[] = [];
      library.forEach(bookId => {
        const book = getBookById(bookId);
        if (book) libraryBooks.push(book);
      });
      setUserBooks(libraryBooks);
    } else {
      setUserBooks([]);
    }
  }, [isLoggedIn, library]);
  
  const handleRemoveBook = (bookId: string) => {
    removeFromLibrary(bookId);
  };
  
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-32">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-hakim-light">{t('myLibrary')}</h1>
          <p className="text-hakim-gray mt-2">
            {isLoggedIn 
              ? userBooks.length > 0 
                ? t('yourAudiobooks')
                : t('emptyLibrary')
              : t('pleaseLoginToViewLibrary')
            }
          </p>
        </div>
        
        {!isLoggedIn ? (
          <div className="text-center py-12">
            <p className="text-hakim-gray mb-4">{t('pleaseLoginToViewLibrary')}</p>
            <Button onClick={() => window.location.href = '/login'}>
              {t('signIn')}
            </Button>
          </div>
        ) : userBooks.length === 0 ? (
          <div className="text-center py-12">
            <BookX className="mx-auto h-16 w-16 text-hakim-gray/50 mb-4" />
            <p className="text-hakim-gray mb-4">{t('noBooks')}</p>
            <Button onClick={() => window.location.href = '/explore'}>
              {t('exploreBooks')}
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {userBooks.map((book) => (
              <div key={book.id} className="relative group">
                <AudiobookCard 
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  coverImage={book.coverImage}
                  duration={book.duration || ""}
                  rating={book.rating}
                  category={book.category || ""}
                  index={0}
                />
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleRemoveBook(book.id)}
                >
                  <BookX className="h-4 w-4 mr-1" />
                  {t('remove')}
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Library;
