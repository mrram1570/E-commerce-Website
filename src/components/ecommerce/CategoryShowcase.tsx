
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryShowcase = () => {
  const categories = [
    {
      id: 'girls-traditional',
      name: 'Girls Traditional',
      description: 'Beautiful lehengas, anarkalis and ethnic wear for little princesses',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=600&fit=crop&q=80',
      count: '150+ styles'
    },
    {
      id: 'boys-traditional',
      name: 'Boys Traditional',
      description: 'Elegant kurtas, dhotis and ethnic sets for young gentlemen',
      image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400&h=600&fit=crop&q=80',
      count: '120+ designs'
    },
    {
      id: 'festive-wear',
      name: 'Festive Collection',
      description: 'Special occasion wear for all celebrations and festivals',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80',
      count: '80+ pieces'
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
            From traditional lehengas to ethnic kurtas - discover authentic Indian wear for children
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
                <div className="text-sm text-orange-400 mb-2">{category.count}</div>
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="inline-flex items-center text-orange-400 font-semibold group-hover:gap-2 transition-all">
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
