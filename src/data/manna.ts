export interface Manna {
    text: string;
    source: string;
    season?: string; // e.g. 'lent', 'advent' or undefined for any
}

export const MANNA: Manna[] = [
    { text: "Sent, Herre, lærte jeg at elske Dig, Du Skønhed, så gammel og så ny.", source: "Augustin" },
    { text: "Tro er at tro på det, du ikke ser; belønningen for denne tro er at se det, du tror på.", source: "Augustin" },
    { text: "Gud har skabt os til sig selv, og vort hjerte er uroligt, indtil det finder hvile i Ham.", source: "Augustin" },
    { text: "Kærligheden er selve sjælens tyngdekraft.", source: "Augustin" },
    { text: "Bøn er ikke at bede om det, vi ønsker, men at ønske det, Gud vil.", source: "Søren Kierkegaard" }, // Ecumenical context valid for DK
    { text: "At bede er at trække vejret ved Gud.", source: "Thomas Aquinas" },
    { text: "Gør det lille med stor kærlighed.", source: "Moder Teresa" },
    { text: "Verden er din katedral.", source: "Frans af Assisi" },
    { text: "Frygt ikke, jeg er med dig.", source: "Esajas 41:10" },
    { text: "Salige er de rene af hjertet, for de skal se Gud.", source: "Matthæus 5:8" }
];

export function getDailyManna(): Manna {
    // 1. Get today's date string (stable for the day)
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    // 2. Simple hash function
    let hash = 0;
    for (let i = 0; i < today.length; i++) {
        hash = ((hash << 5) - hash) + today.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }

    // 3. Pick index
    const index = Math.abs(hash) % MANNA.length;
    return MANNA[index];
}
