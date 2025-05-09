
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bitcoin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isScrolled ? 'bg-bitcoin' : 'bg-[#FEF7CD]'
          }`}>
            <Bitcoin className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-bitcoin'}`} />
          </div>
          <div>
            <span className={`font-bold text-lg block leading-tight ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>3.Bitcoin Forum</span>
            <span className="text-xs text-bitcoin">Oktober 2025</span>
          </div>
        </Link>

        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMenu} 
              className={`p-2 rounded-full ${isScrolled ? 'text-gray-800 hover:bg-[#D3E4FD]/30' : 'text-gray-800 hover:bg-white/20'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {isOpen && (
              <div className="fixed inset-0 top-20 bg-white/95 z-40 animate-fade-in">
                <div className="container mx-auto px-4 py-12 flex flex-col space-y-8">
                  <Link to="/#about" onClick={toggleMenu} className="text-xl font-medium px-4 py-3 text-gray-800 hover:text-bitcoin transition-colors">Über das Forum</Link>
                  <Link to="/#speakers" onClick={toggleMenu} className="text-xl font-medium px-4 py-3 text-gray-800 hover:text-bitcoin transition-colors">Speakers</Link>
                  <Link to="/#schedule" onClick={toggleMenu} className="text-xl font-medium px-4 py-3 text-gray-800 hover:text-bitcoin transition-colors">Schedule</Link>
                  <Link to="/#venue" onClick={toggleMenu} className="text-xl font-medium px-4 py-3 text-gray-800 hover:text-bitcoin transition-colors">Venue</Link>
                  <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white rounded-full py-6 mx-4 shadow-lg shadow-bitcoin/20">
                    Register Now
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              <a href="/#about" className="text-sm font-medium text-gray-800 hover:text-bitcoin transition-colors relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bitcoin group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#speakers" className="text-sm font-medium text-gray-800 hover:text-bitcoin transition-colors relative group">
                Speakers
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bitcoin group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#schedule" className="text-sm font-medium text-gray-800 hover:text-bitcoin transition-colors relative group">
                Schedule
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bitcoin group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/#venue" className="text-sm font-medium text-gray-800 hover:text-bitcoin transition-colors relative group">
                Venue
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-bitcoin group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white rounded-full shadow-lg shadow-bitcoin/20 transition-all duration-300 hover:scale-105">
              Register Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
