
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Heart, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Luxe Nights
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-purple-600 transition-colors">
              Shop
            </Link>
            <a href="#collections" className="text-gray-700 hover:text-purple-600 transition-colors">
              Collections
            </a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-purple-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-purple-600 transition-colors">
              <Heart size={20} />
            </button>
            <button className="text-gray-700 hover:text-purple-600 transition-colors">
              <User size={20} />
            </button>
            <Link to="/cart" className="text-gray-700 hover:text-purple-600 transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link to="/shop" className="text-gray-700 hover:text-purple-600 transition-colors">
                Shop
              </Link>
              <a href="#collections" className="text-gray-700 hover:text-purple-600 transition-colors">
                Collections
              </a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
