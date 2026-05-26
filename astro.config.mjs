// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://S-cookie.github.io',
  base: '/hello-myself',
  vite: {
    plugins: [tailwindcss()]
  }
});