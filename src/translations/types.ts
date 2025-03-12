
export type Language = 'en' | 'es' | 'fr' | 'de';

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
    de: 'Laden...'
  },
  // Add more translations here as needed
};
