import Image from "next/image";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getMessages, localeRoutes, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const messages = getMessages(locale);
  const copy = messages.footer;
  const home = localeRoutes[locale];
  const links = [
    { label: messages.nav.product, href: `${home}#producto` },
    { label: messages.nav.how, href: `${home}#como-funciona` },
    { label: messages.nav.progress, href: `${home}#avances` },
    { label: messages.nav.ecosystem, href: `${home}#ecosistema` },
    { label: messages.nav.press, href: `${home}#prensa` },
    { label: copy.fullPress, href: "/prensa" },
    { label: messages.nav.pilot, href: `${home}#piloto` }
  ];

  return (
    <footer className="bg-[#eef2ee] py-12">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div>
          <div className="inline-block rounded-md bg-white px-4 py-3">
            <Image src="/images/logo-horizontal-clean.webp" alt="AgroEscudo" width={1456} height={416} className="h-11 w-auto" />
          </div>
          <p className="mt-5 max-w-lg text-sm font-semibold leading-7 text-brandMuted">
            {copy.description}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-brandGreenDark">{copy.navigation}</p>
            <div className="mt-4 grid gap-3">
              {links.map((link) => <a key={link.href} href={link.href} className="text-sm font-bold text-brandMuted hover:text-brandGreenDark">{link.label}</a>)}
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-brandGreenDark">{copy.contact}</p>
            <a href={siteConfig.whatsappUrl} className="mt-4 block text-sm font-black text-brandText hover:text-brandGreen">{siteConfig.phone}</a>
            <a href={siteConfig.emailUrl} className="mt-3 block text-sm font-black text-brandText hover:text-brandGreen">{siteConfig.email}</a>
            <p className="mt-4 text-sm leading-6 text-brandMuted">{copy.location}</p>
            <div className="mt-5"><LanguageSwitcher locale={locale} /></div>
          </div>
        </div>
      </div>
      <div className="container-page mt-10 flex flex-col gap-3 border-t border-brandGreen/10 pt-6 text-xs font-semibold text-brandMuted sm:flex-row sm:justify-between">
        <p>© {year} AgroEscudo. {copy.rights}</p>
        <p>{copy.tagline}</p>
      </div>
    </footer>
  );
}
