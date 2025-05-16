import { usePopup } from "@/pages/PopupContext";

import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const { openPopup } = usePopup(); 
  return (
    <div className="min-h-[60vh] flex items-center relative overflow-hidden bg-gradient-to-br from-[#F2FCE2] via-[#D3E4FD] to-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('public/lovable-uploads/2e1fd836-1d6d-4649-acee-c2ec7d832dac.png')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#FEF7CD]/20 to-transparent opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 pt-20 pb-8 md:py-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-3 px-4 py-1 bg-[#FDE1D3] backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm md:text-base font-medium text-bitcoin"> 09.-11.Oktober 2025 • Ingolstadt</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-800">
            <span className="block mb-2">3. Bitcoin Forum</span> 
            <span className="bg-gradient-to-r from-bitcoin to-bitcoin-light bg-clip-text text-transparent">VR-Bank Bayern Mitte</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-2xl mx-auto">
            Die spannende Welt von Bitcoin und der Blockchain-Technologie
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
<a
  onClick={() =>
    openPopup({
      redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
    })
  }
  className="cursor-pointer bg-bitcoin hover:bg-bitcoin-dark text-white text-lg py-7 px-10 rounded-full shadow-lg shadow-bitcoin/20 transition-all duration-300 hover:scale-105 text-center font-medium"
>
  Jetzt Anmelden
</a>

            <a
              href="#schedule"
              className="border-[#D3E4FD] bg-white/70 text-gray-700 hover:bg-[#D3E4FD]/30 text-lg py-7 px-10 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 text-center font-medium"
            >
              Programm ansehen
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
