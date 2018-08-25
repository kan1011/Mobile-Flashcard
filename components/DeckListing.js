import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { withNavigationFocus } from 'react-navigation'
import DeckListingItem from './DeckListingItem'
import { checkDecks, getDecks } from '../helpers/accessStorage'

class DeckListing extends Component{
    state = {
        decks: {}
    }

    componentDidMount = () => {
        getDecks().then((decks) => 
            this.setState({decks})
        )
        // checkDecks()
    }

    

    render() {
        const { decks } = this.state
        getDecks().then((updatedDecks) => {
            if (JSON.stringify(updatedDecks)!==JSON.stringify(this.state.decks)){
                this.setState({decks: updatedDecks})
                // it will perform infinite loading
            }
        })
        if (decks){
            return (
                <ScrollView style={styles.mainContainer}>
                    <View style={styles.decks}>
                        {Object.keys(decks).map((deckId) => {
                            return <DeckListingItem key={deckId} deck={decks[deckId]} deckId={deckId}/>
                        })}
                    </View>
                </ScrollView>
            )
        }
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>There is no deck. You can add decks by clicking <Text style={styles.addDeckText}>"Add Deck"</Text> Tab</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
    },
    decks: {
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#ffffff',
    },
    mainText: {
        fontSize: 20,
        color: '#303030'
    },
    addDeckText: {
        fontSize: 30,
        color: '#ea7531'
    }
})

export default withNavigationFocus(DeckListing)