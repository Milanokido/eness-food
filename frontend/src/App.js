import React from "react";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { MenuSection } from "./components/MenuSection";
import { InfoSection } from "./components/InfoSection";
import { AboutSection } from "./components/AboutSection";
import { GallerySection } from "./components/GallerySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <MenuSection />
      <InfoSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
