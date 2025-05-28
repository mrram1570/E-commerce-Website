
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
    { id: 'girls-traditional', name: 'Girls Traditional', count: 89 },
    { id: 'boys-traditional', name: 'Boys Traditional', count: 54 },
    { id: 'festive-wear', name: 'Festive Collection', count: 23 }
  ];

  const sizes = ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y', '12-13Y'];
  const colors = [
    { name: 'Red', color: '#EF4444' },
    { name: 'Gold', color: '#F59E0B' },
    { name: 'Blue', color: '#3B82F6' },
    { name: 'Pink', color: '#EC4899' },
    { name: 'Green', color: '#10B981' },
    { name: 'Orange', color: '#F97316' }
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
                  ? 'bg-orange-100 text-orange-700'
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
            max={5000}
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
        <h4 className="font-semibold text-gray-900 mb-4">Age Groups</h4>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map(size => (
            <button
              key={size}
              className="border border-gray-300 rounded-lg py-2 text-center text-sm hover:border-orange-500 hover:text-orange-600 transition-colors"
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
