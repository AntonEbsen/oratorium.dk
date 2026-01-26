
export interface Saint {
    id: string;
    name: string;
    title: string;
    feastDate: string; // MM-DD
    description: string;
    quote: string;
    imageUrl: string; // Placeholder or path
    traits: {
        introvert: number; // 1-10 (1=Extrovert, 10=Introvert)
        intellectual: number; // 1-10 (1=Practical/Heart, 10=Intellectual/Head)
        fiery: number; // 1-10 (1=Gentle, 10=Fiery/Warrior)
        mystic: number; // 1-10 (1=Active/Worker, 10=Mystic/Contemplative)
    };
    category: 'Doctor' | 'Martyr' | 'Mystic' | 'Warrior' | 'Missionary' | 'Monk';
}

export const saints: Saint[] = [
    {
        id: 'aquinas',
        name: 'Sankt Thomas Aquinas',
        title: 'Doctor Angelicus',
        feastDate: '01-28',
        description: 'Den største teolog i Kirkens historie. Han troede på, at tro og fornuft aldrig kan modsige hinanden, da begge kommer fra Gud. En stille, stor mand med et gigantisk intellekt.',
        quote: "Alt hvad jeg har skrevet synes mig som halm i forhold til det, jeg nu har set.",
        imageUrl: '/assets/saints/aquinas.jpg',
        category: 'Doctor',
        traits: { introvert: 8, intellectual: 10, fiery: 2, mystic: 6 }
    },
    {
        id: 'francis',
        name: 'Sankt Frans af Assisi',
        title: 'Guds Lille Fattige',
        feastDate: '10-04',
        description: 'Rigmandssønnen der gav alt væk for at følge "Fru Fattigdom". Han elskede naturen, prædikede for fuglene og genopbyggede Kirken med radikal enkelhed og glæde.',
        quote: "Begynd med at gøre det nødvendige; så det mulige; og pludselig gør du det umulige.",
        imageUrl: '/assets/saints/francis.jpg',
        category: 'Mystic',
        traits: { introvert: 4, intellectual: 2, fiery: 7, mystic: 9 }
    },
    {
        id: 'joan',
        name: 'Sankt Jeanne d\'Arc',
        title: 'Jomfruen af Orléans',
        feastDate: '05-30',
        description: 'En ung bondepige, der hørte stemmer fra himlen og ledte Frankrigs hære til sejr. Brændt på bålet som 19-årig, men holdt fast i sin tro til det sidste.',
        quote: "Jeg er ikke bange. Jeg er født til dette.",
        imageUrl: '/assets/saints/joan.jpg',
        category: 'Warrior',
        traits: { introvert: 5, intellectual: 4, fiery: 10, mystic: 8 }
    },
    {
        id: 'therese',
        name: 'Sankt Thérèse af Lisieux',
        title: 'Den Lille Blomst',
        feastDate: '10-01',
        description: 'Hun døde ukendt som 24-årig, men hendes "Lille Vej" af tillid og kærlighed gjorde hende til Kirkelærer. Hun viser, at man kan blive en stor helgen gennem små, daglige handlinger.',
        quote: "Jeg vil lade en regn af roser falde over jorden.",
        imageUrl: '/assets/saints/therese.jpg',
        category: 'Doctor',
        traits: { introvert: 9, intellectual: 6, fiery: 2, mystic: 9 }
    },
    {
        id: 'peter',
        name: 'Sankt Peter',
        title: 'Apostelfyrsten',
        feastDate: '06-29',
        description: 'En simpel fisker, impulsiv og fejlbarlig, som Jesus valgte til at være Klippen. Han svigtede, men blev tilgivet og ledte Kirken i dens første år.',
        quote: "Herre, til hvem skal vi gå? Du har det evige livs ord.",
        imageUrl: '/assets/saints/peter.jpg',
        category: 'Missionary',
        traits: { introvert: 2, intellectual: 3, fiery: 8, mystic: 3 }
    },
    {
        id: 'augustine',
        name: 'Sankt Augustin',
        title: 'Nådens Doktor',
        feastDate: '08-28',
        description: 'En rastløs intellektuel, der søgte sandheden i sex, karriere og filosofi, før han fandt hvile i Gud. Hans "Bekendelser" taler til enhver moderne søger.',
        quote: "Sent har jeg elsket dig, du skønhed så gammel og så ny!",
        imageUrl: '/assets/saints/augustine.jpg',
        category: 'Doctor',
        traits: { introvert: 6, intellectual: 10, fiery: 7, mystic: 7 }
    },
    {
        id: 'teresa_avila',
        name: 'Sankt Teresa af Ávila',
        title: 'Den Store Reformatør',
        feastDate: '10-15',
        description: 'En stærk, humoristisk og dyb mystiker, der reformerede karmeliterordenen. Hun skrev om "Den Indre Borg" og lærte os, at Gud bor dybt i vores sjæl.',
        quote: "Lad intet forstyrre dig, lad intet skræmme dig. Alt passerer. Gud alene rækker.",
        imageUrl: '/assets/saints/teresa.jpg',
        category: 'Mystic',
        traits: { introvert: 7, intellectual: 8, fiery: 8, mystic: 10 }
    },
    {
        id: 'ignatius',
        name: 'Sankt Ignatius af Loyola',
        title: 'Soldaten for Kristus',
        feastDate: '07-31',
        description: 'Tidligere soldat, der efter en kanonkugle i benet konverterede og stiftede Jesuitterne. Hans "Åndelige Øvelser" lærer os at finde Gud i alle ting.',
        quote: "Ad Majorem Dei Gloriam (Til Guds Større Ære).",
        imageUrl: '/assets/saints/ignatius.jpg',
        category: 'Warrior',
        traits: { introvert: 5, intellectual: 9, fiery: 6, mystic: 5 }
    },
    {
        id: 'mother_teresa',
        name: 'Sankt Moder Teresa',
        title: 'De Fattiges Tjener',
        feastDate: '09-05',
        description: 'En lille nonne, der tjente de "fattigste af de fattige" i Calcuttas slum. Hun så Jesu ansigt i hver eneste døende person.',
        quote: "Vi kan ikke gøre store ting. Men vi kan gøre små ting med stor kærlighed.",
        imageUrl: '/assets/saints/motherteresa.jpg',
        category: 'Missionary',
        traits: { introvert: 3, intellectual: 2, fiery: 5, mystic: 8 }
    },
    {
        id: 'benedict',
        name: 'Sankt Benedikt',
        title: 'Vestens Patriark',
        feastDate: '07-11',
        description: 'Faderen til det vestlige klostervæsen. Hans regel: "Ora et Labora" (Bed og Arbejd), byggede fundamentet for Europa midt i Romerrigets fald.',
        quote: "Lyt, min søn, til Mesterens bud.",
        imageUrl: '/assets/saints/benedict.jpg',
        category: 'Monk',
        traits: { introvert: 9, intellectual: 7, fiery: 3, mystic: 6 }
    }
];

export interface QuizQuestion {
    id: string;
    text: string;
    options: {
        text: string;
        effects: Partial<Saint['traits']>;
    }[];
}

export const quizQuestions: QuizQuestion[] = [
    {
        id: 'energy',
        text: "Hvordan lader du bedst op?",
        options: [
            { text: "Alene med en bog eller i stilhed.", effects: { introvert: 2 } },
            { text: "Sammen med mennesker og aktivitet.", effects: { introvert: -2 } }
        ]
    },
    {
        id: 'decision',
        text: "Når du skal træffe en beslutning, følger du så...",
        options: [
            { text: "Dit hoved og logikken.", effects: { intellectual: 2 } },
            { text: "Dit hjerte og intuitionen.", effects: { intellectual: -2 } }
        ]
    },
    {
        id: 'conflict',
        text: "Hvis du ser uretfærdighed, hvad gør du?",
        options: [
            { text: "Jeg griber sværdet og kæmper!", effects: { fiery: 2 } },
            { text: "Jeg beder for dem og søger forsoning.", effects: { fiery: -2 } }
        ]
    },
    {
        id: 'approach',
        text: "Hvad tiltaler dig mest ved troen?",
        options: [
            { text: "Mysteriet, det overnaturlige og bønnen.", effects: { mystic: 2 } },
            { text: "Handlingen, næstekærligheden og arbejdet.", effects: { mystic: -2 } }
        ]
    },
    {
        id: 'ideal',
        text: "Hvad er dit ideal?",
        options: [
            { text: "At forstå Sandheden fuldt ud.", effects: { intellectual: 2, mystic: -1 } },
            { text: "At give mig selv helt hen i kærlighed.", effects: { intellectual: -1, mystic: 2 } }
        ]
    }
];

export function calculateMatch(scores: Saint['traits']): Saint {
    let bestMatch = saints[0];
    let minDifference = Infinity;

    saints.forEach(saint => {
        let diff = 0;
        // Euclidean distance simplified
        diff += Math.pow(saint.traits.introvert - scores.introvert, 2);
        diff += Math.pow(saint.traits.intellectual - scores.intellectual, 2);
        diff += Math.pow(saint.traits.fiery - scores.fiery, 2);
        diff += Math.pow(saint.traits.mystic - scores.mystic, 2);

        if (diff < minDifference) {
            minDifference = diff;
            bestMatch = saint;
        }
    });

    return bestMatch;
}
