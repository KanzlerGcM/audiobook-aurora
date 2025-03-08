
import { useState } from 'react';
import { HeadphonesIcon, BookIcon, MusicIcon, PodcastIcon, BarChart } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import AudiobookCard from "@/components/AudiobookCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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

const podcasts = [
  {
    id: '7',
    title: 'The Daily',
    author: 'The New York Times',
    coverImage: 'https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=1740&auto=format&fit=crop',
    duration: '25m',
    rating: 4.6,
    category: 'News'
  },
  {
    id: '8',
    title: 'Hardcore History',
    author: 'Dan Carlin',
    coverImage: 'https://images.unsplash.com/photo-1517137661235-4a3083471224?q=80&w=1748&auto=format&fit=crop',
    duration: '3h 15m',
    rating: 4.9,
    category: 'History'
  },
  {
    id: '9',
    title: 'Freakonomics Radio',
    author: 'Stephen Dubner',
    coverImage: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1740&auto=format&fit=crop',
    duration: '48m',
    rating: 4.7,
    category: 'Economics'
  }
];

const musicAlbums = [
  {
    id: '10',
    title: 'Nevermind',
    author: 'Nirvana',
    coverImage: 'https://images.unsplash.com/photo-1460036521480-ff49c08c2781?q=80&w=1744&auto=format&fit=crop',
    duration: '49m 23s',
    rating: 4.9,
    category: 'Rock'
  },
  {
    id: '11',
    title: 'To Pimp a Butterfly',
    author: 'Kendrick Lamar',
    coverImage: 'https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1740&auto=format&fit=crop',
    duration: '1h 19m',
    rating: 4.8,
    category: 'Hip Hop'
  }
];

const soundEffects = [
  {
    id: '12',
    title: 'Ambient Nature',
    author: 'Sound Library',
    coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1748&auto=format&fit=crop',
    duration: '2h 30m',
    rating: 4.5,
    category: 'Nature'
  },
  {
    id: '13',
    title: 'Urban Soundscape',
    author: 'City Sounds',
    coverImage: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1740&auto=format&fit=crop',
    duration: '1h 45m',
    rating: 4.3,
    category: 'Urban'
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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Explore</h1>
          <p className="text-foreground/70">Discover new content across different categories</p>
        </div>
        
        <Tabs defaultValue="audiobooks" onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8 w-full justify-start overflow-x-auto bg-hakim-dark/20 p-1">
            <TabsTrigger value="audiobooks" className="flex items-center gap-2">
              <HeadphonesIcon className="h-4 w-4" />
              <span>Audiobooks</span>
            </TabsTrigger>
            <TabsTrigger value="podcasts" className="flex items-center gap-2">
              <PodcastIcon className="h-4 w-4" />
              <span>Podcasts</span>
            </TabsTrigger>
            <TabsTrigger value="music" className="flex items-center gap-2">
              <MusicIcon className="h-4 w-4" />
              <span>Music</span>
            </TabsTrigger>
            <TabsTrigger value="sounds" className="flex items-center gap-2">
              <BookIcon className="h-4 w-4" />
              <span>Sound Effects</span>
            </TabsTrigger>
            <TabsTrigger value="trending" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span>Trending</span>
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
                Load More
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="podcasts" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {podcasts.map((podcast, index) => (
                <AudiobookCard 
                  key={podcast.id}
                  id={podcast.id}
                  title={podcast.title}
                  author={podcast.author}
                  coverImage={podcast.coverImage}
                  duration={podcast.duration}
                  rating={podcast.rating}
                  category={podcast.category}
                  index={index}
                />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="lg">
                Load More
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="music" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {musicAlbums.map((album, index) => (
                <AudiobookCard 
                  key={album.id}
                  id={album.id}
                  title={album.title}
                  author={album.author}
                  coverImage={album.coverImage}
                  duration={album.duration}
                  rating={album.rating}
                  category={album.category}
                  index={index}
                />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="lg">
                Load More
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="sounds" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
              {soundEffects.map((sound, index) => (
                <AudiobookCard 
                  key={sound.id}
                  id={sound.id}
                  title={sound.title}
                  author={sound.author}
                  coverImage={sound.coverImage}
                  duration={sound.duration}
                  rating={sound.rating}
                  category={sound.category}
                  index={index}
                />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Button variant="outline" size="lg">
                Load More
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
                Load More
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
