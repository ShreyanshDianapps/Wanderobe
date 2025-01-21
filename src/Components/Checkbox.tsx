import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Tickicon from '../assets/Images/Checkboxtick.svg';
//utils import
import { normalize, vh,vw } from '../utils/dimensions';
import Color from '../utils/Color';

type CheckboxProps = {
  ischecked: boolean;
//   style:object;
  handlecheck: (ischecked: boolean) => void;
};

const Checkbox = (props: CheckboxProps) => {
  const toggleCheckbox = () => {
    props.handlecheck(!props.ischecked);
  };
  console.log(props.ischecked)

  return (
    <TouchableOpacity onPress={toggleCheckbox} style={[styles.checkbox,{backgroundColor:props.ischecked?Color.Neutral_Black:Color.Neutral_White}]}>
       {props.ischecked && <Tickicon width={20} height={10} fillOpacity={0.5}  />}
    </TouchableOpacity>
  );
};
const styles=StyleSheet.create({
        checkbox:{
            height:vh(20),
            width:vw(20),
            borderWidth:normalize(1),
            borderColor:Color.Neutral_Border,
            justifyContent:"center",
            alignItems:"center"
        },
        
})

export default Checkbox;
