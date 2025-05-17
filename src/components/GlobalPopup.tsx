
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePopup } from "@/pages/PopupContext";
import { ArrowRight } from "lucide-react";

const GlobalPopup = () => {
  const { open, data, closePopup } = usePopup();

  const defaultTitle = <strong>Zuerst ein Ticket, dann die volle Auswahl</strong>;
 const defaultMessage = (
  <>
    <p>
      Für den Eintritt zur Saturnarena ist immer ein Ticket erforderlich – auch bei kostenlosen Messetickets.
      Danach können Sie sich Ihre Wunsch-Workshops sichern, sobald diese verfügbar sind. Beim Ticketkauf können Sie dafür bequem einen Alarm setzen.
    </p>
    <p><br></br>
      Der Ticketkauf erfolgt über die <strong>Volksbank Raiffeisenbank Bayern Mitte eG</strong>, die zugleich Veranstalter des <strong>3. Bitcoin Forums</strong> ist – 100 % DSGVO-konform und in wenigen Schritten erledigt.
    </p>
    <p> <br></br>
      Je nach Ticketkategorie genießen Sie Zugang zur Ausstellung, spannenden Vorträgen oder exklusiv zum VIP-Bereich
      mit zusätzlichen Vorträgen, Kamingesprächen, voller Verpflegung und weiteren Extras.
    </p>
    <p><br></br>
      <strong>Und das Beste:</strong> Nach dem Ticketkauf können Sie Ihr Erlebnis mit Workshops erweitern – von Einsteiger-Sessions bis hin zu technischen Masterclasses.
    </p>
    <p><br></br>
      <strong>Sichern Sie sich jetzt Ihr Ticket</strong> und gestalten Sie Ihr ganz persönliches Programm!
    </p>
  </>
);
  if (!open || !data) return null;

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
              <DialogTitle>{data.title || defaultTitle}</DialogTitle>
            </DialogHeader>
          )}

          <DialogDescription className="py-4">
            {data.message || defaultMessage}
          </DialogDescription>

          {/* Workshop Details Section */}
          {data.agenda && data.agenda.length > 0 && (
            <div className="mt-4 space-y-4">
              <h3 className="font-semibold text-lg">Agenda</h3>
              <div className="space-y-3">
                {data.agenda.map((item, index) => (
                  <div key={index} className={`flex gap-4 p-3 rounded-lg ${item.speaker ? 'bg-gray-50' : 'bg-[#FEF7CD]/30'}`}>
                    <div className="shrink-0 w-24 text-sm text-gray-600 font-medium">
                      {item.timeSlot}
                    </div>
                    <div className={`flex-1 ${!item.speaker && 'italic text-gray-500'}`}>
                      <div className="font-medium">{item.topic}</div>
                      {item.speaker && <div className="text-sm text-bitcoin">{item.speaker}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Speakers Section */}
          {data.instructors && data.instructors.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-3">
                {data.instructors.length > 1 ? 'Referenten' : 'Referent'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.instructors.map((instructor, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium">{instructor.name || instructor}</div>
                    {instructor.title && <div className="text-sm text-gray-600">{instructor.title}</div>}
                    {instructor.timeSlot && instructor.topic && (
                      <div className="mt-2 text-xs text-gray-500">
                        <span className="font-medium">{instructor.timeSlot}</span>: {instructor.topic}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Workshop Info Section */}
          {(data.date || data.time || data.location || data.difficulty || data.seats) && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-lg">
              {data.date && (
                <div>
                  <p className="text-sm text-gray-500">Datum</p>
                  <p className="font-medium">{data.date}</p>
                </div>
              )}
              {data.time && (
                <div>
                  <p className="text-sm text-gray-500">Zeit</p>
                  <p className="font-medium">{data.time}</p>
                </div>
              )}
              {data.location && (
                <div>
                  <p className="text-sm text-gray-500">Ort</p>
                  <p className="font-medium">{data.location}</p>
                </div>
              )}
              {data.seats && (
                <div>
                  <p className="text-sm text-gray-500">Verfügbare Plätze</p>
                  <p className="font-medium">{data.seats}</p>
                </div>
              )}
              {data.difficulty && (
                <div>
                  <p className="text-sm text-gray-500">Schwierigkeit</p>
                  <p className="font-medium">{data.difficulty}</p>
                </div>
              )}
            </div>
          )}
        </div>

        <DialogFooter className="p-6 border-t">
          <Button
            className="w-full md:w-auto bg-bitcoin hover:bg-bitcoin/90 flex items-center gap-2"
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
