
export interface Term {
    id: string;
    word: string;
    definition: string;
    category: 'Liturgi' | 'Teologi' | 'Hierarki' | 'Bøn' | 'Andet';
}

export const dictionary: Term[] = [
    {
        id: 'absolution',
        word: 'Absolution',
        definition: 'Syndsforladelse. Den handling i skriftemålet, hvor præsten på Kristi vegne tilgiver synderen med ordene: "Jeg løser dig fra dine synder...".',
        category: 'Liturgi'
    },
    {
        id: 'adoration',
        word: 'Adoration',
        definition: 'Tilbedelse af Det Allerhelligste Sakramente (Eukaristien), som er udstillet i en monstrans. Vi knæler i stilhed foran Jesu fysiske nærvær.',
        category: 'Bøn'
    },
    {
        id: 'altar',
        word: 'Alter',
        definition: 'Bordet i kirken, hvor eukaristiens offer (Messen) fejres. Det symboliserer både Kristi offerdød og Den Sidste Nadver.',
        category: 'Liturgi'
    },
    {
        id: 'amen',
        word: 'Amen',
        definition: 'Hebraisk for "Det står fast" eller "Må det ske". Bruges som afslutning på bønner for at bekræfte vores tro på det sagte.',
        category: 'Bøn'
    },
    {
        id: 'apostolisk_succession',
        word: 'Apostolisk Succession',
        definition: 'Den uafbrudte række af biskopper, der går helt tilbage til Apostlene. Enhver katolsk biskop er blevet viet af en anden biskop, som blev viet af en anden... tilbage til Peter.',
        category: 'Hierarki'
    },
    {
        id: 'bod',
        word: 'Bod',
        definition: 'Handlinger (bøn, faste, almisse) vi gør for at rette op på skaden forvoldt af synd og for at vende os mod Gud.',
        category: 'Teologi'
    },
    {
        id: 'dogme',
        word: 'Dogme',
        definition: 'En sandhed åbenbaret af Gud, som Kirken lærer er bindende for alle troende. F.eks. Treenigheden eller Jesu guddommelighed.',
        category: 'Teologi'
    },
    {
        id: 'eukaristi',
        word: 'Eukaristi',
        definition: 'Fra græsk "taksigelse". Kirkens vigtigste sakramente, hvor brød og vin ved Helligåndens kraft bliver til Jesu Kristi Legeme og Blod. Også kendt som Nadver eller Kommunion.',
        category: 'Liturgi'
    },
    {
        id: 'evangelium',
        word: 'Evangelium',
        definition: '"Det glade budskab". De fire bøger i Det Nye Testamente (Matthæus, Markus, Lukas, Johannes), der beretter om Jesu liv, død og opstandelse.',
        category: 'Teologi'
    },
    {
        id: 'habit',
        word: 'Habit',
        definition: 'Den særlige klædedragt båret af munke og nonner (f.eks. brun for franciskanere, sort for benediktinere) som tegn på deres indvielse.',
        category: 'Hierarki'
    },
    {
        id: 'hostie',
        word: 'Hostie',
        definition: 'Det usyrede brød (oblat), der bruges i messen. Efter forvandlingen er det ikke længere brød, men Kristi Legeme.',
        category: 'Liturgi'
    },
    {
        id: 'inkarnation',
        word: 'Inkarnation',
        definition: 'At Gud blev menneske i Jesus Kristus. "Ordet blev kød og tog bolig iblandt os".',
        category: 'Teologi'
    },
    {
        id: 'katekismus',
        word: 'Katekismus',
        definition: 'En bog der sammenfatter hele den katolske tro. Den Katolske Kirkes Katekismus (KKK) er hovedværket.',
        category: 'Teologi'
    },
    {
        id: 'messe',
        word: 'Messe',
        definition: 'Den katolske gudstjeneste. Kommer af latinsk "Missa" (udsendelse). Består af Ordets Liturgi og Eukaristiens Liturgi.',
        category: 'Liturgi'
    },
    {
        id: 'monstrans',
        word: 'Monstrans',
        definition: 'En gylden beholder, ofte solformet, hvori den indviede hostie udstilles til tilbedelse (Adoration).',
        category: 'Liturgi'
    },
    {
        id: 'novene',
        word: 'Novene',
        definition: 'En bøn der bedes i 9 dage i træk for et særligt anliggende. Efterligner de 9 dage Apostlene bad mellem Kristi Himmelfart og Pinse.',
        category: 'Bøn'
    },
    {
        id: 'pave',
        word: 'Pave',
        definition: 'Biskoppen af Rom og efterfølger til Sankt Peter. Han er hele Kirkens synlige overhovede ("Kristi Vikar").',
        category: 'Hierarki'
    },
    {
        id: 'reliquie',
        word: 'Relikvie',
        definition: 'Rester af en helgen (f.eks. knogle) eller genstande de har rørt. Vi ærer dem, fordi Helligånden boede i disse kroppe.',
        category: 'Andet'
    },
    {
        id: 'rosenkrans',
        word: 'Rosenkrans',
        definition: 'En meditativ bøn, hvor man gentager Ave Maria mens man rører ved perler på en kæde og mediterer over begivenheder i Jesu liv (Mysterier).',
        category: 'Bøn'
    },
    {
        id: 'sakramente',
        word: 'Sakramente',
        definition: 'Et synligt tegn, indstiftet af Kristus, som giver usynlig nåde. Der er 7: Dåb, Firmelse, Eukaristi, Skriftemål, Syges Salvelse, Ægtevielse, Præstevielse.',
        category: 'Teologi'
    },
    {
        id: 'tabernakel',
        word: 'Tabernakel',
        definition: 'Det gyldne skab i kirken, hvor de indviede hostier opbevares. Her er Jesus reelt tilstede. Markeres ved en rød lampe.',
        category: 'Liturgi'
    },
    {
        id: 'transubstantiation',
        word: 'Transubstantiation',
        definition: 'Det "svære ord". Det mirakel, hvor substansen (væsenet) af brød og vin forvandles til Kristi Legeme og Blod, selvom accidenserne (smag, udseende) forbliver uændrede.',
        category: 'Teologi'
    },
    {
        id: 'treenighed',
        word: 'Treenighed',
        definition: 'Troen på én Gud i tre personer: Faderen, Sønnen og Helligånden.',
        category: 'Teologi'
    },
    {
        id: 'vievand',
        word: 'Vievand',
        definition: 'Vand velsignet af en præst. Vi korser os med det for at mindes vores dåb og søge Guds beskyttelse.',
        category: 'Liturgi'
    }
];
