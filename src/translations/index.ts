
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Define the language type
export type Language = 'en' | 'es' | 'pt' | 'fr' | 'de';

// Create the translations object
export const translations: Record<string, Record<Language, string>> = {
  // General
  loading: {
    en: "Loading...",
    es: "Cargando...",
    pt: "Carregando...",
    fr: "Chargement...",
    de: "Laden..."
  },
  error: {
    en: "Error",
    es: "Error",
    pt: "Erro",
    fr: "Erreur",
    de: "Fehler"
  },
  success: {
    en: "Success",
    es: "Éxito",
    pt: "Sucesso",
    fr: "Succès",
    de: "Erfolg"
  },
  home: {
    en: "Home",
    es: "Inicio",
    pt: "Início",
    fr: "Accueil",
    de: "Startseite"
  },
  explore: {
    en: "Explore",
    es: "Explorar",
    pt: "Explorar",
    fr: "Explorer",
    de: "Entdecken"
  },
  categories: {
    en: "Categories",
    es: "Categorías",
    pt: "Categorias",
    fr: "Catégories",
    de: "Kategorien"
  },
  bestsellers: {
    en: "Bestsellers",
    es: "Éxitos de venta",
    pt: "Mais vendidos",
    fr: "Meilleures ventes",
    de: "Bestseller"
  },
  about: {
    en: "About",
    es: "Acerca de",
    pt: "Sobre",
    fr: "À propos",
    de: "Über"
  },
  blog: {
    en: "Blog",
    es: "Blog",
    pt: "Blog",
    fr: "Blog",
    de: "Blog"
  },
  careers: {
    en: "Careers",
    es: "Carreras",
    pt: "Carreiras",
    fr: "Carrières",
    de: "Karriere"
  },
  faq: {
    en: "FAQ",
    es: "Preguntas frecuentes",
    pt: "Perguntas frequentes",
    fr: "FAQ",
    de: "FAQ"
  },
  termsOfService: {
    en: "Terms of Service",
    es: "Términos de servicio",
    pt: "Termos de serviço",
    fr: "Conditions d'utilisation",
    de: "Nutzungsbedingungen"
  },
  privacyPolicy: {
    en: "Privacy Policy",
    es: "Política de privacidad",
    pt: "Política de privacidade",
    fr: "Politique de confidentialité",
    de: "Datenschutzrichtlinie"
  },
  support: {
    en: "Support",
    es: "Soporte",
    pt: "Suporte",
    fr: "Support",
    de: "Support"
  },
  contactUs: {
    en: "Contact Us",
    es: "Contáctenos",
    pt: "Contate-nos",
    fr: "Contactez-nous",
    de: "Kontakt"
  },
  search: {
    en: "Search",
    es: "Buscar",
    pt: "Pesquisar",
    fr: "Rechercher",
    de: "Suchen"
  },
  signIn: {
    en: "Sign In",
    es: "Iniciar sesión",
    pt: "Entrar",
    fr: "Se connecter",
    de: "Anmelden"
  },
  signOut: {
    en: "Sign Out",
    es: "Cerrar sesión",
    pt: "Sair",
    fr: "Se déconnecter",
    de: "Abmelden"
  },
  signUp: {
    en: "Sign Up",
    es: "Inscribirse",
    pt: "Inscrever-se",
    fr: "S'inscrire",
    de: "Registrieren"
  },
  listen: {
    en: "Listen",
    es: "Escuchar",
    pt: "Ouvir",
    fr: "Écouter",
    de: "Hören"
  },
  preview: {
    en: "Preview",
    es: "Vista previa",
    pt: "Pré-visualização",
    fr: "Aperçu",
    de: "Vorschau"
  },
  stopPreview: {
    en: "Stop Preview",
    es: "Detener vista previa",
    pt: "Parar pré-visualização",
    fr: "Arrêter l'aperçu",
    de: "Vorschau stoppen"
  },
  by: {
    en: "by",
    es: "por",
    pt: "por",
    fr: "par",
    de: "von"
  },
  youMightAlsoLike: {
    en: "You might also like",
    es: "También te puede gustar",
    pt: "Você também pode gostar",
    fr: "Vous pourriez aussi aimer",
    de: "Ihnen könnte auch gefallen"
  },
  monthsAgo: {
    en: "months ago",
    es: "meses atrás",
    pt: "meses atrás",
    fr: "mois",
    de: "Monate"
  },
  selectChapter: {
    en: "Select a chapter to start listening",
    es: "Selecciona un capítulo para empezar a escuchar",
    pt: "Selecione um capítulo para começar a ouvir",
    fr: "Sélectionnez un chapitre pour commencer à écouter",
    de: "Wählen Sie ein Kapitel zum Anhören aus"
  },
  
  // Index page
  popularAudiobooks: {
    en: "Popular audiobooks",
    es: "Audiolibros populares",
    pt: "Audiolivros populares",
    fr: "Livres audio populaires",
    de: "Beliebte Hörbücher"
  },
  newReleases: {
    en: "New releases",
    es: "Nuevos lanzamientos",
    pt: "Novos lançamentos",
    fr: "Nouvelles sorties",
    de: "Neuerscheinungen"
  },
  trendingNow: {
    en: "Trending now",
    es: "Tendencias actuales",
    pt: "Tendências atuais",
    fr: "Tendances actuelles",
    de: "Aktuelle Trends"
  },
  
  // Sign up page
  createAccount: {
    en: "Create an account",
    es: "Crear una cuenta",
    pt: "Criar uma conta",
    fr: "Créer un compte",
    de: "Konto erstellen"
  },
  name: {
    en: "Name",
    es: "Nombre",
    pt: "Nome",
    fr: "Nom",
    de: "Name"
  },
  yourName: {
    en: "Your name",
    es: "Tu nombre",
    pt: "Seu nome",
    fr: "Votre nom",
    de: "Ihr Name"
  },
  email: {
    en: "Email",
    es: "Correo electrónico",
    pt: "Email",
    fr: "Courriel",
    de: "E-Mail"
  },
  yourEmail: {
    en: "Your email",
    es: "Tu correo electrónico",
    pt: "Seu email",
    fr: "Votre courriel",
    de: "Ihre E-Mail"
  },
  password: {
    en: "Password",
    es: "Contraseña",
    pt: "Senha",
    fr: "Mot de passe",
    de: "Passwort"
  },
  yourPassword: {
    en: "Your password",
    es: "Tu contraseña",
    pt: "Sua senha",
    fr: "Votre mot de passe",
    de: "Ihr Passwort"
  },
  iAgreeToThe: {
    en: "I agree to the",
    es: "Estoy de acuerdo con los",
    pt: "Eu concordo com os",
    fr: "J'accepte les",
    de: "Ich stimme den"
  },
  alreadyHaveAnAccount: {
    en: "Already have an account",
    es: "¿Ya tienes una cuenta?",
    pt: "Já tem uma conta?",
    fr: "Vous avez déjà un compte?",
    de: "Haben Sie bereits ein Konto?"
  },
  
  // Explore page
  audiobooks: {
    en: "Audiobooks",
    es: "Audiolibros",
    pt: "Audiolivros",
    fr: "Livres audio",
    de: "Hörbücher"
  },
  
  // Category page
  fiction: {
    en: "Fiction",
    es: "Ficción",
    pt: "Ficção",
    fr: "Fiction",
    de: "Belletristik"
  },
  nonFiction: {
    en: "Non-Fiction",
    es: "No ficción",
    pt: "Não ficção",
    fr: "Non-fiction",
    de: "Sachbücher"
  },
  mystery: {
    en: "Mystery",
    es: "Misterio",
    pt: "Mistério",
    fr: "Mystère",
    de: "Krimi"
  },
  mysteryThriller: {
    en: "Mystery & Thriller",
    es: "Misterio y suspense",
    pt: "Mistério e suspense",
    fr: "Mystère et thriller",
    de: "Krimi & Thriller"
  },
  sciFi: {
    en: "Sci-Fi",
    es: "Ciencia ficción",
    pt: "Ficção científica",
    fr: "Science-fiction",
    de: "Science-Fiction"
  },
  fantasy: {
    en: "Fantasy",
    es: "Fantasía",
    pt: "Fantasia",
    fr: "Fantaisie",
    de: "Fantasy"
  },
  romance: {
    en: "Romance",
    es: "Romance",
    pt: "Romance",
    fr: "Romance",
    de: "Romantik"
  },
  horror: {
    en: "Horror",
    es: "Terror",
    pt: "Terror",
    fr: "Horreur",
    de: "Horror"
  },
  biography: {
    en: "Biography",
    es: "Biografía",
    pt: "Biografia",
    fr: "Biographie",
    de: "Biografie"
  },
  history: {
    en: "History",
    es: "Historia",
    pt: "História",
    fr: "Histoire",
    de: "Geschichte"
  },
  business: {
    en: "Business",
    es: "Negocios",
    pt: "Negócios",
    fr: "Affaires",
    de: "Wirtschaft"
  },
  selfHelp: {
    en: "Self-Help",
    es: "Autoayuda",
    pt: "Autoajuda",
    fr: "Développement personnel",
    de: "Selbsthilfe"
  },
  technology: {
    en: "Technology",
    es: "Tecnología",
    pt: "Tecnologia",
    fr: "Technologie",
    de: "Technologie"
  },
  cookbooks: {
    en: "Cookbooks",
    es: "Libros de cocina",
    pt: "Livros de receitas",
    fr: "Livres de cuisine",
    de: "Kochbücher"
  },
  
  // Footer
  copyright: {
    en: "Copyright © 2024 Hakim",
    es: "Copyright © 2024 Hakim",
    pt: "Copyright © 2024 Hakim",
    fr: "Copyright © 2024 Hakim",
    de: "Copyright © 2024 Hakim"
  },
  
  // Library related
  library: {
    en: "Your Library",
    es: "Tu Biblioteca",
    pt: "Sua Biblioteca",
    fr: "Votre Bibliothèque",
    de: "Ihre Bibliothek"
  },
  yourSavedAudiobooks: {
    en: "Your saved audiobooks collection",
    es: "Tu colección de audiolibros guardados",
    pt: "Sua coleção de audiolivros salvos",
    fr: "Votre collection d'audiolivres enregistrés",
    de: "Ihre gespeicherte Hörbuchsammlung"
  },
  yourLibraryIsEmpty: {
    en: "Your library is empty",
    es: "Tu biblioteca está vacía",
    pt: "Sua biblioteca está vazia",
    fr: "Votre bibliothèque est vide",
    de: "Ihre Bibliothek ist leer"
  },
  browseAudiobooksToAddToLibrary: {
    en: "Browse our audiobook collection and add titles to your library",
    es: "Explora nuestra colección de audiolibros y añade títulos a tu biblioteca",
    pt: "Navegue pela nossa coleção de audiolivros e adicione títulos à sua biblioteca",
    fr: "Parcourez notre collection d'audiolivres et ajoutez des titres à votre bibliothèque",
    de: "Durchsuchen Sie unsere Hörbuchsammlung und fügen Sie Titel zu Ihrer Bibliothek hinzu"
  },
  exploreAudiobooks: {
    en: "Explore Audiobooks",
    es: "Explorar Audiolibros",
    pt: "Explorar Audiolivros",
    fr: "Explorer les Audiolivres",
    de: "Hörbücher entdecken"
  },
  removeFromLibrary: {
    en: "Remove from Library",
    es: "Quitar de la Biblioteca",
    pt: "Remover da Biblioteca",
    fr: "Retirer de la Bibliothèque",
    de: "Aus der Bibliothek entfernen"
  },
  addToLibrary: {
    en: "Add to Library",
    es: "Añadir a la Biblioteca",
    pt: "Adicionar à Biblioteca",
    fr: "Ajouter à la Bibliothèque",
    de: "Zur Bibliothek hinzufügen"
  },
  // Additional missing translations
  reviews: {
    en: "reviews",
    es: "reseñas",
    pt: "avaliações",
    fr: "commentaires",
    de: "Bewertungen"
  },
  outOf5: {
    en: "out of 5",
    es: "de 5",
    pt: "de 5",
    fr: "sur 5",
    de: "von 5"
  },
  writeReview: {
    en: "Write Review",
    es: "Escribir Reseña",
    pt: "Escrever Avaliação",
    fr: "Écrire un Commentaire",
    de: "Bewertung schreiben"
  },
  loadMoreReviews: {
    en: "Load More Reviews",
    es: "Cargar Más Reseñas",
    pt: "Carregar Mais Avaliações",
    fr: "Charger Plus de Commentaires",
    de: "Mehr Bewertungen laden"
  },
  shareBook: {
    en: "Share Book",
    es: "Compartir Libro",
    pt: "Compartilhar Livro",
    fr: "Partager le Livre",
    de: "Buch teilen"
  },
  allChapters: {
    en: "All Chapters",
    es: "Todos los Capítulos",
    pt: "Todos os Capítulos",
    fr: "Tous les Chapitres",
    de: "Alle Kapitel"
  },
  collapse: {
    en: "Collapse",
    es: "Colapsar",
    pt: "Colapsar",
    fr: "Réduire",
    de: "Einklappen"
  },
  expand: {
    en: "Expand",
    es: "Expandir",
    pt: "Expandir",
    fr: "Étendre",
    de: "Ausklappen"
  },
  freePreview: {
    en: "Free Preview",
    es: "Vista Previa Gratuita",
    pt: "Prévia Gratuita",
    fr: "Aperçu Gratuit",
    de: "Kostenlose Vorschau"
  },
  showAllChapters: {
    en: "Show All Chapters",
    es: "Mostrar Todos los Capítulos",
    pt: "Mostrar Todos os Capítulos",
    fr: "Afficher Tous les Chapitres",
    de: "Alle Kapitel anzeigen"
  },
  similarAudiobooks: {
    en: "Similar audiobooks",
    es: "Audiolibros similares",
    pt: "Audiolivros similares",
    fr: "Livres audio similaires",
    de: "Ähnliche Hörbücher"
  },
  viewAll: {
    en: "View All",
    es: "Ver Todo",
    pt: "Ver Tudo",
    fr: "Voir Tout",
    de: "Alle anzeigen"
  },
};

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // General
          loading: "Loading...",
          error: "Error",
          success: "Success",
          home: "Home",
          explore: "Explore",
          categories: "Categories",
          bestsellers: "Bestsellers",
          about: "About",
          blog: "Blog",
          careers: "Careers",
          faq: "FAQ",
          termsOfService: "Terms of Service",
          privacyPolicy: "Privacy Policy",
          support: "Support",
          contactUs: "Contact Us",
          search: "Search",
          signIn: "Sign In",
          signOut: "Sign Out",
          signUp: "Sign Up",
          listen: "Listen",
          preview: "Preview",
          stopPreview: "Stop Preview",
          by: "by",
          youMightAlsoLike: "You might also like",
          monthsAgo: "months ago",
          selectChapter: "Select a chapter to start listening",
          
          // Index page
          popularAudiobooks: "Popular audiobooks",
          newReleases: "New releases",
          trendingNow: "Trending now",
          
          // Sign up page
          createAccount: "Create an account",
          name: "Name",
          yourName: "Your name",
          email: "Email",
          yourEmail: "Your email",
          password: "Password",
          yourPassword: "Your password",
          iAgreeToThe: "I agree to the",
          alreadyHaveAnAccount: "Already have an account",
          
          // Explore page
          audiobooks: "Audiobooks",
          
          // Category page
          fiction: "Fiction",
          nonFiction: "Non-Fiction",
          mystery: "Mystery",
          mysteryThriller: "Mystery & Thriller",
          sciFi: "Sci-Fi",
          fantasy: "Fantasy",
          romance: "Romance",
          horror: "Horror",
          biography: "Biography",
          history: "History",
          business: "Business",
          selfHelp: "Self-Help",
          technology: "Technology",
          cookbooks: "Cookbooks",
          
          // Footer
          copyright: "Copyright © 2024 Hakim",
          
          // Library related
          library: "Your Library",
          yourSavedAudiobooks: "Your saved audiobooks collection",
          yourLibraryIsEmpty: "Your library is empty",
          browseAudiobooksToAddToLibrary: "Browse our audiobook collection and add titles to your library",
          exploreAudiobooks: "Explore Audiobooks",
          removeFromLibrary: "Remove from Library",
          addToLibrary: "Add to Library",
        },
      },
      es: {
        translation: {
          // General
          loading: "Cargando...",
          error: "Error",
          success: "Éxito",
          home: "Inicio",
          explore: "Explorar",
          categories: "Categorías",
          bestsellers: "Éxitos de venta",
          about: "Acerca de",
          blog: "Blog",
          careers: "Carreras",
          faq: "Preguntas frecuentes",
          termsOfService: "Términos de servicio",
          privacyPolicy: "Política de privacidad",
          support: "Soporte",
          contactUs: "Contáctenos",
          search: "Buscar",
          signIn: "Iniciar sesión",
          signOut: "Cerrar sesión",
          signUp: "Inscribirse",
          listen: "Escuchar",
          preview: "Vista previa",
          stopPreview: "Detener vista previa",
          by: "por",
          youMightAlsoLike: "También te puede gustar",
          monthsAgo: "meses atrás",
          selectChapter: "Selecciona un capítulo para empezar a escuchar",
          
          // Index page
          popularAudiobooks: "Audiolibros populares",
          newReleases: "Nuevos lanzamientos",
          trendingNow: "Tendencias actuales",
          
          // Sign up page
          createAccount: "Crear una cuenta",
          name: "Nombre",
          yourName: "Tu nombre",
          email: "Correo electrónico",
          yourEmail: "Tu correo electrónico",
          password: "Contraseña",
          yourPassword: "Tu contraseña",
          iAgreeToThe: "Estoy de acuerdo con los",
          alreadyHaveAnAccount: "¿Ya tienes una cuenta?",
          
          // Explore page
          audiobooks: "Audiolibros",
          
          // Category page
          fiction: "Ficción",
          nonFiction: "No ficción",
          mystery: "Misterio",
          mysteryThriller: "Misterio y suspense",
          sciFi: "Ciencia ficción",
          fantasy: "Fantasía",
          romance: "Romance",
          horror: "Terror",
          biography: "Biografía",
          history: "Historia",
          business: "Negocios",
          selfHelp: "Autoayuda",
          technology: "Tecnología",
          cookbooks: "Libros de cocina",
          
          // Footer
          copyright: "Copyright © 2024 Hakim",
          
          // Library related
          library: "Tu Biblioteca",
          yourSavedAudiobooks: "Tu colección de audiolibros guardados",
          yourLibraryIsEmpty: "Tu biblioteca está vacía",
          browseAudiobooksToAddToLibrary: "Explora nuestra colección de audiolibros y añade títulos a tu biblioteca",
          exploreAudiobooks: "Explorar Audiolibros",
          removeFromLibrary: "Quitar de la Biblioteca",
          addToLibrary: "Añadir a la Biblioteca",
        },
      },
      pt: {
        translation: {
          // General
          loading: "Carregando...",
          error: "Erro",
          success: "Sucesso",
          home: "Início",
          explore: "Explorar",
          categories: "Categorias",
          bestsellers: "Mais vendidos",
          about: "Sobre",
          blog: "Blog",
          careers: "Carreiras",
          faq: "Perguntas frequentes",
          termsOfService: "Termos de serviço",
          privacyPolicy: "Política de privacidade",
          support: "Suporte",
          contactUs: "Contate-nos",
          search: "Pesquisar",
          signIn: "Entrar",
          signOut: "Sair",
          signUp: "Inscrever-se",
          listen: "Ouvir",
          preview: "Pré-visualização",
          stopPreview: "Parar pré-visualização",
          by: "por",
          youMightAlsoLike: "Você também pode gostar",
          monthsAgo: "meses atrás",
          selectChapter: "Selecione um capítulo para começar a ouvir",
          
          // Index page
          popularAudiobooks: "Audiolivros populares",
          newReleases: "Novos lançamentos",
          trendingNow: "Tendências atuais",
          
          // Sign up page
          createAccount: "Criar uma conta",
          name: "Nome",
          yourName: "Seu nome",
          email: "Email",
          yourEmail: "Seu email",
          password: "Senha",
          yourPassword: "Sua senha",
          iAgreeToThe: "Eu concordo com os",
          alreadyHaveAnAccount: "Já tem uma conta?",
          
          // Explore page
          audiobooks: "Audiolivros",
          
          // Category page
          fiction: "Ficção",
          nonFiction: "Não ficção",
          mystery: "Mistério",
          mysteryThriller: "Mistério e suspense",
          sciFi: "Ficção científica",
          fantasy: "Fantasia",
          romance: "Romance",
          horror: "Terror",
          biography: "Biografia",
          history: "História",
          business: "Negócios",
          selfHelp: "Autoajuda",
          technology: "Tecnologia",
          cookbooks: "Livros de receitas",
          
          // Footer
          copyright: "Copyright © 2024 Hakim",
          
          // Library related
          library: "Sua Biblioteca",
          yourSavedAudiobooks: "Sua coleção de audiolivros salvos",
          yourLibraryIsEmpty: "Sua biblioteca está vazia",
          browseAudiobooksToAddToLibrary: "Navegue pela nossa coleção de audiolivros e adicione títulos à sua biblioteca",
          exploreAudiobooks: "Explorar Audiolivros",
          removeFromLibrary: "Remover da Biblioteca",
          addToLibrary: "Adicionar à Biblioteca",
        },
      },
      fr: {
        translation: {
          // General
          loading: "Chargement...",
          error: "Erreur",
          success: "Succès",
          home: "Accueil",
          explore: "Explorer",
          categories: "Catégories",
          bestsellers: "Meilleures ventes",
          about: "À propos",
          blog: "Blog",
          careers: "Carrières",
          faq: "FAQ",
          termsOfService: "Conditions d'utilisation",
          privacyPolicy: "Politique de confidentialité",
          support: "Support",
          contactUs: "Contactez-nous",
          search: "Rechercher",
          signIn: "Se connecter",
          signOut: "Se déconnecter",
          signUp: "S'inscrire",
          listen: "Écouter",
          preview: "Aperçu",
          stopPreview: "Arrêter l'aperçu",
          by: "par",
          youMightAlsoLike: "Vous pourriez aussi aimer",
          monthsAgo: "mois",
          selectChapter: "Sélectionnez un chapitre pour commencer à écouter",
          
          // Index page
          popularAudiobooks: "Livres audio populaires",
          newReleases: "Nouvelles sorties",
          trendingNow: "Tendances actuelles",
          
          // Sign up page
          createAccount: "Créer un compte",
          name: "Nom",
          yourName: "Votre nom",
          email: "Courriel",
          yourEmail: "Votre courriel",
          password: "Mot de passe",
          yourPassword: "Votre mot de passe",
          iAgreeToThe: "J'accepte les",
          alreadyHaveAnAccount: "Vous avez déjà un compte?",
          
          // Explore page
          audiobooks: "Livres audio",
          
          // Category page
          fiction: "Fiction",
          nonFiction: "Non-fiction",
          mystery: "Mystère",
          mysteryThriller: "Mystère et thriller",
          sciFi: "Science-fiction",
          fantasy: "Fantaisie",
          romance: "Romance",
          horror: "Horreur",
          biography: "Biographie",
          history: "Histoire",
          business: "Affaires",
          selfHelp: "Développement personnel",
          technology: "Technologie",
          cookbooks: "Livres de cuisine",
          
          // Footer
          copyright: "Copyright © 2024 Hakim",
          
          // Library related
          library: "Votre Bibliothèque",
          yourSavedAudiobooks: "Votre collection d'audiolivres enregistrés",
          yourLibraryIsEmpty: "Votre bibliothèque est vide",
          browseAudiobooksToAddToLibrary: "Parcourez notre collection d'audiolivres et ajoutez des titres à votre bibliothèque",
          exploreAudiobooks: "Explorer les Audiolivres",
          removeFromLibrary: "Retirer de la Bibliothèque",
          addToLibrary: "Ajouter à la Bibliothèque",
        },
      },
      de: {
        translation: {
          // General
          loading: "Laden...",
          error: "Fehler",
          success: "Erfolg",
          home: "Startseite",
          explore: "Entdecken",
          categories: "Kategorien",
          bestsellers: "Bestseller",
          about: "Über",
          blog: "Blog",
          careers: "Karriere",
          faq: "FAQ",
          termsOfService: "Nutzungsbedingungen",
          privacyPolicy: "Datenschutzrichtlinie",
          support: "Support",
          contactUs: "Kontakt",
          search: "Suchen",
          signIn: "Anmelden",
          signOut: "Abmelden",
          signUp: "Registrieren",
          listen: "Hören",
          preview: "Vorschau",
          stopPreview: "Vorschau stoppen",
          by: "von",
          youMightAlsoLike: "Ihnen könnte auch gefallen",
          monthsAgo: "Monate",
          selectChapter: "Wählen Sie ein Kapitel zum Anhören aus",
          
          // Index page
          popularAudiobooks: "Beliebte Hörbücher",
          newReleases: "Neuerscheinungen",
          trendingNow: "Aktuelle Trends",
          
          // Sign up page
          createAccount: "Konto erstellen",
          name: "Name",
          yourName: "Ihr Name",
          email: "E-Mail",
          yourEmail: "Ihre E-Mail",
          password: "Passwort",
          yourPassword: "Ihr Passwort",
          iAgreeToThe: "Ich stimme den",
          alreadyHaveAnAccount: "Haben Sie bereits ein Konto?",
          
          // Explore page
          audiobooks: "Hörbücher",
          
          // Category page
          fiction: "Belletristik",
          nonFiction: "Sachbücher",
          mystery: "Krimi",
          mysteryThriller: "Krimi & Thriller",
          sciFi: "Science-Fiction",
          fantasy: "Fantasy",
          romance: "Romantik",
          horror: "Horror",
          biography: "Biografie",
          history: "Geschichte",
          business: "Wirtschaft",
          selfHelp: "Selbsthilfe",
          technology: "Technologie",
          cookbooks: "Kochbücher",
          
          // Footer
          copyright: "Copyright © 2024 Hakim",
          
          // Library related
          library: "Ihre Bibliothek",
          yourSavedAudiobooks: "Ihre gespeicherte Hörbuchsammlung",
          yourLibraryIsEmpty: "Ihre Bibliothek ist leer",
          browseAudiobooksToAddToLibrary: "Durchsuchen Sie unsere Hörbuchsammlung und fügen Sie Titel zu Ihrer Bibliothek hinzu",
          exploreAudiobooks: "Hörbücher entdecken",
          removeFromLibrary: "Aus der Bibliothek entfernen",
          addToLibrary: "Zur Bibliothek hinzufügen",
        },
      },
    },
  });

export default i18n;
