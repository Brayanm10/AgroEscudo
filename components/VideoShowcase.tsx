"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { getMessages, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

export function VideoShowcase({ locale }: { locale: Locale }) {
  const copy = getMessages(locale).film;
  const videoRef = useRef<HTMLVideoElement>(null);
  const manuallyPaused = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !manuallyPaused.current) {
          void video.play().catch(() => setIsPlaying(false));
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      manuallyPaused.current = false;
      void video.play();
    } else {
      manuallyPaused.current = true;
      video.pause();
    }
  }

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  }

  return (
    <section className="film-section overflow-hidden bg-brandInk text-white" aria-labelledby="film-title">
      <div className="container-page py-16 sm:py-20 lg:py-24">
        <div className="mb-10 grid gap-7 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-brandAmberLight">{copy.eyebrow}</p>
            <h2 id="film-title" className="mt-4 max-w-4xl text-[clamp(2.25rem,5vw,5.4rem)] font-black leading-[.94]">{copy.title}</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-white/68 lg:justify-self-end lg:text-lg">{copy.copy}</p>
        </div>

        <div className="film-frame reveal-on-scroll">
          <video
            ref={videoRef}
            className="block aspect-video w-full bg-black object-contain"
            muted
            loop
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={siteConfig.media.productFilm} type="video/mp4" />
          </video>
          <div className="film-controls" aria-label={copy.controls}>
            <button type="button" onClick={togglePlayback} className="film-control" aria-label={isPlaying ? copy.pause : copy.play} title={isPlaying ? copy.pause : copy.play}>
              {isPlaying ? <Pause size={19} aria-hidden="true" /> : <Play size={19} aria-hidden="true" />}
            </button>
            <button type="button" onClick={toggleSound} className="film-control" aria-label={isMuted ? copy.soundOn : copy.soundOff} title={isMuted ? copy.soundOn : copy.soundOff}>
              {isMuted ? <VolumeX size={19} aria-hidden="true" /> : <Volume2 size={19} aria-hidden="true" />}
            </button>
          </div>
          <div className="film-live"><span aria-hidden="true" />MVP</div>
        </div>

        <div className="film-rail" aria-label={copy.railLabel}>
          <div className="film-rail-track">
            {[...copy.rail, ...copy.rail].map((item, index) => <span key={`${item}-${index}`}>{item}<i aria-hidden="true" /></span>)}
          </div>
        </div>
        <p className="mt-5 max-w-4xl text-xs font-semibold leading-5 text-white/42">{copy.note}</p>
      </div>
    </section>
  );
}
