 README (Frontend)

 Jeenokanth Modern Portfolio — Frontend

A modern, mobile-optimized portfolio frontend built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. It features smooth navigation, responsive layouts, and reusable UI components.

### Tech Stack

- React 18 + TypeScript
- Vite 5 (React SWC)
- Tailwind CSS + `tailwindcss-animate`
- shadcn/ui (Radix UI primitives)
- React Router v6
- React Query (`@tanstack/react-query`)
- Recharts
- Lucide Icons

### Features

- Responsive pages: `Hero`, `About`, `Projects`, `Skills`, `Contact`
- Reusable UI components via shadcn/ui
- Code-splitting and optimized bundles
- Mobile performance tweaks in Vite config
- Router-based navigation and SPA-friendly 404 handling

### Getting Started

- Prerequisites: Node.js 18+ and npm
- Install dependencies:
```bash
npm install
```
- Start dev server (defaults to port 8080 per `vite.config.ts`):
```bash
npm run dev
```
- Lint:
```bash
npm run lint
```
- Build:
```bash
npm run build
```
- Preview local production build:
```bash
npm run preview
```

### Environment Variables

- Optional:
  - `VITE_API_URL`: Base URL of your backend API (e.g., `https://your-backend.railway.app`)

Create a `.env` file in the project root if needed:
```bash
VITE_API_URL=https://your-backend.railway.app
```

### Project Scripts

- `npm run dev`: Start Vite dev server
- `npm run build`: Production build to `dist`
- `npm run build:dev`: Development-mode build (useful for inspecting bundles)
- `npm run preview`: Preview built app
- `npm run lint`: Run ESLint

### Routing and SPA Config

- Client routing is handled by React Router.
- `vercel.json` routes all non-file requests to `index.html`:
```json
{
  "builds": [{ "src": "package.json", "use": "@vercel/static-build", "config": { "distDir": "dist" } }],
  "routes": [{ "handle": "filesystem" }, { "src": "/(.*)", "dest": "/index.html" }]
}
```

### Vite Configuration Highlights

- Dev server host and port:
  - Host: `::` (IPv6), Port: `8080`
- Path alias: `@` → `./src`
- Build optimization:
  - Target `es2015`
  - `esbuild` minification
  - Manual chunks for `vendor`, `ui`, and `icons`
  - `chunkSizeWarningLimit: 1000`
- Pre-bundled dependencies: `react`, `react-dom`, `lucide-react`

### Common Paths

- Entry: `src/main.tsx`
- App Shell: `src/App.tsx`
- Routes: `src/pages/Index.tsx`, `src/pages/NotFound.tsx`
- Components: `src/components/*`
- Styles: `src/index.css`, `src/App.css`
- Assets: `src/assets/*`
- UI primitives: `src/components/ui/*`

### Development Notes

- Use import alias:
```ts
import { Header } from "@/components/Header";
```
- When integrating the backend, read `DEPLOYMENT_GUIDE.md` for CORS and environment setup.
- Prefer React Query for async data and caching.
- Keep components accessible and keyboard-friendly (Radix UI helps here).

### Building and Deploying

- Build output: `dist/`
- Deploy on Vercel:
  - Framework: Vite
  - Build command: `npm run build`
  - Output directory: `dist`
  - SPA routing supported by `vercel.json`
- For full-stack guidance (including Railway backend and MongoDB Atlas), see `DEPLOYMENT_GUIDE.md`.

### Folder Structure (Frontend)

```text
src/
  assets/
  components/
    ui/
  hooks/
  lib/
  pages/
  App.css
  App.tsx
  index.css
  main.tsx
```

### Accessibility and Performance

- Leverages Radix primitives and shadcn/ui for baseline a11y
- Optimized bundles through Vite manual chunks and esbuild
- Mobile performance considerations in `vite.config.ts`

### Troubleshooting

- Blank screen after deploy: ensure SPA fallback rewrites to `index.html` (Vercel routing included)
- 404 on refresh: same as above; verify `vercel.json` is part of the deploy
- CORS/API errors: set `VITE_API_URL` and configure backend CORS to allow your Vercel domain

### License

MIT

