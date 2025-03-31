import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/shikha-chaudhary-portfolio/", // Set this to your repo name
});
