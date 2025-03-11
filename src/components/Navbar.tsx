
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Logo from './Logo';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import NavActions from './navbar/NavActions';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
          <div onClick={closeMobileMenu}>
            <Logo size={scrolled ? 'md' : 'lg'} />
          </div>

          {/* Desktop Navigation */}
          <DesktopNav 
            navLinks={navLinks} 
            categories={categories} 
          />

          {/* Search, Site Menu and Account */}
          <NavActions />

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
      <MobileNav 
        isOpen={mobileMenuOpen}
        navLinks={navLinks}
        categories={categories}
        onClose={closeMobileMenu}
      />
    </nav>
  );
};

export default Navbar;
