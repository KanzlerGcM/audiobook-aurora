import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translateWithDeepL } from '@/utils/deeplTranslator';
import { toast } from 'sonner';

type Language = 'en' | 'pt' | 'es';

interface TranslationMap {
  [key: string]: {
    en: string;
    pt: string;
    es: string;
  };
}

// Add your translations here
export const translations: TranslationMap = {
  // Navbar
  'home': { en: 'Home', pt: 'Início', es: 'Inicio' },
  'explore': { en: 'Explore', pt: 'Explorar', es: 'Explorar' },
  'newReleases': { en: 'New Releases', pt: 'Novos Lançamentos', es: 'Nuevos Lanzamientos' },
  'categories': { en: 'Categories', pt: 'Categorias', es: 'Categorías' },
  'signIn': { en: 'Sign In', pt: 'Entrar', es: 'Iniciar sesión' },
  'signUp': { en: 'Sign Up', pt: 'Cadastrar', es: 'Registrarse' },
  'search': { en: 'Search', pt: 'Buscar', es: 'Buscar' },
  
  // Categories
  'fiction': { en: 'Fiction', pt: 'Ficção', es: 'Ficción' },
  'nonFiction': { en: 'Non-Fiction', pt: 'Não-Ficção', es: 'No Ficción' },
  'mysteryThriller': { en: 'Mystery & Thriller', pt: 'Mistério & Suspense', es: 'Misterio y Suspenso' },
  'scienceFiction': { en: 'Science Fiction', pt: 'Ficção Científica', es: 'Ciencia Ficción' },
  'fantasy': { en: 'Fantasy', pt: 'Fantasia', es: 'Fantasía' },
  'biography': { en: 'Biography', pt: 'Biografia', es: 'Biografía' },
  'history': { en: 'History', pt: 'História', es: 'Historia' },
  'selfHelp': { en: 'Self-Help', pt: 'Autoajuda', es: 'Autoayuda' },
  'business': { en: 'Business', pt: 'Negócios', es: 'Negocios' },
  'cookbooks': { en: 'Cookbooks', pt: 'Livros de Culinária', es: 'Libros de Cocina' },
  
  // Hero Section
  'featuredAudiobook': { en: 'Featured Audiobook', pt: 'Audiolivro em Destaque', es: 'Audiolibro Destacado' },
  'listenNow': { en: 'Listen Now', pt: 'Ouvir Agora', es: 'Escuchar Ahora' },
  'viewDetails': { en: 'View Details', pt: 'Ver Detalhes', es: 'Ver Detalles' },
  'reviews': { en: 'reviews', pt: 'avaliações', es: 'reseñas' },
  'hours': { en: 'hours', pt: 'horas', es: 'horas' },
  'minutes': { en: 'minutes', pt: 'minutos', es: 'minutos' },
  
  // Trending Section
  'trendingNow': { en: 'Trending Now', pt: 'Em Alta', es: 'Tendencias' },
  'popularAudiobooks': { en: 'Popular audiobooks this week', pt: 'Audiolivros populares desta semana', es: 'Audiolibros populares esta semana' },
  'viewAll': { en: 'View All', pt: 'Ver Todos', es: 'Ver Todos' },
  
  // Footer
  'aboutUs': { en: 'About Us', pt: 'Sobre Nós', es: 'Sobre Nosotros' },
  'careers': { en: 'Careers', pt: 'Carreiras', es: 'Carreras' },
  'contact': { en: 'Contact', pt: 'Contato', es: 'Contacto' },
  'blog': { en: 'Blog', pt: 'Blog', es: 'Blog' },
  'faq': { en: 'FAQ', pt: 'Perguntas Frequentes', es: 'Preguntas Frecuentes' },
  'termsOfService': { en: 'Terms of Service', pt: 'Termos de Serviço', es: 'Términos de Servicio' },
  'privacyPolicy': { en: 'Privacy Policy', pt: 'Política de Privacidade', es: 'Política de Privacidad' },
  'support': { en: 'Support', pt: 'Suporte', es: 'Soporte' },
  'allRightsReserved': { en: 'All rights reserved', pt: 'Todos os direitos reservados', es: 'Todos los derechos reservados' },
  
  // Explore Page
  'audiobooks': { en: 'Audiobooks', pt: 'Audiolivros', es: 'Audiolibros' },
  'loadMore': { en: 'Load More', pt: 'Carregar Mais', es: 'Cargar Más' },
  
  // Book Details Page
  'addToLibrary': { en: 'Add to Library', pt: 'Adicionar à Biblioteca', es: 'Añadir a la Biblioteca' },
  'shareBook': { en: 'Share Book', pt: 'Compartilhar Livro', es: 'Compartir Libro' },
  'narrator': { en: 'Narrator', pt: 'Narrador', es: 'Narrador' },
  'duration': { en: 'Duration', pt: 'Duração', es: 'Duración' },
  'released': { en: 'Released', pt: 'Lançado em', es: 'Lanzado en' },
  'publisher': { en: 'Publisher', pt: 'Editora', es: 'Editorial' },
  'language': { en: 'Language', pt: 'Idioma', es: 'Idioma' },
  'genre': { en: 'Genre', pt: 'Gênero', es: 'Género' },
  'chapters': { en: 'Chapters', pt: 'Capítulos', es: 'Capítulos' },
  'description': { en: 'Description', pt: 'Descrição', es: 'Descripción' },
  'allChapters': { en: 'All Chapters', pt: 'Todos os Capítulos', es: 'Todos los Capítulos' },
  'expand': { en: 'Expand All', pt: 'Expandir Todos', es: 'Expandir Todos' },
  'collapse': { en: 'Collapse', pt: 'Recolher', es: 'Colapsar' },
  'freePreview': { en: 'Free Preview', pt: 'Amostra Grátis', es: 'Vista Previa Gratuita' },
  'showAllChapters': { en: 'Show All Chapters', pt: 'Mostrar Todos os Capítulos', es: 'Mostrar Todos los Capítulos' },
  'youMightAlsoLike': { en: 'You Might Also Like', pt: 'Você Também Pode Gostar', es: 'Te Podría Gustar' },
  'similarAudiobooks': { en: 'Similar audiobooks you\'ll enjoy', pt: 'Audiolivros semelhantes que você vai gostar', es: 'Audiolibros similares que te gustarán' },
  'writeReview': { en: 'Write a Review', pt: 'Escrever uma Avaliação', es: 'Escribir una Reseña' },
  'outOf5': { en: 'out of 5', pt: 'de 5', es: 'de 5' },
  'monthsAgo': { en: 'months ago', pt: 'meses atrás', es: 'meses atrás' },
  'loadMoreReviews': { en: 'Load More Reviews', pt: 'Carregar Mais Avaliações', es: 'Cargar Más Reseñas' },
  'by': { en: 'by', pt: 'por', es: 'por' },
  'chapter': { en: 'Chapter', pt: 'Capítulo', es: 'Capítulo' },
  'selectChapter': { en: 'Select a chapter to start listening', pt: 'Selecione um capítulo para começar a ouvir', es: 'Selecciona un capítulo para comenzar a escuchar' },
  
  // Audio Player
  'play': { en: 'Play', pt: 'Reproduzir', es: 'Reproducir' },
  'pause': { en: 'Pause', pt: 'Pausar', es: 'Pausar' },
  
  // Feature Section on Home Page
  'immerseYourself': { en: 'Immerse Yourself in Stories', pt: 'Mergulhe em Histórias', es: 'Sumérgete en Historias' },
  'hakimBringsStories': { en: 'Hakim brings stories to life with immersive audiobook experiences that transport you to new worlds.', pt: 'Hakim dá vida às histórias com experiências imersivas em audiolivros que o transportam para novos mundos.', es: 'Hakim da vida a las historias con experiencias inmersivas de audiolibros que te transportan a nuevos mundos.' },
  'curatedCollection': { en: 'Curated Collection', pt: 'Coleção Curada', es: 'Colección Curada' },
  'accessThousands': { en: 'Access thousands of premium audiobooks across every genre, curated by experts.', pt: 'Acesse milhares de audiolivros premium em todos os gêneros, curados por especialistas.', es: 'Accede a miles de audiolibros premium en todos los géneros, seleccionados por expertos.' },
  'studioQuality': { en: 'Studio Quality', pt: 'Qualidade de Estúdio', es: 'Calidad de Estudio' },
  'experienceImmersive': { en: 'Experience immersive narration with studio-quality sound and professional voice actors.', pt: 'Experimente narração imersiva com som de qualidade de estúdio e atores de voz profissionais.', es: 'Experimenta narraciones inmersivas con sonido de calidad de estudio y actores de voz profesionales.' },
  'smartBookmarks': { en: 'Smart Bookmarks', pt: 'Marcadores Inteligentes', es: 'Marcadores Inteligentes' },
  'continueExactly': { en: 'Continue exactly where you left off, with cloud syncing across all your devices.', pt: 'Continue exatamente de onde parou, com sincronização na nuvem em todos os seus dispositivos.', es: 'Continúa exactamente donde lo dejaste, con sincronización en la nube en todos tus dispositivos.' },
  'exclusiveTitles': { en: 'Exclusive Titles', pt: 'Títulos Exclusivos', es: 'Títulos Exclusivos' },
  'enjoyExclusive': { en: "Enjoy exclusive audiobooks and original productions you won't find anywhere else.", pt: "Desfrute de audiolivros exclusivos e produções originais que você não encontrará em nenhum outro lugar.", es: "Disfruta de audiolibros exclusivos y producciones originais que no encontrarás en ningún otro lugar." },
  
  // Subscription Section
  'startYourListening': { en: 'Start Your Listening Journey', pt: 'Comece Sua Jornada de Áudio', es: 'Comienza Tu Viaje de Escucha' },
  'unlockUnlimited': { en: 'Unlock unlimited access to premium audiobooks with a 30-day free trial. Cancel anytime.', pt: 'Desbloqueie acesso ilimitado a audiolivros premium com um teste gratuito de 30 dias. Cancele quando quiser.', es: 'Desbloquea acceso ilimitado a audiolibros premium con una prueba gratuita de 30 días. Cancela cuando quieras.' },
  'monthly': { en: 'Monthly', pt: 'Mensal', es: 'Mensual' },
  'annual': { en: 'Annual', pt: 'Anual', es: 'Anual' },
  'accessToAll': { en: 'Access to all audiobooks', pt: 'Acesso a todos os audiolivros', es: 'Acceso a todos los audiolibros' },
  'oneAudiobookCredit': { en: 'One audiobook credit per month', pt: 'Um crédito de audiolivro por mês', es: 'Un crédito de audiolibro por mes' },
  'offAdditional': { en: '30% off additional purchases', pt: '30% de desconto em compras adicionais', es: '30% de descuento en compras adicionales' },
  'unlimitedListening': { en: 'Unlimited listening to featured titles', pt: 'Audição ilimitada de títulos em destaque', es: 'Escucha ilimitada de títulos destacados' },
  'startFreeTrial': { en: 'Start Free Trial', pt: 'Iniciar Teste Gratuito', es: 'Comenzar Prueba Gratuita' },
  'popularChoice': { en: 'Popular Choice', pt: 'Escolha Popular', es: 'Elección Popular' },
  'saveYearly': { en: 'Save 25% yearly', pt: 'Economize 25% anualmente', es: 'Ahorra 25% anualmente' },
  'audiobook': { en: 'audiobook', pt: 'audiolivro', es: 'audiolibro' },
  
  // Genres (for book cards)
  'sci-fi': { en: 'Sci-Fi', pt: 'Ficção Científica', es: 'Ciencia Ficción' },
  'thriller': { en: 'Thriller', pt: 'Suspense', es: 'Suspense' },
  'romance': { en: 'Romance', pt: 'Romance', es: 'Romance' },
  'horror': { en: 'Horror', pt: 'Terror', es: 'Terror' },
  'adventure': { en: 'Adventure', pt: 'Aventura', es: 'Aventura' },
  'memoir': { en: 'Memoir', pt: 'Memórias', es: 'Memorias' },
  'english': { en: 'English', pt: 'Inglês', es: 'Inglés' },
  'portuguese': { en: 'Portuguese', pt: 'Português', es: 'Portugués' },
  'spanish': { en: 'Spanish', pt: 'Espanhol', es: 'Español' },
  'self-help': { en: 'Self-Help', pt: 'Autoajuda', es: 'Autoayuda' },
  'finance': { en: 'Finance', pt: 'Finanças', es: 'Finanzas' },
  'talk show': { en: 'Talk Show', pt: 'Talk Show', es: 'Talk Show' },
  'psychology': { en: 'Psychology', pt: 'Psicologia', es: 'Psicología' },
  
  // Index page
  'bestsellers': { en: 'Bestsellers', pt: 'Mais Vendidos', es: 'Más Vendidos' },
  'company': { en: 'Company', pt: 'Empresa', es: 'Empresa' },
  'help': { en: 'Help', pt: 'Ajuda', es: 'Ayuda' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translateText: (text: string) => Promise<string>;
  isTranslating: boolean;
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
  const [isTranslating, setIsTranslating] = useState(false);

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  // Translation function using predefined translations
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  // Function to translate arbitrary text using DeepL API
  const translateText = async (text: string): Promise<string> => {
    if (language === 'en' || !text) {
      return text;
    }
    
    try {
      setIsTranslating(true);
      const result = await translateWithDeepL(text, language);
      return result;
    } catch (error) {
      console.error('Translation error:', error);
      toast.error('Translation failed. Using original text.');
      return text;
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translateText, isTranslating }}>
      {children}
    </LanguageContext.Provider>
  );
};
