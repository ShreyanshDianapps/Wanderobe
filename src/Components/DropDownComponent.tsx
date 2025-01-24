import React, { useState } from 'react'
import {View,FlatList, StyleSheet,Text, TouchableOpacity,Platform} from 'react-native'
//utils import
import { vh,vw,normalize } from '../utils/dimensions'
import Color from '../utils/Color';
import Fonts from '../utils/Fonts';
//assets import
import Dropdownicon from '../assets/Images/DropDown.svg'
import { ScrollView } from 'react-native-gesture-handler';
import TextInputComponent from './TextInputComponent';

type DropDownComponentprops={
    toptext:string,
    title:string
    value:string,
    data:Array<string>;
    style:object;
    styletop:object;
    flag:boolean;
    onPress?:(value:string)=>void;

}

 const DropDownComponent = (props: DropDownComponentprops) => {
    const [select,setisselct]=useState(false)
    const [flagcode,setflagcode]=useState("")
   

    const handlerender =({item}:{item:string})=>{
        console.log(props.value)
        return (
            
            <TouchableOpacity
                onPress={() => {
                    setisselct(false);
                    props.onPress && props.onPress(item);
                }}
                style={[styles.textlist,{backgroundColor:props.value===item?Color.Neutarl_BG:Color.Neutral_White}]}
            >
                <Text style={[styles.select,{fontSize:props.value===item?normalize(20):normalize(16)}]}>{item}</Text>
            </TouchableOpacity>
            
        );
    }

  return (
    <>
   
    {select ? <View style={[styles.mainCont,props.styletop]}>
        <View style={styles.upperline}></View>
       {
        props.flag? 
        <TextInputComponent
        text=""
        
        placeholder='Search By country code'
        value={flagcode}
        style={{
                
                marginTop:vh(20),
                marginBottom:vh(20),
                color:Color.Neutral_White
        }}
        onChange={(flag)=>setflagcode(flag)}
        />:
        <Text style ={styles.textstyle}> {props.title}</Text>
       }
        <FlatList
    style={[styles.list]}
    data={props.data}
    renderItem={handlerender}
    keyExtractor={(item, index) => `${item}-${index}`}
    showsVerticalScrollIndicator={true} 
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
    upperline:{
        width:vw(80),
        height:vh(5),
        backgroundColor:Color.Neutral_Border,
        marginTop:vh(16),
        borderRadius:normalize(20)

    },
    mainCont:{
        width:vw(375),
            // height:vh(350),
        backgroundColor:Color.Neutral_White,
        position:"absolute",
        top: Platform.OS==='ios'?vh(20):vh(20),
        justifyContent:"center",
        alignItems:"center",
    },
    withoutlist:{   
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
            fontSize:normalize(16),
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
        height:vh(39),
        // paddingBottom:vh(8)

    },
   
    select:{
        fontFamily:Fonts.Lexend,
        fontSize:normalize(20)
    }
})
export default DropDownComponent
