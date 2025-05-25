
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/ecommerce/Navbar';
import Footer from '@/components/ecommerce/Footer';
import { Heart, Star, ShoppingBag, Truck, Shield, RefreshCw } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);

  // Sample product data
  const product = {
    id: 1,
    name: "Midnight Glamour Dress",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600"
    ],
    description: "Elevate your evening look with this stunning midnight glamour dress. Crafted from premium materials with intricate detailing, this dress is perfect for cocktail parties, dinner dates, or any special occasion where you want to make a statement.",
    features: [
      "Premium quality fabric blend",
      "Intricate beadwork and sequin details",
      "Flattering silhouette for all body types",
      "Invisible back zipper",
      "Fully lined for comfort"
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Burgundy'],
    inStock: true
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
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                  25% OFF
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

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
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Size: {selectedSize}</h3>
              <div className="grid grid-cols-5 gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-lg border-2 text-center transition-colors ${
                      selectedSize === size
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
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
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <ShoppingBag size={20} />
                Add to Cart - ${product.price * quantity}
              </button>
              
              <button className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-lg font-semibold hover:border-purple-500 hover:text-purple-600 transition-colors flex items-center justify-center gap-2">
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
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Info */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <Truck className="text-purple-600" size={20} />
                <span className="text-gray-700">Free shipping on orders over $200</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="text-purple-600" size={20} />
                <span className="text-gray-700">30-day easy returns</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-purple-600" size={20} />
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
