import React from 'react';
import { ChevronRight } from 'lucide-react';

const LeftContent = () => {
  return (
    <div className="flex flex-col gap-6 lg:gap-8 max-w-xl text-left">
      {/* Dynamic Headline with multi-directional gradients */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
        Unlock Top <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-neutral-200 to-neutral-400">
          Marketing Talent
        </span> <br />
        You Thought Was <br />
        Out of Reach – <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-300 to-amber-200">
          Now Just One <br />
          Click Away!
        </span>
      </h1>

      {/* Symmetrical Pill-Shaped Action Button Callout */}
      <div className="pt-2">
        <button className="group inline-flex items-center gap-2 bg-neutral-900/90 backdrop-blur-md text-white border border-white/10 hover:bg-white hover:text-black font-semibold py-3.5 px-7 rounded-full shadow-xl shadow-black/40 transition-all duration-300 text-sm md:text-base cursor-pointer">
          Start Project 
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default LeftContent;