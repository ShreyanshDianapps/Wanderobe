import React, { useState } from 'react'
import {View,FlatList, StyleSheet,Text, TouchableOpacity,Platform} from 'react-native'
//utils import
import { vh,vw,normalize } from '../utils/dimensions'
import Color from '../utils/Color';
import Fonts from '../utils/Fonts';
//assets import
import Dropdownicon from '../assets/Images/DropDown.svg'

type DropDownComponentprops={
    toptext:string,
    title:string
    value:string,
    data:Array<string>;
    style:object;
    styletop:object;
    onPress?:(value:string)=>void;

}

 const DropDownComponent = (props: DropDownComponentprops) => {
    const [select,setisselct]=useState(false)
   

    const handlerender =({item}:{item:string})=>{
        return (
            <TouchableOpacity
                onPress={() => {
                    setisselct(false); // Close dropdown on selection
                    props.onPress && props.onPress(item);
                }}
                style={styles.textlist}
            >
                <Text style={styles.select}>{item}</Text>
            </TouchableOpacity>
        );
    }

  return (
    <>
   
    {select ? <View style={[styles.mainCont,props.styletop]}>
        <Text style ={styles.textstyle}> {props.title}</Text>
        <FlatList
    style={styles.list}
    data={props.data}
    renderItem={handlerender}
    keyExtractor={(item, index) => `${item}-${index}`}
    showsVerticalScrollIndicator={true} // Enable the scrollbar
/>

       
    </View>:
    <View style={ {zIndex:-1}}>
         <Text style={[styles.toptext]}>{props.toptext}</Text>
    <TouchableOpacity  onPress={()=>{
        setisselct(!select)
    }}style={[styles.withoutlist,props.style]}>
        <Text style={styles.withouttext}>{props.value}</Text>
        <Dropdownicon style={styles.dropdownstyle}/>

    </TouchableOpacity>
    </View>
  }
  </>
  )
}
const styles=StyleSheet.create({
    toptext:{
        // position:"absolute",
        // top:Platform.OS==='ios'?vh(505):vh(480),
        left:vw(16),
        
        fontFamily:Fonts.Lexend,
        fontSize:normalize(12),
        paddingBottom:vh(5)
    },
    mainCont:{
        width:vw(375),
            // height:vh(350),
        backgroundColor:Color.Neutral_White,
        position:"absolute",
        top: Platform.OS==='ios'?vh(20):vh(20),
        justifyContent:"center",
        alignItems:"center",
        // position:"absolute",
            // top:vh(-100),
            // left:0,
            // right:0,
            // // zIndex:10,
            // // backgroundColor:"red",

            // height:vh(500)
    },
    withoutlist:{   
          
            // top:Platform.OS==='ios'?vh(522):vh(500),
           marginLeft:vw(16),
            height:vh(48),
            width :vw(343),
            borderWidth:normalize(0.8),
            borderColor:Color.Neutral_Border,
            justifyContent:"space-between",
            flexDirection:"row",
            alignItems:"center" ,
            
                 
    },
    withouttext:{
        paddingLeft:vw(30),
        fontFamily:Fonts.Lexend,
        fontSize:normalize(14),
        color:Color.Neutal_placeholder

    },
    dropdownstyle:{
        paddingRight:vw(40)

    },
    textstyle:{
            paddingTop:vh(41),
            fontFamily:Fonts.LexendMedium,
            fontSize:normalize(14),
            color:Color.Neutral_Black,
            paddingBottom:vh(16)
    },
    list:{
            gap:normalize(8),
            


    },
    textlist:{
        justifyContent:"center",
        alignItems:"center",
        width:vw(343),
        height:vh(39)

    },
   
    select:{
        fontFamily:Fonts.Lexend,
        fontSize:normalize(14)
    }
})
export default DropDownComponent
