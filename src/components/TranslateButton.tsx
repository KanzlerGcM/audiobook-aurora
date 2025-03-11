
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/use-language';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { cn } from '@/lib/utils';

const TranslateButton = () => {
  const { language, setLanguage, isTranslating } = useLanguage();
  
  const handleLanguageChange = (newLanguage: 'en' | 'pt' | 'es') => {
    setLanguage(newLanguage);
    const languageNames = {
      en: 'English',
      pt: 'Portuguese',
      es: 'Spanish'
    };
    toast(`Language changed to ${languageNames[newLanguage]}`);
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn(
            "text-hakim-gray hover:text-hakim-light relative",
            isTranslating && "animate-pulse"
          )}
        >
          <Globe className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 text-xs font-bold bg-hakim-medium text-white w-4 h-4 flex items-center justify-center rounded-full">
            {language.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-hakim-darkest border border-hakim-medium/20">
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('en')}
          className={`${language === 'en' ? 'bg-hakim-medium/30' : ''} text-hakim-light hover:bg-hakim-dark`}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('pt')}
          className={`${language === 'pt' ? 'bg-hakim-medium/30' : ''} text-hakim-light hover:bg-hakim-dark`}
        >
          Português
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('es')}
          className={`${language === 'es' ? 'bg-hakim-medium/30' : ''} text-hakim-light hover:bg-hakim-dark`}
        >
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TranslateButton;
