
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

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
    <section id="register" className="py-24 bitcoin-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Register Now</h2>
          <p className="text-lg">
            Secure your spot at Bitcoin Buzz Summit 2025 and be part of the conversation shaping the future of Bitcoin
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ticketTiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-xl overflow-hidden ${tier.highlighted ? 'ring-4 ring-white' : ''}`}
            >
              <CardContent className="p-0">
                <div className={`p-6 ${tier.highlighted ? 'bg-white text-black' : 'bg-gray-50'}`}>
                  <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                  <div className="text-3xl font-bold mb-4">{tier.price}</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-bitcoin mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.highlighted ? 'bg-bitcoin hover:bg-bitcoin-dark text-white' : 'bg-white text-bitcoin hover:bg-gray-100'}`}
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
