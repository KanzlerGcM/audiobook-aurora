
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/use-language';
import Logo from './Logo';
import DesktopNav from './navbar/DesktopNav';
import NavActions from './navbar/NavActions';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categories } from '@/utils/bookGenerator';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to convert category name to URL path
  const categoryToPath = (category: string) => {
    return category.toLowerCase().replace(/ & /g, '-');
  };

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('explore'), path: '/explore' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div>
            <Logo size={scrolled ? 'md' : 'lg'} />
          </div>

          {/* Desktop Navigation */}
          <DesktopNav 
            navLinks={navLinks}
          />

          {/* Categories Dropdown */}
          <div className="hidden md:flex items-center mx-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center px-3 py-2 text-foreground hover:text-accent transition-colors">
                {t('categories')}
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="center" 
                className="w-56 bg-background/95 backdrop-blur-sm border border-border"
              >
                {categories.slice(0, 8).map((category) => (
                  <DropdownMenuItem key={category} asChild>
                    <Link 
                      to={`/categories/${categoryToPath(category)}`}
                      className="cursor-pointer"
                    >
                      {category}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link 
                    to="/categories"
                    className="text-accent font-medium cursor-pointer"
                  >
                    {t('viewAll')}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Search, and Account */}
          <NavActions />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
