import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { usePopup } from '@/pages/PopupContext';
import { Calendar, Users, MessageSquare, Heart, Clock, Award, Sparkles, MapPin, Globe, ChevronRight, CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const LesFemmesOrange = () => {
  const { openPopup } = usePopup();
  const [activeTab, setActiveTab] = useState<'all' | 'beginner' | 'advanced'>('all');

  // Filter workshops based on active tab
  const filterWorkshops = () => {
    const workshops = [
      {
        id: 1,
        title: "Deine Bitcoin Reise",
        leader: "Yvonne Strathmann und Katharina Jantzen",
        level: "Einst.",
        subtitle: "Gestalte deine Bitcoin Reise für dich stimmig!",
        capacity: 50,
        duration: "55 Min.",
        startTime: "12:30 Uhr",
        description: "Wo stehst du gerade auf deiner Bitcoin Reise? Welches Ziel hast du? Was könnte dein nächster Schritt sein und was brauchst du dafür? Gemeinsam und mit der open space Methode schauen wir deine Fragen an. Wir freuen uns auf Dich!",
        image: "/images/workshop/LFO_17.jpg",
        category: "beginner"
      },
      {
        id: 2,
        title: "How to Bitcoin I",
        leader: "Korina Karl",
        level: "Einst.",
        subtitle: "Erlebe deine erste erste Bitcoin Transaktion!",
        capacity: 50,
        duration: "55 Min.",
        startTime: "13:30 Uhr",
        description: "Erstelle mit deinem Smartphone eine Lightning Wallet. Tausche die ersten 10€ in Satoshis um und nutze deine Wallet direkt auf dem Forum, im Alltag oder nächsten Urlaub.",
        image: "/images/workshop/LFO_18.jpg",
        category: "beginner"
      },
      {
        id: 3,
        title: "How to Bitcoin II",
        leader: "Nicole Nowak",
        level: "Fortge.",
        subtitle: "Firefish. Ein Blick auf neue Marktplätze für Bitcoin-besicherte Kredite",
        capacity: 50,
        duration: "55 Min.",
        startTime: "14:30 Uhr",
        description: "Lerne wie Bitcoiner die Peer-to-Peer Plattform Firefish nutzen, Kredite aufnehmen oder vergeben können und Bitcoin dabei als Sicherheit dient.",
        image: "/images/workshop/LFO_19.jpg",
        category: "advanced"
      },
      {
        id: 4,
        title: "Nostr",
        leader: "Tanja Bächle",
        level: "Fortge.",
        subtitle: "Nostr. Mehr als nur ein Twitter Klon.",
        capacity: 50,
        duration: "55 Min.",
        startTime: "15:30 Uhr",
        description: "Lerne Nostr kennen - ein soziales Netzwerk, das deine Privatsphäre schützt und Zensur widersteht. Wir erklären die Grundlagen und unterstützen dich bei der Einrichtung deines eigenen Accounts, damit du sicher und selbstbestimmt in die Nostr-Community starten kannst.",
        image: "/images/workshop/LFO_20.jpg",
        category: "advanced"
      }
    ];

    if (activeTab === 'all') return workshops;
    if (activeTab === 'beginner') return workshops.filter(w => w.category === 'beginner');
    return workshops.filter(w => w.category === 'advanced');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Enhanced Style */}
      <div className="bg-gradient-to-br from-[#FDE1D3] via-[#FEF7CD] to-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/workshop/LFO_14.jpg')] bg-center bg-cover"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-white/70 backdrop-blur-sm rounded-full border border-[#F97316]/20 mb-4">
                <span className="text-sm font-medium text-[#F97316]">Teil des 3. Bitcoin Forums 2025</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                <span className="block">Les Femmes</span>
                <span className="text-[#F97316]">Orange</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Eine internationale Initiative, die Frauen ermutigt, sich mit Bitcoin auseinanderzusetzen und eine unterstützende Gemeinschaft zu bilden.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => openPopup({
                    redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                  })}
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full py-6 px-8 shadow-lg"
                >
                  Jetzt Teilnehmen
                </Button>
               {/*
                <a href="#about" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#F97316]/30 rounded-full bg-white/80 text-gray-700 hover:bg-[#FDE1D3]/30 backdrop-blur-sm transition-all">
                  Mehr erfahren
                </a>
              */}
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#FEF7CD] rounded-full -z-10 animate-pulse"></div>
                <img 
                  src="/images/workshop/le_femmes.png" 
                  alt="Les Femmes Orange" 
                  className="max-w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FDE1D3] rounded-full -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement Section with Enhanced Design */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#F97316]">Unsere Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed italic">
              "Wir stärken Frauen durch Bitcoin-Bildung, bauen eine unterstützende Gemeinschaft auf und fördern finanzielle Unabhängigkeit und Selbstbestimmung."
            </p>
            <div className="flex justify-center mt-8">
              <div className="w-20 h-1 bg-gradient-to-r from-[#FDE1D3] to-[#F97316]"></div>
            </div>
          </div>
        </div>
      </section>

    
      {/* Bitcoin Forum Section with Enhanced Visuals */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#FDE1D3] rounded-full -z-10"></div>
                <img 
                  src="/images/workshop/LFO_5.jpg" 
                  alt="Bitcoin Forum Event" 
                  className="max-w-full h-auto relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#FEF7CD] rounded-full -z-10"></div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1 bg-[#FEF7CD] rounded-full text-[#F97316] font-medium text-sm">
                Sonderveranstaltung
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Les Femmes Orange beim Bitcoin Forum</h2>
              <p className="text-lg text-gray-600">
                Im Rahmen des 3. Bitcoin Forums wird Les Femmes Orange am Freitagnachmittag eine eigene Veranstaltung ausrichten sowie am Samstagnachmittag mehrere Workshops anbieten. Wir heißen alle Frauen herzlich willkommen – ganz gleich, ob Bitcoin-Newbie oder alte Häsin!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-[#F97316] mt-1" />
                  <div>
                    <h3 className="font-medium">Freitagnachmittag</h3>
                    <p className="text-sm text-gray-500">Spezielle Veranstaltung</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-[#F97316] mt-1" />
                  <div>
                    <h3 className="font-medium">Samstagnachmittag</h3>
                    <p className="text-sm text-gray-500">Mehrere Workshops</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  onClick={() => openPopup({
                    redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                  })}
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full py-6 shadow-lg shadow-[#F97316]/20"
                >
                  Jetzt Anmelden
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section with Enhanced Design */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Warum Teilnehmen?</h2>
            <p className="text-lg text-gray-600">
              Entdecke die Vorteile der Teilnahme an unseren Veranstaltungen
            </p>
          </div>

          
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl hover:bg-[#FDE1D3]/20 transition-colors duration-300 hover:shadow-lg">
              <div className="w-14 h-14 bg-[#FDE1D3] rounded-full flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-[#F97316]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertenwissen</h3>
              <p className="text-gray-600">Lerne von erfahrenen Bitcoin-Expertinnen in einem unterstützenden Umfeld</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl hover:bg-[#FDE1D3]/20 transition-colors duration-300 hover:shadow-lg">
              <div className="w-14 h-14 bg-[#FDE1D3] rounded-full flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-[#F97316]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Netzwerk</h3>
              <p className="text-gray-600">Baue wertvolle Kontakte zu Gleichgesinnten auf und erweitere dein Netzwerk</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl hover:bg-[#FDE1D3]/20 transition-colors duration-300 hover:shadow-lg">
              <div className="w-14 h-14 bg-[#FDE1D3] rounded-full flex items-center justify-center mb-4">
                <Sparkles className="h-7 w-7 text-[#F97316]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inspiration</h3>
              <p className="text-gray-600">Entdecke neue Perspektiven und Möglichkeiten für deine finanzielle Unabhängigkeit</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl hover:bg-[#FDE1D3]/20 transition-colors duration-300 hover:shadow-lg">
              <div className="w-14 h-14 bg-[#FDE1D3] rounded-full flex items-center justify-center mb-4">
                <Heart className="h-7 w-7 text-[#F97316]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gemeinschaft</h3>
              <p className="text-gray-600">Sei Teil einer supportiven und inklusiven Community von Bitcoin-begeisterten Frauen</p>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Agenda Section with World-Class Design */}
      <section className="py-20 relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background decoration elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#FEF7CD]/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FDE1D3]/20 rounded-full blur-xl transform translate-x-1/2"></div>
          <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-[#FEF7CD]/30 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="inline-block px-6 py-2 bg-[#FEF7CD] rounded-full text-[#F97316] font-semibold text-sm mb-6 shadow-sm">
              Workshops am 11.10.2025
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
              Unsere <span className="text-[#F97316]">Agenda</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Am Samstagnachmittag bieten wir vier verschiedene Workshops an, die auf unterschiedliche Kenntnisstufen zugeschnitten sind.
              Der erste Workshop beginnt um 12:30 Uhr, die weiteren folgen stündlich.
            </p>
            
            {/* Filter tabs */}
            <div className="inline-flex bg-white p-1 rounded-full shadow-md mb-12">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeTab === 'all' 
                    ? 'bg-[#F97316] text-white shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Alle Workshops
              </button>
              <button 
                onClick={() => setActiveTab('beginner')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeTab === 'beginner' 
                    ? 'bg-[#F97316] text-white shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Einsteiger
              </button>
              <button 
                onClick={() => setActiveTab('advanced')}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeTab === 'advanced' 
                    ? 'bg-[#F97316] text-white shadow-sm' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Fortgeschrittene
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filterWorkshops().map((workshop) => (
              <div 
                key={workshop.id} 
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 transform hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img 
                    src={workshop.image} 
                    alt={workshop.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-4 z-20">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-[#F97316] font-medium text-sm rounded-full shadow-sm">
                      {workshop.level === "Einst." ? "Für Einsteiger" : "Für Fortgeschrittene"}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2">{workshop.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <img 
                      src="/images/workshop/le_femmes.png" 
                      alt="Les Femmes Orange" 
                      className="h-8 w-8 rounded-full border-2 border-[#F97316] mr-3 object-cover"
                    />
                    <span className="font-medium">{workshop.leader}</span>
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">{workshop.subtitle}</h4>
                  <p className="text-gray-600 mb-6">{workshop.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1 text-[#F97316]" />
                      <span>{workshop.startTime} • {workshop.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1 text-[#F97316]" />
                      <span>Max. {workshop.capacity} Teilnehmer</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 pt-0 mt-auto">
                  <Button 
                    onClick={() => openPopup({
                      redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                    })}
                    className="w-full bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#F97316] text-white rounded-xl py-6 shadow-lg transition-all duration-300"
                  >
                    Workshop buchen
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-gradient-to-r from-[#FEF7CD]/50 to-[#FDE1D3]/50 rounded-xl p-6 shadow-md">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-20 h-20 bg-[#F97316]/10 rounded-full flex items-center justify-center">
                    <Calendar className="h-10 w-10 text-[#F97316]" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Wichtiger Hinweis zur Teilnahme
                  </h4>
                  <p className="text-gray-700">
                    Die Teilnehmerzahl ist auf je 50 Personen pro Workshop begrenzt. Melde dich frühzeitig an, um deinen Platz zu sichern. Die Workshops finden nacheinander statt, wähle deshalb den Workshop, der am besten zu deinem Kenntnisstand passt.
                  </p>
                  <Button 
                    onClick={() => openPopup({
                      redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                    })}
                    className="mt-4 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full py-5 px-8 shadow-lg"
                  >
                    Jetzt anmelden und Workshop sichern
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Enhanced Design */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Über Les Femmes Orange</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Les Femmes Orange ist eine internationale Initiative mit dem Ziel, Frauen dazu zu ermutigen, sich mit Bitcoin auseinanderzusetzen. Durch Veranstaltungen und regelmäßige Treffen bietet sie eine Plattform, auf der Frauen – unabhängig von Vorkenntnissen – die praktischen Aspekte von Bitcoin kennenlernen, sich austauschen und gemeinsam wachsen können. Das Ziel ist es, Bitcoin für alle Frauen zugänglich zu machen und eine unterstützende Gemeinschaft zu schaffen, die finanzielle Unabhängigkeit und Selbstbestimmung fördert.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-[#F97316]/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#FDE1D3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#F97316]" />
                </div>
                <CardTitle className="text-xl font-semibold">Gemeinschaft</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Werde Teil einer unterstützenden Gemeinschaft von Frauen, die sich gegenseitig auf ihrer Bitcoin-Reise unterstützen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-[#F97316]/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#FDE1D3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-[#F97316]" />
                </div>
                <CardTitle className="text-xl font-semibold">Veranstaltungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Nimm an regelmäßigen Treffen und Events teil, die auf die Bedürfnisse von Frauen im Bitcoin-Bereich zugeschnitten sind.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow hover:border-[#F97316]/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#FDE1D3] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-[#F97316]" />
                </div>
                <CardTitle className="text-xl font-semibold">Austausch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Tausche dich mit Gleichgesinnten aus und lerne von erfahrenen Bitcoin-Anwenderinnen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section with Enhanced Visual Appeal */}
      <section className="py-16 bg-gradient-to-br from-[#FDE1D3] to-[#FEF7CD]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6 relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/30 rounded-full blur-xl"></div>
            
            <div className="flex justify-center mb-6">
              <Heart className="h-12 w-12 text-[#F97316]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Werde Teil der Les Femmes Orange Community</h2>
            <p className="text-lg text-gray-700">
              Entdecke Bitcoin in einer unterstützenden Gemeinschaft von Frauen. Unabhängig von deinen Vorkenntnissen – du bist herzlich willkommen!
            </p>
            <div className="pt-6 flex flex-wrap gap-4 justify-center">
              <a 
                href="https://lesfemmesorange.work/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-white px-8 py-3 rounded-full text-[#F97316] border border-[#F97316]/20 hover:bg-[#F97316] hover:text-white transition-colors shadow-md"
              >
                Website besuchen
              </a>
              <Button 
                onClick={() => openPopup({
                  redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                })}
                className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full shadow-lg"
              >
                Jetzt anmelden
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LesFemmesOrange;
