// src/features/artists/EditorialImages.jsx
import React from 'react';
import { motion } from 'framer-motion';

const EditorialImages = ({ photos, artistName }) => {
  // Edge-case safety check: if no photos exist, crash gracefully instead of breaking the virtual DOM
  if (!photos || photos.length === 0) return null;

  return (
    <div className="md:col-span-5 flex flex-col gap-6 relative w-full">
      
      {/* FRAME 1: The primary large portrait frame */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full ${photos[0].aspectRatio} overflow-hidden rounded-md border border-white/10 shadow-2xl bg-neutral-900 relative group`}
      >
        <img 
          src={photos[0].img} // Directly mapping our clean local variable pass![cite: 3]
          alt={`${artistName} primary presentation`}
          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-750 ease-out group-hover:scale-105"
          draggable="false"
        />
      </motion.div>

      {/* FRAME 2: The absolute-positioned floating secondary element[cite: 2] */}
      {/* We check if a second photo exists in your array before trying to read it to prevent undefined crashes */}
      {photos[1] && (
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          // hidden on small screens, absolutely floating on desktop for elite editorial overlap layout
          className={`hidden lg:block absolute -left-12 -bottom-10 w-44 ${photos[1].aspectRatio} overflow-hidden rounded-md border border-white/20 shadow-xl z-20 bg-neutral-900`}
        >
          <img 
            src={photos[1].img} // Targeting the second nested image pointer variable directly![cite: 3]
            alt={`${artistName} alternate angle`}
            className="w-full h-full object-cover filter brightness-75 contrast-125"
            draggable="false"
          />
        </motion.div>
      )}

      <span className="text-[10px] font-mono tracking-widest uppercase text-white/30 block mt-2">
        [ ASYMMETRIC MATRIX // CODESYNC ACTIVE ]
      </span>
    </div>
  );
};

export default EditorialImages;