
import React from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps {
  searchQuery: string;
  selectedCategory: string;
  priceRange: number[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ searchQuery, selectedCategory, priceRange }) => {
  // Modern women's party and modeling wear product data
  const products = [
    {
      id: 1,
      name: "Sequin Bodycon Dress",
      price: 2499,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop&q=80",
      category: "party-dresses",
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Glamour Night Gown",
      price: 4999,
      image: "https://images.unsplash.com/photo-1566479179817-c0d956be1cb1?w=400&h=600&fit=crop&q=80",
      category: "party-dresses",
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "Club Mesh Dress",
      price: 1899,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=600&fit=crop&q=80",
      category: "club-wear",
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: "Metallic Mini Dress",
      price: 3299,
      image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400&h=600&fit=crop&q=80",
      category: "club-wear",
      isNew: false,
      isSale: false
    },
    {
      id: 5,
      name: "Runway Model Dress",
      price: 6999,
      originalPrice: 9999,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop&q=80",
      category: "modeling-wear",
      isNew: false,
      isSale: true
    },
    {
      id: 6,
      name: "Cocktail Elegance",
      price: 2199,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop&q=80",
      category: "party-dresses",
      isNew: true,
      isSale: false
    },
    {
      id: 7,
      name: "Velvet Party Dress",
      price: 3799,
      image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400&h=600&fit=crop&q=80",
      category: "party-dresses",
      isNew: false,
      isSale: false
    },
    {
      id: 8,
      name: "Professional Photoshoot Dress",
      price: 5599,
      originalPrice: 7999,
      image: "https://images.unsplash.com/photo-1594736797933-d0c62bee7cd4?w=400&h=600&fit=crop&q=80",
      category: "modeling-wear",
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
        <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500">
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
