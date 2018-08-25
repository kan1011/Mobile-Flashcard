const decks = {
    "1": {
        title: 'Math',
        cards: [
            {
                id: 1,
                question: '1 + 1',
                answer: '2'
            },
            {
                id: 2,
                question: '32 x 3',
                answer: '96'
            },
            {
                id: 3,
                question: '4 ^ 3',
                answer: '96'
            }
        ]
    },
    "2": {
        title: 'Hong Kong',
        cards: [
            {
                id: 1,
                question: 'How is the reputation in Hong Kong',
                answer: '7 millions'
            },
            {
                id: 2,
                question: 'Does Hong Kong speak Madarin',
                answer: 'No, definitely NOOO'
            },
            {
                id: 3,
                question: 'Hong Kong is China?',
                answer: 'Please dont say this!'
            },
            {
                id: 4,
                question: 'What is the name of the well-known harbor in Hong Kong',
                answer: 'Victoria Harbor'
            }
        ]
    },
}

export const getSampleDecks = () => {
    return decks
}