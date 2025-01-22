import React,{useState} from 'react'
import {TouchableOpacity, View,Text, StyleSheet} from 'react-native'
import { normalize, vh, vw } from '../utils/dimensions'
import Color from '../utils/Color'
import Checkbox from './Checkbox'
import Fonts from '../utils/Fonts'
type ChoosingPrefenceprops={
    text:string,
    style:object,
    onPress?: (text:string)=>void
}

 const ChoosingPrefence = (props:ChoosingPrefenceprops) => {
    const [check,setChecked]=useState(true);
    const handlepress=()=>{
        setChecked(!check)
        
    }
  return (
    <View >
        <TouchableOpacity onPress={handlepress} style={[styles.container,{backgroundColor:check?Color.Neutral_White:Color.Brand_Beige}]}>
            <Text style={[styles.text,{color:check?Color.Neutral_Black:Color.Neutral_White}]}>{props.text}</Text>
            </TouchableOpacity>
       

       

    </View>
  )
}
const styles=StyleSheet.create({
   
    container:{
        width:vw(106),
        height:vh(40),

        justifyContent:"center",
        alignItems:"center",
        borderWidth:normalize(0.8),
        borderColor:Color.Neutral_Border
    },
    text:{
        fontFamily:Fonts.Lexend,
        fontSize:normalize(14)
    }

})
export default ChoosingPrefence
