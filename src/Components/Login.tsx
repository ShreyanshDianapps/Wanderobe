import React from 'react'
import {StyleSheet, View,Text, Touchable, TouchableOpacity} from 'react-native'
import { normalize, vh ,vw} from '../utils/dimensions'
import Color from '../utils/Color'
import Fonts from '../utils/Fonts'
 const Login = () => {
  return (
  <TouchableOpacity style={styles.LoginComp}>
            <Text style={styles.textcomp}>Login</Text>
   </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    LoginComp:{
        width:vw(343),
        height:vh(48),
        backgroundColor:Color.Neutral_White,
        paddingRight:vw(20),
        paddingLeft:vw(20),
        gap:vw(10),
        justifyContent:"center"

    },
    textcomp:{
        fontFamily:Fonts.Lexend,
        color:Color.Neutral_Black,
        fontSize:normalize(16),
        fontWeight:400  ,
        alignSelf:"center"

    }
})
export default Login
