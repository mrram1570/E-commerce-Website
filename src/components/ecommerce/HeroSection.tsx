
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-red-800">
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-pink-400" size={24} />
              <span className="text-pink-400 font-medium">New Collection</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Unleash Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Night Magic
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Discover sophisticated party wear that transforms every night into an unforgettable experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                to="/shop"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Shop Now <ArrowRight size={20} />
              </Link>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300">
                View Lookbook
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-pink-400">500+</div>
                <div className="text-gray-300">Premium Styles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400">24/7</div>
                <div className="text-gray-300">Customer Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400">Free</div>
                <div className="text-gray-300">Worldwide Shipping</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[600px] rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600" 
                alt="Fashion Model"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">40%</div>
                <div className="text-sm">OFF</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
