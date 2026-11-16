import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isSsrBuild = command === 'build' && process.env.SSR === 'true'

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    build: {
      cssMinify: true,
      outDir: isSsrBuild ? 'dist/server' : 'dist/client',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/react-router-dom/')) {
              return 'react-vendor';
            }
            if (id.includes('node_modules/gsap/')) {
              return 'gsap-vendor';
            }
            if (id.includes('node_modules/lucide-react/') || id.includes('node_modules/@fortawesome/')) {
              return 'icons-vendor';
            }
          },
          entryFileNames: isSsrBuild ? '[name].js' : 'assets/[name]-[hash].js',
          chunkFileNames: isSsrBuild ? '[name].js' : 'assets/[name]-[hash].js',
          assetFileNames: isSsrBuild ? '[name].[ext]' : 'assets/[name]-[hash].[ext]',
        },
      },
    },
  }
})
