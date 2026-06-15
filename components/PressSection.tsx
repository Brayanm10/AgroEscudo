import { ArrowUpRight, Newspaper } from "lucide-react";

const articles = [
  {
    outlet: "La Razón",
    date: "16 mayo 2026",
    title: "AgroEscudo impulsa la agricultura inteligente",
    description:
      "Artículo sobre la propuesta de AgroEscudo para enfrentar pérdidas por malas condiciones de almacenamiento y avanzar en validación de campo.",
    href: "https://larazon.bo/energias-negocios/2026/05/16/agroescudo-impulsa-la-agricultura-inteligente/"
  },
  {
    outlet: "Bolivia Emprende",
    date: "21 mayo 2026",
    title: "AgroEscudo impulsa la agricultura inteligente",
    description:
      "Publicación que recoge el enfoque de AgroEscudo como startup boliviana de base tecnológica orientada al agro.",
    href: "https://boliviaemprende.com/noticias/agroescudo-impulsa-la-agricultura-inteligente"
  }
];

export function PressSection() {
  return (
    <section className="section-band bg-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">En medios</p>
            <h2 className="section-title mt-4">AgroEscudo ya aparece en prensa boliviana de innovación.</h2>
          </div>
          <p className="section-copy">
            Estas publicaciones ayudan a explicar la historia, el problema y la etapa de validación de AgroEscudo. Son menciones de prensa, no ventas cerradas ni acuerdos comerciales.
          </p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {articles.map((article) => (
            <a
              key={article.outlet}
              href={article.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-lg border border-brandGreen/10 bg-brandField p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brandAmber/50 hover:bg-white hover:shadow-lift"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brandGreenDark text-brandAmber">
                  <Newspaper size={22} aria-hidden="true" />
                </div>
                <ArrowUpRight className="text-brandGreenDark transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={22} aria-hidden="true" />
              </div>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-brandGreen">
                {article.outlet} · {article.date}
              </p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-brandText">{article.title}</h3>
              <p className="mt-4 text-sm leading-7 text-brandMuted">{article.description}</p>
              <p className="mt-5 text-sm font-black text-brandGreenDark">Leer publicación</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
