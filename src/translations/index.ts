import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
