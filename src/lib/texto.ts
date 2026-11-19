/**
 * Une varios nombres en una frase separada por comas.
 * Solo el primero conserva la mayúscula inicial; las siglas como "TV"
 * o "WiFi" no se tocan.
 *   ['Chilaquiles', 'Huevos rancheros', 'TV por cable']
 *   → 'Chilaquiles, huevos rancheros, TV por cable'
 */
export function enFrase(nombres: string[]): string {
  return nombres
    .map((nombre, n) => {
      const primeraPalabra = nombre.split(' ')[0];
      const esSigla = /[A-ZÁÉÍÓÚÑ]/.test(primeraPalabra.slice(1));
      return n === 0 || esSigla ? nombre : nombre[0].toLowerCase() + nombre.slice(1);
    })
    .join(', ');
}
