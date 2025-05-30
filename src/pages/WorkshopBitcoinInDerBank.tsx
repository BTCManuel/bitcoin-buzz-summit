
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Check, ArrowRight, Calendar, Clock, MapPin, Users, Target, ChevronDown } from 'lucide-react';
import { usePopup } from '@/pages/PopupContext';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const WorkshopBitcoinInDerBank = () => {
  const { openPopup } = usePopup();
  const BITCOIN_COLOR = "#f7931a";

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#FEF7CD] to-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3')] opacity-10 bg-cover bg-center"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Badge variant="outline" className="bg-white/80 text-bitcoin border-bitcoin mb-4">
                  9. Oktober 2025
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">Bitcoin in der Bank</h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  Exklusiver Workshop für alle Banker und Finanzexperten
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                  <Button
                    className="bg-bitcoin hover:bg-bitcoin/80 text-white py-6 px-8 text-lg rounded-xl shadow-lg shadow-bitcoin/20 transition-all hover:scale-105 flex items-center gap-2"
                    onClick={() => {
                      openPopup({
                        redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                      });
                    }}
                  >
                    Jetzt anmelden <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Link to="/workshop">
                    <Button variant="outline" className="border-bitcoin text-bitcoin py-6 px-8 text-lg rounded-xl hover:bg-bitcoin hover:text-white">
                      Alle Workshops ansehen
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card className="bg-white/80 backdrop-blur-sm border border-bitcoin/10 shadow-md rounded-xl overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Calendar className="h-10 w-10 text-bitcoin mb-4" />
                    <h3 className="font-bold text-gray-800">Datum</h3>
                    <p className="text-gray-600">9. Oktober 2025</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/80 backdrop-blur-sm border border-bitcoin/10 shadow-md rounded-xl overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Clock className="h-10 w-10 text-bitcoin mb-4" />
                    <h3 className="font-bold text-gray-800">Uhrzeit</h3>
                    <p className="text-gray-600">14:00 - 19:00</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/80 backdrop-blur-sm border border-bitcoin/10 shadow-md rounded-xl overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <MapPin className="h-10 w-10 text-bitcoin mb-4" />
                    <h3 className="font-bold text-gray-800">Ort</h3>
                    <p className="text-gray-600">Donau Tower VR Bank Bayern Mitte</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Speakers Section - NEW */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-center">
                Unsere Top-Experten
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                Lernen Sie von den führenden Köpfen der Branche, die Ihnen exklusive Einblicke in die Welt des Bitcoin-Banking geben werden
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Featured Speaker 1 */}
                <div className="bg-gradient-to-br from-white to-[#FEF7CD]/30 rounded-2xl shadow-xl overflow-hidden border border-bitcoin/10 flex flex-col md:flex-row">
                  <div className="md:w-2/5 overflow-hidden">
                    <img 
                      src="/images/speakers/Andreas_Streb.jpg" 
                      alt="Andreas Streb" 
                      className="w-full h-64 md:h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    <Badge variant="outline" className="bg-bitcoin/10 text-bitcoin border-bitcoin mb-3 self-start">
                      Keynote Speaker
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">Andreas Streb</h3>
                    <p className="text-bitcoin font-semibold mb-4">CEO VR Bank Bayern Mitte</p>
                    <p className="text-gray-600 mb-6">
                      Andreas Streb wird Ihnen exklusive Einblicke geben, wie die VR Bank Bayern Mitte als eine der ersten Banken in Deutschland Bitcoin-Angebote erfolgreich in ihr Portfolio integriert hat und welche Vorteile dies für Ihre Bank haben kann.
                    </p>
                    <div className="mt-auto">
                      <Button 
                        variant="outline"
                        className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white"
                        onClick={() => {
                          openPopup({
                            redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                          });
                        }}
                      >
                        Workshop buchen
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Featured Speaker 2 */}
                <div className="bg-gradient-to-br from-white to-[#FEF7CD]/30 rounded-2xl shadow-xl overflow-hidden border border-bitcoin/10 flex flex-col md:flex-row">
                  <div className="md:w-2/5 overflow-hidden">
                    <img 
                      src="/images/speakers/Markus_Gürne.jpg" 
                      alt="Markus Gürne" 
                      className="w-full h-64 md:h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/workshop/bitcoin-global-world (1).svg";
                      }}
                    />
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    <Badge variant="outline" className="bg-bitcoin/10 text-bitcoin border-bitcoin mb-3 self-start">
                      Abendveranstaltung
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">Markus Gürne</h3>
                    <p className="text-bitcoin font-semibold mb-4">Moderator der Sendung Wirtschaft vor acht</p>
                    <p className="text-gray-600 mb-6">
                      Im Rahmen der exklusiven Abendveranstaltung wird Markus Gürne, bekannt aus der ARD-Sendung "Wirtschaft vor acht", spannende Anekdoten aus der Finanzwelt teilen und Einblicke in die Zukunft des Bankenwesens in Zeiten der Digitalisierung geben.
                    </p>
                    <div className="mt-auto">
                      <Button 
                        variant="outline"
                        className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white"
                        onClick={() => {
                          openPopup({
                            redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                          });
                        }}
                      >
                        Workshop buchen
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Description Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
                Bitcoin Expertise für Ihren Bankensektor
              </h2>
              
              <div className="bg-gradient-to-br from-[#FEF7CD]/30 to-white p-8 rounded-2xl border border-bitcoin/10 mb-8">
                <p className="text-lg text-gray-700 mb-4">
                  Dieser Workshop richtet sich speziell an Banker, die sich mit Bitcoin-Angeboten für ihre Kunden beschäftigen wollen oder müssen.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Behandelt werden regulatorische Anforderungen, praktische Umsetzungsmöglichkeiten sowie strategische Aspekte der Integration von Bitcoin in bestehende Produkt- und Portfoliostrukturen einer Bank.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                    <Target className="h-5 w-5 text-bitcoin" />
                    Für wen ist dieser Workshop?
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Der Workshop richtet sich an Fach- und Führungskräfte im Bankensektor, die:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-bitcoin flex-shrink-0 mt-0.5" />
                      <span>Bankberater mit direktem Kundenkontakt sind</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-bitcoin flex-shrink-0 mt-0.5" />
                      <span>In der Produktentwicklung oder im Portfoliomanagement tätig sind</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-bitcoin flex-shrink-0 mt-0.5" />
                      <span>Für regulatorische Fragestellungen verantwortlich sind</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-bitcoin flex-shrink-0 mt-0.5" />
                      <span>Entscheidungsträger in Banken und Finanzinstituten sind</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                    <Check className="h-5 w-5 text-bitcoin" />
                    Schwerpunkte
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span style={{ color: BITCOIN_COLOR }}>•</span>
                      <span className="italic">Bitcoin als Anlageprodukt für Bankkunden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: BITCOIN_COLOR }}>•</span>
                      <span className="italic">Regulatorische Anforderungen (u.a. MiCAR)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: BITCOIN_COLOR }}>•</span>
                      <span className="italic">Strategische Überlegungen zu Asset Allocation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: BITCOIN_COLOR }}>•</span>
                      <span className="italic">Verantwortung und Risiko in der Kundenberatung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span style={{ color: BITCOIN_COLOR }}>•</span>
                      <span className="italic">Technische und steuerliche Umsetzung</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <Button 
                  className="bg-bitcoin hover:bg-bitcoin/80 text-white py-6 px-8 text-lg rounded-xl shadow-lg shadow-bitcoin/20 transition-all hover:scale-105 flex items-center gap-2 mx-auto"
                  onClick={() => {
                    openPopup({
                      redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                    });
                  }}
                >
                  Jetzt Platz reservieren <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Speakers Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800 text-center">
                Hochkarätige Experten 
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                Lernen Sie von den führenden Experten der Bitcoin- und Bankenbranche
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Andreas Streb", title: "CEO VR Bank Bayern Mitte", topic: "Wie wir unseren Kunden Bitcoin anbieten und warum." },
                  { name: "Dr. Steffen Hahn", title: "MICAR", topic: "Welche genauen Anforderungen stellt diese neue Regulierung?" },
                  { name: "Florian Bruce-Boye", title: "Bitcoin Experte", topic: "Warum Bitcoin der optimale Wertspeicher ist" },
                  { name: "Daniel 'Loddi'", title: "Bitcoin Podcaster", topic: "Wie funktioniert unser Geldsystem?" },
                  { name: "Karl Steuerberater", title: "Steuerberater", topic: "Wie ist Bitcoin steuerlich einzuordnen?" },
                  { name: "Markus Gürne", title: "Moderator der Sendung Wirtschaft vor acht", topic: "Anekdoten aus der Welt der Finanzen." }
                ].map((speaker, index) => (
                  <Card key={index} className="bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="h-16 w-16 bg-[#FEF7CD] rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-bitcoin" />
                      </div>
                      <h3 className="font-bold text-xl text-center mb-2">{speaker.name}</h3>
                      <p className="text-bitcoin text-sm text-center mb-4">{speaker.title}</p>
                      <p className="text-gray-600 text-center text-sm">{speaker.topic}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Full Agenda Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
                Detaillierter Workshop-Ablauf
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                Ein strukturierter Tag voller Expertise und praktischer Einblicke
              </p>
              
              <div className="relative mb-16">
                <div className="absolute left-[29px] top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                <div className="space-y-8">
                  {[
                    { timeSlot: "14:00 - 14:20", speaker: "Andreas Streb", topic: "Wie wir unseren Kunden Bitcoin anbieten und warum." },
                    { timeSlot: "14:30 - 15:15", speaker: "Dr. Steffen Hahn", topic: "Welche genauen Anforderungen stellt diese neue Regulierung?" },
                    { timeSlot: "15:30 - 15:45", speaker: "VRBM Banker", topic: "Warum eine Beimischung von Bitcoin das Portfolio stärkt." },
                    { timeSlot: "15:45 - 16:15", speaker: "VRBM Banker", topic: "Das Bitcoin Informations Gespräch der Volksbank Raiffeisenbank Bayern Mitte." },
                    { timeSlot: "16:15 - 16:30", speaker: "Q&A", topic: "Diskussion und Fragen" },
                    { timeSlot: "17:00 - 17:30", speaker: "Florian Bruce-Boye", topic: "Warum Bitcoin der optimale Wertspeicher ist" },
                    { timeSlot: "17:30 - 18:00", speaker: "Daniel 'Loddi'", topic: "Wie funktioniert unser Geldsystem?" },
                    { timeSlot: "18:00 - 18:30", speaker: "Karl Steuerberater", topic: "Wie ist Bitcoin steuerlich einzuordnen?" },
                    { timeSlot: "18:30 - 19:00", speaker: "Andreas Streb", topic: "Abschluss Panel und Q&A" },
                    { timeSlot: "20:00 - 22:00", speaker: "Markus Gürne", topic: "Anekdoten aus der Welt der Finanzen." }
                  ].map((item, index, array) => {
                    const isEveningEvent = index === array.length - 1 && 
                      (item.topic?.includes("Anekdoten") || 
                       item.timeSlot?.includes("20:00") || 
                       parseInt(item.timeSlot?.split(':')[0]) >= 19);
                    
                    return (
                      <div key={index} className="flex gap-5">
                        <div className={`relative z-10 shrink-0 mt-0.5 h-6 w-6 rounded-full ${item.speaker ? 'bg-bitcoin' : 'bg-gray-200'} flex items-center justify-center`}>
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        
                        <div className={`flex-1 ${!item.speaker ? 'opacity-80' : ''}`}>
                          <div className={`bg-white p-5 rounded-lg ${
                            isEveningEvent 
                              ? 'border-l-4 border-bitcoin bg-gradient-to-r from-[#FEF7CD]/80 to-white shadow-md' 
                              : 'border border-bitcoin/20 shadow-sm'
                          } hover:shadow-md transition-shadow`}>
                            {isEveningEvent && (
                              <Badge className="bg-bitcoin text-white px-3 py-1.5 rounded-md mb-3 animate-pulse">
                                Abendveranstaltung inklusive
                              </Badge>
                            )}
                            <div className="font-medium text-gray-800 mb-2 text-lg">
                              {item.topic}
                            </div>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                              <div className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4 text-bitcoin" />
                                <span className="text-sm text-gray-600">{item.timeSlot}</span>
                              </div>
                              {item.speaker && (
                                <div className="flex items-center gap-1.5">
                                  <Users className="h-4 w-4 text-bitcoin" />
                                  <span className="text-sm text-bitcoin font-medium">{item.speaker}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  className="bg-bitcoin hover:bg-bitcoin/80 text-white py-6 px-8 text-lg rounded-xl shadow-lg shadow-bitcoin/20 transition-all hover:scale-105 flex items-center gap-2 mx-auto"
                  onClick={() => {
                    openPopup({
                      redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                    });
                  }}
                >
                  Jetzt anmelden <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center">
                Häufig gestellte Fragen
              </h2>
              <p className="text-xl text-gray-600 mb-12 text-center">
                Alles Wichtige zum Workshop auf einen Blick
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    question: "Was ist im Ticket enthalten?",
                    answer: "Das Ticket beinhaltet die Teilnahme am Workshop, Verpflegung, Getränke, alle Workshopmaterialien sowie den Zugang zur exklusiven Abendveranstaltung mit Markus Gürne."
                  },
                  {
                    question: "Welche Vorkenntnisse benötige ich?",
                    answer: "Sie benötigen Interesse an Bitcoin und ein Grundverständnis bankinterner Prozesse und Kundenberatung. Spezielle technische Vorkenntnisse zu Bitcoin sind nicht erforderlich."
                  },
                  {
                    question: "Kann ich den Workshop auch buchen, wenn ich nicht im Bankensektor arbeite?",
                    answer: "Ja, der Workshop ist auch für andere Finanzdienstleister und Interessierte geeignet, richtet sich aber primär an Fach- und Führungskräfte im Bankensektor."
                  },
                  {
                    question: "Wie viele Teilnehmer sind beim Workshop dabei?",
                    answer: "Der Workshop ist auf 25 Teilnehmer begrenzt, um eine optimale Lernatmosphäre und genügend Raum für individuelle Fragen zu gewährleisten."
                  }
                ].map((faq, index) => (
                  <Collapsible key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm">
                    <CollapsibleTrigger className="flex w-full items-center justify-between p-6 text-left">
                      <h3 className="font-semibold text-lg text-gray-800">{faq.question}</h3>
                      <ChevronDown className="h-5 w-5 text-bitcoin transition-transform duration-200 ui-open:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-6 pb-6 pt-2 text-gray-600">
                      <p>{faq.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[#FEF7CD] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Sichern Sie sich jetzt Ihren Platz!
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Nutzen Sie diese einmalige Gelegenheit, von führenden Experten zu lernen und sich optimal auf die Integration von Bitcoin in Ihr Bankengeschäft vorzubereiten.
              </p>
              
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-bitcoin/10 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="text-left">
                    <h3 className="font-bold text-2xl mb-4">Workshop-Details</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-bitcoin" />
                        <span>9. Oktober 2025</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-bitcoin" />
                        <span>14:00 - 19:00 Uhr</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-bitcoin" />
                        <span>Donau Tower VR Bank Bayern Mitte</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-bitcoin" />
                        <span>Begrenzt auf 25 Teilnehmer</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-left">
                    <h3 className="font-bold text-2xl mb-4">Preisgestaltung</h3>
                    <div className="bg-gradient-to-r from-[#FEF7CD]/50 to-transparent p-4 rounded-lg mb-4">
                      <div className="text-3xl font-bold text-bitcoin mb-1">121€</div>
                      <div className="text-sm text-gray-600">pro Person</div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      Inkl. Workshop-Materialien, Verpflegung und Zugang zur Abendveranstaltung
                    </p>
                    
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Unternehmensteams:</span> Rabatte für Gruppen ab 3 Personen verfügbar
                    </p>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <Button 
                  className="w-full bg-bitcoin hover:bg-bitcoin/80 text-white py-8 text-xl rounded-xl shadow-lg shadow-bitcoin/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
                  onClick={() => {
                    openPopup({
                      redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                    });
                  }}
                >
                  Jetzt verbindlich anmelden <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
              
              <p className="text-sm text-gray-500">
                Bei Fragen zur Anmeldung kontaktieren Sie uns gerne unter <span className="text-bitcoin">info@bitcoinforum-bayern.de</span>
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WorkshopBitcoinInDerBank;
