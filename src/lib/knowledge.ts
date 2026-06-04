// Build a grounding corpus from the site's own content so the AI (Aquinas/Mentor)
// answers from real, on-site material and can cite/link back to pages.
// Injected into the system prompt in src/pages/api/aquinas.ts.
import { dictionary } from '@data/dictionary';
import { scenarios } from '@data/apologetics';
import { saints } from '@data/saints';

/** Canonical on-site pages the AI may link to (markdown citations). */
export const sitePages: { path: string; topic: string }[] = [
    { path: '/mass', topic: 'Messen forklaret — den hellige messes liturgi trin for trin (ny og traditionel)' },
    { path: '/rosary', topic: 'Rosenkransen — glædesrige, smertefulde, lysets og herlighedsrige mysterier' },
    { path: '/prayers', topic: 'Katolske bønner og forbøn' },
    { path: '/sakramenter', topic: 'De syv sakramenter' },
    { path: '/catechism', topic: 'Katekismen — troens fire søjler' },
    { path: '/confession', topic: 'Skriftemål og samvittighedsransagelse' },
    { path: '/speculum', topic: 'Det daglige Examen (ignatiansk aftenbøn)' },
    { path: '/apologetik', topic: 'Svar på indvendinger mod troen' },
    { path: '/dictionary', topic: 'Katolsk ordbog' },
    { path: '/saints', topic: 'Helgener og skytshelgener' },
    { path: '/calendar', topic: 'Kirkeåret og de liturgiske tider' },
    { path: '/idag', topic: 'Dagens liturgiske farve, helgen og skriftord' },
    { path: '/locations', topic: 'Find katolske kirker og messetider i Danmark' },
    { path: '/convert', topic: 'Bliv katolik — vejen ind i Kirken' },
    { path: '/latina', topic: 'Latinske bønner (Pater Noster, Ave Maria)' },
    { path: '/lectio', topic: 'Lectio Divina — dagens skriftord' },
    { path: '/seek', topic: 'Vejen Hjem — for søgende' },
];

let cached: string | null = null;

export function buildKnowledge(): string {
    if (cached) return cached;

    const pages = sitePages.map((p) => `${p.path} — ${p.topic}`).join('\n');
    const dict = dictionary.map((d) => `- ${d.word}: ${d.definition}`).join('\n');
    const apol = scenarios
        .map((s) => {
            const correct = s.responses.find((r) => r.id === s.correctResponseId);
            return `- Indvending: ${s.objection}\n  Svar: ${[correct?.text, s.explanation].filter(Boolean).join(' ')}`;
        })
        .join('\n');
    const saintList = saints.map((s) => `- ${s.name} (${s.title}): ${s.description}`).join('\n');

    cached = [
        'SIDER PÅ ORATORIUM (henvis til disse med markdown-links når relevant):',
        pages,
        '',
        'KATOLSK ORDBOG:',
        dict,
        '',
        'APOLOGETIK (gennemtænkte svar på indvendinger):',
        apol,
        '',
        'HELGENER:',
        saintList,
    ].join('\n');

    return cached;
}
