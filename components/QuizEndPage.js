import React, { Component, Fragment } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import QuizQuestion from './QuizQuestion'
import { withNavigation } from 'react-navigation'
import { setNotification, clearNotification } from '../helpers/notification'

class QuizPage extends Component{
    componentDidMount = () => {
        clearNotification().then(setNotification())
    }

    render() {
        const { score, totalCards } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.scoreContainer}>
                    <Text style={styles.scoreHeadingtext}>Your Score is:</Text>
                    <Text style={styles.scoreText}>{score}/{totalCards}</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableHighlight style={styles.tryAgainBtn} onPress={() => this.props.onTryAgain()}>
                        <Text style={styles.btnText}>Try Again</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.backBtn} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.btnText}>Back To Home</Text>
                    </TouchableHighlight>
                </View>
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
    backBtn: {
        padding: 10,
        margin: 3,
        alignItems: 'center',
        backgroundColor: '#ea7531',
        width: 150,
        borderRadius: 5
    },
    tryAgainBtn: {
        padding: 10,
        margin: 3,
        alignItems: 'center',
        backgroundColor: '#636363',
        width: 150,
        borderRadius: 5
    },
    scoreContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scoreHeadingText: {
        fontSize: 50,
        color: '#303030'
    },
    scoreText: {
        fontSize: 80,
        color: '#ea7531'
    }
})

export default withNavigation(QuizPage)