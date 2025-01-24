import React from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Fonts from '../utils/Fonts';
import Color from '../utils/Color';
import { normalize, vw } from '../utils/dimensions';

// Types
type HeadingComponentProps = {
  icon: React.ComponentType | null;
  text1: string| null;
  text2: string| null;
 
  style?: {
    maincomp?: StyleProp<ViewStyle>;
    stylesicon?: StyleProp<ViewStyle>;
    textview?: StyleProp<ViewStyle>;
    text1?: StyleProp<TextStyle>;
    text2?: StyleProp<TextStyle>;
   
  };
};

const HeadingComponent = (props: HeadingComponentProps) => {
  const { icon: Icon, text1, text2,style } = props;

  return (
    <View style={[styles.maincomp, style?.maincomp]}>
      <View style={[ style?.stylesicon]}>
        {Icon ? <Icon /> : null}
        <Text style={[styles.text1, style?.text1]}>{text1}</Text>
      </View>
      <View style={[style?.textview]}>
      <Text style={[styles.text2, style?.text2]}>{text2}</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  maincomp: {
    marginLeft: vw(16),
    gap: normalize(16),
  },
  text1: {
    fontFamily: Fonts.Lexend,
    color: Color.Neutral_Black,
    fontSize: normalize(20),
  },
  text2: {
    fontFamily: Fonts.LexendLight,
    color: Color.Neutal_sub,
    fontSize: normalize(14),
  },
});

export default HeadingComponent;
