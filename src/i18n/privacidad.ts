/**
 * TEXTO DEL AVISO DE PRIVACIDAD
 * -----------------------------------------------------------------------
 * BORRADOR. Describe lo que este sitio hace hoy con los datos personales,
 * siguiendo la estructura que pide la ley mexicana (LFPDPPP). Antes de
 * publicar debe revisarlo quien lleve los asuntos legales del hotel y
 * hay que llenar la razón social y el domicilio del responsable.
 *
 * Cada sección tiene un título y sus párrafos. `pendiente` muestra la
 * etiqueta amarilla "[POR CONFIRMAR: …]" al final de la sección.
 * La versión en español es la que rige; la inglesa es una traducción.
 */
import { hotel, type Idioma } from '../data/negocio';

export interface SeccionAviso {
  titulo: string;
  parrafos: string[];
  pendiente?: string;
}

const d = hotel.direccion;
const domicilio = `${d.calle}, ${d.colonia}, C.P. ${d.codigoPostal}, ${d.ciudad}, ${d.estado}, ${d.pais}`;

export const aviso: Record<Idioma, { nota?: string; secciones: SeccionAviso[] }> = {
  es: {
    secciones: [
      {
        titulo: 'Quién es responsable de tus datos',
        parrafos: [
          `${hotel.nombre}, con domicilio en ${domicilio}, es responsable del uso y la protección de los datos personales que nos compartes.`,
        ],
        pendiente: 'razón social y domicilio fiscal del responsable',
      },
      {
        titulo: 'Qué datos recibimos',
        parrafos: [
          'Recibimos los datos que tú nos das al llenar el formulario de contacto, al escribirnos por WhatsApp o correo, o al llamarnos: tu nombre, tu correo electrónico, tu teléfono y el contenido de tu mensaje, incluidas las fechas de tu estancia.',
          'No pedimos datos personales sensibles a través de este sitio.',
        ],
      },
      {
        titulo: 'Para qué los usamos',
        parrafos: [
          'Usamos tus datos para responder tu mensaje, gestionar tu reservación y, si la solicitas, emitir tu factura.',
          'No los usamos para enviarte publicidad.',
        ],
      },
      {
        titulo: 'Con quién se comparten',
        parrafos: [
          'No vendemos tus datos ni los compartimos con terceros, salvo que una autoridad lo requiera conforme a la ley.',
          'El formulario de este sitio se procesa a través del proveedor que lo aloja, y WhatsApp es un servicio de Meta. Ambos tratan los datos según sus propias políticas de privacidad.',
        ],
        pendiente: 'proveedores que procesan datos (alojamiento, correo, medición)',
      },
      {
        titulo: 'Tus derechos',
        parrafos: [
          `Puedes pedir en cualquier momento conocer, corregir o eliminar tus datos, u oponerte a su uso (derechos ARCO). Escríbenos a ${hotel.correo} con tu nombre y tu solicitud.`,
        ],
        pendiente: 'plazo y procedimiento de respuesta a solicitudes ARCO',
      },
      {
        titulo: 'Cookies',
        parrafos: [
          'Este sitio no usa cookies de publicidad. El mapa de Google que aparece en algunas páginas puede usar cookies propias de Google.',
        ],
        pendiente: 'herramienta de medición de visitas, si se instala',
      },
      {
        titulo: 'Cambios a este aviso',
        parrafos: ['Cualquier cambio a este aviso se publicará en esta misma página.'],
        pendiente: 'fecha de última actualización',
      },
    ],
  },
  en: {
    nota: 'This is a translation. The Spanish version of this notice is the one that applies.',
    secciones: [
      {
        titulo: 'Who is responsible for your data',
        parrafos: [
          `${hotel.nombre}, located at ${domicilio}, is responsible for the use and protection of the personal data you share with us.`,
        ],
        pendiente: 'razón social y domicilio fiscal del responsable',
      },
      {
        titulo: 'What data we receive',
        parrafos: [
          'We receive the data you give us when you fill in the contact form, write to us on WhatsApp or by email, or call us: your name, your email address, your phone number and the content of your message, including the dates of your stay.',
          'We do not ask for sensitive personal data through this site.',
        ],
      },
      {
        titulo: 'What we use it for',
        parrafos: [
          'We use your data to reply to your message, manage your booking and, if you request one, issue your invoice.',
          'We do not use it to send you advertising.',
        ],
      },
      {
        titulo: 'Who it is shared with',
        parrafos: [
          'We do not sell your data or share it with third parties, unless an authority requires it under the law.',
          'The form on this site is processed through the provider that hosts it, and WhatsApp is a Meta service. Both handle data under their own privacy policies.',
        ],
        pendiente: 'proveedores que procesan datos (alojamiento, correo, medición)',
      },
      {
        titulo: 'Your rights',
        parrafos: [
          `You may ask at any time to access, correct or delete your data, or to object to its use (known in Mexico as ARCO rights). Write to ${hotel.correo} with your name and your request.`,
        ],
        pendiente: 'plazo y procedimiento de respuesta a solicitudes ARCO',
      },
      {
        titulo: 'Cookies',
        parrafos: [
          'This site does not use advertising cookies. The Google map shown on some pages may use Google’s own cookies.',
        ],
        pendiente: 'herramienta de medición de visitas, si se instala',
      },
      {
        titulo: 'Changes to this notice',
        parrafos: ['Any change to this notice will be published on this page.'],
        pendiente: 'fecha de última actualización',
      },
    ],
  },
};
