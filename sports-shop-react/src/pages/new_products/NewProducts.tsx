import React, { useMemo, useState } from 'react';
import { products, type Product } from '../../data/products';
import { ProductCard } from '../../components/product/ProductCard';
import { QuickViewModal } from '../../components/product/QuickViewModal';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export const NewProducts: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(12);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const newProducts = useMemo(() => {
    return [...products]
      .filter((p) => Number.parseInt(p.id, 10) >= 33)
      .sort((a, b) => Number.parseInt(b.id, 10) - Number.parseInt(a.id, 10));
  }, []);

  const displayedProducts = newProducts.slice(0, visibleCount);
  const hasMore = visibleCount < newProducts.length;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-4xl font-heading font-bold text-primary mb-2">New Products</h1>
            <p className="text-gray-600">
              Showing {displayedProducts.length} of {newProducts.length} new arrivals
            </p>
          </div>
          <Link to="/products">
            <Button variant="outline">View All Products</Button>
          </Link>
        </div>

        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No new products yet.</p>
          </div>
        )}

        {hasMore && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setVisibleCount((prev) => prev + 8)}
              variant="outline"
              size="lg"
              className="min-w-[200px]"
            >
              Load More
            </Button>
          </div>
        )}
      </div>

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
};

