import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Headphones } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/context/LanguageContext';

import BookCoverActions from '@/components/book-details/BookCoverActions';
import BookMetadata from '@/components/book-details/BookMetadata';
import BookHeader from '@/components/book-details/BookHeader';
import ChaptersList from '@/components/book-details/ChaptersList';
import BookDescription from '@/components/book-details/BookDescription';
import BookReviews from '@/components/book-details/BookReviews';
import RelatedBooks from '@/components/book-details/RelatedBooks';

const bookDetails = {
  id: '1',
  title: 'Project Hail Mary',
  author: 'Andy Weir',
  narrator: 'Ray Porter',
  coverImage: 'https://images.unsplash.com/photo-1633988354540-d3218bf96403?q=80&w=1974&auto=format&fit=crop',
  blurb: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.",
  fullDescription: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish. Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it. All he knows is that he's been asleep for a very, very long time. And he's just been awakened to find himself millions of miles from home, with nothing but two corpses for company. His crewmates dead, his memories fuzzily returning, he realizes that an impossible task now confronts him. Alone on this tiny ship that's been cobbled together by every government and space agency on the planet and hurled into the depths of space, it's up to him to conquer an extinction-level threat to our species. And thanks to an unexpected ally, he just might have a chance.",
  duration: '16h 10m',
  releaseDate: 'May 4, 2021',
  publisher: 'Audible Studios',
  language: 'English',
  genre: 'Science Fiction',
  rating: 4.9,
  reviews: 2834,
  chapters: [
    { id: 'ch1', title: 'Chapter 1: Awakening', duration: '34m', isFree: true },
    { id: 'ch2', title: 'Chapter 2: Memory', duration: '42m', isFree: true },
    { id: 'ch3', title: 'Chapter 3: The Mission', duration: '38m', isFree: false },
    { id: 'ch4', title: 'Chapter 4: Isolation', duration: '45m', isFree: false },
    { id: 'ch5', title: 'Chapter 5: The Discovery', duration: '40m', isFree: false },
    { id: 'ch6', title: 'Chapter 6: First Contact', duration: '39m', isFree: false },
    { id: 'ch7', title: 'Chapter 7: Communication', duration: '41m', isFree: false },
    { id: 'ch8', title: 'Chapter 8: Collaboration', duration: '37m', isFree: false },
  ]
};

const relatedBooks = [
  {
    id: '2',
    title: 'The Martian',
    author: 'Andy Weir',
    coverImage: 'https://images.unsplash.com/photo-1560115246-30778a6578bf?q=80&w=1974&auto=format&fit=crop',
    duration: '10h 53m',
    rating: 4.8,
    category: 'Sci-Fi'
  },
  {
    id: '3',
    title: 'Artemis',
    author: 'Andy Weir',
    coverImage: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1974&auto=format&fit=crop',
    duration: '8h 59m',
    rating: 4.5,
    category: 'Sci-Fi'
  },
  {
    id: '4',
    title: 'Children of Time',
    author: 'Adrian Tchaikovsky',
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop',
    duration: '16h 31m',
    rating: 4.7,
    category: 'Sci-Fi'
  },
  {
    id: '5',
    title: 'To Sleep in a Sea of Stars',
    author: 'Christopher Paolini',
    coverImage: 'https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?q=80&w=1908&auto=format&fit=crop',
    duration: '32h 29m',
    rating: 4.6,
    category: 'Sci-Fi'
  }
];

interface ChapterType {
  id: string;
  title: string;
  duration: string;
  isFree: boolean;
}

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activeChapter, setActiveChapter] = useState<ChapterType | null>(null);
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setActiveChapter(bookDetails.chapters[0]);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowMiniPlayer(scrollPosition > 600);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlayChapter = (chapter: ChapterType) => {
    setActiveChapter(chapter);
    console.log(`Playing chapter: ${chapter.title}`);
  };

  const reviews = [
    {
      user: "Michael Johnson",
      rating: 5,
      date: `2 ${t('monthsAgo')}`,
      text: "Absolutely brilliant! The narration by Ray Porter elevates an already fantastic story. The science is accessible yet fascinating, and the characters are incredibly well-developed. Andy Weir has outdone himself with this one."
    },
    {
      user: "Sarah Williams",
      rating: 4,
      date: `3 ${t('monthsAgo')}`,
      text: "I couldn't stop listening! The pacing is perfect, with just the right balance of tension, humor, and scientific explanations. The twist halfway through had me gasping. One of my favorite audiobooks of the year."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {showMiniPlayer && activeChapter && (
        <AudioPlayer 
          title={activeChapter.title}
          author={bookDetails.author}
          coverImage={bookDetails.coverImage}
          miniPlayer
        />
      )}
      
      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <BookCoverActions 
                coverImage={bookDetails.coverImage} 
                title={bookDetails.title} 
              />
              
              <BookMetadata 
                narrator={bookDetails.narrator}
                duration={bookDetails.duration}
                releaseDate={bookDetails.releaseDate}
                publisher={bookDetails.publisher}
                language={bookDetails.language}
                genre={bookDetails.genre}
              />
            </div>
            
            <div className="lg:col-span-2">
              <BookHeader 
                title={bookDetails.title}
                author={bookDetails.author}
                genre={bookDetails.genre}
                rating={bookDetails.rating}
                reviews={bookDetails.reviews}
              />
              
              <p className="text-lg mb-6">{bookDetails.blurb}</p>
              
              {activeChapter ? (
                <AudioPlayer 
                  title={activeChapter.title}
                  author={bookDetails.author}
                  coverImage={bookDetails.coverImage}
                />
              ) : (
                <div className="glass rounded-xl p-8 text-center animate-pulse">
                  <Headphones className="w-12 h-12 mx-auto mb-4 text-accent/70" />
                  <p className="text-lg font-medium">{t('selectChapter')}</p>
                </div>
              )}
              
              <Tabs defaultValue="chapters" className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="chapters">{t('chapters')}</TabsTrigger>
                  <TabsTrigger value="description">{t('description')}</TabsTrigger>
                  <TabsTrigger value="reviews">{t('reviews')}</TabsTrigger>
                </TabsList>
                
                <TabsContent value="chapters">
                  <ChaptersList 
                    chapters={bookDetails.chapters}
                    activeChapter={activeChapter}
                    onPlayChapter={handlePlayChapter}
                  />
                </TabsContent>
                
                <TabsContent value="description">
                  <BookDescription 
                    description={bookDetails.fullDescription}
                    additionalText="From the author of The Martian, a thrilling tale of survival, discovery, and the indomitable human spirit. Perfect for fans of speculative fiction that combines scientific accuracy with heart-pounding adventure."
                  />
                </TabsContent>
                
                <TabsContent value="reviews">
                  <BookReviews 
                    totalReviews={bookDetails.reviews}
                    rating={bookDetails.rating}
                    reviews={reviews}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <RelatedBooks books={relatedBooks} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetails;
