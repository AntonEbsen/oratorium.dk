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
        linkLabel: "Læs online"
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
        linkLabel: "Læs online"
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
        linkLabel: "Læs online"
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
        linkLabel: "Læs mere"
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
        linkLabel: "Læs mere"
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
        linkLabel: "Læs online"
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
        linkLabel: "Læs online"
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
        linkLabel: "Læs mere"
    }
];
