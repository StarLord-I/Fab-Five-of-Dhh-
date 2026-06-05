import React from 'react';
import { motion } from 'framer-motion';

// Ingesting the nested discography object handed down from the parent EditorialRow channel
const Tracklist = ({ discography }) => {
  // Defensive Engineering: If data is missing or corrupted, fail gracefully instead of breaking the app
  if (!discography || !discography.tracks) {
    return <p className="text-xs font-mono text-white/20">[ NO ANTHEM RECORDS AVAILABLE ]</p>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
      className="flex flex-col gap-4 border-t border-white/10 pt-6 w-full"
    >
      {/* MATRIX SUB-HEADER INTERFACE */}
      <div className="flex justify-between items-end select-none">
        <h4 className="text-xs font-mono tracking-widest font-bold text-white/30 uppercase">
          DEFINITIVE ANTHEM MATRIX
        </h4>
        <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-tight">
          LP // {discography.featuredAlbum}
        </span>
      </div>
      
      {/* DETAILED TRACKLIST DECK */}
      {/* Using a responsive grid layout that stacks on mobile but splits into 2 clean columns on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
        {discography.tracks.map((track, idx) => (
          <div 
            key={track.id}
            className="group flex items-center justify-between p-3.5 bg-white/5 border border-white/5 rounded-lg hover:border-white/15 hover:bg-white/10 transition-all duration-300 cursor-pointer"
          >
            {/* Left Block: Track Identity and Title Name */}
            <div className="flex items-center gap-3 overflow-hidden pr-2">
              <span className="text-[10px] font-mono font-bold text-white/20 group-hover:text-amber-400/60 transition-colors">
                {/* Dynamically prepends a clean leading zero for numbers under 10 */}
                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </span>
              <span className="text-sm font-semibold tracking-tight text-slate-200 group-hover:text-white transition-colors truncate font-sans">
                {track.title}
              </span>
            </div>

            {/* Right Block: Interactive Duration Timer Tag */}
            <div className="flex items-center gap-2 shrink-0 pl-1">
              {/* Sleek retro-style listening icon that appears dynamically on row hover */}
              <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-amber-400 font-bold">
                LISTEN //
              </span>
              <span className="text-xs font-mono text-white/40 group-hover:text-amber-400 transition-colors font-medium">
                [{track.duration}]
              </span>
            </div>

          </div>
        ))}
      </div>
      
    </motion.div>
  );
};

export default Tracklist;