import React from 'react';
import { StyleSheet, TouchableOpacity, View ,Text,Platform} from 'react-native';
import { vh, vw, normalize } from '../utils/dimensions';
import Color from '../utils/Color';
import Fonts from '../utils/Fonts';

// Types
type HideComponentProps = {
    text:string
  value: boolean;
  onPress?: (value: boolean) => void; 
  
};

const HideComponent = (props: HideComponentProps) => {
  return (
    <View style={styles.main}>
        
    
    <View style={[styles.outer,{backgroundColor:props.value?Color.Neutal_placeholder:Color.Brand_Beige,justifyContent:props.value?"flex-start":"flex-end"}]}>
      <TouchableOpacity
        onPress={() => {
          if (props.onPress) {
            props.onPress(!props.value); 
          }
        }}
        style={styles.innercircle}
      >
     
      </TouchableOpacity>
    </View>
    <Text style={styles.hidetext}> {props.text}</Text>
   
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    gap:normalize(8),
    flexDirection:"row",
    // position:"absolute",
    // top:Platform.OS==='ios'?vh(577):vh(557),
    left:vw(16),
    zIndex:-1
    
    
  },
  outer:{
    width: vw(34),
    height: vh(20),
    borderRadius: normalize(30),
    
    flexDirection:"row",
    alignItems:"center"
  },
  innercircle:{
    height:vh(16),
    width:vw(16),
    borderRadius:normalize(14),
    backgroundColor:Color.Neutral_White
  },
  hidetext:{
    fontSize:normalize(12),
    fontFamily:Fonts.Lexend
  }
});

export default HideComponent;
