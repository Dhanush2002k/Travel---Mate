import React from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Cart({ isOpen, onClose }: CartProps) {
  const { state, dispatch } = useCart();

  if (!isOpen) return null;

  const calculateTotal = () => {
    return state.items.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="bg-white w-full max-w-md h-full">
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <ShoppingCart className="h-6 w-6 text-emerald-600 mr-2" />
              <h2 className="text-xl font-bold">Your Cart</h2>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {state.items.length === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={`${item.type}-${item.id}`} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.price}</p>
                      {item.date && (
                        <p className="text-sm text-gray-600">Date: {item.date}</p>
                      )}
                    </div>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {state.items.length > 0 && (
            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center border-t pt-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-xl">${calculateTotal().toFixed(2)}</span>
              </div>
              <button
                onClick={() => alert('Proceeding to checkout...')}
                className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}