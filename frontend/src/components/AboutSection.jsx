import React from 'react';
import { aboutText } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Flame, Truck, Clock, ChefHat, Award, MapPin } from 'lucide-react';

const iconMap = {
  flame: Flame,
  delivery: Truck,
  clock: Clock,
  chef: ChefHat,
  halal: Award,
  location: MapPin
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold text-[#F5A623] mb-4"
            style={{ fontFamily: "'Crimson Text', 'Times New Roman', serif" }}
          >
            {aboutText.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutText.cards.map((card, idx) => {
            const Icon = iconMap[card.icon] || Flame;
            return (
              <Card key={idx} className="bg-[#F5A623] backdrop-blur-sm border-none shadow-xl">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="bg-black p-4 rounded-full">
                      <Icon className="text-[#F5A623]" size={32} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-black text-center">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-800 text-center leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
