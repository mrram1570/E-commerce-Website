
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryShowcase = () => {
  const categories = [
    {
      id: 'dresses',
      name: 'Party Dresses',
      description: 'Stunning gowns for every occasion',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
      count: '89 styles'
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Complete your look',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400',
      count: '34 pieces'
    },
    {
      id: 'shoes',
      name: 'Statement Heels',
      description: 'Step into confidence',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400',
      count: '23 pairs'
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
            Curated collections designed to elevate your nightlife wardrobe
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
