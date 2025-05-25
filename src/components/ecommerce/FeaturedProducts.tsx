
import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Midnight Glamour Dress",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400",
      category: "dresses",
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Sequin Party Dress",
      price: 249,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      category: "dresses",
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: "Velvet Bodycon Dress",
      price: 189,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400",
      category: "dresses",
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: "Crystal Clutch Bag",
      price: 159,
      originalPrice: 199,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      category: "accessories",
      isNew: false,
      isSale: true
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked pieces that define sophistication and style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
