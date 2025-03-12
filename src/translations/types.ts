
export type Language = 'en' | 'es' | 'fr' | 'de' | 'pt';

export interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

export const translations: Translations = {
  loading: {
    en: 'Loading...',
    es: 'Cargando...',
    fr: 'Chargement...',
    de: 'Laden...',
    pt: 'Carregando...'
  },
  searchBooks: {
    en: 'Search books...',
    es: 'Buscar libros...',
    fr: 'Rechercher des livres...',
    de: 'Bücher suchen...',
    pt: 'Buscar livros...'
  },
  categories: {
    en: 'Categories',
    es: 'Categorías',
    fr: 'Catégories',
    de: 'Kategorien',
    pt: 'Categorias'
  },
  viewAll: {
    en: 'View All',
    es: 'Ver todo',
    fr: 'Voir tout',
    de: 'Alle anzeigen',
    pt: 'Ver tudo'
  },
  home: {
    en: 'Home',
    es: 'Inicio',
    fr: 'Accueil',
    de: 'Startseite',
    pt: 'Início'
  },
  explore: {
    en: 'Explore',
    es: 'Explorar',
    fr: 'Explorer',
    de: 'Entdecken',
    pt: 'Explorar'
  },
  by: {
    en: 'by',
    es: 'por',
    fr: 'par',
    de: 'von',
    pt: 'por'
  },
  // Add more translations here as needed
};
