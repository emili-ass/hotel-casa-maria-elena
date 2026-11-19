import {
  hotel,
  restaurante,
  mensajesWhatsApp,
  type Idioma,
  type IntencionWhatsApp,
} from '../data/negocio';

export type DestinoWhatsApp = 'hotel' | 'restaurante';

interface Opciones {
  intencion: IntencionWhatsApp;
  idioma: Idioma;
  destino?: DestinoWhatsApp;
  /** Valores para las partes entre llaves del mensaje: {tipo}, {fecha}. */
  datos?: Record<string, string>;
}

/** Texto del mensaje ya escrito, con sus datos reemplazados. */
export function mensajeWhatsApp({ intencion, idioma, datos = {} }: Opciones): string {
  let mensaje: string = mensajesWhatsApp[intencion][idioma];
  for (const [clave, valor] of Object.entries(datos)) {
    mensaje = mensaje.replaceAll(`{${clave}}`, valor);
  }
  return mensaje;
}

/**
 * Enlace que abre WhatsApp con el mensaje listo.
 * Si el número todavía no está en negocio.ts, WhatsApp se abre sin
 * destinatario: sirve para probar el mensaje, no para publicar.
 */
export function enlaceWhatsApp(opciones: Opciones): string {
  const texto = encodeURIComponent(mensajeWhatsApp(opciones));
  return `${baseWhatsApp(opciones.destino)}?text=${texto}`;
}

/** Dirección de WhatsApp del hotel o del restaurante, sin mensaje. */
export function baseWhatsApp(destino: DestinoWhatsApp = 'hotel'): string {
  const numero = destino === 'restaurante' ? restaurante.whatsapp : hotel.whatsapp;
  return `https://wa.me/${numero ?? ''}`;
}

/** Enlace de Google Maps con la ruta hacia el hotel. */
export function enlaceComoLlegar(): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(hotel.busquedaMapa)}`;
}

/** Nombre del evento de medición para un clic de WhatsApp. */
export function eventoWhatsApp(opciones: Pick<Opciones, 'intencion' | 'destino'>): string {
  return `whatsapp_${opciones.destino ?? 'hotel'}_${opciones.intencion}`;
}

/**
 * Enlace para ver todas las reseñas del restaurante en Google.
 * Usa el perfil de negocio.ts; si aún no está, abre la búsqueda del
 * restaurante en Google Maps.
 */
export function enlaceResenasGoogle(): string {
  return (
    restaurante.calificacionGoogle.perfil ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurante.busquedaMapa)}`
  );
}
