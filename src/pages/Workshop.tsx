
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, ArrowRight, Bitcoin, BookOpen, Target, Users, Shield, Code, Tv, Clock, CalendarDays, MapPin, User, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Workshop = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<number | null>(null);

  const workshopIcons = [
    <img src="/images/workshop/bitcoin-card-credit-card.svg" alt="Bitcoin Charts" className="h-10 w-10" />,
    <img src="/images/workshop/bitcoin-chart-stock-market.svg" alt="Bitcoin Charts" className="h-10 w-10" />,
    <Target className="h-10 w-10 text-bitcoin" />,
    <BookOpen className="h-10 w-10 text-bitcoin" />,
    <Users className="h-10 w-10 text-bitcoin" />,
    <Shield className="h-10 w-10 text-bitcoin" />,
    <Code className="h-10 w-10 text-bitcoin" />,
    <img src="/images/workshop/steuer.svg" alt="Steuerliche Aspekte" className="h-10 w-10" />,
    <img src="/images/workshop/steuer.svg" alt="Steuerliche Aspekte" className="h-10 w-10" />
  ];

  const workshops = [
    {
      id: 1,
      title: "Bitcoin als Wertanlage",
      subtitle: "für Family Offices",
      description: "13:00 - 15:30 Uhr Experten für Family Office Belange <br>16:00 - 18:30 Uhr Finantwirtschaftliche Aspekte <br> 19:30 Abendprogram mit 'Mr.Börse vor Acht' ",
      icon: workshopIcons[0],
      bgColor: "bg-[#FEF7CD]",
      borderColor: "border-[#FDE1D3]",
      date: "9. Oktober",
      time: "09:00 - 12:30",
      location: "Raum A1",
      instructors: ["Dr. Michael Weber", "Dr. Michael Weber1", "Dr. Michael Weber2"],
      difficulty: "Fortgeschritten",
      seats: 25,
      fullDescription: `
        <p>Dieser umfassende Workshop richtet sich speziell an Family Offices, Vermögensverwalter und professionelle Anleger, die Bitcoin als langfristige Wertanlage in Betracht ziehen.</p>
        <p>In einer Zeit, in der digitale Assets zunehmend an Bedeutung gewinnen, bietet dieser Workshop tiefe Einblicke in die Funktionsweise von Bitcoin als Anlageform und praktische Strategien für die Integration in diversifizierte Portfolios.</p>
        <h3>Themen:</h3>
        <ul>
          <li><b>Dr. Sebastian Meier:</b> Fundamentale Wertversprechen von Bitcoin im Vergleich zu traditionellen Anlageklassen</li>
          <li><b>Dr. Klaus Müller:</b> Portfolioallokation und Risikostrategien</li>
          <li><b>Joe Martin:</b>Regulatorische Rahmenbedingungen für institutionelle Investoren</li>
          <li>Sichere Verwahrungslösungen für Family Offices</li>
          <li>Steuerliche Implikationen und Reporting-Anforderungen</li>
          <li>Langfristige Anlagestrategien vs. kurzfristige Volatilität</li>
        </ul>
        <p>Die Teilnehmer erhalten praktische Tools zur Risikobewertung und Portfolioanalyse sowie umfassende Informationen zu institutionellen Custody-Lösungen.</p>
      `,
      requirements: "Grundlegendes Verständnis von Anlageklassen und Portfoliomanagement.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3"
    },
     {
      id: 2,
      title: "Bitcoin als Wertanlage",
      subtitle: "für Family Offices",
      description: "In diesem Workshop lernen Sie, wie Bitcoin als langfristige Wertanlage für Family Offices funktionieren kann.",
      icon: workshopIcons[0],
      bgColor: "bg-[#FEF7CD]",
      borderColor: "border-[#FDE1D3]",
      date: "9. Oktober",
      time: "09:00 - 12:30",
      location: "Raum A1",
      instructors: ["Dr. Michael Weber"],
      difficulty: "Fortgeschritten",
      seats: 25,
      fullDescription: `
        <p>Dieser umfassende Workshop richtet sich speziell an Family Offices, Vermögensverwalter und professionelle Anleger, die Bitcoin als langfristige Wertanlage in Betracht ziehen.</p>
        <p>In einer Zeit, in der digitale Assets zunehmend an Bedeutung gewinnen, bietet dieser Workshop tiefe Einblicke in die Funktionsweise von Bitcoin als Anlageform und praktische Strategien für die Integration in diversifizierte Portfolios.</p>
        <h3>Themen:</h3>
        <ul>
          <li>Fundamentale Wertversprechen von Bitcoin im Vergleich zu traditionellen Anlageklassen</li>
          <li>Portfolioallokation und Risikostrategien</li>
          <li>Regulatorische Rahmenbedingungen für institutionelle Investoren</li>
          <li>Sichere Verwahrungslösungen für Family Offices</li>
          <li>Steuerliche Implikationen und Reporting-Anforderungen</li>
          <li>Langfristige Anlagestrategien vs. kurzfristige Volatilität</li>
        </ul>
        <p>Die Teilnehmer erhalten praktische Tools zur Risikobewertung und Portfolioanalyse sowie umfassende Informationen zu institutionellen Custody-Lösungen.</p>
      `,
      requirements: "Grundlegendes Verständnis von Anlageklassen und Portfoliomanagement.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3"
    },
     {
      id: 3,
      title: "Bitcoin als Wertanlage",
      subtitle: "für Family Offices",
      description: "In diesem Workshop lernen Sie, wie Bitcoin als langfristige Wertanlage für Family Offices funktionieren kann.",
      icon: workshopIcons[0],
      bgColor: "bg-[#FEF7CD]",
      borderColor: "border-[#FDE1D3]",
      date: "9. Oktober",
      time: "09:00 - 12:30",
      location: "Raum A1",
      instructors: ["Dr. Michael Weber"],
      difficulty: "Fortgeschritten",
      seats: 25,
      fullDescription: `
        <p>Dieser umfassende Workshop richtet sich speziell an Family Offices, Vermögensverwalter und professionelle Anleger, die Bitcoin als langfristige Wertanlage in Betracht ziehen.</p>
        <p>In einer Zeit, in der digitale Assets zunehmend an Bedeutung gewinnen, bietet dieser Workshop tiefe Einblicke in die Funktionsweise von Bitcoin als Anlageform und praktische Strategien für die Integration in diversifizierte Portfolios.</p>
        <h3>Themen:</h3>
        <ul>
          <li>Fundamentale Wertversprechen von Bitcoin im Vergleich zu traditionellen Anlageklassen</li>
          <li>Portfolioallokation und Risikostrategien</li>
          <li>Regulatorische Rahmenbedingungen für institutionelle Investoren</li>
          <li>Sichere Verwahrungslösungen für Family Offices</li>
          <li>Steuerliche Implikationen und Reporting-Anforderungen</li>
          <li>Langfristige Anlagestrategien vs. kurzfristige Volatilität</li>
        </ul>
        <p>Die Teilnehmer erhalten praktische Tools zur Risikobewertung und Portfolioanalyse sowie umfassende Informationen zu institutionellen Custody-Lösungen.</p>
      `,
      requirements: "Grundlegendes Verständnis von Anlageklassen und Portfoliomanagement.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3"
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
      instructors: ["Thomas Schmidt"],
      difficulty: "Fortgeschritten",
      seats: 20,
      fullDescription: `
        <p>In diesem praktisch orientierten Workshop lernen Sie, wie Sie Ihre eigene Bitcoin Full Node aufsetzen und betreiben können. Eine Full Node ist ein Computer, der die vollständige Bitcoin-Blockchain enthält und Teil des Bitcoin-Netzwerks ist.</p>
        <p>Das Betreiben einer eigenen Node erhöht nicht nur Ihre Privatsphäre und Sicherheit, sondern stärkt auch das gesamte Bitcoin-Netzwerk. Dieser Workshop bietet Ihnen eine Schritt-für-Schritt-Anleitung mit praktischen Übungen.</p>
        <h3>Themen:</h3>
        <ul>
          <li>Hardware-Anforderungen und optimale Konfigurationen</li>
          <li>Installation und Konfiguration von Bitcoin Core</li>
          <li>Blockchain-Synchronisation und Dateimanagement</li>
          <li>Sicherheitsmaßnahmen und Best Practices</li>
          <li>Integration mit eigenen Wallets</li>
          <li>Fehlerbehebung und Wartung</li>
          <li>Erweiterungen wie Lightning-Nodes</li>
        </ul>
        <p>Teilnehmer haben die Möglichkeit, während des Workshops unter Anleitung ihre eigene Node auf mitgebrachter Hardware zu installieren oder können auf bereitgestellten Systemen üben.</p>
      `,
      requirements: "Grundlegende Linux-Kenntnisse sind von Vorteil. Teilnehmer können eigene Hardware (min. 1TB Festplatte) mitbringen oder vorhandene Systeme nutzen.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3"
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
      instructors: ["Jana Müller"],
      difficulty: "Fortgeschritten",
      seats: 15,
      fullDescription: `
        <p>Dieser Workshop bietet ein einzigartiges Erlebnis: Teilnehmer bauen ihre eigene Bitcoin Hardware-Wallet von Grund auf und erhalten dabei tiefe Einblicke in die Sicherheitskonzepte, die dahinterstehen.</p>
        <p>Hardware-Wallets sind der sicherste Weg, Bitcoin und andere Kryptowährungen aufzubewahren. In diesem Workshop lernen Sie nicht nur die technischen Grundlagen, sondern setzen das Wissen direkt in die Praxis um.</p>
        <h3>Themen:</h3>
        <ul>
          <li>Grundlegende Sicherheitskonzepte: Private Keys und Seed-Phrasen</li>
          <li>Hardware-Komponenten und deren Sicherheitsfunktionen</li>
          <li>Schritt-für-Schritt Anleitung zum Bau einer einfachen Hardware-Wallet</li>
          <li>Firmware-Installation und Konfiguration</li>
          <li>Sichere Aufbewahrung der Seed-Phrase</li>
          <li>Praktische Tests und Sicherheitsüberprüfungen</li>
        </ul>
        <p>Alle Materialien und Werkzeuge werden gestellt. Am Ende des Workshops nehmen Sie Ihre funktionierende Hardware-Wallet mit nach Hause.</p>
      `,
      requirements: "Grundlegende Elektronik-Kenntnisse sind hilfreich, aber nicht zwingend erforderlich. Keine Programmierkenntnisse nötig.",
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3"
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
      instructors: ["Felix Schneider"],
      difficulty: "Experte",
      seats: 25,
      fullDescription: `
        <p>Dieser technisch orientierte Workshop bietet einen tiefen Einblick in das Lightning Network – die Skalierungslösung für Bitcoin, die schnelle und kostengünstige Transaktionen ermöglicht.</p>
        <p>Sie werden die technischen Grundlagen verstehen und praktische Erfahrungen mit Lightning-Implementierungen sammeln. Der Workshop kombiniert theoretisches Wissen mit praktischen Übungen.</p>
        <h3>Themen:</h3>
        <ul>
          <li>Technische Architektur des Lightning Networks</li>
          <li>Payment Channels: Erstellung, Verwaltung und Schließung</li>
          <li>Routing und Pfadfindungsalgorithmen</li>
          <li>Lightning Network Implementations (LND, c-lightning, Eclair)</li>
          <li>Sicherheitsaspekte und potenzielle Angriffsvektoren</li>
          <li>Entwicklung von Lightning-Apps (LApps)</li>
          <li>Aktuelle Entwicklungen und zukünftige Erweiterungen</li>
        </ul>
        <p>Teilnehmer haben die Möglichkeit, Lightning-Transaktionen durchzuführen und mit verschiedenen Lightning-Wallets zu experimentieren.</p>
      `,
      requirements: "Gutes Verständnis der Bitcoin-Grundlagen und Blockchain-Technologie. Grundkenntnisse in Programmierung sind von Vorteil.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3"
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
      instructors: ["Sarah Wagner"],
      difficulty: "Mittel",
      seats: 30,
      fullDescription: `
        <p>Dieser praxisorientierte Workshop richtet sich an Unternehmer, Finanzverantwortliche und Berater, die Bitcoin in ihre Geschäftsprozesse integrieren möchten.</p>
        <p>Von der Akzeptanz von Bitcoin als Zahlungsmittel bis hin zur Bilanzierung – dieser Workshop deckt alle wesentlichen Aspekte der Unternehmensintegration ab.</p>
        <h3>Themen:</h3>
        <ul>
          <li>Implementierung von Bitcoin-Zahlungslösungen</li>
          <li>Buchhaltung und Bilanzierung von Bitcoin-Beständen</li>
          <li>Steuerliche Behandlung in Deutschland und der EU</li>
          <li>Risikomanagement und Compliance</li>
          <li>Treasury-Management mit Bitcoin</li>
          <li>Geschäftsmodelle im Bitcoin-Ökosystem</li>
          <li>Praxisbeispiele erfolgreicher Unternehmensintegration</li>
        </ul>
        <p>Die Teilnehmer erhalten praktische Leitfäden, Checklisten und direkte Beratung zu ihren spezifischen Unternehmensanforderungen.</p>
      `,
      requirements: "Grundlegendes Verständnis von Unternehmensfinanzen und Buchhaltung.",
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3"
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
      instructors: ["Markus Bauer"],
      difficulty: "Experte",
      seats: 20,
      fullDescription: `
        <p>Der Workshop bietet einen umfassenden Einblick in Bitcoin-Mining – vom grundlegenden Verständnis des Proof-of-Work-Algorithmus bis hin zu fortgeschrittenen Optimierungsstrategien.</p>
        <p>Teilnehmer lernen die technischen und ökonomischen Aspekte des Minings kennen und erhalten praktische Einblicke in professionelle Mining-Operationen.</p>
        <h3>Themen:</h3>
        <ul>
          <li>Technische Grundlagen des Bitcoin-Mining-Prozesses</li>
          <li>Hardware: ASICs und ihre Entwicklung</li>
          <li>Energieeffizienz und nachhaltige Mining-Strategien</li>
          <li>Mining-Pools: Funktionsweise und Auswahlkriterien</li>
          <li>Wirtschaftlichkeitsberechnungen und ROI-Analysen</li>
          <li>Kühlungssysteme und Infrastrukturmanagement</li>
          <li>Rechtliche und regulatorische Aspekte in Deutschland und weltweit</li>
        </ul>
        <p>Der Workshop beinhaltet eine Live-Demonstration von Mining-Equipment und Software sowie Simulationen zur Optimierung von Mining-Operationen.</p>
      `,
      requirements: "Gutes technisches Verständnis und Grundkenntnisse der Bitcoin-Funktionsweise.",
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3"
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
      instructors: ["Dr. Susanne Mayer"],
      difficulty: "Mittel",
      seats: 35,
      fullDescription: `
        <p>Dieser Workshop bietet eine umfassende Übersicht über die aktuellen steuerrechtlichen Regelungen für Bitcoin und andere Kryptowährungen in Deutschland.</p>
        <p>Experten aus dem Steuer- und Rechtsbereich geben praktische Hinweise zur korrekten steuerlichen Behandlung verschiedener Transaktionen und Anlagestrategien.</p>
        <h3>Themen:</h3>
        <ul>
          <li>Steuerliche Einordnung von Krypto-Assets in Deutschland</li>
          <li>Besteuerung von Mining, Staking und Airdrops</li>
          <li>Haltefristenverlängerung und steuerfreie Veräußerung</li>
          <li>Dokumentationspflichten und Nachweisführung</li>
          <li>Steueroptimierte Strategien für Privatanleger</li>
          <li>Unternehmerische Aspekte und Gewerbesteuer</li>
          <li>Internationale Steueraspekte und Vermeidung von Doppelbesteuerung</li>
        </ul>
        <p>Die Teilnehmer erhalten praktische Tools zur Dokumentation ihrer Krypto-Transaktionen und individuelle Beratung zu ihren steuerlichen Fragestellungen.</p>
      `,
      requirements: "Grundlegende Kenntnisse im deutschen Steuerrecht sind hilfreich, aber nicht zwingend erforderlich.",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3"
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
      instructors: ["Daniel Huber"],
      difficulty: "Fortgeschritten",
      seats: 25,
      fullDescription: `
        <p>Dieser Workshop erkundet die wachsende Welt der dezentralen Finanzanwendungen (DeFi) auf Bitcoin und verwandten Protokollen wie Liquid und RSK.</p>
        <p>Teilnehmer erhalten einen umfassenden Überblick über aktuelle Entwicklungen, Protokolle und Anwendungsfälle von Smart Contracts im Bitcoin-Ökosystem.</p>
        <h3>Themen:</h3>
        <ul>
          <li>Smart Contracts auf Bitcoin: von Taproot bis RGB</li>
          <li>Sidechains und Layer-2-Lösungen für DeFi-Anwendungen</li>
          <li>Atomic Swaps und dezentraler Handel</li>
          <li>Lending- und Borrowing-Protokolle</li>
          <li>Stablecoins im Bitcoin-Ökosystem</li>
          <li>Discreet Log Contracts und Oracles</li>
          <li>Sicherheitsaspekte und Risikobewertung</li>
        </ul>
        <p>Der Workshop beinhaltet praktische Demonstrationen ausgewählter DeFi-Anwendungen und bietet Einblicke in die zukünftige Entwicklung des Bitcoin-DeFi-Marktes.</p>
      `,
      requirements: "Solides Verständnis von Bitcoin und Blockchain-Technologie. Grundkenntnisse über DeFi-Konzepte sind von Vorteil.",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3"
    }
  ];

  const handleDetailsClick = (workshopId: number) => {
    setSelectedWorkshop(workshopId);
  };

  const handleCloseDialog = () => {
    setSelectedWorkshop(null);
  };

  const getSelectedWorkshop = () => {
    return workshops.find(workshop => workshop.id === selectedWorkshop);
  };

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"> Workshops für jeden Geschmack</h1>
              <p className="text-xl text-gray-600 mb-8">
                9. BIS 11. OKTOBER 2025
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-md border border-gray-100">
                <p className="text-gray-600">
                  Vertiefen Sie Ihr Wissen in unseren praxisorientierten Workshops und erlangen Sie wertvolle 
                  Kenntnisse und Fähigkeiten im Umgang mit Bitcoin, der Blockchain-Technologie und ganz Allgemein über Finanzen.
                </p>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto mb-12">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="all">Alle Workshops</TabsTrigger>
                <TabsTrigger value="beginner">Nach Datum</TabsTrigger>
                <TabsTrigger value="advanced">Nach Vorkenntnisniveau</TabsTrigger>
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
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white"
                            onClick={() => handleDetailsClick(workshop.id)}
                          >
                            Details <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="flex justify-center mt-12">
                  <Button 
                    className="bg-bitcoin hover:bg-bitcoin/80 text-white shadow-lg shadow-bitcoin/20 px-10 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <Ticket className="h-5 w-5" /> Sichere dein Ticket
                  </Button>
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
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="w-full mt-3 border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white"
                                  onClick={() => handleDetailsClick(workshop.id)}
                                >
                                  Details
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-12">
                  <Button 
                    className="bg-bitcoin hover:bg-bitcoin/80 text-white shadow-lg shadow-bitcoin/20 px-10 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <Ticket className="h-5 w-5" /> Sichere dein Ticket
                  </Button>
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
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="w-full mt-1 text-xs border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white"
                                  onClick={() => handleDetailsClick(workshop.id)}
                                >
                                  Details
                                </Button>
                              </CardContent>
                            </Card>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-12">
                  <Button 
                    className="bg-bitcoin hover:bg-bitcoin/80 text-white shadow-lg shadow-bitcoin/20 px-10 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <Ticket className="h-5 w-5" /> Sichere dein Ticket
                  </Button>
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

      {/* Workshop Details Dialog */}
      <Dialog open={selectedWorkshop !== null} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-[800px] max-h-[85vh] overflow-y-auto">
          {getSelectedWorkshop() && (
            <>
              <DialogHeader className="pb-4 border-b">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="bg-bitcoin/10 border-bitcoin/20 text-bitcoin text-xs font-medium">
                    {getSelectedWorkshop()?.difficulty}
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700 text-xs">
                    {getSelectedWorkshop()?.seats} Plätze
                  </Badge>
                </div>
                <DialogTitle className="text-2xl mt-4">
                  {getSelectedWorkshop()?.title}
                </DialogTitle>
                <p className="text-bitcoin font-medium">{getSelectedWorkshop()?.subtitle}</p>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                <div className="md:col-span-2 space-y-6">
                  <div className="rounded-lg overflow-hidden h-[200px] md:h-[250px] relative">
                    <img 
                      src={getSelectedWorkshop()?.imageUrl} 
                      alt={getSelectedWorkshop()?.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4 text-white">
                        <p className="text-lg font-bold">{getSelectedWorkshop()?.title}</p>
                        <p className="text-sm opacity-90">{getSelectedWorkshop()?.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Beschreibung</h3>
                    <div 
                      className="prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: getSelectedWorkshop()?.fullDescription || "" }}
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Voraussetzungen</h3>
                    <p className="text-gray-700">{getSelectedWorkshop()?.requirements}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
                    <h3 className="font-medium mb-4 pb-2 border-b border-gray-200">Informationen</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CalendarDays className="h-5 w-5 text-bitcoin flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Datum</p>
                          <p className="text-sm text-gray-600">{getSelectedWorkshop()?.date}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-bitcoin flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Zeit</p>
                          <p className="text-sm text-gray-600">{getSelectedWorkshop()?.time}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-bitcoin flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">Ort</p>
                          <p className="text-sm text-gray-600">{getSelectedWorkshop()?.location}</p>
                        </div>
                      </div>
                      
<div className="flex items-start gap-3">
  <User className="h-5 w-5 text-bitcoin flex-shrink-0 mt-1" />
  <div>
    <p className="text-sm font-medium">
      {getSelectedWorkshop()?.instructors?.length > 1 ? 'Dozenten' : 'Dozent'}
    </p>
    <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside mt-1">
      {getSelectedWorkshop()?.instructors?.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  </div>
</div>

                  
                  <Button className="w-full bg-bitcoin hover:bg-bitcoin/80 text-white flex items-center justify-center gap-2">
                    <Ticket className="h-4 w-4" /> Sichere dein Ticket
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Workshop;
