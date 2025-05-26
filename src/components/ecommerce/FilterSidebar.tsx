
import React from 'react';
import { X } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

interface FilterSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  onClose
}) => {
  const categories = [
    { id: 'all', name: 'All Products', count: 156 },
    { id: 'party-dresses', name: 'Party Dresses', count: 89 },
    { id: 'club-wear', name: 'Club Wear', count: 34 },
    { id: 'modeling-wear', name: 'Modeling Wear', count: 23 },
    { id: 'cocktail', name: 'Cocktail Dresses', count: 10 }
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Black', color: '#000000' },
    { name: 'White', color: '#FFFFFF' },
    { name: 'Red', color: '#EF4444' },
    { name: 'Purple', color: '#8B5CF6' },
    { name: 'Pink', color: '#EC4899' },
    { name: 'Gold', color: '#F59E0B' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6 lg:hidden">
        <h3 className="text-lg font-semibold">Filters</h3>
        <button onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-pink-100 text-pink-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className="flex justify-between items-center">
                <span>{category.name}</span>
                <span className="text-sm text-gray-400">({category.count})</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 mb-4">Price Range</h4>
        <div className="px-2">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={10000}
            min={0}
            step={100}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 mb-4">Sizes</h4>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map(size => (
            <button
              key={size}
              className="border border-gray-300 rounded-lg py-2 text-center text-sm hover:border-pink-500 hover:text-pink-600 transition-colors"
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-900 mb-4">Colors</h4>
        <div className="grid grid-cols-3 gap-3">
          {colors.map(color => (
            <button
              key={color.name}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <div 
                className="w-5 h-5 rounded-full border border-gray-300"
                style={{ backgroundColor: color.color }}
              />
              {color.name}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors">
        Clear All Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
