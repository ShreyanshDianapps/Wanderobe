import React from 'react'
import { normalize, vw } from '../utils/dimensions';
import Color from '../utils/Color';
import { StyleSheet, TouchableOpacity } from 'react-native'
type Logincontprops = {
    icon:  string  
         
    onPress?: () => void;   
  };
 const LoginCont = (props:Logincontprops) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container} >
        <props.icon/>
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    container:{
            width:vw(106),
            borderWidth:1,
            borderColor:Color.Neutral_Border,
            justifyContent:"center",
            alignItems:"center"
            
    }
})
export default LoginCont
