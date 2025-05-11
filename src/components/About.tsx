
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bitcoin, Users, Globe, Target, BookOpen, Shield, Code, Tv, Zap, Bolt, CalendarDays, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: <Bitcoin className="h-8 w-8 text-bitcoin mb-2" />,
      title: "Bitcoin & Blockchain",
      description: "Einführung in die Welt der Kryptowährungen und Blockchain-Technologie.",
      bulletPoint: "Grundlagen und Funktionsweise",
      bgColor: "bg-[#FEF7CD]",
      borderColor: "border-[#FDE1D3]"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-bitcoin mb-2" />,
      title: "Workshops",
      description: "Praxisorientierte Workshops zu verschiedenen Bitcoin-Themen.",
      bulletPoint: "Hands-on Learning",
      bgColor: "bg-[#E2F4FF]",
      borderColor: "border-[#CCE8FF]",
      link: "/workshop"
    },
    {
      icon: <Users className="h-8 w-8 text-bitcoin mb-2" />,
      title: "Networking",
      description: "Treffen Sie Experten und Gleichgesinnte im Bereich Kryptowährungen.",
      bulletPoint: "Branchenkontakte knüpfen",
      bgColor: "bg-[#D3E4FD]",
      borderColor: "border-[#F2FCE2]"
    },
    {
      icon: <Globe className="h-8 w-8 text-bitcoin mb-2" />,
      title: "Digitale Zukunft",
      description: "Auswirkungen der Digitalisierung auf die Finanzwelt.",
      bulletPoint: "Trends und Entwicklungen",
      bgColor: "bg-[#F2FCE2]",
      borderColor: "border-[#D3E4FD]"
    },
    {
      icon: <Target className="h-8 w-8 text-bitcoin mb-2" />,
      title: "Bildung & Information",
      description: "Fokussierte Präsentationen zu Bitcoin-spezifischen Themen.",
      bulletPoint: "Expertenwissen aus erster Hand",
      bgColor: "bg-[#FDE1D3]",
      borderColor: "border-[#FEF7CD]"
    },
    {
      icon: <Shield className="h-8 w-8 text-bitcoin mb-2" />,
      title: "Sicherheit",
      description: "Lernen Sie, wie Sie Ihre digitalen Vermögenswerte schützen können.",
      bulletPoint: "Sichere Aufbewahrung",
      bgColor: "bg-[#FEF7CD]",
      borderColor: "border-[#FDE1D3]"
    },
    {
      icon: <Code className="h-8 w-8 text-bitcoin mb-2" />,
      title: "Technologie",
      description: "Vertiefen Sie Ihr Verständnis der technischen Aspekte von Blockchain.",
      bulletPoint: "Technische Hintergründe",
      bgColor: "bg-[#E2F4FF]",
      borderColor: "border-[#CCE8FF]"
    },
    {
      icon: <Tv className="h-8 w-8 text-bitcoin mb-2" />,
      title: "Medien & Berichterstattung",
      description: "Einblicke in die mediale Darstellung von Bitcoin.",
      bulletPoint: "Öffentliche Wahrnehmung",
      bgColor: "bg-[#D3E4FD]",
      borderColor: "border-[#F2FCE2]"
    },
    {
      icon: <Zap className="h-8 w-8 text-bitcoin mb-2" />,
      title: "Innovation",
      description: "Entdecken Sie die neuesten Innovationen im Bereich Blockchain.",
      bulletPoint: "Neue Anwendungsfälle",
      bgColor: "bg-[#F2FCE2]",
      borderColor: "border-[#D3E4FD]"
    },
    {
      icon: <Bolt className="h-8 w-8 text-bitcoin mb-2" />,
      title: "Lightning Network",
      description: "Second-Layer-Lösung für schnelle Bitcoin-Transaktionen.",
      bulletPoint: "Skalierbarkeit und Geschwindigkeit",
      bgColor: "bg-[#FDE1D3]",
      borderColor: "border-[#FEF7CD]"
    },
    {
      icon: <CalendarDays className="h-8 w-8 text-bitcoin mb-2" />,
      title: "Zukunftsperspektiven",
      description: "Diskussionen über die zukünftige Entwicklung von Kryptowährungen.",
      bulletPoint: "Langfristige Visionen",
      bgColor: "bg-[#FEF7CD]",
      borderColor: "border-[#FDE1D3]"
    },
    {
      icon: <Clock className="h-8 w-8 text-bitcoin mb-2" />,
      title: "Geschichte",
      description: "Die Entstehungsgeschichte von Bitcoin und anderen Kryptowährungen.",
      bulletPoint: "Historische Entwicklung",
      bgColor: "bg-[#E2F4FF]",
      borderColor: "border-[#CCE8FF]"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-[#F2FCE2]/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-[#FEF7CD] backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Über das Forum</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Das 3. Bitcoin Forum</h2>
          <p className="text-lg text-gray-600">
            Zum dritten Mal lädt die VR-Bank Bayern Mitte zum Bitcoin Forum ein. In diesem Jahr erwartet Sie ein Expertenabend 
            mit Fachvorträgen zu Blockchain, Bitcoin und anderen digitalen Anlageformen.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border ${feature.borderColor} shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-3px] ${feature.bgColor}/30 text-gray-800 rounded-xl overflow-hidden`}
            >
              <CardContent className="p-4 flex flex-col h-full">
                <div className="mx-auto flex justify-center bg-white/60 w-14 h-14 rounded-full items-center mb-3 shadow-inner border border-white/80">
                  {feature.icon}
                </div>
                <h3 className="text-base font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-xs text-gray-600 mb-2 flex-grow">{feature.description}</p>
                <div className="mb-3 text-xs">
                  <span className="flex items-center">
                    <span className="h-1 w-1 rounded-full bg-bitcoin mr-2"></span>
                    {feature.bulletPoint}
                  </span>
                </div>
                {feature.link ? (
                  <Link to={feature.link} className="mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white transition-all text-xs"
                    >
                      Mehr erfahren
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white transition-all text-xs mt-auto"
                  >
                    Mehr erfahren
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
