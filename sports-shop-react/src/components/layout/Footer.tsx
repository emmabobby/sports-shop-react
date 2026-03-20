import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-3xl font-heading font-bold tracking-tighter mb-4 block">
              CHAYOMA<span className="text-secondary">FITNESS</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Your ultimate destination for premium sports gear in Lagos. Elevate your game with our top-quality equipment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-secondary transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-heading text-xl mb-4 text-secondary">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/products?category=Football" className="text-gray-300 hover:text-white transition-colors">Football</Link></li>
              <li><Link to="/products?category=Basketball" className="text-gray-300 hover:text-white transition-colors">Basketball</Link></li>
              <li><Link to="/products?category=Running" className="text-gray-300 hover:text-white transition-colors">Running</Link></li>
              <li><Link to="/products?category=Fitness" className="text-gray-300 hover:text-white transition-colors">Fitness</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl mb-4 text-secondary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <span className="text-gray-300">30 Makinde ojuelegba Bus stop, Surulere, Lagos</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-gray-300">08036340388 / 08120567250</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-gray-300">chayomasports@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Chayoma Fitness Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
