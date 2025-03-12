
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, BookX } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/use-language';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Book } from '@/types/book';
import { toast } from 'sonner';
import RemovableAudiobookCard from '@/components/RemovableAudiobookCard';

const RatedBooks = () => {
  const { t } = useLanguage();
  const [likedBooks, setLikedBooks] = useState<Book[]>([]);
  const [dislikedBooks, setDislikedBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // In a real implementation, this would fetch from an API or local storage
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      // Mock liked books - in a real app, fetch this from user preferences
      const mockLikedBooks: Book[] = [
        {
          id: '1',
          title: 'The Martian',
          author: 'Andy Weir',
          coverImage: 'https://images.unsplash.com/photo-1560115246-30778a6578bf?q=80&w=1974&auto=format&fit=crop',
          description: 'An astronaut becomes stranded on Mars and must find a way to survive.',
          duration: '10h 53m',
          rating: 4.8,
          category: 'Sci-Fi',
          releaseDate: '2014',
          reviews: 10345
        },
        {
          id: '2',
          title: 'Project Hail Mary',
          author: 'Andy Weir',
          coverImage: 'https://images.unsplash.com/photo-1633988354540-d3218bf96403?q=80&w=1974&auto=format&fit=crop',
          description: 'A lone astronaut must save humanity from an extinction-level threat.',
          duration: '16h 10m',
          rating: 4.9,
          category: 'Sci-Fi',
          releaseDate: '2021',
          reviews: 8267
        }
      ];
      
      // Mock disliked books
      const mockDislikedBooks: Book[] = [
        {
          id: '3',
          title: 'Bad Book Example',
          author: 'Unknown Author',
          coverImage: 'https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?q=80&w=1908&auto=format&fit=crop',
          description: 'This is an example of a book the user disliked.',
          duration: '6h 20m',
          rating: 2.1,
          category: 'Fiction',
          releaseDate: '2020',
          reviews: 524
        }
      ];
      
      setLikedBooks(mockLikedBooks);
      setDislikedBooks(mockDislikedBooks);
      setLoading(false);
    }, 1000);
  }, []);

  // In a real app, this would update the user's preferences
  const removeRating = (book: Book, isLiked: boolean) => {
    if (isLiked) {
      setLikedBooks(prevBooks => prevBooks.filter(b => b.id !== book.id));
      toast.info(`Removed "${book.title}" from liked books`);
    } else {
      setDislikedBooks(prevBooks => prevBooks.filter(b => b.id !== book.id));
      toast.info(`Removed "${book.title}" from disliked books`);
    }
  };

  const handleRemoveLiked = (bookId: string) => {
    const book = likedBooks.find(b => b.id === bookId);
    if (book) {
      removeRating(book, true);
    }
  };

  const handleRemoveDisliked = (bookId: string) => {
    const book = dislikedBooks.find(b => b.id === bookId);
    if (book) {
      removeRating(book, false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8 pt-28">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{t('ratedBooks')}</h1>
          <p className="text-foreground/70">{t('ratedBooksDesc') || "Books you've liked or disliked."}</p>
        </div>
        
        <Tabs defaultValue="liked" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="liked" className="flex items-center">
              <ThumbsUp className="mr-2 h-4 w-4" />
              {t('likedBooks')}
            </TabsTrigger>
            <TabsTrigger value="disliked" className="flex items-center">
              <ThumbsDown className="mr-2 h-4 w-4" />
              {t('dislikedBooks')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="liked">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
              </div>
            ) : likedBooks.length > 0 ? (
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {likedBooks.map((book, index) => (
                    <RemovableAudiobookCard
                      key={book.id}
                      id={book.id}
                      title={book.title}
                      author={book.author}
                      coverImage={book.coverImage}
                      duration={book.duration}
                      rating={book.rating}
                      category={book.category}
                      index={index}
                      onRemove={handleRemoveLiked}
                      removeLabel={t('removeFromLiked') || "Remove from Liked"}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 border border-dashed rounded-lg">
                <ThumbsUp className="h-12 w-12 mx-auto text-foreground/30 mb-4" />
                <h3 className="text-xl font-medium mb-2">{t('noLikedBooks')}</h3>
                <p className="text-foreground/70 mb-6">{t('noLikedBooksDesc')}</p>
                <button 
                  className="text-accent hover:underline"
                  onClick={() => navigate('/explore')}
                >
                  {t('exploreBooks')}
                </button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="disliked">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
              </div>
            ) : dislikedBooks.length > 0 ? (
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {dislikedBooks.map((book, index) => (
                    <RemovableAudiobookCard
                      key={book.id}
                      id={book.id}
                      title={book.title}
                      author={book.author}
                      coverImage={book.coverImage}
                      duration={book.duration}
                      rating={book.rating}
                      category={book.category}
                      index={index}
                      onRemove={handleRemoveDisliked}
                      removeLabel={t('removeFromDisliked') || "Remove from Disliked"}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-12 border border-dashed rounded-lg">
                <ThumbsDown className="h-12 w-12 mx-auto text-foreground/30 mb-4" />
                <h3 className="text-xl font-medium mb-2">{t('noDislikedBooks')}</h3>
                <p className="text-foreground/70 mb-6">{t('noDislikedBooksDesc')}</p>
                <button 
                  className="text-accent hover:underline"
                  onClick={() => navigate('/explore')}
                >
                  {t('exploreBooks')}
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default RatedBooks;
