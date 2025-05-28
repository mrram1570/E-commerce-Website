
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryShowcase = () => {
  const categories = [
    {
      id: 'casual-chic',
      name: 'Casual Chic',
      description: 'Comfortable yet stylish everyday dresses perfect for college and casual outings',
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop&q=80',
      count: '120+ styles'
    },
    {
      id: 'party-glam',
      name: 'Party Glam',
      description: 'Stunning party dresses and cocktail wear for special occasions',
      image: 'https://images.unsplash.com/photo-1566174532-277ad2705d62?w=400&h=600&fit=crop&q=80',
      count: '80+ designs'
    },
    {
      id: 'date-night',
      name: 'Date Night',
      description: 'Romantic and elegant dresses perfect for dinner dates and romantic evenings',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=600&fit=crop&q=80',
      count: '95+ pieces'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shop by Style
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From casual campus looks to glamorous party outfits - find your perfect style for every occasion
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
