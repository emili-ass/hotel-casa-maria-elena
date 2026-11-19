/**
 * robots.txt: permite a los buscadores recorrer todo el sitio y les indica
 * dónde está el mapa del sitio. Usa el dominio definido en astro.config.mjs.
 */
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const mapa = new URL('sitemap-index.xml', site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${mapa}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
