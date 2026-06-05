import React from 'react';
import { motion } from 'framer-motion';
import EditorialImages from './EditorialImages'; // Import your image component cleanly
import Tracklist from './Tracklist';

const EditorialRow = ({ artist }) => {
  return (
    <div 
      id={`artist-${artist.id}`} // Fluid landing anchor target on click
      className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-b border-white/5 flex flex-col gap-12"
    >
      {/* SECTION HEADER TRACK */}
      <div className="w-full flex justify-between items-center text-xs font-mono tracking-widest text-white/40 border-b border-white/5 pb-4">
        <span>[SECTION // 0{artist.id}]</span>
        <span>{artist.tagline}</span>
      </div>

      {/* MASSIVE BRUTALIST NAME HEADLINE */}
      <motion.h2 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ fontFamily: 'Bebas Neue' }} 
        className="text-7xl sm:text-9xl lg:text-[11rem] leading-none tracking-tight text-center select-none font-black my-4 text-white"
      >
        {artist.name}
      </motion.h2>

      {/* ASYMMETRIC 12-COLUMN DECK */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mt-4">
        
        {/* LEFT COLUMN (MD: 5/12): Calling your custom Image frame sub-component */}
        <EditorialImages photos={artist.editorialPhotos} artistName={artist.name} />

        {/* RIGHT COLUMN (MD: 7/12): Bio Narrative & Album Track Matrix */}
        <div className="md:col-span-7 flex flex-col gap-8 md:pl-6">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-3"
          >
            <span className="text-xs font-mono font-bold tracking-wider text-amber-400">
              THE BIOGRAPHICAL ANALYSIS
            </span>
            <p style={{ fontFamily: 'Inter' }} className="text-xl text-slate-300 leading-relaxed font-light first-letter:text-4xl first-letter:font-bold first-letter:text-amber-400">
              {artist.bio}
            </p>
          </motion.div>

          {/* Render the structural track playlist panel */}
          <Tracklist discography={artist.discography} />
        </div>

      </div>
    </div>
  );
};

export default EditorialRow;