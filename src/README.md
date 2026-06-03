# Source Code 🕯️

Dette er kernen af **oratorium.dk** — Den Katolske Kirkes digitale forgård.

## Struktur

*   **`pages/`**: Alle sideruter i applikationen (Astro).
*   **`layouts/`**: `Layout.astro` wrapper alle sider med fælles `<head>`, fonte og meta.
*   **`components/`**: Genbrugelige UI-komponenter, bl.a. `BaseHead.astro` (meta/SEO/PWA).
*   **`data/`**: Statiske datafiler (helgener, ordbog, dagens manna m.m.).
*   **`lib/`**: Hjælpemoduler, bl.a. AI-kontekst til Aquinas-chatten.
*   **`utils/`**: Funktioner som den liturgiske kalender (`liturgy.ts`).
*   **`i18n/`**: Sprogopsætning (da/en) — forberedt til fremtidig engelsk oversættelse.
*   **`styles/`**: Globale CSS-filer og Tailwind-konfiguration.
