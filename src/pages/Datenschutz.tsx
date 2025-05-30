
import React from 'react';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Datenschutz = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-12 min-h-screen">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zur Startseite
          </Button>
        </Link>
        
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <div className="prose max-w-none">
          <p>
            Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten 
            im Rahmen der Nutzung der 3.BitcoinForum Website auf.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">Verantwortlicher</h2>
          <p>
            Nena Celeste UG (haftungsbeschränkt)<br />
            E-Mail: website_anfrage@nena-celeste.de
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">Arten der verarbeiteten Daten</h2>
          <p>
            Diese Website verwendet nur technisch notwendige Cookies, die für den Betrieb der Website unerlässlich sind.
            Es werden keine personenbezogenen Daten gespeichert oder verarbeitet.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">Zweck der Verarbeitung</h2>
          <p>
            Die verwendeten Cookies dienen ausschließlich dazu, die Funktionalität der Website sicherzustellen.
            Diese Cookies speichern keine personenbezogenen Daten.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">Speicherdauer</h2>
          <p>
            Die Cookies werden nur für die Dauer Ihres Besuchs auf unserer Website gespeichert und anschließend gelöscht.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">Ihre Rechte</h2>
          <p>
            Da wir keine personenbezogenen Daten sammeln oder speichern, sind keine besonderen Maßnahmen erforderlich, 
            um Ihre Datenschutzrechte zu gewährleisten. Sie haben dennoch das Recht, jederzeit die Verwendung von Cookies 
            zu akzeptieren oder abzulehnen.
          </p>

          <h2 className="text-xl font-bold mt-6 mb-4">Kontakt</h2>
          <p>
            Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, 
            Berichtigung, Einschränkung oder Löschung von Daten wenden Sie sich bitte an:<br />
            E-Mail: <a href="mailto:website_anfrage@nena-celeste.de" className="text-bitcoin hover:underline">website_anfrage@nena-celeste.de</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Datenschutz;
