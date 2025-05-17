
// src/pages/PopupContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";

// Instructor or speaker type with time slot and topic information
type Instructor = {
  name: string;
  title?: string;
  timeSlot?: string;
  topic?: string;
} | string;

// Agenda item type for detailed workshop schedules
type AgendaItem = {
  timeSlot: string;
  topic: string;
  speaker?: string;
};

type PopupData = {
  title?: string;
  subtitle?: string;
  message?: React.ReactNode;
  redirectUrl: string;
  buttonText?: string;
  imageUrl?: string;
  date?: string;
  time?: string;
  location?: string;
  difficulty?: string;
  seats?: string;
  instructors?: Instructor[];
  agenda?: AgendaItem[];
};

type PopupContextType = {
  open: boolean;
  data: PopupData | null;
  openPopup: (data: PopupData) => void;
  closePopup: () => void;
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
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<PopupData | null>(null);

  const openPopup = (popupData: PopupData) => {
    setData(popupData);
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
    setData(null);
  };

  return (
    <PopupContext.Provider value={{ open, data, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};
