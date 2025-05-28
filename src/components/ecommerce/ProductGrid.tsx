
import React from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps {
  searchQuery: string;
  selectedCategory: string;
  priceRange: number[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ searchQuery, selectedCategory, priceRange }) => {
  // Traditional children's clothing product data
  const products = [
    {
      id: 1,
      name: "Royal Princess Lehenga",
      price: 2499,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=600&fit=crop&q=80",
      category: "girls-traditional",
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Little Prince Kurta Set",
      price: 1899,
      image: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400&h=600&fit=crop&q=80",
      category: "boys-traditional",
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "Elegant Anarkali Dress",
      price: 2199,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
      category: "girls-traditional",
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: "Traditional Dhoti Kurta",
      price: 1699,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&q=80",
      category: "boys-traditional",
      isNew: false,
      isSale: true
    },
    {
      id: 5,
      name: "Silk Sharara Set",
      price: 2799,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=600&fit=crop&q=80",
      category: "girls-traditional",
      isNew: false,
      isSale: false
    },
    {
      id: 6,
      name: "Festive Nehru Jacket Set",
      price: 1599,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&q=80",
      category: "boys-traditional",
      isNew: true,
      isSale: false
    },
    {
      id: 7,
      name: "Designer Ghagra Choli",
      price: 3199,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&q=80",
      category: "girls-traditional",
      isNew: false,
      isSale: false
    },
    {
      id: 8,
      name: "Royal Sherwani Set",
      price: 2899,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&q=80",
      category: "boys-traditional",
      isNew: true,
      isSale: true
    }
  ];

  // Filter products based on search, category, and price
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {filteredProducts.length} Products Found
        </h2>
        <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
