
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import TranslateButton from '../TranslateButton';
import SitePopupMenu from '../SitePopupMenu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const NavActions = () => {
  const { t } = useLanguage();
  
  return (
    <div className="hidden md:flex items-center space-x-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" className="text-hakim-gray hover:text-hakim-light">
              <Search className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t('search')}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TranslateButton />
      <SitePopupMenu />
      <Link to="/login">
        <Button variant="outline" size="sm" className="text-hakim-light">
          {t('signIn')}
        </Button>
      </Link>
      <Link to="/signup">
        <Button variant="default" size="sm" className="bg-hakim-medium hover:bg-hakim-gray text-white">
          {t('signUp')}
        </Button>
      </Link>
    </div>
  );
};

export default NavActions;
