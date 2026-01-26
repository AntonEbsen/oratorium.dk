
export interface Scenario {
    id: string;
    category: 'Gud' | 'Jesus' | 'Moral' | 'Videnskab';
    objection: string;
    objectionSource?: string;
    correctResponseId: string;
    responses: Response[];
    explanation: string;
}

export interface Response {
    id: string;
    text: string;
    type: 'Thomistisk' | 'Bibelsk' | 'Moderne' | 'Fejlslutning';
}

export const scenarios: Scenario[] = [
    {
        id: 'problem_of_evil',
        category: 'Gud',
        objection: "Hvis Gud er almægtig og kærlig, hvorfor findes der så ondskab? Enten kan Han ikke stoppe det (ikke almægtig), eller også vil Han ikke (ikke kærlig).",
        objectionSource: "Det Onde's Problem (Epikur)",
        correctResponseId: 'free_will_greater_good',
        explanation: "St. Thomas Aquinas argumenterer for, at Gud kun tillader det onde for at frembringe et større gode. Uden fri vilje (evnen til at vælge forkert) ville ægte kærlighed ikke være mulig. Lidelse er ofte prisen for denne frihed eller et middel til sjælens renselse.",
        responses: [
            {
                id: 'not_powerful',
                text: "Måske er Gud ikke helt almægtig, men gør bare sit bedste mod kosmiske kræfter.",
                type: 'Fejlslutning'
            },
            {
                id: 'free_will_greater_good',
                text: "Gud tillader det onde for at muliggøre et større gode. Fri vilje er nødvendig for kærlighed, og muligheden for ondskab er prisen for frihed.",
                type: 'Thomistisk'
            },
            {
                id: 'illusion',
                text: "Lidelse er bare en illusion i vores sind. Det er ikke virkeligt.",
                type: 'Fejlslutning'
            }
        ]
    },
    {
        id: 'science_vs_faith',
        category: 'Videnskab',
        objection: "Videnskaben forklarer universets oprindelse (Big Bang, Evolution). Vi har ikke brug for Gud som forklaring længere.",
        objectionSource: "Scientisme",
        correctResponseId: 'primary_cause',
        explanation: "Videnskaben studerer *sekundære årsager* (hvordan tingene virker i naturen). Gud er den *Primære Årsag* (hvorfor naturen overhovedet eksisterer). Evolutionen forklarer 'hvordan' vi udviklede os; Gud forklarer 'hvorfor' der er noget frem for intet. Big Bang kræver en Første Bevæger.",
        responses: [
            {
                id: 'deny_science',
                text: "Videnskaben lyver. Big Bang skete aldrig, og jorden er kun 6000 år gammel.",
                type: 'Fejlslutning'
            },
            {
                id: 'primary_cause',
                text: "Videnskaben beskriver mekanismerne (sekundære årsager), men Gud giver eksistensen (Primær Årsag). Evolution kræver en Designer til at sætte lovene i værk.",
                type: 'Thomistisk'
            },
            {
                id: 'separate_magisteria',
                text: "Videnskab og religion har intet med hinanden at gøre. Hold dem helt adskilt.",
                type: 'Moderne'
            }
        ]
    },
    {
        id: 'morality_subjective',
        category: 'Moral',
        objection: "Moral er bare en social konstruktion eller evolutionær overlevelse. Der findes ikke 'Godt' eller 'Ondt' objektivt set.",
        objectionSource: "Moralrelativisme",
        correctResponseId: 'natural_law',
        explanation: "Hvis moral er subjektiv, kan vi ikke sige, at Holocaust var 'forkert', kun at vi ikke kunne lide det. Naturloven er skrevet i menneskets hjerte; vi genkender objektive moralske sandheder (f.eks. 'det er forkert at straffe den uskyldige'), hvilket peger på en Moralsk Lovgiver.",
        responses: [
            {
                id: 'society_says',
                text: "Du har ret, vi følger bare, hvad samfundet stemmer om er bedst for alle.",
                type: 'Fejlslutning'
            },
            {
                id: 'feeling',
                text: "Det gode er bare det, der føles godt for mig personligt.",
                type: 'Fejlslutning'
            },
            {
                id: 'natural_law',
                text: "Objektive moralske pligter findes (Naturloven). En objektiv Moralsk Lov kræver en transcendent Moralsk Lovgiver.",
                type: 'Thomistisk'
            }
        ]
    }
];
