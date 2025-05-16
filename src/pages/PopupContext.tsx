import React, { createContext, useContext, useState, ReactNode } from "react";

type PopupContent = {
  title: string;
  message: string;
  redirectUrl: string;
};

type PopupContextType = {
  open: boolean;
  content: PopupContent;
  openPopup: (content: PopupContent) => void;
  closePopup: () => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<PopupContent>({
    title: "",
    message: "",
    redirectUrl: "",
  });

  const openPopup = (newContent: PopupContent) => {
    setContent(newContent);
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
  };

  return (
    <PopupContext.Provider value={{ open, content, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};
