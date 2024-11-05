import React, { useState } from 'react';
import { Star, MapPin } from 'lucide-react';
import { BookingModal } from './BookingModal';

interface ServiceCardProps {
  id: number;
  name: string;
  type: 'hotel' | 'restaurant' | 'transport';
  location: string;
  rating: number;
  price: string;
  image: string;
  description: string;
}

export function ServiceCard({
  id,
  name,
  type,
  location,
  rating,
  price,
  image,
  description,
}: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer"
      >
        <div className="relative h-48">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-emerald-600">
            {price}
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </div>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{location}</span>
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={{ id, type, name, price }}
      />
    </>
  );
}