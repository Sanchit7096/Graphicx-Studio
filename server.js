import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import compression from 'compression';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;
const base = '/';

async function createServer() {
  const app = express();

  // Enable gzip compression
  app.use(compression());

  let vite;

  if (!isProduction) {
    // Create Vite dev server in middleware mode
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
      base,
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files from dist
    app.use(base, express.static(path.resolve(__dirname, 'dist/client')));
  }

  // SSR handler for all routes
  app.get(/.*/, async (req, res) => {
    try {
      const url = req.originalUrl.replace(base, '');

      let template;
      let render;

      if (!isProduction) {
        // Always read fresh template in dev
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/main-ssr.jsx')).render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');
        render = (await import('./dist/server/main-ssr.js')).render;
      }

      const appHtml = await render(url);

      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      vite?.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

createServer();
