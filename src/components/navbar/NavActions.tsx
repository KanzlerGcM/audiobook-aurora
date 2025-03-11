
import { Link } from 'react-router-dom';
import { Search, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import TranslateButton from '../TranslateButton';

const NavActions = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="icon" className="text-hakim-gray hover:text-hakim-light">
        <Search className="h-5 w-5" />
      </Button>
      
      <TranslateButton />
      
      <Link to="/login">
        <Button variant="default" size="sm" className="gap-2">
          <LogIn className="h-4 w-4" />
          {t('signIn')}
        </Button>
      </Link>
    </div>
  );
};

export default NavActions;
