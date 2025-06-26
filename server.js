import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Middleware para configurar tipos MIME correctos
app.use((req, res, next) => {
  const filePath = req.path;
  
  // Configurar tipos MIME explícitamente para módulos JavaScript
  // CRÍTICO: Incluir .tsx y .ts como archivos JavaScript compilados
  if (filePath.endsWith('.js') || filePath.endsWith('.mjs') || filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  } else if (filePath.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css; charset=utf-8');
  } else if (filePath.endsWith('.html')) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
  } else if (filePath.endsWith('.json')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
  } else if (filePath.endsWith('.png')) {
    res.setHeader('Content-Type', 'image/png');
  } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
    res.setHeader('Content-Type', 'image/jpeg');
  } else if (filePath.endsWith('.svg')) {
    res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
  } else if (filePath.endsWith('.webp')) {
    res.setHeader('Content-Type', 'image/webp');
  } else if (filePath.endsWith('.woff')) {
    res.setHeader('Content-Type', 'font/woff');
  } else if (filePath.endsWith('.woff2')) {
    res.setHeader('Content-Type', 'font/woff2');
  }
  
  // Headers de seguridad y cache
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Cache para archivos estáticos
  if (filePath.startsWith('/assets/') || filePath.startsWith('/logos/')) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (filePath.endsWith('.html')) {
    res.setHeader('Cache-Control', 'public, max-age=3600');
  } else {
    res.setHeader('Cache-Control', 'public, max-age=86400');
  }
  
  next();
});

// Middleware para servir archivos estáticos optimizado
app.use(express.static('dist', {
  maxAge: '1y',
  etag: true,
  lastModified: true,
  setHeaders: (res, filePath) => {
    // Estos headers ya se configuran en el middleware anterior
    // Pero aseguramos que se apliquen correctamente
    if (filePath.endsWith('.js') || filePath.endsWith('.mjs') || filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    }
  }
}));

// Fallback para SPA (Single Page Application)
app.get('*', (req, res) => {
  // Verificar si es una solicitud de API (evitar el fallback)
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ error: 'API endpoint not found' });
  }
  
  // Configurar headers para HTML
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`🚀 Sixteam.pro server running on port ${port}`);
  console.log(`📱 Access: http://localhost:${port}`);
}); 