import { Dialog, DialogContent, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePopup } from "@/pages/PopupContext";

const GlobalPopup = () => {
  const { open, data, closePopup } = usePopup(); // ✅ Hook wird innerhalb der Komponente aufgerufen

  return (
    <Dialog open={open} onOpenChange={closePopup}>
      <DialogContent>
        <DialogHeader className="text-lg font-semibold">
          {data?.title}
        </DialogHeader>
        <div className="text-gray-700 py-2">{data?.message}</div>
        <DialogFooter>
          <Button
            className="w-full"
            onClick={() => {
              closePopup();
              if (data?.redirectUrl) {
                window.open(data.redirectUrl, "_blank");
              }
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
