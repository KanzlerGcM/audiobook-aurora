
import { useState } from 'react';
import { HeadphonesIcon, BarChart, Sparkles } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BookList from "@/components/BookList";
import BookDetails from "@/components/BookDetails";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/context/LanguageContext";
import { Book } from "@/types/book";

// Sample data for each category
const audiobooks: Book[] = [
  {
    id: '1',
    title: 'Dune',
    author: 'Frank Herbert',
    coverImage: 'https://images.unsplash.com/photo-1603284569248-821525309698?q=80&w=1976&auto=format&fit=crop',
    duration: '21h 8m',
    rating: 4.8,
    category: 'Sci-Fi',
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the \"spice\" melange, a drug capable of extending life and enhancing consciousness."
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop',
    duration: '5h 35m',
    rating: 4.9,
    category: 'Self-Help',
    description: "No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies that will teach you how to form good habits, break bad ones, and master tiny behaviors that lead to remarkable results."
  },
  {
    id: '3',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    coverImage: 'https://images.unsplash.com/photo-1618666012174-83b441c0bc76?q=80&w=1974&auto=format&fit=crop',
    duration: '11h 5m',
    rating: 4.7,
    category: 'Fantasy',
    description: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep to whisk him away on an adventure."
  },
  {
    id: '4',
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    coverImage: 'https://images.unsplash.com/photo-1531901599143-ab65d4a8d748?q=80&w=1944&auto=format&fit=crop',
    duration: '15h 17m',
    rating: 4.6,
    category: 'History',
    description: "From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be \"human.\""
  },
  {
    id: '5',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop',
    duration: '8h 50m',
    rating: 4.5,
    category: 'Fiction',
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. See what would have happened if you had made different choices."
  },
  {
    id: '6',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    coverImage: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1740&auto=format&fit=crop',
    duration: '5h 42m',
    rating: 4.7,
    category: 'Finance',
    description: "Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people. In The Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the strange ways people think about money."
  }
];

const newReleases: Book[] = [
  {
    id: '7',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop',
    duration: '8h 50m',
    rating: 4.5,
    category: 'Fiction',
    releaseDate: '2023-09-15',
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. See what would have happened if you had made different choices."
  },
  {
    id: '8',
    title: 'Atomic Habits',
    author: 'James Clear',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop',
    duration: '5h 35m',
    rating: 4.9,
    category: 'Self-Help',
    releaseDate: '2023-09-10',
    description: "No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies that will teach you how to form good habits, break bad ones, and master tiny behaviors that lead to remarkable results."
  },
  {
    id: '9',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    coverImage: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1774&auto=format&fit=crop',
    duration: '16h 10m',
    rating: 4.7,
    category: 'Sci-Fi',
    releaseDate: '2023-09-05',
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish. The only problem is, he doesn't remember that. He can't even remember his own name, let alone the nature of his assignment."
  },
  {
    id: '10',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    coverImage: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1740&auto=format&fit=crop',
    duration: '5h 42m',
    rating: 4.7,
    category: 'Finance',
    releaseDate: '2023-08-28',
    description: "Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people. In The Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the strange ways people think about money."
  }
];

const trending: Book[] = [
  {
    id: '14',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1740&auto=format&fit=crop',
    duration: '20h 2m',
    rating: 4.7,
    category: 'Psychology',
    description: "In the international bestseller, Thinking, Fast and Slow, Daniel Kahneman, the renowned psychologist and winner of the Nobel Prize in Economics, takes us on a groundbreaking tour of the mind and explains the two systems that drive the way we think."
  },
  {
    id: '15',
    title: 'The Joe Rogan Experience',
    author: 'Joe Rogan',
    coverImage: 'https://images.unsplash.com/photo-1581368135153-a506cf13531c?q=80&w=1740&auto=format&fit=crop',
    duration: '3h 8m',
    rating: 4.6,
    category: 'Talk Show',
    description: "The Joe Rogan Experience podcast is a long form conversation hosted by comedian Joe Rogan with friends and guests that have included comedians, actors, musicians, MMA fighters, authors, artists, and beyond."
  }
];

const Explore = () => {
  const [activeTab, setActiveTab] = useState("audiobooks");
  const { t } = useLanguage();
  
  // State to track the selected book in each category
  const [selectedAudiobook, setSelectedAudiobook] = useState(audiobooks[0]);
  const [selectedNewRelease, setSelectedNewRelease] = useState(newReleases[0]);
  const [selectedTrending, setSelectedTrending] = useState(trending[0]);

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
            <TabsTrigger value="new-releases" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span>{t('newReleases')}</span>
            </TabsTrigger>
            <TabsTrigger value="trending" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              <span>{t('trendingNow')}</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="audiobooks" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <BookList 
                  books={audiobooks} 
                  selectedBook={selectedAudiobook} 
                  onSelectBook={setSelectedAudiobook} 
                />
              </div>
              <BookDetails book={selectedAudiobook} />
            </div>
          </TabsContent>

          <TabsContent value="new-releases" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <BookList 
                  books={newReleases} 
                  selectedBook={selectedNewRelease} 
                  onSelectBook={setSelectedNewRelease} 
                />
              </div>
              <BookDetails book={selectedNewRelease} />
            </div>
          </TabsContent>
          
          <TabsContent value="trending" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <BookList 
                  books={trending} 
                  selectedBook={selectedTrending} 
                  onSelectBook={setSelectedTrending} 
                />
              </div>
              <BookDetails book={selectedTrending} />
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
