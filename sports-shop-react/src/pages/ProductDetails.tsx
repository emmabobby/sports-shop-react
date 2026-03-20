import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCartStore } from '../store/cartStore';
import { Button } from '../components/ui/Button';
import { ShoppingCart, Heart, Check, ArrowLeft } from 'lucide-react';

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addToCart, toggleFavorite, favorites } = useCartStore();

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/products"><Button>Back to Products</Button></Link>
      </div>
    );
  }

  const isFavorite = favorites.includes(product.id);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-primary mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
        </Link>
        
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-100 aspect-square md:aspect-auto relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:p-12 flex flex-col">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">{product.category}</span>
            <h1 className="text-4xl font-heading font-bold text-primary mb-4">{product.name}</h1>
            
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              {product.shortDescription}
              <br/><br/>
              Experience premium quality with the {product.name}. Designed for athletes who demand the best performance and durability.
            </p>

            <div className="mt-auto space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  size="lg"
                  className="flex-1 py-4 text-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
                <button 
                  onClick={() => toggleFavorite(product.id)}
                  className={`p-4 rounded-lg border-2 transition-all flex items-center justify-center ${
                    isFavorite 
                      ? 'border-secondary bg-secondary/10 text-secondary' 
                      : 'border-gray-200 hover:border-secondary hover:text-secondary text-gray-400'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <Check className="w-5 h-5" />
                In Stock & Ready to Ship within Lagos
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
