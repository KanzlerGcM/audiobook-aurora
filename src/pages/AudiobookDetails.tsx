
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById } from '@/data/books';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDetails from '@/components/BookDetails';
import { Book } from "@/types/book";
import { useLanguage } from "@/hooks/use-language";
import AudiobookCard from '@/components/AudiobookCard';

const AudiobookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const book = id ? getBookById(id) : undefined;
  
  useEffect(() => {
    if (!book) {
      navigate('/explore');
    }
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [book, navigate]);

  if (!book) {
    return null;
  }
  
  // Get related books (in a real app, this would be filtered by category/author)
  const relatedBooks = getBookById('1') ? [getBookById('1')] : [];
  // Filter out the current book from related books
  const filteredRelatedBooks = relatedBooks.filter(relBook => relBook && relBook.id !== book.id);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 pt-28">
        <BookDetails book={book} />
        
        {filteredRelatedBooks.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">{t('youMightAlsoLike')}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {filteredRelatedBooks.map((relatedBook, index) => 
                relatedBook && (
                  <AudiobookCard
                    key={relatedBook.id}
                    id={relatedBook.id}
                    title={relatedBook.title}
                    author={relatedBook.author}
                    coverImage={relatedBook.coverImage}
                    duration={relatedBook.duration || "Unknown"}
                    rating={relatedBook.rating}
                    category={relatedBook.category || "Unknown"}
                    index={index}
                  />
                )
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AudiobookDetails;
