import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/', // or '/Ahmed-Marnissi.github.io/' if needed
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
