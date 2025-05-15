
import React from 'react';
import { Button } from '@/components/ui/button';
import { Ticket } from 'lucide-react';

const TicketButton = () => {
  return (
    <Button 
      className="bg-bitcoin hover:bg-bitcoin/80 text-white shadow-lg shadow-bitcoin/20 px-10 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
    >
      <Ticket className="h-5 w-5" /> Sichere dein Ticket
    </Button>
  );
};

export default TicketButton;
