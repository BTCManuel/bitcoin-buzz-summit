import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  HelpCircle, 
  MapPin, 
  Calendar,
  Users,
  Ticket,
  Star,
  Info,
  MessageSquare 
} from "lucide-react";
import { Link } from "react-router-dom";

// Helper function to get icon for each FAQ category
const getCategoryIcon = (index: number) => {
  const icons = [
    <MapPin className="h-5 w-5 text-bitcoin" />,          // Location
    <MapPin className="h-5 w-5 text-bitcoin" />,          // Travel
    <MapPin className="h-5 w-5 text-bitcoin" />,          // Parking
    <HelpCircle className="h-5 w-5 text-bitcoin" />,      // Accommodation
    <HelpCircle className="h-5 w-5 text-bitcoin" />,      // Camping
    <Star className="h-5 w-5 text-bitcoin" />,            // Food
    <MessageSquare className="h-5 w-5 text-bitcoin" />,   // Language
    <Calendar className="h-5 w-5 text-bitcoin" />,        // Streaming
    <Star className="h-5 w-5 text-bitcoin" />,            // Payment
    <Users className="h-5 w-5 text-bitcoin" />,           // Target audience
    <Info className="h-5 w-5 text-bitcoin" />,            // Other currencies
    <Users className="h-5 w-5 text-bitcoin" />,           // Kids
    <Ticket className="h-5 w-5 text-bitcoin" />,          // Tickets
    <Calendar className="h-5 w-5 text-bitcoin" />,        // Duration
    <HelpCircle className="h-5 w-5 text-bitcoin" />       // Notice
  ];

  return icons[index % icons.length];
};

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section with enhanced visual design */}
        <div className="bg-gradient-to-b from-pastel-yellow via-pastel-yellow/70 to-white py-20 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-bitcoin rounded-full blur-3xl"></div>
            <div className="absolute -left-20 top-40 w-64 h-64 bg-bitcoin rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                  Häufig gestellte Fragen
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                  Alle wichtigen Informationen zum 3. BitcoinForum klar und verständlich beantwortet
                </p>
              </div>
              <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                <img 
                  src="/images/workshop/bitcoin-help-support.svg" 
                  alt="FAQ" 
                  className="w-full h-full object-contain animate-bounce-slow" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Category navigation */}
        <div className="container mx-auto max-w-4xl px-6 py-8 border-b">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {['Veranstaltungsort', 'Anreise', 'Parken', 'Übernachtung', 'Tickets'].map((category, index) => (
              <a 
                href={`#category-${index + 1}`} 
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-3 text-center text-sm font-medium hover:bg-gray-50 hover:border-bitcoin/30 transition-colors flex flex-col items-center gap-2"
              >
                {getCategoryIcon(index)}
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Accordion with visual enhancements */}
        <div className="container mx-auto max-w-4xl px-6 py-12">
          <Accordion type="single" collapsible className="space-y-6">
            {[
              {
                id: "item-1",
                question: "Wo findet das 3. BitcoinForum statt?",
                answer: <>
                  <p className="text-gray-700 mb-4">
                    Die Hauptveranstaltungsstätte ist die Saturn Arena Ingolstadt (Südliche Ringstraße 64). Als weitere Locations stehen das benachbarte Exerzierhaus, der DonauTower (Unternehmenszentrale der Volksbank Raiffeisenbank Bayern Mitte) und das Brigk (Digitales Gründerzentrum) zur Verfügung.
                  </p>
                  <p className="text-gray-700">
                    Alle Veranstaltungslocations sind von der Saturn Arena aus fußläufig gut erreichbar.
                  </p>
                  <div className="mt-4 p-3 bg-pastel-blue/20 rounded-lg flex items-center gap-3">
                    <img src="/images/workshop/bitcoin-location.svg" alt="Location" className="w-12 h-12" />
                    <span className="text-sm">Alle Veranstaltungsorte sind in unmittelbarer Nähe zueinander angeordnet.</span>
                  </div>
                </>
              },
              {
                id: "item-2",
                question: "Wie kann ich Anreisen?",
                answer: <>
                  <p className="text-gray-700">
                    Ingolstadt liegt genau zwischen Nürnberg und München unmittelbar an der Autobahn A9 und ist somit gut mit dem Auto zu erreichen. Auch die Bahn-Anbindung ist sehr gut. Der Hauptbahnhof Ingolstadt ist nur 2 Kilometer von der Saturn Arena entfernt. Die naheliegendsten Flughäfen befinden sich in München und Nürnberg.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="p-3 bg-pastel-green/30 rounded-lg text-center">
                      <div className="font-medium mb-1">Auto</div>
                      <div className="text-sm">Autobahn A9</div>
                    </div>
                    <div className="p-3 bg-pastel-blue/30 rounded-lg text-center">
                      <div className="font-medium mb-1">Bahn</div>
                      <div className="text-sm">2 km vom Hauptbahnhof</div>
                    </div>
                    <div className="p-3 bg-pastel-peach/30 rounded-lg text-center">
                      <div className="font-medium mb-1">Flugzeug</div>
                      <div className="text-sm">Flughäfen MUC/NUE</div>
                    </div>
                  </div>
                </>
              },
              {
                id: "item-3",
                question: "Wo kann ich parken?",
                answer: <>
                  <p className="text-gray-700 mb-4">
                    Direkt neben der Saturn Arena gibt es ein Parkhaus mit insgesamt 576 Stellplätzen. Das Parkhaus grenzt direkt an die Saturn Arena an und bietet den kürzest möglichen Weg zum Arena-Eingang:
                  </p>
                  <ul className="list-none ml-6 mb-4">
                    <li className="mb-2 font-medium">Parkhaus Arena</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    Zusätzlich stehen am und unter dem Stadttheater Ingolstadt sowie unter dem Congress Center weitere Parkflächen bzw. Tiefgaragen zur Verfügung.
                  </p>
                  <p className="text-gray-700 mb-2">Wir empfehlen:</p>
                  <ul className="list-none ml-6 mb-4">
                    <li className="mb-2">Tiefgarage Theater West</li>
                    <li className="mb-2">Tiefgarage Theater Ost</li>
                    <li className="mb-2">Tiefgarage Schloss</li>
                    <li className="mb-2">Congressgarage</li>
                  </ul>
                  <p className="text-gray-700">
                    Bitte beachten Sie, dass alle Parkflächen kostenpflichtig sind.
                  </p>
                </>
              },
              {
                id: "item-4",
                question: "Welche Übernachtungsmöglichkeiten gibt es?",
                answer: <>
                  <p className="text-gray-700 mb-4">
                    In Ingolstadt und speziell in der Nähe der Saturn Arena gibt es mehrere Hotels in unterschiedlichen Ausstattungs- und Preisklassen. Hier einige Empfehlungen:
                  </p>
                  <ul className="list-none ml-6 mb-4">
                    <li className="mb-2">Maritim Hotel</li>
                    <li className="mb-2">Altstadthotel</li>
                    <li className="mb-2">Hotel Rappensberger</li>
                    <li className="mb-2">B&B Hotel</li>
                    <li className="mb-2">enso Hotel</li>
                  </ul>
                  <p className="text-gray-700">
                    Einen Überblick über weitere Hotel bekommen Sie hier.
                  </p>
                </>
              },
              {
                id: "item-5",
                question: "Gibt es eine Campingplatz in der Nähe?",
                answer: <>
                  <p className="text-gray-700 mb-4">
                    Ja, es gibt einen Campingplatz. Bis zur Saturn Arena sind es ca. drei Kilometer.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Waldcamping direkt am Auwaldsee in Ingolstadt
                  </p>
                </>
              },
              {
                id: "item-6",
                question: "Gibt es beim BitcoinForum eine Bewirtung?",
                answer: <>
                  <p className="text-gray-700 mb-4">
                    Ja, in der Saturn Arena und im Exerzierhaus stehen Ihnen mehrere Angebote für Ihre Bewirtung und für Getränke zur Verfügung.
                  </p>
                  <p className="text-gray-700">
                    Bitte beachten Sie, dass Speisen und Getränke kostenpflichtig sind.
                  </p>
                </>
              },
              {
                id: "item-7",
                question: "In welcher Sprache findet das 3. BitcoinForum statt?",
                answer: <>
                  <p className="text-gray-700">
                    Das 3. BitcoinForum findet in deutscher Sprache statt. Nur im Ausnahmefall könnte ein englischsprachiger Part vorkommen. In diesem Fall bieten wir Ihnen eine deutsche Übersetzung.
                  </p>
                </>
              },
              {
                id: "item-8",
                question: "Werden die Vorträge live gestreamt oder aufgezeichnet?",
                answer: <>
                  <p className="text-gray-700">
                    Die Vorträge werden nicht live gestreamt. Allerdings werden alle Hauptvorträge und Penal-Discussions, die in der Saturn Arena auf der Mainstage stattfinden, aufgezeichnet und können nach der Konferenz auf unserem YouTube-Kanal angesehen werden.
                  </p>
                </>
              },
              {
                id: "item-9",
                question: "Kann ich Speisen und Getränke mit Bitcoin (bzw. Satoshi) bezahlen?",
                answer: <>
                  <p className="text-gray-700">
                    Einige Anbieter von Speisen und Getränken werden Bitcoin bzw. Satoshi akzeptieren. Wir empfehlen Ihnen jedoch, auch Bargeld bzw. Zahlungsmittel in Euro-Währung bei sich zu haben.
                  </p>
                </>
              },
              {
                id: "item-10",
                question: "Für wen ist das 3. BitcoinForum gedacht?",
                answer: <>
                  <p className="text-gray-700 mb-4">
                    Die Veranstaltung richtet sich sowohl an Menschen, die den Bitcoin kennenlernen möchten als auch an fortgeschrittene Bitcoiner. Die Veranstaltung bietet für jeden Kenntnis- und Wissensstand den richtigen Rahmen. Jeder kommt beim 3. BitcoinForum auf seine Kosten. Sie erhalten Informationen und können Bitcoin-Produkte und -Dienstleistungen testen bzw. erleben.
                  </p>
                  <p className="text-gray-700">
                    Zudem bietet das 3. BitcoinForum eine gute Plattform, um sich mit Gleichgesinnten zu treffen und auszutauschen.
                  </p>
                </>
              },
              {
                id: "item-11",
                question: "Werden beim 3. BitcoinForum auch andere Kryptowährungen behandelt?",
                answer: <>
                  <p className="text-gray-700">
                    Nein, das 3. BitcoinForum ist eine reine Bitcoin-Veranstaltung ("Bitcoin only"). Weitere bzw. andere Kryptowährungen werden nicht thematisiert.
                  </p>
                </>
              },
              {
                id: "item-12",
                question: "Ist das 3. BitcoinForum auch für Kinder bzw. Minderjährige geeignet?",
                answer: <>
                  <p className="text-gray-700 mb-4">
                    Ja, in bzw. neben dem Exerzierhaus gibt es in unserer "Family & Kids"-Area eine professionelle Kinderbetreuung und -animation.
                  </p>
                  <p className="text-gray-700">
                    Kinder bzw. Minderjährige brauchen in Begleitung ihrer Eltern bzw. eines Elternteils kein Ticket, um beim 3. BitcoinForum Zutritt zu erhalten.
                  </p>
                </>
              },
              {
                id: "item-13",
                question: "Was ist der Unterschied zwischen den Ticketoptionen?",
                answer: <>
                  <p className="text-gray-700 mb-4">
                    Das kostenlose Messe-Ticket ist für Interessierte und Bitcoin-Einsteiger gedacht. Sie haben Zugang zum Messe-Bereich, können die Bitcoin-Kunst erleben und erreichen auch unsere Food- und Chill-Area.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Mit dem kostenpflichtigen Forum-Ticket erhalten Sie zusätzlich Zugang zur Mainstage und können weitere Vorträge auf diversen Side-Event-Bühnen erleben.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Das kostenpflichte Business-Ticket ist für Unternehmen bzw. Unternehmer gedacht, die am Donnerstag an Vorträgen mit Inhalten rund um das Thema unternehmerische Nutzung von Bitcoin bzw. Nutzung von Energie zur Bitcoin-Erzeugung ("mining") interessiert sind.
                  </p>
                  <p className="text-gray-700">
                    Das kostenpflichte VIP-Ticket ist die höchste Stufe und ist sozusagen das "all inclusiv"-Ticket. Es bietet vollen Zugang zur gesamten Veranstaltung, kombiniert mit dem besten Service und der besten Gastfreundschaft. VIP-Teilnehmer haben zudem Zugang zu exklusiven Q&A-Sessions mit hochkarätigen Speakern. Auch zwei Hotel-Übernachtungen im Einzelzimmer sind inkludiert.
                  </p>
                </>
              },
              {
                id: "item-14",
                question: "Wie lange wird das 3. BitcoinForum dauern?",
                answer: <>
                  <p className="text-gray-700 mb-4">
                    Am Donnerstag und Freitag endet der offizielle Veranstaltungsrahmen um ca. 22.30 Uhr. Danach ist es noch möglich, die Messestände der Aussteller zu besuchen. Die Saturn Arena und das Exerzierhaus schließen um 23.30 Uhr.
                  </p>
                  <p className="text-gray-700">
                    Am Samstag endet das 3. BitcoinForum um 18.00 Uhr.
                  </p>
                </>
              },
              {
                id: "item-15",
                question: "WICHTIGER HINWEIS: Keine Aufkleber/Sticker im öffentlichen Raum!",
                answer: <>
                  <p className="text-gray-700 mb-4">
                    Wir bitten alle, keine Aufkleber ("Sticker") anzubringen. Es ist unser Ziel, Bitcoin auf seriöse Art und Weise zu kommunizieren. Eine wilde "Stickerei" gehört nicht zu unserer Strategie.
                  </p>
                  <p className="text-gray-700 font-medium">
                    Jede Art des Anbringens von Aufklebern wird ausnahmslos zur Anzeige gebracht.
                  </p>
                </>
              }
            ].map((faq, index) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id} 
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white group"
                id={`category-${index + 1}`}
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-gray-800 flex gap-3 items-center">
                  <span className="flex items-center gap-3">
                    {getCategoryIcon(index)}
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50 animate-fade-in">
                  {faq.answer || (
                    <p className="text-gray-700">
                      Die Vorträge werden nicht live gestreamt. Allerdings werden alle Hauptvorträge und Penal-Discussions, die in der Saturn Arena auf der Mainstage stattfinden, aufgezeichnet und können nach der Konferenz auf unserem YouTube-Kanal angesehen werden.
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Enhanced CTA section */}
          <div className="mt-12 bg-gradient-to-br from-pastel-blue/30 to-pastel-blue/10 p-8 rounded-lg shadow-sm border border-pastel-blue/30">
            <div className="flex items-center gap-5 mb-6">
              <img src="/images/workshop/bitcoin-conversation.svg" alt="Contact" className="w-16 h-16" />
              <div>
                <h3 className="text-lg font-medium mb-1">Weitere Fragen?</h3>
                <p>Schreiben Sie uns an <a href="mailto:veranstaltung@vr-bayernmitte.de" className="text-bitcoin hover:underline font-medium">veranstaltung@vr-bayernmitte.de</a></p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#" 
                className="py-3 px-6 bg-white text-gray-800 rounded-full border border-gray-200 text-center hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                <Ticket className="h-4 w-4" />
                <span>Ticket-Überblick ansehen</span>
              </a>
              <a 
                href="#" 
                className="py-3 px-6 bg-bitcoin text-white rounded-full text-center hover:bg-bitcoin-dark transition-colors shadow-lg shadow-bitcoin/20 flex items-center justify-center gap-2"
              >
                <Star className="h-4 w-4" />
                <span>Jetzt Ticket ordern</span>
              </a>
            </div>
          </div>

          {/* Additional FAQ categories with images */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex-shrink-0 bg-pastel-yellow rounded-full flex items-center justify-center">
                  <img src="/images/workshop/bitcoin-card-credit-card (1).svg" alt="Payment" className="w-8 h-8" />
                </div>
                {/*
                <h3 className="text-lg font-medium">Zahlungsfragen</h3>
              </div>
              <ul className="space-y-3 ml-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bitcoin"></span>
                  <span>Bitcoin und Satoshi werden akzeptiert</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bitcoin"></span>
                  <span>Barzahlung ist ebenfalls möglich</span>
                </li>
              </ul>
              <a href="#item-9" className="text-bitcoin hover:underline text-sm flex items-center gap-1 mt-3">
                <span>Mehr erfahren</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex-shrink-0 bg-pastel-green rounded-full flex items-center justify-center">
                  <img src="/images/workshop/bitcoin-folder.svg" alt="Documents" className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-medium">Veranstaltungsinformationen</h3>
              </div>
              <ul className="space-y-3 ml-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bitcoin"></span>
                  <span>Reine Bitcoin-Veranstaltung</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bitcoin"></span>
                  <span>Familien- und kinderfreundlich</span>
                </li>
              </ul>
              <a href="#item-11" className="text-bitcoin hover:underline text-sm flex items-center gap-1 mt-3">
                <span>Mehr erfahren</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          */}

          {/* Featured FAQ with illustration */}
          <div className="mt-12 bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex justify-center">
                <img src="/images/workshop/bitcoin-global-world.svg" alt="Bitcoin Global" className="h-48 object-contain" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-medium mb-4">Warum sollten Sie das 3. BitcoinForum besuchen?</h3>
                <p className="text-gray-700 mb-4">
                  Die Veranstaltung richtet sich sowohl an Menschen, die den Bitcoin kennenlernen möchten als auch an fortgeschrittene Bitcoiner. Die Veranstaltung bietet für jeden Kenntnis- und Wissensstand den richtigen Rahmen. Jeder kommt beim 3. BitcoinForum auf seine Kosten.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-pastel-yellow flex items-center justify-center">
                      <Info className="h-4 w-4 text-bitcoin" />
                    </div>
                    <span>Informative Vorträge</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-pastel-peach flex items-center justify-center">
                      <Users className="h-4 w-4 text-bitcoin" />
                    </div>
                    <span>Networking-Möglichkeiten</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-pastel-blue flex items-center justify-center">
                      <Star className="h-4 w-4 text-bitcoin" />
                    </div>
                    <span>Live-Demonstrationen</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-8 h-8 rounded-full bg-pastel-green flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-bitcoin" />
                    </div>
                    <span>Expert:innen im Gespräch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
