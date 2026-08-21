import React from 'react';
import { galleryImages } from '../data/mockData';

export const GallerySection = () => {
  if (!galleryImages || galleryImages.length === 0) return null;

  return (
    <section id="gallery" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold text-[#F5A623] mb-4"
            style={{ fontFamily: "'Crimson Text', 'Times New Roman', serif" }}
          >
            Notre Galerie
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Decouvrez nos delicieuses creations culinaires
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-xl aspect-square cursor-pointer transition-all duration-300 hover:transform hover:scale-105"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white text-2xl font-bold mb-1">{image.category}</h3>
                  <p className="text-gray-300 text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
