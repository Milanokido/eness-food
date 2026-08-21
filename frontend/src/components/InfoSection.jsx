import React from 'react';
import { restaurantInfo } from '../data/mockData';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Clock, CreditCard, MapPin } from 'lucide-react';

export const InfoSection = () => {
  const daysOrder = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

  return (
    <section id="info" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold text-[#F5A623] mb-4"
            style={{ fontFamily: "'Crimson Text', 'Times New Roman', serif" }}
          >
            Informations Pratiques
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Hours */}
          <Card className="bg-[#F5A623] border-none shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-black">
                <Clock className="text-black" size={28} />
                Horaires d'ouverture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {daysOrder.map((day) => (
                  <div key={day} className="flex justify-between items-center p-3 bg-white/50 rounded-lg">
                    <span className="font-semibold text-black capitalize">{day}</span>
                    <span className="text-gray-800 font-medium">{restaurantInfo.openingHours[day]}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment & Location */}
          <div className="space-y-8">
            {restaurantInfo.payments.length > 0 && (
            <Card className="bg-[#F5A623] border-none shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-black">
                  <CreditCard className="text-black" size={28} />
                  Moyens de paiement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {restaurantInfo.payments.map((payment, idx) => (
                    <div key={idx} className="px-4 py-2 bg-white/50 rounded-lg font-semibold text-black">
                      {payment}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            )}

            <Card className="bg-[#F5A623] border-none shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-black">
                  <MapPin className="text-black" size={28} />
                  Adresse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-800 text-lg mb-4">{restaurantInfo.address}</p>
                <a
                  href={restaurantInfo.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition-all duration-200 hover:transform hover:-translate-y-0.5"
                >
                  Obtenir l'itinéraire
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps */}
        {restaurantInfo.mapEmbed && (
          <Card className="bg-[#F5A623] border-none shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="w-full h-96">
                <iframe
                  src={restaurantInfo.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${restaurantInfo.name} - localisation`}
                ></iframe>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};
