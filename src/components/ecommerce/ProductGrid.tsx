
import React from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps {
  searchQuery: string;
  selectedCategory: string;
  priceRange: number[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ searchQuery, selectedCategory, priceRange }) => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Midnight Glamour Dress",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400",
      category: "dresses",
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Sequin Party Dress",
      price: 249,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      category: "dresses",
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "Velvet Bodycon Dress",
      price: 189,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400",
      category: "dresses",
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: "Gold Statement Earrings",
      price: 89,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400",
      category: "accessories",
      isNew: false,
      isSale: false
    },
    {
      id: 5,
      name: "Crystal Clutch Bag",
      price: 159,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      category: "accessories",
      isNew: false,
      isSale: true
    },
    {
      id: 6,
      name: "Stiletto Heels",
      price: 129,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400",
      category: "shoes",
      isNew: true,
      isSale: false
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
        <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
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
