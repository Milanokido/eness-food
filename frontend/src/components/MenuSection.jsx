import React, { useState } from 'react';
import { MenuCategoryCard } from './MenuCategoryCard';
import { MenuModal } from './MenuModal';
import { menuCategories } from '../data/mockData';
import { getMenuIcon } from '../lib/menuIcons';

export const MenuSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0].id);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsModalOpen(true);
  };

  return (
    <section id="menu" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold text-[#F5A623] mb-4"
            style={{ fontFamily: "'Crimson Text', 'Times New Roman', serif" }}
          >
            Notre Menu
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Cliquez sur une catégorie pour découvrir nos spécialités
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category) => (
            <MenuCategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              icon={getMenuIcon(category.icon)}
              featured={category.featured}
              tagline={category.tagline}
              onClick={() => handleCategoryClick(category.id)}
            />
          ))}
        </div>

        <MenuModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          initialCategory={selectedCategory}
        />
      </div>
    </section>
  );
};
