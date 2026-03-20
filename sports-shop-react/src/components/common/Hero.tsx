import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop" 
          alt="Sports Hero" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-start z-10">
        <span className="text-secondary font-bold uppercase tracking-widest mb-4 animate-in slide-in-from-left duration-700">
          New Arrivals 2026
        </span>
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight max-w-3xl animate-in slide-in-from-bottom duration-700 delay-100">
          UNLEASH YOUR <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
            INNER ATHLETE
          </span>
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-8 animate-in slide-in-from-bottom duration-700 delay-200">
          Premium sports gear for professionals and enthusiasts. Elevate your performance with our cutting-edge equipment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in duration-1000 delay-300">
          <Link to="/products">
            <Button size="lg" className="w-full sm:w-auto">
              Shop Now <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
