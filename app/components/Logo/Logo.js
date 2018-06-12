import React from 'react'
import {View, Image, Text} from 'react-native'
import styles from './styles'

const Logo = () => (
    <View style={styles.container}>
        <Image source={require('./images/entity.png')} style={styles.containerImage}/>
        <Text>Currency Converter</Text>
    </View>
)

export default Logo