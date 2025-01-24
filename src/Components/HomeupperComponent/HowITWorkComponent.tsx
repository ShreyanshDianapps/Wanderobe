import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
//utils import
import { vw, vh, normalize } from '../../utils/dimensions';
import { HowworkInfo } from '../../utils/Constraints';
import Color from '../../utils/Color';
import Fonts from '../../utils/Fonts';

const HowITWorkComponent = () => {
  return (
    <View style={styles.maincomp}>
      <Text style={styles.textcomp}>How it works</Text>
      <View style={styles.infocontainer}>
        {HowworkInfo.map((item) => {
          const Icon = item.icon;
          return (
            <View style={styles.onrender} key={item.id.toString()}>
              <View style={styles.texticon}>
                <Text style={styles.num}>{item?.id.toString()} .</Text>
                <View style={styles.iconView}>
                    <Icon/>

                    </View>
              </View>
              <View style={{gap:normalize(8)}}>
                <Text style={styles.text1}>{item?.text1}</Text>
                <Text  style={styles.text2}>{item?.text2}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincomp: {
    width: vw(375),
    height: vh(517),
    marginTop: vh(50),
    backgroundColor: Color.Howitwork,
  },
  textcomp: {
    marginLeft: vw(16),
    marginTop: vh(32),
    fontFamily: Fonts.Lexend,
    fontSize: normalize(20),
  },
  infocontainer: {
    marginTop: vh(16),
    marginLeft: vw(16),
    flexDirection:"row",
    gap:normalize(12),
    flexWrap:"wrap"
  },
  onrender: {
    height: vh(196),
    width: vw(166),
    marginBottom: vh(16),
    
  },
  texticon: {
    flexDirection: 'row',
    gap:normalize(16),
    marginBottom:vh(20)
   
  },
  num:{
    paddingTop:vh(30),
    fontSize:normalize(24),
    color:Color.Brand_Beige,
    
  },
  text1:{
    fontSize:normalize(16),
    fontFamily:Fonts.LexendMedium,
    color:Color.Neutral_Black
  },
  text2:{
    fontSize:normalize(12),
    fontFamily:Fonts.Lexend,
    lineHeight:normalize(18),
    color:Color.Neutal_sub,
    width:vw(165)
  },
  iconView:{
    width:vw(64),
    height:vh(64),
    borderRadius:normalize(73.33),
    backgroundColor:Color.Howitwork,
    justifyContent:"center",
    alignItems:"center"
  }
});

export default HowITWorkComponent;
