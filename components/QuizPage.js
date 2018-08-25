import React, { Component, Fragment } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import QuizQuestion from './QuizQuestion'
import QuizEndPage from './QuizEndPage'

class QuizPage extends Component{
    state = {
        totalCards: 0,
        currentCard: 0,
        currentCardId: 0,
        correct: 0,
        incorrect: 0,
        cards: []
    }

    componentDidMount = () => {
        const { cards } = this.props.navigation.state.params
        if (cards.length !== 0){
            this.setState(() => {
                return {
                    totalCards: cards.length,
                    currentCard: 1,
                    currentCardId: 0,
                    cards
                }
            })
        }
    }

    handleCorrect = () => {
        this.setState({
            correct: this.state.correct + 1
        })
        this.nextQuestion()
    }

    handleIncorrect = () => {
        this.setState({
            incorrect: this.state.incorrect + 1
        })
        this.nextQuestion()
    }

    nextQuestion = () => {
        this.setState({
            currentCard: this.state.currentCard + 1,
            currentCardId: this.state.currentCardId + 1,
        })
    }

    hadnleTryAgain = () => {
        this.setState({
            currentCard: 1,
            currentCardId: 0,
            correct: 0,
            incorrect: 0
        })
    }

    render() {
        const { totalCards, currentCard, currentCardId, cards } = this.state
        if (totalCards <= 0){
            return(
                <View style={styles.container}>
                    <Text style={styles.mainText}>There is no cards in your deck. You can add cards by clicking <Text style={styles.addDeckText}>"Add Card"</Text> button</Text>
                </View>
            )
        }

        if (currentCard > totalCards){
            return (
                <QuizEndPage score={this.state.correct} totalCards={totalCards} onTryAgain={this.hadnleTryAgain}/>
            )
        } 

        if (currentCardId < totalCards){
            return (
                <View style={styles.container}>
                    <View style={styles.cardCountContainer}>
                        <Text style={styles.cardCount}>{currentCard} out of {totalCards}</Text>
                    </View>
                    <QuizQuestion card={cards[currentCardId]}/>
                    <View style={styles.btnContainer}>
                        <TouchableHighlight style={styles.correctBtn} onPress={() => this.handleCorrect()}>
                            <Text style={styles.btnText}>Correct</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.incorrectBtn} onPress={() => this.handleIncorrect()}>
                            <Text style={styles.btnText}>Incorrect</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            )
        }

        return (
            <View>
                <Text> Something's Wrong!!!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    btnText: {
        color: '#f5f5f5'
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingBottom: 10
    },
    correctBtn: {
        padding: 10,
        marginRight: 3,
        alignItems: 'center',
        backgroundColor: '#ea7531',
        width: 150,
        borderRadius: 5
    },
    incorrectBtn: {
        padding: 10,
        marginLeft: 3,
        alignItems: 'center',
        backgroundColor: '#636363',
        borderRadius: 5,
        width: 150
    },
    cardCountContainer: {
        flex: 1,
        paddingTop: 10
    },
    cardCount: {
        fontSize: 18,
        color: '#ea7531',
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

export default QuizPage