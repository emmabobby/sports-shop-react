import React, { useState } from 'react';
import { Hero } from '../components/common/Hero';
import { CategoryCard } from '../components/common/CategoryCard';
import { TestimonialSlider } from '../components/common/TestimonialSlider';
import { ProductCard } from '../components/product/ProductCard';
import { QuickViewModal } from '../components/product/QuickViewModal';
import { Button } from '../components/ui/Button';
import { products, type Product } from '../data/products';
import { ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Featured products (random or specific)
  const featuredProducts = products.slice(0, 4);

  const categories = [
    { name: 'Football', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop', count: products.filter(p => p.category === 'Football').length },
    { name: 'Basketball', image: 'https://images.unsplash.com/photo-1546519638-68e109498ee2?q=80&w=800&auto=format&fit=crop', count: products.filter(p => p.category === 'Basketball').length },
    { name: 'Running', image: 'https://images.unsplash.com/photo-1590233010342-632317135542?q=80&w=800&auto=format&fit=crop', count: products.filter(p => p.category === 'Running').length },
    { name: 'Fitness', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop', count: products.filter(p => p.category === 'Fitness').length },
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Categories Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Shop By Category</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">Find Your Game</h2>
          </div>
          <Link to="/products" className="hidden md:flex items-center text-primary font-medium hover:text-secondary transition-colors">
            View All Categories <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.name} name={cat.name} image={cat.image} itemCount={cat.count} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm">Trending Now</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">Best Sellers</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Fast Delivery in Lagos</h3>
              <p className="text-gray-300">Same day delivery for orders before 12PM within Lagos mainland and island.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">Authentic Products</h3>
              <p className="text-gray-300">100% genuine sports gear directly from top manufacturers.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-300">Our dedicated team is always ready to assist you with your orders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mt-2">What Our Customers Say</h2>
        </div>
        <TestimonialSlider />
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556817405-30591228d8bc?q=80&w=2070&auto=format&fit=crop" 
            alt="CTA Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container mx-auto px-4 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Ready to Elevate Your Game?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of athletes who trust Chayoma Fitness Hub for their equipment needs.
          </p>
          <Link to="/products">
            <Button size="lg" variant="secondary" className="px-12 py-4 text-lg shadow-lg hover:shadow-orange-500/20">
              Start Shopping Now
            </Button>
          </Link>
        </div>
      </section>

      <QuickViewModal 
        product={quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
      />
    </div>
  );
};
