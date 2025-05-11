
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Workshop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('public/lovable-uploads/8ccc391f-3aec-4411-804f-29b3b72db6c2.png')] opacity-10 bg-cover bg-center"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-white">
              <div className="mb-8">
                <div className="inline-block mb-4 px-4 py-1 bg-bitcoin/10 backdrop-blur-sm rounded-full border border-bitcoin/20">
                  <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Workshop</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Bitcoin als Wertanlage für Family Offices</h1>
                <p className="text-xl text-gray-300 mb-8">
                  9. BIS 11. OKTOBER! - Technische Hochschule Ingolstadt
                </p>
                
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 mb-8">
                  <p className="text-gray-200">
                    Family Offices stehen vor der Herausforderung, Vermögen langfristig zu schützen und zu vermehren. Bitcoin gewinnt als 
                    digitales, inflationssicheres Asset zunehmend an Bedeutung – doch welche Chancen und Risiken birgt die Integration in eine 
                    strategische Anlagestruktur?
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
                  <h2 className="text-2xl font-bold mb-6 text-bitcoin">In diesem exklusiven Workshop erhalten Sie:</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-3 h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-bitcoin" />
                      </div>
                      <span>Fundierte Einblicke in Bitcoin als "digitales Gold"</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-bitcoin" />
                      </div>
                      <span>Strategien zur Beimischung von Bitcoin als Portfolioabsicherung</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-bitcoin" />
                      </div>
                      <span>Steuerliche Aspekte die zu beachten sind</span>
                    </li>
                  </ul>
                  
                  <p className="mt-6 text-gray-300">
                    Nutzen Sie die Gelegenheit, Ihr Wissen zu erweitern und sich mit Experten sowie Gleichgesinnten zu vernetzen.
                  </p>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="rounded-full bg-gradient-to-br from-bitcoin/30 to-bitcoin/10 p-8">
                    <img 
                      src="/lovable-uploads/8ccc391f-3aec-4411-804f-29b3b72db6c2.png" 
                      alt="Bitcoin Workshop" 
                      className="w-64 h-64 object-contain" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">Ticket</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 flex flex-col">
                    <h3 className="text-xl font-semibold mb-4">Ticket beinhaltet</h3>
                    <ul className="space-y-4 flex-1">
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-bitcoin" />
                        </div>
                        <span>Teilnahme am Workshop "Family Office"</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-bitcoin" />
                        </div>
                        <span>Teilnahme am der Abendveranstaltung</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-bitcoin" />
                        </div>
                        <span>Alle Getränke und Speisen</span>
                      </li>
                    </ul>
                    <div className="text-center mt-8">
                      <h4 className="text-3xl font-bold mb-2 text-bitcoin">121€</h4>
                      <Button className="w-full bg-bitcoin hover:bg-bitcoin/80 text-white">
                        Jetzt registrieren
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
                    <h3 className="text-xl font-semibold mb-4">Weitere Tickets</h3>
                    <p className="text-gray-300 mb-6">
                      Wenn Sie mehr über Bitcoin erfahren möchten, können Sie am Freitag und Samstag an weiteren Vorträge und Workshops teilnehmen. Mit dem VIP-Ticket erhalten Sie Zugang zu allen Vorträgen und zu exklusiven VIP Gesprächen.
                    </p>
                    <div className="text-center mt-6">
                      <a href="https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-bitcoin/20 hover:bg-bitcoin/30 text-bitcoin font-medium rounded-full transition-colors duration-300">
                        VIP Ticket bestellen
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">Abendveranstaltung</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 text-center">
                    <p className="text-xl">Findet Abends statt</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
                    <h3 className="text-xl font-semibold mb-4">Übersicht über alle Workshops</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-bitcoin" />
                        </div>
                        <span>Eigene Fullnode <span className="text-bitcoin text-sm">Link- gleich buchen</span></span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-bitcoin" />
                        </div>
                        <span>Hardware-Wallet bauen <span className="text-bitcoin text-sm">Link- gleich buchen</span></span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-bitcoin" />
                        </div>
                        <span>Beer Tap <span className="text-bitcoin text-sm">Link- gleich buchen</span></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Workshop;
