export interface Stamp {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string; // Tailwind class e.g. 'text-gold-500'
}

export const STAMPS: Stamp[] = [
    {
        id: 'pilgrim_init',
        title: 'Novice',
        description: 'Oprettede en profil og startede rejsen.',
        icon: 'fa-user-plus',
        color: 'text-gray-400'
    },
    {
        id: 'prayer_warrior_1',
        title: 'Forbeder I',
        description: 'Bad for en anden pilgrim.',
        icon: 'fa-hands-praying',
        color: 'text-blue-400'
    },
    {
        id: 'prayer_warrior_10',
        title: 'Forbeder II',
        description: 'Bad for 10 pilgrimme.',
        icon: 'fa-church',
        color: 'text-gold-500'
    },
    {
        id: 'rosary_lover',
        title: 'Rosenkrans',
        description: 'Fuldførte en hel Rosenkrans.',
        icon: 'fa-dharmachakra',
        color: 'text-red-500'
    },
    {
        id: 'scholar',
        title: 'Lærd',
        description: 'Gemte en bog i Scriptorium.',
        icon: 'fa-book-open',
        color: 'text-emerald-500'
    }
];
