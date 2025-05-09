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
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const speakers: Speaker[] = [/* ... dein Speaker-Array bleibt unverändert ... */];

  return (
    <section id="speakers" className="py-32 bg-gradient-to-b from-[#F2FCE2]/50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-[#D3E4FD] backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Referenten</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Unsere Experten</h2>
          <p className="text-xl text-gray-600">
            Lernen Sie von führenden Experten im Bereich Bitcoin und digitale Finanzen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <Card key={index} className={`border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] overflow-hidden rounded-2xl ${speaker.bgColor}`}>
                <CardContent className="p-8">
                  <div className="flex flex-col items-center">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-bitcoin to-bitcoin-light blur-lg opacity-20"></div>
                      <Avatar className="h-28 w-28 ring-2 ring-white overflow-hidden">
                        {speaker.image && (
                          <AvatarImage src={speaker.image} alt={speaker.name} className="h-full w-full object-cover" />
                        )}
                        <AvatarFallback className="bg-gradient-to-br from-white to-gray-100 text-bitcoin text-2xl border-4 border-white">
                          {speaker.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <h3 className="text-2xl font-bold mb-1 text-gray-800">{speaker.name}</h3>
                    <p className="text-bitcoin font-medium mb-1">{speaker.role}</p>
                    <p className="text-gray-500 mb-4">{speaker.company}</p>

                    <div
                      className={`text-gray-600 text-center transition-all duration-500 ease-in-out ${
                        isExpanded ? 'max-h-[500px]' : 'max-h-[4.5rem] line-clamp-2'
                      } overflow-hidden`}
                    >
                      {speaker.bio}
                    </div>

                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
                      className="mt-2 text-bitcoin text-sm underline hover:text-bitcoin-dark transition-colors"
                    >
                      {isExpanded ? 'Weniger anzeigen' : 'Mehr anzeigen'}
                    </button>

                    <div className="mt-6 w-full">
                      <button className="w-full py-2 rounded-full border border-bitcoin/30 text-bitcoin hover:bg-bitcoin/10 transition-colors text-sm">
                        Profil Ansehen
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
