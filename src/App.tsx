
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Workshop from "./pages/Workshop";
import ScrollToTop from "./pages/ScrollToTop";
import GlobalPopup from "@/components/GlobalPopup";
import { PopupProvider } from "@/pages/PopupContext";
import CookieBanner from "@/components/CookieBanner";
import Datenschutz from "./pages/Datenschutz";
import BIP25Members from "./pages/BIP25Members";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PopupProvider>
        <BrowserRouter>
          <GlobalPopup />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/bip25-members" element={<BIP25Members />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieBanner />
        </BrowserRouter>
      </PopupProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
