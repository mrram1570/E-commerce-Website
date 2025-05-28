
import React from 'react';
import Navbar from '@/components/ecommerce/Navbar';
import Footer from '@/components/ecommerce/Footer';
import { Heart, Star, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-900 via-pink-800 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Bella Couture
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Where fashion meets passion, and dreams become reality
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to empower young women through fashion, Bella Couture has been creating stunning dresses that celebrate individuality and confidence since 2020.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that every young woman deserves to feel beautiful, confident, and authentic in what she wears. That's why we carefully curate our collections to offer styles that speak to different personalities and occasions.
              </p>
              <p className="text-lg text-gray-600">
                From casual campus looks to glamorous party outfits, each piece is designed with love and attention to detail, ensuring you always look and feel your best.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=800&fit=crop&q=80"
                alt="Fashion Designer"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-rose-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Passion</h3>
              <p className="text-gray-600">We pour our heart into every design, creating pieces that inspire confidence and joy.</p>
            </div>

            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-rose-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">Premium materials and exceptional craftsmanship in every single piece we create.</p>
            </div>

            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-rose-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Building a supportive community of confident young women who celebrate each other.</p>
            </div>

            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-rose-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">Continuously pushing boundaries to deliver exceptional fashion experiences.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
