import React, { Component, Fragment } from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'

class QuizQuestion extends Component{
    state = {
        status: 'question'
    }

    componentWillReceiveProps = () => {
        this.setState({
            status: 'question'
        })
    }

    render() {
        const { question, answer } = this.props.card
        return (
            <View style={styles.questionContainer}>
                { this.state.status==='question'
                ?
                <Fragment>
                    <View style={styles.questionTextContainer}>
                        <Text style={styles.questionText}>{question}</Text>
                    </View>
                    <TouchableOpacity style={styles.flipContainer} onPress={() => this.setState({status: 'answer'})}>
                        <Text style={styles.seeAnswerText}>See Answer</Text>
                    </TouchableOpacity>
                </Fragment>
                :
                <Fragment>
                    <View style={styles.questionTextContainer}>
                        <Text style={styles.questionText}>{answer}</Text>
                    </View>
                    <TouchableOpacity style={styles.flipContainer} onPress={() => this.setState({status: 'question'})}>
                        <Text style={styles.seeAnswerText}>See Question</Text>
                    </TouchableOpacity>
                </Fragment>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    questionContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    questionText: {
        fontSize: 30,
        color: '#303030'
    },
    seeAnswerText: {
        color: '#ea7531'
    },
    flipContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    questionTextContainer: {
        flex: 2,
        justifyContent: 'center'
    },
})

export default QuizQuestion