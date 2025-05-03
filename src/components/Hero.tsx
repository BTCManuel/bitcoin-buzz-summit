
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('public/lovable-uploads/2e1fd836-1d6d-4649-acee-c2ec7d832dac.png')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-bitcoin/5 to-transparent opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-3 px-4 py-1 bg-bitcoin/10 backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm md:text-base font-medium text-bitcoin">May 15-17, 2025 • New York City</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-800">
            <span className="block mb-2">Bitcoin Buzz</span> 
            <span className="bg-gradient-to-r from-bitcoin to-bitcoin-light bg-clip-text text-transparent">Summit 2025</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-2xl mx-auto">
            The premier conference for Bitcoin innovators, investors, and enthusiasts
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white text-lg py-7 px-10 rounded-full shadow-lg shadow-bitcoin/20 transition-all duration-300 hover:scale-105">
              Register Now
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg py-7 px-10 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105">
              View Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
