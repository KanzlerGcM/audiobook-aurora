
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  withText = true,
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
    xl: 'h-12'
  };

  return (
    <Link to="/" className={`flex items-center space-x-2 ${className}`}>
      <div className="relative">
        <img 
          src="/lovable-uploads/a00410c9-ed97-4156-97fb-29e98c9f2807.png" 
          alt="Hakim Logo" 
          className={`${sizeClasses[size]} w-auto object-contain transition-all duration-300 hover:opacity-90`}
        />
      </div>
      
      {withText && (
        <span className={`font-medium ${size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : size === 'xl' ? 'text-3xl' : 'text-xl'} text-hakim-light transition-colors`}>
          Hakim
        </span>
      )}
    </Link>
  );
};

export default Logo;
