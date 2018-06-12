import React, {Component} from 'react'
import { StatusBar, KeyboardAvoidingView } from 'react-native'
import {Container} from '../components/Container'
import {Logo} from '../components/Logo'
import {InputWithButton} from '../components/TextInput'
import {ClearButton} from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';


const TEMP_BASE_CURRENCY = 'USD'
const TEMP_QUOTE_CURRENCY = 'GBP'
const TEMP_BASE_PRICE = '100'
const TEMP_QUOTE_PRICE = '79.74'
const TEMP_LAST_CONVERTED = new Date();
const TEMP_CONVERSION_RATE = 0.79739;

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

  handleSwapCurrency = () => {
    console.log('handle swap currency');
  };

  handleOptionsPress = () => {
    console.log('options press');
  };

  render(){
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
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
          <LastConverted  date={TEMP_LAST_CONVERTED}
                          base={TEMP_BASE_CURRENCY}
                          quote={TEMP_QUOTE_CURRENCY}
                          conversionRate={TEMP_CONVERSION_RATE}/>
          <ClearButton  text="Reverse Currencies"
                        onPress={this.handleSwapCurrency}/>
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

export default Home