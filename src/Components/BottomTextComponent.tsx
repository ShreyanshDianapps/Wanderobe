import React from 'react'
import { View ,Text, TouchableOpacity, StyleSheet,Platform} from 'react-native'
//utils import
import { vh,vw,normalize } from '../utils/dimensions'
import Fonts from '../utils/Fonts'
import Color from '../utils/Color'
type BottomTextComponentProps={
    text1:string,
    style:object
    text2:string,
    onPress?:()=>void
}

 const BottomTextComponent = (props:BottomTextComponentProps) => {
  return (
    <View style={[styles.bottomtextcontainer,props.style]}>
        <Text style={styles.text1}>{props.text1}</Text>
        <TouchableOpacity onPress={props.onPress}>
            <Text style={[styles.text1,{textDecorationLine:"underline",color:Color.Neutral_Black}]}>{props.text2}</Text>
        </TouchableOpacity>


    </View>
  )
}
const styles=StyleSheet.create({
    bottomtextcontainer:{
        // position:"absolute",
        // top:Platform.OS==='ios'
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",    
        gap:normalize(4)
        
        
    },
    text1:{
        fontFamily:Fonts.Lexend,
        fontSize:normalize(14),
        color:Color.Neutal_sub
    },
    

})
export default BottomTextComponent
