
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-900 via-pink-800 to-purple-700">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Star className="text-pink-300 opacity-60" size={24} />
        </div>
        <div className="absolute top-40 right-20 animate-bounce">
          <Sparkles className="text-rose-300 opacity-50" size={20} />
        </div>
        <div className="absolute bottom-32 left-1/4 animate-pulse">
          <Star className="text-purple-300 opacity-40" size={16} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-rose-400" size={24} />
              <span className="text-rose-400 font-medium tracking-wide">Premium Fashion Collection</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400">
                Perfect Style
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Exquisite fashion collection designed exclusively for young women aged 15-22. From casual elegance to glamorous party dresses that make every moment unforgettable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                to="/shop"
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Explore Collection 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="/collections"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-rose-900 transition-all duration-300"
              >
                View Lookbook
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400">500+</div>
                <div className="text-gray-300">Designer Styles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400">Free</div>
                <div className="text-gray-300">Global Shipping</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400">24/7</div>
                <div className="text-gray-300">Style Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[600px] rounded-3xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=800&fit=crop&q=80" 
                alt="Elegant Fashion Model"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30 animate-float">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">50%</div>
                <div className="text-sm">OFF</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-4 text-white animate-bounce">
              <div className="text-center">
                <div className="text-lg font-bold">New</div>
                <div className="text-xs">Arrivals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
