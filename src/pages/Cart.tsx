
import React, { useState } from 'react';
import Navbar from '@/components/ecommerce/Navbar';
import Footer from '@/components/ecommerce/Footer';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Midnight Glamour Dress",
      price: 299,
      quantity: 1,
      size: "M",
      color: "Black",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200"
    },
    {
      id: 2,
      name: "Crystal Clutch Bag",
      price: 159,
      quantity: 1,
      size: "One Size",
      color: "Gold",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 200 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto text-gray-400 mb-4" size={64} />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some items to get started</p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img 
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-24 h-24 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                      <div className="text-sm text-gray-600 mb-2">
                        <span>Size: {item.size}</span> • <span>Color: {item.color}</span>
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        ${item.price}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg p-6 shadow-sm h-fit">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {shipping > 0 && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-purple-700">
                    Add ${(200 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mb-4">
                Proceed to Checkout <ArrowRight size={20} />
              </button>

              <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
