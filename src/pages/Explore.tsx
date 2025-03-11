
import { useState, useEffect } from 'react';
import ExploreTabs from "@/components/explore/ExploreTabs";
import BookContentSection from "@/components/explore/BookContentSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import { getAudiobooks, newReleases, trending } from "@/data/books";
import { Book } from "@/types/book";
import { useInView } from "react-intersection-observer";

const ITEMS_PER_PAGE = 20;

const Explore = () => {
  const [activeTab, setActiveTab] = useState("audiobooks");
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { t } = useLanguage();
  
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  // Initial load
  useEffect(() => {
    if (activeTab === "audiobooks" && books.length === 0) {
      loadMore();
    }
  }, [activeTab]);

  const loadMore = async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    const newBooks = getAudiobooks(page, ITEMS_PER_PAGE);
    
    if (newBooks.length < ITEMS_PER_PAGE) {
      setHasMore(false);
    }
    
    setBooks(prev => [...prev, ...newBooks]);
    setPage(prev => prev + 1);
    setLoading(false);
  };

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setBooks([]);
    setPage(1);
    setHasMore(true);
    
    if (value === "new-releases") {
      setBooks(newReleases || []);
      setHasMore(false);
    } else if (value === "trending") {
      setBooks(trending || []);
      setHasMore(false);
    } else {
      loadMore();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('explore')}</h1>
          <p className="text-foreground/70">{t('popularAudiobooks')}</p>
        </div>
        
        <ExploreTabs activeTab={activeTab} onTabChange={handleTabChange} />
        
        {books.length > 0 ? (
          <BookContentSection books={books} />
        ) : (
          <div className="w-full py-10 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-foreground/70">{t('loading')}</p>
          </div>
        )}
        
        {hasMore && (
          <div 
            ref={ref} 
            className="w-full h-20 flex items-center justify-center"
          >
            {loading && (
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
            )}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
