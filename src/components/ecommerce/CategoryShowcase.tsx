import React from 'react';
import { Link } from 'react-router-dom';

const CategoryShowcase = () => {
  const categories = [
    {
      id: 'party-dresses',
      name: 'Party Dresses',
      description: 'Stunning dresses for unforgettable nights',
      image: 'https://images.unsplash.com/photo-1566479179817-c0d956be1cb1?w=400&h=600&fit=crop&q=80',
      count: '300+ styles'
    },
    {
      id: 'club-wear',
      name: 'Club Wear',
      description: 'Bold outfits for the dance floor',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=600&fit=crop&q=80',
      count: '200+ designs'
    },
    {
      id: 'modeling-wear',
      name: 'Modeling Wear',
      description: 'Professional runway and photoshoot attire',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop&q=80',
      count: '150+ pieces'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From glamorous party dresses to professional modeling wear - find your perfect look
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 aspect-[3/4] hover:scale-105 transition-transform duration-500"
            >
              <img 
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-sm text-pink-400 mb-2">{category.count}</div>
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="inline-flex items-center text-pink-400 font-semibold group-hover:gap-2 transition-all">
                  Explore Collection
                  <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
