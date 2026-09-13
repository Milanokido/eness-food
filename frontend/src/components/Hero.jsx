import React from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import { restaurantInfo } from '../data/mockData';
import { Badge } from './ui/badge';
import { DeliveryLogos } from './DeliveryLogos';

export const Hero = () => {
  const scrollToMenu = (e) => {
    e.preventDefault();
    const menuSection = document.querySelector('#menu');
    if (menuSection) {
      const offset = 80;
      const elementPosition = menuSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${restaurantInfo.heroBackground})`
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/85"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <img
            src={restaurantInfo.logo}
            alt={`${restaurantInfo.name} Logo`}
            className="w-[42%] h-auto"
          />
        </div>

        {/* Main Title */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 break-words"
          style={{ fontFamily: "'Crimson Text', 'Times New Roman', serif" }}
        >
          {restaurantInfo.name}{restaurantInfo.location ? ` – ${restaurantInfo.location}` : ""}
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          {restaurantInfo.tagline}
        </p>

        {/* Badges */}
        <div className="flex justify-center gap-3 mb-10">
          {restaurantInfo.badges.map((badge, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-[#FFC46B] text-black text-sm px-4 py-1.5 font-semibold"
            >
              {badge}
            </Badge>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={restaurantInfo.phoneLink}
            className="inline-flex items-center gap-2 bg-[#F5A623] text-black px-8 py-4 rounded-md font-bold text-lg hover:bg-[#FFB84D] transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-2xl w-full sm:w-auto justify-center"
          >
            <Phone size={20} />
            Appeler maintenant
          </a>
          <a
            href="#menu"
            onClick={scrollToMenu}
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-black transition-all duration-200 hover:transform hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            Voir le menu
          </a>
        </div>

        {/* Delivery Logos */}
        {(restaurantInfo.delivery?.uberEats || restaurantInfo.delivery?.deliveroo) && (
          <div className="mb-8">
            <p className="text-white text-center mb-4 font-semibold">Commandez en ligne :</p>
            <DeliveryLogos variant="hero" />
          </div>
        )}

        {/* Quick Info */}
        <div className="text-white space-y-2">
          <p className="text-lg font-medium">
            <a href={restaurantInfo.phoneLink} className="hover:text-[#FFC46B] transition-colors">
              {restaurantInfo.phoneDisplay}
            </a>
          </p>
          <p className="text-sm text-gray-300">
            {restaurantInfo.hoursSummary.join(' | ')}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white" size={32} />
      </div>
    </section>
  );
};
