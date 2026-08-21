import React from 'react';
import { restaurantInfo } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Phone, MapPin, Clock } from 'lucide-react';
import { DeliveryLogos } from './DeliveryLogos';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold text-[#F5A623] mb-4"
            style={{ fontFamily: "'Crimson Text', 'Times New Roman', serif" }}
          >
            Contactez-Nous
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Nous sommes à votre disposition pour toute question
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-[#F5A623] backdrop-blur-sm border-none shadow-xl text-center">
            <CardHeader>
              <div className="flex justify-center mb-3">
                <div className="bg-black p-4 rounded-full">
                  <Phone className="text-white" size={28} />
                </div>
              </div>
              <CardTitle className="text-xl text-black">Téléphone</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href={restaurantInfo.phoneLink}
                className="text-lg text-gray-800 hover:text-black font-semibold transition-colors"
              >
                {restaurantInfo.phoneDisplay}
              </a>
            </CardContent>
          </Card>

          <Card className="bg-[#F5A623] backdrop-blur-sm border-none shadow-xl text-center">
            <CardHeader>
              <div className="flex justify-center mb-3">
                <div className="bg-black p-4 rounded-full">
                  <MapPin className="text-white" size={28} />
                </div>
              </div>
              <CardTitle className="text-xl text-black">Adresse</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800">{restaurantInfo.address}</p>
            </CardContent>
          </Card>

          <Card className="bg-[#F5A623] backdrop-blur-sm border-none shadow-xl text-center">
            <CardHeader>
              <div className="flex justify-center mb-3">
                <div className="bg-black p-4 rounded-full">
                  <Clock className="text-white" size={28} />
                </div>
              </div>
              <CardTitle className="text-xl text-black">Horaires</CardTitle>
            </CardHeader>
            <CardContent>
              {restaurantInfo.hoursSummary.map((line, i) => (
                <p key={i} className="text-gray-800">{line}</p>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={restaurantInfo.phoneLink}
            className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-black px-8 py-4 rounded-md font-bold text-lg hover:bg-[#FFB84D] transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-xl"
          >
            <Phone size={20} />
            Appeler maintenant
          </a>
          <a
            href={restaurantInfo.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-900 transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-xl"
          >
            <MapPin size={20} />
            Obtenir l'itinéraire
          </a>
        </div>

        {/* Delivery Services */}
        {(restaurantInfo.delivery?.uberEats || restaurantInfo.delivery?.deliveroo) && (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#F5A623] mb-4">Commandez en ligne</h3>
            <DeliveryLogos variant="contact" />
          </div>
        )}
      </div>
    </section>
  );
};
