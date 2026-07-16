export type InstitutionCategory =
  | "Preaceleración"
  | "Incubación tecnológica"
  | "Respaldo académico"
  | "Acompañamiento técnico";

export type Institution = {
  name: string;
  shortName: string;
  category: InstitutionCategory;
  description: string;
  logo?: string;
  logoAlt: string;
  width?: number;
  height?: number;
  featuredOnQr?: boolean;
};

export const institutions: readonly Institution[] = [
  {
    name: "Innova Up",
    shortName: "Innova Up",
    category: "Preaceleración",
    description: "Fortalecimiento empresarial y preparación para conectar la solución con el mercado.",
    logo: "/partners/innova-up.png",
    logoAlt: "Logo de Innova Up",
    width: 737,
    height: 252,
    featuredOnQr: true
  },
  {
    name: "Santa Cruz Innova",
    shortName: "Santa Cruz Innova",
    category: "Preaceleración",
    description: "Articulación dentro del ecosistema de innovación y preaceleración empresarial.",
    logo: "/partners/innova-santa-cruz.png",
    logoAlt: "Logo de Innova Santa Cruz",
    width: 460,
    height: 460,
    featuredOnQr: true
  },
  {
    name: "CAINCO",
    shortName: "CAINCO",
    category: "Preaceleración",
    description: "Respaldo institucional vinculado al proceso de fortalecimiento empresarial de Innova Up.",
    logo: "/partners/cainco.png",
    logoAlt: "Logo de CAINCO",
    width: 300,
    height: 300,
    featuredOnQr: true
  },
  {
    name: "EMBATE — Incubadora de Empresas de Base Tecnológica de la UMSS",
    shortName: "EMBATE",
    category: "Incubación tecnológica",
    description: "Acompañamiento para estructuración, incubación y desarrollo de la empresa tecnológica.",
    logo: "/partners/embate-umss.png",
    logoAlt: "Logo de EMBATE, Incubadora de Empresas de Base Tecnológica de la UMSS",
    width: 643,
    height: 476,
    featuredOnQr: true
  },
  {
    name: "Universidad del Valle — UNIVALLE",
    shortName: "UNIVALLE",
    category: "Respaldo académico",
    description: "Acompañamiento académico al desarrollo tecnológico del equipo fundador.",
    logo: "/partners/univalle.png",
    logoAlt: "Logo de la Universidad del Valle, UNIVALLE",
    width: 738,
    height: 405,
    featuredOnQr: true
  },
  {
    name: "Universidad Mayor de San Simón",
    shortName: "UMSS",
    category: "Respaldo académico",
    description: "Entorno académico vinculado a EMBATE y a la articulación técnica del proyecto.",
    logo: "/partners/umss.png",
    logoAlt: "Escudo de la Universidad Mayor de San Simón, UMSS",
    width: 522,
    height: 586
  },
  {
    name: "Facultad de Ciencias Agrícolas, Pecuarias y Forestales — UMSS",
    shortName: "FCAPyF — UMSS",
    category: "Acompañamiento técnico",
    description: "Articulación técnica para fortalecer la validación aplicada en el sector agrícola.",
    logoAlt: "Facultad de Ciencias Agrícolas, Pecuarias y Forestales de la UMSS"
  }
] as const;

export const qrInstitutions = institutions.filter((institution) => institution.featuredOnQr);
