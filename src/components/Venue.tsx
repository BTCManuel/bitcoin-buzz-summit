import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Info, Navigation, Car, Train, Building, ParkingSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
            Freuen Sie sich auf einen spannenden Event in Ingolstadt mit mehreren Veranstaltungsorten
          </p>
        </div>
        
        {/* Large full-width event locations map - adjusted aspect ratio for better visibility */}
        <div className="mb-16">
          <Card className="border border-[#F2FCE2] shadow-md rounded-2xl overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="w-full overflow-hidden rounded-t-2xl relative">
                <AspectRatio ratio={21/9} className="w-full">
                  <img
                    src="/lovable-uploads/90b76e15-7546-440d-9d3b-a7715150eeb7.png"
                    alt="Event Locations Map"
                    className="w-full h-full object-contain"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">Übersicht der Veranstaltungsorte</h3>
                </div>
              </div>
              <div className="p-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white rounded-full shadow-md shadow-bitcoin/20 transition-all duration-300 hover:scale-105">
                  <Navigation className="mr-2 h-5 w-5" />
                  <a
                    href="https://www.google.com/maps/place/Saturn+Arena+Ingolstadt/@48.7735758,11.4424034,16z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Anfahrt
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full hover:bg-[#D3E4FD]/20">
                  <MapPin className="mr-2 h-5 w-5 text-bitcoin" />
                  <a
                    href="https://www.google.com/maps/search/Parkplätze+Saturn+Arena+Ingolstadt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Parkplätze
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Venue information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Saturn Arena info */}
          <div className="bg-white rounded-2xl p-8 border border-[#F2FCE2] shadow-md h-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-[#FDE1D3]/40 flex items-center justify-center flex-shrink-0 mt-1">
                <Building className="h-6 w-6 text-bitcoin" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Saturn Arena</h3>
                <p className="text-gray-600 mb-4">
                  Die Saturn Arena bildet das Zentrum des 3. BitcoinForum. Auf der Main-Stage werden alle Haupt-Vorträge stattfinden. 
                  Im "Umlauf" stellen sich Ihnen unsere Partner an ihren Messe-Ständen vor. Auch unsere Bitcoin-Kunstausstellung können Sie hier erleben.
                </p>
                <p className="text-gray-600 mb-4">
                  Selbstverständlich ist auch für Ihre Bewirtung bestens gesorgt. Die ERCI Catering GmbH bietet Ihnen eine große Auswahl 
                  an kalten und warmen Speisen sowie Getränke (alles gegen Selbstbezahlung).
                </p>
                <p className="text-gray-600">
                  Bei gutem Wetter werden wir auch die Außenanlagen der Saturn Arena nutzen, um Ihnen ein großartiges Event-Erlebnis bieten zu können.
                </p>
              </div>
            </div>
          </div>
          
          {/* Exerzierhaus info */}
          <div className="bg-white rounded-2xl p-8 border border-[#F2FCE2] shadow-md h-full">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-[#F2FCE2]/60 flex items-center justify-center flex-shrink-0 mt-1">
                <Building className="h-6 w-6 text-bitcoin" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Exerzierhaus</h3>
                <p className="text-gray-600 mb-4">
                  Das Exerzierhaus befindet sich in der unmittelbaren Nachbarschaft zur Saturn Arena. Nach nur wenigen Schritten treffen Sie dort 
                  auf unsere "Energy & Mining"-Area. Neben vielen Partnern und Messe-Ausstellern werden dort auch auf unserer "Side-Event-Bühne" 
                  Fachvorträge rund um das Thema stattfinden.
                </p>
                <p className="text-gray-600 mb-4">
                  Unser Fachpersonal freut sich auf die kleinen Bitcoiner und No-Coiner und sorgt für eine professionelle Kinderbetreuung 
                  mit einem bunten Unterhaltungs- und Rahmenprogramm.
                </p>
                <p className="text-gray-600">
                  Auch für Ihre Bewirtung ist im Exerzierhaus bestens gesorgt.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Travel information */}
        <div className="bg-white rounded-2xl p-8 border border-[#F2FCE2] shadow-md mb-12">
          <div className="flex items-start gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-[#D3E4FD]/50 flex items-center justify-center flex-shrink-0">
              <Navigation className="h-6 w-6 text-bitcoin" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Anfahrt</h3>
              <p className="text-gray-600 mb-4">
                Ingolstadt liegt genau zwischen Nürnberg und München unmittelbar an der Autobahn A9 und ist somit gut mit dem Auto zu erreichen. 
                Auch die Bahn-Anbindung ist sehr gut. Der Hauptbahnhof Ingolstadt ist nur 2 Kilometer von der Saturn Arena entfernt. 
                Die naheliegendsten Flughäfen befinden sich in München und Nürnberg.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#FDE1D3]/40 flex items-center justify-center flex-shrink-0">
                    <Car className="h-5 w-5 text-bitcoin" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Mit dem Auto</h4>
                    <p className="text-gray-600">Direkt an der Autobahn A9</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-[#F2FCE2]/60 flex items-center justify-center flex-shrink-0">
                    <Train className="h-5 w-5 text-bitcoin" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Mit der Bahn</h4>
                    <p className="text-gray-600">2km vom Hauptbahnhof Ingolstadt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-[#FDE1D3]/40 flex items-center justify-center flex-shrink-0">
              <ParkingSquare className="h-6 w-6 text-bitcoin" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Parkmöglichkeiten</h3>
              <p className="text-gray-600 mb-4">
                Direkt neben der Saturn Arena gibt es ein Parkhaus mit insgesamt 576 Stellplätzen. Das Parkhaus grenzt direkt an die Saturn Arena an 
                und bietet den kürzest möglichen Weg zum Arena-Eingang.
              </p>
              <p className="text-gray-600 mb-6">
                Zusätzlich stehen am und unter dem Stadttheater Ingolstadt sowie unter dem Congress Center weitere Parkflächen bzw. Tiefgaragen zur Verfügung.
              </p>
              
              <div className="bg-gray-50 rounded-xl p-6 mt-2">
                <h4 className="font-bold text-lg mb-4">Wir empfehlen:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center text-gray-600">
                    <span className="h-2 w-2 rounded-full bg-bitcoin mr-2"></span>
                    Tiefgarage Theater West
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="h-2 w-2 rounded-full bg-bitcoin mr-2"></span>
                    Tiefgarage Theater Ost
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="h-2 w-2 rounded-full bg-bitcoin mr-2"></span>
                    Tiefgarage Schloss
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="h-2 w-2 rounded-full bg-bitcoin mr-2"></span>
                    Congressgarage
                  </li>
                </ul>
                
                <div className="mt-6 text-center">
                  <p className="inline-block px-4 py-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200">
                    Bitte beachten Sie, dass alle Parkflächen kostenpflichtig sind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
