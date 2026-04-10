import React from 'react';
import { useCartStore } from '../store/cartStore';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, MessageCircle } from 'lucide-react';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "2348036340388"; // Replace with real number
    let message = "Hello Chayoma Fitness Hub, I would like to order these items. Please send the prices and confirm availability:\n\n";
    
    cart.forEach(item => {
      message += `- ${item.product.name} (x${item.quantity})\n`;
    });
    
    message += "\n\nPlease confirm delivery details for Lagos.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any gear yet. Check out our latest products.</p>
          <Link to="/products">
            <Button size="lg">Start Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-grow bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 space-y-6">
              {cart.map((item) => (
                <div key={item.product.id} className="flex flex-col sm:flex-row gap-6 border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                  <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-xl overflow-hidden shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-primary">{item.product.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">{item.product.category}</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-2 hover:bg-white rounded-md shadow-sm transition-all"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-medium w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-2 hover:bg-white rounded-md shadow-sm transition-all"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 flex justify-between items-center">
              <Button variant="ghost" onClick={clearCart} className="text-red-500 hover:text-red-600 hover:bg-red-50">
                Clear Cart
              </Button>
              <Link to="/products" className="text-primary font-medium hover:text-secondary flex items-center gap-2">
                Continue Shopping <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Summary */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-heading font-bold text-primary mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Items</span>
                  <span>{cart.length}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-sm text-gray-400">Confirm on WhatsApp</span>
                </div>
              </div>

              <Button 
                onClick={handleWhatsAppCheckout}
                className="w-full py-4 text-lg bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Message Admin on WhatsApp
              </Button>
              
              <p className="text-xs text-center text-gray-400 mt-4">
                Prices and payment are confirmed on WhatsApp. No payment required on site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
