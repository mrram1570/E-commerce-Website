
import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = [
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
      name: "Bridal Lehenga Set",
      price: 12999,
      originalPrice: 18999,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400",
      category: "lehengas",
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
            Handpicked traditional wear that defines timeless Indian elegance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
