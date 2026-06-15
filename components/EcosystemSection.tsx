const ecosystem = ["Innova Up", "CAINCO", "Santa Cruz Innova"];

export function EcosystemSection() {
  return (
    <section id="ecosistema" className="section-band bg-white">
      <div className="container-page">
        <div className="rounded-lg border border-brandGreen/10 bg-brandGreenDark p-7 text-white shadow-lift sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brandAmber">Ecosistema</p>
              <h2 className="mt-4 text-3xl font-black leading-[1.06] tracking-normal sm:text-4xl">
                Impulsado desde el ecosistema de innovación boliviano.
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-white/74">
                AgroEscudo se desarrolla desde Cochabamba y Santa Cruz, con participación en el ecosistema Innova Up, CAINCO y Santa Cruz Innova, orientado a validar pilotos reales con actores del sector agroindustrial.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {ecosystem.map((name) => (
                  <div key={name} className="rounded-lg border border-white/14 bg-white/8 px-4 py-5 text-center text-sm font-black text-white">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
