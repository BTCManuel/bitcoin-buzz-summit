
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  bgColor: string;
}

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = React.useState<Speaker | null>(null);

  const speakersData: Speaker[] = [
    {
      name: "Alex von Frankenberg",
      role: "CEO",
      company: "High-Tech Gründerfonds (HTGF)",
      image: "/images/speakers/frankenberg.jpg",
      bio: "leitete von 2005 bis 2025 den High-Tech Gründerfonds (HTGF), Europas aktivsten Frühphaseninvestor mit fast 800 Seed Investments und 2 Mrd. Euro in fünf Fonds. Zuvor war er u.a. bei Siemens, einem IT-Startup und in der Beratung tätig. Seit 2016 beschäftigt er sich intensiv mit Bitcoin als möglichem Wertspeicherstandard.",
      bgColor: "bg-[#F2FCE2]/50"
    },
    {
      name: "Chris Seedor",
      role: "Gründer & Entwickler",
      company: "SEEDOR",
      image: "/images/speakers/Chris_Seedor.jpg",
      bio: "begann seine Karriere als Materialwissenschaftler und Fertigungsberater in Deutschland und China, bevor er seine größte Leidenschaft entdeckte: Bitcoin. Als Mitgründer und Geschäftsführer von seedor.io, bitsurance.io und satskeeper.com ist er eine zentrale Figur in der deutschen Bitcoin-Szene, insbesondere in den Bereichen Verwahrung, Versicherung und Vererbung von Bitcoin.",
      bgColor: "bg-[#D3E4FD]/50"
    },
    {
      name: "der Helper",
      role: "Content Creator",
      company: "",
      image: "/images/speakers/der_Helper.jpg",
      bio: "ist bekannt durch seine Infografiken und Erklärvideos, in denen er mit leicht verständlicher Sprache die Genialität von Bitcoin erklärt. Durch seine lockere Art und einfache Sprache gilt er für viele als erste Anlaufstelle, wenn es darum geht, einen Blick in den Bitcoin Kaninchenbau zu werfen.",
      bgColor: "bg-[#FDE1D3]/50"
    },
    {
      name: "Lea Kelwin",
      role: "Content Creatorin",
      company: "",
      image: "/images/speakers/Lea_Kelwin.jpg",
      bio: "arbeitet als Hebamme und engagiert sich leidenschaftlich für Frauengesundheit, Selbstbestimmung und soziale Gerechtigkeit. Energie ist dabei der Grundbaustein – ohne sie gibt es weder Neuanfänge noch körperliche oder geistige Fruchtbarkeit. Bitcoin wird durch Energie gestützt und kann als Werkzeug genutzt werden, um den Weg zu mehr Selbstbestimmung und nachhaltiger Gesundheit zu begleiten. Letztlich liegt es bei dir selbst, innovative Technologie für deine ganz eigenen Lösungswege einzusetzen. Lea ist Mitgründerin der Non-Profit-Initiative Bitcoin Block.",
      bgColor: "bg-[#FEF7CD]/50"
    },
    {
      name: "Patrick Linus",
      role: "Lehrer",
      company: "The Progressive Bitcoiner Podcast",
      image: "/images/speakers/Patrick_Linus.jpg",
      bio: "ist Lehrer, Lehrplanautor und Berater im Bildungsbereich, Podcaster und Familienvater. Seit 2017 setzt er sich leidenschaftlich dafür ein, die Souveränität der kommenden Generation im digitalen Zeitalter zu stärken. Er unterstützt Pädagogen und Schulen bei der konzeptionellen Umsetzung seines maßgeschneiderten Medienbildungskonzepts – ein modular flexibler, Open-Source-Lehrplan, der frei verfügbar ist. Überzeugt davon, dass grundlegendes Wissen über Medien und Kommunikation essenziell ist, sieht er hierin die Basis für die erfolgreiche Vermittlung innovativer Technologien wie Bitcoin und KI. Zudem ist Patrick Gründer der Non-Profit-Initiative Bitcoin Block und engagiert sich aktiv dafür, die kulturelle und gesellschaftliche Bedeutung von Bitcoin in der Öffentlichkeit sichtbar zu machen.",
      bgColor: "bg-[#F2FCE2]/50"
    },
    {
      name: "Daniel Winklhammer",
      role: "CEO & Mitgründer",
      company: "21bitcoin (FIOR Digital GmbH)",
      image: "/images/speakers/Daniel_Winklhammer.jpg",
      bio: "ist ein echter Bitcoin-Enthusiast, der bereits während seiner Schulzeit mit der Kryptowährung in Berührung kam. Als CEO von 21bitcoin bringt er seine visionäre Führungsstärke und seine langjährige Erfahrung in der Finanz- und IT-Beratung ein. Mit Leidenschaft und Expertise treibt er die Mission voran, Bitcoin einer breiteren Zielgruppe zugänglich zu machen.",
      bgColor: "bg-[#D3E4FD]/50"
    }
  ];

  // Generate placeholder speakers to reach a total of 35
  const placeholderBackgrounds = [
    "bg-[#F2FCE2]/50",
    "bg-[#D3E4FD]/50", 
    "bg-[#FDE1D3]/50", 
    "bg-[#FEF7CD]/50"
  ];
  
  const generatePlaceholders = () => {
    const placeholders = [];
    for (let i = 1; i <= 29; i++) {
      placeholders.push({
        name: `Speaker ${i + 6}`,
        role: "Bitcoin Expert",
        company: "Bitcoin Community",
        image: "",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        bgColor: placeholderBackgrounds[i % placeholderBackgrounds.length]
      });
    }
    return placeholders;
  };

  const speakers = [...speakersData, ...generatePlaceholders()];

  return (
    <section id="speakers" className="py-20 bg-gradient-to-b from-[#F2FCE2]/50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block mb-3 px-4 py-1 bg-[#D3E4FD] backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Referenten</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">Unsere Experten</h2>
          <p className="text-lg text-gray-600">
            Lernen Sie von führenden Experten im Bereich Bitcoin und digitale Finanzen
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              onClick={() => setSelectedSpeaker(speaker)}
              className={`relative cursor-pointer transition-all duration-300 overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-md ${speaker.bgColor} p-2 hover:scale-105`}
            >
              <CardContent className="flex flex-col items-center p-1">
                <div className="w-full aspect-square mb-2 relative">
                  <Avatar className="h-full w-full rounded-lg overflow-hidden">
                    {speaker.image ? (
                      <AvatarImage
                        src={speaker.image}
                        alt={speaker.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <AvatarFallback className="h-full w-full text-lg bg-gradient-to-br from-white to-gray-100 text-bitcoin border-2 border-white">
                        {speaker.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </div>

                <h3 className="text-gray-800 font-semibold text-sm truncate w-full text-center">
                  {speaker.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Speaker Details Dialog */}
      <Dialog open={!!selectedSpeaker} onOpenChange={(open) => !open && setSelectedSpeaker(null)}>
        <DialogContent 
          className="max-w-2xl bg-white border-none shadow-xl rounded-xl"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">{selectedSpeaker?.name}</DialogTitle>
          </DialogHeader>
          
          <div className="flex flex-col md:flex-row gap-6 p-2 items-center">
            <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48">
              <Avatar className="h-full w-full rounded-xl overflow-hidden shadow-md border-2 border-white">
                {selectedSpeaker?.image ? (
                  <AvatarImage
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <AvatarFallback className="h-full w-full text-3xl bg-gradient-to-br from-white to-gray-100 text-bitcoin border-2 border-white">
                    {selectedSpeaker?.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                )}
              </Avatar>
            </div>
            
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap gap-2 items-center">
                {selectedSpeaker?.role && (
                  <span className="bg-white/70 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {selectedSpeaker.role}
                  </span>
                )}
                {selectedSpeaker?.company && (
                  <span className="bg-white/70 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {selectedSpeaker.company}
                  </span>
                )}
              </div>
              
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {selectedSpeaker?.bio}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Speakers;
