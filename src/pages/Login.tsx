
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
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();

  // Fetch books for the carousel
  useEffect(() => {
    const fetchedBooks = getAudiobooks(1, 6);
    setBooks(fetchedBooks);
  }, []);

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
            <h2 className="text-3xl font-bold text-white">
              {t('welcomeBack')}
            </h2>
            <p className="mt-3 text-lg text-hakim-gray mb-10">
              {t('loginDescription')}
            </p>
            
            {/* Audiobook Carousel */}
            {books.length > 0 && currentBook && (
              <div className="mt-6 w-full max-w-md mx-auto">
                <div className="bg-hakim-dark/50 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-white/10 relative overflow-hidden">
                  <div className="flex gap-6 items-center">
                    <div className="flex-shrink-0">
                      <div className="h-48 w-32 overflow-hidden rounded-lg shadow-lg transition-all duration-300 animate-fade-in">
                        <img 
                          src={currentBook.coverImage} 
                          alt={currentBook.title} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
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
                      className={`mx-1 h-2 w-2 rounded-full ${
                        index === currentBookIndex ? "bg-white" : "bg-white/30"
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
