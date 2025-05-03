
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-bitcoin/30">
      <div className="absolute inset-0 bg-[url('public/lovable-uploads/2e1fd836-1d6d-4649-acee-c2ec7d832dac.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            <span className="block">Bitcoin Buzz</span> 
            <span className="bg-gradient-to-r from-bitcoin to-bitcoin-light bg-clip-text text-transparent">Summit 2025</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200">
            The premier conference for Bitcoin innovators, investors, and enthusiasts
          </p>
          <div className="flex items-center justify-center gap-4 mb-12">
            <Calendar className="h-6 w-6 text-bitcoin" />
            <span className="text-lg text-white">May 15-17, 2025 • New York City</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white text-lg py-7 px-10 rounded-full">
              Register Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-7 px-10 rounded-full">
              View Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
