import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AdminLayout } from "./components/admin/AdminLayout";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Game from "./pages/Game";
import Rulebook from "./pages/Rulebook";
import Lore from "./pages/Lore";
import Workshop from "./pages/Workshop";
import Campaign from "./pages/Campaign";
import Community from "./pages/Community";
import Journal from "./pages/Journal";
import Vault from "./pages/Vault";
import Dashboard from "./pages/admin/Dashboard";
import Subscribers from "./pages/admin/Subscribers";
import Characters from "./pages/admin/Characters";
import Scenarios from "./pages/admin/Scenarios";
import DevJournal from "./pages/admin/DevJournal";
import JournalEditorPage from "./pages/admin/JournalEditorPage";
import JournalDetail from "./pages/JournalDetail";
import LoreArticles from "./pages/admin/LoreArticles";
import LoreEditorPage from "./pages/admin/LoreEditorPage";
import Statistics from "./pages/admin/Statistics";
import AdminWorkshop from "./pages/admin/AdminWorkshop";
import AdminSettings from "./pages/admin/AdminSettings";
import MediaLibrary from "./pages/admin/MediaLibrary";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/auth" element={<Auth />} />
          
          {/* Main site routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/game" element={<Game />} />
            <Route path="/rulebook" element={<Rulebook />} />
            <Route path="/lore" element={<Lore />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/community" element={<Community />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<JournalDetail />} />
            <Route path="/vault" element={<Vault />} />
          </Route>

          {/* Admin routes - protected */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute requireAdmin>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="subscribers" element={<Subscribers />} />
            <Route path="characters" element={<Characters />} />
            <Route path="scenarios" element={<Scenarios />} />
            <Route path="dev-journal" element={<DevJournal />} />
            <Route path="dev-journal/new" element={<JournalEditorPage />} />
            <Route path="dev-journal/edit/:id" element={<JournalEditorPage />} />
            <Route path="lore" element={<LoreArticles />} />
            <Route path="lore/new" element={<LoreEditorPage />} />
            <Route path="lore/edit/:id" element={<LoreEditorPage />} />
            <Route path="media-library" element={<MediaLibrary />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="workshop" element={<AdminWorkshop />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
