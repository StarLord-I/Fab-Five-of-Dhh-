import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-white/5 flex flex-wrap gap-8 justify-between items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-300 text-sm md:text-base text-white font-medium">
      <div className="flex items-center gap-2"> Dreamure</div>
      <div className="font-mono tracking-widest">SWITCH.WIN</div>
      <div className="flex items-center gap-1"> Glow sphere</div>
      <div className="flex items-center gap-1"> PinSpace</div>
      <div className="flex items-center gap-2"> Visionix</div>
    </footer>
  );
};

export default Footer;