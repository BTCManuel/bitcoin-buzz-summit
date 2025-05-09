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

  const speakers: Speaker[] = [
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
                      className="mt-6 w-full py-2 rounded-full border border-bitcoin/30 text-bitcoin hover:bg-bitcoin/10 transition-colors text-sm"
                    >
                      {isExpanded ? 'Weniger anzeigen' : 'Mehr anzeigen'}
                    </button>

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
