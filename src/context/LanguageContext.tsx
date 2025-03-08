
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface TranslationMap {
  [key: string]: {
    en: string;
    pt: string;
  };
}

// Add your translations here
export const translations: TranslationMap = {
  // Navbar
  'home': { en: 'Home', pt: 'Início' },
  'explore': { en: 'Explore', pt: 'Explorar' },
  'newReleases': { en: 'New Releases', pt: 'Novos Lançamentos' },
  'categories': { en: 'Categories', pt: 'Categorias' },
  'signIn': { en: 'Sign In', pt: 'Entrar' },
  
  // Categories
  'fiction': { en: 'Fiction', pt: 'Ficção' },
  'nonFiction': { en: 'Non-Fiction', pt: 'Não-Ficção' },
  'mysteryThriller': { en: 'Mystery & Thriller', pt: 'Mistério & Suspense' },
  'scienceFiction': { en: 'Science Fiction', pt: 'Ficção Científica' },
  'fantasy': { en: 'Fantasy', pt: 'Fantasia' },
  'biography': { en: 'Biography', pt: 'Biografia' },
  'history': { en: 'History', pt: 'História' },
  'selfHelp': { en: 'Self-Help', pt: 'Autoajuda' },
  'business': { en: 'Business', pt: 'Negócios' },
  'cookbooks': { en: 'Cookbooks', pt: 'Livros de Culinária' },
  
  // Hero Section
  'featuredAudiobook': { en: 'Featured Audiobook', pt: 'Audiolivro em Destaque' },
  'listenNow': { en: 'Listen Now', pt: 'Ouvir Agora' },
  'viewDetails': { en: 'View Details', pt: 'Ver Detalhes' },
  'reviews': { en: 'reviews', pt: 'avaliações' },
  'hours': { en: 'hours', pt: 'horas' },
  'minutes': { en: 'minutes', pt: 'minutos' },
  
  // Trending Section
  'trendingNow': { en: 'Trending Now', pt: 'Em Alta' },
  'popularAudiobooks': { en: 'Popular audiobooks this week', pt: 'Audiolivros populares desta semana' },
  'viewAll': { en: 'View All', pt: 'Ver Todos' },
  
  // Footer
  'aboutUs': { en: 'About Us', pt: 'Sobre Nós' },
  'careers': { en: 'Careers', pt: 'Carreiras' },
  'contact': { en: 'Contact', pt: 'Contato' },
  'blog': { en: 'Blog', pt: 'Blog' },
  'faq': { en: 'FAQ', pt: 'Perguntas Frequentes' },
  'termsOfService': { en: 'Terms of Service', pt: 'Termos de Serviço' },
  'privacyPolicy': { en: 'Privacy Policy', pt: 'Política de Privacidade' },
  'support': { en: 'Support', pt: 'Suporte' },
  'allRightsReserved': { en: 'All rights reserved', pt: 'Todos os direitos reservados' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Get initial language from localStorage or default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'en';
  });

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
