/**
 * RUTAS DEL SITIO
 * Cada página tiene una clave y su dirección en español y en inglés.
 * Para agregar una página: añadirla aquí, crear su vista en src/vistas/
 * y registrarla en src/pages/[...ruta].astro.
 */
import type { Idioma } from '../data/negocio';

export const idiomas: Idioma[] = ['es', 'en'];

export const rutas = {
  inicio: { es: '/', en: '/en/' },
  habitaciones: { es: '/habitaciones/', en: '/en/rooms/' },
  restaurante: { es: '/restaurante/', en: '/en/restaurant/' },
  menu: { es: '/restaurante/menu/', en: '/en/restaurant/menu/' },
  galeria: { es: '/galeria/', en: '/en/gallery/' },
  ubicacion: { es: '/ubicacion/', en: '/en/location/' },
  politicas: { es: '/politicas/', en: '/en/policies/' },
  privacidad: { es: '/privacidad/', en: '/en/privacy/' },
  gracias: { es: '/gracias/', en: '/en/thank-you/' },
} satisfies Record<string, Record<Idioma, string>>;

export type ClavePagina = keyof typeof rutas;

export const clavesPagina = Object.keys(rutas) as ClavePagina[];

/** Dirección de una página en el idioma indicado. */
export function ruta(clave: ClavePagina, idioma: Idioma): string {
  return rutas[clave][idioma];
}

/** El otro idioma disponible. */
export function otroIdioma(idioma: Idioma): Idioma {
  return idioma === 'es' ? 'en' : 'es';
}

/** Código de idioma para atributos `lang` y `hreflang`. */
export const codigoIdioma: Record<Idioma, string> = {
  es: 'es-MX',
  en: 'en',
};
