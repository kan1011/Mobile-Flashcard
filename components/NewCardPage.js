import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableHighlight } from 'react-native'
import { createCard, checkDecks } from '../helpers/accessStorage'

class NewCardPage extends Component{
    state = {
        question: '',
        answer: ''
    }

    handleCreateCard = () => {
        const { deckId } = this.props.navigation.state.params
        const { question, answer } = this.state
        createCard({question, answer}, deckId)
        this.setState({question: '', answer: ''})
    }


    render() {
        return (
            <KeyboardAvoidingView behavior='position' style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Enter question and answer for the new <Text style={styles.highlightText}>Card</Text></Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputFieldContainer}>
                        <TextInput
                            value={this.state.question}
                            style={[styles.inputField, {marginBottom: 10}]}
                            placeholder="Enter the question"
                            onChangeText={(text) => this.setState({question: text})}
                        />
                        <TextInput
                            value={this.state.answer}
                            style={[styles.inputField, {marginBottom: 10}]}
                            placeholder="Enter the answer of this question"
                            onChangeText={(text) => this.setState({answer: text})}
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableHighlight style={styles.createBtn} onPress={this.handleCreateCard}>
                            <Text style={styles.btnText}>Create</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </KeyboardAvoidingView>
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
    heading: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingText: {
        fontSize: 30,
        color: '#303030'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 10
    },
    inputField: {
        height: 40,
        flex: 1,
    },
    createBtn: {
        padding: 10,
        width: 150,
        backgroundColor: '#ea7531',
        borderRadius: 5,
        alignItems: 'center'
    },
    btnText: {
        fontSize: 20,
        color: '#f5f5f5'
    },
    inputFieldContainer: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    highlightText: {
        color: '#ea7531'
    }
})

export default NewCardPage