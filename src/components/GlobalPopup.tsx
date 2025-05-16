import { Dialog, DialogContent } from "@/components/ui/dialog";
import { usePopup } from "@/context/PopupContext";

const GlobalPopup = () => {
  const { open, content, onClose } = usePopup();

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md text-gray-800 space-y-4">
        {content}
      </DialogContent>
    </Dialog>
  );
};

export default GlobalPopup;
