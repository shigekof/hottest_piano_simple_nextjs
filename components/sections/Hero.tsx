import React from 'react';
import Button from '../ui/Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  size?: 'full' | 'compact';
  buttons?: {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
  }[];
  backgroundClass?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  size = 'full',
  buttons = [],
  backgroundClass = 'bg-gradient-to-r from-blue-50 to-indigo-100'
}) => {
  const sizeClasses = {
    full: 'py-20',
    compact: 'py-12'
  };

  const titleSizes = {
    full: 'text-4xl md:text-6xl',
    compact: 'text-3xl md:text-4xl'
  };

  return (
    <section className={`${backgroundClass} ${sizeClasses[size]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`${titleSizes[size]} font-bold text-gray-900 mb-6`}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant || 'primary'}
                size="lg"
                href={button.href}
                onClick={button.onClick}
                className="min-w-[200px]"
              >
                {button.text}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;