import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import './App.css';

// Lazy load de páginas para code splitting
const Index = lazy(() => import('@/pages/Index'));
const Servicios = lazy(() => import('@/pages/Servicios'));
const CasosExito = lazy(() => import('@/pages/CasosExito'));
const Nosotros = lazy(() => import('@/pages/Nosotros'));
const Contacto = lazy(() => import('@/pages/Contacto'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Loading component optimizado
const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a2342] to-[#1d70a2]">
    <div className="flex flex-col items-center space-y-4">
      <div className="loading-spinner"></div>
      <p className="text-white/80 text-sm">Cargando...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a2342] to-[#1d70a2]">
      <Header />
      
      <main className="relative">
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/casos-exito" element={<CasosExito />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      
      <WhatsAppButton />
    </div>
  );
}

export default App;
