import React from 'react';
import { X, ShoppingCart, Heart, Check } from 'lucide-react';
import { type Product } from '../../data/products';
import { useCartStore } from '../../store/cartStore';
import { Button } from '../ui/Button';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart, toggleFavorite, favorites } = useCartStore();
  
  if (!product) return null;

  const isFavorite = favorites.includes(product.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white shadow-sm transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative h-64 md:h-full bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col h-full overflow-y-auto">
          <div className="mb-6">
            <span className="text-sm font-bold text-secondary uppercase tracking-wider mb-2 block">
              {product.category}
            </span>
            <h2 className="text-3xl font-heading font-bold text-primary mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600 leading-relaxed mt-4">
              {product.shortDescription}
              <br/><br/>
              Experience top-tier performance with this premium product from Chayoma Fitness. Designed for durability, comfort, and maximum efficiency, it is perfect for both beginners and professionals looking to elevate their game and reach their fitness goals.
            </p>
          </div>

          <div className="mt-auto space-y-4">
            <div className="flex gap-4">
              <Button 
                onClick={() => {
                  addToCart(product);
                  onClose();
                }}
                disabled={!product.inStock}
                className="flex-1 py-4 text-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <button 
                onClick={() => toggleFavorite(product.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  isFavorite 
                    ? 'border-secondary bg-secondary/10 text-secondary' 
                    : 'border-gray-200 hover:border-secondary hover:text-secondary text-gray-400'
                }`}
              >
                <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
              <Check className="w-4 h-4" />
              In Stock & Ready to Ship
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
