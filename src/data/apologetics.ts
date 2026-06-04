
export interface Scenario {
    id: string;
    category: 'Gud' | 'Jesus' | 'Moral' | 'Videnskab' | 'Kirken';
    objection: string;
    objectionSource?: string;
    correctResponseId: string;
    responses: Response[];
    explanation: string;
    scripture?: string;
    ccc?: string;
}

export interface Response {
    id: string;
    text: string;
    type: 'Thomistisk' | 'Bibelsk' | 'Moderne' | 'Fejlslutning';
}

export const scenarios: Scenario[] = [
    {
        id: 'problem_of_evil',
        scripture: 'Rom 8,28; Visd 1,13–14',
        ccc: 'KKK 309–314, 324',
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
        scripture: '1 Mos 1,1; Joh 1,1–3',
        ccc: 'KKK 159, 283–284',
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
        scripture: 'Rom 2,14–15',
        ccc: 'KKK 1954–1960',
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
    },
    {
        id: 'crusades_inquisition',
        scripture: 'Matt 13,24–30',
        ccc: 'KKK 827',
        category: 'Moral',
        objection: "Religion er årsag til al krig. Se bare på Korstogene og Inkvisitionen. Kirken har blod på hænderne.",
        objectionSource: "Historisk Kritik",
        correctResponseId: 'historical_context',
        explanation: "Korstogene var en defensiv reaktion på 400 års aggressive erobringer af kristne lande. Mens vold aldrig er evangelisk, skal historien dømmes i kontekst. Ateistiske regimer (kommunisme/nazisme) i det 20. århundrede dræbte langt flere end alle religionskrige tilsammen. Troens misbrug ugyldiggør ikke troens sandhed.",
        responses: [
            {
                id: 'deny_violence',
                text: "Det var aldrig Kirken, kun dårlige mennesker. Kirken har aldrig gjort noget forkert.",
                type: 'Fejlslutning'
            },
            {
                id: 'historical_context',
                text: "Mennesker i Kirken har fejlet, men Korstogene var (oprindeligt) defensive. Sekulære ideologier har dog vist sig langt mere blodige.",
                type: 'Thomistisk'
            },
            {
                id: 'religion_bad',
                text: "Ja, vi burde afskaffe al religion for at få fred.",
                type: 'Moderne'
            }
        ]
    },
    {
        id: 'male_priesthood',
        scripture: 'Mark 3,13–19',
        ccc: 'KKK 1577',
        category: 'Kirken',
        objection: "Kirken er sexistisk, fordi den ikke tillader kvindelige præster. Det er diskrimination i 2026.",
        objectionSource: "Moderne Feminisme",
        correctResponseId: 'sacramental_sign',
        explanation: "Præsten agerer 'in persona Christi' (i Kristi person) ved alteret. Da Jesus var en mand, og da Han valgte 12 mænd som Apostle trods mange stærke kvinder omkring sig (inklusiv Jomfru Maria), følger Kirken Hans eksempel. Det handler ikke om værdighed (Maria er højere end alle præster), men om sakramental symbolik. Mand og kvinde er lige, men ikke ens.",
        responses: [
            {
                id: 'sexist_tradition',
                text: "Det er bare en gammel patriarkalsk tradition, som paven burde ændre snart.",
                type: 'Moderne'
            },
            {
                id: 'sacramental_sign',
                text: "Kirken har ikke autoritet til at ændre sakramenterne. Præsten repræsenterer Kristus (Brudgommen), og Kirken er Bruden. Det er teologi, ikke magt.",
                type: 'Thomistisk'
            },
            {
                id: 'women_better',
                text: "Kvinder ville være bedre præster, så vi burde skifte.",
                type: 'Fejlslutning'
            }
        ]
    },
    {
        id: 'eucharist_symbol',
        scripture: 'Joh 6,51–58; 1 Kor 11,23–29',
        ccc: 'KKK 1374–1377',
        category: 'Jesus',
        objection: "Eukaristien er bare et symbol. Jesus sagde 'dette er mit legeme' metaforisk, ligesom 'jeg er døren'.",
        objectionSource: "Protestantisme",
        correctResponseId: 'real_presence',
        explanation: "I Johannes kap. 6 siger Jesus gentagne gange: 'Min kød er sand mad'. Da disciplene forlod ham i chok over dette, kaldte han dem ikke tilbage for at sige 'det var bare en metafor'. Han mente det bogstaveligt. De tidlige kristne troede enstemmigt på Realpræsensen.",
        responses: [
            {
                id: 'just_bread',
                text: "Det er bare brød, der minder os om ham. Intet andet.",
                type: 'Moderne'
            },
            {
                id: 'real_presence',
                text: "Jesus talte bogstaveligt i Joh 6. Kirken har i 2000 år lært, at brødet og vinen substantielt forvandles til Hans Legeme og Blod.",
                type: 'Thomistisk'
            },
            {
                id: 'spiritual_presence',
                text: "Han er der kun åndeligt hvis du tror på det.",
                type: 'Fejlslutning'
            }
        ]
    }
];
