import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        cruz: resolve(__dirname, 'cruz.html'),
        jus: resolve(__dirname, 'jus.html'),
        aboy: resolve(__dirname, 'aboy.html'),
      }
    }
  }
});
