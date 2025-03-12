
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  User, 
  LogOut, 
  BookMarked, 
  Search,
  ThumbsUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useLanguage } from '@/hooks/use-language';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/hooks/use-auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const NavActions = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showCategories, setShowCategories] = useState(false);
  
  const renderToast = () => {
    toast("Soon...", {
      description: "This feature is under development.",
    });
  };

  const loginClickHandler = () => {
    navigate('/login');
  };

  const signupClickHandler = () => {
    navigate('/signup');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (isMobile) {
    return null;
  }

  // User is not logged in
  if (!isLoggedIn) {
    return (
      <div className="flex items-center gap-3">
        <Button variant="default" onClick={loginClickHandler}>
          {t('login')}
        </Button>
        <Button variant="outline" onClick={signupClickHandler}>
          {t('signUp')}
        </Button>
      </div>
    );
  }

  // User is logged in
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-accent/10 text-accent">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>{t('myAccount')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => navigate('/library')}>
          <BookMarked className="mr-2 h-4 w-4" />
          <span>{t('myLibrary')}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate('/rated-books')}>
          <ThumbsUp className="mr-2 h-4 w-4" />
          <span>{t('ratedBooks')}</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => navigate('/explore')}>
          <Search className="mr-2 h-4 w-4" />
          <span>{t('exploreBooks')}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>{t('logout')}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavActions;
