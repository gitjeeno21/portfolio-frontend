# Portfolio Deployment Guide

This project is a static React portfolio built with Vite.

## Deploy to Vercel

1. Import the repository into Vercel.
2. Select **Vite** as the framework preset.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
5. Deploy the site and verify section navigation, contact links, and external profiles.

The project includes SPA fallback configuration in `vercel.json`. No API or environment variables are required for the portfolio frontend.

## Local production check

```bash
npm run build
npm run preview
```

The Vite development server runs on port `8080` by default.
