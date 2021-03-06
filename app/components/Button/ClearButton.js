import React from 'react'
import PropTypes from 'prop-types'
import {TouchableOpacity, View, Text, Image} from 'react-native'
import styles from './styles'


const ClearButton = (props) => {
    const { text, onPress } = props
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.wrapper}>
                <Image style={styles.icon} source={require('./images/iconRefresh.png')}/>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

ClearButton.propTypes = {
    text:PropTypes.string,
    onPress:PropTypes.func,
}

export default ClearButton

