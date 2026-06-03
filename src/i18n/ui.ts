export const languages = {
    da: 'Dansk',
    en: 'English',
};

export const defaultLang = 'da';

// UI string table for future localisation. The site is Danish-only for now;
// English entries mirror the keys so useTranslations() always has a fallback.
export const ui = {
    da: {
        'nav.home': 'Hjem',
        'nav.seek': 'Vejen Hjem',
        'nav.about': 'Om Oratorium',
    },
    en: {
        'nav.home': 'Home',
        'nav.seek': 'The Way Home',
        'nav.about': 'About Oratorium',
    },
} as const;

// Primary navigation, keyed by locale. English routes are placeholders until
// English versions of the pages exist.
export const navigation: { [key: string]: { label: string; url: string }[] } = {
    da: [
        { label: 'Hjem', url: '/' },
        { label: 'Vejen Hjem', url: '/seek' },
        { label: 'Om Oratorium', url: '/om' },
    ],
    en: [
        { label: 'Home', url: '/' },
        { label: 'The Way Home', url: '/seek' },
        { label: 'About', url: '/om' },
    ],
};
