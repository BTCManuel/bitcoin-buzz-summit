import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { usePopup } from '@/pages/PopupContext';
import { Calendar, Users, MessageSquare, Heart, Clock, Award, Sparkles, MapPin, Globe, ChevronRight, CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const LesFemmesOrange = () => {
  const { openPopup } = usePopup();

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

    
      {/* Events Section 
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Unsere Events</h2>
            <p className="text-lg text-gray-600">
              Reguläre Meetups und Workshops bieten eine Plattform für Frauen, sich mit Bitcoin vertraut zu machen und zu vernetzen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-56 overflow-hidden">
                <img 
                  src="/images/workshop/bitcoin-card-credit-card (1).svg" 
                  alt="Bitcoin Workshop" 
                  className="w-full h-full object-contain object-center p-4 bg-[#FEF7CD]/30"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Praktische Workshops</h3>
                <p className="text-gray-600 mb-4">
                  Lerne in einem unterstützenden Umfeld, wie du Bitcoin-Wallets einrichtest, Transaktionen durchführst und deine Coins sicher aufbewahrst.
                </p>
                <div className="flex items-center text-sm text-gray-500 mt-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Regelmäßig</span>
                  <MapPin className="w-4 h-4 ml-6 mr-2" />
                  <span>Verschiedene Standorte</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-56 overflow-hidden">
                <img 
                  src="/images/workshop/LFO_6.jpg" 
                  alt="Bitcoin Meetup" 
                  className="w-full h-full object-contain object-center p-4 bg-[#FDE1D3]/30"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Globale Meetups</h3>
                <p className="text-gray-600 mb-4">
                  Vernetze dich mit Frauen aus der ganzen Welt, die sich für Bitcoin interessieren, und teile Erfahrungen und Wissen.
                </p>
                <div className="flex items-center text-sm text-gray-500 mt-4">
                  <Globe className="w-4 h-4 mr-2" />
                  <span>International</span>
                  <Clock className="w-4 h-4 ml-6 mr-2" />
                  <span>Monatlich</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FEF7CD]/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/3">
                <img 
                  src="/images/workshop/wrench-fix-computer-computer-screen-laptop (1).svg" 
                  alt="Online Learning" 
                  className="w-full h-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Online-Learning-Community</h3>
                <p className="text-gray-600 mb-4">
                  Unsere Online-Community bietet kontinuierlichen Support, Lernmaterialien und Diskussionsforen auch zwischen den Veranstaltungen.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#F97316] mr-2 mt-0.5" />
                    <span>Zugang zu exklusiven Lernressourcen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#F97316] mr-2 mt-0.5" />
                    <span>Mentoring von erfahrenen Bitcoin-Anwenderinnen</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#F97316] mr-2 mt-0.5" />
                    <span>Networking-Möglichkeiten</span>
                  </li>
                </ul>
                <a 
                  href="https://lesfemmesorange.work/events-meetups/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-[#F97316] font-medium hover:underline"
                >
                  Mehr erfahren 
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
 */}

      {/* Image Gallery Section with Enhanced Design 
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Eindrücke unserer Community</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-md bg-white group">
              <div className="relative h-64">
                <img 
                  src="/images/workshop/le_femmes.png" 
                  alt="Workshop Impression" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Bitcoin Workshop 2024</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md bg-white group">
              <div className="relative h-64">
                <img 
                  src="/images/workshop/le_feemes_old.png" 
                  alt="Workshop Impression" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Gemeinschaftsevent</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md bg-white group">
              <div className="relative h-64">
                <img 
                  src="/images/workshop/bitcoin-global-world (1).svg" 
                  alt="Global Bitcoin Community" 
                  className="w-full h-full object-contain p-4 bg-white transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium">Global Bitcoin Network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
*/}
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

      {/* Updated Agenda Section with Workshop Details */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="inline-block px-4 py-1 bg-[#FEF7CD] rounded-full text-[#F97316] font-medium text-sm mb-4">Workshops 11.10.2025</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Agenda</h2>
            <p className="text-lg text-gray-600 mb-8">
              Am Samstagnachmittag bieten wir vier verschiedene Workshops an, die auf unterschiedliche Kenntnisstufen zugeschnitten sind.
              Jeder Workshop dauert 55 Minuten und beginnt ab 12:30 Uhr.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#FDE1D3]/30">
                      <TableHead className="font-semibold">Workshop</TableHead>
                      <TableHead className="font-semibold">WS Leader</TableHead>
                      <TableHead className="font-semibold">Für Frauen*</TableHead>
                      <TableHead className="font-semibold">Workshop Subtitel</TableHead>
                      <TableHead className="font-semibold">TN Anzahl</TableHead>
                      <TableHead className="font-semibold">Dauer</TableHead>
                      <TableHead className="font-semibold">Beschreibung</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-[#FEF7CD]/20">
                      <TableCell className="font-medium">1. Deine Bitcoin Reise</TableCell>
                      <TableCell>Yvonne Strathmann und Katharina Jantzen</TableCell>
                      <TableCell>Alle</TableCell>
                      <TableCell>Gestalte deine Bitcoin Reise für dich stimmig!</TableCell>
                      <TableCell className="text-center">50</TableCell>
                      <TableCell>55 Min.</TableCell>
                      <TableCell>
                        Wo stehst du gerade auf deiner Bitcoin Reise? Welches Ziel hast du? Was könnte dein nächster Schritt sein und was brauchst du dafür? Gemeinsam und mit der open space Methode schauen wir deine Fragen an. Wir freuen uns auf Dich!
                      </TableCell>
                    </TableRow>
                    
                    <TableRow className="hover:bg-[#FEF7CD]/20">
                      <TableCell className="font-medium">2. How to Bitcoin I</TableCell>
                      <TableCell>Korina Karl</TableCell>
                      <TableCell>Einst.</TableCell>
                      <TableCell>Erlebe deine erste eingene Bitcoin Transaktion!</TableCell>
                      <TableCell className="text-center">50</TableCell>
                      <TableCell>55 Min.</TableCell>
                      <TableCell>
                        Erstelle mit deinem Smartphone eine Lightning Wallet. Tausche die ersten 10€ in Satoshis um und nutze deine Wallet direkt auf dem Forum, im Alltag oder nächsten Urlaub.
                      </TableCell>
                    </TableRow>
                    
                    <TableRow className="hover:bg-[#FEF7CD]/20">
                      <TableCell className="font-medium">3. How to Bitcoin II</TableCell>
                      <TableCell>Nicole Nowak</TableCell>
                      <TableCell>Fortge.</TableCell>
                      <TableCell>Firefish. Ein Blick auf neue Marktplätze für Bitcoin-besicherte Kredite</TableCell>
                      <TableCell className="text-center">50</TableCell>
                      <TableCell>55 Min.</TableCell>
                      <TableCell>
                        Lerne wie Bitcoiner die Peer-to-Peer Plattform Firefish nutzen, Kredite aufnehmen oder vergeben können und Bitcoin dabei als Sicherheit dient.
                      </TableCell>
                    </TableRow>
                    
                    <TableRow className="hover:bg-[#FEF7CD]/20">
                      <TableCell className="font-medium">4. Nostr</TableCell>
                      <TableCell>Tanja Bächle</TableCell>
                      <TableCell>Fortge.</TableCell>
                      <TableCell>Nostr. Mehr als nur ein Twitter Klon.</TableCell>
                      <TableCell className="text-center">50</TableCell>
                      <TableCell>55 Min.</TableCell>
                      <TableCell>
                        Lerne Nostr kennen - ein soziales Netzwerk, das deine Privatsphäre schützt und Zensur widersteht. Wir erklären die Grundlagen und unterstützen dich bei der Einrichtung deines eigenen Accounts, damit du sicher und selbstbestimmt in die Nostr-Community starten kannst.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button 
                onClick={() => openPopup({
                  redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                })}
                className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full py-3 px-8 shadow-lg"
              >
                Jetzt anmelden und Workshop sichern
              </Button>
            </div>

            <div className="bg-[#FEF7CD]/30 rounded-lg p-4 mt-8 text-center">
              <p className="text-gray-700">
                <span className="font-semibold">Hinweis:</span> Die Teilnehmerzahl ist auf je 50 Personen pro Workshop begrenzt. Melden Sie sich frühzeitig an, um Ihren Platz zu sichern.
              </p>
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
