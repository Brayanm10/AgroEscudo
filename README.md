# AgroEscudo Landing

Landing pública de AgroEscudo, plataforma agri-tech boliviana enfocada en monitoreo postcosecha, sensores IoT, alertas, bitácora y reportes operativos.

Esta carpeta es independiente del dashboard operativo ubicado en `frontend/`. Está pensada para presentación pública, competencia, mentores y despliegue rápido en Vercel.

## Instalación

```powershell
npm install
```

## Desarrollo

```powershell
npm run dev
```

La landing queda disponible en:

```text
http://localhost:3000
```

## Build

```powershell
npm run build
```

## Validación

```powershell
npm run lint
npm run build
```

En este proyecto `npm run lint` genera los tipos de rutas de Next.js y ejecuta una validación TypeScript sin emitir archivos.

## Deploy en Vercel

1. Subir el repositorio a GitHub.
2. Crear cuenta o entrar a Vercel.
3. Importar el repositorio.
4. Configurar Root Directory como `landing`.
5. Confirmar framework Next.js.
6. Deploy.
7. Usar dominio gratuito `agroescudo.vercel.app` si está disponible.
8. Si no está disponible, usar `agroescudo-bolivia.vercel.app`.
9. Conectar dominio propio en el futuro.

## URLs públicas esperadas

- https://agroescudo.vercel.app/
- https://agroescudo.vercel.app/qr
- https://agroescudo.vercel.app/qr-agroescudo.png
- https://agroescudo.vercel.app/qr-agroescudo.svg
- https://agroescudo.vercel.app/robots.txt
- https://agroescudo.vercel.app/sitemap.xml

## Variables de entorno opcionales

```env
NEXT_PUBLIC_SITE_URL=https://agroescudo.vercel.app
GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_GA_ID=
```

`GOOGLE_SITE_VERIFICATION` se usa para Search Console. `NEXT_PUBLIC_GA_ID` queda reservado para Google Analytics 4 si se decide activarlo después.

## Redes sociales

- Instagram: https://www.instagram.com/agroescudo?igsh=dXRyNWphbW9xemVi&utm_source=qr
- Facebook: https://www.facebook.com/share/1LJGrbaSKM/?mibextid=wwXIfr

## Prensa

- La Razón: https://larazon.bo/energias-negocios/2026/05/16/agroescudo-impulsa-la-agricultura-inteligente/
- Bolivia Emprende: https://boliviaemprende.com/noticias/agroescudo-impulsa-la-agricultura-inteligente

## Placeholders a revisar

- Dominio final.
- Correos institucionales futuros.
- Posibles logos oficiales de ecosistema si se cuenta con autorización.

## Search Console

Ver pasos completos en `SEO_SETUP_GRATUITO.md`.

## Activos visuales finales

- `public/images/hero-agroescudo-silo.webp`: imagen editorial generada para el hero, sin textos ni marcas.
- `public/images/platform-dashboard.webp`: captura estática del frontend real con datos demostrativos locales.
- `public/images/press-la-razon-social.webp`: pieza social de La Razón, 1080 x 1350.
- `public/images/press-la-razon-cover.webp`: portada de Energías & Negocios, 1179 x 1582.
- `public/images/press-la-razon-article.webp`: página de la entrevista, 1179 x 1563.
- `public/images/ecosystem-innova-up.webp`: pieza del programa Innova Up, 1179 x 1228.
- `public/images/brayan-javier-mejia-saavedra.webp`: retrato oficial del fundador y CEO, 1200 x 1500.
- `public/images/agroescudo/system/arquitectura-agroescudo.svg`: ilustración técnica original creada en código; no representa una instalación ejecutada.
- `public/qr-agroescudo.png`: QR oficial de 1200 px que dirige a `https://agroescudo.vercel.app/qr`.
- `public/qr-agroescudo.svg`: versión vectorial del mismo QR para impresión.

Los archivos fuente se conservan en `assets/source/`; no se sirven públicamente. La evidencia de prensa enlaza a la publicación original y la pieza de Innova Up se presenta exclusivamente como constancia de participación en el programa.

La ficha completa de origen, dimensiones, peso, alt y prompt está en `VISUAL_ASSETS.md`.

Correo público de contacto: `agroescudo@gmail.com`.

## Notas comerciales

- No se declaran clientes, contratos ni pilotos cerrados.
- CAINCO, Santa Cruz Innova e Innova Up se mencionan como ecosistema de impulso, no como clientes.
- La propuesta comercial se enfoca en pilotos de 60 a 90 días, validación en sitio real y monitoreo operativo.
