# WEB-ADSENSE

Proyecto web de contenidos SEO especializado en energía y electricidad para el hogar en España. La estructura está preparada para desplegarse en Cloudflare Pages, incluir sitemap, robots, RSS y un bot de Telegram para control editorial.

## Objetivo del proyecto

- Nicho: energía y electricidad para el hogar en España.
- Contenido evergreen y útil.
- Estructura SEO-friendly con rutas limpias.
- CMS interno preparado con artículos, categorías y autores.
- Bot de Telegram con control de acceso restringido.
- Preparado para despliegue en Cloudflare Pages.

## Stack local

- Vite + React + TypeScript
- React Router para rutas limpias
- CSS custom con enfoque mobile-first
- Public files para sitemap.xml, robots.txt y RSS
- Node + dotenv + node-telegram-bot-api

## Inicio rápido

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Copia variables de entorno:
   ```bash
   copy .env.example .env
   ```
3. Completa las variables sensibles.
4. Ejecuta el sitio:
   ```bash
   npm run dev
   ```
5. Ejecuta el bot de Telegram:
   ```bash
   npm run bot
   ```

## Build de producción

```bash
npm run build
```

## Estructura relevante

- `src/App.tsx`: rutas y render principal.
- `src/data/site.ts`: contenido, categorías y artículos de ejemplo.
- `public/sitemap.xml`: sitemap estático.
- `public/robots.txt`: instrucciones para rastreo.
- `public/rss.xml`: feed RSS.
- `scripts/telegram-bot.mjs`: bot de Telegram con protección por usuario autorizado.
- `wrangler.toml`: preparación para Cloudflare Pages.

## Cloudflare

El proyecto está preparado para Cloudflare Pages con `wrangler.toml` y salida en `dist/`.

Cuando GitHub CLI y Wrangler estén autenticados, ejecutar:

```bash
gh auth login
npm install -g wrangler
wrangler login
```

Luego:

```bash
git init
# añadir remoto cuando esté autenticado
# gh repo create WEB-ADSENSE --public --source=. --remote=origin --push
# wrangler pages deploy dist --project-name web-adsense
```

## Bot de Telegram

- La configuración se hace con variables en `.env`.
- No se deben guardar secretos en el repositorio.
- El acceso queda limitado al `TELEGRAM_ADMIN_USER_ID` indicado.

## GitHub

Cuando `gh` esté instalado y autenticado:

```bash
gh repo create WEB-ADSENSE --public --source=. --remote=origin --push
```

## Nota de autenticación

En este entorno no estaban instalados ni autenticados `gh` ni `wrangler`, así que no se ha creado un repositorio remoto ni un despliegue real en Cloudflare. Se dejó preparado el proyecto local y la configuración necesaria para continuar cuando el usuario complete la autenticación.
