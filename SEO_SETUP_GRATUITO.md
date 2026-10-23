# SEO de AgroEscudo: operación después de publicar

URL oficial permanente: https://agroescudo.vercel.app/

## Estado de Search Console aportado por el propietario

La portada ya está indexada. El sitemap fue enviado el 19 de octubre de 2026 y leído el 21, con estado Correcto y seis páginas descubiertas. Esto no prueba que las seis estén indexadas. No crear otra propiedad ni reenviar el sitemap sin un error o cambio que lo justifique.

## Acciones del propietario

1. Abrir la propiedad existente de prefijo de URL en Search Console.
2. Tras publicar esta revisión, inspeccionar la portada y usar Probar URL publicada. Confirmar que se puede indexar y revisar la canónica declarada.
3. Solicitar un nuevo rastreo una sola vez por estos cambios significativos si se desea. No repetir solicitudes como estrategia de posicionamiento.
4. Revisar en las próximas semanas el informe de indexación de las otras cinco URL: /en, /pt, /qu, /qr y /prensa. Revisar la causa concreta de cada exclusión antes de cambiar indexación o canonical.
5. Consultar semanalmente consultas, impresiones y clics para AgroEscudo y monitoreo de silos. Comparar periodos; Google decide qué nombre y favicon mostrar y cuándo actualizar sus resultados.

## Identidad y mantenimiento

- Mantener AgroEscudo como nombre del sitio y organización.
- Conservar el lema El escudo digital del agro boliviano.
- El título y descripción españoles se mantienen centralizados en lib/site-config.ts.
- Mantener la etiqueta de verificación existente; no cambiar su código sin comprobar la propiedad.
- La URL oficial queda fijada en la configuración para evitar canonicals accidentales hacia previews o localhost.
- Las rutas están agrupadas internamente por idioma para entregar html lang correcto en el servidor sin perder el renderizado estático. Las URLs públicas siguen iguales.
- El único sitemap es /sitemap.xml. No inventar fechas lastModified; agregar solo fechas reales cuando se mantengan correctamente.
- FAQPage describe preguntas visibles. No implica resultados enriquecidos para un negocio AgriTech.
- Las migas de navegación se publican en /prensa, con la jerarquía visible Inicio / Prensa. La portada no necesita una ruta de un solo elemento.
- Las prioridades comerciales incluyen La Paz. La validación piloto mantiene Cochabamba y Santa Cruz; no se afirma una oficina o instalación en La Paz.

## Recursos oficiales

scripts/generate-brand-assets.py genera los iconos y la tarjeta social desde el escudo del logo horizontal limpio existente. Requiere Pillow en el entorno de herramientas; no agrega dependencias a la aplicación.

- /favicon.ico: 16, 32 y 48 px.
- /favicon-48.png y /favicon-96.png.
- /apple-touch-icon.png: 180 px.
- /images/agroescudo-logo-512.png: logo público de 512 px.
- /images/agroescudo-social.png: Open Graph de 1200 × 630 px.

## Validación repetible

npm run build
npm run lint
python scripts/audit-seo.py https://agroescudo.vercel.app assets/review/seo-production.json

El script obtiene las rutas del sitemap real; comprueba estado HTTP, canonical, títulos y descripciones distintos, H1, idioma servido, ausencia de noindex y sintaxis JSON-LD. No consulta si una URL está indexada en Google. El comando lint actual ejecuta generación de tipos y TypeScript; el proyecto no tiene ESLint ni suite de tests propios de landing.

## Analítica y contenido

No se ha confirmado un identificador de Google Analytics ni medición de conversiones. No se añaden identificadores ficticios ni rastreadores duplicados. Search Console mide búsquedas; los clics comerciales requieren configurar y validar una herramienta de analítica con datos reales.

Preparar pruebas técnicas y fotografías reales, documentación del SiloSensor y ejemplos del dashboard. CampoSensor no se presenta como solución comercial disponible. No publicar resultados de pilotos no ejecutados ni promesas de ahorro sin evidencia.

## Fuentes oficiales

- https://developers.google.com/search/docs/appearance/site-names
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/appearance/favicon-in-search
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
- https://web.dev/articles/vitals
