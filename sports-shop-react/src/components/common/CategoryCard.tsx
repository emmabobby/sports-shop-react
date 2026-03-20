import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  image: string;
  itemCount: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, itemCount }) => {
  return (
    <Link to={`/products?category=${name}`} className="group relative h-80 rounded-xl overflow-hidden block">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-1">{name}</h3>
              <p className="text-gray-300 text-sm">{itemCount} Products</p>
            </div>
            <div className="bg-secondary p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
