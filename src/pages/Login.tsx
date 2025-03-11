
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";
import { getAudiobooks } from "@/data/books";
import { Book } from "@/types/book";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t, language } = useLanguage();

  // Welcome messages based on time of day and language
  useEffect(() => {
    const hour = new Date().getHours();
    let greeting = "";
    
    if (hour >= 5 && hour < 12) {
      greeting = language === 'en' ? 'Good morning!' : 
                language === 'es' ? '¡Buenos días!' : 
                language === 'fr' ? 'Bonjour!' : 
                language === 'de' ? 'Guten Morgen!' : 'Bom dia!';
    } else if (hour >= 12 && hour < 18) {
      greeting = language === 'en' ? 'Good afternoon!' : 
                language === 'es' ? '¡Buenas tardes!' : 
                language === 'fr' ? 'Bon après-midi!' : 
                language === 'de' ? 'Guten Tag!' : 'Boa tarde!';
    } else {
      greeting = language === 'en' ? 'Good evening!' : 
                language === 'es' ? '¡Buenas noches!' : 
                language === 'fr' ? 'Bonsoir!' : 
                language === 'de' ? 'Guten Abend!' : 'Boa noite!';
    }
    
    setWelcomeMessage(greeting);
  }, [language]);

  // Fetch books for the carousel
  useEffect(() => {
    const fetchedBooks = getAudiobooks(1, 6);
    setBooks(fetchedBooks);
  }, []);

  // Auto switching books in carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBookIndex(prevIndex => (prevIndex + 1) % books.length);
    }, 5000); // Switch books every 5 seconds
    
    return () => clearInterval(interval);
  }, [books.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast({
        title: "Login successful!",
        description: "You are now logged in.",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login failed.",
        description: error.message || "Invalid credentials.",
      });
    }
  };

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

  return (
    <>
      <Navbar />
      <div className="container relative h-[calc(100vh-5rem)] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col p-8 text-muted-foreground antialiased lg:flex">
          <div className="absolute inset-0 bg-hakim-dark/30 z-0 rounded-r-full" />
          <Link to="/" className="mb-6 font-semibold">
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
                <div className="bg-hakim-dark/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 relative overflow-hidden transition-all duration-500">
                  <div className="flex gap-6 items-center">
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
                      <Link to={`/audiobook/${currentBook.id}`} className="mt-4 text-hakim-light hover:text-white text-sm underline underline-offset-4 block">
                        {t('exploreMore')}
                      </Link>
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
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold">{t('signIn')}</h1>
              <p className="text-sm text-muted-foreground">
                {t('enterCredentials')}
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t('password')}</Label>
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button className="w-full" type="submit">
                <Lock className="mr-2 h-4 w-4" />
                {t('signIn')}
              </Button>
            </form>
            <p className="px-8 text-center text-sm text-muted-foreground">
              {t('notAMember')}
              <Link
                to="/signup"
                className="hover:text-hakim-light ml-1 underline underline-offset-4"
              >
                {t('signUp')}
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
