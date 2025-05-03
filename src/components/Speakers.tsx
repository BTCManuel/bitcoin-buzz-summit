
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  bgColor: string;
}

const Speakers = () => {
  const speakers: Speaker[] = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "BitLabs",
      image: "",
      bio: "Pioneering researcher in Bitcoin scalability solutions and ecosystem development.",
      bgColor: "bg-[#F2FCE2]/50"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      company: "Lightning Network",
      image: "",
      bio: "Core contributor to Lightning Network protocol and Bitcoin scaling technologies.",
      bgColor: "bg-[#D3E4FD]/50"
    },
    {
      name: "Elena Rodriguez",
      role: "Founder",
      company: "Crypto Economics Institute",
      image: "",
      bio: "Expert in Bitcoin monetary policy and macroeconomic implications.",
      bgColor: "bg-[#FDE1D3]/50"
    },
    {
      name: "David Kim",
      role: "Director",
      company: "Digital Asset Research",
      image: "",
      bio: "Specializes in Bitcoin security models and institutional adoption strategies.",
      bgColor: "bg-[#FEF7CD]/50"
    },
    {
      name: "Aisha Patel",
      role: "Partner",
      company: "Blockchain Ventures",
      image: "",
      bio: "Investor focused on Bitcoin and Lightning Network infrastructure projects.",
      bgColor: "bg-[#F2FCE2]/50"
    },
    {
      name: "Thomas Wright",
      role: "Chief Security Officer",
      company: "BitGuard",
      image: "",
      bio: "Leading expert in Bitcoin wallet security and custody solutions.",
      bgColor: "bg-[#D3E4FD]/50"
    }
  ];

  return (
    <section id="speakers" className="py-32 bg-gradient-to-b from-[#F2FCE2]/50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-[#D3E4FD] backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Speakers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Featured Speakers</h2>
          <p className="text-xl text-gray-600">
            Learn from the brightest minds and influential leaders in the Bitcoin space
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className={`border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] overflow-hidden rounded-2xl ${speaker.bgColor}`}>
              <CardContent className="p-8">
                <div className="flex flex-col items-center">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-bitcoin to-bitcoin-light blur-lg opacity-20"></div>
                    <Avatar className="h-28 w-28 ring-2 ring-white">
                      <AvatarFallback className="bg-gradient-to-br from-white to-gray-100 text-bitcoin text-2xl border-4 border-white">
                        {speaker.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 text-gray-800">{speaker.name}</h3>
                  <p className="text-bitcoin font-medium mb-1">{speaker.role}</p>
                  <p className="text-gray-500 mb-4">{speaker.company}</p>
                  <p className="text-gray-600 text-center">{speaker.bio}</p>
                  <div className="mt-6 w-full">
                    <button className="w-full py-2 rounded-full border border-bitcoin/30 text-bitcoin hover:bg-bitcoin/10 transition-colors text-sm">
                      View Profile
                    </button>
                  </div>
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
