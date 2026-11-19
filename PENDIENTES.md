# Pendientes del sitio

Todo lo que falta confirmar con el hotel antes de publicar. En el sitio, cada dato que falta aparece con una etiqueta amarilla `[POR CONFIRMAR: …]`; al llenarlo en `src/data/negocio.ts` la etiqueta desaparece sola.

## Mensaje listo para enviar al hotel

> Hola. Para terminar el sitio nuevo necesito estos datos antes del **[fecha límite]**:
>
> 1. **WhatsApp para reservaciones del hotel.** ¿Qué número es, quién lo contesta, en qué horario y puede responder en inglés?
> 2. **Teléfono fijo.** ¿Cuál es el correcto: (618) 818-1219 o 618 810 0069?
> 3. **Habitaciones.** Tipos que manejan, cuántas personas caben en cada una, qué camas tienen y precio por noche (con impuestos incluidos).
> 4. **Número total de habitaciones.** ¿Son 20 o 19? ¿La capacidad total es de 72 huéspedes?
> 5. **Menú del restaurante.** Una foto o el archivo del menú actual, con precios.
> 6. **WhatsApp del restaurante.** ¿El 618 130 9718 recibe WhatsApp?
> 7. **Fotos.** Unas 15 a 20: fachada, patio, cada tipo de habitación, recepción, estacionamiento, restaurante y platillos. Pueden ser de celular, horizontales y con buena luz.
> 8. **Políticas.** Confirmar entrada 15:00, salida 12:00 y que no se aceptan mascotas. ¿Cuál es la política de cancelación? ¿Piden anticipo para apartar?
> 9. **Google.** El enlace al perfil del hotel y al del restaurante en Google Maps.
> 10. **Dominio.** ¿Quién tiene el acceso a hmariaelena.com y al correo contacto@hmariaelena.com?
> 11. **Aviso de privacidad.** Razón social y domicilio fiscal del responsable.

## Datos por confirmar

| # | Dato | Estado actual en el sitio | Dónde se cambia |
|---|---|---|---|
| 1 | WhatsApp del hotel | Falta. Los botones abren WhatsApp sin destinatario | `hotel.whatsapp` |
| 2 | Teléfono del hotel | Se muestra (618) 818-1219; el sitio anterior enlazaba al 618 810 0069 | `hotel.telefono` |
| 3 | Total de habitaciones y capacidad | 20 habitaciones, 72 huéspedes; Booking dice 19 en 3 pisos | `hotel.totalHabitaciones`, `hotel.capacidadHuespedes` |
| 4 | Tipos de habitación, camas, capacidad y precios | Falta. Hay 3 tarjetas de ejemplo ("Habitación tipo 1, 2 y 3") con etiquetas amarillas | `src/data/habitaciones.ts` |
| 4b | Servicios dentro del cuarto | Cada tarjeta muestra WiFi, aire acondicionado y calefacción, agua caliente, TV por cable y agua de cortesía; confirmar que aplican a todos los tipos | `servicios` en `src/data/habitaciones.ts` |
| 4c | Descripción de cada foto de habitación | Texto provisional; reescribir cuando lleguen las fotos reales | `fotoAlt` en `src/data/habitaciones.ts` |
| 5 | Check-in 15:00, check-out 12:00, sin mascotas | Se muestran, sin confirmar | `hotel.checkIn`, `hotel.checkOut`, `hotel.aceptaMascotas` |
| 6 | Política de cancelación y anticipo | Falta | `hotel.cancelacion` |
| 7 | WhatsApp del restaurante | Falta. No se sabe si el 618 130 9718 recibe WhatsApp | `restaurante.whatsapp` |
| 8 | Menú y precios del restaurante | Falta. La página del menú solo lista chilaquiles, huevos rancheros y capuchino (mencionados en reseñas), sin precio; las demás secciones están vacías | `src/data/menu.ts` |
| 8b | Secciones del menú | Desayunos, Comidas, Panadería y Bar vienen del encargo; la sección "Café" es provisional | `src/data/menu.ts` |
| 8c | Aviso amarillo del menú | Se quita cambiando `menuConfirmado` a `true` cuando el menú esté completo | `src/data/menu.ts` |
| 9 | Reseñas reales de 5 estrellas | Falta. Hay 3 tarjetas de ejemplo marcadas `[POR CONFIRMAR: reseña real]`; no son reseñas reales. Conseguir entre 6 y 10, con nombre, fecha y texto tal cual, de hotel y de restaurante, algunas en inglés | `src/data/resenas.ts` |
| 10 | Enlace al perfil de Google del hotel | Falta | `hotel.perfilGoogle` |
| 11 | Enlace al perfil de Google del restaurante | Falta. Mientras tanto, "Ver todas en Google" abre la búsqueda del restaurante en Google Maps | `restaurante.calificacionGoogle.perfil` |
| 12 | Calificación de Google | Se muestra 4.3 con "casi 1,000 reseñas"; revisar la cifra al publicar | `restaurante.calificacionGoogle` |
| 12b | Ubicación en el mapa | Google ubica al hotel con el texto de búsqueda; el mapa lo muestra como "Hotel Casa Ma Elena". Confirmar que el pin cae en el lugar correcto | `hotel.busquedaMapa` |
| 13 | Aviso de privacidad | Es un borrador. Falta la razón social y el domicilio fiscal del responsable, los proveedores que procesan datos, el procedimiento ARCO, la fecha de actualización y una revisión legal | `src/i18n/privacidad.ts` |
| 13b | Facturación | Solo dice que el hotel emite factura; falta cómo y hasta cuándo solicitarla | Texto en `src/i18n/textos.ts` (bloque `politicas`) |
| 13c | Lugares cercanos | Lista propuesta de 8 sitios conocidos del Centro Histórico; el hotel debe validarla. Solo la Catedral y Paseo Durango llevan tiempo a pie (el dato del encargo); los demás abren la ruta en Google Maps | `src/data/lugares.ts` |
| 13d | Formulario de contacto | Funciona al publicar en Netlify y llega al correo que se configure ahí. Confirmar quién lee ese correo y con qué frecuencia; si nadie lo atiende, conviene quitarlo | `src/vistas/Ubicacion.astro` |
| 13e | Descripciones de las fotos de la galería | Provisionales: dicen lo que cada foto debería mostrar. Reescribir con las fotos reales | `src/data/galeria.ts` |
| 14 | Medición de visitas y clics | Lista para Google Analytics 4, apagada. Se activa con el ID de medición; si se activa, mencionarlo en el aviso de privacidad | `sitio.googleAnalytics` |
| 15 | Redirecciones del sitio anterior | Ya están las tres direcciones públicas de Wix: `/contacto`, `/comidasycenas` y `/reserva-tu-habitacion`. Confirmar que no haya otras en uso (anuncios, redes, códigos QR impresos) | `netlify.toml` |
| 16 | Fotos para compartir en redes | Usan la fachada (hotel) y el patio (restaurante), hoy de marcador | Fotos `fachada.jpg` y `patio-2.jpg` |
| 17 | Rendimiento con fotos reales | Lighthouse da 100 con marcadores; volver a medir con las fotos reales | Ver README, sección Calidad |

## Operación (no es del sitio, pero decide si funciona)

- **Quién contesta el WhatsApp**, en qué horario, en cuánto tiempo y si responde en inglés. Los mensajes de la versión en inglés llegan escritos en inglés.
- **Cómo se garantiza una reserva** hecha por WhatsApp: anticipo, transferencia o solo palabra.
- **Paridad con Booking**: revisar si el contrato permite publicar una tarifa directa más baja antes de anunciar precios.
- **Quién actualiza el sitio** cuando cambien precios o menú. El personal del hotel no debería editar código: definir si lo hace el desarrollador por una iguala o si se agrega un editor sencillo.
- **Dominio y migración**: quién controla el dominio, el correo y la ficha de Google. Al publicar, apuntar el dominio a Netlify y actualizar el sitio web en las fichas de Google del hotel y del restaurante.
- **Calificación del hotel en Google**: el mapa muestra al hotel con 3.7 estrellas y unas 619 reseñas; el 4.3 es del restaurante. El sitio solo publica la del restaurante.
- **Permisos**: autorización para reproducir reseñas y para usar las fotos.

## Fotos por conseguir

Hoy el sitio usa imágenes de marcador con el nombre del archivo escrito encima. Para reemplazar una, guarda la foto real en `src/assets/images/` con **el mismo nombre de archivo**.

| Archivo | Qué debe mostrar | Orientación | Tamaño mínimo |
|---|---|---|---|
| `fachada.jpg` | Fachada del hotel desde la calle | Horizontal | 2000 × 1500 |
| `patio-1.jpg` | Patio con arcos y plantas (portada del sitio) | Vertical | 1600 × 2000 |
| `patio-2.jpg` | Patio, vista amplia | Horizontal | 2000 × 1500 |
| `patio-3.jpg` | Detalle de plantas y macetas | Vertical | 1600 × 2000 |
| `patio-4.jpg` | Mesas del patio con gente o servicio | Horizontal | 2000 × 1500 |
| `habitacion-1.jpg` | Habitación tipo 1 | Horizontal | 2000 × 1500 |
| `habitacion-2.jpg` | Habitación tipo 2 | Horizontal | 2000 × 1500 |
| `habitacion-3.jpg` | Habitación tipo 3 | Horizontal | 2000 × 1500 |
| `recepcion.jpg` | Recepción | Horizontal | 2000 × 1500 |
| `estacionamiento.jpg` | Estacionamiento | Horizontal | 2000 × 1500 |
| `restaurante-1.jpg` | Salón del restaurante | Horizontal | 2000 × 1500 |
| `restaurante-2.jpg` | Mesa servida en el patio | Vertical | 1600 × 2000 |
| `chilaquiles.jpg` | Chilaquiles | Cuadrada | 1600 × 1600 |
| `huevos-rancheros.jpg` | Huevos rancheros | Cuadrada | 1600 × 1600 |
| `capuchino.jpg` | Capuchino | Cuadrada | 1600 × 1600 |
| `panaderia.jpg` | Pan de la casa | Cuadrada | 1600 × 1600 |
| `bar.jpg` | Bar | Horizontal | 2000 × 1500 |

Los nombres `habitacion-1`, `-2` y `-3` son provisionales: se renombran cuando el hotel confirme los tipos de habitación.
