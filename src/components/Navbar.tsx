import React, { useState } from 'react';
import { Compass, ShoppingCart } from 'lucide-react';
import { Cart } from './Cart';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { state } = useCart();

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Compass className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Wanderlust</span>
            </div>
            <div className="hidden sm:flex items-center space-x-8">
              <a href="#tours" className="text-gray-600 hover:text-gray-900">Tours</a>
              <a href="#hotels" className="text-gray-600 hover:text-gray-900">Hotels</a>
              <a href="#restaurants" className="text-gray-600 hover:text-gray-900">Restaurants</a>
              <a href="#transport" className="text-gray-600 hover:text-gray-900">Transport</a>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2"
              >
                <ShoppingCart className="h-6 w-6 text-gray-600" />
                {state.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {state.items.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}