import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

class DeckListingItem extends Component {
    render() {
        const { deck, deckId } = this.props
        const { title, cards } = deck
        return (
            <TouchableOpacity style={styles.mainContainer} onPress={() => this.props.navigation.navigate('DeckDetail', { deck, deckId})}>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.footed}>
                    <Text style={styles.cards}>{cards.length} Cards</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#ffffff',
      justifyContent: 'flex-start', // main axis
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 18,
      paddingRight: 16,
      height: 150,
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#f5f5f5'
    },
    header: {
        marginBottom: 10,
        marginTop: 10,
    },
    title: {
        fontSize: 20,
        color: '#050505'
    },
    footer: {
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'flex-end'
    },
    cards: {
        color: '#ea7531'
    },
})

export default withNavigation(DeckListingItem)