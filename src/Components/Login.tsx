import React from 'react'
import {StyleSheet, View,Text, Touchable, TouchableOpacity} from 'react-native'
import { normalize, vh ,vw} from '../utils/dimensions'
import Color from '../utils/Color'
import Fonts from '../utils/Fonts'

type LoginProps = {
    style:object;
    text:string;
    backgroundcolor?: string;         
    color?: string;     
    onPress?: () => void;   
  };
 const Login = (props: LoginProps) => {
    
  return (

  <TouchableOpacity onPress={props.onPress} style={[styles.LoginComp,{backgroundColor:props.backgroundcolor},props.style]}>
            <Text style={[styles.textcomp,{color:props.color}]}>{props.text}</Text>
  
   </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    LoginComp:{
        width:vw(343),
        height:vh(48),  
        paddingRight:vw(20),
        paddingLeft:vw(20),
        gap:vw(10),
        justifyContent:"center"
    },
    textcomp:{
        fontFamily:Fonts.Lexend,
        // color:Color.Neutral_Black,
        fontSize:normalize(16),
        fontWeight:400  ,
        alignSelf:"center"

    }
})
export default Login
