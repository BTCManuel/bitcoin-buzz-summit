
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Star, TicketPercent } from 'lucide-react';
import { Link } from 'react-router-dom';

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
}

const Register = () => {
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
      discountPercentage: 21
    },
    {
      name: "VIP-Ticket",
      originalPrice: "2.100€",
      price: "1.050€",
      features: [
        "Zugang zu allen Vorträgen",
        "Exklusiven VIP-Loungezugang",
        "Exklusives Abendessen mit den Sprechern",
        "VIP-Sitzplätze bei Vorträgen",
        "Bevorzugte Workshop-Anmeldung",
        "2 Übernachtungen im Hotel Enzo",
        "Volle Verpfegung",
      ],
      buttonText: "Als VIP registrieren",
      highlighted: true,
      link: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25",
      discountPercentage: 50
    },
    {
      name: "Workshop: Family Office",
      originalPrice: "121€",
      price: "95,59€",
      features: [
        "Fundierte Einblicke in Bitcoin als 'digitales Gold'",
        "Strategien zur Beimischung von Bitcoin",
        "Zugang zu allen Vorträgen",
      ],
      buttonText: "Workshop Details",
      highlighted: false,
      link: "/workshop",
      isWorkshop: true,
      discountPercentage: 21
    }
  ];

  return (
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
              Sichern Sie sich Ihren Platz beim 3. Bitcoin Forum 2025 und werden Sie Teil der Diskussion über die Zukunft von Bitcoin.
            </p>
            
            <a href="https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25" 
               className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300"
               aria-label="Frühbucher Rabatt 21%-50%">
              <div className="relative group">
                <img 
                  src="/images/ticket/rabatt.png" 
                  alt="Frühbucher Rabatt 21%-50%" 
                  className="w-[300px] h-[300px] object-contain rounded-full rotate-[15deg] animate-pulse"
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
          {ticketTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:translate-y-[-5px] overflow-hidden rounded-2xl ${
                tier.highlighted 
                  ? 'bg-gradient-to-br from-bitcoin/20 to-black ring-2 ring-bitcoin' 
                  : 'bg-gradient-to-br from-gray-800 to-gray-900'
              }`}
            >
              <CardContent className="p-0">
                <div className={`p-8 ${tier.highlighted ? 'relative' : ''}`}>
                  {tier.highlighted && (
                    <div className="absolute top-4 right-4 bg-bitcoin rounded-full p-1">
                      <Star className="h-4 w-4 text-white" fill="white" />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-1 text-white">{tier.name}</h3>
                  
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-gray-400 line-through text-lg">{tier.originalPrice}</span>
                    <div className="text-4xl font-bold text-bitcoin">{tier.price}</div>
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
                    <a
                      href={tier.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center w-full rounded-full py-3 transition-all duration-300 font-medium ${
                        tier.highlighted 
                          ? 'bg-bitcoin hover:bg-bitcoin-dark text-white shadow-lg shadow-bitcoin/20' 
                          : 'bg-gray-700 hover:bg-gray-600 text-white'
                      }`}
                    >
                      {tier.buttonText}
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Register;
