import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EditorialHero from '../features/hero/EditorialHero'; // Injected: Your new video interaction hub
import ArtistGrid from '../features/artists/ArtistGrid'; // Updated path: Pointing to your production folder

const Home = () => {
  return (
    /* Base Structural Viewport Canvas - Standardized to a unified dark theme */
    <div className="relative min-h-screen w-full bg-slate-950 text-white flex flex-col justify-between overflow-hidden selection:bg-amber-400/30">
      
      {/* Floating Header Interface Overlay - Absolutely positioned to glide smoothly over the video */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* INTERACTIVE EDITORIAL HERO CANVAS (Handles your local intro video loop & artist hovers) */}
      <EditorialHero />

      {/* FEATURE CORES SHOWCASE (The modular, asymmetric scroll rows section) */}
      <ArtistGrid />

      {/* SYSTEM BOUNDARY FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;