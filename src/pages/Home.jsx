import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LeftContent from '../features/hero/LeftContent';
import RightGraphics from '../features/hero/RightGraphics';

const Home = () => {
  return (
    // {/* Base Structural Viewport Canvas */}
    <div className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-slate-950 via-purple-950 to-neutral-950 flex flex-col justify-between">
      
      {/* Ambient Mesh Glow Effects using Tailwind v4 custom values */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-amber-200/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] w-[55vw] h-[55vw] rounded-full bg-purple-600/15 blur-[150px] pointer-events-none" />

      {/* Main Orchestration Node */}
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />

        <main className="flex-1 max-w-7xl w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-8 lg:py-0">
          <LeftContent />
          <RightGraphics />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Home;