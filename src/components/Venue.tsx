
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Info, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Venue = () => {
  return (
    <section id="venue" className="py-32 bg-gradient-to-b from-white to-[#D3E4FD]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-[#FDE1D3] backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Veranstaltungsort</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Eventlocation</h2>
          <p className="text-xl text-gray-600">
            Freuen Sie sich auf einen spannenden Abend im neuen Kongresszentrum der VR-Bank Bayern Mitte eG
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Card className="h-full border border-[#F2FCE2] shadow-md rounded-2xl overflow-hidden bg-white">
              <CardContent className="p-0 h-full">
                <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.885898896282!2d11.408006415888854!3d48.75821087927616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e5a5e5fc26f69%3A0x88ebccabef87403a!2sVR-Bank%20Bayern%20Mitte%20eG!5e0!3m2!1sde!2sde!4v1684242420000!5m2!1sde!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="p-8 text-gray-800">
                  <h3 className="text-2xl font-bold mb-4">VR-Bank Bayern Mitte eG</h3>
                  <p className="text-gray-600 mb-6">
                    Das neue Kongresszentrum der VR-Bank Bayern Mitte bietet die perfekte Lokation für unsere Veranstaltung. Die modern gestalteten Räumlichkeiten ermöglichen eine angenehme Atmosphäre für interessante Vorträge und Gespräche mit Experten und Gleichgesinnten.
                  </p>
                  <div className="mt-4">
                    <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white rounded-full shadow-md shadow-bitcoin/20 transition-all duration-300 hover:scale-105">
                      <Navigation className="mr-2 h-5 w-5" />
                      <a 
                        href="https://maps.google.com/?q=Eriagstraße+2+85053+Ingolstadt" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        Anfahrt
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8 text-gray-800">
            <div>
              <h3 className="flex items-center text-2xl font-bold mb-4">
                <div className="mr-4 h-10 w-10 rounded-full bg-[#FDE1D3]/40 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-bitcoin" />
                </div>
                Anschrift
              </h3>
              <p className="text-lg text-gray-600 ml-14">
                VR-Bank Bayern Mitte eG<br />
                Eriagstraße 2<br />
                85053 Ingolstadt<br />
                Deutschland
              </p>
            </div>
            
            <div>
              <h3 className="flex items-center text-2xl font-bold mb-4">
                <div className="mr-4 h-10 w-10 rounded-full bg-[#F2FCE2]/60 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-bitcoin" />
                </div>
                Zeit
              </h3>
              <div className="ml-14">
                <p className="text-lg text-gray-600 mb-3">
                  Freitag, 13. Oktober 2023
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-bitcoin mr-2"></span>
                    Einlass: 17:30 Uhr
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-bitcoin mr-2"></span>
                    Beginn: 18:00 Uhr
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-bitcoin mr-2"></span>
                    Ende: ca. 21:00 Uhr
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="flex items-center text-2xl font-bold mb-4">
                <div className="mr-4 h-10 w-10 rounded-full bg-[#D3E4FD]/50 flex items-center justify-center">
                  <Info className="h-5 w-5 text-bitcoin" />
                </div>
                Anfahrt & Parkplätze
              </h3>
              <p className="text-lg text-gray-600 ml-14 mb-4">
                Die VR-Bank Bayern Mitte eG ist gut zu erreichen:
              </p>
              <ul className="ml-14 space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-bitcoin mr-2"></span>
                  Kostenfreie Parkplätze rund um die VR-Bank
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-bitcoin mr-2"></span>
                  Busverbindung: Linien 10, 11, 15, 20, 21, 61
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-bitcoin mr-2"></span>
                  Haltestelle: Staustufe/Gerolfinger Straße
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
