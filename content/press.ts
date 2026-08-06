export type PressItem = {
  id: string;
  type: "Prensa" | "Reconocimiento" | "Cobertura audiovisual" | "Acompañamiento";
  source: string;
  title: string;
  date: string;
  datePublished: string;
  summary: string;
  href: string;
  cta: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
};

export const pressItems: PressItem[] = [
  {
    id: "la-razon-agricultura-inteligente",
    type: "Prensa",
    source: "La Razón",
    title: "AgroEscudo impulsa la era de la agricultura inteligente",
    date: "16 de mayo de 2026",
    datePublished: "2026-05-16",
    summary:
      "Entrevista sobre AgroEscudo como startup boliviana que desarrolla tecnología de monitoreo para reducir riesgos en almacenamiento de granos, su origen, estado de MVP y acompañamiento de Santa Cruz Innova y CAINCO.",
    href: "https://larazon.bo/energias-negocios/2026/05/16/agroescudo-impulsa-la-agricultura-inteligente/",
    cta: "Leer en La Razón",
    featured: true,
    image: "/images/press-la-razon-social.webp",
    imageAlt: "Pieza de La Razón sobre AgroEscudo y agricultura inteligente"
  },
  {
    id: "la-razon-edicion-impresa",
    type: "Prensa",
    source: "La Razón - Energías & Negocios",
    title: "Edición impresa de la entrevista a AgroEscudo",
    date: "17 de mayo de 2026",
    datePublished: "2026-05-17",
    summary:
      "Página impresa del suplemento Energías & Negocios donde se presenta la propuesta de AgroEscudo para incorporar monitoreo tecnológico en postcosecha.",
    href: "https://epaper.la-razon.com/2026/05/LR17aeecd62ed7cb270282b4d7dfa70cf225/files/basic-html/page29.html",
    cta: "Ver edición impresa",
    image: "/images/press-la-razon-article.webp",
    imageAlt: "Página de la entrevista de AgroEscudo en La Razón"
  },
  {
    id: "bolivia-emprende-agroescudo",
    type: "Prensa",
    source: "Bolivia Emprende",
    title: "AgroEscudo impulsa la agricultura inteligente",
    date: "21 de mayo de 2026",
    datePublished: "2026-05-21",
    summary:
      "Cobertura sobre el problema de almacenamiento, los dispositivos del MVP, pruebas controladas y acompañamiento del ecosistema de innovación.",
    href: "https://boliviaemprende.com/noticias/agroescudo-impulsa-la-agricultura-inteligente",
    cta: "Leer publicación"
  },
  {
    id: "reporte-startup-adaptacion",
    type: "Prensa",
    source: "Reporte Startup | Bolivia & Latam",
    title: "El ecosistema está entrando en la era de la adaptación",
    date: "2 de junio de 2026",
    datePublished: "2026-06-02",
    summary:
      "AgroEscudo fue incluida como solución boliviana que utiliza sensores y monitoreo para reducir riesgos de fermentación y deterioro en almacenamiento.",
    href: "https://reportestartup.substack.com/p/el-ecosistema-esta-entrando-en-la",
    cta: "Ver la edición"
  },
  {
    id: "valores-que-marcan-reporte-startup",
    type: "Prensa",
    source: "Valores que Marcan",
    title: "Valores que Marcan presenta la primera edición de Reporte Startup",
    date: "2 de junio de 2026",
    datePublished: "2026-06-02",
    summary:
      "El lanzamiento editorial menciona a AgroEscudo entre los casos destacados de agricultura inteligente y monitoreo de almacenamiento agrícola.",
    href: "https://valoresquemarcan.com/valores-que-marcan-presenta-la-primera-edicion-de-reporte-startup-una-newsletter-especializada-en-innovacion-emprendimiento-e-inversion/",
    cta: "Ver publicación"
  },
  {
    id: "iica-agrotech-bolivia",
    type: "Reconocimiento",
    source: "IICA Bolivia",
    title: "Participación de AgroEscudo en AgroTECH Bolivia 2026",
    date: "2026",
    datePublished: "2026-07-01",
    summary:
      "Publicación institucional que reconoce la participación de Brayan Mejía y el equipo de AgroEscudo en AgroTECH Bolivia 2026.",
    href: "https://www.facebook.com/IICABol/posts/gracias-brayan-y-al-equipo-de-agroescudo-por-acompa%C3%B1arnos-en-el-agrotechbolivia2/1652338963565803/",
    cta: "Ver publicación"
  },
  {
    id: "sca-agrotech-bolivia",
    type: "Cobertura audiovisual",
    source: "SCA Canal Digital Agropecuario",
    title: "AgroEscudo en AgroTECH Bolivia 2026",
    date: "2026",
    datePublished: "2026-07-01",
    summary:
      "Cobertura audiovisual sectorial sobre la participación y tecnología presentada por AgroEscudo en AgroTECH Bolivia 2026.",
    href: "https://www.youtube.com/shorts/V8Mo5R3icyI",
    cta: "Ver reportaje"
  },
  {
    id: "santa-cruz-innova-cainco",
    type: "Acompañamiento",
    source: "Santa Cruz Innova / CAINCO / Innova Up",
    title: "Acompañamiento para fortalecer el modelo de negocio y la entrada al mercado",
    date: "2026",
    datePublished: "2026-05-16",
    summary:
      "La cobertura de La Razón describe el acompañamiento en captación de clientes, modelo de negocio, finanzas, marketing, propiedad intelectual, impacto y preparación para inversionistas.",
    href: "https://larazon.bo/energias-negocios/2026/05/16/agroescudo-impulsa-la-agricultura-inteligente/",
    cta: "Leer contexto"
  }
];

export const featuredPress = pressItems.find((item) => item.featured) ?? pressItems[0];
