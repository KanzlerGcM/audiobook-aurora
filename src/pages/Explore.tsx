
import { useState } from 'react';
import { HeadphonesIcon, BarChart } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import AudiobookCard from "@/components/AudiobookCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";

// Sample data for each category
const audiobooks = [
  {
    id: '1',
    title: 'Dune',
    author: 'Frank Herbert',
    coverImage: 'https://images.unsplash.com/photo-1603284569248-821525309698?q=80&w=1976&auto=format&fit=crop',
    duration: '21h 8m',
    rating: 4.8,
    category: 'Sci-Fi'
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop',
    duration: '5h 35m',
    rating: 4.9,
    category: 'Self-Help'
  },
  {
    id: '3',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    coverImage: 'https://images.unsplash.com/photo-1618666012174-83b441c0bc76?q=80&w=1974&auto=format&fit=crop',
    duration: '11h 5m',
    rating: 4.7,
    category: 'Fantasy'
  },
  {
    id: '4',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    coverImage: 'https://images.unsplash.com/photo-1531901599143-ab65d4a8d748?q=80&w=1944&auto=format&fit=crop',
    duration: '15h 17m',
    rating: 4.6,
    category: 'History'
  },
  {
    id: '5',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop',
    duration: '8h 50m',
    rating: 4.5,
    category: 'Fiction'
  },
  {
    id: '6',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    coverImage: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1740&auto=format&fit=crop',
    duration: '5h 42m',
    rating: 4.7,
    category: 'Finance'
  }
];

const trending = [
  {
    id: '14',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1740&auto=format&fit=crop',
    duration: '20h 2m',
    rating: 4.7,
    category: 'Psychology'
  },
  {
    id: '15',
    title: 'The Joe Rogan Experience',
    author: 'Joe Rogan',
    coverImage: 'https://images.unsplash.com/photo-1581368135153-a506cf13531c?q=80&w=1740&auto=format&fit=crop',
    duration: '3h 8m',
    rating: 4.6,
    category: 'Talk Show'
  }
];

const Explore = () => {
  const [activeTab, setActiveTab] = useState("audiobooks");
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('explore')}</h1>
          <p className="text-foreground/70">{t('popularAudiobooks')}</p>
        </div>
        
        <Tabs defaultValue="audiobooks" onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8 w-full justify-start overflow-x-auto bg-hakim-dark/20 p-1">
            <TabsTrigger value="audiobooks" className="flex items-center gap-2">
              <HeadphonesIcon className="h-4 w-4" />
              <span>{t('audiobooks')}</span>
            </TabsTrigger>
            <TabsTrigger value="trending" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span>{t('trendingNow')}</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="audiobooks" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {audiobooks.map((book, index) => (
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
            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="lg">
                {t('loadMore')}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="trending" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {trending.map((item, index) => (
                <AudiobookCard 
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  author={item.author}
                  coverImage={item.coverImage}
                  duration={item.duration}
                  rating={item.rating}
                  category={item.category}
                  index={index}
                />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="lg">
                {t('loadMore')}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
