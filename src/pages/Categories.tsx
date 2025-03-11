
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { categories } from "@/utils/bookGenerator";
import { Link } from "react-router-dom";

const Categories = () => {
  const { t } = useLanguage();

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-32">
        <h1 className="text-3xl font-semibold text-hakim-light mb-8">{t('categories')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category}
              to={`/categories/${category.toLowerCase().replace(/-/g, '-')}`}
              className="p-6 rounded-lg border border-hakim-medium/20 hover:border-hakim-medium transition-colors"
            >
              <h2 className="text-xl font-medium text-hakim-light mb-2">
                {category}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
