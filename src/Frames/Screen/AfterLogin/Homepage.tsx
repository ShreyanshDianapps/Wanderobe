import React, { useEffect } from 'react'
import {StyleSheet, View,ScrollView,Text, ImageBackground} from 'react-native'
import Homeupper from '../../../Components/HomeupperComponent/Homeupper'
import GuestComponet from '../../../Components/HomeupperComponent/GuestComponet'
//utils import
import Color from '../../../utils/Color'
import { vh,vw,normalize } from '../../../utils/dimensions'
import Fonts from '../../../utils/Fonts'
import localimages from '../../../utils/localimages'
import CollectionComponent from '../../../Components/HomeupperComponent/CollectionComponent'
import HowITWorkComponent from '../../../Components/HomeupperComponent/HowITWorkComponent'
import Login from '../../../Components/Login'
import AsyncStorage from '@react-native-async-storage/async-storage'

const TextComp=()=>{
  return (
    <View style={styletext.textcomp}>
      <Text style={styletext.upper}>NEW  ITEM  ADDED</Text>
      <Text style={styletext.center}>What’s new</Text>
      <Text style={styletext.lower}>Discover curated pieces tailored for your next adventure.</Text>


    </View>
  )
}
const styletext=StyleSheet.create({  
  textcomp:{
    marginTop:vh(50),
    marginLeft:vw(16),
    width:vw(332),
    height:vh(62),
    gap:normalize(4)
  },
  upper:{
    fontSize:normalize(11),
    fontFamily:Fonts.LexendMedium,
    color:Color.Secondary_Terracota,
    lineHeight:normalize(13.75)
  },
  center:{
    fontFamily:Fonts.Lexend,
    fontSize:normalize(20),
    lineHeight:normalize(25),
    color:Color.Neutral_Black
  },
  lower:{
    fontFamily:Fonts.Lexend,
    fontSize:normalize(11),
    lineHeight:normalize(15),
    color:Color.Neutal_sub,
    width:vw(332)
  }

})
const Imagecomp=()=>{
  return (
    <>
    <ImageBackground source={localimages.NewArrival_background} style={styleimage.background}>
      <View style={styleimage.overlay}> 
      <View style={styleimage.textcompimage}> 
      <Text style={styleimage.text1}>New Arrival</Text>
      <Text style={styleimage.text2}>Effortless elegance, handpicked for your unique style.</Text>
      </View>
      <Login
      
      style={{

                  viewstyle:{
                  width:vw(166),
                  height:vh(40),
                  backgroundColor:Color.Brand_Beige,
                  marginLeft:vw(16),
                  marginTop:vh(19.09)
                  },
                  textstyle:{
                    fontSize:normalize(14),
                      color:Color.Neutral_White
                  }
               }}
    
    text='View all collection'
    onPress={()=>{}}
    />
</View>
    </ImageBackground>
    </>
  )
}
const styleimage=StyleSheet.create({
  overlay:{
     position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom:0,
            backgroundColor: 'rgba(0,0,0,0.3)',
  },
  
   background:{
    marginTop:vh(24),
    height:vh(450),
    width:vw(375)
   },
   textcompimage:{
    marginTop:vh(323),
    marginLeft:vw(16),
    gap:normalize(8)

   },
   text1:{
    fontFamily:Fonts.Belleza,
    fontSize:normalize(24),
    lineHeight:normalize(27.65),
    color:Color.Neutral_White
   },
   text2:{
    fontFamily:Fonts.Lexend,
    fontSize:normalize(12),
    lineHeight:normalize(15),
    color:Color.Neutral_White
   }
})
const Homepage = () => {
  const [token,setToken]=React.useState('')
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accesstoken');
        setToken(accessToken); // Update state with the retrieved token
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);
  
  
  return (
    <ScrollView>
    <View style={styles.maincomp}>
    <Homeupper/>
{token===null?
    <GuestComponet/>:null
}
    <CollectionComponent/>
    <HowITWorkComponent/>
    <TextComp/>
    <Imagecomp/>

    </View>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    maincomp:{
        backgroundColor:Color.Neutral_White
    }
})
export default Homepage