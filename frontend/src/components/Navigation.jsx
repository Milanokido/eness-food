import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { restaurantInfo } from '../data/mockData';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '#hero' },
    { label: 'Menu', href: '#menu' },
    { label: 'Info', href: '#info' },
    { label: 'À propos', href: '#about' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-black/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center">
              <img
                src={restaurantInfo.logo}
                alt={`${restaurantInfo.name} Logo`}
                className="h-20 md:h-24 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-white hover:text-[#FFC46B] transition-colors duration-200 font-medium text-sm uppercase tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a
              href={restaurantInfo.phoneLink}
              className="inline-flex items-center gap-2 bg-[#F5A623] text-black px-6 py-2.5 rounded-md font-semibold hover:bg-[#FFB84D] transition-all duration-200 hover:transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Phone size={18} />
              Appeler
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:text-[#FFC46B] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block px-4 py-3 text-white hover:text-[#FFC46B] hover:bg-gray-900 rounded-md transition-all duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href={restaurantInfo.phoneLink}
              className="flex items-center justify-center gap-2 bg-[#F5A623] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#FFB84D] transition-all duration-200 mt-4"
            >
              <Phone size={18} />
              Appeler maintenant
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
