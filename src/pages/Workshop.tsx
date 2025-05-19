import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, ArrowRight, Bitcoin, BookOpen, Target, Users, Shield, Code, Tv, Clock, CalendarDays, MapPin, User, Ticket, Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { usePopup } from "@/pages/PopupContext";
import { BITCOIN_COLOR } from '@/lib/utils';

interface Speaker {
  name: string;
  title?: string;
  timeSlot?: string;
  topic?: string;
}

interface WorkshopType {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  borderColor: string;
  date: string;
  time: string;
  location: string;
  instructors: Speaker[];
  difficulty: string;
  seats: number;
  fullDescription: string;
  requirements: string;
  imageUrl: string;
  agenda?: {
    timeSlot: string;
    speaker: string;
    topic: string;
  }[];
}

const Workshop = () => {
  const { openPopup } = usePopup();
  const [selectedWorkshop, setSelectedWorkshop] = useState<number | null>(null);
  const [workshopsVisibility, setWorkshopsVisibility] = useState<Record<number, boolean>>({});

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

  const workshops: WorkshopType[] = [
    {
      id: 1,
      title: "Bitcoin in der Bank",
      subtitle: "für alle Banker",
      description: "Ein spezieller Workshop über die Strategien, Gefahren und Regulierung in Zusammenhang mit Kryptoangeboten an die Kunden einer Bank.",
      icon: workshopIcons[0],
      bgColor: "bg-[#FEF7CD]",
      borderColor: "border-[#FDE1D3]",
      date: "9. Oktober",
      time: "14:00 - 19:00",
      location: "Donau Tower VR Bank Bayern Mitte",
      instructors: [
        { name: "Andreas Streb", title: "CEO VR Bank Bayern Mitte", timeSlot: "14:00 - 14:20", topic: "Wie wir unseren Kunden Bitcoin anbieten und warum." },
        { name: "Dr. Steffen Hahn", title: "MICAR", timeSlot: "14:30 - 15:15", topic: "Welche genauen Anforderungen stellt diese neue Regulierung?" },
        { name: "VRBM Banker", title: "Asset Allocation", timeSlot: "15:30 - 15:45", topic: "Warum eine Beimischung von Bitcoin das Portfolio stärkt." },
        { name: "VRBM Banker", title: "BIG", timeSlot: "15:45 - 16:15", topic: "Das Bitcoin Informations Gespräch der VR Bayern Mitte." },
        { name: "Q&A", title: "Q&A", timeSlot: "16:15 - 16:30", topic: "Diskussion und Fragen" },
        { name: "Florian Bruce-Boye", title: "Bitcoin Experte", timeSlot: "17:00 - 17:30", topic: "Warum Bitcoin der optimale Wertspeicher ist" },
        { name: "Daniel 'Loddi'", title: "Bitcoin Podcaster", timeSlot: "17:30 - 18:00", topic: "Wie funktioniert unser Geldsystem?" },
        { name: "Karl Steuerberater", title: "Steuerberater", timeSlot: "18:00 - 18:30", topic: "Wie ist Bitcoin steuerlich einzuordnen?" },
        { name: "Andreas Streb", title: "CEO VR Bank Bayern Mitte", timeSlot: "18:30 - 19:00", topic: "Abschluss Panel und Q&A" },
        { name: "Markus Gürne", title: "Moderator der Sendung Wirtschaft vor acht", timeSlot: "20:00 - 22:00", topic: "Anekdoten aus der Welt der Finanzen." }
      ],
      difficulty: "Alle Banker",
      seats: 25,
      fullDescription: `
        <p>Dieser Workshop richtet sich speziell an Banker, die sich mit Bitcoin-Angeboten für ihre Kunden beschäftigen wollen oder müssen.</p>
        <p>Behandelt werden regulatorische Anforderungen, praktische Umsetzungsmöglichkeiten sowie strategische Aspekte der Integration von Bitcoin in bestehende Produkt- und Portfoliostrukturen einer Bank.</p>
        <h3 style="color: ${BITCOIN_COLOR}; font-weight: bold; margin-top: 1rem;"><strong>Schwerpunkte:</strong></h3>
        <ul>
          <li><span style="color: ${BITCOIN_COLOR};">•</span> <em>Bitcoin als Anlageprodukt für Bankkunden</em></li>
          <li><span style="color: ${BITCOIN_COLOR};">•</span> <em>Regulatorische Anforderungen (u.a. MiCAR)</em></li>
          <li><span style="color: ${BITCOIN_COLOR};">•</span> <em>Strategische Überlegungen zu Asset Allocation</em></li>
          <li><span style="color: ${BITCOIN_COLOR};">•</span> <em>Verantwortung und Risiko in der Kundenberatung</em></li>
          <li><span style="color: ${BITCOIN_COLOR};">•</span> <em>Technische und steuerliche Umsetzung</em></li>
        </ul>
        <p>Die Inhalte richten sich ausdrücklich an Fach- und Führungskräfte im Bankensektor.</p>
      `,
      requirements: "Interesse an Bitcoin, Grundverständnis bankinterner Prozesse und Kundenberatung.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3",
      agenda: [
        { timeSlot: "14:00 - 14:20", speaker: "Andreas Streb", topic: "Wie wir unseren Kunden Bitcoin anbieten und warum." },
        { timeSlot: "14:30 - 15:15", speaker: "Dr. Steffen Hahn", topic: "Welche genauen Anforderungen stellt diese neue Regulierung?" },
        { timeSlot: "15:30 - 15:45", speaker: "VRBM Banker", topic: "Warum eine Beimischung von Bitcoin das Portfolio stärkt." },
        { timeSlot: "15:45 - 16:15", speaker: "VRBM Banker", topic: "Das Bitcoin Informations Gespräch der VR Bayern Mitte." },
        { timeSlot: "16:15 - 16:30", speaker: "Q&A", topic: "Diskussion und Fragen" },
        { timeSlot: "17:00 - 17:30", speaker: "Florian Bruce-Boye", topic: "Warum Bitcoin der optimale Wertspeicher ist" },
        { timeSlot: "17:30 - 18:00", speaker: "Daniel 'Loddi'", topic: "Wie funktioniert unser Geldsystem?" },
        { timeSlot: "18:00 - 18:30", speaker: "Karl Steuerberater", topic: "Wie ist Bitcoin steuerlich einzuordnen?" },
        { timeSlot: "18:30 - 19:00", speaker: "Andreas Streb", topic: "Abschluss Panel und Q&A" },
        { timeSlot: "20:00 - 22:00", speaker: "Markus Gürne", topic: "Anekdoten aus der Welt der Finanzen." }
      ]
    },
{
  id: 2,
  title: "Bitcoin für Family Offices",
  subtitle: "Strategische Integration für Family Offices",
  description: "Workshop zu Strategien, Regulierung und Risikomanagement bei Bitcoin-Investments in Family Offices.",
  icon: workshopIcons[1],
  bgColor: "bg-[#E0F7FA]",
  borderColor: "border-[#B2EBF2]",
  date: "12. November",
  time: "14:00 - 19:00",
  location: "Donau Tower VR Bank Bayern Mitte",
  instructors: [
    { name: "Andreas Streb", title: "CEO VR Bank Bayern Mitte", timeSlot: "14:00 - 14:20", topic: "Marktentwicklung und Bedeutung von Bitcoin für Family Offices" },
    { name: "Dr. Steffen Hahn", title: "MiCAR-Experte", timeSlot: "14:30 - 15:15", topic: "Rechtliche Anforderungen und Compliance für Family Offices" },
    { name: "VRBM Analyst", title: "Asset Management", timeSlot: "15:30 - 15:45", topic: "Risikoadjustierte Allokationsmodelle mit Bitcoin" },
    { name: "VRBM Operations", title: "Operations", timeSlot: "15:45 - 16:15", topic: "Infrastruktur, Reporting und Custody" },
    { name: "Q&A", title: "Q&A", timeSlot: "16:15 - 16:30", topic: "Offene Diskussion und Fragen" },
    { name: "Florian Bruce-Boye", title: "Bitcoin-Experte", timeSlot: "17:00 - 17:30", topic: "Warum Bitcoin der optimale Wertspeicher ist" },
    { name: "Daniel 'Loddi'", title: "Bitcoin-Podcaster", timeSlot: "17:30 - 18:00", topic: "Funktionsweise unseres Geldsystems" },
    { name: "Karl Steuerberater", title: "Steuerberater", timeSlot: "18:00 - 18:30", topic: "Steuerliche Einordnung von Bitcoin-Investments" },
    { name: "Andreas Streb", title: "CEO VR Bank Bayern Mitte", timeSlot: "18:30 - 19:00", topic: "Abschlussdiskussion und Q&A" },
    { name: "Markus Gürne", title: "Moderator Wirtschaft vor acht", timeSlot: "20:00 - 22:00", topic: "Anekdoten und Insights aus der Finanzwelt" }
  ],
  difficulty: "Entscheidungsträger in Family Offices",
  seats: 25,
  fullDescription: `
    <p>Workshop für Entscheidungsträger in Family Offices zur Integration von Bitcoin in die Vermögensverwaltung.</p>
    <p>Fokus auf regulatorische Vorgaben, Risikomanagement und strategische Allokationsmodelle.</p>
    <h3 style="color: #FFA500; font-weight: bold; margin-top: 1rem;"><strong>Schwerpunkte:</strong></h3>
    <ul>
      <li><span style="color: #FFA500;">•</span> <em>Strategische Allokation und Risikomanagement</em></li>
      <li><span style="color: #FFA500;">•</span> <em>Rechtliche Anforderungen und Compliance</em></li>
      <li><span style="color: #FFA500;">•</span> <em>Custody, Reporting und Operations</em></li>
      <li><span style="color: #FFA500;">•</span> <em>Vermögensschutz durch digitale Wertspeicher</em></li>
      <li><span style="color: #FFA500;">•</span> <em>Steuerliche Rahmenbedingungen</em></li>
    </ul>
    <p>Anwendungsorientierter Workshop für Fach- und Führungskräfte in Family Offices.</p>
  `,
  requirements: "Erfahrung im Asset Management und Interesse an digitalen Vermögensspeichern.",
  imageUrl: "https://images.unsplash.com/photo-1573164574390-5c2d5a9f8aad?ixlib=rb-4.0.3",
  agenda: [
    { timeSlot: "14:00 - 14:20", speaker: "Andreas Streb", topic: "Marktentwicklung und Bedeutung von Bitcoin für Family Offices" },
    { timeSlot: "14:30 - 15:15", speaker: "Dr. Steffen Hahn", topic: "Rechtliche Anforderungen und Compliance für Family Offices" },
    { timeSlot: "15:30 - 15:45", speaker: "VRBM Analyst", topic: "Risikoadjustierte Allokationsmodelle mit Bitcoin" },
    { timeSlot: "15:45 - 16:15", speaker: "VRBM Operations", topic: "Infrastruktur, Reporting und Custody" },
    { timeSlot: "16:15 - 16:30", speaker: "Q&A", topic: "Offene Diskussion und Fragen" },
    { timeSlot: "17:00 - 17:30", speaker: "Florian Bruce-Boye", topic: "Warum Bitcoin der optimale Wertspeicher ist" },
    { timeSlot: "17:30 - 18:00", speaker: "Daniel 'Loddi'", topic: "Funktionsweise unseres Geldsystems" },
    { timeSlot: "18:00 - 18:30", speaker: "Karl Steuerberater", topic: "Steuerliche Einordnung von Bitcoin-Investments" },
    { timeSlot: "18:30 - 19:00", speaker: "Andreas Streb", topic: "Abschlussdiskussion und Q&A" },
    { timeSlot: "20:00 - 22:00", speaker: "Markus Gürne", topic: "Anekdoten und Insights aus der Finanzwelt" }
  ]
},

    {
  id: 3,
  title: "Bitcoin für Unternehmer",
  subtitle: "Nachhaltige Strategien für Unternehmen",
  description: "Workshop zu Bitcoin auf der Bilanz,nachhaltiges Bitcoin-Mining mit Solarstrom und Energiewende-Integration.",
  icon: workshopIcons[2],
  bgColor: "bg-[#FFF3E0]",
  borderColor: "border-[#FFE0B2]",
  date: "09. Oktober",
  time: "14:00 - 19:00",
  location: "Donau Tower VR Bank Bayern Mitte",
  instructors: [
    { name: "Kristian Kläger", title: "Founder terahash", timeSlot: "14:00 - 14:20", topic: "Eröffnung: Bitcoin auf der Bilanz" },
    { name: "Veronika Sepp", title: "terahash Team", timeSlot: "14:30 - 15:30", topic: "Bitcoin-Mining als Puzzlestück für die Energiewende" },
    { name: "Dr. Mathias Linkerhand", title: "terahash Representative", timeSlot: "15:30 - 16:30", topic: "Von Hash zu Heat: Nutzung der Abwärme" },
    { name: "Nicole E. Nowak", title: "terahash Representative", timeSlot: "16:30 - 17:00", topic: "Demand Response und Überschussenergie" },
    { name: "Florian Bruce-Boye", title: "Bitcoin-Experte", timeSlot: "17:00 - 17:30", topic: "Warum Bitcoin der optimale Wertspeicher ist" },
    { name: "Daniel 'Loddi'", title: "Bitcoin-Podcaster", timeSlot: "17:30 - 18:00", topic: "Funktionsweise unseres Geldsystems" },
    { name: "Karl Steuerberater", title: "Steuerberater", timeSlot: "18:00 - 18:30", topic: "Steuerliche Einordnung von Bitcoin-Investments" },
    { name: "Andreas Streb", title: "CEO VR Bank Bayern Mitte", timeSlot: "18:30 - 19:00", topic: "Abschlussdiskussion und Q&A" },
    { name: "Markus Gürne", title: "Moderator Wirtschaft vor acht", timeSlot: "20:00 - 22:00", topic: "Anekdoten und Insights aus der Finanzwelt" }
  ],
  difficulty: "Unternehmer und Geschäftsführer",
  seats: 25,
  fullDescription: `
    <p>Praxisorientierter Workshop für Unternehmer über Bitcoin auf der Bilanz und zu nachhaltigen Bitcoin und Solarstrom und erneuerbaren Energien.</p>
    <h3 style="color: #FFA500; font-weight: bold; margin-top: 1rem;"><strong>Schwerpunkte:</strong></h3>
    <ul>
      <li><span style="color: #FFA500;">•</span> <em>Bitcoin auf der Unternehmensbilanz</em></li>
      <li><span style="color: #FFA500;">•</span> <em>Bitcoin-Mining als Puzzlestück für die Energiewende</em></li>
      <li><span style="color: #FFA500;">•</span> <em>Nutzung von Abwärme aus Mining-Anlagen</em></li>
      <li><span style="color: #FFA500;">•</span> <em>Demand Response und Überschussenergie</em></li>
    </ul>
    <p>Erforderlich: Unternehmerische Erfahrung, Interesse an erneuerbaren Energien und digitalen Vermögensspeichern.</p>
  `,
  requirements: "Unternehmerische Erfahrung, Interesse an erneuerbaren Energien und digitalen Vermögensspeichern.",
  imageUrl: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-4.0.3",
  agenda: [
    { timeSlot: "14:00 - 14:20", speaker: "Kristian Kläger", topic: "Eröffnung: Bitcoin auf der Bilanz" },
    { timeSlot: "14:30 - 15:30", speaker: "Veronika Sepp", topic: "Bitcoin-Mining als Puzzlestück für die Energiewende" },
    { timeSlot: "15:30 - 16:30", speaker: "Dr. Mathias Linkerhand", topic: "Von Hash zu Heat: Nutzung der Abwärme" },
    { timeSlot: "16:30 - 17:00", speaker: "Nicole E. Nowak", topic: "Demand Response und Überschussenergie" },
    { timeSlot: "17:00 - 17:30", speaker: "Florian Bruce-Boye", topic: "Warum Bitcoin der optimale Wertspeicher ist" },
    { timeSlot: "17:30 - 18:00", speaker: "Daniel 'Loddi'", topic: "Funktionsweise unseres Geldsystems" },
    { timeSlot: "18:00 - 18:30", speaker: "Karl Steuerberater", topic: "Steuerliche Einordnung von Bitcoin-Investments" },
    { timeSlot: "18:30 - 19:00", speaker: "Andreas Streb", topic: "Abschlussdiskussion und Q&A" },
    { timeSlot: "20:00 - 22:00", speaker: "Markus Gürne", topic: "Anekdoten und Insights aus der Finanzwelt" }
  ]
},

    {
      id: 4,
      title: "Hardware-Wallet",
      subtitle: "bauen und verstehen",
      description: "Bauen Sie Ihre eigene Hardware-Wallet und verstehen Sie die Sicherheitskonzepte dahinter.",
      icon: workshopIcons[2],
      bgColor: "bg-[#D3E4FD]",
      borderColor: "border-[#F2FCE2]",
      date: "9. Oktober",
      time: "14:00 - 17:30",
      location: "Werkstatt C",
      instructors: [
        { name: "Jana Müller", title: "Hardware Security Expert", timeSlot: "14:00 - 14:30", topic: "Grundlagen der Wallet-Sicherheit" },
        { name: "Markus Bauer", title: "Embedded Systems Engineer", timeSlot: "14:30 - 15:00", topic: "Hardware-Komponenten" }
      ],
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
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3",
      agenda: [
        { timeSlot: "14:00 - 14:30", speaker: "Jana Müller", topic: "Einführung in Wallet-Sicherheit" },
        { timeSlot: "14:30 - 15:00", speaker: "Markus Bauer", topic: "Hardware-Komponenten und Konfiguration" },
        { timeSlot: "15:00 - 16:00", speaker: "Jana Müller", topic: "Hands-on: Wallet zusammenbauen" },
        { timeSlot: "16:00 - 16:15", speaker: "", topic: "Pause" },
        { timeSlot: "16:15 - 17:00", speaker: "Markus Bauer", topic: "Firmware-Installation" },
        { timeSlot: "17:00 - 17:30", speaker: "Beide", topic: "Tests und Sicherheitsüberprüfungen" }
      ]
    },
{
  id: 4,
  title: "Specter DIY Workshop",
  subtitle: "Hardware-Wallet Selbst-Bastelkurs",
  description: "Baue dein eigenes Specter DIY Hardware Wallet – von Grund auf inkl. vollständigem Material-Set.",
  icon: workshopIcons[3],
  bgColor: "bg-[#E8F5E9]",
  borderColor: "border-[#C8E6C9]",
  date: "10. Oktober",
  time: "13:00 - 16:00",
  location: "BitcoinForum Bayern, Ingolstadt",
  instructors: [
    { name: "Specter DIY Coach", title: "Hardware-Wallet-Experte", timeSlot: "13:00 - 13:15", topic: "Einführung und Überblick" },
    { name: "Specter DIY Coach", title: "Hardware-Wallet-Experte", timeSlot: "13:15 - 14:00", topic: "Zusammenbau: Discovery Board & QR-Code Scanner" },
    { name: "Specter DIY Coach", title: "Hardware-Wallet-Experte", timeSlot: "14:00 - 14:45", topic: "Gehäuse-Montage mit SnapCase & Extras" },
    { name: "Specter DIY Coach", title: "Hardware-Wallet-Experte", timeSlot: "14:45 - 15:30", topic: "Inbetriebnahme und Softwareinstallation" },
    { name: "Specter DIY Coach", title: "Hardware-Wallet-Experte", timeSlot: "15:30 - 15:50", topic: "Sicherheit, Backup & Best Practices" },
    { name: "Specter DIY Coach", title: "Hardware-Wallet-Experte", timeSlot: "15:50 - 16:00", topic: "Abschluss-Fragerunde" }
  ],
  difficulty: "Krypto-Enthusiasten und Technik-Begeisterte",
  seats: 25,
  fullDescription: `
    <p>In diesem praxisorientierten DIY-Workshop baust du dein eigenes Specter DIY Hardware Wallet von Grund auf.</p>
    <p><strong>Teilnahmegebühr:</strong> €149 inkl. aller Materialien (Discovery Board, QR-Code Scanner, Micro-USB-Kabel, SnapCase, 2× Sicherheitstüten, 2× Terraslate Paper, 2× Sicherheitsumschläge). Die Farbe kann variieren.</p>
    <p><strong>Details & Mitbringen:</strong> Du benötigst nur dich selbst; empfohlen: Powerbank oder Laptop zur Softwareinstallation.</p>
    <h3 style="color: #FFA500; font-weight: bold; margin-top: 1rem;"><strong>Schwerpunkte:</strong></h3>
    <ul>
      <li><span style="color: #FFA500;">•</span> <em>Einführung in Specter DIY und Projektüberblick</em></li>
      <li><span style="color: #FFA500;">•</span> <em>Hardware-Zusammenbau und Gehäuse-Montage</em></li>
      <li><span style="color: #FFA500;">•</span> <em>Softwareinstallation und Inbetriebnahme</em></li>
      <li><span style="color: #FFA500;">•</span> <em>Sicherheitsmaßnahmen und Backup-Strategien</em></li>
    </ul>
    <p><strong>Stornierung:</strong> Bis 48 Stunden vor Workshopbeginn kostenfrei, danach 95 % Rückerstattung.</p>
  `,
  requirements: "Keine Vorkenntnisse erforderlich; Interesse an Hardware und Bitcoin.",
  imageUrl: "https://images.unsplash.com/photo-1589385216190-9b33e34f06c8?ixlib=rb-4.0.3",
  agenda: [
    { timeSlot: "13:00 - 13:15", speaker: "Specter DIY Coach", topic: "Einführung und Überblick" },
    { timeSlot: "13:15 - 14:00", speaker: "Specter DIY Coach", topic: "Zusammenbau: Discovery Board & QR-Code Scanner" },
    { timeSlot: "14:00 - 14:45", speaker: "Specter DIY Coach", topic: "Gehäuse-Montage mit SnapCase & Extras" },
    { timeSlot: "14:45 - 15:30", speaker: "Specter DIY Coach", topic: "Inbetriebnahme und Softwareinstallation" },
    { timeSlot: "15:30 - 15:50", speaker: "Specter DIY Coach", topic: "Sicherheit, Backup & Best Practices" },
    { timeSlot: "15:50 - 16:00", speaker: "Specter DIY Coach", topic: "Abschluss-Fragerunde" }
  ]
},

    {
      id: 6,
      title: "Bitcoin für Unternehmen",
      subtitle: "Integration & Buchhaltung",
      description: "Wie Unternehmen Bitcoin in ihre Geschäftsprozesse integrieren können.",
      icon: workshopIcons[4],
      bgColor: "bg-[#FDE1D3]",
      borderColor: "border-[#FEF7CD]",
      date: "10. Oktober",
      time: "13:30 - 17:00",
      location: "Konferenzraum D",
      instructors: [
        { name: "Sarah Wagner", title: "Fintech Beraterin", timeSlot: "13:30 - 14:00", topic: "Bitcoin-Zahlungslösungen" },
        { name: "Michael Weber", title: "Steuerberater", timeSlot: "14:00 - 14:30", topic: "Buchhaltung und Bilanzierung" }
      ],
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
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
      agenda: [
        { timeSlot: "13:30 - 14:00", speaker: "Sarah Wagner", topic: "Bitcoin-Zahlungslösungen für Unternehmen" },
        { timeSlot: "14:00 - 14:30", speaker: "Michael Weber", topic: "Buchhaltung und Bilanzierung" },
        { timeSlot: "14:30 - 15:00", speaker: "Sarah Wagner", topic: "Steuerliche Behandlung" },
        { timeSlot: "15:00 - 15:15", speaker: "", topic: "Pause" },
        { timeSlot: "15:15 - 15:45", speaker: "Michael Weber", topic: "Compliance und Risikomanagement" },
        { timeSlot: "15:45 - 16:15", speaker: "Sarah Wagner", topic: "Treasury-Management" },
        { timeSlot: "16:15 - 17:00", speaker: "Beide", topic: "Praxisbeispiele und Q&A" }
      ]
    },
    {
      id: 7,
      title: "Bitcoin für Unternehmen",
      subtitle: "Integration & Buchhaltung",
      description: "Wie Unternehmen Bitcoin in ihre Geschäftsprozesse integrieren können.",
      icon: workshopIcons[4],
      bgColor: "bg-[#FDE1D3]",
      borderColor: "border-[#FEF7CD]",
      date: "10. Oktober",
      time: "13:30 - 17:00",
      location: "Konferenzraum D",
      instructors: [
        { name: "Sarah Wagner", title: "Fintech Beraterin", timeSlot: "13:30 - 14:00", topic: "Bitcoin-Zahlungslösungen" },
        { name: "Michael Weber", title: "Steuerberater", timeSlot: "14:00 - 14:30", topic: "Buchhaltung und Bilanzierung" }
      ],
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
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
      agenda: [
        { timeSlot: "13:30 - 14:00", speaker: "Sarah Wagner", topic: "Bitcoin-Zahlungslösungen für Unternehmen" },
        { timeSlot: "14:00 - 14:30", speaker: "Michael Weber", topic: "Buchhaltung und Bilanzierung" },
        { timeSlot: "14:30 - 15:00", speaker: "Sarah Wagner", topic: "Steuerliche Behandlung" },
        { timeSlot: "15:00 - 15:15", speaker: "", topic: "Pause" },
        { timeSlot: "15:15 - 15:45", speaker: "Michael Weber", topic: "Compliance und Risikomanagement" },
        { timeSlot: "15:45 - 16:15", speaker: "Sarah Wagner", topic: "Treasury-Management" },
        { timeSlot: "16:15 - 17:00", speaker: "Beide", topic: "Praxisbeispiele und Q&A" }
      ]
    },
    {
      id: 8,
      title: "Bitcoin für Unternehmen",
      subtitle: "Integration & Buchhaltung",
      description: "Wie Unternehmen Bitcoin in ihre Geschäftsprozesse integrieren können.",
      icon: workshopIcons[4],
      bgColor: "bg-[#FDE1D3]",
      borderColor: "border-[#FEF7CD]",
      date: "10. Oktober",
      time: "13:30 - 17:00",
      location: "Konferenzraum D",
      instructors: [
        { name: "Sarah Wagner", title: "Fintech Beraterin", timeSlot: "13:30 - 14:00", topic: "Bitcoin-Zahlungslösungen" },
        { name: "Michael Weber", title: "Steuerberater", timeSlot: "14:00 - 14:30", topic: "Buchhaltung und Bilanzierung" }
      ],
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
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
      agenda: [
        { timeSlot: "13:30 - 14:00", speaker: "Sarah Wagner", topic: "Bitcoin-Zahlungslösungen für Unternehmen" },
        { timeSlot: "14:00 - 14:30", speaker: "Michael Weber", topic: "Buchhaltung und Bilanzierung" },
        { timeSlot: "14:30 - 15:00", speaker: "Sarah Wagner", topic: "Steuerliche Behandlung" },
        { timeSlot: "15:00 - 15:15", speaker: "", topic: "Pause" },
        { timeSlot: "15:15 - 15:45", speaker: "Michael Weber", topic: "Compliance und Risikomanagement" },
        { timeSlot: "15:45 - 16:15", speaker: "Sarah Wagner", topic: "Treasury-Management" },
        { timeSlot: "16:15 - 17:00", speaker: "Beide", topic: "Praxisbeispiele und Q&A" }
      ]
    },
    {
      id: 9,
      title: "Bitcoin für Unternehmen",
      subtitle: "Integration & Buchhaltung",
      description: "Wie Unternehmen Bitcoin in ihre Geschäftsprozesse integrieren können.",
      icon: workshopIcons[4],
      bgColor: "bg-[#FDE1D3]",
      borderColor: "border-[#FEF7CD]",
      date: "10. Oktober",
      time: "13:30 - 17:00",
      location: "Konferenzraum D",
      instructors: [
        { name: "Sarah Wagner", title: "Fintech Beraterin", timeSlot: "13:30 - 14:00", topic: "Bitcoin-Zahlungslösungen" },
        { name: "Michael Weber", title: "Steuerberater", timeSlot: "14:00 - 14:30", topic: "Buchhaltung und Bilanzierung" }
      ],
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
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
      agenda: [
        { timeSlot: "13:30 - 14:00", speaker: "Sarah Wagner", topic: "Bitcoin-Zahlungslösungen für Unternehmen" },
        { timeSlot: "14:00 - 14:30", speaker: "Michael Weber", topic: "Buchhaltung und Bilanzierung" },
        { timeSlot: "14:30 - 15:00", speaker: "Sarah Wagner", topic: "Steuerliche Behandlung" },
        { timeSlot: "15:00 - 15:15", speaker: "", topic: "Pause" },
        { timeSlot: "15:15 - 15:45", speaker: "Michael Weber", topic: "Compliance und Risikomanagement" },
        { timeSlot: "15:45 - 16:15", speaker: "Sarah Wagner", topic: "Treasury-Management" },
        { timeSlot: "16:15 - 17:00", speaker: "Beide", topic: "Praxisbeispiele und Q&A" }
      ]
    }
  ];

  useEffect(() => {
    const initialVisibility: Record<number, boolean> = {};
    workshops.forEach(workshop => {
      initialVisibility[workshop.id] = true;
    });
    
    initialVisibility[6] = true;
    initialVisibility[7] = true;
    initialVisibility[8] = false;
    initialVisibility[9] = true;
    
    setWorkshopsVisibility(initialVisibility);
  }, []);

  const visibleWorkshops = workshops.filter(workshop => 
    workshopsVisibility[workshop.id] !== false
  );

  const handleDetailsClick = (workshopId: number) => {
    setSelectedWorkshop(workshopId);
  };

  const handleCloseDialog = () => {
    setSelectedWorkshop(null);
  };

  const getSelectedWorkshop = () => {
    return workshops.find(workshop => workshop.id === selectedWorkshop);
  };

  const isEveningEvent = (item: any, index: number, array: any[]) => {
    return index === array.length - 1 && 
           (item.topic?.includes("Anekdoten") || 
            item.timeSlot?.includes("20:00") || 
            parseInt(item.timeSlot?.split(':')[0]) >= 19);
  };

  React.useEffect(() => {
    (window as any).toggleWorkshopVisibility = (workshopId: number, isVisible: boolean) => {
      setWorkshopsVisibility(prev => ({
        ...prev,
        [workshopId]: isVisible
      }));
      console.log(`Workshop ${workshopId} visibility set to: ${isVisible}`);
    };
    
    return () => {
      delete (window as any).toggleWorkshopVisibility;
    };
  }, []);

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
                  {visibleWorkshops.map((workshop) => (
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
                    className="w-full bg-bitcoin hover:bg-bitcoin/80 text-white flex items-center justify-center gap-2 mt-6"
                    onClick={() => {
                      handleCloseDialog();
                      setTimeout(() => {
                        openPopup({
                          redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                        });
                      }, 250);
                    }}
                  >
                    <Ticket className="h-4 w-4" /> Sichere dein Ticket
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
                        {visibleWorkshops
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
                        {visibleWorkshops
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
                          <Check className="h-3 w-5 text-bitcoin" />
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

      <Dialog open={selectedWorkshop !== null} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 rounded-xl">
          {getSelectedWorkshop() && (
            <>
              <div className="relative h-48 md:h-64 overflow-hidden rounded-t-xl">
                <img 
                  src={getSelectedWorkshop()?.imageUrl} 
                  alt={getSelectedWorkshop()?.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end">
                  <div className="p-6 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className="bg-bitcoin border-none text-xs uppercase tracking-wider">
                        {getSelectedWorkshop()?.difficulty}
                      </Badge>
                      <Badge variant="outline" className="bg-white/20 border-white/40 text-white text-xs">
                        {getSelectedWorkshop()?.seats} Plätze verfügbar
                      </Badge>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{getSelectedWorkshop()?.title}</h2>
                    <p className="text-white/90 text-lg">{getSelectedWorkshop()?.subtitle}</p>
                  </div>
                </div>
                <DialogClose className="absolute top-4 right-4 rounded-full bg-black/20 p-2 hover:bg-black/40 transition-colors text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </DialogClose>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                <div className="md:col-span-2 space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full bg-[#FEF7CD] flex items-center justify-center">
                        <BookOpen className="h-4 w-4 text-bitcoin" />
                      </span>
                      Beschreibung
                    </h3>
                    <div 
                      className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:text-gray-900 prose-p:text-gray-600"
                      dangerouslySetInnerHTML={{ __html: getSelectedWorkshop()?.fullDescription || "" }}
                    />
                  </div>
                  
                  {/* New Collapsible Section 1 - Teilnahmegebühr und Details */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <Collapsible>
                      <CollapsibleTrigger className="flex w-full items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                          <span className="h-8 w-8 rounded-full bg-[#FEF7CD] flex items-center justify-center">
                            <Ticket className="h-4 w-4 text-bitcoin" />
                          </span>
                          Teilnahmegebühr und Details
                        </h3>
                        <ChevronDown className="h-5 w-5 text-bitcoin transition-transform duration-200 ui-open:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4 space-y-4">
                        <div className="prose prose-sm max-w-none">
                          <p>Die Teilnahmegebühr für diesen Workshop beträgt <strong className="text-bitcoin">121€</strong> und beinhaltet:</p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-bitcoin flex-shrink-0 mt-0.5" />
                              <span>Vollständige Workshopmaterialien</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-bitcoin flex-shrink-0 mt-0.5" />
                              <span>Getränke und Verpflegung während des Workshops</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-bitcoin flex-shrink-0 mt-0.5" />
                              <span>Teilnahmezertifikat</span>
                            </li>
                          </ul>
                        </div>
                        <Button 
                          className="w-full bg-bitcoin hover:bg-bitcoin/90 text-white py-2 rounded-lg shadow-md flex items-center justify-center gap-2"
                          onClick={() => {
                            handleCloseDialog();
                            setTimeout(() => {
                              openPopup({
                                redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                              });
                            }, 250);
                          }}
                        >
                          <Ticket className="h-5 w-5" /> Platz reservieren
                        </Button>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                  
                  {/* New Collapsible Section 2 - Zielgruppe und Nutzen */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <Collapsible>
                      <CollapsibleTrigger className="flex w-full items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                          <span className="h-8 w-8 rounded-full bg-[#E2F4FF] flex items-center justify-center">
                            <Target className="h-4 w-4 text-bitcoin" />
                          </span>
                          Zielgruppe und Nutzen
                        </h3>
                        <ChevronDown className="h-5 w-5 text-bitcoin transition-transform duration-200 ui-open:rotate-180" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4 space-y-4">
                        <div className="prose prose-sm max-w-none">
                          <p>Dieser Workshop richtet sich an:</p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-bitcoin flex-shrink-0 mt-0.5" />
                              <span>Finanzprofis und Bankberater</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-bitcoin flex-shrink-0 mt-0.5" />
                              <span>Interessierte Privatanleger</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-bitcoin flex-shrink-0 mt-0.5" />
                              <span>Unternehmer und Führungskräfte</span>
                            </li>
                          </ul>
                          <p className="mt-4">Nach dem Workshop sind Sie in der Lage:</p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-bitcoin flex-shrink-0 mt-0.5" />
                              <span>Die Grundlagen von Bitcoin fundiert zu verstehen</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-bitcoin flex-shrink-0 mt-0.5" />
                              <span>Informierte Anlageentscheidungen zu treffen</span>
                            </li>
                          </ul>
                        </div>
                        <Button 
                          className="w-full bg-bitcoin hover:bg-bitcoin/90 text-white py-2 rounded-lg shadow-md flex items-center justify-center gap-2"
                          onClick={() => {
                            handleCloseDialog();
                            setTimeout(() => {
                              openPopup({
                                redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                              });
                            }, 250);
                          }}
                        >
                          <Ticket className="h-5 w-5" /> Jetzt anmelden
                        </Button>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-5 text-gray-800 flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full bg-[#E2F4FF] flex items-center justify-center">
                        <Clock className="h-4 w-4 text-bitcoin" />
                      </span>
                      Agenda
                    </h3>
                    
                    <div className="relative">
                      <div className="absolute left-[29px] top-0 bottom-0 w-0.5 bg-gray-200"></div>
                      
                      <div className="space-y-6">
                        {getSelectedWorkshop()?.agenda?.map((item, index, array) => (
                          <div key={index} className="flex gap-5">
                            <div className={`relative z-10 shrink-0 mt-0.5 h-6 w-6 rounded-full ${item.speaker ? 'bg-bitcoin' : 'bg-gray-200'} flex items-center justify-center`}>
                              {item.speaker ? (
                                <span className="text-white text-xs font-bold">{index + 1}</span>
                              ) : (
                                <span className="text-gray-500 text-xs">⏱️</span>
                              )}
                            </div>
                            
                            <div className={`flex-1 ${!item.speaker ? 'opacity-80' : ''}`}>
                              <div className={`bg-white p-3 rounded-lg ${
                                isEveningEvent(item, index, array) 
                                  ? 'border-l-4 border-bitcoin bg-gradient-to-r from-[#FEF7CD]/80 to-white shadow-md' 
                                  : (item.speaker ? 'border border-bitcoin/20 shadow-sm' : 'border border-gray-100')
                              } hover:shadow-md transition-shadow`}>
                                {isEveningEvent(item, index, array) && (
                                  <div className="flex items-center gap-2 mb-3 bg-bitcoin text-white px-3 py-1.5 rounded-md shadow-inner animate-pulse max-w-max">
                                    <Sparkles className="h-4 w-4" />
                                    <span className="font-semibold text-sm uppercase tracking-wider">Besonderes Highlight - Abendveranstaltung inklusive</span>
                                  </div>
                                )}
                                <div className="font-medium text-gray-800 mb-1">
                                  {item.topic}
                                </div>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                  <div className="flex items-center gap-1.5">
                                    <Clock className="h-3.5 w-3.5 text-bitcoin" />
                                    <span className="text-sm text-gray-600">{item.timeSlot}</span>
                                  </div>
                                  {item.speaker && (
                                    <div className="flex items-center gap-1.5">
                                      <User className="h-3.5 w-3.5 text-bitcoin" />
                                      <span className="text-sm text-bitcoin font-medium">{item.speaker}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                      <span className="h-8 w-8 rounded-full bg-[#F2FCE2] flex items-center justify-center">
                        <Check className="h-4 w-4 text-bitcoin" />
                      </span>
                      Voraussetzungen
                    </h3>
                    <p className="text-gray-600">{getSelectedWorkshop()?.requirements}</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 sticky top-6">
                    <div className="bg-[#FEF7CD]/30 p-4 border-b border-[#FEF7CD]">
                      <h3 className="font-semibold text-lg text-gray-800">Workshop Details</h3>
                    </div>
                    
                    <div className="p-5 space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="bg-[#FEF7CD]/50 p-2 rounded-full">
                          <CalendarDays className="h-5 w-5 text-bitcoin" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Datum</p>
                          <p className="font-medium text-gray-800">{getSelectedWorkshop()?.date}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-[#E2F4FF]/50 p-2 rounded-full">
                          <Clock className="h-5 w-5 text-bitcoin" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Zeit</p>
                          <p className="font-medium text-gray-800">{getSelectedWorkshop()?.time}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-[#F2FCE2]/50 p-2 rounded-full">
                          <MapPin className="h-5 w-5 text-bitcoin" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Ort</p>
                          <p className="font-medium text-gray-800">{getSelectedWorkshop()?.location}</p>
                        </div>
                      </div>
                      
                      <Separator className="bg-gray-100" />

                      <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-3 flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5" />
                          {getSelectedWorkshop()?.instructors.length > 1 ? 'Referenten' : 'Referent'}
                        </p>
                        <div className="space-y-3">
                          {getSelectedWorkshop()?.instructors?.map((instructor, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                              <div className="font-medium text-gray-800">{instructor.name}</div>
                              {instructor.title && (
                                <div className="text-xs text-gray-500">{instructor.title}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-gray-50 border-t border-gray-100">
                      <Button
                        className="w-full bg-bitcoin hover:bg-bitcoin/80 text-white py-6 rounded-lg shadow-lg shadow-bitcoin/10 flex items-center justify-center gap-2 transition-all hover:translate-y-[-2px]"
                        onClick={() => {
                          handleCloseDialog();
                          setTimeout(() => {
                            openPopup({
                              redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                            });
                          }, 250);
                        }}
                      >
                        <Ticket className="h-5 w-5" /> Ticket sichern
                      </Button>
                    </div>
                  </div>
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
