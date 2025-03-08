
import React from 'react';
import { Link } from 'react-router-dom';
import { Info, Mail, BookOpen } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from './ui/button';

const SitePopupMenu = () => {
  const { t } = useLanguage();
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-hakim-gray hover:text-hakim-light">
          {t('company')}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className="bg-hakim-darkest border border-hakim-medium/20 rounded-md shadow-lg z-50 animate-fade-in py-1 w-48"
      >
        <DropdownMenuItem asChild>
          <Link
            to="/about"
            className="flex items-center gap-2 px-4 py-2 text-hakim-light hover:bg-hakim-dark text-sm"
          >
            <Info className="h-4 w-4" />
            <span>{t('aboutUs')}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            to="/contact"
            className="flex items-center gap-2 px-4 py-2 text-hakim-light hover:bg-hakim-dark text-sm"
          >
            <Mail className="h-4 w-4" />
            <span>{t('contact')}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            to="/blog"
            className="flex items-center gap-2 px-4 py-2 text-hakim-light hover:bg-hakim-dark text-sm"
          >
            <BookOpen className="h-4 w-4" />
            <span>{t('blog')}</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SitePopupMenu;
