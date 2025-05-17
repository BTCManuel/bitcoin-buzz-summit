import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { usePopup } from "@/pages/PopupContext";
import { Ticket } from 'lucide-react';

interface Member {
  name: string;
  role?: string;
  company?: string;
  image: string;
  bio: React.ReactNode;
  bgColor: string;
  bgSolidColor: string;
}
const members: Member[] = [
  
  {
    name: "Andreas Streb",
    image: "/images/speakers/Andreas_Streb.jpg",
    bio: (
      <>
        Vorstandsvorsitzender der Volksbank Raiffeisenbank Bayern Mitte eG und verantwortlich für das Angebot von Bitcoin-Dienstleistungen.
      </>
    ),
    bgColor: "bg-[#FDE1D3]/50",
    bgSolidColor: "bg-[#FDE1D3]"
  },
  {
    name: "Günter Staud",
    image: "/images/speakers/BitcoinForum_BIP25-Member_Staud.png",
    bio: (
      <>
        Verantwortet seit 2002 das Marketing der VR Bayern Mitte. Organisator des 3. BitcoinForums. <br />
        Mobil: +49 151 20329231 <br />
        E-Mail: guenter.staud@vr-bayernmitte.de <br />
        X: GuenterStaud <br />
        LinkedIn: Günter Staud
      </>
    ),
    bgColor: "bg-[#FEF7CD]/50",
    bgSolidColor: "bg-[#FEF7CD]"
  },
  {
    name: "Joe Martin",
    image: "/images/speakers/Joe_Martin.jpg",
    bio: (
      <>
        Technologieberater mit Fokus auf Bitcoin und KI. Autor des ersten Bitcoin Buches in deutscher Sprache. <br />
        Kontakt: <a href="https://linktr.ee/JoeMartinBTC" className="text-bitcoin underline">https://linktr.ee/JoeMartinBTC</a>
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: "Rachel Geyer",
    image: "/images/speakers/Rachel_Geyer.jpg",
    bio: (
      <>
        Vizepräsidentin der terahash.energy GmbH und Vorstandsvorsitzende der European Bitcoin Energy Association. <br />
        E-Mail: rachel@terahash.space
      </>
    ),
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
  {
    name: "Konstantin Schmelz",
    image: "/images/speakers/Jannis_Langer.jpg",
    bio: (
      <>
        Aus der Event- und Marketingbranche. Aktuell bei 21bitcoin tätig. <br />
        E-Mail: konstantin.s@fior.digital
      </>
    ),
    bgColor: "bg-[#FDE1D3]/50",
    bgSolidColor: "bg-[#FDE1D3]"
  },
  {
    name: "Der Helper",
    image: "/images/speakers/der_Helper.jpg",
    bio: (
      <>
        Bekannt durch Infografiken und Felsvideos über Bitcoin. <br />
        X: <a href="https://x.com/derHelper" className="text-bitcoin underline">@derHelper</a> <br />
        YouTube: <a href="https://www.youtube.com/@derHelper" className="text-bitcoin underline">@derHelper</a>
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: "Dr. Alex von Frankenberg",
    image: "/images/speakers/frankenberg.jpg",
    bio: (
      <>
        Leitete von 2005 bis 2025 als Geschäftsführer den HTGF. Beschäftigt sich intensiv mit Bitcoin als Wertspeicher.
      </>
    ),
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
  {
    name: "Lukas Waldner",
    image: "/images/speakers/BitcoinForum_BIP25-Member_Waldner_583x500_2025-02.jpg",
    bio: (
      <>
        COO & Co-Founder von 21energy. Veranstaltungsorganisator, Sportler und Alpinist.
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: "Anna von Schilcher",
    image: "/images/speakers/BitcoinForum_BIP25-Member_Schilcher_583x500_2025-02.jpg",
    bio: <>Infos folgen</>,
    bgColor: "bg-[#FEF7CD]/50",
    bgSolidColor: "bg-[#FEF7CD]"
  },
  {
    name: "Patrick Linus",
    image: "/images/speakers/Patrick_Linus.jpg",
    bio: <>Infos folgen. Hauptansprechpartner für den Bitcoin Block beim 3. BitcoinForum.</>,
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
  {
    name: "Lea Kelwin",
    image: "/images/speakers/Lea_Kelwin.jpg",
    bio: (
      <>
        Hebamme, Bitcoin-Bildung und Mitgründerin der Non-Profit-Initiative Bitcoin Block. <br />
        Mail: lea@bitcoinblock.study <br />
        Insta: @lea_kelwin
      </>
    ),
    bgColor: "bg-[#FEF7CD]/50",
    bgSolidColor: "bg-[#FEF7CD]"
  },
  {
    name: "Chris Seedor",
    image: "/images/speakers/Chris_Seedor.jpg",
    bio: (
      <>
        Geschäftsführer von seedor.io, bitsurance.io und satskeeper.com. Ansprechpartner für das Programm beim 3. BitcoinForum.
      </>
    ),
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
  {
    name: "Leonardo Conti",
    image: "/images/speakers/BitcoinForum_BIP25-Member_Conti_583x500_2025-02.jpg",
    bio: (
      <>
        Ehemaliger Nationaltorhüter, Berater für Marketing & Strategie. <br />
        E-Mail: LAC@to-the-hills.com <br />
        X: <a href="https://x.com/LeonardoConti35" className="text-bitcoin underline">@LeonardoConti35</a> <br />
        LinkedIn: <a href="https://de.linkedin.com/in/leonardo-conti-96154071" className="text-bitcoin underline">Profil</a>
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: "Ronny Mütschele",
    image: "/images/speakers/Ronny_Muetschele.jpg",
    bio: (
      <>
        Seit 2013 im Bitcoin-Bereich. Geschäftsführer der HODLMAYR GmbH. Betreiber von <a href="https://www.copiaro.com" className="text-bitcoin underline" target="_blank">www.copiaro.com</a>
      </>
    ),
    bgColor: "bg-[#FDE1D3]/50",
    bgSolidColor: "bg-[#FDE1D3]"
  },
  {
    name: "Abu Akkuc",
    image: "/images/speakers/BitcoinForum_BIP25-Member_Akkuc_583x500_2025-02.jpg",
    bio: (
      <>
        Gründer von Bitart und 21Million Fashion. Ansprechpartner für die Kunstgalerie. <br />
        E-Mail: bitart@outlook.de <br />
        Telegram: "bitart21"
      </>
    ),
    bgColor: "bg-[#FEF7CD]/50",
    bgSolidColor: "bg-[#FEF7CD]"
  },
  {
    name: "Sascha Minic",
    image: "/images/speakers/Sascha_Minic.jpg",
    bio: <>Infos folgen</>,
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: "Marc Guilliard",
    image: "/images/speakers/Marc_Guilliard.jpg",
    bio: <>Infos folgen</>,
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
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
              Wie bei jeder großen Veranstaltung ist so etwas nur gemeinsam möglich. Deshalb haben wir die Bitcoin-Community um Unterstützung gebeten – und die BIP25-Gruppe ins Leben gerufen. Unser besonderer Dank gilt allen engagierten Helferinnen und Helfern, die mit Zeit, Ideen und Leidenschaft dazu beitragen, das dritte Bitcoin Forum möglich zu machen. Ohne euch wäre dieses Event nicht denkbar – danke für euren großartigen Einsatz!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {members.map((member, index) => (
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
