
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Star, TicketPercent } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePopup } from "@/pages/PopupContext";


interface TicketTier {
  name: string;
  originalPrice: string;
  price: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
  link: string;
  isWorkshop?: boolean;
  discountPercentage?: number;
  // Add visibility control property
  visible?: boolean;
}

const Register = () => {
  const { openPopup } = usePopup();

  const ticketTiers: TicketTier[] = [
    {
      name: "Forum-Ticket",
      originalPrice: "21€",
      price: "16,59€ pro Tag",
      features: [
        "Voller Zugang zur Konferenz",
        "Zugang zu allen Vorträgen & Diskussionsrunden",
        "Networking",
      ],
      buttonText: "Jetzt registrieren",
      highlighted: false,
      link: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25",
      discountPercentage: 21,
      visible: true
    },
    {
      name: "VIP-Ticket",
      originalPrice: "2.100€",
      price: "1.050€",
      features: [
        "Zugang zu allen Vorträgen",
        "Exklusiven VIP-Loungezugang",
        "Exklusiven Zugang zu den Sprechern",
        "VIP-Sitzplätze bei Vorträgen",
        "2 Übernachtungen",
        "Volle Verpflegung",
      ],
      buttonText: "Als VIP registrieren",
      highlighted: true,
      link: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25",
      discountPercentage: 50,
      visible: true
    },
    {
      name: "Business Ticket",
      originalPrice: "121€",
      price: "95,59€",
      features: [
        "Zugang an allen 3 Tagen",
        "Inkl. Abendveranstaltung am Donnerstag",
        "Zugang zu Vorträgen für Unternehmer, Banker, Family Offices",
      ],
      buttonText: "Business Ticket registrieren",
      highlighted: false,
      link: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25",
      discountPercentage: 21,
      visible: true
    }
  ];

  // Filter visible ticket tiers
  const visibleTicketTiers = ticketTiers.filter(tier => tier.visible !== false);

  // Check if we should show the section
  const showTicketSection = visibleTicketTiers.length > 0;

  return (
    <>
      {showTicketSection && (
        <section id="register" className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('images/ticket/rabatt.png')] opacity-5 bg-cover bg-center"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16 text-white">
              <div className="inline-block mb-4 px-4 py-1 bg-bitcoin/10 backdrop-blur-sm rounded-full border border-bitcoin/20">
                <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Tickets</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Jetzt Registrieren</h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
                <p className="text-xl text-gray-300">
                  Sichern Sie sich Ihren Platz beim BitcoinForum 2025 und entscheiden Sie selbst wie Bitcoin Ihnen in Zukunft helfen kann.
                </p>
                
                <a href="https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25" 
                  className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300"
                  aria-label="Frühbucher Rabatt 21%-50%">
                  <div className="relative group">
                    <img 
                      src="/images/ticket/rabatt.png" 
                      alt="Frühbucher Rabatt 21%-50%" 
                      className="w-[250px] h-[250px] object-contain rounded-full rotate-[45deg] animate-pulse"
                      style={{
                        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
                      }}
                    />
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {visibleTicketTiers.map((tier, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px] overflow-hidden rounded-2xl ${
                    tier.highlighted 
                      ? 'bg-gradient-to-br from-bitcoin/5 via-zinc-900 to-black ring-2 ring-bitcoin' 
                      : 'bg-gradient-to-br from-gray-800 to-gray-900'
                  }`}
                >
                  <CardContent className={`p-0 ${tier.highlighted ? 'bg-black/60' : ''}`}>
                    <div className="p-8 relative">
                      {tier.highlighted && (
                        <div className="absolute top-4 right-4 bg-bitcoin rounded-full p-1">
                          <Star className="h-4 w-4 text-white" fill="white" />
                        </div>
                      )}
                      <h3 className="text-2xl font-bold mb-1 text-white">{tier.name}</h3>
                      
                      <div className="mb-3">
                        <div className="text-4xl font-bold text-red-500 line-through">{tier.originalPrice}</div>
                        <div className="text-4xl font-bold text-bitcoin mt-1 leading-tight">
                          {tier.price.split(' ')[0]}
                          <div className="text-sm text-gray-400 mt-1">{tier.price.split(' ').slice(1).join(' ')}</div>
                        </div>
                      </div>

                      {tier.discountPercentage && (
                        <div className="inline-flex items-center bg-bitcoin/20 px-2 py-1 rounded text-sm text-white mb-2">
                          <TicketPercent className="h-4 w-4 mr-1" /> 
                          <span>{tier.discountPercentage}% Rabatt</span>
                        </div>
                      )}
                    </div>
                    <div className="p-8 border-t border-gray-700">
                      <ul className="space-y-4 mb-8">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-gray-300">
                            <div className="mr-3 h-6 w-6 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="h-3 w-3 text-bitcoin" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {tier.isWorkshop ? (
                        <Link
                          to={tier.link}
                          className={`block text-center w-full rounded-full py-3 transition-all duration-300 font-medium bg-gray-700 hover:bg-gray-600 text-white`}
                        >
                          {tier.buttonText}
                        </Link>
                      ) : (
                        <button
                          onClick={() =>
                            openPopup({
                              redirectUrl: tier.link
                            })
                          }
                          className={`block text-center w-full rounded-full py-3 transition-all duration-300 font-medium ${
                            tier.highlighted 
                              ? 'bg-bitcoin hover:bg-bitcoin-dark text-white shadow-lg shadow-bitcoin/20' 
                              : 'bg-gray-700 hover:bg-gray-600 text-white'
                          }`}
                        >
                          {tier.buttonText}
                        </button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Register;
