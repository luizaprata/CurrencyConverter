import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, TouchableHighlight, TextInput} from 'react-native'
import styles from './styles'
import color from 'color'


const InputWithButton = (props) => {
    const {buttonText, onPress, editable = true} = props;
    const containerStyles = [styles.container]
    const underlineColorAndroid = 'blue'
    const underlayColor = color(styles.$buttonBackgroundColor).darken(styles.$buttonBackgroundColorModifier)

    if (!editable){
        containerStyles.push(styles.containerDisabled)
    }

    return (
        <View style={containerStyles}>
            <TouchableHighlight style={styles.buttonContainer} underlineColorAndroid={underlineColorAndroid}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border} />
            <TextInput style={styles.input} { ...props } underlineColorAndroid="transparent"/>
        </View>
    )
}

InputWithButton.propTypes = {
    buttonText:PropTypes.string,
    onPress:PropTypes.func,
    editable:PropTypes.bool
}

export default InputWithButton
