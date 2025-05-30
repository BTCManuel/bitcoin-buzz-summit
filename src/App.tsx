
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Workshop from './pages/Workshop';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import LesFemmesOrange from './pages/LesFemmesOrange';
import BIP25Members from './pages/BIP25Members';
import Datenschutz from './pages/Datenschutz';
import WorkshopBitcoinInDerBank from './pages/WorkshopBitcoinInDerBank';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { PopupProvider } from "@/pages/PopupContext";
import Impressum from '@/pages/Impressum';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PopupProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <CookieBanner />
            <Navbar />
            
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/workshop" element={<Workshop />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/les-femmes-orange" element={<LesFemmesOrange />} />
              <Route path="/bip25-members" element={<BIP25Members />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/workshop/bitcoin-in-der-bank" element={<WorkshopBitcoinInDerBank />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            
            <Footer />
          </div>
        </Router>
      </PopupProvider>
    </QueryClientProvider>
  );
}

export default App;
