import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, type Product } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { QuickViewModal } from '../components/product/QuickViewModal';
import { Button } from '../components/ui/Button';
import { Search, Filter, X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const CATEGORIES = ["All", "Football", "Basketball", "Running", "Fitness", "Teamwear", "Accessories", "Racquet Sports", "Team Sports"];

export const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(12);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const favorites = useCartStore((state) => state.favorites);

  const currentCategory = searchParams.get('category') || 'All';
  const isFavoritesFilter = searchParams.get('filter') === 'favorites';

  const filteredProducts = useMemo(() => {
    // Sort products by ID in descending order (newest first)
    const sortedProducts = [...products].sort((a, b) => parseInt(b.id) - parseInt(a.id));

    return sortedProducts.filter((product) => {
      // Filter by Favorites
      if (isFavoritesFilter && !favorites.includes(product.id)) {
        return false;
      }

      // Filter by Category
      const matchesCategory = currentCategory === 'All' || product.category === currentCategory;
      
      // Filter by Search
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [currentCategory, searchTerm, isFavoritesFilter, favorites]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    // If we are in favorites mode, we might want to keep it or clear it. 
    // Usually clicking a category clears "favorites" filter unless we want "Favorites in Football".
    // Let's clear favorites filter when changing category for simplicity, or keep it.
    // Let's keep it if user wants to filter favorites by category.
    setSearchParams(searchParams);
    setVisibleCount(12);
    setIsFilterOpen(false);
  };

  const clearFilters = () => {
      setSearchTerm('');
      setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">
            {isFavoritesFilter ? 'My Favorites' : (currentCategory === 'All' ? 'All Products' : currentCategory)}
          </h1>
          <p className="text-gray-600">
            Showing {displayedProducts.length} of {filteredProducts.length} results
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-20 z-30 bg-gray-50/95 backdrop-blur-sm py-4 -mx-4 px-4 md:mx-0 md:px-0">
          {/* Search */}
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
            />
          </div>

          {/* Mobile Filter Toggle */}
          <Button 
            className="md:hidden flex items-center justify-center gap-2"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            variant="outline"
          >
            <Filter className="w-5 h-5" /> Filters
          </Button>

          {/* Desktop Filters */}
          <div className="hidden md:flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  currentCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Filter Drawer (Simple expansion) */}
        {isFilterOpen && (
          <div className="md:hidden mb-6 p-4 bg-white rounded-xl shadow-lg border border-gray-100 animate-in slide-in-from-top-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-primary">Categories</h3>
              <button onClick={() => setIsFilterOpen(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    currentCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No products found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={clearFilters}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="mt-12 text-center">
            <Button 
              onClick={() => setVisibleCount((prev) => prev + 8)}
              variant="outline"
              size="lg"
              className="min-w-[200px]"
            >
              Load More Products
            </Button>
          </div>
        )}
      </div>

      <QuickViewModal 
        product={quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
      />
    </div>
  );
};
