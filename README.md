# Portafolio — Jorge Gaitán

Portafolio personal publicado en **[dyangotech.com](https://dyangotech.com)**.

Next.js 16 (App Router) exportado como sitio estático y servido desde GitHub Pages.

## Stack

| Área | Tecnología |
|---|---|
| Framework | Next.js 16 · React 19 · TypeScript |
| Estilos | Tailwind CSS v4 · shadcn (`base-nova`) |
| Animación | Framer Motion |
| 3D | three.js · React Three Fiber · drei |
| Deploy | GitHub Actions → GitHub Pages |

## Desarrollo

```bash
npm install
npm run dev
```

## Scripts

| Script | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción → `out/` |
| `npm run lint` | ESLint |
| `npm run optimize:images` | Convierte a WebP todo `public/projects/**` |
| `npm run generate:og` | Regenera `public/og-image.png` |

## Añadir un proyecto

1. Copia las capturas en `public/projects/images/` (o `slides/<slug>/` para un carrusel).
2. Ejecuta `npm run optimize:images`. Los originales se reemplazan por `.webp`.
3. Añade la entrada en [`src/data/projects.ts`](src/data/projects.ts).

### Proyectos con video

El build es un export estático: **todo lo que hay en `public/` se descarga tal cual**, sin
optimización en servidor. Por eso los videos no se reproducen en la grilla — la tarjeta
muestra `posterUrl` y el `<video>` solo se monta al abrir el modal de detalle.

Todo proyecto con `mediaType: "video"` debe traer su `posterUrl`. Para generarlo, exporta
un fotograma representativo (no la pantalla de login) a `public/projects/posters/<slug>.jpg`
y pásalo por `npm run optimize:images`.

## Rendimiento

Decisiones deliberadas que conviene no revertir sin medir:

- **El hero 3D solo se monta en equipos capaces.** `useMotionBudget` descarta WebGL si el
  visitante pidió `prefers-reduced-motion`, si el equipo tiene pocos núcleos o poca RAM, o
  si el renderer es por software. `HeroCanvasFallback` vive en su **propio módulo**: si se
  importara desde `hero-canvas.tsx`, three.js (~290 KB gzip) entraría en el bundle principal
  para todo el mundo.
- **El canvas se detiene fuera de viewport** (`frameloop="never"`).
- **Un solo material con `transmission`.** Cada material transmisivo obliga a three.js a
  renderizar la escena completa en un target aparte antes de dibujarla.
- **Sin parallax por tarjeta.** Un `useScroll` por tarjeta significaba una docena de muelles
  ligados al scroll compitiendo en cada frame.

## Deploy

Push a `main` dispara [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml).
El dominio propio se mantiene con [`public/CNAME`](public/CNAME).
