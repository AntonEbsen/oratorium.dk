export interface Book {
    id: string; // Unique ID for database referencing
    title: string;
    author: string;
    description: string;
    year?: string;
    coverColor: string; // CSS color or gradient class for the spine/cover
    tags: string[];
    /** Where to read/find the book. Verify URLs before publishing. */
    link?: string;
    /** Label for the link: "Læs online" (full text) or "Læs mere" (info). */
    linkLabel?: string;
    /** A memorable line from the work (verify wording/attribution). */
    quote?: string;
    /** Public-domain audiobook (LibriVox). Verify before publishing. */
    audio?: string;
}

export const libraryBooks: Book[] = [
    {
        id: "confessiones",
        title: "Confessiones",
        author: "Augustine of Hippo",
        description: "En dybt personlig beretning om synd, omvendelse og Guds nåde. Den første selvbiografi i vestlig litteratur.",
        year: "397",
        coverColor: "bg-red-900",
        tags: ["biography", "classic", "repentance"],
        link: "https://www.ccel.org/ccel/augustine/confessions.html",
        linkLabel: "Læs online",
        quote: "Du har skabt os til dig selv, og vores hjerte er uroligt, indtil det finder hvile i dig.",
        audio: "https://librivox.org/?s=Confessions+Augustine"
    },
    {
        id: "summa",
        title: "Summa Theologica",
        author: "Thomas Aquinas",
        description: "Troens intellektuelle katedral. En systematisk gennemgang af teologi, filosofi og moral.",
        year: "1274",
        coverColor: "bg-amber-900",
        tags: ["theology", "philosophy", "classic"],
        link: "https://www.newadvent.org/summa/",
        linkLabel: "Læs online",
        quote: "Søger du et eksempel på kærlighed: 'Større kærlighed har ingen end den at sætte livet til for sine venner.'"
    },
    {
        id: "orthodoxy",
        title: "Orthodoxy",
        author: "G.K. Chesterton",
        description: "Et sprudlende forsvar for kristendommen som det mest spændende eventyr af alle.",
        year: "1908",
        coverColor: "bg-green-900",
        tags: ["apologetics", "philosophy"],
        link: "https://www.gutenberg.org/ebooks/16769",
        linkLabel: "Læs online",
        quote: "Englene kan flyve, fordi de tager sig selv let.",
        audio: "https://librivox.org/?s=Orthodoxy+Chesterton"
    },
    {
        id: "mere_christianity",
        title: "Mere Christianity",
        author: "C.S. Lewis",
        description: "En logisk og klar forklaring af hvad kristendom faktisk er, skrevet for det moderne menneske.",
        year: "1952",
        coverColor: "bg-blue-900",
        tags: ["apologetics", "classic"],
        link: "https://en.wikipedia.org/wiki/Mere_Christianity",
        linkLabel: "Læs mere",
        quote: "Sigt mod Himlen, og du får jorden oven i købet; sigt mod jorden, og du får ingen af delene."
    },
    {
        id: "screwtape",
        title: "The Screwtape Letters",
        author: "C.S. Lewis",
        description: "En senior-dæmons breve til sin nevø. En mesterlig satire over fristelse og menneskelig natur.",
        year: "1942",
        coverColor: "bg-gray-800",
        tags: ["fiction", "psychology"],
        link: "https://en.wikipedia.org/wiki/The_Screwtape_Letters",
        linkLabel: "Læs mere",
        quote: "Den sikreste vej til Helvede er den gradvise — den bløde skråning, uden bratte sving."
    },
    {
        id: "imitatio",
        title: "Imitatio Christi",
        author: "Thomas à Kempis",
        description: "En håndbog i det indre liv. Om ydmyghed, tålmodighed og kærlighed til Jesus.",
        year: "1418",
        coverColor: "bg-stone-800",
        tags: ["devotional", "spirituality"],
        link: "https://www.ccel.org/ccel/kempis/imitation.html",
        linkLabel: "Læs online",
        quote: "Mennesket foreslår, men Gud bestemmer.",
        audio: "https://librivox.org/?s=Imitation+of+Christ"
    },
    {
        id: "pensees",
        title: "Pensées",
        author: "Blaise Pascal",
        description: "Fragmenter af tanker om menneskets storhed og elendighed, og væddemålet om Guds eksistens.",
        year: "1670",
        coverColor: "bg-purple-900",
        tags: ["philosophy", "apologetics"],
        link: "https://www.ccel.org/ccel/pascal/pensees.html",
        linkLabel: "Læs online",
        quote: "Hjertet har sine grunde, som fornuften ikke kender.",
        audio: "https://librivox.org/?s=Pensees+Pascal"
    },
    {
        id: "everlasting_man",
        title: "The Everlasting Man",
        author: "G.K. Chesterton",
        description: "Historien om menneskeheden set gennem det kristne perspektiv. Bogen der omvendte C.S. Lewis.",
        year: "1925",
        coverColor: "bg-orange-900",
        tags: ["history", "apologetics"],
        link: "https://en.wikipedia.org/wiki/The_Everlasting_Man",
        linkLabel: "Læs mere",
        quote: "En død ting kan følge med strømmen, men kun en levende ting kan gå imod den."
    },
    {
        id: "dialogue",
        title: "The Dialogue",
        author: "Catherine of Siena",
        description: "Sjælens samtale med Gud — modtaget i ekstase af en af Kirkens største mystikere og lærere.",
        year: "1378",
        coverColor: "bg-fuchsia-900",
        tags: ["mysticism", "theology"],
        link: "https://www.ccel.org/ccel/catherine/dialog.html",
        linkLabel: "Læs online",
        quote: "Hvis I er, hvad I bør være, vil I sætte hele Italien i brand."
    },
    {
        id: "revelations",
        title: "Revelations of Divine Love",
        author: "Julian of Norwich",
        description: "Den første bog på engelsk skrevet af en kvinde. Seksten åbenbaringer om Guds kærlighed.",
        year: "1395",
        coverColor: "bg-sky-900",
        tags: ["mysticism", "classic"],
        link: "https://www.gutenberg.org/ebooks/52958",
        linkLabel: "Læs online",
        quote: "Alt skal blive godt, og alt skal blive godt, og alle ting skal blive gode.",
        audio: "https://librivox.org/?s=Revelations+Divine+Love+Julian"
    },
    {
        id: "devout_life",
        title: "Introduction to the Devout Life",
        author: "Francis de Sales",
        description: "En blid vejledning til hellighed midt i en travl hverdag — for almindelige mennesker i verden.",
        year: "1609",
        coverColor: "bg-teal-900",
        tags: ["devotional", "spirituality"],
        link: "https://www.ccel.org/ccel/desales/devout_life.html",
        linkLabel: "Læs online",
        quote: "Vær tålmodig med alle, men frem for alt med dig selv.",
        audio: "https://librivox.org/?s=Introduction+Devout+Life"
    },
    {
        id: "dark_night",
        title: "The Dark Night of the Soul",
        author: "John of the Cross",
        description: "Om sjælens mørke nat — den smertefulde renselse, hvor troen modnes og forenes med Gud.",
        year: "1619",
        coverColor: "bg-indigo-900",
        tags: ["mysticism", "spirituality"],
        link: "https://www.ccel.org/ccel/john_cross/dark_night.html",
        linkLabel: "Læs online",
        quote: "I aftenens stund vil vi blive bedømt på kærligheden.",
        audio: "https://librivox.org/?s=Dark+Night+Soul+John+Cross"
    },
    {
        id: "story_soul",
        title: "Story of a Soul",
        author: "Thérèse of Lisieux",
        description: "Selvbiografien om 'den lille vej' — at gøre små ting med stor kærlighed. En kirkelærer på 24 år.",
        year: "1898",
        coverColor: "bg-rose-900",
        tags: ["biography", "devotional"],
        link: "https://www.ccel.org/ccel/therese/autobio.html",
        linkLabel: "Læs online",
        quote: "Min kald er kærligheden. I hjertet af Kirken, min mor, vil jeg være kærligheden.",
        audio: "https://librivox.org/?s=Story+of+a+Soul"
    },
    {
        id: "presence_god",
        title: "The Practice of the Presence of God",
        author: "Brother Lawrence",
        description: "En ydmyg lægbroders enkle hemmelighed: at leve uafbrudt i Guds nærvær — selv ved opvasken.",
        year: "1692",
        coverColor: "bg-emerald-900",
        tags: ["devotional", "spirituality"],
        link: "https://www.ccel.org/ccel/lawrence/practice.html",
        linkLabel: "Læs online",
        quote: "Vi kan gøre små ting for Gud; jeg vender min pandekage i panden af kærlighed til ham.",
        audio: "https://librivox.org/?s=Practice+Presence+God"
    }
];
