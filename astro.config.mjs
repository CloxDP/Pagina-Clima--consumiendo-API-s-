import { defineConfig } from 'astro/config';

export default defineConfig({
  // otras configuraciones
  vite: {
    server: {
      mimeTypes: {
        'text/css': ['css']
      }
    }
  }
});