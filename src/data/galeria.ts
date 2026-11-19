/**
 * GALERÍA DE FOTOS
 * -----------------------------------------------------------------------
 * Cada foto lleva su categoría y una descripción (`alt`) en dos idiomas.
 * La descripción la leen los lectores de pantalla y Google: debe decir
 * lo que se ve en la foto.
 *
 * Hoy todas son fotos de marcador y las descripciones dicen lo que la
 * foto DEBERÍA mostrar. Al poner la foto real, reescribir su descripción.
 *
 * Para agregar una foto: guardarla en src/assets/images/, importarla
 * aquí arriba y añadir una línea a la lista.
 */
import type { ImageMetadata } from 'astro';
import type { Bilingue } from './negocio';
import fachada from '../assets/images/fachada.jpg';
import recepcion from '../assets/images/recepcion.jpg';
import estacionamiento from '../assets/images/estacionamiento.jpg';
import habitacion1 from '../assets/images/habitacion-1.jpg';
import habitacion2 from '../assets/images/habitacion-2.jpg';
import habitacion3 from '../assets/images/habitacion-3.jpg';
import patio1 from '../assets/images/patio-1.jpg';
import patio2 from '../assets/images/patio-2.jpg';
import patio3 from '../assets/images/patio-3.jpg';
import patio4 from '../assets/images/patio-4.jpg';
import restaurante1 from '../assets/images/restaurante-1.jpg';
import restaurante2 from '../assets/images/restaurante-2.jpg';
import chilaquiles from '../assets/images/chilaquiles.jpg';
import huevos from '../assets/images/huevos-rancheros.jpg';
import capuchino from '../assets/images/capuchino.jpg';
import panaderia from '../assets/images/panaderia.jpg';
import bar from '../assets/images/bar.jpg';

export type CategoriaGaleria = 'hotel' | 'habitaciones' | 'patio' | 'restaurante';

export interface FotoGaleria {
  foto: ImageMetadata;
  categoria: CategoriaGaleria;
  alt: Bilingue;
}

export const categoriasGaleria: { clave: CategoriaGaleria; nombre: Bilingue }[] = [
  { clave: 'hotel', nombre: { es: 'El hotel', en: 'The hotel' } },
  { clave: 'habitaciones', nombre: { es: 'Habitaciones', en: 'Rooms' } },
  { clave: 'patio', nombre: { es: 'El patio', en: 'The patio' } },
  { clave: 'restaurante', nombre: { es: 'Restaurante', en: 'Restaurant' } },
];

export const galeria: FotoGaleria[] = [
  {
    foto: fachada,
    categoria: 'hotel',
    alt: {
      es: 'Fachada del Hotel Casa María Elena vista desde la calle Pino Suárez',
      en: 'Front of Hotel Casa María Elena seen from Pino Suárez street',
    },
  },
  {
    foto: recepcion,
    categoria: 'hotel',
    alt: { es: 'Recepción del hotel', en: 'The hotel’s front desk' },
  },
  {
    foto: estacionamiento,
    categoria: 'hotel',
    alt: { es: 'Estacionamiento del hotel', en: 'The hotel’s parking area' },
  },
  {
    foto: habitacion1,
    categoria: 'habitaciones',
    alt: { es: 'Habitación del hotel (tipo 1)', en: 'A hotel room (type 1)' },
  },
  {
    foto: habitacion2,
    categoria: 'habitaciones',
    alt: { es: 'Habitación del hotel (tipo 2)', en: 'A hotel room (type 2)' },
  },
  {
    foto: habitacion3,
    categoria: 'habitaciones',
    alt: { es: 'Habitación del hotel (tipo 3)', en: 'A hotel room (type 3)' },
  },
  {
    foto: patio1,
    categoria: 'patio',
    alt: {
      es: 'Patio interior del hotel, rodeado de arcos de cantera y macetas con plantas',
      en: 'The hotel’s inner patio, framed by stone arches and potted plants',
    },
  },
  {
    foto: patio2,
    categoria: 'patio',
    alt: {
      es: 'Vista amplia del patio, con mesas entre las plantas',
      en: 'A wide view of the patio, with tables among the plants',
    },
  },
  {
    foto: patio3,
    categoria: 'patio',
    alt: { es: 'Plantas y macetas en el patio', en: 'Plants and flowerpots on the patio' },
  },
  {
    foto: patio4,
    categoria: 'patio',
    alt: { es: 'Comensales en las mesas del patio', en: 'Diners at the patio tables' },
  },
  {
    foto: restaurante1,
    categoria: 'restaurante',
    alt: {
      es: 'Salón interior del restaurante Rincón Ma’ Elena',
      en: 'The indoor dining room of Rincón Ma’ Elena restaurant',
    },
  },
  {
    foto: restaurante2,
    categoria: 'restaurante',
    alt: { es: 'Mesa servida en el patio', en: 'A table set on the patio' },
  },
  {
    foto: chilaquiles,
    categoria: 'restaurante',
    alt: { es: 'Plato de chilaquiles', en: 'A plate of chilaquiles' },
  },
  {
    foto: huevos,
    categoria: 'restaurante',
    alt: { es: 'Plato de huevos rancheros', en: 'A plate of huevos rancheros' },
  },
  {
    foto: capuchino,
    categoria: 'restaurante',
    alt: { es: 'Taza de capuchino', en: 'A cup of cappuccino' },
  },
  {
    foto: panaderia,
    categoria: 'restaurante',
    alt: { es: 'Pan de la panadería del restaurante', en: 'Bread from the restaurant’s bakery' },
  },
  {
    foto: bar,
    categoria: 'restaurante',
    alt: { es: 'Bar del restaurante', en: 'The restaurant’s bar' },
  },
];
