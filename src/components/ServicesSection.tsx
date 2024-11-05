import React from 'react';
import { ServiceCard } from './ServiceCard';
import { hotels, restaurants, transport } from '../data/services';

interface ServicesSectionProps {
  title: string;
  type: 'hotel' | 'restaurant' | 'transport';
  data: typeof hotels | typeof restaurants | typeof transport;
}

export function ServicesSection({ title, type, data }: ServicesSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((item) => (
          <ServiceCard
            key={item.id}
            {...item}
            onClick={() => alert(`Booking ${item.name}`)}
          />
        ))}
      </div>
    </div>
  );
}