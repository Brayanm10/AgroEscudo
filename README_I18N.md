# Internacionalización de la landing

La landing pública usa tres rutas estáticas y un solo sistema de mensajes:

- `/` — Español de Bolivia (`es-BO`), versión predeterminada.
- `/en` — Inglés (`en`).
- `/qu` — Quechua boliviano (`qu-BO`).

El selector guarda la preferencia en `localStorage` y en la cookie `agroescudo-locale`. Cada ruta tiene canonical, metadata, Open Graph y `hreflang` propios. Los nombres de marcas, instituciones y tecnologías se mantienen sin traducir.

## Revisión lingüística

La versión `qu-BO` usa frases breves y préstamos técnicos cuando una traducción forzada reduciría la claridad. Antes de utilizarla en una campaña institucional de gran alcance, debe recibir una revisión final por una persona hablante nativa de quechua boliviano. Esta nota es interna y no se muestra en la landing.
