export const APP_DATA = {
  name: "Dra. Dina Reyes",
  role: "Doctora Fisiatra Dina Reyes",
};

export const SEO_DATA = {
  title: "Dra. Dina Reyes | Fisiatra y Logopedia en Estelí",
  description:
    "Recupera tu libertad de movimiento y habla con confianza. Tratamientos cercanos, no invasivos y para todas las edades.",
};

export const NAVBAR_DATA = {
  logoAlt: APP_DATA.role,
  logoSrc: "/public/IMAGOTIPO-MULTICOLOR-HORIZONTAL-BLOQUE.svg",
  links: [
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Conóceme" },
    { href: "#recursos", label: "E-books & Tips" },
  ],
  ctaBtn: "Agenda tu cita",
  ctaHref: "#contacto",
};

export const HERO_DATA = {
  badge: "Bienestar Integral",
  titlePrimary: "Recupera tu ",
  titleHighlight: "libertad",
  titleSecondary: " y vive sin limitaciones.",
  description:
    "Tratamientos no invasivos para todas las edades. Empatía, profesionalismo y educación para que retomes el control de tu cuerpo, ya sea presencial o desde casa.",
  ctaPrimary: "Agenda tu cita presencial",
  ctaSecondary: "Terapia Online (Nacional)",
  trustIndicators: ["Atención Empática", "Para todas las edades (0-65)"],
  stats: {
    number: "+1000",
    label: "Pacientes recuperados",
  },
};

export const SERVICES_DATA = {
  badge: "Acompañamiento ",
  badgeHighlight: "Especializado",
  description:
    "Un enfoque humano y profesional orientado a tratar la raíz del dolor o limitación, sin fricciones y a tu ritmo.",
  servicesList: [
    {
      title: "Fisiatría Integral",
      description:
        "Evaluación y tratamiento no invasivo para recuperar la movilidad perdida por lesiones musculares, articulares o neurológicas.",
    },
    {
      title: "Logopedia",
      description:
        "Tratamientos empáticos y pacientes para superar trastornos del habla, lenguaje y la comunicación en niños y adultos.",
    },
    {
      title: "Terapia Online",
      description:
        "Consultas accesibles sin importar dónde estés (Nivel Nacional). Recibe orientación, ejercicios terapéuticos y seguimiento sin salir de casa.",
    },
    {
      title: "Intervención Temprana",
      description:
        "Atención a recién nacidos y niños (0-12 años) con enfoque respetuoso para potenciar su desarrollo psicomotor y cognitivo natural.",
    },
  ],
};

export const LEAD_MAGNET_DATA = {
  title: "Potencia tu recuperación desde hoy con nuestra comunidad.",
  description:
    "Cuidar tu cuerpo empieza con la información correcta. Descarga gratis mis ",
  descriptionBold: "E-books y Tips prácticos",
  descriptionEnd:
    " para aliviar lesiones comunes, mejorar la postura en la oficina, y ejercicios en casa.",
  benefits: [
    "Guía para manejo del estrés físico y cervical (E-book)",
    "Tips de habla y estimulación temprana",
    "Rutinas en video para pausas activas",
  ],
  formBox: {
    badge: "100% Gratis",
    title: "Accede al contenido",
    subtitle: "Déjame tu correo y te enviaré el material de inmediato.",
    nameLabel: "Nombre",
    namePlaceholder: "Tu nombre",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "Tu correo electrónico",
    btnText: "¡Quiero el material!",
    footerWarning: "Tus datos están seguros. Odiamos el spam tanto como tú.",
  },
};

export const FOOTER_DATA = {
  brandName: APP_DATA.name,
  description:
    "Recupera tu libertad y bienestar con empatía y atención no invasiva, para ti y para tu familia.",
  quickLinks: {
    title: "Enlaces Rápidos",
    links: [
      { href: "#servicios", label: "Servicios" },
      { href: "#nosotros", label: "Conóceme" },
      { href: "#online", label: "Terapia Online" },
      { href: "#recursos", label: "Recursos Gratuitos" },
    ],
  },
  services: {
    title: "Servicios",
    list: [
      "Rehabilitación Física",
      "Tratamientos Neurológicos",
      "Terapia de Lenguaje (Logopedia)",
      "Estimulación Temprana",
    ],
  },
  contact: {
    title: "Contacto",
    locations: [
      {
        city: "Ocotal",
        mapUrl:
          "https://www.google.com/maps/place/Cl%C3%ADnica+Radiom%C3%A9dica+Bautista/@13.6280418,-86.4764999,19.94z/data=!4m6!3m5!1s0x8f6e1b005dcbf3ef:0x7e5e621b5e6b0ac6!8m2!3d13.6281841!4d-86.4762502!16s%2Fg%2F11mrtth6kk?entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        city: "Estelí",
        mapUrl:
          "https://www.google.com/maps/@13.0898896,-86.3545098,21z?hl=en&entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D",
      },
    ],
    addressText: "Clínica de Rehabilitación Central, Estelí, Nicaragua",
    phone: {
      text: "+505 8403 7542",
      url: "https://wa.me/50584037542?text=Hola,%20me%20interesa%20agendar%20agendar%20una%20cita",
    },
    email: {
      text: "dinaerg20@gmail.com",
      url: "mailto:dinaerg20@gmail.com?subject=Asunto%20Correo&body=Hola,%20me%20interesa%20agendar%20una%20cita.",
    },
  },
  copyright: `© ${new Date().getFullYear()} ${APP_DATA.name}. Todos los derechos reservados.`,
  legal: [
    { href: "#", label: "Privacidad" },
    { href: "#", label: "Términos" },
  ],
};
