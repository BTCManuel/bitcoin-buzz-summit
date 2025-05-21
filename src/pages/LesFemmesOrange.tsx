
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { usePopup } from '@/pages/PopupContext';
import { Calendar, Users, MessageSquare, Heart } from 'lucide-react';

const LesFemmesOrange = () => {
  const { openPopup } = usePopup();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#FDE1D3] via-[#FEF7CD] to-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-16">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <div className="inline-block px-4 py-1 bg-white/70 backdrop-blur-sm rounded-full border border-bitcoin/20 mb-4">
                <span className="text-sm font-medium text-bitcoin">Teil des 3. Bitcoin Forums 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
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
                  className="bg-[#F97316] hover:bg-[#EA580C] text-white rounded-full py-6 shadow-lg"
                >
                  Jetzt Teilnehmen
                </Button>
                <a href="#about" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#F97316]/30 rounded-full bg-white/80 text-gray-700 hover:bg-[#FDE1D3]/30 backdrop-blur-sm transition-all">
                  Mehr erfahren
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src="/images/workshop/le_femmes.png" 
                alt="Les Femmes Orange" 
                className="max-w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Über Les Femmes Orange</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Les Femmes Orange ist eine internationale Initiative mit dem Ziel, Frauen dazu zu ermutigen, sich mit Bitcoin auseinanderzusetzen. Durch Veranstaltungen und regelmäßige Treffen bietet sie eine Plattform, auf der Frauen – unabhängig von Vorkenntnissen – die praktischen Aspekte von Bitcoin kennenlernen, sich austauschen und gemeinsam wachsen können. Das Ziel ist es, Bitcoin für alle Frauen zugänglich zu machen und eine unterstützende Gemeinschaft zu schaffen, die finanzielle Unabhängigkeit und Selbstbestimmung fördert.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
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

      {/* Bitcoin Forum Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/images/workshop/bitcoin-global-world (1).svg" 
                alt="Bitcoin Forum Event" 
                className="max-w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1 bg-[#FEF7CD] rounded-full text-bitcoin font-medium text-sm">
                3. Bitcoin Forum 2025
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Les Femmes Orange beim Bitcoin Forum</h2>
              <p className="text-lg text-gray-600">
                Im Rahmen des 3. Bitcoin Forums wird Les Femmes Orange am Freitagnachmittag eine eigene Veranstaltung ausrichten sowie am Samstagnachmittag mehrere Workshops anbieten. Wir heißen alle Frauen herzlich willkommen – ganz gleich, ob Bitcoin-Newbie oder alte Häsin!
              </p>
              <div className="pt-4">
                <Button 
                  onClick={() => openPopup({
                    redirectUrl: "https://vr-bayernmitte.genolive.de/index.php?page=event-code&code=bitcoin25"
                  })}
                  className="bg-bitcoin hover:bg-bitcoin-dark text-white rounded-full py-6 shadow-lg shadow-bitcoin/20"
                >
                  Jetzt Anmelden
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Section - Placeholder */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Agenda</h2>
            <p className="text-lg text-gray-600">
              Die detaillierte Agenda für die Les Femmes Orange Veranstaltungen wird in Kürze veröffentlicht. Melden Sie sich jetzt an, um als Erste informiert zu werden!
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#FDE1D3] rounded-full p-3 mt-1">
                <Calendar className="h-6 w-6 text-[#F97316]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Freitagnachmittag</h3>
                <p className="text-gray-600 mt-2">
                  Spezielle Les Femmes Orange Veranstaltung mit Networking und Einführung in die Bitcoin-Welt.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#FDE1D3] rounded-full p-3 mt-1">
                <Calendar className="h-6 w-6 text-[#F97316]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Samstagnachmittag</h3>
                <p className="text-gray-600 mt-2">
                  Verschiedene Workshops für Anfängerinnen und Fortgeschrittene zu Bitcoin-Themen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#FDE1D3] to-[#FEF7CD]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex justify-center mb-6">
              <Heart className="h-12 w-12 text-[#F97316]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Werde Teil der Les Femmes Orange Community</h2>
            <p className="text-lg text-gray-700">
              Entdecke Bitcoin in einer unterstützenden Gemeinschaft von Frauen. Unabhängig von deinen Vorkenntnissen – du bist herzlich willkommen!
            </p>
            <div className="pt-4">
              <a 
                href="https://lesfemmesorange.work/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-white px-8 py-3 rounded-full text-[#F97316] border border-[#F97316]/20 hover:bg-[#F97316] hover:text-white transition-colors"
              >
                Website besuchen
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LesFemmesOrange;
