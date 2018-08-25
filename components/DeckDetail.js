import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import { withNavigation, withNavigationFocus } from 'react-navigation'
import { getDeck } from '../helpers/accessStorage'

class DeckDetail extends Component{
    state = {
        deck: {title: '', cards: []},
        deckId: ''
    }

    static navigationOptions = ({ navigation }) => {
        const { deck } = navigation.state.params

        return ({
            title: deck.title,
        })
    }

    componentDidMount = () => {
        const { deck, deckId } = this.props.navigation.state.params
        console.log('loading did mount')
        this.setState({deck, deckId})
    }

    render() {
        const { deck, deckId } = this.state
        getDeck(deckId).then((updatedDeck) => {
            if (JSON.stringify(updatedDeck)!==JSON.stringify(deck)){
                this.setState({deck: updatedDeck})
            }
        }).catch(() => {
        })
        console.log('loading Deck Detail')
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>This is the Deck of <Text style={styles.deckTitleText}>{deck.title}</Text></Text>
                    <Text style={styles.cardsText}>{deck.cards.length} cards</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.startBtn} onPress={() => this.props.navigation.navigate('QuizPage', {cards: deck.cards})}>
                        <Text style={styles.btnText}>Start Quiz</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.addBtn} onPress={() => this.props.navigation.navigate('AddCard', { deckId })}>
                        <Text style={styles.btnText}>Add Card</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        flex: 1
    },
    textContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        color: '#303030',
        paddingBottom: 5
    },
    deckTitleText: {
        fontSize: 30,
        color: '#ea7531'
    },
    cardsText: {
        fontSize: 13,
        color: '#636363'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingBottom: 10
    },
    startBtn: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#ea7531',
        width: 150,
        borderRadius: 5
    },
    addBtn: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#636363',
        borderRadius: 5,
        width: 150
    },
    btnText: {
        color: '#f5f5f5'
    }
})

export default withNavigation(withNavigationFocus(DeckDetail))