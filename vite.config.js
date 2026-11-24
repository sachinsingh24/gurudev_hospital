import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    sourcemap: false,
    assetsInlineLimit: 2048,
    // manifest.json maps each page module to its chunk; scripts/prerender.mjs uses it for <link rel="modulepreload">
    manifest: true,
    rollupOptions: {
      output: {
        // React + router change rarely: a separate vendor chunk stays cached across site updates.
        manualChunks(id) {
          if (/node_modules[\\/](react|react-dom|react-router|scheduler)[\\/]/.test(id)) return 'vendor';
        },
      },
    },
  },
});
