
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/use-language';
import Logo from './Logo';
import DesktopNav from './navbar/DesktopNav';
import NavActions from './navbar/NavActions';

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

          {/* Search, and Account */}
          <NavActions />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
