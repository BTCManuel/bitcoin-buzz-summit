
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, ArrowRight, Bitcoin, BookOpen, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Workshop = () => {
  const workshops = [
    {
      id: 1,
      title: "Workshop 1",
      description: "Bitcoin als Wertanlage für Family Offices",
      icon: <Bitcoin className="h-10 w-10 text-bitcoin mb-3" />,
      bgColor: "bg-[#FEF7CD]",
      borderColor: "border-[#FDE1D3]"
    },
    {
      id: 2,
      title: "Workshop 2",
      description: "Eigene Bitcoin Full Node aufsetzen",
      icon: <Target className="h-10 w-10 text-bitcoin mb-3" />,
      bgColor: "bg-[#E2F4FF]",
      borderColor: "border-[#CCE8FF]"
    },
    {
      id: 3,
      title: "Workshop 3",
      description: "Hardware-Wallet bauen und verstehen",
      icon: <BookOpen className="h-10 w-10 text-bitcoin mb-3" />,
      bgColor: "bg-[#D3E4FD]",
      borderColor: "border-[#F2FCE2]"
    },
    {
      id: 4,
      title: "Workshop 4",
      description: "Lightning Network im Detail",
      icon: <Users className="h-10 w-10 text-bitcoin mb-3" />,
      bgColor: "bg-[#F2FCE2]",
      borderColor: "border-[#D3E4FD]"
    },
    {
      id: 5,
      title: "Workshop 5",
      description: "Bitcoin für Unternehmen",
      icon: <Bitcoin className="h-10 w-10 text-bitcoin mb-3" />,
      bgColor: "bg-[#FDE1D3]",
      borderColor: "border-[#FEF7CD]"
    },
    {
      id: 6,
      title: "Workshop 6",
      description: "Bitcoin-Mining verstehen",
      icon: <Target className="h-10 w-10 text-bitcoin mb-3" />,
      bgColor: "bg-[#FEF7CD]",
      borderColor: "border-[#FDE1D3]"
    },
    {
      id: 7,
      title: "Workshop 7",
      description: "Steuerrechtliche Aspekte von Bitcoin",
      icon: <BookOpen className="h-10 w-10 text-bitcoin mb-3" />,
      bgColor: "bg-[#E2F4FF]",
      borderColor: "border-[#CCE8FF]"
    },
    {
      id: 8,
      title: "Workshop 8",
      description: "Bitcoin DeFi und Smart Contracts",
      icon: <Users className="h-10 w-10 text-bitcoin mb-3" />,
      bgColor: "bg-[#D3E4FD]",
      borderColor: "border-[#F2FCE2]"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <main>
        <section className="py-20 bg-gradient-to-b from-white to-[#F2FCE2]/50 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <div className="inline-block mb-4 px-4 py-1 bg-[#FEF7CD] backdrop-blur-sm rounded-full border border-bitcoin/20">
                <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Workshops</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Bitcoin Workshops</h1>
              <p className="text-xl text-gray-600 mb-8">
                9. BIS 11. OKTOBER! - Technische Hochschule Ingolstadt
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-md border border-gray-100">
                <p className="text-gray-600">
                  Vertiefen Sie Ihr Wissen in unseren praxisorientierten Workshops und erlangen Sie wertvolle 
                  Kenntnisse und Fähigkeiten im Umgang mit Bitcoin und Blockchain-Technologie.
                </p>
              </div>
            </div>
            
            {/* Workshop Cards - 3 rows with 4 cards each */}
            <div className="space-y-12">
              {[0, 1, 2].map((row) => (
                <div key={row} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {workshops.slice(row * 4, (row + 1) * 4).map((workshop) => (
                    <Card 
                      key={workshop.id} 
                      className={`border ${workshop.borderColor} shadow-md hover:shadow-xl transition-all duration-300 
                      hover:translate-y-[-5px] ${workshop.bgColor}/30 text-gray-800 rounded-2xl overflow-hidden h-full`}
                    >
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mx-auto flex justify-center bg-white/60 w-16 h-16 rounded-full items-center mb-6 shadow-inner border border-white/80">
                          {workshop.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">{workshop.title}</h3>
                        <p className="text-gray-600 mb-4 flex-grow">{workshop.description}</p>
                        <Button variant="outline" className="w-full border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white mt-auto">
                          Anmelden <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-20 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-bitcoin/5 to-bitcoin/10 rounded-xl p-8 border border-bitcoin/20 shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Ticket Optionen</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-8 border border-gray-200 flex flex-col shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Standard Ticket</h3>
                    <ul className="space-y-4 flex-1">
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-bitcoin" />
                        </div>
                        <span>Teilnahme an einem Workshop</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-bitcoin" />
                        </div>
                        <span>Teilnahme an der Abendveranstaltung</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-bitcoin" />
                        </div>
                        <span>Alle Getränke und Speisen</span>
                      </li>
                    </ul>
                    <div className="text-center mt-8">
                      <h4 className="text-3xl font-bold mb-3 text-bitcoin">121€</h4>
                      <Button className="w-full bg-bitcoin hover:bg-bitcoin/80 text-white">
                        Jetzt registrieren
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-md">
                    <h3 className="text-xl font-semibold mb-4">VIP Ticket</h3>
                    <p className="text-gray-600 mb-6">
                      Mit dem VIP-Ticket erhalten Sie Zugang zu allen Workshops und Vorträgen sowie zu exklusiven VIP Gesprächen mit Experten und Referenten.
                    </p>
                    <div className="text-center mt-6">
                      <Link to="https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25" className="inline-flex items-center px-6 py-3 bg-bitcoin hover:bg-bitcoin/80 text-white font-medium rounded-full transition-colors duration-300">
                        VIP Ticket bestellen <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
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
