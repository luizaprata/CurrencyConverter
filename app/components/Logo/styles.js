import EStyleSheet from 'react-native-extended-stylesheet'
import {Dimensions} from 'react-native'

const imgW = Dimensions.get('window').width * 0.75
const imgH = Dimensions.get('window').height * 0.75

export default EStyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'$primaryBlue'
    },
    containerImage:{
        width: Math.min(imgH,imgW),
        height: Math.min(imgH,imgW)
    },
    text:{
        fontWeight: '600',
        fontSize:20,
        marginTop: 0,
        color: '$white'
    }
})
