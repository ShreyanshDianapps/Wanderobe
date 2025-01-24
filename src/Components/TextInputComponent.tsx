import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
// Utils imports
import localimages from '../utils/localimages';
import EyeShow from '../assets/Images/Eyeshow.svg'
import EyeHide from '../assets/Images/Eyeicon.svg'
import Color from '../utils/Color';
import Fonts from '../utils/Fonts';
import { vw, vh } from '../utils/dimensions';

type TextInputProps = {
  
  text: string;
  placeholder: string;
  style?: object;
  stylemain?:object
  value: string;
  pass?: boolean; 
  onChange?: (value: string) => void; 
}

const TextInputComponent = (props: TextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState); 
  };

  return (
    <View style={[props.stylemain]}>
      { props.text?<Text style={styles.title}>{props.text}</Text>:null
}
     
        <TextInput
          placeholder={props.placeholder}
          style={[styles.textInput, props.style]} 
          value={props.value}
          onChangeText={props.onChange}
          secureTextEntry={props.pass ? !showPassword : false} 
          keyboardType={props.pass ? 'default' : 'email-address'} 
        />
        {props.pass && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            {!showPassword ? 
              <EyeHide width={24} height={24} fill={Color.Neutral_White} />
             : 
              <EyeShow width={24} height={24} fill={Color.Neutral_White} />
            }
          </TouchableOpacity>
        )}
      </View>
   
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.Lexend,
    fontSize: 12,
    paddingBottom: vh(3),
  },
  textInput: {
    width: vw(343),
    height: vh(48),
    borderWidth: 0.8,
    borderColor: Color.Neutral_Border,
    fontFamily: Fonts.Lexend,
    fontSize: 14,
    paddingLeft: 16,
    color: Color.Neutral_Black,
   
    
  },
  
  eyeIcon: {
    position: 'absolute',
    top:vh(30),
    right: vw(20),
    zIndex: 1,
  },
});

export default TextInputComponent;
