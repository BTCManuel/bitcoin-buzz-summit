
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const Navbar = () => {
  const isMobile = useIsMobile();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Über uns', path: '/#about' },
    { label: 'Sprecher', path: '/#speakers' },
    { label: 'Zeitplan', path: '/#schedule' },
    { label: 'Veranstaltungsort', path: '/#venue' },
    { label: 'Registrierung', path: '/#register' },
    { label: 'Workshops', path: '/workshop' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-bitcoin/90 to-bitcoin-dark/90 backdrop-blur-md py-2 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="font-bold text-xl flex items-center">
            <span className="text-white">Bitcoin</span>
            <span className="text-bitcoin-light">Forum</span>
          </NavLink>

          {isMobile ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileNav}
                className="text-white hover:bg-bitcoin/30"
                aria-label="Toggle Menu"
              >
                {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>

              {mobileNavOpen && (
                <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-bitcoin/95 to-bitcoin-dark/95 backdrop-blur-xl py-6 shadow-lg">
                  <nav className="container mx-auto px-4">
                    <ul className="space-y-4">
                      {navLinks.map((link, index) => (
                        <li key={index}>
                          <NavLink
                            to={link.path}
                            onClick={() => setMobileNavOpen(false)}
                            className={({ isActive }) => 
                              `text-white hover:text-white/80 block py-2 px-4 ${isActive ? 'font-medium border-l-4 border-white pl-3' : ''} transition-all`
                            }
                          >
                            {link.label}
                          </NavLink>
                        </li>
                      ))}
                      <li className="pt-2">
                        <a
                          href="https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-bitcoin hover:bg-white/90 font-medium py-2 px-6 rounded-full inline-block transition-colors mt-2 shadow-md"
                        >
                          Jetzt registrieren
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="space-x-1">
                {navLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.path.startsWith('/#') ? (
                      <a
                        href={link.path}
                        className="text-white hover:text-white/80 px-3 py-2 rounded-md transition-colors text-sm font-medium"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <NavigationMenuLink asChild>
                        <NavLink
                          to={link.path}
                          className={({ isActive }) => 
                            `text-white hover:text-white/80 px-3 py-2 rounded-md transition-colors text-sm font-medium ${
                              isActive ? 'bg-white/20 backdrop-blur-sm' : ''
                            }`
                          }
                        >
                          {link.label}
                        </NavLink>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <a
                    href="https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-bitcoin hover:bg-bitcoin-dark/80 px-4 py-2 rounded-full transition-colors font-medium shadow-md ml-2"
                  >
                    Jetzt registrieren
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
