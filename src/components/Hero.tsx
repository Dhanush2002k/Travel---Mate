import React from 'react';

export function Hero() {
  return (
    <div className="relative h-[70vh] bg-gray-900">
      <img
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
        alt="Travel Hero"
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-5xl font-bold mb-6">Discover Your Next Adventure</h1>
          <p className="text-xl mb-8">
            Explore breathtaking destinations and create unforgettable memories with our curated tours
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              Explore Tours
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}