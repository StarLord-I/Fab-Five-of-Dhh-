import React from 'react';
import { dhhArtists } from '../../data/DhhData'; // Ensure exact casing match for DhhData.js
import EditorialRow from './EditorialRow';

const ArtistGrid = () => {
  return (
    <div className="w-full bg-slate-950 text-white pt-12 pb-32 relative z-10">
      {dhhArtists.map((artist) => (
        <EditorialRow 
          key={artist.id} 
          artist={artist} 
        />
      ))}
    </div>
  );
};

export default ArtistGrid;