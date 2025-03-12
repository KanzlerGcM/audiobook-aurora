
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { Book } from "@/types/book";
import { useWelcomeMessage } from "@/hooks/use-welcome-message";

interface LoginCarouselProps {
  books: Book[];
}

const LoginCarousel = ({ books }: LoginCarouselProps) => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const { t, language } = useLanguage();
  const welcomeMessage = useWelcomeMessage();

  // Auto switching books in carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBookIndex(prevIndex => (prevIndex + 1) % books.length);
    }, 5000); // Switch books every 5 seconds
    
    return () => clearInterval(interval);
  }, [books.length]);

  const nextBook = () => {
    setCurrentBookIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const prevBook = () => {
    setCurrentBookIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length);
  };

  const currentBook = books[currentBookIndex];

  // Function to get login description based on language
  const getLoginDescription = () => {
    if (language === 'en') {
      return "Dive into thousands of audiobooks from bestselling authors and emerging talents. Pick up where you left off on any device.";
    } else if (language === 'es') {
      return "Sumérgete en miles de audiolibros de autores superventas y talentos emergentes. Continúa donde lo dejaste en cualquier dispositivo.";
    } else if (language === 'fr') {
      return "Plongez dans des milliers de livres audio d'auteurs à succès et de talents émergents. Reprenez où vous vous êtes arrêté sur n'importe quel appareil.";
    } else if (language === 'de') {
      return "Tauchen Sie ein in Tausende von Hörbüchern von Bestsellerautoren und aufstrebenden Talenten. Machen Sie auf jedem Gerät dort weiter, wo Sie aufgehört haben.";
    } else {
      return "Mergulhe em milhares de audiolivros de autores best-sellers e talentos emergentes. Continue de onde parou em qualquer dispositivo.";
    }
  };

  // Get background colors based on book categories
  const getCategoryColor = (category?: string) => {
    switch (category?.toLowerCase()) {
      case 'fiction':
        return 'from-blue-500/30 to-indigo-500/30';
      case 'mystery':
      case 'mysterythriller':
        return 'from-purple-500/30 to-pink-500/30';
      case 'romance':
        return 'from-pink-500/30 to-red-400/30';
      case 'scifi':
        return 'from-teal-500/30 to-emerald-400/30';
      case 'fantasy':
        return 'from-amber-500/30 to-orange-400/30';
      case 'biography':
        return 'from-green-500/30 to-teal-400/30';
      case 'history':
        return 'from-gray-500/30 to-slate-400/30';
      case 'selfhelp':
        return 'from-yellow-400/30 to-amber-300/30';
      case 'business':
        return 'from-blue-600/30 to-sky-400/30';
      case 'cookbooks':
        return 'from-orange-400/30 to-amber-300/30';
      case 'horror':
        return 'from-red-800/30 to-red-600/30';
      case 'nonfiction':
        return 'from-indigo-400/30 to-violet-300/30';
      case 'technology':
        return 'from-cyan-500/30 to-blue-400/30';
      default:
        return 'from-hakim-gray/30 to-hakim-medium/30';
    }
  };

  return (
    <div className="relative hidden h-full flex-col p-8 text-muted-foreground antialiased lg:flex">
      {/* Main background - no blur, normal website color */}
      <div className="absolute inset-0 bg-hakim-dark/90 z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-hakim-darkest/80 to-hakim-dark/60 z-0" />
      
      {/* Dynamic colored blurred circles on the left side only */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br ${getCategoryColor(currentBook?.category)} blur-3xl -z-10 transition-colors duration-700`}></div>
      <div className={`absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-gradient-to-tr ${getCategoryColor(currentBook?.category)} blur-3xl -z-10 transition-colors duration-700`}></div>
      <div className={`absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-gradient-to-bl ${getCategoryColor(currentBook?.category)} blur-3xl -z-10 transition-colors duration-700`}></div>
      
      <Link to="/" className="mb-6 font-semibold relative z-10">
        Hakim
      </Link>
      <div className="relative z-10 mt-10">
        <h2 className="text-3xl font-bold text-white mb-1">
          {welcomeMessage} <span className="text-hakim-light">{t('welcomeBack')}</span>
        </h2>
        <p className="mt-3 text-lg text-hakim-gray mb-10">
          {getLoginDescription()}
        </p>
        
        {/* Audiobook Carousel with Animation */}
        {books.length > 0 && currentBook && (
          <div className="mt-6 w-full max-w-md mx-auto">
            <div className="bg-hakim-dark p-6 rounded-xl relative overflow-hidden transition-all duration-500">
              {/* Dynamic color background blur circle */}
              <div className={`absolute w-64 h-64 rounded-full bg-gradient-to-br ${getCategoryColor(currentBook.category)} blur-3xl opacity-60 -top-20 -left-20 z-0`}></div>
              <div className={`absolute w-40 h-40 rounded-full bg-gradient-to-tr ${getCategoryColor(currentBook.category)} blur-2xl opacity-50 -bottom-10 -right-10 z-0`}></div>
              
              <div className="flex gap-6 items-center relative z-10">
                <div className="flex-shrink-0 transform transition-all duration-500 hover:scale-105">
                  <div className="h-48 w-32 overflow-hidden rounded-lg shadow-lg relative group">
                    <img 
                      src={currentBook.coverImage} 
                      alt={currentBook.title} 
                      className="h-full w-full object-cover transition-all duration-500 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                      <Link 
                        to={`/audiobook/${currentBook.id}`} 
                        className="text-white text-xs font-medium px-2 py-1 bg-hakim-primary/80 rounded-full"
                      >
                        {t('preview')}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-grow animate-fade-in">
                  <h3 className="text-white font-bold text-xl line-clamp-2 mb-2">{currentBook.title}</h3>
                  <p className="text-hakim-light">{t('by')} {currentBook.author}</p>
                  <div className="mt-3 text-hakim-light">
                    <p>⭐ {currentBook.rating}/5</p>
                    <p className="text-sm mt-1">{currentBook.duration}</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button 
                  onClick={prevBook} 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full bg-black/20 hover:bg-black/40 text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  onClick={nextBook} 
                  variant="ghost" 
                  size="icon" 
                  className="h-8 w-8 rounded-full bg-black/20 hover:bg-black/40 text-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              {books.map((_, index) => (
                <button
                  key={index}
                  className={`mx-1 h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentBookIndex ? "bg-white w-4" : "bg-white/30"
                  }`}
                  onClick={() => setCurrentBookIndex(index)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginCarousel;
