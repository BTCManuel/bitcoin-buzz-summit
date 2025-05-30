
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CookieRichtlinie = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F2FCE2]/50 py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1 bg-[#FEF7CD] backdrop-blur-sm rounded-full border border-bitcoin/20">
              <span className="text-sm uppercase tracking-wider font-medium text-bitcoin">Cookie-Richtlinie</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Cookie-Richtlinie</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diese Cookie-Richtlinie erklärt, was Cookies sind und wie wir sie verwenden. Sie sollten diese Richtlinie lesen, um zu verstehen, welche Arten von Cookies wir verwenden, welche Informationen wir mithilfe von Cookies sammeln und wie diese Informationen verwendet werden.
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Was sind Cookies?</h2>
                  <p className="text-gray-700">
                    Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie helfen dabei, die Benutzererfahrung effizienter zu gestalten.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Wie verwenden wir Cookies?</h2>
                  <p className="text-gray-700 mb-4">Wir verwenden Cookies, um:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Ihre Präferenzen zu speichern,</li>
                    <li>die Funktionalität der Website zu gewährleisten,</li>
                    <li>die Benutzererfahrung zu verbessern.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Welche Arten von Cookies verwenden wir?</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Notwendige Cookies</h3>
                      <p className="text-gray-700">
                        Diese Cookies sind für das Funktionieren der Website erforderlich und können in unseren Systemen nicht deaktiviert werden.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Ihre Wahlmöglichkeiten bezüglich Cookies</h2>
                  <p className="text-gray-700">
                    Sie können Ihren Browser so einstellen, dass er Cookies blockiert oder Sie über Cookies benachrichtigt. Bitte beachten Sie, dass einige Teile der Website möglicherweise nicht richtig funktionieren, wenn Sie Cookies deaktivieren.
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

export default CookieRichtlinie;
