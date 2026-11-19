/**
 * TIPOS DE HABITACIÓN
 * -----------------------------------------------------------------------
 * El hotel todavía no confirma sus tipos de habitación ni sus precios.
 * Estas tres entradas son EJEMPLOS DE ESTRUCTURA: no describen
 * habitaciones reales. Lo que está en `null` aparece en el sitio como
 * "[POR CONFIRMAR: …]".
 *
 * Para llenar una habitación:
 *   nombre:      { es: 'Doble', en: 'Double' }
 *   capacidad:   2                      (personas)
 *   camas:       { es: '2 camas matrimoniales', en: '2 double beds' }
 *   precioDesde: 1200                   (pesos por noche, con impuestos)
 *
 * Para agregar o quitar un tipo, copia o borra un bloque completo.
 */
import type { ImageMetadata } from 'astro';
import type { Bilingue } from './negocio';
import foto1 from '../assets/images/habitacion-1.jpg';
import foto2 from '../assets/images/habitacion-2.jpg';
import foto3 from '../assets/images/habitacion-3.jpg';

/** Claves de `hotel.servicios` (negocio.ts) que están dentro del cuarto. */
const serviciosDelCuarto = ['wifi', 'clima', 'agua-caliente', 'tv', 'agua'];

export interface Habitacion {
  /** Identificador interno; también se usa en la dirección (#tipo-1). */
  clave: string;
  nombre: Bilingue | null;
  capacidad: number | null;
  camas: Bilingue | null;
  /** Precio por noche en pesos mexicanos. */
  precioDesde: number | null;
  /** Claves de `hotel.servicios`. POR CONFIRMAR por tipo de habitación. */
  servicios: string[];
  foto: ImageMetadata;
  /** Descripción de la foto para lectores de pantalla. Reescribir con la foto real. */
  fotoAlt: Bilingue;
}

export const habitaciones: Habitacion[] = [
  {
    clave: 'tipo-1',
    nombre: null,
    capacidad: null,
    camas: null,
    precioDesde: null,
    servicios: serviciosDelCuarto,
    foto: foto1,
    fotoAlt: {
      es: 'Habitación del Hotel Casa María Elena (foto pendiente)',
      en: 'A room at Hotel Casa María Elena (photo pending)',
    },
  },
  {
    clave: 'tipo-2',
    nombre: null,
    capacidad: null,
    camas: null,
    precioDesde: null,
    servicios: serviciosDelCuarto,
    foto: foto2,
    fotoAlt: {
      es: 'Habitación del Hotel Casa María Elena (foto pendiente)',
      en: 'A room at Hotel Casa María Elena (photo pending)',
    },
  },
  {
    clave: 'tipo-3',
    nombre: null,
    capacidad: null,
    camas: null,
    precioDesde: null,
    servicios: serviciosDelCuarto,
    foto: foto3,
    fotoAlt: {
      es: 'Habitación del Hotel Casa María Elena (foto pendiente)',
      en: 'A room at Hotel Casa María Elena (photo pending)',
    },
  },
];
