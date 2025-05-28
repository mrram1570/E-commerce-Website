
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
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Bella Couture
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Shop
            </Link>
            <Link to="/collections" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Collections
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-rose-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-rose-600 transition-colors">
              <Heart size={20} />
            </button>
            <Link to="/login" className="text-gray-700 hover:text-rose-600 transition-colors">
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-rose-600 transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-rose-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/login" className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors text-sm font-medium">
                Login
              </Link>
              <Link to="/register" className="border border-rose-600 text-rose-600 px-4 py-2 rounded-lg hover:bg-rose-50 transition-colors text-sm font-medium">
                Register
              </Link>
            </div>

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
              <Link to="/" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
                Home
              </Link>
              <Link to="/shop" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
                Shop
              </Link>
              <Link to="/collections" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
                Collections
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link to="/login" className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors text-sm font-medium text-center">
                  Login
                </Link>
                <Link to="/register" className="border border-rose-600 text-rose-600 px-4 py-2 rounded-lg hover:bg-rose-50 transition-colors text-sm font-medium text-center">
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
