import React, { useState } from 'react';
import { Card } from './ui/card';

export const MenuCategoryCard = ({ title, image, icon: Icon, featured, tagline, onClick }) => {
  const [imageOk, setImageOk] = useState(Boolean(image));

  return (
    <Card
      className={`bg-[#F5A623] border-none shadow-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
        featured ? 'ring-4 ring-[#F5A623]/60' : ''
      }`}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#141210]">
        {imageOk ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={() => setImageOk(false)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#2A1E12] via-[#141210] to-black">
            {Icon && <Icon className="text-[#F5A623]" size={56} strokeWidth={1.25} />}
            <span className="text-[#F5A623]/70 text-xs uppercase tracking-widest">Photo à venir</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
        {featured && (
          <span className="absolute top-3 left-3 bg-black text-[#F5A623] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
            Notre spécialité
          </span>
        )}
      </div>
      <div className="p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          {Icon && <Icon className="text-black" size={24} />}
          <h3 className="text-2xl font-bold text-black">{title}</h3>
        </div>
        <p className="text-sm text-gray-800">{tagline || 'Cliquez pour voir le menu'}</p>
      </div>
    </Card>
  );
};
