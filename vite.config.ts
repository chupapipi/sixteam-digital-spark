import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import compression from 'vite-plugin-compression';

// Plugin personalizado para configurar tipos MIME correctos
const mimeTypePlugin = () => {
  return {
    name: 'mime-type-plugin',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const url = req.url || '';
        
        // Configurar tipos MIME correctos para módulos ES6
        if (url.endsWith('.js') || url.endsWith('.mjs')) {
          res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
        } else if (url.endsWith('.css')) {
          res.setHeader('Content-Type', 'text/css; charset=utf-8');
        } else if (url.endsWith('.json')) {
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
        } else if (url.endsWith('.tsx') || url.endsWith('.ts')) {
          res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
        }
        
        // Headers de seguridad
        res.setHeader('X-Content-Type-Options', 'nosniff');
        res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
        res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
        
        next();
      });
    },
    configurePreviewServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const url = req.url || '';
        
        // Configurar tipos MIME correctos para módulos ES6
        if (url.endsWith('.js') || url.endsWith('.mjs')) {
          res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
        } else if (url.endsWith('.css')) {
          res.setHeader('Content-Type', 'text/css; charset=utf-8');
        } else if (url.endsWith('.json')) {
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
        }
        
        // Headers de seguridad
        res.setHeader('X-Content-Type-Options', 'nosniff');
        
        next();
      });
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mimeTypePlugin(),
    // Compresión GZIP para todos los assets
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024, // Solo comprimir archivos > 1KB
      filter: /\.(js|mjs|json|css|html|svg)$/i,
      compressionOptions: {
        level: 9, // Máxima compresión
      },
    }),
    // Compresión Brotli adicional para mejor compresión
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      filter: /\.(js|mjs|json|css|html|svg)$/i,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Configuración de build optimizada pero estable
    rollupOptions: {
      output: {
        // Separar vendors principales de forma conservadora
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Reducir tamaño de chunk warning
    chunkSizeWarningLimit: 400,
    // Minificación optimizada pero estable
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 1, // Reducido a 1 pase para estabilidad
      },
    },
    target: ['es2020', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    // Optimizar CSS
    cssCodeSplit: true,
    cssMinify: true,
    // Optimizar imports dinámicos
    dynamicImportVarsOptions: {
      warnOnError: true,
    },
    // Source maps para debug pero optimizados
    sourcemap: false, // Desactivar en producción para mejor rendimiento
    // Optimizar assets
    assetsInlineLimit: 4096, // Inline assets pequeños como base64
    // Reportar compresión
    reportCompressedSize: false, // Más rápido build
  },
  // Optimizaciones de servidor de desarrollo
  server: {
    port: 5175,
    host: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
    },
    // Configuración específica de tipos MIME
    middlewareMode: false,
    fs: {
      strict: false,
    },
  },
  // Configuración de preview
  preview: {
    port: 4173,
    host: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
    },
  },
  // Optimizar dependencias
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'lucide-react',
      'react-router-dom',
      'embla-carousel-react'
    ],
    exclude: ['@vite/client', '@vite/env'],
    esbuildOptions: {
      target: 'es2020',
    },
  },
  // Configuraciones de performance
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    legalComments: 'none',
    treeShaking: true,
  },
  // Optimizar CSS
  css: {
    postcss: './postcss.config.js',
  },
});
