import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimizaciones de build
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar dependencias grandes
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['lucide-react'],
          'carousel-vendor': ['embla-carousel-react']
        }
      }
    },
    // Reducir el tamaño del chunk
    chunkSizeWarningLimit: 600,
    // Minificar con terser para mejor compresión
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // Optimizaciones de servidor de desarrollo
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
  // Preload de módulos críticos
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
});
