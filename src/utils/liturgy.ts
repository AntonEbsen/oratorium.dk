export type LiturgicalColor = 'green' | 'purple' | 'white' | 'red' | 'black' | 'rose';

export interface LiturgicalSeason {
    name: string; // Danish name
    color: LiturgicalColor;
    description: string;
}

export interface Saint {
    name: string;
    title?: string;
}

const saintsData: Record<string, Saint> = {
    "1-1": { name: "Guds Moder Maria", title: "Højtid" },
    "1-25": { name: "Paulus' Omvendelse", title: "Apostel" },
    "1-26": { name: "Timotheus og Titus", title: "Biskopper" },
    "1-28": { name: "Thomas Aquinas", title: "Kirkelærer" },
    "2-2": { name: "Kyndelmisse", title: "Fest" },
    "3-19": { name: "Josef", title: "Jomfru Marias Brudgom" },
    "3-25": { name: "Herrens Bebudelse", title: "Højtid" },
    "4-23": { name: "Georg", title: "Martyr" },
    "4-25": { name: "Markus", title: "Evangelist" },
    "4-29": { name: "Katarina af Siena", title: "Kirkelærer" },
    "5-3": { name: "Filip og Jakob", title: "Apostle" },
    "5-31": { name: "Marias Besøgelse", title: "Fest" },
    "6-24": { name: "Johannes Døberens Fødsel", title: "Højtid" },
    "6-29": { name: "Peter og Paulus", title: "Apostle" },
    "7-22": { name: "Maria Magdalena", title: "Apostel" },
    "7-25": { name: "Jakob", title: "Apostel" },
    "7-31": { name: "Ignatius af Loyola", title: "Præst" },
    "8-10": { name: "Laurentius", title: "Diakon og Martyr" },
    "8-15": { name: "Jomfru Marias Himmelfart", title: "Højtid" },
    "8-24": { name: "Bartolomæus", title: "Apostel" },
    "8-28": { name: "Augustin", title: "Biskop og Kirkelærer" },
    "9-8": { name: "Jomfru Marias Fødsel", title: "Fest" },
    "9-14": { name: "Korsets Ophøjelse", title: "Fest" },
    "9-21": { name: "Matthæus", title: "Apostel og Evangelist" },
    "9-29": { name: "Mikael, Gabriel og Rafael", title: "Ærkeengle" },
    "10-4": { name: "Frans af Assisi", title: "Munk" },
    "10-7": { name: "Vor Frue af Rosenkransen", title: "Fest" },
    "10-18": { name: "Lukas", title: "Evangelist" },
    "11-1": { name: "Alle Helgen", title: "Højtid" },
    "11-2": { name: "Alle Sjæle", title: "Ihukommelse" },
    "11-30": { name: "Andreas", title: "Apostel" },
    "12-6": { name: "Nikolaus", title: "Biskop" },
    "12-8": { name: "Marias Ubesmittede Undfangelse", title: "Højtid" },
    "12-13": { name: "Lucia", title: "Jomfru og Martyr" },
    "12-25": { name: "Jesu Fødsel", title: "Højtid" },
    "12-26": { name: "Stefanus", title: "Protomartyr" },
    "12-27": { name: "Johannes", title: "Apostel og Evangelist" },
};

export function getSaint(date: Date): Saint | null {
    const key = `${date.getMonth() + 1}-${date.getDate()}`;
    return saintsData[key] || null;
}

export function getLiturgicalSeason(date: Date = new Date()): LiturgicalSeason {
    const atMidnight = (x: Date) => { const c = new Date(x); c.setHours(0, 0, 0, 0); return c; };
    const addDays = (base: Date, n: number) => { const c = atMidnight(base); c.setDate(c.getDate() + n); return c; };

    const d = atMidnight(date);
    const y = d.getFullYear();
    const t = d.getTime();

    // Movable dates derived from Easter (Gauss).
    const easter = atMidnight(getEasterDate(y));
    const ashWed = addDays(easter, -46);
    const laetare = addDays(easter, -21);  // 4th Sunday of Lent
    const palmSun = addDays(easter, -7);
    const holyThu = addDays(easter, -3);
    const goodFri = addDays(easter, -2);
    const holySat = addDays(easter, -1);
    const pentecost = addDays(easter, 49);

    // Advent: 1st Sunday = the Sunday on/before 24 Dec, minus three weeks.
    const christmas = atMidnight(new Date(y, 11, 25));
    const dec24 = new Date(y, 11, 24);
    const fourthAdvent = addDays(dec24, -dec24.getDay());
    const firstAdvent = addDays(fourthAdvent, -21);
    const gaudete = addDays(firstAdvent, 14);  // 3rd Sunday of Advent

    // Baptism of the Lord: the Sunday after Epiphany (6 Jan).
    const epiphany = new Date(y, 0, 6);
    const baptism = addDays(epiphany, ((7 - epiphany.getDay()) % 7) || 7);

    // ADVENT
    if (t >= firstAdvent.getTime() && t < christmas.getTime()) {
        return isSameDay(d, gaudete)
            ? { name: "3. søndag i advent", color: 'rose', description: "Gaudete — glæd jer, for Herren er nær." }
            : { name: "Advent", color: 'purple', description: "Ventetiden. Vi forbereder os på Kristi komme i ydmyghed og bod." };
    }

    // CHRISTMAS (25 Dec → Baptism of the Lord, across the new year)
    if (t >= christmas.getTime() || t <= baptism.getTime()) {
        return { name: "Juletiden", color: 'white', description: "Glæden over Guds inkarnation. Kristus er født!" };
    }

    // TRIDUUM (individual days)
    if (isSameDay(d, holyThu)) return { name: "Skærtorsdag", color: 'white', description: "Herrens nadver — den nat, da han blev forrådt." };
    if (isSameDay(d, goodFri)) return { name: "Langfredag", color: 'red', description: "Korset. Kristus dør for vores skyld." };
    if (isSameDay(d, holySat)) return { name: "Påskelørdag", color: 'white', description: "Graven og stilheden — og påskenattens lys." };

    // LENT (Ash Wednesday → Holy Thursday)
    if (t >= ashWed.getTime() && t < holyThu.getTime()) {
        if (isSameDay(d, laetare)) return { name: "4. søndag i fasten", color: 'rose', description: "Laetare — glæd dig, påsken nærmer sig." };
        if (t >= palmSun.getTime()) return { name: "Den Stille Uge", color: 'purple', description: "Vi vandrer med Jesus mod korset og graven." };
        return { name: "Fasten", color: 'purple', description: "40 dage i ørkenen. Bøn, faste og almisse." };
    }

    // EASTER (Easter Sunday → Pentecost)
    if (isSameDay(d, pentecost)) return { name: "Pinse", color: 'red', description: "Helligånden kommer. Kirkens fødselsdag." };
    if (t >= easter.getTime() && t < pentecost.getTime()) {
        return { name: "Påsketiden", color: 'white', description: "Han er opstanden! Døden er overvundet. Alleluia!" };
    }

    // ORDINARY TIME
    return { name: "Almindelig Tid", color: 'green', description: "Kirken vokser. Vi lever i troen i hverdagen." };
}

// Gauss Algorithm for Easter Date
function getEasterDate(year: number): Date {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);
    const month = Math.floor((h + l - 7 * m + 114) / 31) - 1; // 0-indexed
    const day = ((h + l - 7 * m + 114) % 31) + 1;

    return new Date(year, month, day);
}

function isSameDay(d1: Date, d2: Date) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}
