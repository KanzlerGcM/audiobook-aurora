import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  User, 
  Clock, 
  Calendar, 
  Headphones, 
  Star, 
  Bookmark, 
  Share2, 
  ChevronRight, 
  ChevronDown,
  Check,
  Music,
  Play,
  Pause
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer';
import AudiobookCard from '@/components/AudiobookCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/context/LanguageContext';

interface ChapterType {
  id: string;
  title: string;
  duration: string;
  isFree: boolean;
}

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

const BookDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [activeChapter, setActiveChapter] = useState<ChapterType | null>(null);
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // For demo purposes, set the first chapter as active after a short delay
    const timer = setTimeout(() => {
      setActiveChapter(bookDetails.chapters[0]);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  // Show mini player when scrolling down
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
    // In a real app, this would trigger the audio to play
    console.log(`Playing chapter: ${chapter.title}`);
  };

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
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-xl max-w-xs mx-auto">
                <img 
                  src={bookDetails.coverImage} 
                  alt={bookDetails.title}
                  className="w-full h-full object-cover animate-fade-in"
                />
              </div>
              
              <div className="mt-6 space-y-4">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Bookmark className="w-4 h-4" /> {t('addToLibrary')}
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4" /> {t('shareBook')}
                </Button>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex justify-between">
                  <span className="text-foreground/70">{t('narrator')}</span>
                  <span className="font-medium">{bookDetails.narrator}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{t('duration')}</span>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="font-medium">{bookDetails.duration}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{t('released')}</span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="font-medium">{bookDetails.releaseDate}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{t('publisher')}</span>
                  <span className="font-medium">{bookDetails.publisher}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{t('language')}</span>
                  <span className="font-medium">{t(bookDetails.language.toLowerCase())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground/70">{t('genre')}</span>
                  <span className="font-medium">{t(bookDetails.genre.toLowerCase().replace(' ', ''))}</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="mb-6 animate-fade-in">
                <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-3 inline-block">
                  {t(bookDetails.genre.toLowerCase())}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{bookDetails.title}</h1>
                <p className="text-foreground/70 mb-3">{t('by')} {bookDetails.author}</p>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(bookDetails.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="font-medium">{bookDetails.rating}</span>
                  <span className="text-foreground/70">({bookDetails.reviews} {t('reviews')})</span>
                </div>
                
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
              </div>
              
              <Tabs defaultValue="chapters" className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="chapters">{t('chapters')}</TabsTrigger>
                  <TabsTrigger value="description">{t('description')}</TabsTrigger>
                  <TabsTrigger value="reviews">{t('reviews')}</TabsTrigger>
                </TabsList>
                
                <TabsContent value="chapters" className="space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">{t('allChapters')}</h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setExpandedChapters(!expandedChapters)}
                      className="text-sm"
                    >
                      {expandedChapters ? t('collapse') : t('expand')}
                      {expandedChapters ? <ChevronDown className="ml-1 w-4 h-4" /> : <ChevronRight className="ml-1 w-4 h-4" />}
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {bookDetails.chapters.slice(0, expandedChapters ? undefined : 5).map((chapter) => (
                      <div 
                        key={chapter.id} 
                        className={`rounded-lg p-4 flex items-center justify-between hover:bg-foreground/5 transition-colors cursor-pointer ${
                          activeChapter?.id === chapter.id ? 'bg-accent/10 border border-accent/20' : 'border border-transparent'
                        }`}
                        onClick={() => handlePlayChapter(chapter)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center">
                            {activeChapter?.id === chapter.id ? (
                              <Music className="w-5 h-5 text-accent" />
                            ) : (
                              <Play className="w-5 h-5 ml-0.5" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{chapter.title}</h4>
                            <div className="flex items-center text-xs text-foreground/70 space-x-3">
                              <span className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {chapter.duration}
                              </span>
                              {chapter.isFree && (
                                <span className="flex items-center text-green-600">
                                  <Check className="w-3 h-3 mr-1" />
                                  {t('freePreview')}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="text-foreground/70">
                          {activeChapter?.id === chapter.id ? (
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Pause className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Play className="h-4 w-4 ml-0.5" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    {!expandedChapters && bookDetails.chapters.length > 5 && (
                      <Button 
                        variant="outline" 
                        className="w-full mt-2"
                        onClick={() => setExpandedChapters(true)}
                      >
                        {t('showAllChapters')} ({bookDetails.chapters.length})
                      </Button>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="description">
                  <div className="prose max-w-none">
                    <p className="mb-4">{bookDetails.fullDescription}</p>
                    <p>
                      From the author of The Martian, a thrilling tale of survival, discovery, and the indomitable human spirit. Perfect for fans of speculative fiction that combines scientific accuracy with heart-pounding adventure.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-xl">{bookDetails.reviews} {t('reviews')}</h3>
                        <div className="flex items-center mt-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < Math.floor(bookDetails.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="ml-2 font-medium">{bookDetails.rating} {t('outOf5')}</span>
                        </div>
                      </div>
                      <Button>{t('writeReview')}</Button>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Sample Reviews */}
                      <div className="border-b border-foreground/10 pb-6">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                            <User className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-medium">Michael Johnson</h4>
                            <div className="flex items-center">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className="w-3 h-3 text-amber-400 fill-amber-400" 
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-foreground/70 ml-2">2 {t('monthsAgo')}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-foreground/80">
                          Absolutely brilliant! The narration by Ray Porter elevates an already fantastic story. 
                          The science is accessible yet fascinating, and the characters are incredibly well-developed. 
                          Andy Weir has outdone himself with this one.
                        </p>
                      </div>
                      
                      <div className="border-b border-foreground/10 pb-6">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                            <User className="w-5 h-5 text-accent" />
                          </div>
                          <div>
                            <h4 className="font-medium">Sarah Williams</h4>
                            <div className="flex items-center">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`w-3 h-3 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-foreground/70 ml-2">3 {t('monthsAgo')}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-foreground/80">
                          I couldn't stop listening! The pacing is perfect, with just the right balance of 
                          tension, humor, and scientific explanations. The twist halfway through had me gasping. 
                          One of my favorite audiobooks of the year.
                        </p>
                      </div>
                      
                      <Button variant="outline" className="w-full">{t('loadMoreReviews')}</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">{t('youMightAlsoLike')}</h2>
                <p className="text-foreground/70 mt-1">{t('similarAudiobooks')}</p>
              </div>
              <Link to="/recommended" className="text-accent flex items-center text-sm font-medium hover:underline">
                {t('viewAll')} <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedBooks.map((book, index) => (
                <AudiobookCard 
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  coverImage={book.coverImage}
                  duration={book.duration}
                  rating={book.rating}
                  category={book.category}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetails;
