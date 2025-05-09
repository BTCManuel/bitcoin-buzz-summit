
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from '@/components/ui/card';
import { Clock, Calendar } from 'lucide-react';

const Schedule = () => {
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
      description: "Willkommen zum 3. Bitcoin Forum der VR-Bank Bayern Mitte"
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
            Ein Abend voller Fachwissen und Networking rund um Bitcoin und Blockchain
          </p>
        </div>
        
        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm">
          <div className="p-4 md:p-8">
            <div className="flex items-center mb-6 space-x-4">
              <div className="h-12 w-12 rounded-full bg-[#FDE1D3]/50 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-bitcoin" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">13. Oktober 2023</h3>
                <p className="text-bitcoin">Altes Rathaus, Ingolstadt</p>
              </div>
            </div>
            
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
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Schedule;
