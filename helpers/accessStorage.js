import { AsyncStorage } from 'react-native'
import { getSampleDecks } from '../data/decks'

const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const DECKSKEY = 'DECKSKEY'

export const initialDecks = () => {
    AsyncStorage.setItem(DECKSKEY, JSON.stringify(getSampleDecks()))
}

export const getDecks = () => {
    return new Promise((res, rej) => {
        AsyncStorage.getItem(DECKSKEY).then((decks) => {
            res(JSON.parse(decks))
        }).catch((error) => {
            console.error('getDecksError', error)
            rej({})
        })
    })
}

export const createDeck = (title) => {
    const id = generateId()
    
    const newDeck = {
        title,
        cards: []
    }
    return new Promise((res, rej) => {
        AsyncStorage.getItem(DECKSKEY).then((decks) => {
            if(decks){
                let combinedDeck = JSON.parse(decks)
                combinedDeck = {...combinedDeck, [id]: newDeck}
                AsyncStorage.setItem(DECKSKEY, JSON.stringify(combinedDeck))
            }else{
                AsyncStorage.setItem(DECKSKEY, JSON.stringify({newDeck}))
            }
            res({deckId: id, deck: newDeck})
        }).catch((error) => {
            console.error('createDeckError', error)
            rej({})
        })
    })
}

export const createCard = (card, deckId) => {
    getDecks().then((decks) => {
        if(decks){
            let updatedDecks = decks
            updatedDecks[deckId].cards.push(card)
            AsyncStorage.mergeItem(DECKSKEY, JSON.stringify(updatedDecks))
        }else{
            console.error('createCardError', 'No Deck')
        }
    }).catch((error) => {
        console.error('createCardError', error)
    })
}

export const getDeck = (deckId) => {
    return new Promise((res, rej) => {
        AsyncStorage.getItem(DECKSKEY).then((decks) => {
            const decksJson = JSON.parse(decks)
            if (decksJson[deckId]){
                res(decksJson[deckId])
            }else{
                rej({})
            }
        }).catch((error) => {
            console.error('getDecksError', error)
            rej({})
        })
    })
}


export const checkDecks = () => {
    AsyncStorage.getItem(DECKSKEY).then((decks) => console.log('checkDecks', JSON.parse(decks)))
}