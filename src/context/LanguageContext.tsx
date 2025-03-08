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
  
  // Explore Page
  'audiobooks': { en: 'Audiobooks', pt: 'Audiolivros' },
  'loadMore': { en: 'Load More', pt: 'Carregar Mais' },
  
  // Book Details Page
  'addToLibrary': { en: 'Add to Library', pt: 'Adicionar à Biblioteca' },
  'shareBook': { en: 'Share Book', pt: 'Compartilhar Livro' },
  'narrator': { en: 'Narrator', pt: 'Narrador' },
  'duration': { en: 'Duration', pt: 'Duração' },
  'released': { en: 'Released', pt: 'Lançado em' },
  'publisher': { en: 'Publisher', pt: 'Editora' },
  'language': { en: 'Language', pt: 'Idioma' },
  'genre': { en: 'Genre', pt: 'Gênero' },
  'chapters': { en: 'Chapters', pt: 'Capítulos' },
  'description': { en: 'Description', pt: 'Descrição' },
  'allChapters': { en: 'All Chapters', pt: 'Todos os Capítulos' },
  'expand': { en: 'Expand All', pt: 'Expandir Todos' },
  'collapse': { en: 'Collapse', pt: 'Recolher' },
  'freePreview': { en: 'Free Preview', pt: 'Amostra Grátis' },
  'showAllChapters': { en: 'Show All Chapters', pt: 'Mostrar Todos os Capítulos' },
  'youMightAlsoLike': { en: 'You Might Also Like', pt: 'Você Também Pode Gostar' },
  'similarAudiobooks': { en: 'Similar audiobooks you\'ll enjoy', pt: 'Audiolivros semelhantes que você vai gostar' },
  'writeReview': { en: 'Write a Review', pt: 'Escrever uma Avaliação' },
  'outOf5': { en: 'out of 5', pt: 'de 5' },
  'monthsAgo': { en: 'months ago', pt: 'meses atrás' },
  'loadMoreReviews': { en: 'Load More Reviews', pt: 'Carregar Mais Avaliações' },
  'by': { en: 'by', pt: 'por' },
  'chapter': { en: 'Chapter', pt: 'Capítulo' },
  'selectChapter': { en: 'Select a chapter to start listening', pt: 'Selecione um capítulo para começar a ouvir' },
  
  // Audio Player
  'play': { en: 'Play', pt: 'Reproduzir' },
  'pause': { en: 'Pause', pt: 'Pausar' },
  
  // Genres (for book cards)
  'sci-fi': { en: 'Sci-Fi', pt: 'Ficção Científica' },
  'thriller': { en: 'Thriller', pt: 'Suspense' },
  'romance': { en: 'Romance', pt: 'Romance' },
  'horror': { en: 'Horror', pt: 'Terror' },
  'adventure': { en: 'Adventure', pt: 'Aventura' },
  'memoir': { en: 'Memoir', pt: 'Memórias' },
  'english': { en: 'English', pt: 'Inglês' },
  'portuguese': { en: 'Portuguese', pt: 'Português' },
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
