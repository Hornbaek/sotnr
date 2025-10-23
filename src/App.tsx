import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AudioProvider } from './contexts/AudioContext';
import { AuthProvider } from './contexts/AuthContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop as ScrollToTopButton } from './components/ScrollToTop';
import { FogEffect } from './components/FogEffect';
import { ProtectedRoute } from './components/admin/ProtectedRoute';
import { Toaster } from './components/ui/sonner';

// Pages
import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { LoreCodex } from './pages/LoreCodex';
import { Workshop } from './pages/Workshop';
import { CampaignHub } from './pages/CampaignHub';
import { Community } from './pages/Community';
import { Journal } from './pages/Journal';
import { RelicVault } from './pages/RelicVault';
import { DynamicPage } from './pages/DynamicPage';

// Admin Pages
import { AdminLogin } from './pages/admin/Login';
import { AdminDashboard } from './pages/admin/Dashboard';
import { PageBuilder } from './pages/admin/PageBuilder';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Check if current route is admin route
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Admin Routes - No navigation/footer */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/builder/:pageName"
          element={
            <ProtectedRoute>
              <PageBuilder />
            </ProtectedRoute>
          }
        />

        {/* Public Routes */}
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/game"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Game />
            </motion.div>
          }
        />
        <Route
          path="/lore"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LoreCodex />
            </motion.div>
          }
        />
        <Route
          path="/workshop"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Workshop />
            </motion.div>
          }
        />
        <Route
          path="/campaign"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CampaignHub />
            </motion.div>
          }
        />
        <Route
          path="/community"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Community />
            </motion.div>
          }
        />
        <Route
          path="/journal"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Journal />
            </motion.div>
          }
        />
        <Route
          path="/vault"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <RelicVault />
            </motion.div>
          }
        />
        
        {/* Dynamic Pages (created via page builder) */}
        <Route
          path="/p/:slug"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DynamicPage />
            </motion.div>
          }
        />
        
        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-[#1a1410] text-[#e8dcc4] relative">
      {/* Only show atmospheric effects on public pages */}
      {!isAdminRoute && <FogEffect />}

      {/* Only show navigation on public pages */}
      {!isAdminRoute && <Navigation />}

      {/* Main content */}
      <main className={isAdminRoute ? '' : 'relative z-20'}>
        <AnimatedRoutes />
      </main>

      {/* Only show footer on public pages */}
      {!isAdminRoute && <Footer />}

      {/* Only show scroll to top on public pages */}
      {!isAdminRoute && <ScrollToTopButton />}
      
      {/* Toast notifications */}
      <Toaster theme="dark" />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AudioProvider>
        <AuthProvider>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </AuthProvider>
      </AudioProvider>
    </ThemeProvider>
  );
}
