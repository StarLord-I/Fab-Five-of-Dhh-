import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-white/40 border-t border-white/5 font-mono py-12 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs">
        
        {/* Left Module Block */}
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span>DESI HIP-HOP TRIBUTE ARCHIVE Platform</span>
          <span className="text-[10px] text-white/20">PRODUCTION BUILD // PRODUCTION V1.0</span>
        </div>

        {/* Center Module Block */}
        <div className="text-center text-amber-400/50">
          <span>MADE IN THE CULTURE FOR THE CULTURE</span>
        </div>

        {/* Right Module Block */}
        <div className="flex flex-col items-center sm:items-end gap-1">
          <span>&copy; {currentYear} ALL TRACK RIGHTS RESERVED</span>
          <a 
            href="#platform-intro" 
            className="text-[10px] text-white/20 hover:text-amber-400 transition-colors uppercase"
          >
            [ BACK TO SUMMIT ↑ ]
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;