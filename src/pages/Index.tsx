
import React from 'react';
import Navbar from '@/components/ecommerce/Navbar';
import Footer from '@/components/ecommerce/Footer';
import HeroSection from '@/components/ecommerce/HeroSection';
import FeaturedProducts from '@/components/ecommerce/FeaturedProducts';
import CategoryShowcase from '@/components/ecommerce/CategoryShowcase';
import Newsletter from '@/components/ecommerce/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CategoryShowcase />
        <FeaturedProducts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
