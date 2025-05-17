import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePopup } from "@/pages/PopupContext";

const GlobalPopup = () => {
  const { open, data, closePopup } = usePopup();

  const defaultTitle = <strong>Zuerst ein Ticket, dann die volle Auswahl</strong>;
  const defaultMessage = "Für den Eintritt zur Saturnarena ist immer ein Ticket erforderlich – auch bei kostenlosen Messetickets. Danach können Sie sich Ihre Wunsch-Workshops sichern, sobald diese angeboten werden. Sie können dafür einen Alarm beim Ticketkauf setzen. 

Der Ticketkauf wird von der Volksbank Raiffeisenbank Bayern Mitte e.G., die auch der Veranstalter der 3. BitcoinForum ist durchgeführt – 100 % DSGVO-konform und in wenigen Schritten erledigt. Je nach Ticketkategorie genießen Sie Zugang zur Ausstellung, spannenden Vorträgen oder exklusiv zum VIP-Bereich mit zusätzlichen Vorträgen, Kamingesprächen, voller Verpflegung und weiteren Extras. Und das Beste: Nach dem Ticketkauf können Sie Ihr Erlebnis mit Workshops erweitern – von Einsteiger-Sessions bis zu technischen Masterclasses. Sichern Sie sich jetzt Ihr Ticket und gestalten Sie dann Ihr ganz persönliches Programm!";

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
