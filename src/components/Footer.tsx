
import React from 'react';
import { Link } from 'react-router-dom';
import { Bitcoin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Bitcoin className="h-8 w-8 text-bitcoin" />
              <span className="font-bold text-xl">3.BitcoinForum 9.-11 Oktober 2025</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Das führende Forum für Anfänger und Bitcoin-Interessierte. Besuchen Sie uns im Oktober 2025 in Ingolstadt.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/cartasveintiuno" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 rounded-full hover:bg-bitcoin hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/cartasveintiuno/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 rounded-full hover:bg-bitcoin hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@cartasveintiuno" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 rounded-full hover:bg-bitcoin hover:text-white transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.83a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.26z"/>
                </svg>
              </a>
              <a href="mailto:info@nena-celeste.de" className="p-2 bg-gray-200 rounded-full hover:bg-bitcoin hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3><strong>Schnellzugriff</strong></h3>
            <ul>
              <li><a href="#about">Über uns</a></li>
              <li><a href="#speakers">Referenten</a></li>
              <li><a href="#schedule">Zeitplan</a></li>
              <li><a href="#venue">Veranstaltungsort</a></li>
               <li><a href="#venue">Workshops</a></li>
              <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Anmeldung</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
             <li className="text-gray-600">Diese Webseite wird von </li>
              <li className="text-gray-600">Nena Celeste UG (haftungsbeschränkt)</li>
              <li className="text-gray-600">für das 3. BitcoinForum bereitgestellt.</li>
           
              <li className="text-gray-600"> <a href="mailto:info@nena-celeste.de?Subject=Anfrage von BitcoinForum Website">Kontakt per e-mail </a> </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2025 3.BitcoinForum. All rights reserved.
          </p>
          
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link to="/cookie-richtlinie" className="hover:text-bitcoin transition-colors">Cookie Richtlinie</Link>
            <Link to="/datenschutz" className="hover:text-bitcoin transition-colors">Datenschutz</Link>
            <Link to="/impressum" className="hover:text-bitcoin transition-colors">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
