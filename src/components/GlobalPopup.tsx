import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePopup } from "@/pages/PopupContext";

const GlobalPopup = () => {
  const { open, data, closePopup } = usePopup();

  const defaultTitle = <strong>Zuerst ein Ticket, dann die volle Auswahl</strong>;
 const defaultMessage = (
  <>
    <p>
      Für den Eintritt zur Saturnarena ist immer ein Ticket erforderlich – auch bei kostenlosen Messetickets.
      Danach können Sie sich Ihre Wunsch-Workshops sichern, sobald diese verfügbar sind. Beim Ticketkauf können Sie dafür bequem einen Alarm setzen.
    </p>
    <p>
      Der Ticketkauf erfolgt über die <strong>Volksbank Raiffeisenbank Bayern Mitte eG</strong>, die zugleich Veranstalter des <strong>3. Bitcoin Forums</strong> ist – 100 % DSGVO-konform und in wenigen Schritten erledigt.
    </p>
    <p>
      Je nach Ticketkategorie genießen Sie Zugang zur Ausstellung, spannenden Vorträgen oder exklusiv zum VIP-Bereich
      mit zusätzlichen Vorträgen, Kamingesprächen, voller Verpflegung und weiteren Extras.
    </p>
    <p>
      <strong>Und das Beste:</strong> Nach dem Ticketkauf können Sie Ihr Erlebnis mit Workshops erweitern – von Einsteiger-Sessions bis hin zu technischen Masterclasses.
    </p>
    <p>
      <strong>Sichern Sie sich jetzt Ihr Ticket</strong> und gestalten Sie Ihr ganz persönliches Programm!
    </p>
  </>
);
  if (!open || !data) return null;

  return (
    <Dialog open={open} onOpenChange={closePopup}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{data.title || defaultTitle}</DialogTitle>
          <DialogDescription>{data.message || defaultMessage}</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            className="w-full"
            onClick={() => {
              closePopup();
              window.open(data.redirectUrl, "_blank");
            }}
          >
            Ich will dabei sein!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GlobalPopup;
