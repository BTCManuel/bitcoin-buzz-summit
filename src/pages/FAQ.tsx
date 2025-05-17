
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="bg-gradient-to-b from-pastel-yellow to-white py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Häufig gestellte Fragen zum 3. BitcoinForum
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Alle wichtigen Fragen klar und verständlich beantwortet
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="container mx-auto max-w-4xl px-6 py-16">
          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="item-1" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                Wo findet das 3. BitcoinForum statt?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700 mb-4">
                  Die Hauptveranstaltungsstätte ist die Saturn Arena Ingolstadt (Südliche Ringstraße 64). Als weitere Locations stehen das benachbarte Exerzierhaus, der DonauTower (Unternehmenszentrale der Volksbank Raiffeisenbank Bayern Mitte) und das Brigk (Digitales Gründerzentrum) zur Verfügung.
                </p>
                <p className="text-gray-700">
                  Alle Veranstaltungslocations sind von der Saturn Arena aus fußläufig gut erreichbar.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                Wie kann ich Anreisen?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  Ingolstadt liegt genau zwischen Nürnberg und München unmittelbar an der Autobahn A9 und ist somit gut mit dem Auto zu erreichen. Auch die Bahn-Anbindung ist sehr gut. Der Hauptbahnhof Ingolstadt ist nur 2 Kilometer von der Saturn Arena entfernt. Die naheliegendsten Flughäfen befinden sich in München und Nürnberg.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                Wo kann ich parken?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
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
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                Welche Übernachtungsmöglichkeiten gibt es?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
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
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                Gibt es eine Campingplatz in der Nähe?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700 mb-4">
                  Ja, es gibt einen Campingplatz. Bis zur Saturn Arena sind es ca. drei Kilometer.
                </p>
                <p className="text-gray-700 font-medium">
                  Waldcamping direkt am Auwaldsee in Ingolstadt
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                Gibt es beim BitcoinForum eine Bewirtung?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700 mb-4">
                  Ja, in der Saturn Arena und im Exerzierhaus stehen Ihnen mehrere Angebote für Ihre Bewirtung und für Getränke zur Verfügung.
                </p>
                <p className="text-gray-700">
                  Bitte beachten Sie, dass Speisen und Getränke kostenpflichtig sind.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                In welcher Sprache findet das 3. BitcoinForum statt?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  Das 3. BitcoinForum findet in deutscher Sprache statt. Nur im Ausnahmefall könnte ein englischsprachiger Part vorkommen. In diesem Fall bieten wir Ihnen eine deutsche Übersetzung.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                Werden die Vorträge live gestreamt oder aufgezeichnet?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  Die Vorträge werden nicht live gestreamt. Allerdings werden alle Hauptvorträge und Penal-Discussions, die in der Saturn Arena auf der Mainstage stattfinden, aufgezeichnet und können nach der Konferenz auf unserem YouTube-Kanal angesehen werden.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                Kann ich Speisen und Getränke mit Bitcoin (bzw. Satoshi) bezahlen?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  Einige Anbieter von Speisen und Getränken werden Bitcoin bzw. Satoshi akzeptieren. Wir empfehlen Ihnen jedoch, auch Bargeld bzw. Zahlungsmittel in Euro-Währung bei sich zu haben.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                Für wen ist das 3. BitcoinForum gedacht?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700 mb-4">
                  Die Veranstaltung richtet sich sowohl an Menschen, die den Bitcoin kennenlernen möchten als auch an fortgeschrittene Bitcoiner. Die Veranstaltung bietet für jeden Kenntnis- und Wissensstand den richtigen Rahmen. Jeder kommt beim 3. BitcoinForum auf seine Kosten. Sie erhalten Informationen und können Bitcoin-Produkte und -Dienstleistungen testen bzw. erleben.
                </p>
                <p className="text-gray-700">
                  Zudem bietet das 3. BitcoinForum eine gute Plattform, um sich mit Gleichgesinnten zu treffen und auszutauschen.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                Werden beim 3. BitcoinForum auch andere "Kryptowährungen" behandelt?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700">
                  Nein, das 3. BitcoinForum ist eine reine Bitcoin-Veranstaltung ("Bitcoin only"). Weitere bzw. andere Kryptowährungen werden nicht thematisiert.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                Ist das 3. BitcoinForum auch für Kinder bzw. Minderjährige geeignet?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700 mb-4">
                  Ja, in bzw. neben dem Exerzierhaus gibt es in unserer "Family & Kids"-Area eine professionelle Kinderbetreuung und -animation.
                </p>
                <p className="text-gray-700">
                  Kinder bzw. Minderjährige brauchen in Begleitung ihrer Eltern bzw. eines Elternteils kein Ticket, um beim 3. BitcoinForum Zutritt zu erhalten.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                Was ist der Unterschied zwischen den Ticketoptionen?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
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
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                Wie lange wird das 3. BitcoinForum dauern?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700 mb-4">
                  Am Donnerstag und Freitag endet der offizielle Veranstaltungsrahmen um ca. 22.30 Uhr. Danach ist es noch möglich, die Messestände der Aussteller zu besuchen. Die Saturn Arena und das Exerzierhaus schließen um 23.30 Uhr.
                </p>
                <p className="text-gray-700">
                  Am Samstag endet das 3. BitcoinForum um 18.00 Uhr.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 text-left font-medium text-gray-800">
                WICHTIGER HINWEIS: Keine Aufkleber ("Sticker") im öffentlichen Raum!
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700 mb-4">
                  Wir bitten alle, keine Aufkleber ("Sticker") anzubringen. Es ist unser Ziel, Bitcoin auf seriöse Art und Weise zu kommunizieren. Eine wilde "Stickerei" gehört nicht zu unserer Strategie.
                </p>
                <p className="text-gray-700 font-medium">
                  Jede Art des Anbringens von Aufklebern wird ausnahmslos zur Anzeige gebracht.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 bg-pastel-blue/20 p-8 rounded-lg">
            <p className="font-medium mb-4">Sie haben weitere Fragen? Schreiben Sie uns an <a href="mailto:veranstaltung@vr-bayernmitte.de" className="text-bitcoin hover:underline">veranstaltung@vr-bayernmitte.de</a></p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#" 
                className="py-3 px-6 bg-white text-gray-800 rounded-full border border-gray-200 text-center hover:bg-gray-50 transition-colors"
              >
                Hier geht's zum Ticket-Überblick
              </a>
              <a 
                href="#" 
                className="py-3 px-6 bg-bitcoin text-white rounded-full text-center hover:bg-bitcoin-dark transition-colors shadow-lg shadow-bitcoin/20"
              >
                Jetzt Ticket ordern
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
