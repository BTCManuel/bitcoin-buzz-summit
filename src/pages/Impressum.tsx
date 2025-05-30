
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F2FCE2]/50 py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-[#FEF7CD] backdrop-blur-sm rounded-full border border-bitcoin/20">
              <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Impressum</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Impressum</h1>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Angaben gemäß § 5 TMG</h2>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-semibold text-lg">bitcoinforum.bayern</p>
                    <p>Nena Celeste UG (haftungsbeschränkt)</p>
                    <p>Josef-Kogler-Str. 8</p>
                    <p>82031 Grünwald</p>
                    <p>Deutschland</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Kontakt</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <span className="font-medium">Telefon:</span>{' '}
                      <a href="tel:+491705969275" className="text-bitcoin hover:underline">
                        +49 170 5969275
                      </a>
                    </p>
                    <p>
                      <span className="font-medium">E-Mail:</span>{' '}
                      <a href="mailto:info@nena-celeste.de" className="text-bitcoin hover:underline">
                        info@nena-celeste.de
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Vertreten durch</h3>
                  <p className="text-gray-700">Geschäftsführerin: Lucia H. Galindo</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Registereintrag</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Handelsregister: HRB München B 199391</p>
                    <p>Umsatzsteuer-ID: DE283221893</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">EU-Streitschlichtung</h3>
                  <p className="text-gray-700">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                    <a 
                      href="https://ec.europa.eu/consumers/odr/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-bitcoin hover:underline"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p className="text-gray-700 mt-2">
                    Unsere E-Mail-Adresse finden Sie oben im Impressum.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Verbraucherstreitbeilegung/Universalschlichtungsstelle
                  </h3>
                  <p className="text-gray-700">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Quelle: <a href="https://www.e-recht24.de" className="hover:underline">eRecht24</a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
