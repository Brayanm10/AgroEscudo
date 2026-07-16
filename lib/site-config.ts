const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agroescudo.vercel.app";

export const siteConfig = {
  name: "AgroEscudo",
  shortName: "AgroEscudo",
  tagline: "El escudo digital del grano boliviano",
  url: rawSiteUrl.replace(/\/$/, ""),
  locale: "es_BO",
  language: "es-BO",
  title: "AgroEscudo | Monitoreo para silos y granos almacenados en Bolivia",
  description:
    "AgroEscudo es una plataforma boliviana de monitoreo para silos, galpones y centros de acopio. Sensores IoT, alertas, historial y reportes para ayudar a proteger el valor del grano almacenado.",
  ogDescription:
    "Sensores IoT, alertas e historial operativo para monitoreo postcosecha en Cochabamba y Santa Cruz.",
  keywords: [
    "AgroEscudo",
    "AgroEscudo Bolivia",
    "AgroEscudo Cochabamba",
    "monitoreo de silos en Bolivia",
    "sensores para silos",
    "monitoreo de granos almacenados",
    "control de temperatura y humedad en silos",
    "tecnología postcosecha Bolivia",
    "IoT agrícola Bolivia",
    "monitoreo de centros de acopio",
    "prevención de pérdidas postcosecha",
    "sensores agrícolas",
    "riesgo operativo agrícola"
  ],
  location: "Cochabamba, Bolivia",
  areaServed: ["Cochabamba", "Santa Cruz"],
  email: "agroescudo@gmail.com",
  phone: "+591 79366846",
  whatsappUrl:
    "https://wa.me/59179366846?text=Hola%2C%20conoc%C3%AD%20AgroEscudo%20mediante%20su%20p%C3%A1gina%20web.%20Me%20interesa%20conocer%20el%20sistema%20de%20monitoreo%20para%20silos%20o%20almacenamiento%20de%20granos%20y%20coordinar%20una%20demostraci%C3%B3n.",
  technicalVisitUrl:
    "https://wa.me/59179366846?text=Hola%20AgroEscudo%2C%20quiero%20agendar%20una%20visita%20t%C3%A9cnica",
  qrWhatsappUrl:
    "https://wa.me/59179366846?text=Hola%20AgroEscudo%2C%20escane%C3%A9%20el%20QR%20y%20quiero%20conocer%20el%20sistema%20y%20solicitar%20una%20evaluaci%C3%B3n",
  emailUrl: "mailto:agroescudo@gmail.com?subject=Solicitud%20de%20piloto%20AgroEscudo",
  logo: "/logo-mark.png",
  ogImage: "/images/og-agroescudo.webp",
  media: {
    hero: "/images/hero-agroescudo-silo.webp",
    dashboard: "/images/platform-dashboard.webp",
    pressSocial: "/images/press-la-razon-social.webp",
    pressCover: "/images/press-la-razon-cover.webp",
    pressArticle: "/images/press-la-razon-article.webp",
    ecosystem: "/images/ecosystem-innova-up.webp"
  },
  founder: {
    name: "Brayan Javier Mejía Saavedra",
    role: "Fundador y CEO",
    image: "/images/brayan-javier-mejia-saavedra.webp"
  },
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/agroescudo?igsh=dXRyNWphbW9xemVi&utm_source=qr"
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/1LJGrbaSKM/?mibextid=wwXIfr"
    }
  ],
  press: [
    {
      outlet: "La Razón",
      date: "16 mayo 2026",
      title: "AgroEscudo impulsa la agricultura inteligente",
      href: "https://larazon.bo/energias-negocios/2026/05/16/agroescudo-impulsa-la-agricultura-inteligente/"
    },
    {
      outlet: "Bolivia Emprende",
      date: "21 mayo 2026",
      title: "AgroEscudo impulsa la agricultura inteligente",
      href: "https://boliviaemprende.com/noticias/agroescudo-impulsa-la-agricultura-inteligente"
    }
  ]
} as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
