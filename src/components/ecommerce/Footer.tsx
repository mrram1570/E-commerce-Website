
import React from 'react';
import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Luxe Nights
            </h3>
            <p className="text-gray-400 mb-4">
              Elevating your nightlife with sophisticated fashion that makes every moment unforgettable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">New Arrivals</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Best Sellers</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Sale</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Size Guide</a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact Us</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Shipping Info</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Returns</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-gray-400">info@luxenights.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-gray-400">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Luxe Nights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
