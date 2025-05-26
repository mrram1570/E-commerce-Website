
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/ecommerce/Navbar';
import Footer from '@/components/ecommerce/Footer';
import { Heart, Star, ShoppingBag, Truck, Shield, RefreshCw } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Maroon');
  const [quantity, setQuantity] = useState(1);

  // Sample traditional wear product data
  const product = {
    id: 1,
    name: "Banarasi Silk Saree",
    price: 4999,
    originalPrice: 7999,
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600",
      "https://images.unsplash.com/photo-1594736797933-d0c62bee7cd4?w=600"
    ],
    description: "Embrace timeless elegance with this exquisite Banarasi silk saree. Handwoven with intricate zari work and traditional motifs, this saree is perfect for weddings, festivals, and special occasions. The rich silk fabric drapes beautifully and the golden border adds a touch of royal grandeur.",
    features: [
      "100% Pure Banarasi Silk",
      "Handwoven with traditional zari work",
      "Intricate gold thread border",
      "Comes with matching blouse piece",
      "Dry clean only for best care"
    ],
    sizes: ['Free Size'],
    colors: ['Maroon', 'Navy Blue', 'Emerald Green', 'Royal Purple'],
    inStock: true,
    fabric: "Pure Banarasi Silk",
    work: "Zari Weaving",
    occasion: "Wedding, Festival"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden bg-white cursor-pointer hover:opacity-80 transition-opacity">
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                  37% OFF
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 p-4 bg-orange-50 rounded-lg">
              <div>
                <span className="font-semibold text-gray-700">Fabric:</span>
                <p className="text-gray-600">{product.fabric}</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Work:</span>
                <p className="text-gray-600">{product.work}</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Occasion:</span>
                <p className="text-gray-600">{product.occasion}</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Care:</span>
                <p className="text-gray-600">Dry Clean Only</p>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Color: {selectedColor}</h3>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                      selectedColor === color
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <ShoppingBag size={20} />
                Add to Cart - ₹{product.price * quantity}
              </button>
              
              <button className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-600 transition-colors flex items-center justify-center gap-2">
                <Heart size={20} />
                Add to Wishlist
              </button>
            </div>

            {/* Features */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Truck className="text-orange-600" size={20} />
                <span className="text-gray-700">Free shipping on orders over ₹2000</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="text-orange-600" size={20} />
                <span className="text-gray-700">7-day easy returns</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-orange-600" size={20} />
                <span className="text-gray-700">Secure payment guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
