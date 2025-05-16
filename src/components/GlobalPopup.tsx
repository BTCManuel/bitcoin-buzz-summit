import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePopup } from "@/pages/PopupContext";

const GlobalPopup = () => {
  const { open, data, closePopup } = usePopup();

  const defaultTitle = "Willst du fortfahren?";
  const defaultMessage = "Du wirst gleich weitergeleitet. Bitte halte deine Daten bereit.";

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
            Jetzt weiter
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GlobalPopup;
