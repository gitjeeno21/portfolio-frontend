 README (Frontend)

 Jeenokanth Modern Portfolio — Frontend

A modern, mobile-optimized portfolio frontend built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. It features smooth navigation, responsive layouts, and reusable UI components.

### Tech Stack

- React 18 + TypeScript
- Vite 5 (React SWC)
- Tailwind CSS + `tailwindcss-animate`
- shadcn/ui (Radix UI primitives)
- React Router v6
- Lucide Icons

### Features

- Responsive sections: `Hero`, `About`, `Education`, `Experience`, `Expertise`, `Certifications`, `Projects`, `Contact`, and `Footer`
- Minimal dark theme with subtle gradient outlines and glass cards
- Single dark theme with no theme toggle
- Responsive navigation, keyboard focus states, and reduced-motion support
- Resume-backed portfolio content with SEO and social-sharing metadata
- Optimized production bundles and text-based social metadata
- Section-anchor navigation and SPA-friendly 404 handling

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

### Project Scripts

- `npm run dev`: Start Vite dev server
- `npm run build`: Production build to `dist`
- `npm run build:dev`: Development-mode build (useful for inspecting bundles)
- `npm run preview`: Preview built app
- `npm run lint`: Run ESLint

### Routing and SPA Config

- Route handling is provided by React Router.
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
- Styles: `src/index.css`, `src/portfolio.css`
- Assets: `src/assets/*`
- UI primitives: `src/components/ui/*`

### Development Notes

- Use the default export with the import alias:
```ts
import Header from "@/components/Header";
```
- Read `DEPLOYMENT_GUIDE.md` for frontend deployment steps.
- Keep components accessible and keyboard-friendly (Radix UI helps here).

### Building and Deploying

- Build output: `dist/`
- Deploy on Vercel:
  - Framework: Vite
  - Build command: `npm run build`
  - Output directory: `dist`
  - SPA routing supported by `vercel.json`
- For deployment steps, see `DEPLOYMENT_GUIDE.md`.

### Folder Structure (Frontend)

```text
src/
  assets/
  components/
    ui/
  hooks/
  lib/
  pages/
  App.tsx
  index.css
  main.tsx
```

### Accessibility and Performance

- Includes a skip link, visible focus states, reduced-motion support, and a keyboard-operable mobile menu
- Uses a dark-only palette without a theme toggle
- Builds with Vite and esbuild; verify production output with `npm run build`

### Troubleshooting

- Blank screen after deploy: ensure SPA fallback rewrites to `index.html` (Vercel routing included)
- 404 on refresh: same as above; verify `vercel.json` is part of the deploy
- Check the deployment platform logs if the production build fails

### License

MIT
