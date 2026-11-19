// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dominio público del sitio. Se usa para URLs canónicas, Open Graph y sitemap.
const SITIO = 'https://www.hmariaelena.com';

export default defineConfig({
  site: SITIO,
  trailingSlash: 'always',
  build: { format: 'directory' },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },

  // Fuentes de Google servidas desde el propio sitio (sin peticiones externas).
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-cormorant',
      weights: [500, 600],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Figtree',
      cssVariable: '--font-figtree',
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],

  integrations: [
    sitemap({
      // Fuera del mapa del sitio: las páginas de "mensaje enviado".
      filter: (pagina) => !pagina.includes('/gracias/') && !pagina.includes('/thank-you/'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
