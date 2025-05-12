
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, ArrowRight, Bitcoin, BookOpen, Target, Users, Shield, Code, Tv, Zap, Clock, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Workshop = () => {
  const workshopIcons = [
    <Bitcoin className="h-10 w-10 text-bitcoin" />,
    <Target className="h-10 w-10 text-bitcoin" />,
    <BookOpen className="h-10 w-10 text-bitcoin" />,
    <Users className="h-10 w-10 text-bitcoin" />,
    <Shield className="h-10 w-10 text-bitcoin" />,
    <Code className="h-10 w-10 text-bitcoin" />,
    <Zap className="h-10 w-10 text-bitcoin" />,
    <Tv className="h-10 w-10 text-bitcoin" />
  ];

  const workshops = [
    {
      id: 1,
      title: "Bitcoin als Wertanlage",
      subtitle: "für Family Offices",
      description: "In diesem Workshop lernen Sie, wie Bitcoin als langfristige Wertanlage für Family Offices funktionieren kann.",
      icon: workshopIcons[0],
      bgColor: "bg-[#FEF7CD]",
      borderColor: "border-[#FDE1D3]",
      date: "9. Oktober",
      time: "09:00 - 12:30",
      location: "Raum A1",
      instructor: "Dr. Michael Weber",
      difficulty: "Fortgeschritten",
      seats: 25
    },
    {
      id: 2,
      title: "Bitcoin Full Node",
      subtitle: "aufsetzen und betreiben",
      description: "Praktischer Workshop zum Aufsetzen und Betreiben einer eigenen Bitcoin Full Node.",
      icon: workshopIcons[1],
      bgColor: "bg-[#E2F4FF]",
      borderColor: "border-[#CCE8FF]",
      date: "9. Oktober",
      time: "13:30 - 17:00",
      location: "Computerlabor B",
      instructor: "Thomas Schmidt",
      difficulty: "Fortgeschritten",
      seats: 20
    },
    {
      id: 3,
      title: "Hardware-Wallet",
      subtitle: "bauen und verstehen",
      description: "Bauen Sie Ihre eigene Hardware-Wallet und verstehen Sie die Sicherheitskonzepte dahinter.",
      icon: workshopIcons[2],
      bgColor: "bg-[#D3E4FD]",
      borderColor: "border-[#F2FCE2]",
      date: "9. Oktober",
      time: "14:00 - 17:30",
      location: "Werkstatt C",
      instructor: "Jana Müller",
      difficulty: "Fortgeschritten",
      seats: 15
    },
    {
      id: 4,
      title: "Lightning Network",
      subtitle: "im Detail verstehen",
      description: "Tauchen Sie tief in das Lightning Network ein und verstehen Sie die technischen Details.",
      icon: workshopIcons[3],
      bgColor: "bg-[#F2FCE2]",
      borderColor: "border-[#D3E4FD]",
      date: "10. Oktober",
      time: "09:00 - 12:30",
      location: "Raum A2",
      instructor: "Felix Schneider",
      difficulty: "Experte",
      seats: 25
    },
    {
      id: 5,
      title: "Bitcoin für Unternehmen",
      subtitle: "Integration & Buchhaltung",
      description: "Wie Unternehmen Bitcoin in ihre Geschäftsprozesse integrieren können.",
      icon: workshopIcons[4],
      bgColor: "bg-[#FDE1D3]",
      borderColor: "border-[#FEF7CD]",
      date: "10. Oktober",
      time: "13:30 - 17:00",
      location: "Konferenzraum D",
      instructor: "Sarah Wagner",
      difficulty: "Mittel",
      seats: 30
    },
    {
      id: 6,
      title: "Bitcoin-Mining",
      subtitle: "verstehen & optimieren",
      description: "Technische Einblicke in Bitcoin-Mining und Optimierungsstrategien.",
      icon: workshopIcons[5],
      bgColor: "bg-[#FEF7CD]",
      borderColor: "border-[#FDE1D3]",
      date: "10. Oktober",
      time: "14:00 - 17:30",
      location: "Laborraum E",
      instructor: "Markus Bauer",
      difficulty: "Experte",
      seats: 20
    },
    {
      id: 7,
      title: "Steuerrechtliche Aspekte",
      subtitle: "von Bitcoin & Co.",
      description: "Aktuelle steuerrechtliche Betrachtungen zu Kryptowährungen in Deutschland.",
      icon: workshopIcons[6],
      bgColor: "bg-[#E2F4FF]",
      borderColor: "border-[#CCE8FF]",
      date: "11. Oktober",
      time: "09:00 - 12:30",
      location: "Raum A3",
      instructor: "Dr. Susanne Mayer",
      difficulty: "Mittel",
      seats: 35
    },
    {
      id: 8,
      title: "Bitcoin DeFi",
      subtitle: "und Smart Contracts",
      description: "Überblick über DeFi-Projekte und Smart Contracts im Bitcoin-Ökosystem.",
      icon: workshopIcons[7],
      bgColor: "bg-[#D3E4FD]",
      borderColor: "border-[#F2FCE2]",
      date: "11. Oktober",
      time: "13:30 - 17:00",
      location: "Raum A4",
      instructor: "Daniel Huber",
      difficulty: "Fortgeschritten",
      seats: 25
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#F2FCE2]/50 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <div className="inline-block mb-4 px-4 py-1 bg-[#FEF7CD] backdrop-blur-sm rounded-full border border-bitcoin/20">
                <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Workshops</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Bitcoin Workshops</h1>
              <p className="text-xl text-gray-600 mb-8">
                9. BIS 11. OKTOBER! - Technische Hochschule Ingolstadt
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-md border border-gray-100">
                <p className="text-gray-600">
                  Vertiefen Sie Ihr Wissen in unseren praxisorientierten Workshops und erlangen Sie wertvolle 
                  Kenntnisse und Fähigkeiten im Umgang mit Bitcoin und Blockchain-Technologie.
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto mb-12">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="all">Alle Workshops</TabsTrigger>
                <TabsTrigger value="beginner">Nach Datum</TabsTrigger>
                <TabsTrigger value="advanced">Nach Schwierigkeit</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {workshops.map((workshop) => (
                    <Card 
                      key={workshop.id} 
                      className={`border ${workshop.borderColor} shadow-md hover:shadow-xl transition-all duration-300 
                      hover:translate-y-[-5px] ${workshop.bgColor}/30 text-gray-800 rounded-xl overflow-hidden h-full`}
                    >
                      <CardContent className="p-4 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex justify-center bg-white/60 w-14 h-14 rounded-full items-center shadow-inner border border-white/80">
                            {workshop.icon}
                          </div>
                          <Badge variant="outline" className="text-xs bg-white/50 border-bitcoin/20 text-bitcoin font-normal">
                            Workshop {workshop.id}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-bold mb-1 text-gray-800">{workshop.title}</h3>
                        <p className="text-sm text-bitcoin mb-2">{workshop.subtitle}</p>
                        <p className="text-xs text-gray-600 mb-3 line-clamp-2 flex-grow">{workshop.description}</p>
                        
                        <div className="mt-auto pt-3 space-y-2 text-xs">
                          <div className="flex items-center gap-1.5">
                            <CalendarDays className="h-3.5 w-3.5 text-bitcoin" />
                            <span>{workshop.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 text-bitcoin" />
                            <span>{workshop.time}</span>
                          </div>
                          <Separator className="my-3" />
                          <Button variant="outline" size="sm" className="w-full border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                            Details <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="beginner" className="mt-0">
                <div className="space-y-8">
                  {['9. Oktober', '10. Oktober', '11. Oktober'].map((date) => (
                    <div key={date} className="mb-8">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <CalendarDays className="h-5 w-5 text-bitcoin" />
                        {date}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {workshops
                          .filter(workshop => workshop.date === date)
                          .map(workshop => (
                            <Card 
                              key={workshop.id} 
                              className={`border ${workshop.borderColor} shadow-md hover:shadow-lg transition-all duration-300 
                              ${workshop.bgColor}/30 text-gray-800 rounded-xl overflow-hidden h-full`}
                            >
                              <CardContent className="p-4 flex flex-col h-full">
                                <h3 className="text-lg font-bold mb-1 text-gray-800">{workshop.title}</h3>
                                <p className="text-sm text-bitcoin mb-3">{workshop.subtitle}</p>
                                <div className="flex items-center gap-1.5 text-xs mb-2">
                                  <Clock className="h-3.5 w-3.5 text-bitcoin" />
                                  <span>{workshop.time}</span>
                                </div>
                                <Button variant="outline" size="sm" className="w-full mt-3 border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                                  Details
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="advanced" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {['Mittel', 'Fortgeschritten', 'Experte'].map((level) => (
                    <div key={level} className="space-y-4">
                      <h3 className="text-lg font-bold mb-3 text-center p-2 bg-white/80 border border-gray-200 rounded-lg shadow-sm">
                        {level}
                      </h3>
                      <div className="space-y-4">
                        {workshops
                          .filter(workshop => workshop.difficulty === level)
                          .map(workshop => (
                            <Card 
                              key={workshop.id} 
                              className={`border ${workshop.borderColor} shadow-sm hover:shadow-md transition-all duration-300 
                              ${workshop.bgColor}/30 text-gray-800 rounded-xl overflow-hidden`}
                            >
                              <CardContent className="p-3 flex flex-col">
                                <h4 className="text-base font-bold mb-1">{workshop.title}</h4>
                                <p className="text-xs text-gray-600 mb-2">{workshop.date}, {workshop.time}</p>
                                <Button variant="outline" size="sm" className="w-full mt-1 text-xs border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                                  Details
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="max-w-5xl mx-auto mt-16">
              <div className="bg-gradient-to-br from-bitcoin/5 to-bitcoin/10 rounded-xl p-6 md:p-8 border border-bitcoin/20 shadow-md">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">Ticket Optionen</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 flex flex-col shadow-md">
                    <div className="mb-4 pb-4 border-b border-gray-100">
                      <h3 className="text-xl font-semibold mb-2">Standard Ticket</h3>
                      <p className="text-sm text-gray-500">Zugang zu einem Workshop Ihrer Wahl</p>
                    </div>
                    <ul className="space-y-3 flex-1 mb-6">
                      <li className="flex items-start">
                        <div className="mr-3 h-5 w-5 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-bitcoin" />
                        </div>
                        <span className="text-sm">Teilnahme an einem Workshop</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-5 w-5 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-bitcoin" />
                        </div>
                        <span className="text-sm">Teilnahme an der Abendveranstaltung</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-3 h-5 w-5 rounded-full bg-bitcoin/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-bitcoin" />
                        </div>
                        <span className="text-sm">Alle Getränke und Speisen</span>
                      </li>
                    </ul>
                    <div className="text-center mt-auto">
                      <h4 className="text-3xl font-bold mb-3 text-bitcoin">121€</h4>
                      <Button className="w-full bg-bitcoin hover:bg-bitcoin/80 text-white">
                        Jetzt registrieren
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md flex flex-col">
                    <div className="mb-4 pb-4 border-b border-gray-100">
                      <h3 className="text-xl font-semibold mb-2">VIP Ticket</h3>
                      <p className="text-sm text-gray-500">Uneingeschränkter Zugang zu allen Workshops</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-6 flex-grow">
                      Mit dem VIP-Ticket erhalten Sie Zugang zu allen Workshops und Vorträgen sowie zu exklusiven VIP Gesprächen mit Experten und Referenten.
                    </p>
                    <div className="text-center mt-auto">
                      <h4 className="text-3xl font-bold mb-3 text-bitcoin">349€</h4>
                      <Link to="https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25" className="inline-flex items-center justify-center w-full px-6 py-2.5 bg-bitcoin hover:bg-bitcoin/80 text-white font-medium rounded-md transition-colors duration-300">
                        VIP Ticket bestellen <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Workshop;
