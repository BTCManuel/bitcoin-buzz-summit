
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bitcoin, Users, Globe, Target, BookOpen, Shield, Code, Tv, Zap, Bolt, CalendarDays, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: <Bitcoin className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Bitcoin & Blockchain",
      description: "Einführung in die Welt der Kryptowährungen und die zugrundeliegende Blockchain-Technologie.",
      bgColor: "bg-transparent",
      borderColor: "border-[#FDE1D3]"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Workshops",
      description: "Praxisorientierte Workshops zu verschiedenen Bitcoin- und Blockchain-Themen.",
      bgColor: "bg-transparent",
      borderColor: "border-[#CCE8FF]",
      link: "/workshop"
    },
    {
      icon: <Users className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Networking",
      description: "Treffen Sie Experten und Gleichgesinnte im Bereich Kryptowährungen und Blockchain.",
      bgColor: "bg-transparent",
      borderColor: "border-[#F2FCE2]"
    },
    {
      icon: <Globe className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Digitale Zukunft",
      description: "Erfahren Sie mehr über die Auswirkungen der Digitalisierung auf die Finanzwelt.",
      bgColor: "bg-transparent",
      borderColor: "border-[#D3E4FD]"
    },
    {
      icon: <Target className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Bildung & Information",
      description: "Fokussierte Präsentationen zu Bitcoin und Blockchain-spezifischen Themen.",
      bgColor: "bg-transparent",
      borderColor: "border-[#FEF7CD]"
    },
    {
      icon: <Shield className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Sicherheit",
      description: "Lernen Sie, wie Sie Ihre digitalen Vermögenswerte sicher aufbewahren können.",
      bgColor: "bg-transparent",
      borderColor: "border-[#FDE1D3]"
    },
    {
      icon: <Code className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Technologie",
      description: "Vertiefen Sie Ihr Verständnis der technischen Aspekte von Blockchain und Kryptowährungen.",
      bgColor: "bg-transparent",
      borderColor: "border-[#CCE8FF]"
    },
    {
      icon: <Tv className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Medien & Berichterstattung",
      description: "Einblicke in die mediale Darstellung und öffentliche Wahrnehmung von Bitcoin.",
      bgColor: "bg-transparent",
      borderColor: "border-[#F2FCE2]"
    },
    {
      icon: <Zap className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Innovation",
      description: "Entdecken Sie die neuesten Innovationen im Bereich der Blockchain-Technologie.",
      bgColor: "bg-transparent",
      borderColor: "border-[#D3E4FD]"
    },
    {
      icon: <Bolt className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Lightning Network",
      description: "Erfahren Sie mehr über die Second-Layer-Lösung für schnelle Bitcoin-Transaktionen.",
      bgColor: "bg-transparent",
      borderColor: "border-[#FEF7CD]"
    },
    {
      icon: <CalendarDays className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Zukunftsperspektiven",
      description: "Diskussionen über die zukünftige Entwicklung und das Potenzial von Kryptowährungen.",
      bgColor: "bg-transparent",
      borderColor: "border-[#FDE1D3]"
    },
    {
      icon: <Clock className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Geschichte",
      description: "Die Entstehungsgeschichte von Bitcoin und anderen Kryptowährungen.",
      bgColor: "bg-transparent",
      borderColor: "border-[#CCE8FF]"
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-[#F2FCE2]/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-[#FEF7CD] backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Über das Forum</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Das 3. Bitcoin Forum</h2>
          <p className="text-xl text-gray-600">
            Zum dritten Mal lädt die VR-Bank Bayern Mitte zum Bitcoin Forum ein. In diesem Jahr erwartet Sie ein Expertenabend 
            mit Fachvorträgen zu Blockchain, Bitcoin und anderen digitalen Anlageformen. Lernen Sie mehr über die Nutzungsmöglichkeiten, 
            Chancen und Risiken von Kryptowährungen in einer zunehmend digitalisierten Finanzwelt.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border ${feature.borderColor} shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] ${feature.bgColor}/30 text-gray-800 rounded-2xl overflow-hidden`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mx-auto flex justify-center bg-white/60 w-20 h-20 rounded-full items-center mb-6 shadow-inner border border-white/80">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>
                {feature.link ? (
                  <Link to={feature.link} className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white transition-all duration-300"
                    >
                      Mehr erfahren
                    </Button>
                  </Link>
                ) : (
                  <Button 
                    variant="outline" 
                    className="w-full border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white transition-all duration-300 mt-auto"
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
