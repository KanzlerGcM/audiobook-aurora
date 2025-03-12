
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
  // Add more translations here as needed
};
