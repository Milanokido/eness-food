import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { menuCategories } from '../data/mockData';
import { getMenuIcon } from '../lib/menuIcons';

const ItemRow = ({ item }) => (
  <div className="flex justify-between items-start p-3 md:p-4 bg-white/50 rounded-lg hover:bg-white/70 transition-all duration-200">
    <div className="flex-1 min-w-0 pr-2">
      <div className="flex flex-wrap items-center gap-1 md:gap-2">
        <h4 className="font-bold text-base md:text-lg text-black">{item.name}</h4>
        {item.featured && <Badge className="bg-black text-white text-xs">Signature</Badge>}
      </div>
      {item.description && (
        <p className="text-xs md:text-sm text-gray-700 mt-1">{item.description}</p>
      )}
    </div>
    <span className="font-bold text-black whitespace-nowrap text-sm md:text-base">{item.price}</span>
  </div>
);

const GridRow = ({ item }) => (
  <div className="flex justify-between items-center gap-3 p-3 bg-white/50 rounded-lg hover:bg-white/70 transition-all duration-200">
    <span className="font-semibold text-black text-sm md:text-base">{item.name}</span>
    <span className="font-bold text-black whitespace-nowrap text-sm md:text-base">{item.price}</span>
  </div>
);

const Section = ({ section }) => (
  <Card className="bg-[#F5A623] backdrop-blur-sm border-none shadow-lg">
    <CardHeader className="p-4 md:p-6">
      <CardTitle className="text-xl md:text-2xl font-bold text-black">{section.subtitle}</CardTitle>
      {section.note && (
        <div className="mt-3 p-3 bg-black/10 rounded-lg">
          <p className="text-xs md:text-sm font-bold text-black">{section.note}</p>
        </div>
      )}
    </CardHeader>
    <CardContent className="p-4 md:p-6 pt-0">
      {section.layout === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
          {section.items.map((item, idx) => (
            <GridRow key={idx} item={item} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {section.items.map((item, idx) => (
            <ItemRow key={idx} item={item} />
          ))}
        </div>
      )}
    </CardContent>
  </Card>
);

export const MenuModal = ({ isOpen, onClose, initialCategory }) => {
  const [activeId, setActiveId] = useState(initialCategory || menuCategories[0].id);

  useEffect(() => {
    if (isOpen && initialCategory) setActiveId(initialCategory);
  }, [isOpen, initialCategory]);

  const active = menuCategories.find((c) => c.id === activeId) || menuCategories[0];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-6xl h-[90vh] md:h-auto md:max-h-[90vh] overflow-hidden bg-[#1A1A1A] border-[#F5A623] p-0 flex flex-col">
        <DialogHeader className="border-b border-[#F5A623]/30 bg-black/50 p-4 md:p-6 flex-shrink-0">
          <div className="flex items-start justify-between mb-4 gap-4">
            <div className="min-w-0">
              <DialogTitle className="text-2xl md:text-3xl font-bold text-[#F5A623] text-left">
                {active.title}
              </DialogTitle>
              {active.tagline && (
                <p className="text-sm text-gray-400 mt-1 text-left">{active.tagline}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-[#F5A623] hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full flex-shrink-0"
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>
          </div>

          <div
            className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {menuCategories.map((cat) => {
              const Icon = getMenuIcon(cat.icon);
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveId(cat.id)}
                  className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all duration-200 text-sm md:text-base flex-shrink-0 ${
                    activeId === cat.id
                      ? 'bg-[#F5A623] text-black'
                      : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <Icon size={16} className="md:w-[18px] md:h-[18px]" />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </DialogHeader>

        <div
          className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-6 space-y-6 md:space-y-8"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {active.sections.map((section, idx) => (
            <Section key={idx} section={section} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
