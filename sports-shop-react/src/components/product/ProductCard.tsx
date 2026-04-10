import React from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { type Product } from '../../data/products';
import { useCartStore } from '../../store/cartStore';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart, toggleFavorite, favorites } = useCartStore();
  const isFavorite = favorites.includes(product.id);

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "https://placehold.co/400x300?text=No+Image";
          }}
        />
        
        {/* Badges */}
        {!product.inStock && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            OUT OF STOCK
          </div>
        )}
        
        {/* Actions Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={() => onQuickView?.(product)}
            className="p-2 bg-white text-gray-800 rounded-full hover:bg-secondary hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
            title="Quick View"
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            onClick={() => toggleFavorite(product.id)}
            className={`p-2 rounded-full transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75 ${
              isFavorite ? 'bg-secondary text-white' : 'bg-white text-gray-800 hover:bg-secondary hover:text-white'
            }`}
            title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">
          {product.category}
        </div>
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="text-xl font-bold text-primary mb-1 line-clamp-2 group-hover:text-secondary transition-colors tracking-tight">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow font-medium">
          {product.shortDescription}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
          <Button
            size="sm"
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className={`flex items-center gap-1 w-full justify-center font-bold ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>

        <a 
          href={`https://wa.me/2348036340388?text=${encodeURIComponent(`Hello Chayoma Fitness Hub, I am interested in ${product.name}. Please send the price and confirm availability.`)}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-3 block w-full bg-green-600 text-white text-center py-2 rounded hover:bg-green-700 font-bold uppercase tracking-wide shadow-md hover:shadow-lg transition-all" 
        > 
          Contact to Buy (WhatsApp) 
        </a>
      </div>
    </div>
  );
};
