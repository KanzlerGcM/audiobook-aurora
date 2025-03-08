
import { useState } from 'react';
import { Clock, Star, Calendar, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

// Sample data for new releases
const newReleases = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1798&auto=format&fit=crop',
    duration: '8h 50m',
    rating: 4.5,
    category: 'Fiction',
    releaseDate: '2023-09-15',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. See what would have happened if you had made different choices.'
  },
  {
    id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    coverImage: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop',
    duration: '5h 35m',
    rating: 4.9,
    category: 'Self-Help',
    releaseDate: '2023-09-10',
    description: 'No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies that will teach you how to form good habits, break bad ones, and master tiny behaviors that lead to remarkable results.'
  },
  {
    id: '3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    coverImage: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1774&auto=format&fit=crop',
    duration: '16h 10m',
    rating: 4.7,
    category: 'Sci-Fi',
    releaseDate: '2023-09-05',
    description: 'Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish. The only problem is, he doesn't remember that. He can't even remember his own name, let alone the nature of his assignment.'
  },
  {
    id: '4',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    coverImage: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1740&auto=format&fit=crop',
    duration: '5h 42m',
    rating: 4.7,
    category: 'Finance',
    releaseDate: '2023-08-28',
    description: 'Doing well with money isn't necessarily about what you know. It's about how you behave. And behavior is hard to teach, even to really smart people. In The Psychology of Money, award-winning author Morgan Housel shares 19 short stories exploring the strange ways people think about money.'
  },
  {
    id: '5',
    title: 'A Court of Thorns and Roses',
    author: 'Sarah J. Maas',
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1740&auto=format&fit=crop',
    duration: '16h 7m',
    rating: 4.6, 
    category: 'Fantasy',
    releaseDate: '2023-08-22',
    description: 'When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she only knows about from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world.'
  }
];

const NewReleases = () => {
  const [selectedBook, setSelectedBook] = useState(newReleases[0]);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 md:px-6 py-16 mt-10">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t('newReleases')}</h1>
          <p className="text-foreground/70">{t('discoverNewBooks')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column with book list */}
          <div className="md:col-span-1">
            <div className="space-y-1">
              {newReleases.map((book, index) => (
                <div key={book.id}>
                  <div 
                    className={`flex items-center p-3 rounded-lg cursor-pointer transition-all hover:bg-hakim-medium/10 ${selectedBook.id === book.id ? 'bg-hakim-medium/10' : ''}`}
                    onClick={() => setSelectedBook(book)}
                  >
                    <img 
                      src={book.coverImage} 
                      alt={book.title} 
                      className="w-16 h-24 object-cover rounded-md" 
                    />
                    <div className="ml-4 flex-1">
                      <h3 className={`font-medium line-clamp-1 ${selectedBook.id === book.id ? 'text-hakim-light' : 'text-foreground'}`}>
                        {book.title}
                      </h3>
                      <p className="text-sm text-foreground/70">
                        {book.author}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 ${selectedBook.id === book.id ? 'text-hakim-light' : 'text-foreground/50'}`} />
                  </div>
                  {index < newReleases.length - 1 && (
                    <Separator className="my-1 bg-hakim-medium/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Right column with book details */}
          <div className="md:col-span-2 bg-hakim-dark/10 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={selectedBook.coverImage} 
                  alt={selectedBook.title} 
                  className="w-40 h-60 object-cover rounded-xl shadow-lg" 
                />
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{selectedBook.title}</h2>
                <p className="text-hakim-light mb-3">{t('by')} {selectedBook.author}</p>
                
                <div className="flex flex-wrap gap-4 my-4">
                  <div className="flex items-center space-x-1 bg-hakim-medium/10 px-3 py-1.5 rounded-full">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span className="text-sm">{selectedBook.rating}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 bg-hakim-medium/10 px-3 py-1.5 rounded-full">
                    <Clock className="w-4 h-4 text-hakim-light" />
                    <span className="text-sm">{selectedBook.duration}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1 bg-hakim-medium/10 px-3 py-1.5 rounded-full">
                    <Calendar className="w-4 h-4 text-hakim-light" />
                    <span className="text-sm">{selectedBook.releaseDate}</span>
                  </div>
                </div>
                
                <p className="text-foreground/80 leading-relaxed my-4">
                  {selectedBook.description}
                </p>
                
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button variant="default" className="gap-2">
                    {t('listen')}
                  </Button>
                  <Button variant="outline" className="gap-2">
                    {t('addToLibrary')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewReleases;
