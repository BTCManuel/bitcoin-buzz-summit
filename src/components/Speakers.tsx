
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { usePopup } from "@/pages/PopupContext";
import {Ticket } from 'lucide-react';


interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
  bio: React.ReactNode;
  bgColor: string;
  bgSolidColor: string;
}

const Speakers = () => {
  const { openPopup } = usePopup();
  const [selectedSpeaker, setSelectedSpeaker] = React.useState<Speaker | null>(null);

const speakersData = [
  {
    name: "Andreas Streb",
    role: "CEO",
    company: "VR Bayernmitte e.G.",
    image: "/images/speakers/Andreas_Streb.jpg",
    bio: (
      <>
        ist Vorstandsvorsitzender der Volksbank Raiffeisenbank Bayern Mitte eG und maßgeblich für das Angebot von Dienstleistungen in Zusammenhang mit Bitcoin und Bitcoin-Lösungen in der Bank verantwortlich. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#FEF7CD]/50",
    bgSolidColor: "bg-[#FEF7CD]"
  },
/*
  {
    name: "Marc Friedrich",
    role: "FOTO NEEDED",
    company: "FOTO NEEDED",
    image: "/images/speakers/Bitcoin_Block.png",
    bio: (
      <>
        begann seine Karriere als Materialwissenschaftler und Fertigungsberater in Deutschland und China, bevor er seine größte Leidenschaft entdeckte: Bitcoin. Als Mitgründer und Geschäftsführer von seedor.io, bitsurance.io und satskeeper.com ist er eine zentrale Figur in der deutschen Bitcoin-Szene, insbesondere in den Bereichen Verwahrung, Versicherung und Vererbung von Bitcoin. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
  {
    name: "Roman Reher",
    role: "FOTO NEEDED",
    company: "FOTO NEEDED",
    image: "/images/speakers/Bitcoin_Block.png",
    bio: (
      <>
        ist bekannt durch seine Infografiken und Erklärvideos, in denen er mit leicht verständlicher Sprache die Genialität von Bitcoin erklärt. Durch seine lockere Art und einfache Sprache gilt er für viele als erste Anlaufstelle, wenn es darum geht, einen Blick in den Bitcoin Kaninchenbau zu werfen. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#FDE1D3]/50",
    bgSolidColor: "bg-[#FDE1D3]"
  },
*/
  {
    name: "Joe Martin",
    role: "Co-Founder",
    company: "BitcoinForum",
    image: "/images/speakers/Joe_Martin.jpg",
    bio: (
      <>
        ist als Journalist, Keynote-Speaker und Buchautor mit über 30 Jahren Berufserfahrung in der Welt der Technologie einer der wichtigsten Bitcoin-Erklärer Deutschlands. Er hat auch die Volksbank Raiffeisenbank Bayern Mitte bei der Einführung des Angebots von Bitcoin und Bitcoin-Lösungen begleitet und unterstützt. Joe Martin ist Co-Founder und Hauptansprechpartner für alle Speaker beim 3. BitcoinForum.
        <br />
        <a
          href="https://linktr.ee/JoeMartinBTC"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://linktr.ee/JoeMartinBTC
        </a>
      </>
    ),
    bgColor: "bg-[#FEF7CD]/50",
    bgSolidColor: "bg-[#FEF7CD]"
  },
  {
  name: "Rachel Geyer",
  role: "",
  company: "terahash.energy GmbH",
  image: "/images/speakers/Rachel_Geyer.jpg",
  bio: (
    <>
      Sie ist Vizepräsidentin und Unternehmenssprecherin der terahash.energy GmbH und Vorstandsvorsitzende der European Bitcoin Energy Association. Sie ist Mitbegründerin von Les Femmes orange – Bitcoin-Bildung für und von Frauen. Rachel ist Mutter 4 Kindern – Ihr wichtigster Beitrag zur Gesellschaft. Weitere Informationen unter:
      <br />
      <a
        href="mailto:rachel@terahash.space"
        className="text-bitcoin underline"
      >
        rachel@terahash.space
      </a>
    </>
    ),
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
  {
    name: "Florian Bruce",
    role: "",
    company: "",
    image: "/images/speakers/Florian_Bruce.jpg",
    bio: (
      <>
        berät mit seinem Unternehmen Schwarzberg BSC GmbH Family Offices und HNWIs bei der sicheren Eigenverwahrung von Bitcoin. Als Unternehmer, Bestseller-Autor und Host des Podcasts „Der Bitcoin Podcast“ zählt er zu den gefragtesten Experten im Bereich Bitcoin. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#FEF7CD]/50",
    bgSolidColor: "bg-[#FEF7CD]"
  },
  {
    name: "Daniel Winklhammer",
    role: "",
    company: "",
    image: "/images/speakers/Daniel_Winklhammer.jpg",
    bio: (
      <>
        ist ein echter Bitcoin-Enthusiast, der bereits während seiner Schulzeit mit der Kryptowährung in Berührung kam. Als CEO von 21bitcoin bringt er seine visionäre Führungsstärke und seine langjährige Erfahrung in der Finanz- und IT-Beratung ein. Mit Leidenschaft und Expertise treibt er die Mission voran, Bitcoin einer breiteren Zielgruppe zugänglich zu machen. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
  {
    name: "Alex von Frankenberg",
    role: "CEO",
    company: "High-Tech Gründerfonds (HTGF)",
    image: "/images/speakers/frankenberg.jpg",
    bio: (
      <>
        leitete von 2005 bis 2025 den High-Tech Gründerfonds (HTGF), Europas aktivsten Frühphaseninvestor mit fast 800 Seed Investments und 2 Mrd. Euro in fünf Fonds. Zuvor war er u.a. bei Siemens, einem IT-Startup und in der Beratung tätig. Seit 2016 beschäftigt er sich intensiv mit Bitcoin als möglichem Wertspeicherstandard. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: "der Helper",
    role: "Content Creator",
    company: "",
    image: "/images/speakers/der_Helper.jpg",
    bio: (
      <>
        ist bekannt durch seine Infografiken und Erklärvideos, in denen er mit leicht verständlicher Sprache die Genialität von Bitcoin erklärt. Durch seine lockere Art und einfache Sprache gilt er für viele als erste Anlaufstelle, wenn es darum geht, einen Blick in den Bitcoin Kaninchenbau zu werfen. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#FDE1D3]/50",
    bgSolidColor: "bg-[#FDE1D3]"
  },
  {
    name: "Chris Seedor",
    role: "Gründer & Entwickler",
    company: "SEEDOR",
    image: "/images/speakers/Chris_Seedor.jpg",
    bio: (
      <>
        begann seine Karriere als Materialwissenschaftler und Fertigungsberater in Deutschland und China, bevor er seine größte Leidenschaft entdeckte: Bitcoin. Als Mitgründer und Geschäftsführer von seedor.io, bitsurance.io und satskeeper.com ist er eine zentrale Figur in der deutschen Bitcoin-Szene, insbesondere in den Bereichen Verwahrung, Versicherung und Vererbung von Bitcoin. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
  {
    name: "Daniel 'Loddi' Tröster",
    role: "",
    company: "",
    image: "/images/speakers/Daniel.jpg",
    bio: (
      <>
        wurde nach 10-jähriger Tätigkeit im Bankwesen vom Bitcoin-Fieber infiziert. Heute treibt er die Bitcoin-Adaption in der Banken- und Finanzwelt voran und erklärt in seinem Sound Money Bitcoin Podcast der Bitcoin-Community das Geld- und Finanzsystem bzw. schubst Banker ins Bitcoin Rabitthole. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
  {
    name: "Rahim Taghizadegan",
    role: "",
    company: "",
    image: "/images/speakers/Rahim_Taghizadegan.jpg",
    bio: (
      <>
        ist der letzte österreichische Vertreter der Österreichischen Schule in direkter Tradition und leitet von Zug aus die internationale Hochschule scholarium, wo diese Tradition in ihrer ursprünglichen Form weiterlebt. Er hat mehr als ein Dutzend Bücher geschrieben, darunter einige Bestseller, und war der erste Ökonom, der Bitcoin als monetäres Phänomen verstand und dazu an Universitäten lehrte. Heute baut er unter anderem Bitcoin-Zitadellen und ist Gründer von deedsats.com. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#FDE1D3]/50",
    bgSolidColor: "bg-[#FDE1D3]"
  },
  {
    name: "Kris Kläger",
    role: "",
    company: "",
    image: "/images/speakers/Kris_Klaeger.jpg",
    bio: (
      <>
        Als Familienunternehmer, der die vor über 70 Jahren gegründete Firmengruppe Kläger in der dritten Generation leiten darf, sieht er es als seine Hauptaufgabe an, Tradition sowie aufgebaute Werte kontinuierlich mit neuen innovativen Themen und Megatrends, wie der Bitcoin-Technologie, in Einklang zu bringen. Als Gründer und Initiator der terahash.energy GmbH geht für ihn ein großer Traum in Erfüllung. Seine tiefe Überzeugung ist es, mit diesem Unterfangen vielen Menschen in Deutschland und Europa Bitcoin näherzubringen. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#FEF7CD]/50",
    bgSolidColor: "bg-[#FEF7CD]"
  },
  {
    name: "Leon Wankum",
    role: "",
    company: "",
    image: "/images/speakers/Leon_Wankum.jpg",
    bio: (
      <>
        war einer der ersten VWL-Studenten (M.Sc.), der 2015 eine Abschlussarbeit über Bitcoin verfasst hat. Heute ist er im Bereich Immobilien und Venture Capital tätig. Er ist auf die Entwicklung von Bitcoin-Strategien für Immobilienentwickler spezialisiert. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
     bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
      {
    name: "Korina Karl",
    role: "Wirtschaftsingenieurin",
    company: "",
    image: "/images/speakers/Korina_Karl.png",
    bio: (
      <>
        setzt ihre Technologieoffenheit und Kreativität für die Bitcoin-Bildung von Frauen ein. 2025 initiierte sie die YouTube-Formate LFO live „Story Time“ und „How to Bitcoin“ in denen Frauen ihren persönlichen Weg in die Bitcoin-Welt teilen. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
  {
    name: "Dr. Olaf Wagner (Weezel)",
    role: "",
    company: "",
    image: "/images/speakers/Olaf_Wagner.jpg",
    bio: (
      <>
        ist Naturwissenschaftler und leitet Forschungs- und Entwicklungsarbeiten an der FU Berlin. Bereits seit der Studienzeit engagiert er sich zudem in der Entwicklungszusammenarbeit. Unter dem Synonym Weezel verfasst er Beiträge zu den ökologischen & sozialen Aspekten von Bitcoin. Seine interdisziplinäre Expertise macht ihn zu einer gefragten Stimme in der Debatte um technologische Innovationen und ökologische Verantwortung. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#FDE1D3]/50",
    bgSolidColor: "bg-[#FDE1D3]"
  },
  {
    name: "Niko Jilch",
    role: "",
    company: "",
    image: "/images/speakers/Niko_Jilch.jpg",
    bio: (
      <>
        ist Finanzjournalist mit Fokus auf die Digitalisierung von Geld und Wirtschaft. Mit "Was Bitcoin bringt" betreibt er einen der populärsten Podcasts und YouTube-Kanäle zum Thema Bitcoin und Finanzwelt. Niko ist ein gefragter Speaker und Berater rund und ums Thema Bitcoin, Geldpolitik und Geldgeschichte. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: "Tanja Bächle",
    role: "",
    company: "",
    image: "/images/speakers/Tanja_Baechle.png",
    bio: (
      <>
        Author & Writer ✍️ Event Manager 🏃‍♀️ Runner 𝐁𝐞𝐫𝐥𝐢𝐧𝐞𝐫 𝐌𝐚̈𝐝𝐜𝐡𝐞𝐧 Now on Nostr. Weitere Informationen unter:
        <br />
        <a
          href="https://linktr.ee/tanjabaechle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: "Dr. Peter Schmidt",
    role: "",
    company: "",
    image: "/images/speakers/Peter_Schmidt.jpg",
    bio: (
      <>
        studierte BWL in Tübingen, promovierte im Rechnungswesen und erwarb 2001 in den USA einen Master of Music als Opernsänger. Seit 2011 lehrt er an der RIT Croatia in Zagreb. 2022 gründete er das einzigartige Seminar „Bitcoin and Money“, das inzwischen sechsmal mit wachsendem Interesse angeboten wurde. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: "Nadine Wermke",
    role: "",
    company: "",
    image: "/images/speakers/Nadine_Wermke.jpg",
    bio: (
      <>
        ist diplomierte Wirtschaftsmathematikerin und Aktuarin mit langjähriger Erfahrung in der Versicherungsbranche. Sie beschäftigte sich beruflich intensiv mit dem Thema Altersversorgung. Seit 2012 ist sie Mitglied der Deutschen Aktuarvereinigung sowie der Deutschen Gesellschaft für Versicherungs- und Finanzmathematik. 2019 entdeckte sie durch eigene Investitionen Bitcoin und erkannte schnell dessen Potenzial. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
  {
    name: "Jan Wanderlust",
    role: "",
    company: "",
    image: "/images/speakers/Jan_Wanderlust.jpg",
    bio: (
      <>
        ist Diplom-Ingenieur der Physikalischen Technik und junger Familienvater. 2021 entdeckte er Bitcoin – ausgelöst durch seinen Nestbautrieb. Früher engagierte er sich bei Engineers Without Borders Karlsruhe e.V.; heute setzt er sich als Aktivist bei Bitcoiners for Future insbesondere für Aufklärung von Klimaschutz und Menschenrechten durch Bitcoin ein. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#FDE1D3]/50",
    bgSolidColor: "bg-[#FDE1D3]"
  },
  {
    name: "Felix Käser",
    role: "",
    company: "",
    image: "/images/speakers/Felix_Kaeser.jpg",
    bio: (
      <>
        aus München studiert Lehramt Gymnasium (Sport/Latein). In seiner Freizeit beschäftigt er sich mit Bitcoin/Österreichische Schule der Nationalökonomie/Libertarismus. 2024 erhielt er die Julius-Faucher-Medaille im libertären Jungautorenwettbewerb. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#FEF7CD]/50",
    bgSolidColor: "bg-[#FEF7CD]"
  },
  {
    name: "Tobias Grünenfelder",
    role: "",
    company: "",
    image: "/images/speakers/Tobias_Guenenfelder.jpg",
    bio: (
      <>
        ist Kunststofftechnologe und Techniker HF Maschinenbau mit Interesse für neue Technologien und einem Wunsch, sein Vermögen langfristig zu schützen. Er ist Certified Bitcoin Professional und Präsident des Vereins Bitcoin Block. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: "Maximilian Obwexer",
    role: "",
    company: "",
    image: "/images/speakers/Maximilian_Obwexer.jpg",
    bio: (
      <>
        ist Mitgründer und CEO von 21energy, dem Weltmarktführer für Bitcoin-Heizungen. Mit seinem Konzept der Heiztechnologie via Mining ist er medial stark präsent. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: "Nicole Nowak",
    role: "",
    company: "",
    image: "/images/speakers/Nicole_Nowak.jpg",
    bio: (
      <>
        ist Wirtschaftsmathematikerin (M.Sc.) und arbeitete fast zehn Jahre lang als Data Analystin und Trainerin. Heute macht sie Bitcoin-Bildung zum Fokus ihrer Tätigkeit. In ihrem Podcast „Bitcoin kurz erklärt“ vermittelt sie neue Perspektiven auf Bitcoin. Weitere Informationen unter:
        <br />
        <a
          href="https://bitcoinforum.bayern"
          target="_blank"
          rel="noopener noreferrer"
          className="text-bitcoin underline"
        >
          https://bitcoinforum.bayern
        </a>
      </>
    ),
    bgColor: "bg-[#FDE1D3]/50",
    bgSolidColor: "bg-[#FDE1D3]"
  },
  {
    name: "Lea Kelwin",
    role: "Content Creatorin",
    company: "",
    image: "/images/speakers/Lea_Kelwin.jpg",
    bio: (
      <>
        arbeitet als Hebamme und engagiert sich leidenschaftlich für Frauengesundheit, Selbstbestimmung und soziale Gerechtigkeit. Energie ist dabei der Grundbaustein – ohne sie gibt es weder Neuanfänge noch körperliche oder geistige Fruchtbarkeit. Bitcoin wird durch Energie gestützt und kann als Werkzeug genutzt werden, um den Weg zu mehr Selbstbestimmung und nachhaltiger Gesundheit zu begleiten. Lea ist Mitgründerin der Non-Profit-Initiative Bitcoin Block. Weitere Informationen unter:
        <br />
        <a href="https://bitcoinforum.bayern" target="_blank" rel="noopener noreferrer" className="text-bitcoin underline">https://bitcoinforum.bayern</a>
      </>
    ),
    bgColor: "bg-[#FEF7CD]/50",
    bgSolidColor: "bg-[#FEF7CD]"
  },
  {
    name: "Lars Eichhorst",
    role: "",
    company: "",
    image: "/images/speakers/Lars_Eichhorst.jpg",
    bio: (
      <>
        ist Energie-Effizienz-Experte, Elektrotechnikmeister und Gründer von LESolution – dem ersten eingetragenen Handwerksunternehmen für die Fachplanung und Umsetzung von Bitcoin-Mininganlagen in Deutschland. Mit seiner langjährigen Erfahrung in der Energieberatung unterstützt er Privatpersonen und Unternehmen bei der energieeffizienten Integration von Bitcoin-Mining-Technologien. Weitere Informationen unter:
        <br />
        <a href="https://bitcoinforum.bayern" target="_blank" rel="noopener noreferrer" className="text-bitcoin underline">https://bitcoinforum.bayern</a>
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: "Jannis Langer",
    role: "",
    company: "",
    image: "/images/speakers/Jannis_Langer.jpg",
    bio: (
      <>
        ist Unternehmer aus Karlsruhe und Gründer von solomining.de, wo er Bitaxe Home- und Solominer in Deutschland produziert und vertreibt. Als Teil der Bitcoin-Open-Source-Community überführt er die Open-Source-Entwicklungen in eine hochqualitative Serienfertigung „Made in Germany“, um so die Dezentralisierung der Mining-Infrastruktur voranzutreiben. Weitere Informationen unter:
        <br />
        <a href="https://bitcoinforum.bayern" target="_blank" rel="noopener noreferrer" className="text-bitcoin underline">https://bitcoinforum.bayern</a>
      </>
    ),
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
  {
    name: "Matthias Fendt",
    role: "",
    company: "",
    image: "/images/speakers/Matthias_Fendt.jpg",
    bio: (
      <>
        ist Head of Operations bei der terahash.energy GmbH. In dieser Rolle verantwortet er die Entwicklung und Umsetzung technischer Konzepte rund um effizientes Bitcoin-Mining. Ein besonderer Schwerpunkt liegt auf der Nutzung von Rechenzentrumsabwärme für industrielle Prozesse oder kommunale Wärmeplanung. Weitere Informationen unter:
        <br />
        <a href="https://bitcoinforum.bayern" target="_blank" rel="noopener noreferrer" className="text-bitcoin underline">https://bitcoinforum.bayern</a>
      </>
    ),
    bgColor: "bg-[#FDE1D3]/50",
    bgSolidColor: "bg-[#FDE1D3]"
  },
  {
    name: "Yvonne Strathmann",
    role: "Diplom-Sozialpädagogin",
    company: "",
    image: "/images/speakers/Yvonne_Strathmann.png",
    bio: (
      <>
        leitet Trainings sowie Seminare in Gewaltfreier Kommunikation für Führungskräfte. Ihr zentrales Anliegen ist es, Menschen zur Freiheit im Denken und Handeln zu befähigen und ihnen neue Perspektiven für ihre persönliche und berufliche Entwicklung zu eröffnen. Weitere Informationen unter:
        <br />
        <a href="https://bitcoinforum.bayern" target="_blank" rel="noopener noreferrer" className="text-bitcoin underline">https://bitcoinforum.bayern</a>
      </>
    ),
    bgColor: "bg-[#FDE1D3]/50",
    bgSolidColor: "bg-[#FDE1D3]"
  },
  {
    name: "Fabian Weber",
    role: "",
    company: "",
    image: "/images/speakers/Fabian_Weber.jpg",
    bio: (
      <>
        trägt als Head of Hashrate bei der terahash.energy GmbH die Verantwortung für das internationale Geschäft im Bereich Bitcoin Mining. Sein Fokus liegt auf dem Management und der Weiterentwicklung der globalen Mining-Operations, der Betreuung von Investoren sowie der engen Zusammenarbeit mit den Herstellern der Mining-Hardware. Weitere Informationen unter:
        <br />
        <a href="https://bitcoinforum.bayern" target="_blank" rel="noopener noreferrer" className="text-bitcoin underline">https://bitcoinforum.bayern</a>
      </>
    ),
    bgColor: "bg-[#FEF7CD]/50",
    bgSolidColor: "bg-[#FEF7CD]"
  },
  {
    name: "Ronny Mütschele",
    role: "",
    company: "",
    image: "/images/speakers/Ronny_Muetschele.jpg",
    bio: (
      <>
        ist seit 2013 im Bitcoin-Bereich aktiv. Nach ersten Erfahrungen im Bitcoin Home Mining war er Mitgründer der HODLMAYR GmbH im Jahr 2019, die heute unter der Marke Copiaro u.a. einen Online-Fachhandel für Bitcoin-Produkte betreibt. Weitere Informationen unter:
        <br />
        <a href="https://bitcoinforum.bayern" target="_blank" rel="noopener noreferrer" className="text-bitcoin underline">https://bitcoinforum.bayern</a>
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: "Max Possegger",
    role: "",
    company: "",
    image: "/images/speakers/Max_Possegger.jpg",
    bio: (
      <>
        automatisiert bei HASHLYNK Mining-Prozesse und bringt Effizienz auf ein neues Level. Weitere Informationen unter:
        <br />
        <a href="https://bitcoinforum.bayern" target="_blank" rel="noopener noreferrer" className="text-bitcoin underline">https://bitcoinforum.bayern</a>
      </>
    ),
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
   {
    name: "Sibylle Eberle",
    role: "",
    company: "",
    image: "/images/speakers/Sibylle_Eberle.png",
    bio: (
      <>
        geboren 1984, ist Journalistin und TV-Moderatorin bei SRF Sport. Seit 2018 steht sie für SRF vor der Kamera. Neben ihrer Tätigkeit beim Fernsehen arbeitet sie freiberuflich als Eventmoderatorin und DJ – zuletzt unter anderem an der Swiss Bitcoin Conference 2025 in Kreuzlingen. Weitere Informationen unter:
        <br />
        <a href="https://bitcoinforum.bayern" target="_blank" rel="noopener noreferrer" className="text-bitcoin underline">https://bitcoinforum.bayern</a>
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: "Thomas Ebner",
    role: "",
    company: "",
    image: "/images/speakers/Thomas_Ebner.jpg",
    bio: (
      <>
        ist Mitgründer von HASHLYNK und Home Miner. Seit Jahren beschäftigt er sich mit den Themen Mining, Wärmerückgewinnung und Erneuerbare Energien – und genau diese Erfahrungen fließen heute in seine Arbeit bei HASHLYNK ein. Weitere Informationen unter:
        <br />
        <a href="https://bitcoinforum.bayern" target="_blank" rel="noopener noreferrer" className="text-bitcoin underline">https://bitcoinforum.bayern</a>
      </>
    ),
    bgColor: "bg-[#FDE1D3]/50",
    bgSolidColor: "bg-[#FDE1D3]"
  },
  {
    name: "Evelyn Brock ('Madame Bitcoin')",
    role: "",
    company: "21bitcoin (1112)",
    image: "/images/speakers/Evelyn_Brock.jpg",
    bio: (
      <>
        ist mit ihrer fast 30-jährigen Erfahrung als Startup Coach und Dozentin in der Lage, komplizierte Zusammenhänge einfach zu erklären. Sie hat 2019 begonnen, sich tiefer mit Bitcoin zu beschäftigen. Es ist ihr ein Anliegen, Frauen beim Einstieg in dieses komplexe Thema zu unterstützen. Daher gründete sie 2024 die Weiterbildungsplattform www.madame-bitcoin.de. Weitere Informationen unter:
        <br />
        <a href="https://bitcoinforum.bayern" target="_blank" rel="noopener noreferrer" className="text-bitcoin underline">https://bitcoinforum.bayern</a>
      </>
    ),
    bgColor: "bg-[#FEF7CD]/50",
    bgSolidColor: "bg-[#FEF7CD]"
  },
  {
    name: "Nathaly Lenz",
    role: "",
    company: "",
    image: "/images/speakers/Nathaly_Lenz.png",
    bio: (
      <>
        Nathaly ist eine leidenschaftliche Unternehmerin, Vollblut-Bitcoinerin, und ehemalige Bänkerin. Als Gründerin der FinanceRevolution und Co-Moderatorin des NoMad Podcasts inspiriert sie Menschen weltweit. Weitere Informationen unter:
        <br />
        <a href="https://bitcoinforum.bayern" target="_blank" rel="noopener noreferrer" className="text-bitcoin underline">https://bitcoinforum.bayern</a>
      </>
    ),
    bgColor: "bg-[#D3E4FD]/50",
    bgSolidColor: "bg-[#D3E4FD]"
  },
  {
    name: "Patrick Linus",
    role: "Lehrer",
    company: "The Progressive Bitcoiner Podcast",
    image: "/images/speakers/Patrick_Linus.jpg",
    bio: (
      <>
        ist Lehrer, Lehrplanautor und Berater im Bildungsbereich, Podcaster und Familienvater. Seit 2017 setzt er sich leidenschaftlich dafür ein, die Souveränität der kommenden Generation im digitalen Zeitalter zu stärken. Weitere Informationen unter:
        <br />
        <a href="https://bitcoinforum.bayern" target="_blank" rel="noopener noreferrer" className="text-bitcoin underline">https://bitcoinforum.bayern</a>
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
   {
    name: "Katharina Jantzen",
    role: "Geschäftsführerin",
    company: "continua GmbH",
    image: "/images/speakers/Katharina_Jantzen.png",
    bio: (
      <>
        ist eine engagierte Mentorin und überzeugte Bitcoinerin. Ihre Leidenschaft gilt der Zukunftsfähigkeit von Unternehmen sowie einem robusten Geldsystem für die nächste Generation. Weitere Informationen unter:
        <br />
        <a href="https://bitcoinforum.bayern" target="_blank" rel="noopener noreferrer" className="text-bitcoin underline">https://bitcoinforum.bayern</a>
      </>
    ),
    bgColor: "bg-[#F2FCE2]/50",
    bgSolidColor: "bg-[#F2FCE2]"
  },
  {
    name: "Harald Rauter",
    role: "",
    company: "",
    image: "/images/speakers/Harald_Rauter.jpg",
    bio: (
      <>
        ist ein anerkannter Vordenker an der Schnittstelle von Bitcoin und Energiesystemen. Als Chief Growth Officer der 21energy GmbH und Vorstandsmitglied der European Bitcoin Energy Association (EBEA) gestaltet er aktiv die Diskussion über Bitcoin-Mining und Energiemärkte. Weitere Informationen unter:
        <br />
        <a href="https://bitcoinforum.bayern" target="_blank" rel="noopener noreferrer" className="text-bitcoin underline">https://bitcoinforum.bayern</a>
      </>
    ),
    bgColor: "bg-[#FEF7CD]/50",
    bgSolidColor: "bg-[#FEF7CD]"
  }
];
/*
  // Generate placeholder speakers to reach a total of 35
  const placeholderBackgrounds = [
    "bg-[#F2FCE2]/50",
    "bg-[#D3E4FD]/50", 
    "bg-[#FDE1D3]/50", 
    "bg-[#FEF7CD]/50"
  ];
    const placeholderBackgroundsSolid = [
    "bg-[#F2FCE2]",
    "bg-[#D3E4FD]", 
    "bg-[#FDE1D3]", 
    "bg-[#FEF7CD]"
  ];
  
*/

  return (
    
    <section id="speakers" className="py-4 bg-gradient-to-b from-[#F2FCE2]/50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block mb-3 px-4 py-1 bg-[#D3E4FD] backdrop-blur-sm rounded-full border border-bitcoin/20">
            <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Referenten</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">Unsere Experten</h2>
          <p className="text-lg text-gray-600">
            Lernen Sie von führenden Experten im Bereich Bitcoin und der Finanzwelt
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
          {speakersData.map((speaker, index) => (
            <Card
              key={index}
              onClick={() => setSelectedSpeaker(speaker)}
              className={`relative cursor-pointer transition-all duration-300 overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-md ${speaker.bgColor} p-2 hover:scale-105`}
            >
              <CardContent className="flex flex-col items-center p-1">
                <div className="w-full aspect-square mb-2 relative">
                  <Avatar className="h-full w-full rounded-lg overflow-hidden">
                    {speaker.image ? (
                      <AvatarImage
                        src={speaker.image}
                        alt={speaker.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <AvatarFallback className="h-full w-full text-lg bg-gradient-to-br from-white to-gray-100 text-bitcoin border-2 border-white">
                        {speaker.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </div>

                <h3 className="text-gray-800 font-semibold text-sm truncate w-full text-center">
                  {speaker.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Speaker Details Dialog */}
      <Dialog open={!!selectedSpeaker} onOpenChange={(open) => !open && setSelectedSpeaker(null)}>
        <DialogContent 
          className={`max-w-2xl max-h-[80vh] overflow-y-auto ${selectedSpeaker?.bgSolidColor} border-none shadow-xl rounded-xl`}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">{selectedSpeaker?.name}</DialogTitle>
          </DialogHeader>
          
          <div className="flex flex-col md:flex-row gap-6 p-2 items-center">
            <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48">
              <Avatar className="h-full w-full rounded-xl overflow-hidden shadow-md border-2 border-white">
                {selectedSpeaker?.image ? (
                  <AvatarImage
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <AvatarFallback className="h-full w-full text-3xl bg-gradient-to-br from-white to-gray-100 text-bitcoin border-2 border-white">
                    {selectedSpeaker?.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                )}
              </Avatar>
            </div>
            
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap gap-2 items-center">
                {selectedSpeaker?.role && (
                  <span className="bg-white/70 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {selectedSpeaker.role}
                  </span>
                )}
                {selectedSpeaker?.company && (
                  <span className="bg-white/70 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {selectedSpeaker.company}
                  </span>
                )}
              </div>
              
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                {selectedSpeaker?.bio}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
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
    </section>
  );
};

export default Speakers;
