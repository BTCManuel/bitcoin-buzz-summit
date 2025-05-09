
import React from 'react';
import { Link } from 'react-router-dom';
import { Bitcoin, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Bitcoin className="h-8 w-8 text-bitcoin" />
              <span className="font-bold text-xl">3.Bitcoin Forum Oktober 2025</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Das führende Forum für Bitcoin-Interessierte, Investoren und Visionäre. Besuchen Sie uns am 13. Oktober 2025 in Ingolstadt.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-bitcoin hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-bitcoin hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-bitcoin hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/#about" className="text-gray-600 hover:text-bitcoin transition-colors">About</Link></li>
              <li><Link to="/#speakers" className="text-gray-600 hover:text-bitcoin transition-colors">Speakers</Link></li>
              <li><Link to="/#schedule" className="text-gray-600 hover:text-bitcoin transition-colors">Schedule</Link></li>
              <li><Link to="/#venue" className="text-gray-600 hover:text-bitcoin transition-colors">Venue</Link></li>
              <li><Link to="/#register" className="text-gray-600 hover:text-bitcoin transition-colors">Register</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Nena Celeste UG (haftungsbeschränkt)</li>
              <li className="text-gray-600">Josef-Kogler-Str. 8</li>
              <li className="text-gray-600"> 82031 Gruenwald</li>
              <li className="text-gray-600">website_anfrage@nena-celeste.de</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; 2025 3.Bitcoin Forum. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-bitcoin transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-bitcoin transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-bitcoin transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
