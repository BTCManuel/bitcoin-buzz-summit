import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { usePopup } from "@/pages/PopupContext";
import { Ticket } from 'lucide-react';

const membersData = [
  {
    name: 'Andreas Streb',
    role: 'Vorstandsvorsitzender',
    company: 'Volksbank Raiffeisenbank Bayern Mitte',
    image: '/images/speakers/Andreas_Streb.jpg',
    bio: (
      <>
        Ist Vorstandsvorsitzender der Volksbank Raiffeisenbank Bayern Mitte und maßgeblich für das Angebot von Dienstleistungen in Zusammenhang mit Bitcoin und Bitcoin-Lösungen in der Bank verantwortlich.
      </>
    ),
    bgColor: "bg-[#FEF7CD]/50",
    bgSolidColor: "bg-[#FEF7CD]"
  },
  {
    name: 'Günter Staud',
    role: 'Organisator',
    company: '3. BitcoinForum',
    image: '/images/speakers/frankenberg.jpg',
    bio: (
      <>
        Verantwortet seit 2002 das Marketing der VR Bayern Mitte. Seit 2021 treibt er das Bitcoin-Projekt der Bank voran und hat das 1. und 2. BitcoinForum organisiert.
      </>
    ),
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
  {
    name: 'Joe Martin',
    role: 'Co-Founder',
    company: 'Bitcoin Forum',
    image: '/images/speakers/Joe_Martin.jpg',
    bio: (
      <>
        Ist Technologie-Berater mit Fokus auf Bitcoin und KI, mehrfacher Buchautor und Hauptansprechpartner für alle Speaker beim 3. BitcoinForum.
      </>
    ),
    bgColor: "bg-[#FDE1D3]/50",
    bgSolidColor: "bg-[#FDE1D3]"
  },
  {
    name: 'Rachel Geyer',
    role: 'Vizepräsidentin',
    company: '',
    image: '/images/speakers/Rachel_Geyer.jpg',
    bio: (
      <>
        Ist Vizepräsidentin und Unternehmenssprecherin.
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: 'Konstantin Schmelz',
    role: 'Event & Marketing',
    company: '',
    image: '/images/speakers/Jannis_Langer.jpg',
    bio: (
      <>
        Kommt aus der Event- und Marketingbranche und unterstützt seine Kollegen.
      </>
    ),
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
  {
    name: 'Der Helper',
    role: 'Infografiken & Videos',
    company: '',
    image: '/images/speakers/der_Helper.jpg',
    bio: (
      <>
        Ist bekannt durch seine Infografiken und Felsvideos.
      </>
    ),
    bgColor: "bg-[#FEF7CD]/50",
    bgSolidColor: "bg-[#FEF7CD]"
  }
];

const BIP25Members = () => {
  const { openPopup } = usePopup();
  const [selectedMember, setSelectedMember] = React.useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 px-4 py-1 bg-bitcoin/10 backdrop-blur-sm rounded-full border border-bitcoin/20">
              <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Unser Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">BIP25-Mitglieder</h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Lerne die engagierten Köpfe kennen, die hinter der Organisation des BitcoinForums stehen.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {membersData.map((member, index) => (
              <Card
                key={index}
                onClick={() => setSelectedMember(member)}
                className={`cursor-pointer p-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 ${member.bgColor}`}
              >
                <CardContent className="flex flex-col items-center p-1">
                  <div className="w-full aspect-square mb-2 relative">
                    <Avatar className="h-full w-full rounded-lg overflow-hidden">
                      <AvatarImage
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </Avatar>
                  </div>
                  <h3 className="text-gray-800 font-semibold text-sm truncate w-full text-center">
                    {member.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
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
      </main>
      <Footer />

      {/* Member Details Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
        <DialogContent className={`max-w-xl max-h-[80vh] overflow-y-auto ${selectedMember?.bgSolidColor} border-none shadow-xl rounded-xl`}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">{selectedMember?.name}</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col md:flex-row gap-6 p-2 items-center">
            <div className="w-32 h-32 md:w-48 md:h-48">
              <Avatar className="h-full w-full rounded-xl overflow-hidden shadow-md border-2 border-white">
                <AvatarImage
                  src={selectedMember?.image}
                  alt={selectedMember?.name}
                  className="h-full w-full object-cover"
                />
              </Avatar>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap gap-2 items-center">
                {selectedMember?.role && (
                  <span className="bg-white/70 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {selectedMember.role}
                  </span>
                )}
                {selectedMember?.company && (
                  <span className="bg-white/70 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {selectedMember.company}
                  </span>
                )}
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                {selectedMember?.bio}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BIP25Members;
