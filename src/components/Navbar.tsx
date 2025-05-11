import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useMediaQuery } from '@/hooks/use-mobile';
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
  const isMobile = useMediaQuery('(max-width: 768px)');
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
        scrolled ? 'bg-black/90 backdrop-blur-lg py-2 shadow-xl' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-white font-bold text-xl flex items-center">
            <span className="text-bitcoin">Bitcoin</span>Forum
          </NavLink>

          {isMobile ? (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileNav}
                className="text-white"
                aria-label="Toggle Menu"
              >
                {mobileNavOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>

              {mobileNavOpen && (
                <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl py-4">
                  <nav className="container mx-auto px-4">
                    <ul className="space-y-4">
                      {navLinks.map((link, index) => (
                        <li key={index}>
                          <NavLink
                            to={link.path}
                            onClick={() => setMobileNavOpen(false)}
                            className="text-white hover:text-bitcoin block py-2"
                          >
                            {link.label}
                          </NavLink>
                        </li>
                      ))}
                      <li>
                        <a
                          href="https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-bitcoin hover:bg-bitcoin-dark text-white py-2 px-4 rounded-full inline-block transition-colors mt-2"
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
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.path.startsWith('/#') ? (
                      <a
                        href={link.path}
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <NavigationMenuLink asChild>
                        <NavLink
                          to={link.path}
                          className={navigationMenuTriggerStyle()}
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
                    className="bg-bitcoin hover:bg-bitcoin-dark text-white py-2 px-4 rounded-full inline-block transition-colors"
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
