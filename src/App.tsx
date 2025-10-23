import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Game from "./pages/Game";
import Lore from "./pages/Lore";
import Workshop from "./pages/Workshop";
import Campaign from "./pages/Campaign";
import Community from "./pages/Community";
import Journal from "./pages/Journal";
import Vault from "./pages/Vault";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/game" element={<Game />} />
            <Route path="/lore" element={<Lore />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/community" element={<Community />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/vault" element={<Vault />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
