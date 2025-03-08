
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import TranslateButton from './TranslateButton';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const categories = [
    { name: t('fiction'), path: '/categories/fiction' },
    { name: t('nonFiction'), path: '/categories/non-fiction' },
    { name: t('mysteryThriller'), path: '/categories/mystery-thriller' },
    { name: t('scienceFiction'), path: '/categories/sci-fi' },
    { name: t('fantasy'), path: '/categories/fantasy' },
    { name: t('biography'), path: '/categories/biography' },
    { name: t('history'), path: '/categories/history' },
    { name: t('selfHelp'), path: '/categories/self-help' },
    { name: t('business'), path: '/categories/business' },
    { name: t('cookbooks'), path: '/categories/cookbooks' },
  ];

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('explore'), path: '/explore' },
    { name: t('newReleases'), path: '/new-releases' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div onClick={closeMobileMenu}>
            <Logo size={scrolled ? 'sm' : 'md'} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm transition-smooth hover:text-hakim-light ${
                  location.pathname === link.path 
                    ? 'text-hakim-light font-medium' 
                    : 'text-hakim-gray'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Categories Dropdown - Show on Hover */}
            <div 
              className="relative"
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm text-hakim-gray hover:text-hakim-light transition-smooth">
                <span>{t('categories')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {categoriesOpen && (
                <div className="absolute left-0 top-full mt-1 w-56 bg-hakim-darkest border border-hakim-medium/20 rounded-md shadow-lg z-50 animate-fade-in py-1">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      className="block px-4 py-2 text-hakim-light hover:bg-hakim-dark text-sm"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Search and Account */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-hakim-gray hover:text-hakim-light">
              <Search className="h-5 w-5" />
            </Button>
            <TranslateButton />
            <Button variant="ghost" size="icon" className="text-hakim-gray hover:text-hakim-light">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="default" className="bg-hakim-medium hover:bg-hakim-gray text-white">
              {t('signIn')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-hakim-gray hover:text-hakim-light"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass animate-slide-up border-t border-hakim-medium/10 shadow-sm">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 transition-smooth ${
                  location.pathname === link.path 
                    ? 'text-hakim-light font-medium' 
                    : 'text-hakim-gray'
                }`}
                onClick={closeMobileMenu}
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
                    onClick={closeMobileMenu}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4 pt-2">
              <Button variant="ghost" size="icon" className="text-hakim-gray">
                <Search className="h-5 w-5" />
              </Button>
              <TranslateButton />
              <Button variant="ghost" size="icon" className="text-hakim-gray">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="default" className="bg-hakim-medium hover:bg-hakim-gray text-white w-full">
                {t('signIn')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
