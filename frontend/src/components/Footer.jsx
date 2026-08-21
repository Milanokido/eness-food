import React from 'react';
import { restaurantInfo } from '../data/mockData';
import { Phone, MapPin, Clock } from 'lucide-react';
import { DeliveryLogos } from './DeliveryLogos';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <img
              src={restaurantInfo.logo}
              alt={`${restaurantInfo.name} Logo`}
              className="h-24 md:h-28 w-auto mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              {restaurantInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#F5A623] font-bold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-[#FFC46B] transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-[#FFC46B] transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#info" className="text-gray-400 hover:text-[#FFC46B] transition-colors">
                  Info
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-[#FFC46B] transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#FFC46B] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#F5A623] font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="text-[#FFC46B] flex-shrink-0 mt-1" size={18} />
                <a href={restaurantInfo.phoneLink} className="text-gray-400 hover:text-[#FFC46B] transition-colors">
                  {restaurantInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[#FFC46B] flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">{restaurantInfo.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-[#FFC46B] flex-shrink-0 mt-1" size={18} />
                <div className="text-gray-400">
                  {restaurantInfo.hoursSummary.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          {(restaurantInfo.delivery?.uberEats || restaurantInfo.delivery?.deliveroo) && (
            <div className="mb-6">
              <p className="text-[#F5A623] text-center font-semibold mb-4">Commandez sur :</p>
              <DeliveryLogos variant="footer" />
            </div>
          )}
          <p className="text-gray-400 text-center">
            &copy; {currentYear} {restaurantInfo.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
