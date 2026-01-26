
export interface Scenario {
    id: string;
    category: 'God' | 'Jesus' | 'Morality' | 'Science';
    objection: string;
    objectionSource?: string; // e.g. "Common Atheist Argument"
    correctResponseId: string;
    responses: Response[];
    explanation: string; // The "Win" text explaining why this is the answer
}

export interface Response {
    id: string;
    text: string;
    type: 'Thomistic' | 'Scriptural' | 'Modern' | 'Fallacy'; // Fallacy is a wrong answer
}

export const scenarios: Scenario[] = [
    {
        id: 'problem_of_evil',
        category: 'God',
        objection: "If God is all-powerful and all-loving, why does suffering exist? Either He can't stop it (not powerful), or He won't (not loving).",
        objectionSource: "The Problem of Evil (Epicurus)",
        correctResponseId: 'free_will_greater_good',
        explanation: "St. Thomas Aquinas argues that God permits evil only to bring about a greater good. Without free will (the capacity to choose wrong), true love and virtue would be impossible. Suffering is often the result of this freedom or a means to spiritual perfection.",
        responses: [
            {
                id: 'not_powerful',
                text: "Maybe God isn't totally powerful, He's just doing His best against cosmic forces.",
                type: 'Fallacy'
            },
            {
                id: 'free_will_greater_good',
                text: "God permits evil in order to draw forth a greater good. Free will is necessary for love, and the potential for evil is the price of that freedom.",
                type: 'Thomistic'
            },
            {
                id: 'illusion',
                text: "Suffering is just an illusion of the mind. It is not real.",
                type: 'Fallacy'
            }
        ]
    },
    {
        id: 'science_vs_faith',
        category: 'Science',
        objection: "Science explains how the universe began (Big Bang, Evolution). We don't need God as an explanation anymore.",
        objectionSource: "Scientism",
        correctResponseId: 'primary_cause',
        explanation: "Science studies *secondary causes* (how things work within nature). God is the *Primary Cause* (why nature exists at all). Evolution explains 'how' we developed; God explains 'why' there is something rather than nothing. The Big Bang requires a Prime Mover.",
        responses: [
            {
                id: 'deny_science',
                text: "Science is a lie. The Big Bang never happened and the earth is 6000 years old.",
                type: 'Fallacy'
            },
            {
                id: 'primary_cause',
                text: "Science describes the mechanisms (secondary causes), but God provides the existence (Primary Cause). Evolution requires a Designer to set the laws in motion.",
                type: 'Thomistic'
            },
            {
                id: 'separate_magisteria',
                text: "Science and Religion have nothing to do with each other. Keep them totally separate.",
                type: 'Modern' // Weak answer
            }
        ]
    },
    {
        id: 'morality_subjective',
        category: 'Morality',
        objection: "Morality is just a social construct or evolutionary survival mechanism. There is no objective 'Good' or 'Bad'.",
        objectionSource: "Moral Relativism",
        correctResponseId: 'natural_law',
        explanation: "If morality is subjective, then we cannot say the Holocaust was 'wrong', only that we disliked it. The Natural Law is written on the human heart; we recognize objective moral truths (like 'it is wrong to punish the innocent') which points to a Moral Lawgiver.",
        responses: [
            {
                id: 'society_says',
                text: "You are right, we just follow what society votes is best for everyone.",
                type: 'Fallacy'
            },
            {
                id: 'feeling',
                text: "Good is just what feels good to me personally.",
                type: 'Fallacy'
            },
            {
                id: 'natural_law',
                text: "Objective moral duties exist (Natural Law). Even you admit some things are truly evil. An objective Moral Law requires a transcendent Moral Lawgiver.",
                type: 'Thomistic'
            }
        ]
    }
];
