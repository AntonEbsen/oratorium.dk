import { defineConfig } from 'astro/config';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
// Design System: Dark & Gold
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// Auto-derive routes whose page sets the `noindex` Layout prop, so the sitemap
// never advertises pages that ask not to be indexed. (No manual list to drift.)
function noindexRoutes() {
  const routes = new Set();
  const walk = (dir, base) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (entry.name === 'api') continue;
        walk(join(dir, entry.name), `${base}/${entry.name}`);
      } else if (entry.name.endsWith('.astro')) {
        const src = readFileSync(join(dir, entry.name), 'utf8');
        if (/^[ \t]*noindex\b/m.test(src)) {
          let route = `${base}/${entry.name.replace(/\.astro$/, '')}`;
          route = route.replace(/\/index$/, '') || '/';
          routes.add(route);
        }
      }
    }
  };
  walk('src/pages', '');
  return routes;
}

const noindex = noindexRoutes();

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: 'https://oratorium.dk',

  i18n: {
    defaultLocale: "da",
    locales: ["da", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },

  integrations: [
    react(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '') || '/';
        return !noindex.has(path);
      },
    }),
    tailwind({
      applyBaseStyles: false,
    })
  ],
});
