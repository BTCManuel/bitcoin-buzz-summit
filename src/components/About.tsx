import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Bitcoin, Users, Globe, Target, BookOpen, Shield, Code, Tv, Zap, Bolt, CalendarDays, Clock, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { usePopup } from "@/pages/PopupContext";

const About = () => {
  const { openPopup } = usePopup();
  const features = [
    {
      icon: <img src="/images/speakers/Bitcoin_Block.png" alt="Bitcoin Block" className="h-12 w-12 mb-4" loading="lazy" />,
      title: "Bitcoin Block",
      description: "Schon ab dem 4. Oktober beginnt die Bitcoin Woche in Ingolstadt. Im Westpark Shoppingcenter öffent der Bitcoin Block seine Tore. Informationen über Bitcoin für interessierte Laien und Bitcoiner.",
      bgColor: "bg-transparent",
      borderColor: "border-[#FDE1D3]",
      link: "/bitcoin-block",
      buttonText: "Mehr erfahren",
      external: false
    },
    {
      icon: <img src="/images/workshop/light-bulb-idea.svg" alt="BitcoinForum Bitcoin Mining" className="h-12 w-12 mb-4" loading="lazy" />,
      title: "Energiewirtschaft & Mining",
      description: "Bitcoin kann Stromnetze stabilisieren und wird überwiegend mit grüner Energie betrieben. Bitcoin Mining kann 'verschwendeten' grünen Strom (Solar/Wind/Bio) wirtschaftlicher machen.",
      bgColor: "bg-transparent",
      borderColor: "border-[#CCE8FF]",
      link: "/workshop",
      buttonText: "Workshop ansehen",
      external: false
    },
     {
      icon: <img src="/images/workshop/le_femmes.png" alt="Les Femmes Orange" className="h-12 w-12 mb-4" loading="lazy" />,
      title: "Les Femmes Orange",
      description: "Les Femmes Orange hat das Ziel, eine lebendige und unterstützende Gemeinschaft für Frauen weltweit aufzubauen – egal ob Einsteigerin oder Fortgeschrittene.",
      bgColor: "bg-transparent",
      borderColor: "border-[#F2FCE2]",
      buttonText: "Platz reservieren",
    },
    {
      icon: <img src="/images/workshop/bitcoin-help-support.svg" alt="BitcoinForum BIP25" className="h-12 w-12 mb-4" loading="lazy" />,
      title: "BIP25 Members",
      description: "Das ist das engagiertes Team hinter der Organisation und Umsetzung des 3. BitcoinForums. Sie gestalten ein einzigartiges Event, das Wissen, Austausch und Inspiration vereint.",
      bgColor: "bg-transparent",
      borderColor: "border-[#F2FCE2]",
      buttonText: "Mehr über das Team",
    },
    {
      icon: <img src="/images/workshop/seo-illustrations-2.svg" alt="BitcoinForum Partner" className="h-12 w-12 mb-4" loading="lazy" />,
      title: "Partner werden",
      description: "Wenn auch Sie sich bzw. Ihr Unternehmen beim 3. BitcoinForum präsentieren, können Sie hier die Ihr Sponsoring buchen.",
      bgColor: "bg-transparent",
      borderColor: "border-[#D3E4FD]",
      link: "https://www.vr-bayernmitte.de/privatkunden/sparen-geldanlage/bitcoin/3--bitcoinforum/messepartner-werden.html",
      buttonText: "Jetzt Partner werden",
      external: true
    },
    {
      icon: <img src="/images/workshop/robots.svg" alt="BitcoinForum Workshops" className="h-12 w-12 mb-4" loading="lazy" />,
      title: "Workshops",
      description: "Wir bereiten derzeit eine Vielzahl von Workshops für Sie vor. Anfänger und technikinteressierte Besucher finden hier ab Juli eine spannende Auswahl. WICHTIG: Jetzt schon Tickets bestellen zum rabattierten Preis, denn Workshops können nur auf Basis bestehender Tickets bestellt werden!",
      bgColor: "bg-transparent",
      borderColor: "border-[#FEF7CD]",
      buttonText: "Tickets sichern",
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white to-[#F2FCE2]/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 bg-[#FEF7CD] backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Über das Forum</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Das 3. Bitcoin Forum</h2>
          <p className="text-xl text-gray-600">
            Zum dritten Mal lädt die VR-Bank Bayern Mitte in diesem Jahr zum Bitcoin Forum ein. Erfahren Sie mehr über die 
            Chancen und Risiken von Bitcoin direkt aus erster Hand von vielen Bitcoin- und Finanzexperten. Neben reinen Vorträgen werden auch dieses Jahr viele Workshops und spezielle Seminare angeboten. 
            Es ist für jeden etwas dabei - egal ob Neuling oder technikbegeisterter Bitcoin-Enthusiast. Jeder ist willkommen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border ${feature.borderColor} shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] ${feature.bgColor}/30 text-gray-800 rounded-2xl overflow-hidden h-full`}
            >
              <CardContent className="p-6 flex flex-col h-full min-h-[400px]">
                <div className="mx-auto flex justify-center bg-white/60 w-20 h-20 rounded-full items-center mb-6 shadow-inner border border-white/80">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>
                {feature.link ? (
                  feature.external ? (
                    <a 
                      href={feature.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mt-auto"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white transition-all duration-300"
                      >
                        {feature.buttonText || 'Weitere Infos folgen'}
                      </Button>
                    </a>
                  ) : (
                    <Link to={feature.link} className="mt-auto">
                      <Button 
                        variant="outline" 
                        className="w-full border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white transition-all duration-300"
                      >
                        {feature.buttonText || 'Weitere Infos folgen'}
                      </Button>
                    </Link>
                  )
                ) : (
                  <Button 
                    variant="outline" 
                    className="w-full border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white transition-all duration-300 mt-auto"
                  >
                    {feature.buttonText || 'Weitere Infos folgen'}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-16">
            <Button
              onClick={() =>
                openPopup({
                  redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                })
              }
            className="bg-bitcoin hover:bg-bitcoin/80 text-white shadow-lg shadow-bitcoin/20 px-10 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <Ticket className="h-5 w-5" /> Sichere dein Ticket
            </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
