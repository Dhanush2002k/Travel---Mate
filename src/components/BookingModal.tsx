import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: number;
    type: 'hotel' | 'restaurant' | 'transport';
    name: string;
    price: string;
  };
}

export function BookingModal({ isOpen, onClose, item }: BookingModalProps) {
  const [date, setDate] = useState('');
  const { dispatch } = useCart();

  if (!isOpen) return null;

  const handleBooking = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...item,
        quantity: 1,
        date,
      },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Book {item.name}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleBooking}
            className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}