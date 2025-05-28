
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Floral Summer Midi Dress",
      price: 2499,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "casual-chic",
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Elegant Cocktail Dress",
      price: 3899,
      image: "https://images.unsplash.com/photo-1566174532277-11ac25c40271?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "party-glam",
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "Romantic Lace Evening Dress",
      price: 4199,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "date-night",
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: "Chic Wrap Dress",
      price: 2799,
      originalPrice: 3899,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "casual-chic",
      isNew: false,
      isSale: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">✨ Featured Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trending Now
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the hottest fashion trends loved by young women worldwide. Each piece is carefully curated for style, comfort, and elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/shop"
            className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
          >
            View All Collections
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
