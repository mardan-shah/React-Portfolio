// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/React-Portfolio/', // Replace 'portfolio' with the name of your GitHub repository
  build: {
    outDir: 'docs',
    chunkSizeWarningLimit: 1500,
  },
});
