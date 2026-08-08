"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, PlayCircle, X } from "lucide-react";
import { pressItems } from "@/content/press";
import { getMessages, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function AgrotechSection({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).agrotech;
  const media = siteConfig.media.agrotech;
  const coverage = pressItems.find((item) => item.id === "iica-agrotech-bolivia");
  const [activeImage, setActiveImage] = useState<number | null>(null);

  useEffect(() => {
    if (activeImage === null) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActiveImage(null);
      if (event.key === "ArrowLeft") setActiveImage((current) => current === null ? null : (current - 1 + media.gallery.length) % media.gallery.length);
      if (event.key === "ArrowRight") setActiveImage((current) => current === null ? null : (current + 1) % media.gallery.length);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeImage, media.gallery.length]);

  return (
    <section id="agrotech" className="agrotech-section overflow-hidden bg-brandInk py-20 text-white sm:py-24 lg:py-28">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <div className="reveal-on-scroll">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brandAmberLight">{copy.eyebrow}</p>
            <h2 className="mt-5 max-w-5xl text-[clamp(2.4rem,5.4vw,5.7rem)] font-black leading-[.94]">{copy.title}</h2>
          </div>
          <div className="reveal-on-scroll lg:justify-self-end">
            <p className="max-w-xl text-base leading-8 text-white/68 sm:text-lg">{copy.copy}</p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-black text-brandAmberLight">
              <span>{copy.date}</span><span>{copy.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.55fr_.45fr]">
          <figure className="agrotech-video reveal-on-scroll">
            <video controls playsInline preload="metadata" poster={media.poster} className="aspect-video w-full bg-black object-contain">
              <source src={media.video} type="video/mp4" />
            </video>
            <figcaption className="flex items-start gap-3 border-t border-white/10 px-4 py-4 sm:px-5">
              <PlayCircle className="mt-0.5 shrink-0 text-brandAmberLight" size={19} aria-hidden="true" />
              <span><strong className="block text-sm text-white">{copy.videoTitle}</strong><span className="mt-1 block text-xs leading-5 text-white/48">{copy.videoCaption}</span></span>
            </figcaption>
          </figure>

          <figure className="agrotech-team reveal-on-scroll">
            <div className="relative min-h-[24rem] lg:h-full">
              <Image src={media.team} alt={copy.teamAlt} fill sizes="(max-width: 1023px) 100vw, 30vw" className="object-cover object-[center_56%]" />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(transparent,rgba(3,23,18,.96))] px-5 pb-5 pt-24">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-brandAmberLight">{copy.teamLabel}</p>
                <p className="mt-2 text-sm font-bold leading-6 text-white/76">{copy.teamCaption}</p>
              </div>
            </div>
          </figure>
        </div>

        <div className="mt-14 flex items-end justify-between gap-6">
          <div><p className="eyebrow !text-brandAmberLight">{copy.galleryLabel}</p><p className="mt-2 text-sm text-white/48">{copy.galleryCopy}</p></div>
          <a href={coverage?.href} target="_blank" rel="noreferrer" className="hidden min-h-11 items-center gap-2 text-sm font-black text-white transition hover:text-brandAmberLight sm:inline-flex">{copy.link}<ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>

        <div className="agrotech-grid mt-7">
          {media.gallery.map((src, index) => {
            const [alt, caption] = copy.items[index];
            return (
              <button key={src} type="button" className={`agrotech-photo agrotech-photo-${index + 1} reveal-on-scroll`} onClick={() => setActiveImage(index)} aria-label={`${copy.open}: ${alt}`}>
                <Image src={src} alt={alt} fill sizes={index === 0 ? "(max-width: 767px) 100vw, 66vw" : "(max-width: 767px) 100vw, 34vw"} className="object-cover" />
                <span className="agrotech-photo-shade" />
                <span className="agrotech-photo-caption"><span>{caption}</span><Expand size={18} aria-hidden="true" /></span>
              </button>
            );
          })}
        </div>

        <a href={coverage?.href} target="_blank" rel="noreferrer" className="btn-amber mt-7 sm:hidden">{copy.link}<ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>

      {activeImage !== null && (
        <div className="agrotech-lightbox" role="dialog" aria-modal="true" aria-label={copy.items[activeImage][0]} onClick={() => setActiveImage(null)}>
          <button type="button" className="agrotech-lightbox-close" onClick={() => setActiveImage(null)} aria-label={copy.close} title={copy.close}><X size={22} /></button>
          <button type="button" className="agrotech-lightbox-nav left-3 sm:left-6" onClick={(event) => { event.stopPropagation(); setActiveImage((activeImage - 1 + media.gallery.length) % media.gallery.length); }} aria-label={copy.previous} title={copy.previous}><ChevronLeft size={26} /></button>
          <figure className="relative h-[78vh] w-[min(88vw,1280px)]" onClick={(event) => event.stopPropagation()}>
            <Image src={media.gallery[activeImage]} alt={copy.items[activeImage][0]} fill priority sizes="88vw" className="object-contain" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-brandInk/90 px-4 py-3 text-center text-sm font-bold text-white">{copy.items[activeImage][1]}</figcaption>
          </figure>
          <button type="button" className="agrotech-lightbox-nav right-3 sm:right-6" onClick={(event) => { event.stopPropagation(); setActiveImage((activeImage + 1) % media.gallery.length); }} aria-label={copy.next} title={copy.next}><ChevronRight size={26} /></button>
        </div>
      )}
    </section>
  );
}
