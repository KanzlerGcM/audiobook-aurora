
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
  login: {
    en: 'Login',
    es: 'Iniciar sesión',
    fr: 'Connexion',
    de: 'Anmelden',
    pt: 'Entrar'
  },
  signUp: {
    en: 'Sign up',
    es: 'Registrarse',
    fr: 'S\'inscrire',
    de: 'Registrieren',
    pt: 'Cadastrar'
  },
  myAccount: {
    en: 'My Account',
    es: 'Mi Cuenta',
    fr: 'Mon Compte',
    de: 'Mein Konto',
    pt: 'Minha Conta'
  },
  myLibrary: {
    en: 'My Library',
    es: 'Mi Biblioteca',
    fr: 'Ma Bibliothèque',
    de: 'Meine Bibliothek',
    pt: 'Minha Biblioteca'
  },
  ratedBooks: {
    en: 'Rated Books',
    es: 'Libros Calificados',
    fr: 'Livres Évalués',
    de: 'Bewertete Bücher',
    pt: 'Livros Avaliados'
  },
  logout: {
    en: 'Logout',
    es: 'Cerrar sesión',
    fr: 'Déconnexion',
    de: 'Abmelden',
    pt: 'Sair'
  },
  // Add more translations here as needed
};
