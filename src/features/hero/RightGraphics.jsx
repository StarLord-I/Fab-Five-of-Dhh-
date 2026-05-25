import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { krshn, emiway, raftaar, talhaAnjum, talhaYunus } from '../../data/image';

const specialists = [
  { id: 1, name: 'KR$NA', img: krshn, radius: 130, angle: 45, glow: 'shadow-pink-500/30' },
  { id: 2, name: 'Emiway Bantai', img: emiway, radius: 130, angle: 170, glow: 'shadow-amber-200/30' },
  { id: 3, name: 'Raftaar', img: raftaar, radius: 210, angle: -40, glow: 'shadow-purple-500/30' },
  { id: 4, name: 'Talha Anjum', img: talhaAnjum, radius: 210, angle: 95, glow: 'shadow-cyan-500/30' },
  { id: 5, name: 'Talha Yunus', img: talhaYunus, radius: 280, angle: 230, glow: 'shadow-rose-500/30' },
];

const RightGraphics = () => {
  // 1. Core Motion Values for tracking raw mouse offsets
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Configuration configuration object for spring physics
  const springConfig = { stiffness: 60, damping: 20, mass: 0.8 };

  // 3. Inject spring interpolation (FIXES THE COMPILER CRASH)
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 4. Hook lifecycle management for mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = ((e.clientX / innerWidth) - 0.5) * 35;
      const y = ((e.clientY / innerHeight) - 0.5) * 35;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full h-[500px] lg:h-[650px] flex items-center justify-center select-none">
      
      {/* Background Rings Layout */}
      <motion.div 
        style={{ x: smoothX, y: smoothY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60"
      >
        <div className="absolute w-[260px] h-[260px] rounded-full border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent" />
        <div className="absolute w-[420px] h-[420px] rounded-full border border-white/5" />
        <div className="absolute w-[560px] h-[560px] rounded-full border border-white/5 hidden sm:block" />
      </motion.div>

      {/* Central Metric Node */}
      <div className="relative z-20 w-48 h-48 rounded-full border border-white/10 bg-slate-950/70 backdrop-blur-3xl flex flex-col items-center justify-center text-center shadow-2xl shadow-black/80">
        <span className="text-4xl font-extrabold text-white tracking-tight">20k+</span>
        <span className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-widest">Specialists</span>
      </div>

      {/* Endless Clockwise System Rotation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        className="absolute w-full h-full flex items-center justify-center"
      >
        {specialists.map((person) => {
          const radians = (person.angle * Math.PI) / 180;
          const xPos = person.radius * Math.cos(radians);
          const yPos = person.radius * Math.sin(radians);

          return (
            <motion.div
              key={person.id}
              className="absolute group cursor-pointer"
              style={{ x: xPos, y: yPos }}
            >
              {/* Counter-Clockwise Asset Face Preservation + Physics Drift */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
                style={{ x: smoothX, y: smoothY }}
                className={`relative w-13 h-13 rounded-full p-[1.5px] bg-slate-900/80 backdrop-blur-md shadow-lg border border-white/10 transition-transform duration-200 group-hover:scale-110 ${person.glow}`}
              >
                <img 
                  src={person.img} 
                  alt={person.name} 
                  className="w-full h-full object-cover rounded-full"
                  draggable="false"
                />
                <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-950 shadow-xs" />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default RightGraphics;