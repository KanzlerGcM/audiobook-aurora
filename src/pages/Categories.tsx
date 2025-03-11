
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const Categories = () => {
  const { t } = useLanguage();

  const categories = [
    { name: t('fiction'), path: '/categories/fiction' },
    { name: t('nonFiction'), path: '/categories/non-fiction' },
    { name: t('mysteryThriller'), path: '/categories/mystery-thriller' },
    { name: t('scienceFiction'), path: '/categories/sci-fi' },
    { name: t('fantasy'), path: '/categories/fantasy' },
    { name: t('biography'), path: '/categories/biography' },
    { name: t('history'), path: '/categories/history' },
    { name: t('selfHelp'), path: '/categories/self-help' },
    { name: t('business'), path: '/categories/business' },
    { name: t('cookbooks'), path: '/categories/cookbooks' },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-32">
        <h1 className="text-3xl font-semibold text-hakim-light mb-8">{t('categories')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.path} className="p-6 rounded-lg border border-hakim-medium/20 hover:border-hakim-medium transition-colors">
              <h2 className="text-xl font-medium text-hakim-light mb-2">
                {category.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
