import React from 'react'
import {StyleSheet, View} from 'react-native'
import HeadingComponent from '../HeadingComponent'
//utils import
import { Profile3icon } from '../../utils/Svgicons'
import { vw,vh, normalize } from '../../utils/dimensions'
import Login from '../Login'
import Color from '../../utils/Color'
import { ColorProperties } from 'react-native-reanimated/lib/typescript/Colors'

 const GuestComponet = () => {
  return (
    <View style={styles.maincomp}>
            <HeadingComponent 
            icon={Profile3icon}
            text1="Create Your Wanderobe Account"
            text2="Join to explore the world of designer fashion at your travel destination"
            
                style={{
                    textview:{
                        width:vw(320),
                       
                       

                    },
                    stylesicon:{
                       
                        flexDirection:"row",
                        gap: normalize(8),
                        marginTop:vh(18),
                    },
                    text1:{
                        fontSize:normalize(16)
                    },
                    text2:{
                        fontSize:normalize(12),
                        lineHeight:normalize(18)
                    }
                }}
           />
           <View style={styles.button}>
           <Login
         
         
         style={{
            viewstyle:{
            width:vw(166),
            height:vh(40),
            backgroundColor:Color.Brand_Beige
            },
            textstyle:{
                color:Color.Neutral_White

            }
         }}
         onPress={()=>{

         }}
         text='Create account'

           />
           <Login
         
         style={{
            viewstyle:{
            width:vw(166),
            height:vh(40),
            backgroundColor:Color.Neutral_Black
            },
            textstyle:{
                color:Color.Neutral_White

            }
         }}
         onPress={()=>{

         }}
         text='Login'

           />
           </View>
        
    </View>
  )
}
const styles=StyleSheet.create({
    button:{
        flexDirection:"row",
        gap:normalize(11),
        marginLeft:vw(16),
        marginTop:vh(16)
    },
    maincomp:{
        marginTop:vh(20),
        backgroundColor:Color.Neutarl_BG,
        height:vh(158)
    }
})
export default GuestComponet
