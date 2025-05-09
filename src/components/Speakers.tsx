
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
      name: "Alex von Frankenberg",
      role: "Bitcoin-Experte",
      company: "VR-Bank Bayern Mitte eG",
      image: "",
      bio: "leitete von 2005 bis 2025 den High-Tech Gründerfonds (HTGF), Europas aktivsten Frühphaseninvestor mit fast 800 Seed Investments und 2 Mrd. Euro in fünf Fonds. Zuvor war er u.a. bei Siemens, einem IT-Startup und in der Beratung tätig. Seit 2016 beschäftigt er sich intensiv mit Bitcoin als möglichem Wertspeicherstandard.",
      bgColor: "bg-[#F2FCE2]/50"
    },
    {
      name: "Chris Seedor",
      role: "Professor",
      company: "Frankfurt School Blockchain Center",
      image: "",
      bio: "begann seine Karriere als Materialwissenschaftler und Fertigungsberater in Deutschland und China, bevor er seine größte Leidenschaft entdeckte: Bitcoin. Als Mitgründer und Geschäftsführer von seedor.io, bitsurance.io und satskeeper.com ist er eine zentrale Figur in der deutschen Bitcoin-Szene, insbesondere in den Bereichen Verwahrung, Versicherung und Vererbung von Bitcoin.",
      bgColor: "bg-[#D3E4FD]/50"
    },
    {
      name: "Carsten Hahn",
      role: "Kundenberater",
      company: "VR-Bank Bayern Mitte eG",
      image: "",
      bio: "Experte für digitale Anlageformen und Kryptowährungen im Bankwesen.",
      bgColor: "bg-[#FDE1D3]/50"
    },
    {
      name: "Georg Rutz",
      role: "Leiter Digitalisierung",
      company: "VR-Bank Bayern Mitte eG",
      image: "",
      bio: "Verantwortlich für die digitale Transformation und innovative Finanzlösungen.",
      bgColor: "bg-[#FEF7CD]/50"
    },
    {
      name: "Dr. Michael Geiger",
      role: "CEO",
      company: "Blockchain Research Institute",
      image: "",
      bio: "Forscht zu Anwendungsmöglichkeiten der Blockchain-Technologie in verschiedenen Branchen.",
      bgColor: "bg-[#F2FCE2]/50"
    },
    {
      name: "Laura Müller",
      role: "Finanzexpertin",
      company: "CryptoConsult GmbH",
      image: "",
      bio: "Spezialisiert auf die steuerlichen und rechtlichen Aspekte von Kryptowährungen.",
      bgColor: "bg-[#D3E4FD]/50"
    }
  ];

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
                      Profil Ansehen
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
