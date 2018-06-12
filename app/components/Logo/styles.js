import EStyleSheet from 'react-native-extended-stylesheet'
import {Dimensions} from 'react-native'

const imgW = Dimensions.get('window').width * 0.25
const imgH = Dimensions.get('window').height * 0.25

export default EStyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'$primaryBlue'
    },
    containerImage:{
        width: Math.min(imgH,imgW),
        height: Math.min(imgH,imgW)
    }
})