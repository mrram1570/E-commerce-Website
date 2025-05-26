
import React, { useState } from 'react';
import { Mail, Gift } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-orange-900 via-red-800 to-pink-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Gift className="text-orange-400" size={32} />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Heritage Circle
          </h2>
          
          <p className="text-xl mb-8 text-gray-200">
            Get exclusive access to new traditional collections, festival offers, and styling tips. 
            Plus, enjoy 20% off your first saree purchase!
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-orange-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-300 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
