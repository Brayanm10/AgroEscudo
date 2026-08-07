import Image from "next/image";
import { ExternalLink, Facebook, Instagram } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getMessages, localeRoutes, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

const socialIcons = { Instagram, Facebook };

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const messages = getMessages(locale);
  const copy = messages.footer;
  const home = localeRoutes[locale];
  const links = [{ label: messages.nav.product, href: `${home}#producto` }, { label: messages.nav.how, href: `${home}#como-funciona` }, { label: messages.nav.platform, href: `${home}#plataforma` }, { label: messages.nav.ecosystem, href: `${home}#ecosistema` }, { label: messages.nav.press, href: `${home}#prensa` }, { label: messages.nav.agrotech, href: `${home}#agrotech` }, { label: messages.nav.pilot, href: `${home}#piloto` }];
  return (
    <footer className="bg-brandInk py-14 text-white">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div><div className="inline-flex bg-white px-3 py-2.5"><Image src="/images/logo-horizontal-clean.webp" alt="AgroEscudo" width={1432} height={416} sizes="208px" className="h-auto w-52" /></div><p className="mt-6 max-w-lg text-sm font-semibold leading-7 text-white/55">{copy.description}</p><a href={siteConfig.platformUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center gap-2 border border-white/20 px-4 text-sm font-black text-white transition hover:bg-white/10">{messages.nav.login}<ExternalLink size={15} aria-hidden="true" /></a></div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_.8fr]">
          <div><p className="text-xs font-black uppercase tracking-[0.15em] text-brandAmberLight">{copy.navigation}</p><div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">{links.map((link) => <a key={link.href} href={link.href} className="text-sm font-bold text-white/58 hover:text-white">{link.label}</a>)}</div></div>
          <div><p className="text-xs font-black uppercase tracking-[0.15em] text-brandAmberLight">{copy.contact}</p><a href={siteConfig.whatsappUrl} className="mt-5 block text-sm font-black text-white hover:text-brandAmberLight">{siteConfig.phone}</a><a href={siteConfig.emailUrl} className="mt-3 block text-sm font-black text-white hover:text-brandAmberLight">{siteConfig.email}</a><p className="mt-4 text-sm leading-6 text-white/50">{copy.location}</p><div className="mt-5 flex items-center gap-2">{siteConfig.socialLinks.map(({ label, href }) => { const Icon = socialIcons[label as keyof typeof socialIcons]; return <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 hover:bg-white/10 hover:text-white"><Icon size={18} /></a>; })}</div><div className="mt-5"><LanguageSwitcher locale={locale} light /></div></div>
        </div>
      </div>
      <div className="container-page mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs font-semibold text-white/65 sm:flex-row sm:justify-between"><p>© {year} AgroEscudo. {copy.rights}</p><p>{copy.tagline}</p></div>
    </footer>
  );
}
