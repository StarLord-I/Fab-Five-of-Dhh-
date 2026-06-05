import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { dhhArtists } from '../../data/DhhData'; // Pulls your clean variables directly
import introVideo from '../../assets/video/sample.mp4'; // Loads your local video file loop

const EditorialHero = () => {
  // Tracking state variable. null = default background video playing loop
  const [hoveredArtist, setHoveredArtist] = useState(null);

  return (
    <section id="platform-intro" className="relative w-screen h-screen overflow-hidden bg-slate-950 flex flex-col justify-between">
      
      {/* LAYER 1: AMBIENT VIDEO / PORTRAIT IMAGE CROSS-FADE BACKPLANE */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* Default background media asset */}
        <video
          src={introVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-35 transition-opacity duration-700"
        />

        {/* Dynamic Image Injection Frame Layer */}
        <AnimatePresence>
          {hoveredArtist && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ 
                // Dynamically targets the first array photo object using the corrected .img property pass!
                backgroundImage: `url(${hoveredArtist.editorialPhotos[0].img})` 
              }}
            >
              {/* Dark vignette shielding wrapper to protect typographic overlay legibility */}
              <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-xs" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* LAYER 2: MASSIVE MIX-BLEND STENCIL TEXT BLOCKS */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 
          style={{ fontFamily: 'Bebas Neue' }}
          className="text-7xl sm:text-9xl lg:text-[12rem] font-black tracking-tighter text-white mix-blend-difference select-none leading-none"
        >
          FAB FIVE
        </h1>
        <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-mono mt-3 mix-blend-difference">
          The Definitive Culture Experience
        </p>
      </div>

      {/* LAYER 3: INTERACTIVE ARTIST NAVIGATION MATRIX LINKS */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 pb-16 flex flex-col items-center gap-4">
        <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase select-none">
          [ Hover to Focus // Click to Step Inside ]
        </span>
        
        {/* Dynamic Row Layout Mapper */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
          {dhhArtists.map((artist) => (
            <a
              key={artist.id}
              href={`#artist-${artist.id}`} // Links anchor scrolling targets downwards past the frame fold
              onMouseEnter={() => setHoveredArtist(artist)} // Mounts background picture URL values
              onMouseLeave={() => setHoveredArtist(null)}   // Clears out current state targets to reload loop
              style={{ fontFamily: 'Inter' }}
              className="text-lg md:text-2xl font-light text-white/40 hover:text-white transition-colors duration-300 relative py-1 group tracking-tight"
            >
              {artist.name}
              
              {/* Sliding accent alignment underline highlight */}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};

export default EditorialHero;