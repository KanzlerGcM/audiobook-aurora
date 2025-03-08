
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Info, Mail, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import TranslateButton from '../TranslateButton';
import AboutDialog from '../dialogs/AboutDialog';
import ContactDialog from '../dialogs/ContactDialog';
import BlogDialog from '../dialogs/BlogDialog';

interface MobileNavProps {
  isOpen: boolean;
  navLinks: { name: string; path: string }[];
  categories: { name: string; path: string }[];
  onClose: () => void;
}

const MobileNav = ({ isOpen, navLinks, categories, onClose }: MobileNavProps) => {
  const { t } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState({
    about: false,
    contact: false,
    blog: false
  });
  
  const openDialog = (dialog: 'about' | 'contact' | 'blog') => {
    setDialogOpen({ ...dialogOpen, [dialog]: true });
  };
  
  if (!isOpen) return null;
  
  return (
    <>
      <div className="md:hidden absolute top-full left-0 right-0 glass animate-slide-up border-t border-hakim-medium/10 shadow-sm">
        <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`py-2 transition-smooth text-hakim-gray hover:text-hakim-light`}
              onClick={onClose}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Categories in Mobile Menu */}
          <div className="py-2">
            <div className="text-hakim-light font-medium mb-2">{t('categories')}</div>
            <div className="grid grid-cols-2 gap-2 pl-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.path}
                  className="text-hakim-gray text-sm py-1 hover:text-hakim-light"
                  onClick={onClose}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* About Us, Contact, Blog in Mobile Menu */}
          <div className="py-2">
            <div className="text-hakim-light font-medium mb-2">{t('company')}</div>
            <div className="grid grid-cols-1 gap-2 pl-2">
              <button
                className="flex items-center gap-2 text-hakim-gray text-sm py-1 hover:text-hakim-light text-left"
                onClick={() => openDialog('about')}
              >
                <Info className="h-4 w-4" />
                <span>{t('aboutUs')}</span>
              </button>
              <button
                className="flex items-center gap-2 text-hakim-gray text-sm py-1 hover:text-hakim-light text-left"
                onClick={() => openDialog('contact')}
              >
                <Mail className="h-4 w-4" />
                <span>{t('contact')}</span>
              </button>
              <button
                className="flex items-center gap-2 text-hakim-gray text-sm py-1 hover:text-hakim-light text-left"
                onClick={() => openDialog('blog')}
              >
                <BookOpen className="h-4 w-4" />
                <span>{t('blog')}</span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-3 pt-2">
            <Button variant="ghost" size="icon" className="text-hakim-gray">
              <Search className="h-5 w-5" />
            </Button>
            <TranslateButton />
            <div className="grid grid-cols-2 gap-2 flex-1">
              <Link to="/login" className="w-full" onClick={onClose}>
                <Button variant="outline" className="w-full">
                  {t('signIn')}
                </Button>
              </Link>
              <Link to="/signup" className="w-full" onClick={onClose}>
                <Button variant="default" className="w-full">
                  {t('signUp')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <AboutDialog 
        open={dialogOpen.about} 
        onOpenChange={(open) => setDialogOpen(prev => ({ ...prev, about: open }))} 
      />
      <ContactDialog 
        open={dialogOpen.contact} 
        onOpenChange={(open) => setDialogOpen(prev => ({ ...prev, contact: open }))} 
      />
      <BlogDialog 
        open={dialogOpen.blog} 
        onOpenChange={(open) => setDialogOpen(prev => ({ ...prev, blog: open }))} 
      />
    </>
  );
};

export default MobileNav;
