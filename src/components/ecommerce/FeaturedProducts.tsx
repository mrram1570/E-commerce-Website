import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Sequin Bodycon Dress",
      price: 2499,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=400&h=600&fit=crop",
      category: "party-dresses",
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Glamour Night Gown",
      price: 4999,
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=600&fit=crop",
      category: "party-dresses",
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "Club Mesh Dress",
      price: 1899,
      image: "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=400&h=600&fit=crop",
      category: "club-wear",
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: "Runway Model Dress",
      price: 6999,
      originalPrice: 9999,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop",
      category: "modeling-wear",
      isNew: false,
      isSale: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked designer dresses that define modern elegance and confidence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
