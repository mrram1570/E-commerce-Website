
import React, { useState } from 'react';
import Navbar from '@/components/ecommerce/Navbar';
import Footer from '@/components/ecommerce/Footer';
import ProductGrid from '@/components/ecommerce/ProductGrid';
import FilterSidebar from '@/components/ecommerce/FilterSidebar';
import { Search, Filter } from 'lucide-react';

const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 25000]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 via-red-800 to-pink-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Traditional Indian Wear
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Exquisite sarees, lehengas & traditional outfits for the modern Indian woman
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for sarees, lehengas, half sarees..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-black text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md"
            >
              <Filter size={20} />
              Filters
            </button>
          </div>

          {/* Filter Sidebar */}
          <div className={`lg:block ${showFilters ? 'block' : 'hidden'} lg:w-1/4`}>
            <FilterSidebar 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              onClose={() => setShowFilters(false)}
            />
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <ProductGrid 
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              priceRange={priceRange}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
