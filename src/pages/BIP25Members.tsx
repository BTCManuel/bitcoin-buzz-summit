
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Twitter } from 'lucide-react';

const BIP25Members = () => {
  const members = [
    {
      name: 'Andreas Streb',
      image: '/images/speakers/Andreas_Streb.jpg',
      title: 'Vorstandsvorsitzender der Volksbank Raiffeisenbank Bayern Mitte',
      bio: 'Ist Vorstandsvorsitzender der Volksbank Raiffeisenbank Bayern Mitte und maßgeblich für das Angebot von Dienstleistungen in Zusammenhang mit Bitcoin und Bitcoin-Lösungen in der Bank verantwortlich.',
      socials: []
    },
    {
      name: 'Günter Staud',
      image: '/images/speakers/frankenberg.jpg', // Placeholder image
      title: 'Organisator und Hauptansprechpartner für das 3. BitcoinForum',
      bio: 'Verantwortet seit 2002 das Marketing der Volksbank Raiffeisenbank Bayern Mitte. Neben der Vertriebsunterstützung liegt seine Leidenschaft in der Kommunikation und dem Event-Management. Als Pionier der ersten Stunde sind die Social Media Kanäle sein Steckenpferd. Seit 2021 treibt er das Bitcoin-Projekt der Bank voran und hat auch bereits das 1. und 2. BitcoinForum organisiert.',
      socials: [
        { type: 'email', url: 'guenter.staud@vr-bayernmitte.de', icon: <Twitter className="h-4 w-4" /> },
        { type: 'linkedin', url: 'https://www.linkedin.com/in/günter-staud/', icon: <Linkedin className="h-4 w-4" /> },
        { type: 'twitter', url: 'https://twitter.com/GuenterStaud', icon: <Twitter className="h-4 w-4" /> }
      ]
    },
    {
      name: 'Joe Martin',
      image: '/images/speakers/Joe_Martin.jpg',
      title: 'Co-Founder und Hauptansprechpartner für alle Speaker beim 3. BitcoinForum',
      bio: 'Ist einer der wenigen Technologie Berater, denen es gelingt, komplexe und komplizierte technologische Zusammenhänge auf einfache Art und Weise zu erklären. Er hat sich auf Bitcoin und Künstliche Intelligenz spezialisiert. Außerdem ist er Autor von mehreren Büchern, darunter dem ersten Bitcoin Buch in deutscher Sprache.',
      socials: [
        { type: 'link', url: 'https://linktr.ee/JoeMartinBTC', icon: <Linkedin className="h-4 w-4" /> }
      ]
    },
    {
      name: 'Rachel Geyer',
      image: '/images/speakers/Rachel_Geyer.jpg',
      title: 'Vizepräsidentin',
      bio: 'Ist Vizepräsidentin und Unternehmenssprecherin.',
      socials: []
    },
    {
      name: 'Konstantin Schmelz',
      image: '/images/speakers/Jannis_Langer.jpg', // Placeholder image
      title: 'Event- und Marketing',
      bio: 'Kommt aus der Event- und Marketingbranche und unterstützt seine Kollegen.',
      socials: []
    },
    {
      name: 'Der Helper',
      image: '/images/speakers/der_Helper.jpg',
      title: 'Infografiken und Felsvideos',
      bio: 'Ist bekannt durch seine Infografiken und Felsvideos.',
      socials: []
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-1 bg-bitcoin/10 backdrop-blur-sm rounded-full border border-bitcoin/20">
                <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Unser Team</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">"BIP25"-Members</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600">
                Willkommen bei den "BIP25"-Members! Unser engagiertes Team steht hinter der Organisation und Umsetzung des 3. BitcoinForums. Mit Leidenschaft für Innovation und einer gemeinsamen Vision für die Zukunft von Bitcoin und Blockchain arbeiten wir daran, ein einzigartiges Event zu schaffen, das Wissen, Austausch und Inspiration vereint. Lernen Sie hier die Köpfe kennen, die hinter den Kulissen für den Erfolg des Forums sorgen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <Card key={index} className="bg-white border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="aspect-[4/3] w-full relative">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - BIP25 Member`}
                      className="object-cover w-full h-full" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-6 right-6">
                      <h3 className="text-white text-xl font-bold">{member.name}</h3>
                      <p className="text-white/80 text-sm">{member.title}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    {member.socials.length > 0 && (
                      <div className="flex items-center space-x-3 mt-4">
                        {member.socials.map((social, idx) => (
                          <a 
                            key={idx} 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-500 hover:text-bitcoin transition-colors"
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BIP25Members;
