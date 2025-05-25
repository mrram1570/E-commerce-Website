
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew: boolean;
  isSale: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              New
            </span>
          )}
          {product.isSale && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Sale
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Heart size={16} className="text-gray-600" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <ShoppingBag size={16} className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
