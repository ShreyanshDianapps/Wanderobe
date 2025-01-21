import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Wanderobe from '../../assets/Images/Wanderobe.svg';
import { normalize, vh, vw } from '../../utils/dimensions';
import Color from '../../utils/Color';
import Fonts from '../../utils/Fonts';
import { IsvalidEmail, validatePassword } from '../../utils/Functions';
import EyeHide from '../../assets/Images/Eyeicon.svg'; // Eye hide icon
import EyeShow from '../../assets/Images/Eyeshow.svg'; // Eye show icon
import Tickicon from '../../assets/Images/Checkboxtick.svg'; // Tick icon for checkbox
import Login from '../../Components/Login';
import LoginCont from '../../Components/LoginCont';
import Google from '../../assets/Images/Google.svg';
import Facebook from '../../assets/Images/Facebook.svg';
import Apple from '../../assets/Images/Apple.svg';
const width = Dimensions.get('window').width;
import { Google_signIn, handleFacebookLogin } from '../../utils/Signin';
import { useRoute } from '@react-navigation/native';
import Backicon from '../../assets/Images/Backicon.svg'
import BottomTextComponent from '../../Components/BottomTextComponent';

const LoginSignup = ({ navigation }) => {
  const route = useRoute();
  const { image } = route.params;
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const [erroremail, setEmailerror] = useState('');
  const [errorpass, setPasserror] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [ischeck, setChecked] = useState(false); // Checkbox state
  const passwordRef = useRef(null);

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (value && !IsvalidEmail(value)) {
      setEmailerror('Please enter a valid email address.');
    } else {
      setEmailerror('');
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (value && !validatePassword(value)) {
      setPasserror('Password must be at least 6 characters.');
    } else {
      setPasserror('');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState); // Toggle visibility
  };

  const handleonpress = () => {
    // Handle login press here
    navigation.navigate('createaccount',{
      image:image
    }
    )
  };

  return (
    <View style={styles.main_container}>
      {/* Main Container */}
      <ImageBackground source={image} style={styles.backgroundImage} resizeMode='cover'>
        <View style ={styles.wandrobeCont}>
        <TouchableOpacity onPress={()=>navigation.navigate('tutorial')}><Backicon style={styles.backicon}/></TouchableOpacity>
       
        <Wanderobe style={styles.wanderobe} />
        </View>
       
       
        <View style={styles.logininfocont}>
          <View style={styles.logininfotext}>
            <Text style={{ fontFamily: Fonts.Lexend, fontSize: 24 }}>Login</Text>
            <Text style={{ fontFamily: Fonts.LexendLight, fontSize: 14 ,paddingTop:vh(12)}}>
            Welcome back! Login to book your looks.
            </Text>
          </View>
          
          <View style={styles.Email_Password_Cont}>
            <View style={styles.email_cont}>
              <Text style={{ fontFamily: Fonts.Lexend, fontSize: 12,paddingBottom:vh(3) }}>Email*</Text>
              <TextInput
                placeholder="Enter your email"
                style={styles.email}
                value={email}
                onChangeText={handleEmailChange}
                keyboardType='email-address'
                returnKeyType='next'
                onSubmitEditing={() => {
                  passwordRef.current.focus();
                }}
              />
              {erroremail ? <Text style={styles.error}>{erroremail}</Text> : null}
            </View>
            
            <View style={styles.email_pass}>
              <Text style={{ fontFamily: Fonts.Lexend, fontSize: 12,paddingBottom:vh(3) }}>Password*</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  ref={passwordRef}
                  placeholder="Enter your password"
                  style={styles.email}
                  value={pass}
                  onChangeText={handlePasswordChange}
                  secureTextEntry={!showPassword} // Conditionally toggle password visibility
                />
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
                  {!showPassword ? (
                    <EyeHide width={24} height={24} fill={Color.Neutral_White} />
                  ) : (
                    <EyeShow width={24} height={24} fill={Color.Neutral_White} />
                  )}
                </TouchableOpacity>
              </View>
              {errorpass ? <Text style={styles.error}>{errorpass}</Text> : null}
            </View>
            <View style={styles.checkbox_forgetpass_cont}>
            <View style={styles.check_remmber}>
              <TouchableOpacity onPress={() => setChecked(!ischeck)} style={[styles.checkbox, { backgroundColor: ischeck ? Color.Neutral_Black : Color.Neutral_White }]}>
                {ischeck && <Tickicon width={12} height={10} fillOpacity={0} />}
              </TouchableOpacity>
              <Text style={{ fontFamily: Fonts.Lexend, fontSize: 12, color: Color.Neutral_Black }}>Remember me</Text>
            </View>
            <Text style={styles.forgetpassword}>Forgot password?</Text>
          </View>
          </View>

          {/* Checkbox and Remember Me */}
          

          <View style={styles.logincontainer}>
            <Login 
            text="Login"
              backgroundcolor={Color.Neutral_Black} 
              color={Color.Neutral_White}
              onPress={handleonpress}
            />
            <View style={styles.linecomp}>
              <View style={styles.line}></View>
              <Text style={{ color: Color.Neutal_placeholder, fontFamily: Fonts.Lexend, fontSize: 12 }}>
                or with
              </Text>
              <View style={styles.line}></View>
            </View>
            <View style={styles.loginoptions}>
              <LoginCont icon={Google} onPress={Google_signIn} />
              <LoginCont icon={Facebook} onPress={handleFacebookLogin} />
              <LoginCont icon={Apple} />
            </View>
          </View>
        </View>

        {/* New user and create account */}
        <BottomTextComponent
        text1="New User?"
        text2="Create Account"
         style={{
                            paddingTop:vh(151)
             }}
        />
        
      </ImageBackground>
      </View>
    
    
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    
  },
  backgroundImage: {
    flex:1,
    width: '100%',
    height: vh(135),
    
    // marginTop:vh(20)
    

  },
  wandrobeCont:{
    marginTop: vh(76),
    marginLeft: vw(4.17),
    flexDirection:"row",
    gap:normalize(80)
    
  },

  wanderobe: {
    // position: 'absolute',
   
    color: Color.Neutral_White,
    opacity: 1,
  },
  backicon:{
      paddingLeft:vh(20)
  },
  logininfocont: {
    // zIndex:1,
    // position: 'absolute',
    paddingTop:vh(16),
    
    marginTop: vh(20),
    marginLeft: vw(16),
    width: vw(343),
    height: vh(483),
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  logininfotext: {
    // paddingTop:vh(12),
    width: vw(343),
    height: vh(82),
  },
  Email_Password_Cont: {
    width: vw(343),
    height: vh(194),
    // backgroundColor:"red"
    gap: normalize(20),
  },
  email_cont: {
    width: vw(343),
    height: vh(62),
    // backgroundColor:"red"
  },
  email_pass: {
    width: vw(343),
    height: vh(62),
    // paddingTop:vh(20)
    // backgroundColor:"blue"
  },
  
  email: {
    width: vw(343),
    height: vh(48),
    
    borderWidth: 0.8,
    borderColor: '#B60218',
    fontFamily: Fonts.Lexend,
    fontSize: 14,
    paddingLeft: 16,
    color: Color.Neutral_Black,
  },
  error: {
    color: '#B60218',
    fontSize: 12,
    fontFamily: Fonts.Lexend,
  },
  passwordContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    zIndex: 1,
  },
  checkbox_forgetpass_cont: {
    width: vw(343),
    height: vh(20),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  check_remmber: {
    width: vw(114),
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: vw(20),
    height: vh(20),
    borderWidth: 1,
    borderColor: Color.Neutral_Border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgetpassword: {
    fontSize: normalize(14),
    fontFamily: Fonts.Lexend,
    textDecorationLine: 'underline',
    color: '#A78D78',
  },
  logincontainer: {
    width: vw(343),
    height: vh(143),
    gap: normalize(16),
    paddingTop:vh(20)
  },
  linecomp: {
    width: vw(343),
    height: vh(15),
    gap: normalize(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: vw(140),
    height: vw(0),
    borderWidth: 1,
    borderBlockColor: Color.Neutral_Border,
  },
  loginoptions: {
    width: vw(344),
    height: vh(48),
    flexDirection: 'row',
    gap: normalize(13),
  },
  newUserContainer: {
    gap: normalize(4),
    width: vw(179),
    height: vh(18),
    position: 'absolute',
    top: vh(770),
    left: vw(97.5),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  newUserText: {
    fontFamily: Fonts.Lexend,
    fontSize: normalize(14),
    color: Color.Neutal_sub,
  },
  createAccountText: {
    fontFamily: Fonts.Lexend,
    fontSize: normalize(14),
    textDecorationLine: 'underline',
  },
});

export default LoginSignup;
