
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bitcoin, Users, Globe, Target, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: <Bitcoin className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Bitcoin & Blockchain",
      description: "Einführung in die Welt der Kryptowährungen und die zugrundeliegende Blockchain-Technologie.",
      bgColor: "bg-[#FEF7CD]",
      borderColor: "border-[#FDE1D3]"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Workshops",
      description: "Praxisorientierte Workshops zu verschiedenen Bitcoin- und Blockchain-Themen.",
      bgColor: "bg-[#E2F4FF]",
      borderColor: "border-[#CCE8FF]",
      link: "/workshop"
    },
    {
      icon: <Users className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Networking",
      description: "Treffen Sie Experten und Gleichgesinnte im Bereich Kryptowährungen und Blockchain.",
      bgColor: "bg-[#D3E4FD]",
      borderColor: "border-[#F2FCE2]"
    },
    {
      icon: <Globe className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Digitale Zukunft",
      description: "Erfahren Sie mehr über die Auswirkungen der Digitalisierung auf die Finanzwelt.",
      bgColor: "bg-[#F2FCE2]",
      borderColor: "border-[#D3E4FD]"
    },
    {
      icon: <Target className="h-12 w-12 text-bitcoin mb-4" />,
      title: "Bildung & Information",
      description: "Fokussierte Präsentationen zu Bitcoin und Blockchain-spezifischen Themen.",
      bgColor: "bg-[#FDE1D3]",
      borderColor: "border-[#FEF7CD]"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`border ${feature.borderColor} shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] ${feature.bgColor}/30 text-gray-800 rounded-2xl overflow-hidden`}>
              <CardContent className="p-8 text-center">
                <div className="mx-auto flex justify-center bg-white/60 w-20 h-20 rounded-full items-center mb-6 shadow-inner border border-white/80">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                {feature.link && (
                  <Link 
                    to={feature.link} 
                    className="mt-4 inline-block text-bitcoin hover:text-bitcoin-dark font-medium"
                  >
                    Mehr erfahren →
                  </Link>
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
