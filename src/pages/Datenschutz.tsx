
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F2FCE2]/50 py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-[#FEF7CD] backdrop-blur-sm rounded-full border border-bitcoin/20">
              <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Datenschutz</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Datenschutzerklärung</h1>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Verantwortlicher</h2>
                  <p className="text-gray-700 mb-2">Verantwortlich für die Datenverarbeitung auf dieser Website:</p>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-semibold text-lg">bitcoinforum.bayern</p>
                    <p>Nena Celeste UG (haftungsbeschränkt)</p>
                    <p>Josef-Kogler-Str. 8</p>
                    <p>82031 Grünwald</p>
                    <p>Deutschland</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h2>
                  <p className="text-gray-700 mb-4">
                    Beim Besuch dieser Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server der Website gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>IP-Adresse des anfragenden Rechners,</li>
                    <li>Datum und Uhrzeit des Zugriffs,</li>
                    <li>Name und URL der abgerufenen Datei,</li>
                    <li>Website, von der aus der Zugriff erfolgt (Referrer-URL),</li>
                    <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.</li>
                  </ul>
                  <p className="text-gray-700 mb-2">Die genannten Daten werden zu folgenden Zwecken verarbeitet:</p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,</li>
                    <li>Gewährleistung einer komfortablen Nutzung unserer Website,</li>
                    <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                    <li>zu weiteren administrativen Zwecken.</li>
                  </ul>
                  <p className="text-gray-700">Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Cookies</h2>
                  <p className="text-gray-700 mb-4">
                    Diese Website verwendet Cookies. Dabei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite besuchen. Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke zur Wahrung unserer berechtigten Interessen sowie der Dritter nach Art. 6 Abs. 1 S. 1 lit. f DSGVO erforderlich.
                  </p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Eingesetzte Cookies:</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">cookie-consent</p>
                    <ul className="text-gray-700 space-y-1 mt-2">
                      <li><strong>Typ:</strong> Funktional / Technisch notwendig</li>
                      <li><strong>Zweck:</strong> Speichert die Benutzerentscheidung zur Cookie-Zustimmung</li>
                      <li><strong>Werte:</strong> 'accepted' oder 'declined'</li>
                      <li><strong>Speicherdauer:</strong> Bis zur manuellen Löschung (persistent)</li>
                      <li><strong>Ort:</strong> CookieBanner.tsx</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Tracking-Technologien</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">GPTEngineer/Lovable Analytics</p>
                    <ul className="text-gray-700 space-y-1 mt-2">
                      <li><strong>Script:</strong> https://cdn.gpteng.co/gptengineer.js</li>
                      <li><strong>Typ:</strong> Development/Analytics</li>
                      <li><strong>Zweck:</strong> Lovable-Platform Analytics und Entwicklungstools</li>
                      <li><strong>Ort:</strong> index.html</li>
                      <li><strong>Hinweis:</strong> Dieses Script ist für die Lovable-Platform erforderlich</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Weitere Technologien</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">React Router</p>
                      <ul className="text-gray-700 space-y-1 mt-2">
                        <li><strong>Typ:</strong> Navigation/Session Management</li>
                        <li><strong>Zweck:</strong> Client-side Routing</li>
                        <li><strong>Hinweis:</strong> Keine persistenten Cookies</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Vite/React Development</p>
                      <ul className="text-gray-700 space-y-1 mt-2">
                        <li><strong>Typ:</strong> Development Tools</li>
                        <li><strong>Hinweis:</strong> Nur in Entwicklungsumgebung aktiv</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Betroffenenrechte</h2>
                  <p className="text-gray-700 mb-2">Sie haben das Recht:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.</li>
                    <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.</li>
                    <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.</li>
                    <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesebaren Format zu erhalten.</li>
                    <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen.</li>
                    <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Widerspruchsrecht</h2>
                  <p className="text-gray-700">
                    Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex space-x-6 text-sm text-gray-500">
                    <p>
                      <span className="font-medium">Kontakt:</span>{' '}
                      <a href="mailto:info@nena-celeste.de" className="text-bitcoin hover:underline">
                        info@nena-celeste.de
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
