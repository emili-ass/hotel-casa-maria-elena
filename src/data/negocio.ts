/**
 * DATOS DEL NEGOCIO
 * -----------------------------------------------------------------------
 * Este es el único archivo que hay que editar para cambiar teléfonos,
 * horarios, servicios o precios. El diseño los lee de aquí.
 *
 * Reglas:
 *  - Un dato que falta se deja en `null`. El sitio mostrará en su lugar
 *    una etiqueta amarilla "[POR CONFIRMAR: …]" para que no pase
 *    desapercibido.
 *  - Los datos marcados con el comentario "POR CONFIRMAR" sí se muestran,
 *    pero el hotel todavía debe validarlos. Están listados en PENDIENTES.md.
 *  - Los textos que cambian con el idioma llevan dos versiones: `es` y `en`.
 */

export type Idioma = 'es' | 'en';
export type Bilingue = Record<Idioma, string>;

export interface Telefono {
  /** Como se muestra en pantalla. */
  visible: string;
  /** Formato internacional para enlaces `tel:` (con +52 y sin espacios). */
  enlace: string;
}

export const sitio = {
  url: 'https://www.hmariaelena.com',
  idiomaPrincipal: 'es' as Idioma,

  /**
   * Medición de visitas y de clics con Google Analytics 4.
   * Poner aquí el ID de medición (empieza con 'G-') para activarla.
   * Mientras sea `null` el sitio no carga ningún código de medición.
   * Ver README, sección "Medición".
   */
  googleAnalytics: null as string | null,
};

/* -----------------------------------------------------------------------
   HOTEL
------------------------------------------------------------------------ */
export const hotel = {
  nombre: 'Hotel Casa María Elena',
  nombreCorto: 'Casa María Elena',
  lema: {
    es: 'Siéntete como en casa',
    en: 'Feel at home',
  } satisfies Bilingue,
  estilo: {
    es: 'Hotel colonial en el Centro Histórico de Durango',
    en: 'A colonial hotel in Durango’s Historic Center',
  } satisfies Bilingue,

  direccion: {
    calle: 'Pino Suárez #804 Oriente',
    colonia: 'Zona Centro',
    codigoPostal: '34000',
    ciudad: 'Durango',
    estado: 'Durango',
    estadoCorto: 'Dgo.',
    pais: 'México',
    codigoPais: 'MX',
  },

  // POR CONFIRMAR: el sitio anterior enlazaba a otro número (618 810 0069).
  telefono: {
    visible: '(618) 818-1219',
    enlace: '+526188181219',
  } satisfies Telefono,

  /**
   * WhatsApp del hotel para reservaciones.
   * Formato: código de país + 10 dígitos, sin signos ni espacios.
   * Ejemplo: '5216181234567' NO; '526181234567' SÍ.
   * Mientras sea `null`, los botones de WhatsApp abren la app sin
   * destinatario y el pie muestra la etiqueta "[POR CONFIRMAR]".
   */
  whatsapp: null as string | null,

  correo: 'contacto@hmariaelena.com',
  facebook: 'https://www.facebook.com/hmariaelenadurango',

  // POR CONFIRMAR: Booking indica 19 habitaciones en 3 pisos.
  totalHabitaciones: 20,
  capacidadHuespedes: 72,

  // POR CONFIRMAR con el hotel.
  checkIn: '15:00',
  checkOut: '12:00',
  aceptaMascotas: false,

  /** Política de cancelación. `null` = por confirmar. */
  cancelacion: null as Bilingue | null,

  cercania: {
    es: 'A unos 15 minutos caminando de la Catedral y de Paseo Durango',
    en: 'About a 15-minute walk from the Cathedral and Paseo Durango',
  } satisfies Bilingue,

  servicios: [
    { clave: 'wifi', es: 'WiFi de alta velocidad', en: 'High-speed WiFi' },
    { clave: 'clima', es: 'Aire acondicionado y calefacción', en: 'Air conditioning and heating' },
    { clave: 'agua-caliente', es: 'Agua caliente', en: 'Hot water' },
    { clave: 'tv', es: 'TV por cable', en: 'Cable TV' },
    { clave: 'recepcion', es: 'Recepción 24 horas', en: '24-hour front desk' },
    { clave: 'facturacion', es: 'Facturación', en: 'Invoicing (factura)' },
    { clave: 'cafe', es: 'Café 24 horas', en: 'Coffee available 24 hours' },
    { clave: 'agua', es: 'Botellas de agua de cortesía', en: 'Complimentary bottled water' },
    { clave: 'estacionamiento', es: 'Estacionamiento gratis', en: 'Free parking' },
    { clave: 'familiares', es: 'Habitaciones familiares', en: 'Family rooms' },
    { clave: 'no-fumar', es: 'Cuartos para no fumadores', en: 'Non-smoking rooms' },
    { clave: 'servicio-habitacion', es: 'Servicio a la habitación', en: 'Room service' },
    { clave: 'bar', es: 'Bar', en: 'Bar' },
  ],

  /** Enlace al perfil del hotel en Google Maps. `null` = por confirmar. */
  perfilGoogle: null as string | null,

  /** Texto con el que Google Maps ubica al hotel (mapa y "Cómo llegar"). */
  busquedaMapa: 'Hotel Casa María Elena, Pino Suárez 804 Ote, Zona Centro, 34000 Durango, Dgo., México',
};

/* -----------------------------------------------------------------------
   RESTAURANTE
------------------------------------------------------------------------ */
export const restaurante = {
  nombre: 'Rincón Ma’ Elena',
  descripcion: {
    es: 'Cocina mexicana: desayunos, comidas, panadería y bar',
    en: 'Mexican cooking: breakfast, lunch, fresh bread and a bar',
  } satisfies Bilingue,

  telefono: {
    visible: '618 130 9718',
    enlace: '+526181309718',
  } satisfies Telefono,

  /**
   * WhatsApp del restaurante (mismo formato que el del hotel).
   * POR CONFIRMAR si el 618 130 9718 recibe WhatsApp.
   */
  whatsapp: null as string | null,

  horario: {
    abre: '08:00',
    cierra: '22:00',
    dias: {
      es: 'Todos los días',
      en: 'Every day',
    } satisfies Bilingue,
    /** Días que abre, en inglés, para Google. Debe coincidir con `dias`. */
    diasAbierto: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  },

  /** Calificación pública en Google. Actualizar cuando cambie. */
  calificacionGoogle: {
    promedio: 4.3,
    total: {
      es: 'casi 1,000 reseñas',
      en: 'nearly 1,000 reviews',
    } satisfies Bilingue,
    /** Enlace al perfil del restaurante en Google. `null` = por confirmar. */
    perfil: null as string | null,
  },

  /** Texto con el que Google Maps ubica al restaurante. */
  busquedaMapa: 'Rincón Ma Elena, Pino Suárez 804 Ote, Zona Centro, 34000 Durango, Dgo., México',

  /** Lo que más mencionan los clientes en sus reseñas. */
  destacados: [
    { clave: 'patio', es: 'El patio lleno de plantas', en: 'The plant-filled patio' },
    { clave: 'chilaquiles', es: 'Chilaquiles', en: 'Chilaquiles' },
    { clave: 'huevos-rancheros', es: 'Huevos rancheros', en: 'Huevos rancheros' },
    { clave: 'capuchino', es: 'Capuchino', en: 'Cappuccino' },
    { clave: 'ambiente', es: 'Ambiente familiar', en: 'Family atmosphere' },
    { clave: 'personal', es: 'Personal atento', en: 'Attentive staff' },
  ],
};

/* -----------------------------------------------------------------------
   MENSAJES DE WHATSAPP
   Texto que ya va escrito cuando alguien toca un botón de WhatsApp.
   Cada mensaje dice que la persona viene del sitio web: así recepción
   sabe cuántas reservaciones llegan por esta vía.
   Las partes entre llaves se reemplazan solas: {tipo}, {fecha}.
------------------------------------------------------------------------ */
export const mensajesWhatsApp = {
  general: {
    es: 'Hola, vi su sitio web y quiero información del Hotel Casa María Elena.',
    en: 'Hello, I found you through your website and would like some information about Hotel Casa María Elena.',
  },
  habitacion: {
    es: 'Hola, vi su sitio web y quiero reservar una habitación {tipo} para el {fecha}.',
    en: 'Hello, I found you through your website and would like to book a {tipo} room for {fecha}.',
  },
  reservar: {
    es: 'Hola, vi su sitio web y quiero reservar una habitación para el [fecha].',
    en: 'Hello, I found you through your website and would like to book a room for [date].',
  },
  restaurante: {
    es: 'Hola, vi su sitio web y quiero información del restaurante Rincón Ma’ Elena.',
    en: 'Hello, I found you through your website and would like some information about Rincón Ma’ Elena restaurant.',
  },
} satisfies Record<string, Bilingue>;

export type IntencionWhatsApp = keyof typeof mensajesWhatsApp;
