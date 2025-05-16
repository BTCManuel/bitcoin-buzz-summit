import React, { createContext, useContext, useState, ReactNode } from "react";

type PopupContextType = {
  isOpen: boolean;
  openPopup: (title: string, message: string, redirectUrl: string) => void;
  closePopup: () => void;
  content: {
    title: string;
    message: string;
    redirectUrl: string;
  };
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({
    title: "",
    message: "",
    redirectUrl: "",
  });

  const openPopup = (title: string, message: string, redirectUrl: string) => {
    setContent({ title, message, redirectUrl });
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  return (
    <PopupContext.Provider value={{ isOpen, openPopup, closePopup, content }}>
      {children}
    </PopupContext.Provider>
  );
};
