
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
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
      
      <div className="hidden md:flex items-center space-x-2">
        <Link to="/login">
          <Button variant="outline" size="sm">
            {t('signIn')}
          </Button>
        </Link>
        <Link to="/signup">
          <Button variant="default" size="sm">
            {t('signUp')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavActions;
