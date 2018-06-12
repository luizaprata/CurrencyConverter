import React, {Component} from 'react'
import { View, StatusBar } from 'react-native'
import {Container} from '../components/Container'
import {Logo} from '../components/Logo'
import {InputWithButton} from '../components/TextInput'
import {ClearButton} from '../components/Button';


const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'GBP'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '79.74'

class Home extends Component {

  handlePressBaseCurrency = () => {
    console.log('base')
  }

  handlePressQuoteCurrency = () => {
    console.log('quote')
  }

  handeTextChange = (text) => {
    console.log('text', text)
  }

  handleSwapCurrency = () => {
    console.log('swap')
  }

  render(){
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton  buttonText={TEMP_BASE_CURRENCY} 
                          onPress={this.handlePressBaseCurrency} 
                          defaultValue={TEMP_BASE_PRICE} 
                          keyboardType="numeric"
                          onChangeText={this.handeTextChange}/>
        <InputWithButton  buttonText={TEMP_QUOTE_CURRENCY} 
                          onPress={this.handlePressQuoteCurrency} 
                          editable={false}
                          defaultValue={TEMP_QUOTE_PRICE}/>
        <ClearButton  text="Reverse Currencies"
                      onPress={this.handleSwapCurrency}/>
      </Container>
    )
  }
}

export default Home