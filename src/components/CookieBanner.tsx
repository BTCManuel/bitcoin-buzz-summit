
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookie-consent');
    
    if (!cookieConsent) {
      // If there's no consent stored, show the banner
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    // Store the consent in localStorage
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    // Store the decline in localStorage
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-100 border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">Cookie-Hinweis</h3>
            <p className="text-gray-700">
              Diese Website verwendet nur essenzielle Cookies, die für den Betrieb der Website notwendig sind. 
              Wir sammeln keine personenbezogenen Daten. Weitere Informationen finden Sie in unserer{' '}
              <Link to="/datenschutz" className="text-bitcoin hover:underline">Datenschutzerklärung</Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center mt-2 md:mt-0">
            <Button 
              onClick={acceptCookies} 
              className="bg-bitcoin hover:bg-bitcoin/90"
            >
              Akzeptieren
            </Button>
            <Button 
              onClick={declineCookies} 
              variant="outline" 
              className="border-bitcoin text-bitcoin hover:bg-bitcoin/10"
            >
              Ablehnen
            </Button>
            <Button 
              onClick={() => setIsVisible(false)} 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 md:static rounded-full"
              aria-label="Schließen"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
