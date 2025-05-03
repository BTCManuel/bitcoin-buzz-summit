
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
}

const Speakers = () => {
  const speakers: Speaker[] = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "BitLabs",
      image: "",
      bio: "Pioneering researcher in Bitcoin scalability solutions and ecosystem development."
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      company: "Lightning Network",
      image: "",
      bio: "Core contributor to Lightning Network protocol and Bitcoin scaling technologies."
    },
    {
      name: "Elena Rodriguez",
      role: "Founder",
      company: "Crypto Economics Institute",
      image: "",
      bio: "Expert in Bitcoin monetary policy and macroeconomic implications."
    },
    {
      name: "David Kim",
      role: "Director",
      company: "Digital Asset Research",
      image: "",
      bio: "Specializes in Bitcoin security models and institutional adoption strategies."
    },
    {
      name: "Aisha Patel",
      role: "Partner",
      company: "Blockchain Ventures",
      image: "",
      bio: "Investor focused on Bitcoin and Lightning Network infrastructure projects."
    },
    {
      name: "Thomas Wright",
      role: "Chief Security Officer",
      company: "BitGuard",
      image: "",
      bio: "Leading expert in Bitcoin wallet security and custody solutions."
    }
  ];

  return (
    <section id="speakers" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Speakers</h2>
          <p className="text-lg text-gray-600">
            Learn from the brightest minds and influential leaders in the Bitcoin space
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarFallback className="bg-bitcoin text-white text-xl">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                  <p className="text-bitcoin font-medium mb-1">{speaker.role}</p>
                  <p className="text-gray-500 mb-4">{speaker.company}</p>
                  <p className="text-gray-600 text-center">{speaker.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
