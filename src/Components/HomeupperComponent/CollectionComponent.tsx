import React from 'react'
import {View,Text, StyleSheet, ImageBackground} from 'react-native'
//utils import
import Fonts from '../../utils/Fonts'
import { normalize, vh ,vw} from '../../utils/dimensions'
import { Collection_man,Collection_women,Collection_both } from '../../utils/Svgicons'
import localimages from '../../utils/localimages'
import Color from '../../utils/Color'

type CollectionImgaeContProps={
    icon:any
    text1:string,
    text2:string
}


const CollectionImgaeCont=(props:CollectionImgaeContProps)=>{

    return (
       
       <ImageBackground source={props.icon} style={styles.imagecontinner}>
        <View style={styles.overlay}>
       
        <Text style={styles.text1}>{props.text1}</Text>
        <Text style={styles.text2}>{props.text2}</Text>
        </View>

       </ImageBackground>
      
    )

}
const CollectionComponent = () => {
  return (
   <View style={styles.maincomp}>
        <Text style={styles.headingtext}>Collection for all</Text>
        <View style={styles.imagecont}>
        <CollectionImgaeCont
        icon={localimages.Collection_Men}
        text1="Discover items for Men"
        text2='Explore collection'
        />
        <CollectionImgaeCont
        icon={localimages.Collection_women}
        text1="Discover items for Women"
        text2='Explore collection'
        />
        <CollectionImgaeCont
        icon={localimages.Collection_Both}
        text1="Discover items for Anyone"
        text2='Explore collection'
        />
        </View>
   </View>
  )
}
const styles=StyleSheet.create({
    overlay:{

        position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom:0,
            backgroundColor: 'rgba(0,0,0,0.3)',
    },
    maincomp:{
            marginTop:vh(30),
            marginLeft:vw(16),
            height:vh(405),
            width:vw(343)
    },
    headingtext:{
        fontFamily:Fonts.Lexend,
        fontSize:normalize(20),
        lineHeight:normalize(25)
    },
    imagecont:{
        gap:normalize(4),
        marginTop:vh(12)
    },
    imagecontinner:{
            // marginLeft:vw(16)
            height:vh(120),
            width:vw(343)
    },
    text1:{
        position:"absolute",
        top:vh(53),
        left:vw(16),
        fontFamily:Fonts.Belleza,
        fontSize:normalize(24),
        color:Color.Neutral_White,
        lineHeight:normalize(27.65)
    },
    text2:{
        position:"absolute",
        top:vh(84),
        left:vw(16),
        fontFamily:Fonts.Lexend,
        fontSize:normalize(14),
        color:Color.Neutral_White,
        lineHeight:normalize(17.5),
        textDecorationLine:"underline"

    }

})

export default CollectionComponent
