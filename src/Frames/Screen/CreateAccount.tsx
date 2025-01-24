import React, { useState } from 'react';
import { View, StyleSheet, Image, ImageBackground, Text, Platform,Touchable, TouchableOpacity } from 'react-native';
import TextInputComponent from '../../Components/TextInputComponent';
import { useRoute } from '@react-navigation/native';
//import utils
import { normalize, vh, vw } from '../../utils/dimensions';
import Fonts from '../../utils/Fonts';
import Color from '../../utils/Color';
import { IsvalidEmail ,validatePassword} from '../../utils/Functions';
//import svg
import Wanderobe from '../../assets/Images/Wanderobe.svg'
import Backicon from '../../assets/Images/Backicon.svg'
import { SvgXml } from 'react-native-svg';
import Checkbox from '../../Components/Checkbox';
import Login from '../../Components/Login';
import BottomTextComponent from '../../Components/BottomTextComponent';

const CreateAccount = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ischecked, setchecked] = useState(false);
    const [erroremail,setEmailerror]=useState("");
    const [errorpass, setPasserror] = useState('');
    
   
    //image route from loginpage
    const route = useRoute();
    const { image } = route.params

    const handleEmailChange = (value: string) => {
        setEmail(value);
    if (value && !IsvalidEmail(value)) {
      setEmailerror('Please enter a valid email address.');
    } else {
      setEmailerror('');
    }

    };
    const handlePress_Create_Account=()=>{
        navigation.push('createprofile')
    }


    const handlePasswordChange = (value: string) => {
        setPassword(value);
        if (value && !validatePassword(value)) {
            setPasserror('Password must be at least 6 characters.');
          } else {
            setPasserror('');
          }
    };
    const handleonchange = (ischecked: boolean) => {
        setchecked(ischecked)
    }
    const handlepress=()=>{
        navigation.push('login',{
            image:image
          }
          )
    }
    

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.backgroundimage} resizeMode='cover'>
            </ImageBackground>
            <View style={styles.overlay}>
                <View style={styles.Wanderobe_cont}>
                   <TouchableOpacity onPress={()=>navigation.navigate('login',{
                    image:image
                   })}> <Backicon style={styles.backicon} /></TouchableOpacity>
                    <Wanderobe />
                </View>
                <View style={styles.datacontainer}>
                    <View style={styles.infocont}>
                        <Text style={styles.create}>Create Account</Text>
                        <View style={{ gap: normalize(3) }}>
                            <Text style={styles.longtext}>Join to explore the world of designer fashion at </Text>
                            <Text style={styles.longtext}>your travel destination</Text>
                        </View>

                    </View>
                    <View style={styles.email_pass_container}>
                        <View>
                        <TextInputComponent
                            text="Email*"
                            placeholder="Enter Your email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                         {erroremail ? <Text style={styles.error}>{erroremail}</Text> : null}
                        </View>


                        {/* Password Input */}
                        <View>
                        <TextInputComponent
                            text="New Password*"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={handlePasswordChange}
                            pass={true}
                        />
                        {erroremail ? <Text style={styles.error}>{erroremail}</Text> : null}
                        </View>
                        <View style={styles.checktext}>
                            <Checkbox
                                ischecked={ischecked}
                                // style={styles.check}
                                handlecheck={handleonchange}

                            />
                            <View style={styles.innertext}>
                                <Text style={styles.normaltext}>I agree to the </Text>
                                <TouchableOpacity><Text style={[styles.normaltext, { color: Color.Brand_Beige, textDecorationLine: "underline" }]}>Terms & Conditions</Text></TouchableOpacity>
                                <Text style={styles.normaltext}>and</Text>
                                <TouchableOpacity><Text style={[styles.normaltext, { color: Color.Brand_Beige, textDecorationLine: "underline" }]}>Privacy Policy</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Login
                    text="Create account"
                    style={{
                        viewstyle:{
                            backgroundColor:Color.Neutral_Black
                        },
                        textstyle:{
                            color:Color.Neutral_White
                        }
                    }}
                    color={Color.Neutral_White}
                    onPress={handlePress_Create_Account}

                    />
                    <BottomTextComponent
                text1="Already have an account?"
                text2="Login"
                style={{
                     paddingTop:Platform.OS==='ios'?vh(200):vh(160)
                }}
                onPress={handlepress}
                />
                </View>
                
            </View>
        </View>





    );
};

// Optional styling
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // padding: 16,
    },
    backgroundimage: {
        
        height: vh(135)
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: Platform.OS==='ios'?vh(675):vh(633),
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    Wanderobe_cont: {
        position: "absolute",
        top: vh(76),
        // left:vw(102),
        flexDirection: "row",
        gap: normalize(80)
    },

    backicon: {
        marginLeft: vw(6)
    },

    datacontainer: {
        position: "absolute",
        top: vh(151),
        left: vw(16),
        gap: normalize(32)
    },
    infocont: {
        gap: normalize(12)
    },
    create: {
        fontFamily: Fonts.Lexend,
        color: Color.Neutral_Black,
        fontSize: normalize(24)
    },
    longtext: {
        fontFamily: 'Lexend-Medium',
        fontSize: normalize(14),
        color: Color.Neutal_sub

    },
    email_pass_container: {
        gap: normalize(20)
    },
    checktext: {
        flexDirection: "row",
        gap: normalize(8)

    },
    normaltext: {
        fontFamily: Fonts.Lexend,
        fontSize: normalize(12),
        color: Color.Neutal_sub
    },
    innertext: {
        flexDirection: "row",
        gap: normalize(2)
    },
    error: {
        color: '#B60218',
        fontSize: 12,
        fontFamily: Fonts.Lexend,
      },
});

export default CreateAccount;
