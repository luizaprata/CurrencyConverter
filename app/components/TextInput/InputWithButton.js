import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, TouchableHighlight, TextInput} from 'react-native'
import styles from './styles'

const InputWithButton = ({buttonText, onPress, editable = true}) => (
    <View style={styles.container}>
        <TouchableHighlight style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.border} />
        <TextInput style={styles.input} />
    </View>
)

InputWithButton.propTypes = {
    buttonText:PropTypes.string,
    onPress:PropTypes.func,
    editable:PropTypes.bool
}

export default InputWithButton
