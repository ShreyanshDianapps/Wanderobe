import React from 'react'
import {StyleSheet, View,Text, Touchable, TouchableOpacity} from 'react-native'
import { normalize, vh ,vw} from '../utils/dimensions'
import Color from '../utils/Color'
import Fonts from '../utils/Fonts'
const ContinueasGuest = () => {
  
   return (
     <TouchableOpacity style={styles.LoginComp}>
               <Text style={styles.textcomp}> Continue as guest </Text>
      </TouchableOpacity>
     )
  
}
const styles=StyleSheet.create({
    LoginComp:{
        width:vw(343),
        height:vh(48),
        backgroundColor: "transparent",
        borderWidth:1.2,
        borderColor:Color.Neutral_White,
        paddingRight:vw(20),
        paddingLeft:vw(20),
        gap:vw(10),
        justifyContent:"center"
    },
    textcomp:{
        fontFamily:Fonts.Lexend,
        color:Color.Neutral_White,
        fontSize:normalize(16),
        fontWeight:400  ,
        alignSelf:"center",
        


    }
})
export default ContinueasGuest
