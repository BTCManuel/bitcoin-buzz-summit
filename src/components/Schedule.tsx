
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from '@/components/ui/card';
import { Clock, Calendar, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePopup } from "@/pages/PopupContext";

const Schedule = () => {
  const { openPopup } = usePopup();
  const showSchedule = false; // später auf true setzen, um den Zeitplan wieder zu aktivieren

  const scheduleItems = [
    {
      time: "18:00",
      title: "Einlass & Empfang",
      speaker: "",
      description: "Registrierung und Begrüßungsgetränk"
    },
    {
      time: "18:30",
      title: "Begrüßung & Einführung",
      speaker: "Andreas Streb",
      description: "Willkommen zum 3. BitcoinForum der VR-Bank Bayern Mitte"
    },
    {
      time: "18:45",
      title: "Hauptvortrag: Quo Vadis Bitcoin",
      speaker: "Prof. Max Muster",
      description: "Aktuelle Entwicklungen und Zukunftsperspektiven von Bitcoin"
    },
    {
      time: "19:30",
      title: "Bitcoin in der Praxis",
      speaker: "Carsten Hahn",
      description: "Anlagestrategien und praktische Anwendungen für Investoren"
    },
    {
      time: "20:15",
      title: "Podiumsdiskussion",
      speaker: "Alle Referenten",
      description: "Fragen und Antworten rund um Bitcoin"
    },
    {
      time: "21:00",
      title: "Networking & Ausklang",
      speaker: "",
      description: "Austausch mit Experten und Teilnehmern bei Getränken und Snacks"
    }
  ];

  return (
    <section id="schedule" className="py-32 bg-gradient-to-b from-[#D3E4FD]/30 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4 px-4 py-1 bg-[#F2FCE2] backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Agenda</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Programm</h2>
          <p className="text-xl text-gray-600">
            Eine ganze Woche Bitcoin in Ingolstadt. Drei Tage BitcoinForum. Dutzende Experten, Workshops, Seminare und alles was das Herz begehrt - für jeden ist etwas dabei.
          </p>
        </div>
        
        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm">
          <div className="p-4 md:p-8">
            <div className="flex items-center mb-6 space-x-4">
              <div className="h-12 w-12 rounded-full bg-[#FDE1D3]/50 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-bitcoin" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">9. - 11. Oktober 2025</h3>
                <p className="text-bitcoin">Saturn Arena, Ingolstadt</p>
              </div>
            </div>

            {!showSchedule ? (
              <div className="flex flex-col md:flex-row items-center gap-8 py-12">
                {/* Video-Box */}
                <div className="w-full md:w-1/2">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.youtube.com/embed/OJlUYckw2Ko?autoplay=1&mute=1&loop=1&playlist=OJlUYckw2Ko"
                      title="BitcoinForum Preview"
                      allow="autoplay; loop"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>

                {/* Text-Box */}
                <div className="w-full md:w-1/2 text-gray-600 text-lg">
                  <p>
                    Wir arbeiten an dem besten Programm aller Zeiten. Dutzende von Experten werden Vorträge und Workshops, Seminare und Expertengespräche anbieten. 
                    Es werden wertvolle Informationen für jedermann, ganz nach dem persönlichen Kenntnisstand und Interesse dabei sein. Das Programm werden wir im Sommer veröffentlichen.
                  </p>
                </div>
              </div>

            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#F2FCE2]/30 hover:bg-[#F2FCE2]/50">
                      <TableHead className="w-24 text-bitcoin">Zeit</TableHead>
                      <TableHead className="text-bitcoin">Agenda</TableHead>
                      <TableHead className="text-bitcoin">Referent</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduleItems.map((item, index) => (
                      <TableRow 
                        key={index}
                        className={index % 2 === 0 ? "bg-white hover:bg-[#D3E4FD]/10" : "bg-[#D3E4FD]/10 hover:bg-[#D3E4FD]/20"}
                      >
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-bitcoin" />
                            {item.time}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-semibold text-gray-800">{item.title}</p>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        </TableCell>
                        <TableCell>{item.speaker}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </Card>
        
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

export default Schedule;
