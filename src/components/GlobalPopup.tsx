import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePopup } from "@/pages/PopupContext";

const GlobalPopup = () => {
    const { open, content, closePopup } = usePopup();

  return (
    <Dialog open={open} onOpenChange={closePopup}>
      <DialogContent className="max-w-md text-gray-800 space-y-4">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{content.title}</DialogTitle>
        </DialogHeader>
        <p>{content.message}</p>
        <div className="flex justify-end">
          <a href={content.redirectUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white">
              Weiter zur Buchung
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GlobalPopup;
