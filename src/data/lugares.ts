/**
 * LUGARES CERCANOS
 * -----------------------------------------------------------------------
 * Sitios conocidos del Centro Histórico de Durango para la página de
 * Ubicación. La lista es una propuesta: el hotel debe revisarla y
 * agregar o quitar lo que recomiende a sus huéspedes (ver PENDIENTES.md).
 *
 * `aPie` solo se llena con tiempos que el hotel haya confirmado. Para los
 * demás, el sitio ofrece un enlace "Ver ruta a pie" que abre Google Maps
 * y muestra el tiempo real desde el hotel.
 *
 * `busqueda` es el texto con el que Google Maps encuentra el lugar.
 */
import type { Bilingue } from './negocio';

export interface Lugar {
  nombre: string;
  descripcion: Bilingue;
  /** Tiempo caminando desde el hotel, confirmado por el hotel. */
  aPie?: Bilingue;
  busqueda: string;
}

export const lugares: Lugar[] = [
  {
    nombre: 'Catedral Basílica de Durango',
    descripcion: {
      es: 'La catedral de la ciudad, frente a la Plaza de Armas',
      en: 'The city’s cathedral, facing Plaza de Armas',
    },
    aPie: { es: 'Unos 15 minutos a pie', en: 'About a 15-minute walk' },
    busqueda: 'Catedral Basílica Menor de Durango, Durango, Dgo.',
  },
  {
    nombre: 'Paseo Durango',
    descripcion: { es: 'Centro comercial', en: 'Shopping mall' },
    aPie: { es: 'Unos 15 minutos a pie', en: 'About a 15-minute walk' },
    busqueda: 'Paseo Durango, Durango, Dgo.',
  },
  {
    nombre: 'Plaza de Armas',
    descripcion: {
      es: 'La plaza principal del Centro Histórico',
      en: 'The main square of the Historic Center',
    },
    busqueda: 'Plaza de Armas, Zona Centro, Durango, Dgo.',
  },
  {
    nombre: 'Paseo Constitución',
    descripcion: {
      es: 'Calle peatonal del centro',
      en: 'Downtown pedestrian street',
    },
    busqueda: 'Paseo Constitución, Zona Centro, Durango, Dgo.',
  },
  {
    nombre: 'Teatro Ricardo Castro',
    descripcion: { es: 'Teatro histórico de la ciudad', en: 'The city’s historic theater' },
    busqueda: 'Teatro Ricardo Castro, Durango, Dgo.',
  },
  {
    nombre: 'Museo Francisco Villa',
    descripcion: {
      es: 'Museo dedicado a Pancho Villa',
      en: 'A museum devoted to Pancho Villa',
    },
    busqueda: 'Museo Francisco Villa, Durango, Dgo.',
  },
  {
    nombre: 'Museo Túnel de Minería',
    descripcion: {
      es: 'Museo dentro de un túnel bajo el centro',
      en: 'A museum inside a tunnel beneath downtown',
    },
    busqueda: 'Museo Túnel de Minería, Durango, Dgo.',
  },
  {
    nombre: 'Teleférico de Durango',
    descripcion: {
      es: 'Teleférico con vista a la ciudad',
      en: 'Cable car with views over the city',
    },
    busqueda: 'Teleférico de Durango, Durango, Dgo.',
  },
];

/** Puntos de llegada a la ciudad, para los enlaces "Ruta desde…". */
export const llegadas = [
  {
    clave: 'aeropuerto',
    nombre: { es: 'Desde el aeropuerto', en: 'From the airport' } satisfies Bilingue,
    busqueda: 'Aeropuerto Internacional General Guadalupe Victoria, Durango',
  },
  {
    clave: 'central',
    nombre: { es: 'Desde la central de autobuses', en: 'From the bus station' } satisfies Bilingue,
    busqueda: 'Central de Autobuses de Durango, Durango, Dgo.',
  },
];
