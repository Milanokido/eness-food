import React from 'react';
import { restaurantInfo } from '../data/mockData';

// Deposer les logos dans frontend/public/delivery/ pour un rendu avec images.
const PLATFORMS = [
  { key: 'uberEats', label: 'Uber Eats', image: '/delivery/ubereats.png' },
  { key: 'deliveroo', label: 'Deliveroo', image: '/delivery/deliveroo.png' }
];

export const DeliveryLogos = ({ variant = 'default' }) => {
  const active = PLATFORMS.filter((p) => restaurantInfo.delivery?.[p.key]);

  if (active.length === 0) return null;

  const containerClass =
    variant === 'hero'
      ? 'flex flex-wrap items-center justify-center gap-8 my-8'
      : variant === 'footer'
      ? 'flex flex-wrap items-center justify-center gap-8'
      : 'flex flex-wrap items-center justify-center gap-8 my-6';

  return (
    <div className={containerClass}>
      {active.map((platform) => (
        <a
          key={platform.key}
          href={restaurantInfo.delivery[platform.key]}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative transition-all duration-300 hover:transform hover:scale-105"
          aria-label={`Commander sur ${platform.label}`}
        >
          <div className="relative rounded-xl px-6 py-4 border-2 border-[#F5A623]/40 shadow-lg group-hover:border-[#F5A623] group-hover:shadow-2xl transition-all duration-300">
            <img
              src={platform.image}
              alt={platform.label}
              className="h-12 md:h-14 w-auto relative z-10"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextSibling.style.display = 'block';
              }}
            />
            <span className="hidden text-white font-bold text-lg relative z-10">
              {platform.label}
            </span>
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </a>
      ))}
    </div>
  );
};
