
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

interface TicketTier {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
}

const Register = () => {
  const ticketTiers: TicketTier[] = [
    {
      name: "Standard Pass",
      price: "$499",
      features: [
        "Full conference access",
        "Access to all keynotes & panels",
        "Coffee breaks & lunches",
        "Networking reception",
      ],
      buttonText: "Register Now",
      highlighted: false
    },
    {
      name: "VIP Pass",
      price: "$999",
      features: [
        "All Standard Pass benefits",
        "VIP seating at keynotes",
        "Exclusive speaker dinner",
        "1-year Bitcoin magazine subscription",
        "Priority workshop registration"
      ],
      buttonText: "Register as VIP",
      highlighted: true
    },
    {
      name: "Workshop Pass",
      price: "$199",
      features: [
        "Access to all workshops only",
        "Coffee breaks & lunch on workshop day",
        "Workshop materials",
        "Certificate of participation"
      ],
      buttonText: "Register for Workshops",
      highlighted: false
    }
  ];

  return (
    <section id="register" className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('public/lovable-uploads/2e1fd836-1d6d-4649-acee-c2ec7d832dac.png')] opacity-5 bg-cover bg-center"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 text-white">
          <div className="inline-block mb-4 px-4 py-1 bg-bitcoin/10 backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Tickets</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Register Now</h2>
          <p className="text-xl text-gray-300">
            Secure your spot at Bitcoin Buzz Summit 2025 and be part of the conversation shaping the future of Bitcoin
          </p>
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
                  <div className="text-4xl font-bold mb-0 text-bitcoin">{tier.price}</div>
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
                  <Button 
                    className={`w-full rounded-full transition-all duration-300 ${
                      tier.highlighted 
                        ? 'bg-bitcoin hover:bg-bitcoin-dark text-white shadow-lg shadow-bitcoin/20' 
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                  >
                    {tier.buttonText}
                  </Button>
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
