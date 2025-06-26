import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import App from './App.tsx'
import './index.css'

// Optimizar el loading inicial removiendo el loader placeholder
const removeInitialLoader = () => {
  const loader = document.getElementById('initial-loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 200);
  }
};

// Configurar React para rendering optimizado
const rootElement = document.getElementById('root')!;

// Verificar si el elemento root existe
if (!rootElement) {
  throw new Error('Root element not found');
}

// Crear root de React con configuraciones de performance
const root = ReactDOM.createRoot(rootElement, {
  // Habilitar concurrent features para mejor performance
  // identifierPrefix: 'sixteam-',
});

// Render de la aplicación con optimizaciones
root.render(
  <React.StrictMode>
    <BrowserRouter
      // Optimizar para mobile
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <App />
      <Toaster 
        position="bottom-right"
        theme="dark"
        richColors
        closeButton
        // Lazy load toasts para mejor performance inicial
        expand={false}
        visibleToasts={3}
      />
    </BrowserRouter>
  </React.StrictMode>
);

// Remover loader después de que React haya montado
removeInitialLoader();

// Reportar Web Vitals en desarrollo
if (import.meta.env.DEV) {
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  }).catch(() => {
    // Fallar silenciosamente si web-vitals no está disponible
  });
}
