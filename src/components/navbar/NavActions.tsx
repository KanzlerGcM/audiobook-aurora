
import { Link } from 'react-router-dom';
import { Search, LogIn, User, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import TranslateButton from '../TranslateButton';
import { useAuth } from '@/hooks/use-auth';

const NavActions = () => {
  const { t } = useLanguage();
  const { isLoggedIn, userData, logout } = useAuth();
  
  return (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="icon" className="text-hakim-gray hover:text-hakim-light">
        <Search className="h-5 w-5" />
      </Button>
      
      {isLoggedIn && (
        <Link to="/library">
          <Button variant="ghost" size="icon" className="text-hakim-gray hover:text-hakim-light" aria-label="Library">
            <BookOpen className="h-5 w-5" />
          </Button>
        </Link>
      )}
      
      <TranslateButton />
      
      {isLoggedIn ? (
        <div className="flex items-center gap-2">
          <span className="text-sm hidden md:inline-block">{userData?.name || 'User'}</span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={logout}
            className="gap-2"
          >
            <User className="h-4 w-4" />
            {t('signOut')}
          </Button>
        </div>
      ) : (
        <Link to="/login">
          <Button variant="default" size="sm" className="gap-2">
            <LogIn className="h-4 w-4" />
            {t('signIn')}
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NavActions;
