
import React from 'react';
import Navbar from '@/components/ecommerce/Navbar';
import Footer from '@/components/ecommerce/Footer';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Eye } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Bella Couture</h1>
                <p className="text-gray-600">Create your account and start shopping</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                      type="text" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                      type="email" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                      type="password" 
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Create a password"
                    />
                    <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" size={20} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input 
                      type="password" 
                      className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Confirm your password"
                    />
                    <Eye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" size={20} />
                  </div>
                </div>

                <div>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500" />
                    <span className="ml-2 text-sm text-gray-600">
                      I agree to the <a href="#" className="text-rose-600 hover:text-rose-700">Terms & Conditions</a> and <a href="#" className="text-rose-600 hover:text-rose-700">Privacy Policy</a>
                    </span>
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Create Account
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Already have an account? 
                  <Link to="/login" className="text-rose-600 hover:text-rose-700 font-medium ml-1">Sign in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
