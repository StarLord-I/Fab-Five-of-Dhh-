import React from 'react';
import Button from './Ui/Button';
import { ChevronRight } from "lucide-react";
const Navbar = ()=>{
   return (
       <nav className='w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between'>
        {/* logo */}
        <div className=' flex items-center gap-2 text-white text-xl font-bold cursor-pointer'>
            <div className='w-6 h-6 bg-linear-to-br from-amber-200 to-purple-500 rounded-md flex items-center justify-center'>
              <div className="w-2 h-2 bg-slate-950 rounded-xs" />
            </div>
            Marketeam 
        </div>
        {/* nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
             <a href="#team" className="hover:text-white transition-colors">Your Team</a>
             <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
             <a href="#blog" className="hover:text-white transition-colors">Blog</a>
             <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
       </div>
        {/* buttons */}
        <div className=' flex items-center gap-4'>
          <Button className='text-sm text-white font-medium hover:text-slate-300 transition-colors cursor-pointer' text="Login" showIcon={false} />
          <Button className='text-sm bg-white/10 hover:bg-white/20 text-white border border-white/10 font-medium py-2 px-5 rounded-full transition-all cursor-pointer backdrop-blur-md shadow-sm"' text="Sign Up" showIcon={false} />
        </div>
       </nav>
   );
};

export default Navbar