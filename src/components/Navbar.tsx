
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
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Bitcoin className={`h-8 w-8 ${isScrolled ? 'text-bitcoin' : 'text-white'}`} />
          <span className={`font-bold text-xl ${isScrolled ? 'text-black' : 'text-white'}`}>Bitcoin Buzz Summit</span>
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="sm" onClick={toggleMenu} className={isScrolled ? "text-black" : "text-white"}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            {isOpen && (
              <div className="fixed inset-0 top-16 bg-white z-40 animate-fade-in">
                <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
                  <Link to="/#about" onClick={toggleMenu} className="text-lg font-medium px-4 py-2">About</Link>
                  <Link to="/#speakers" onClick={toggleMenu} className="text-lg font-medium px-4 py-2">Speakers</Link>
                  <Link to="/#schedule" onClick={toggleMenu} className="text-lg font-medium px-4 py-2">Schedule</Link>
                  <Link to="/#venue" onClick={toggleMenu} className="text-lg font-medium px-4 py-2">Venue</Link>
                  <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white rounded-full">
                    Register Now
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <Link to="/#about" className={`text-sm font-medium hover:text-bitcoin transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>About</Link>
            <Link to="/#speakers" className={`text-sm font-medium hover:text-bitcoin transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Speakers</Link>
            <Link to="/#schedule" className={`text-sm font-medium hover:text-bitcoin transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Schedule</Link>
            <Link to="/#venue" className={`text-sm font-medium hover:text-bitcoin transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Venue</Link>
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white rounded-full">
              Register Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
