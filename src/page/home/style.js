import {StyleSheet, Dimensions} from 'react-native'
import Constants from 'expo-constants'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default StyleSheet.create({
    body:{
        flex:1,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#323776',
    },

    screen:{
        flex:2,
        justifyContent:'space-evenly',
        backgroundColor:'#191E58',
        marginBottom:2,
    },
    textScreen:{
        alignSelf:'flex-end',
        fontSize:56,
        color:"#7d93a6",
    },

    buttonContainer:{
        flex:8,
        justifyContent:'space-evenly',
        flexDirection:'row',
        flexWrap:'wrap',
    },

    button:{
        backgroundColor:'#080C3B',
        width: screenWidth/4,
        alignItems:'center',
        borderWidth:2,
        borderColor:'#323776',
        paddingVertical:screenHeight/18,
    },
    button2:{
        backgroundColor:'#080C3B',
        alignItems:'center',
        borderWidth:2,
        borderColor:'#323776',
        width:screenWidth/2,
        paddingVertical:screenHeight/18,
    },
    textButton:{
        color:'#7E82B1'
    }

})