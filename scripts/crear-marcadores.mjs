/**
 * Crea fotos de marcador en src/assets/images/ para poder armar el sitio
 * antes de tener las fotos reales.
 *
 *   npm run marcadores            crea solo las que falten
 *   npm run marcadores -- --forzar   vuelve a crear todas (¡pisa fotos reales!)
 *
 * Para usar una foto real: guárdala en src/assets/images/ con el mismo
 * nombre de archivo. El script nunca reemplaza un archivo que ya existe,
 * salvo que se use --forzar.
 */
import { mkdir, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const carpeta = join(raiz, 'src', 'assets', 'images');
const forzar = process.argv.includes('--forzar');

const tonos = {
  patio: ['#3d5c49', '#6b8f71'],
  cantera: ['#b9a388', '#e2d3bd'],
  barro: ['#8a3a17', '#c97a4a'],
  noche: ['#2b211b', '#5c4e44'],
};

const H = [2000, 1500]; // horizontal 4:3
const V = [1600, 2000]; // vertical 4:5
const C = [1600, 1600]; // cuadrada

/** archivo, tamaño, tono, qué debe mostrar la foto real */
export const fotos = [
  ['fachada.jpg', H, 'cantera', 'Fachada del hotel desde la calle'],
  ['patio-1.jpg', V, 'patio', 'Patio con arcos y plantas (portada)'],
  ['patio-2.jpg', H, 'patio', 'Patio, vista amplia'],
  ['patio-3.jpg', V, 'patio', 'Detalle de plantas y macetas'],
  ['patio-4.jpg', H, 'patio', 'Mesas del patio con gente o servicio'],
  ['habitacion-1.jpg', H, 'cantera', 'Habitación tipo 1'],
  ['habitacion-2.jpg', H, 'cantera', 'Habitación tipo 2'],
  ['habitacion-3.jpg', H, 'cantera', 'Habitación tipo 3'],
  ['recepcion.jpg', H, 'noche', 'Recepción'],
  ['estacionamiento.jpg', H, 'noche', 'Estacionamiento'],
  ['restaurante-1.jpg', H, 'barro', 'Salón del restaurante'],
  ['restaurante-2.jpg', V, 'barro', 'Mesa servida en el patio'],
  ['chilaquiles.jpg', C, 'barro', 'Chilaquiles'],
  ['huevos-rancheros.jpg', C, 'barro', 'Huevos rancheros'],
  ['capuchino.jpg', C, 'barro', 'Capuchino'],
  ['panaderia.jpg', C, 'barro', 'Pan de la casa'],
  ['bar.jpg', H, 'noche', 'Bar'],
];

function svg(archivo, [ancho, alto], tono, descripcion) {
  const [a, b] = tonos[tono];
  const t = Math.round(ancho / 22);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${ancho}" height="${alto}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <g fill="#ffffff" font-family="Arial, Helvetica, sans-serif" text-anchor="middle">
    <text x="50%" y="${alto / 2 - t * 1.3}" font-size="${t * 0.7}" opacity="0.85">FOTO PENDIENTE</text>
    <text x="50%" y="${alto / 2}" font-size="${t}" font-weight="700">${archivo}</text>
    <text x="50%" y="${alto / 2 + t * 1.3}" font-size="${t * 0.6}" opacity="0.85">${descripcion}</text>
    <text x="50%" y="${alto / 2 + t * 2.3}" font-size="${t * 0.5}" opacity="0.7">mínimo ${ancho} × ${alto} px</text>
  </g>
</svg>`;
}

async function existe(ruta) {
  try {
    await access(ruta);
    return true;
  } catch {
    return false;
  }
}

await mkdir(carpeta, { recursive: true });

let creadas = 0;
for (const [archivo, medida, tono, descripcion] of fotos) {
  const destino = join(carpeta, archivo);
  if (!forzar && (await existe(destino))) continue;
  await sharp(Buffer.from(svg(archivo, medida, tono, descripcion)))
    .jpeg({ quality: 70, mozjpeg: true })
    .toFile(destino);
  creadas += 1;
  console.log('creada', archivo);
}

console.log(creadas === 0 ? 'No faltaba ningún marcador.' : `${creadas} marcadores creados en src/assets/images/`);
