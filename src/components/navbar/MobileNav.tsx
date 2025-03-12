
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  Home, 
  Search, 
  BookOpen, 
  Info, 
  BookMarked, 
  LogOut, 
  ThumbsUp 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import { useAuth } from '@/hooks/use-auth';
import { Input } from '@/components/ui/input';
import { getAudiobooks } from '@/data/books';

interface MobileNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  navLinks?: { name: string; path: string }[];
  onClose?: () => void;
}

// The mobile navigation component implementation
const MobileNav = ({ open, setOpen, navLinks = [], onClose }: MobileNavProps) => {
  const { t } = useLanguage();
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]); 
  
  const handleNavItemClick = (path: string) => {
    setOpen(false);
    if (onClose) onClose();
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    setOpen(false);
    if (onClose) onClose();
    navigate('/');
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    
    const allBooks = getAudiobooks();
    const filtered = allBooks
      .filter(book => 
        book.title.toLowerCase().includes(query.toLowerCase()) || 
        book.author.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5);
      
    setSearchResults(filtered);
  };

  const handleBookClick = (bookId: string) => {
    handleNavItemClick(`/audiobook/${bookId}`);
    setSearchQuery('');
    setSearchResults([]);
  };
  
  return (
    <div
      className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm ${
        open ? 'animate-in fade-in-0' : 'animate-out fade-out-0 pointer-events-none'
      }`}
    >
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-background shadow-lg border-l border-border ${
          open ? 'animate-in slide-in-from-right-full' : 'animate-out slide-out-to-right-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="font-semibold">{t('menu')}</span>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close">
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="p-4 border-b">
            <div className="relative">
              <Input
                value={searchQuery}
                onChange={handleSearch}
                placeholder={t('searchBooks')}
                className="w-full"
              />
              {searchResults.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-background border border-border rounded-md shadow-lg z-50">
                  {searchResults.map((book: any) => (
                    <div 
                      key={book.id}
                      onClick={() => handleBookClick(book.id)}
                      className="flex items-center gap-3 p-2 hover:bg-accent/10 cursor-pointer"
                    >
                      <img 
                        src={book.coverImage} 
                        alt={book.title} 
                        className="h-12 w-8 object-cover rounded"
                      />
                      <div>
                        <p className="text-sm font-medium">{book.title}</p>
                        <p className="text-xs text-muted-foreground">{book.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex-1 overflow-auto py-2">
            <div className="px-4 py-2">
              <div className="space-y-1">
                {/* Main Navigation Items */}
                {navLinks.map((link) => (
                  <Button
                    key={link.path}
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => handleNavItemClick(link.path)}
                  >
                    {link.name === t('explore') && <Search className="mr-2 h-5 w-5" />}
                    {link.name === t('home') && <Home className="mr-2 h-5 w-5" />}
                    {link.name === t('about') && <Info className="mr-2 h-5 w-5" />}
                    {link.name === t('blog') && <BookOpen className="mr-2 h-5 w-5" />}
                    {link.name}
                  </Button>
                ))}
                
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => handleNavItemClick('/explore')}
                >
                  <Search className="mr-2 h-5 w-5" />
                  {t('explore')}
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => handleNavItemClick('/about')}
                >
                  <Info className="mr-2 h-5 w-5" />
                  {t('about')}
                </Button>
              </div>
              
              {isLoggedIn && (
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="text-sm font-medium text-foreground/70 px-2 mb-2">
                    {t('myAccount')}
                  </div>
                  <div className="space-y-1">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => handleNavItemClick('/library')}
                    >
                      <BookMarked className="mr-2 h-5 w-5" />
                      {t('myLibrary')}
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={() => handleNavItemClick('/rated-books')}
                    >
                      <ThumbsUp className="mr-2 h-5 w-5" />
                      {t('ratedBooks')}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Bottom Actions */}
          <div className="p-4 border-t">
            {isLoggedIn ? (
              <Button
                variant="destructive"
                onClick={handleLogout}
                className="w-full"
              >
                <LogOut className="mr-2 h-5 w-5" />
                {t('logout')}
              </Button>
            ) : (
              <div className="flex flex-col gap-2">
                <Button
                  variant="default"
                  onClick={() => handleNavItemClick('/login')}
                  className="w-full"
                >
                  {t('login')}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleNavItemClick('/signup')}
                  className="w-full"
                >
                  {t('signUp')}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
