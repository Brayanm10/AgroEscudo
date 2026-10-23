# Internacionalización de la landing

La landing pública usa cuatro rutas estáticas y un solo sistema de mensajes:

- `/` — Español de Bolivia (`es-BO`), versión predeterminada.
- `/en` — Inglés (`en`).
- `/pt` — Portugués de Brasil (`pt-BR`).
- `/qu` — Quechua boliviano (`qu-BO`).

El selector guarda la preferencia en `localStorage` y en la cookie `agroescudo-locale`. Cada ruta tiene canonical, metadata, Open Graph y `hreflang` propios. Los nombres de marcas, instituciones y tecnologías se mantienen sin traducir.

Los grupos internos `app/(es)`, `app/(en)`, `app/(pt)` y `app/(qu)` comparten `components/RootDocument.tsx` y fijan el idioma del documento en el servidor. Las URLs no cambian. El cambio entre idiomas carga el documento correspondiente completo; no depende de cambiar `html.lang` después de la hidratación. Las páginas `/qr` y `/prensa` pertenecen al grupo español.

## Revisión lingüística

La versión `qu-BO` usa frases breves y préstamos técnicos cuando una traducción forzada reduciría la claridad. Antes de utilizarla en una campaña institucional de gran alcance, debe recibir una revisión final por una persona hablante nativa de quechua boliviano. Esta nota es interna y no se muestra en la landing.
