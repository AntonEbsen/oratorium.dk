/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                bg: 'var(--bg)',
                card: 'var(--card)',
                text: 'var(--text)',
                dim: 'var(--text-dim)',
                muted: 'var(--muted)',
                nav: 'var(--nav)',
                'nav-hover': 'var(--navHover)',
                accent: 'var(--accent)',
                'accent-blue': 'var(--accent-blue)',
                'accent-soft': 'var(--accent-soft)',
                glass: 'var(--glass)',
                'glass-border': 'var(--glass-border)',
                // Liturgical gold — used site-wide as text-gold-*/bg-gold-*/from-gold-*.
                // 500 is the metallic --accent (#D4AF37); ramp stays monotonic so darks
                // (900) read as deep gold for borders/faint backgrounds and lights (100/200)
                // read as pale gold for body text.
                gold: {
                    50: '#FDFAEF',
                    100: '#FAF1D2',
                    200: '#F2E0A0',
                    300: '#E8CD6E',
                    400: '#DCBB4D',
                    500: '#D4AF37',
                    600: '#B8942A',
                    700: '#917320',
                    800: '#6B5417',
                    900: '#48380F',
                },
            },
            boxShadow: {
                glow: 'var(--glow)',
                card: 'var(--shadow)',
            },
            borderRadius: {
                DEFAULT: 'var(--radius)',
            },
            fontFamily: {
                sans: ['var(--font-main)', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
