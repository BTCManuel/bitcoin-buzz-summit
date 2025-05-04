
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Info, Calendar } from 'lucide-react';

const Venue = () => {
  return (
    <section id="venue" className="py-32 bg-gradient-to-b from-white to-[#D3E4FD]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-[#FDE1D3] backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Veranstaltungsort</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Veranstaltungsinfos</h2>
          <p className="text-xl text-gray-600">
            Besuchen Sie uns im historischen Alten Rathaus in Ingolstadt
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Card className="h-full border border-[#F2FCE2] shadow-md rounded-2xl overflow-hidden bg-white">
              <CardContent className="p-0 h-full">
                <div className="aspect-video w-full bg-[#FEF7CD]/30 relative overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#D3E4FD]/20 to-[#F2FCE2]/20">
                    <MapPin className="h-16 w-16 text-bitcoin" />
                  </div>
                </div>
                <div className="p-8 text-gray-800">
                  <h3 className="text-2xl font-bold mb-4">Altes Rathaus Ingolstadt</h3>
                  <p className="text-gray-600">
                    Ein historisches Gebäude im Herzen Ingolstadts, das ideale Bedingungen für Networking und Lernen bietet.
                  </p>
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
                Ort
              </h3>
              <p className="text-lg text-gray-600 ml-14">
                Altes Rathaus<br />
                Rathausplatz 2<br />
                85049 Ingolstadt<br />
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
                    Einlass: 18:00 Uhr
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-bitcoin mr-2"></span>
                    Beginn: 18:30 Uhr
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
                Zusätzliche Informationen
              </h3>
              <p className="text-lg text-gray-600 ml-14">
                Die Teilnahme am Bitcoin Forum ist kostenlos. Aus organisatorischen Gründen bitten wir um Anmeldung. 
                Während der Veranstaltung werden Getränke und kleine Snacks angeboten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
