
import React from 'react';
import ProductCard from './ProductCard';

interface ProductGridProps {
  searchQuery: string;
  selectedCategory: string;
  priceRange: number[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ searchQuery, selectedCategory, priceRange }) => {
  // Traditional wear product data
  const products = [
    {
      id: 1,
      name: "Banarasi Silk Saree",
      price: 4999,
      originalPrice: 7999,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
      category: "sarees",
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Kanjeevaram Wedding Saree",
      price: 8999,
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400",
      category: "sarees",
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "Designer Half Saree",
      price: 3499,
      image: "https://images.unsplash.com/photo-1594736797933-d0c62bee7cd4?w=400",
      category: "half-sarees",
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: "Georgette Party Saree",
      price: 2899,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
      category: "sarees",
      isNew: false,
      isSale: false
    },
    {
      id: 5,
      name: "Bridal Lehenga Set",
      price: 12999,
      originalPrice: 18999,
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400",
      category: "lehengas",
      isNew: false,
      isSale: true
    },
    {
      id: 6,
      name: "Cotton Handloom Saree",
      price: 1299,
      image: "https://images.unsplash.com/photo-1594736797933-d0c62bee7cd4?w=400",
      category: "sarees",
      isNew: true,
      isSale: false
    },
    {
      id: 7,
      name: "Chanderi Silk Saree",
      price: 3799,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
      category: "sarees",
      isNew: false,
      isSale: false
    },
    {
      id: 8,
      name: "Pattu Half Saree",
      price: 4599,
      originalPrice: 6999,
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400",
      category: "half-sarees",
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
