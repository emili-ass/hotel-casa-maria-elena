# Hotel Casa María Elena · Rincón Ma' Elena

Sitio web del Hotel Casa María Elena y de su restaurante Rincón Ma' Elena, en Durango, Dgo. Es un sitio estático hecho con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com), en español (`/`) y en inglés (`/en/`).

> **Antes de publicar:** el sitio tiene datos y fotos de marcador. Todo lo que falta está en [PENDIENTES.md](PENDIENTES.md).

## Correrlo en tu computadora

Necesitas [Node.js](https://nodejs.org) 22.23 o más reciente.

```bash
npm install
npm run dev
```

Abre http://localhost:4321. La versión en inglés está en http://localhost:4321/en/.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Sitio en modo desarrollo; se actualiza al guardar cambios |
| `npm run build` | Genera el sitio final en la carpeta `dist/` |
| `npm run preview` | Sirve `dist/` para revisar el sitio tal como quedará publicado |
| `npm run check` | Revisa errores de tipos en el código |
| `npm run marcadores` | Crea las fotos de marcador que falten |

## Cambiar datos sin tocar el diseño

Todo el contenido vive en archivos de datos. Cada uno trae instrucciones y un ejemplo al inicio.

| Qué quieres cambiar | Archivo |
|---|---|
| Teléfonos, WhatsApp, correo, dirección, horarios, servicios, check-in y check-out, calificación de Google | [src/data/negocio.ts](src/data/negocio.ts) |
| Tipos de habitación, camas, capacidad y precios | [src/data/habitaciones.ts](src/data/habitaciones.ts) |
| Menú del restaurante y precios | [src/data/menu.ts](src/data/menu.ts) |
| Reseñas de clientes | [src/data/resenas.ts](src/data/resenas.ts) |
| Lugares cercanos | [src/data/lugares.ts](src/data/lugares.ts) |
| Fotos de la galería y sus descripciones | [src/data/galeria.ts](src/data/galeria.ts) |
| Textos de botones, títulos y párrafos (español e inglés) | [src/i18n/textos.ts](src/i18n/textos.ts) |
| Aviso de privacidad | [src/i18n/privacidad.ts](src/i18n/privacidad.ts) |

### Las etiquetas amarillas `[POR CONFIRMAR: …]`

Un dato que falta se guarda como `null` y el sitio muestra en su lugar una etiqueta amarilla. Al escribir el dato real, la etiqueta desaparece sola. Para encontrar las que quedan, busca `POR CONFIRMAR` en el sitio o revisa [PENDIENTES.md](PENDIENTES.md).

### El número de WhatsApp

En `negocio.ts`, `hotel.whatsapp` y `restaurante.whatsapp` van con código de país y sin signos: `'526181234567'`.

- Mientras el del hotel sea `null`, los botones abren WhatsApp sin destinatario. **No publiques así.**
- Mientras el del restaurante sea `null`, sus páginas muestran un botón de "Llamar" en lugar de WhatsApp.

Los mensajes que ya van escritos están en `mensajesWhatsApp`, en el mismo archivo. Todos dicen "vi su sitio web" para que recepción sepa de dónde llega cada reservación.

### Las reseñas

El carrusel muestra **solo reseñas de 5 estrellas**, aunque el archivo tenga otras. Copia cada reseña tal como aparece en su fuente, sin editarla. Las tres que hay hoy son ejemplos de formato: llevan `pendiente: true` y hay que reemplazarlas.

## Fotos

Las fotos están en `src/assets/images/`. Hoy son marcadores de color con el nombre del archivo escrito encima.

Para poner una foto real, guárdala en esa carpeta **con el mismo nombre de archivo** (por ejemplo `patio-1.jpg`). Astro genera solo las versiones AVIF y WebP en varios tamaños; no hace falta optimizarlas a mano. La lista completa, con orientación y tamaño mínimo, está en [PENDIENTES.md](PENDIENTES.md).

Al cambiar una foto, actualiza también su descripción (`alt`) para que diga lo que de verdad se ve:

- Galería: [src/data/galeria.ts](src/data/galeria.ts)
- Habitaciones: `fotoAlt` en [src/data/habitaciones.ts](src/data/habitaciones.ts)
- Portadas y platillos: [src/i18n/textos.ts](src/i18n/textos.ts)

## Cómo está organizado

```
src/
  data/         Datos del negocio (lo que más se edita)
  i18n/         Textos en dos idiomas y lista de rutas
  vistas/       Una vista por página (Inicio, Habitaciones, Restaurante…)
  components/   Piezas compartidas (encabezado, pie, carrusel, mapa…)
  layouts/      Plantilla común de todas las páginas
  lib/          Funciones de apoyo (enlaces de WhatsApp y de mapas)
  pages/        Genera las páginas a partir de la lista de rutas
  styles/       Colores, tipografías y estilos globales
  assets/images Fotos
public/         Archivos que se copian tal cual (ícono del sitio)
scripts/        Generador de fotos de marcador
```

### Páginas y direcciones

Las direcciones de cada página, en ambos idiomas, están en [src/i18n/rutas.ts](src/i18n/rutas.ts). Un solo archivo, [src/pages/[...ruta].astro](src/pages/%5B...ruta%5D.astro), genera todas las páginas a partir de esa lista.

Para agregar una página:

1. Añade su clave y sus dos direcciones en `rutas.ts`.
2. Añade su nombre en `paginas`, en `textos.ts` (español e inglés).
3. Crea su vista en `src/vistas/`.
4. Regístrala en `src/pages/[...ruta].astro`.

### Colores y tipografías

Están definidos como variables en [src/styles/global.css](src/styles/global.css). Cambiar un color ahí lo cambia en todo el sitio. Las fuentes (Cormorant Garamond y Figtree) se configuran en [astro.config.mjs](astro.config.mjs) y se sirven desde el propio sitio.

## Medición de visitas y clics

Cada botón importante lleva un nombre de evento, por ejemplo `whatsapp_hotel_reservar_portada` o `llamada_restaurante_menu`. Así se puede saber cuántos clics a WhatsApp genera el sitio y desde dónde.

Para activarla con Google Analytics 4, escribe el ID de medición en `sitio.googleAnalytics`, en [src/data/negocio.ts](src/data/negocio.ts):

```ts
googleAnalytics: 'G-XXXXXXXXXX',
```

Mientras sea `null`, el sitio no carga ningún código de medición. Si se activa, hay que mencionarlo en el aviso de privacidad, porque Google Analytics usa cookies.

## Publicar en Netlify

El archivo [netlify.toml](netlify.toml) ya trae la configuración: comando de compilación, carpeta de salida, caché y las redirecciones desde las direcciones del sitio anterior.

1. Sube el proyecto a un repositorio de GitHub.
2. En [Netlify](https://app.netlify.com), elige **Add new site → Import an existing project** y selecciona el repositorio. No hay que cambiar ningún ajuste.
3. En **Forms**, activa la detección de formularios y vuelve a publicar. El formulario de contacto se llama `contacto`.
4. En **Forms → Form notifications**, agrega el correo que recibirá los mensajes.
5. En **Domain management**, conecta el dominio `hmariaelena.com`.

Cada cambio que se suba al repositorio se publica solo.

### Publicar en Vercel

También funciona: Vercel detecta Astro sin configuración. Dos diferencias:

- **El formulario de contacto no funciona**, porque depende de Netlify Forms. Hay que cambiarlo por un servicio como Formspree o quitarlo.
- Las redirecciones de `netlify.toml` no aplican; hay que pasarlas a un archivo `vercel.json`.

### Si cambia el dominio

El dominio está en dos lugares: `SITIO` en [astro.config.mjs](astro.config.mjs) y `sitio.url` en [src/data/negocio.ts](src/data/negocio.ts).

## Lista antes de publicar

- [ ] WhatsApp del hotel en `negocio.ts`, y confirmado quién lo contesta.
- [ ] Tipos de habitación y precios reales.
- [ ] Menú real y `menuConfirmado` en `true`.
- [ ] Reseñas reales en lugar de los tres ejemplos.
- [ ] Fotos reales y sus descripciones.
- [ ] Aviso de privacidad revisado y con los datos del responsable.
- [ ] Enlaces a los perfiles de Google.
- [ ] Ninguna etiqueta `[POR CONFIRMAR]` visible en el sitio.
- [ ] Un envío de prueba del formulario ya publicado.
- [ ] En la ficha de Google del hotel y del restaurante, el sitio web apunta al dominio nuevo.

## Quién mantiene el sitio

Cambiar un precio o un platillo es editar un archivo de datos y volver a publicar. Eso requiere a alguien que sepa hacerlo: conviene acordar con el hotel quién recibe los cambios (por ejemplo, por WhatsApp) y cada cuánto se actualiza, para que precios y menú no queden viejos.

## Calidad

Medido con Lighthouse en modo celular sobre el sitio compilado, con las fotos de marcador:

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|
| Inicio (ES y EN) | 100 | 100 | 100 | 100 |
| Habitaciones | 100 | 100 | 100 | 100 |
| Restaurante | 100 | 100 | 100 | 100 |
| Menú | 100 | 100 | 100 | 100 |
| Galería | 100 | 100 | 100 | 100 |
| Ubicación y contacto | 100 | 100 | 100 | 100 |

Las fotos de marcador pesan muy poco. Con fotos reales el rendimiento bajará algo; hay que volver a medir después de cargarlas:

```bash
npm run build
npm run preview
npx lighthouse http://localhost:4321/ --view
```

Otros cuidados que ya trae el sitio:

- Contraste AA en textos y botones.
- Navegación completa con teclado (menú, carrusel, visor de fotos) y enlace "Saltar al contenido".
- Animaciones que se apagan si la persona pidió reducir el movimiento en su sistema.
- Datos estructurados de `Hotel` y `Restaurant` para Google, mapa del sitio y `robots.txt`.
