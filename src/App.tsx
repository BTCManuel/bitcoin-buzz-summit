import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Workshop from "./pages/Workshop";
import ScrollToTop from "./pages/ScrollToTop";
import GlobalPopup from "@/components/GlobalPopup"; // 👈 falls du das hast
import { PopupProvider } from "@/pages/PopupContext"; // 👈 DAS IST DER WICHTIGE TEIL

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PopupProvider> {/* ✅ Hier einfügen */}
        <BrowserRouter>
          <GlobalPopup /> {/* 👈 falls du es global anzeigen willst */}
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PopupProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
