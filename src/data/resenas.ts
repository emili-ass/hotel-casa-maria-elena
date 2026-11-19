/**
 * RESEÑAS DE CLIENTES
 * -----------------------------------------------------------------------
 * Solo reseñas REALES, copiadas tal como aparecen en su fuente.
 * No inventar reseñas, nombres ni textos.
 *
 * El sitio muestra únicamente las de 5 estrellas: si aquí se guarda una
 * de 4 o menos, el carrusel la ignora sola.
 *
 * Las tres entradas de abajo son EJEMPLOS DE FORMATO, no reseñas reales.
 * Llevan `pendiente: true`, que hace aparecer la etiqueta amarilla
 * "[POR CONFIRMAR: reseña real]". Al reemplazarlas por reseñas reales,
 * borrar esa línea.
 *
 * Ejemplo de una reseña real ya cargada:
 *   {
 *     nombre: 'Laura G.',              // nombre, o nombre + inicial del apellido
 *     calificacion: 5,
 *     fecha: '2026-03',                // año-mes, o año-mes-día
 *     texto: 'El texto tal cual lo escribió la persona.',
 *     idioma: 'es',                    // 'es' o 'en'
 *     fuente: 'google',                // 'google', 'booking', 'tripadvisor' o 'facebook'
 *     refiere: 'restaurante',          // 'hotel' o 'restaurante'
 *   },
 */
import type { Idioma } from './negocio';

export type FuenteResena = 'google' | 'booking' | 'tripadvisor' | 'facebook';

export interface Resena {
  nombre: string;
  /** De 1 a 5. Solo se muestran las de 5. */
  calificacion: number;
  /** 'AAAA-MM' o 'AAAA-MM-DD'. `null` mientras sea un ejemplo. */
  fecha: string | null;
  texto: string;
  idioma: Idioma;
  fuente: FuenteResena;
  refiere: 'hotel' | 'restaurante';
  /** Marca los ejemplos de formato. Quitar al cargar la reseña real. */
  pendiente?: boolean;
}

export const nombresFuente: Record<FuenteResena, string> = {
  google: 'Google',
  booking: 'Booking',
  tripadvisor: 'Tripadvisor',
  facebook: 'Facebook',
};

export const resenas: Resena[] = [
  {
    nombre: 'Nombre del cliente',
    calificacion: 5,
    fecha: null,
    texto:
      'Aquí va el texto completo de una reseña real de 5 estrellas sobre el restaurante, copiado tal como aparece en Google, sin editarlo. Este párrafo de ejemplo es largo a propósito: así se ve cómo la tarjeta lo corta a unas cuatro líneas y cómo funciona el botón «Leer más» cuando la reseña ocupa más espacio del que cabe.',
    idioma: 'es',
    fuente: 'google',
    refiere: 'restaurante',
    pendiente: true,
  },
  {
    nombre: 'Nombre del cliente',
    calificacion: 5,
    fecha: null,
    texto:
      'Aquí va el texto de una reseña real de 5 estrellas sobre el hotel, copiado tal como aparece en su fuente.',
    idioma: 'es',
    fuente: 'google',
    refiere: 'hotel',
    pendiente: true,
  },
  {
    nombre: 'Guest name',
    calificacion: 5,
    fecha: null,
    texto:
      'The full text of a real 5-star review written in English goes here, copied exactly as it appears on Google. On the English version of the site, reviews written in English are shown first.',
    idioma: 'en',
    fuente: 'google',
    refiere: 'restaurante',
    pendiente: true,
  },
];
