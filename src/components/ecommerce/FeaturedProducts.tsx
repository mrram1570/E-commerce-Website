
import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Floral Summer Midi Dress",
      price: 2499,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop&q=80",
      category: "casual-chic",
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Elegant Cocktail Dress",
      price: 3899,
      image: "https://images.unsplash.com/photo-1566174532-277ad2705d62?w=400&h=600&fit=crop&q=80",
      category: "party-glam",
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "Romantic Lace Evening Dress",
      price: 4199,
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=600&fit=crop&q=80",
      category: "date-night",
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: "Chic Wrap Dress",
      price: 2799,
      originalPrice: 3899,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop&q=80",
      category: "casual-chic",
      isNew: false,
      isSale: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trending Now
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the hottest fashion trends loved by young women worldwide
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
