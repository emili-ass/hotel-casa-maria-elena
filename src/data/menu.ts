/**
 * MENÚ DEL RESTAURANTE
 * -----------------------------------------------------------------------
 * El restaurante todavía no entrega su menú actual. Lo único que se sabe
 * es qué categorías maneja (desayunos, comidas, panadería y bar) y tres
 * cosas que los clientes mencionan en sus reseñas: chilaquiles, huevos
 * rancheros y capuchino. Todo lo demás está por confirmar.
 *
 * - Un precio en `null` aparece como "[POR CONFIRMAR: precio]".
 * - Una sección sin platillos aparece como "[POR CONFIRMAR: platillos…]".
 * - Cuando el menú esté completo y revisado, cambiar `menuConfirmado`
 *   a `true` para quitar el aviso amarillo de la página.
 *
 * Para agregar un platillo:
 *   {
 *     nombre: { es: 'Enchiladas', en: 'Enchiladas' },
 *     descripcion: { es: 'Con salsa roja…', en: 'With red salsa…' },  // opcional
 *     precio: 120,                                                    // pesos
 *   },
 */
import type { Bilingue } from './negocio';

export interface Platillo {
  nombre: Bilingue;
  descripcion?: Bilingue;
  /** Precio en pesos mexicanos. */
  precio: number | null;
}

export interface SeccionMenu {
  /** Identificador interno; también se usa en la dirección (#desayunos). */
  clave: string;
  nombre: Bilingue;
  platillos: Platillo[];
}

export const menuConfirmado = false;

export const menu: SeccionMenu[] = [
  {
    clave: 'desayunos',
    nombre: { es: 'Desayunos', en: 'Breakfast' },
    platillos: [
      { nombre: { es: 'Chilaquiles', en: 'Chilaquiles' }, precio: null },
      { nombre: { es: 'Huevos rancheros', en: 'Huevos rancheros' }, precio: null },
    ],
  },
  {
    clave: 'comidas',
    nombre: { es: 'Comidas', en: 'Lunch' },
    platillos: [],
  },
  {
    clave: 'panaderia',
    nombre: { es: 'Panadería', en: 'Bakery' },
    platillos: [],
  },
  {
    // POR CONFIRMAR: nombre y existencia de esta sección en el menú real.
    clave: 'cafe',
    nombre: { es: 'Café', en: 'Coffee' },
    platillos: [{ nombre: { es: 'Capuchino', en: 'Cappuccino' }, precio: null }],
  },
  {
    clave: 'bar',
    nombre: { es: 'Bar', en: 'Bar' },
    platillos: [],
  },
];
