import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import localimages from '../../utils/localimages';
import { Homecont, Wanderobe, SelectHotelIcon, CalenderIcon, Backicon } from '../../utils/Svgicons';
import { normalize, vh, vw } from '../../utils/dimensions';
import Fonts from '../../utils/Fonts';
import Color from '../../utils/Color';
import Linecomponent from '../Linecomponent';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

type SelectHotelDateProps = {
    icon: React.ComponentType;
    text: string;
    style: object
};

const SelectHotelDate = (props: SelectHotelDateProps) => {
    const { icon: Icon, text } = props;
    return (
        <View style={[styles.selectHotelDate,props.style]}>
            <Icon />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const SelectCont = () => {
    return (
        <View style={styles.selectCont}>
            <SelectHotelDate
                style={{marginTop:vh(15)}}
                text="Select hotel, city"
                icon={SelectHotelIcon}
            />
            <View style={{flexDirection:"row",marginTop:vh(-4)}}>
               <Linecomponent
               style={{
                    marginLeft:vw(52),
                    marginTop:vh(11),
                    width:vw(239),
                    height:vh(1),
                    borderRadius:normalize(0.8),
                    borderColor:Color.Neutral_White,
                    backgroundColor:"white"                 
               }}/>
              
                <TouchableOpacity style={styles.backicon}>
                    <Backicon/>

                </TouchableOpacity>
            </View>
            <SelectHotelDate
                style={{marginTop:vh(-2)}}
                text="Arrival date"
                icon={CalenderIcon}
            />
        </View>
    );
};

const Homeupper = () => {
    return (
        <ImageBackground source={localimages.HomeUpper} style={styles.image}>
            <View style={styles.overlay}>
            <Wanderobe style={styles.wanderobe} />
            <Homecont style={styles.Homecont} />
            <SelectCont />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    overlay:{
        position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom:0,
            backgroundColor: 'rgba(0,0,0,0.3)',

    },

    image: {
        height: vh(430),
    },
    wanderobe: {
        marginTop: vh(64),
        marginLeft: vw(93),
    },
    Homecont: {
        marginTop: vh(171),
        marginLeft: vw(16),
    },
    selectCont: {
        height: vh(88),
        width: vw(343),
        marginTop: vh(16),
        marginLeft: vw(16),
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        // backgroundColor:"blue",
       
        
    },
    selectHotelDate: {
        flexDirection: 'row',
        gap: normalize(12),
       
        marginLeft:vw(16)

    },
    icon: {
        marginRight: vw(8),
    },
    text: {
        fontSize: normalize(14),
        fontFamily: Fonts.LexendLight,
        lineHeight: normalize(17.5),
        color: Color.Neutral_White,
    },
    backicon:{
        width:vw(24),
        height:vh(24),
        borderRadius:normalize(24),
        backgroundColor:Color.Neutral_White,
        marginLeft:vw(12),
        justifyContent:"center",
        alignItems:"center"
    }
});

export default Homeupper;
