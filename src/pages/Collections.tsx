
import React from 'react';
import Navbar from '@/components/ecommerce/Navbar';
import Footer from '@/components/ecommerce/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Collections = () => {
  const collections = [
    {
      id: 'casual-chic',
      name: 'Casual Chic',
      description: 'Effortlessly stylish everyday dresses perfect for college, brunch, and casual outings',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      itemCount: '120+ pieces',
      priceRange: '₹1,999 - ₹4,999'
    },
    {
      id: 'party-glam',
      name: 'Party Glam',
      description: 'Stunning party dresses and cocktail wear for celebrations and special occasions',
      image: 'https://images.unsplash.com/photo-1566174532277-11ac25c40271?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      itemCount: '80+ designs',
      priceRange: '₹3,499 - ₹8,999'
    },
    {
      id: 'date-night',
      name: 'Date Night',
      description: 'Romantic and elegant dresses perfect for dinner dates and intimate evenings',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      itemCount: '95+ pieces',
      priceRange: '₹2,799 - ₹6,999'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-900 via-pink-800 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <Star className="text-rose-300" size={16} />
              <span className="text-sm font-medium">Curated Collections</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Fashion Collections
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Discover carefully curated collections designed for every moment of your life
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div key={collection.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm opacity-90">{collection.itemCount}</div>
                    <div className="text-sm opacity-90">{collection.priceRange}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{collection.name}</h3>
                  <p className="text-gray-600 mb-6">{collection.description}</p>
                  
                  <Link 
                    to={`/shop?category=${collection.id}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Shop Collection
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;
