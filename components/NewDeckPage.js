import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TextInput, KeyboardAvoidingView } from 'react-native'
import { withNavigation } from 'react-navigation'
import { createDeck, checkDecks } from '../helpers/accessStorage'

class NewDeckPage extends Component{
    state = {
        title: ''
    }

    handleCreate = () => {
        const title = this.state.title
        this.setState({title: ''})
        createDeck(title).then(({deckId, deck}) => {
            this.props.navigation.navigate('DeckDetail', { deck, deckId })
        }).catch(() => {
            console.log('error in creating deck')
        })
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='position' style={styles.container}>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>Enter the title of your new <Text style={styles.highlightText}>Deck</Text></Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputFieldContainer}>
                        <TextInput
                            value={this.state.title}
                            style={styles.inputField}
                            placeholder="Enter your deck's title"
                            onChangeText={(text) => this.setState({title: text})}
                        />
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableHighlight style={styles.createBtn} onPress={this.handleCreate}>
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
        alignSelf: 'center'
        // width: '80%'
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

export default withNavigation(NewDeckPage)