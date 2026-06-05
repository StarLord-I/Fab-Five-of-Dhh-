import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center bg-transparent text-white mix-blend-difference select-none">
      {/* Brand Identity / Platform Callout */}
      <div className="flex items-center gap-2 cursor-pointer group">
        <span className="text-xs font-mono tracking-[0.4em] uppercase font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
          DHH // FABFIVE
        </span>
      </div>

      {/* Structural Right Menu Anchor Links */}
      <div className="flex items-center gap-8 text-xs font-mono tracking-widest text-white/60">
        <a 
          href="#platform-intro" 
          className="hover:text-white transition-colors uppercase hidden sm:block"
        >
          [ ARCHIVE ]
        </a>
        <a 
          href="https://indigo-laboratory.it" 
          target="_blank" 
          rel="noreferrer"
          className="px-3 py-1.5 border border-white/10 rounded-full hover:border-white/40 hover:text-white transition-all uppercase text-[10px]"
        >
          INSPIRATION // LAB
        </a>
      </div>
    </nav>
  );
};

export default Navbar;