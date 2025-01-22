import React from 'react'
import {StyleSheet, View,Text} from 'react-native'
import Fonts from '../utils/Fonts'
import Color from '../utils/Color'
import { normalize, vw } from '../utils/dimensions'

//types
type HeadingComponentprops={
    text1:string,
    text2:string,
    style:object
}
 const HeadingComponent = (props:HeadingComponentprops) => {
  return (
    <View style={[styles.maincomp,props.style]}>
        <Text style={styles.text1}>{props.text1}</Text>
        <Text style={styles.text2}>{props.text2}</Text>

    </View>
  )
}
const styles=StyleSheet.create({
    maincomp:{
        marginLeft:vw(16),
        gap:normalize(16)

    },
    text1:{
        fontFamily:Fonts.Lexend,
        color:Color.Neutral_Black,
        fontSize:normalize(20),

    },
    text2:{
        fontFamily:Fonts.LexendLight,
        color:Color.Neutal_sub,
        fontSize:normalize(14),

    }

})
export default HeadingComponent