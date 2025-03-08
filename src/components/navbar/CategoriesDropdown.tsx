
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface CategoriesDropdownProps {
  categories: { name: string; path: string }[];
  isHovered: boolean;
  onHoverChange: (isHovered: boolean) => void;
}

const CategoriesDropdown = ({ 
  categories, 
  isHovered, 
  onHoverChange 
}: CategoriesDropdownProps) => {
  const { t } = useLanguage();
  
  return (
    <div 
      className="relative"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      <button className="flex items-center space-x-1 text-sm text-hakim-gray hover:text-hakim-light transition-smooth">
        <span>{t('categories')}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      
      {isHovered && (
        <div className="absolute left-0 top-full mt-1 w-56 bg-hakim-darkest border border-hakim-medium/20 rounded-md shadow-lg z-50 animate-fade-in py-1">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="block px-4 py-2 text-hakim-light hover:bg-hakim-dark text-sm"
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
