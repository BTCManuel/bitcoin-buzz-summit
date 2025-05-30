
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePopup } from "@/pages/PopupContext";
import { ArrowRight, Calendar, Clock, MapPin, Users, Star, Sparkles } from "lucide-react";

const GlobalPopup = () => {
  const { open, data, closePopup } = usePopup();

  const defaultTitle = <strong>Zuerst ein Ticket, dann die volle Auswahl</strong>;
  const defaultMessage = (
    <>
      <p>
       Für den Eintritt zur Saturnarena ist stets ein Ticket erforderlich – auch bei kostenlosen Messetickets. Anschließend können Sie Ihre Wunsch-Workshops buchen, sobald diese verfügbar sind. 
       Beim Ticketkauf lässt sich dafür bequem ein Alarm aktivieren.
      </p>
      <p><br></br>
        Der Ticketkauf erfolgt über die <strong>Volksbank Raiffeisenbank Bayern Mitte eG</strong>, die zugleich Veranstalter des <strong>3. BitcoinForums</strong> ist – 100 % DSGVO-konform und in wenigen Schritten erledigt.
      </p>
      <p> <br></br>
        Je nach Ticketkategorie genießen Sie Zugang zur Ausstellung, spannenden Vorträgen oder exklusiv zum VIP-Bereich
        mit zusätzlichen Vorträgen, Kamingesprächen, voller Verpflegung und weiteren Extras.
      </p>
      <p><br></br>
        <strong>Und das Beste:</strong> Nach dem Ticketkauf können Sie Ihr Erlebnis mit Workshops erweitern Nach dem Ticketkauf können Sie Ihr Erlebnis individuell erweitern - von Einsteiger-Sessions bis hin zu technischen Masterclasses.
      </p>
      <p><br></br>
        <strong>Sichern Sie sich jetzt Ihr Ticket</strong> und gestalten Sie Ihr ganz persönliches Programm!
      </p>
    </>
  );
  
  if (!open || !data) return null;

  // Function to determine if an agenda item is the evening event (last item)
  const isEveningEvent = (item: any, index: number, array: any[]) => {
    return index === array.length - 1 && 
           (item.topic.includes("Anekdoten") || 
            item.timeSlot?.includes("20:00") || 
            parseInt(item.timeSlot?.split(':')[0]) >= 19);
  };

  return (
    <Dialog open={open} onOpenChange={closePopup}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        {/* Background Header with Image */}
        {data.imageUrl && (
          <div className="relative h-48 md:h-64 overflow-hidden">
            <img 
              src={data.imageUrl} 
              alt={data.title || "Workshop"} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end">
              <div className="p-6 text-white">
                <h2 className="text-2xl md:text-3xl font-bold">{data.title || defaultTitle}</h2>
                {data.subtitle && <p className="text-white/90 text-lg">{data.subtitle}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className={`${!data.imageUrl ? 'pt-6' : ''} px-6 pb-6`}>
          {!data.imageUrl && (
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl">{data.title || defaultTitle}</DialogTitle>
              {data.subtitle && <p className="text-gray-600 text-sm mt-1">{data.subtitle}</p>}
            </DialogHeader>
          )}

          <DialogDescription className="py-4">
            {data.message || defaultMessage}
          </DialogDescription>

          {/* Workshop Details Section */}
          {data.agenda && data.agenda.length > 0 && (
            <div className="mt-6 space-y-4">
              <h3 className="font-semibold text-lg border-b pb-2">Workshop Agenda</h3>
              <div className="space-y-3">
                {data.agenda.map((item, index) => (
                  <div key={index} className={`p-3 rounded-lg ${index % 2 === 0 ? 'bg-gray-50' : 'bg-[#FEF7CD]/30'} ${
                    isEveningEvent(item, index, data.agenda) ? 'border-l-4 border-bitcoin' : ''
                  }`}>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-bitcoin shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{item.timeSlot}</span>
                    </div>
                    <div className="mt-1">
                      <div className="font-medium text-gray-800">
                        {isEveningEvent(item, index, data.agenda) && (
                          <div className="flex items-center gap-2 mb-1 text-bitcoin">
                            <Sparkles className="h-4 w-4" />
                            <span className="font-semibold">Besonderes Highlight - Abendveranstaltung</span>
                          </div>
                        )}
                        {item.topic}
                      </div>
                      {item.speaker && <div className="text-sm text-bitcoin mt-0.5">{item.speaker}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Speakers Section */}
          {data.instructors && data.instructors.length > 0 && (
            <div className="mt-8">
              <h3 className="font-semibold text-lg border-b pb-2 mb-4">
                {data.instructors.length > 1 ? 'Workshop Referenten' : 'Workshop Referent'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.instructors.map((instructor, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="h-12 w-12 rounded-full bg-bitcoin/10 flex items-center justify-center text-bitcoin shrink-0">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{typeof instructor === 'string' ? instructor : instructor.name}</div>
                      {typeof instructor !== 'string' && instructor.title && (
                        <div className="text-sm text-gray-600 mt-0.5">{instructor.title}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Workshop Info Section */}
          {(data.date || data.time || data.location || data.difficulty || data.seats) && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.date && (
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex items-center gap-3 shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-bitcoin/10 flex items-center justify-center text-bitcoin">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">Datum</p>
                    <p className="font-medium text-gray-800">{data.date}</p>
                  </div>
                </div>
              )}
              {data.time && (
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex items-center gap-3 shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-bitcoin/10 flex items-center justify-center text-bitcoin">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">Zeit</p>
                    <p className="font-medium text-gray-800">{data.time}</p>
                  </div>
                </div>
              )}
              {data.location && (
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex items-center gap-3 shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-bitcoin/10 flex items-center justify-center text-bitcoin">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">Ort</p>
                    <p className="font-medium text-gray-800">{data.location}</p>
                  </div>
                </div>
              )}
              {data.seats && (
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex items-center gap-3 shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-bitcoin/10 flex items-center justify-center text-bitcoin">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">Verfügbare Plätze</p>
                    <p className="font-medium text-gray-800">{data.seats}</p>
                  </div>
                </div>
              )}
              {data.difficulty && (
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg flex items-center gap-3 shadow-sm">
                  <div className="h-10 w-10 rounded-full bg-bitcoin/10 flex items-center justify-center text-bitcoin">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">Schwierigkeit</p>
                    <p className="font-medium text-gray-800">{data.difficulty}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <DialogFooter className="p-6 border-t bg-gray-50">
          <Button
            className="w-full md:w-auto bg-bitcoin hover:bg-bitcoin/90 flex items-center gap-2 text-white"
            onClick={() => {
              closePopup();
              if (data.redirectUrl) {
                window.open(data.redirectUrl, "_blank");
              }
            }}
          >
            {data.buttonText || "Ich will dabei sein!"} <ArrowRight className="h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GlobalPopup;
