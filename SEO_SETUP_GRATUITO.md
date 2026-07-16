# SEO Setup Gratuito Para AgroEscudo

Esta guía usa herramientas gratuitas y el dominio temporal:

```text
https://agroescudo.vercel.app
```

## 1. Desplegar en Vercel

1. Sube el proyecto a GitHub.
2. Entra a Vercel.
3. Selecciona `Add New Project`.
4. Importa el repositorio.
5. Si subes todo el repositorio AgroEscudo, configura `Root Directory` como `landing`.
6. Framework Preset: `Next.js`.
7. Install Command: `npm install`.
8. Build Command: `npm run build`.
9. Output Directory: dejar vacío/default.
10. Deploy.

## 2. Revisar URLs técnicas

Abre estas URLs después del deploy:

```text
https://agroescudo.vercel.app/
https://agroescudo.vercel.app/robots.txt
https://agroescudo.vercel.app/sitemap.xml
```

Verifica que:

- La home carga correctamente.
- La ruta pública `/qr` carga correctamente.
- `robots.txt` permite indexar la landing.
- `sitemap.xml` contiene la home y `https://agroescudo.vercel.app/qr`.

## 3. Registrar en Google Search Console

1. Entra a Google Search Console.
2. Añade una propiedad nueva.
3. Elige `Prefijo de URL`.
4. Usa:

```text
https://agroescudo.vercel.app
```

5. Selecciona verificación por etiqueta HTML.
6. Copia el código de verificación.
7. En Vercel, abre el proyecto y entra a `Settings` > `Environment Variables`.
8. Crea:

```text
GOOGLE_SITE_VERIFICATION=CODIGO_DE_GOOGLE
```

9. Despliega de nuevo.
10. Vuelve a Search Console y pulsa `Verificar`.

## 4. Enviar sitemap

1. En Search Console entra a `Sitemaps`.
2. Envía:

```text
sitemap.xml
```

3. Espera a que Google lo procese.

## 5. Solicitar indexación

1. En Search Console usa `Inspección de URL`.
2. Ingresa:

```text
https://agroescudo.vercel.app
```

3. Pulsa `Solicitar indexación`.
4. No repitas la solicitud todos los días; espera a que Google rastree.

## 6. Registrar en Bing Webmaster Tools

1. Entra a Bing Webmaster Tools.
2. Agrega la misma URL.
3. Puedes importar la propiedad desde Google Search Console.
4. Envía el sitemap:

```text
https://agroescudo.vercel.app/sitemap.xml
```

## 7. Medir durante 30 días

Revisa semanalmente:

- Consultas donde aparece AgroEscudo.
- Impresiones.
- Clics.
- CTR.
- Posición promedio.
- Errores de cobertura o indexación.

Consultas esperadas al inicio:

- AgroEscudo
- AgroEscudo Bolivia
- monitoreo de silos en Bolivia
- sensores para silos
- IoT agrícola Bolivia
- monitoreo de granos almacenados
- tecnología postcosecha Bolivia

## 8. Google Analytics 4 opcional

La landing deja preparada la variable:

```text
NEXT_PUBLIC_GA_ID=
```

No coloques un ID inventado. Actívala solo cuando tengas una propiedad GA4 real.
