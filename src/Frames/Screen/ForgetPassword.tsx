import React, { useState } from 'react'
import { StyleSheet, View,Platform } from 'react-native'
//utils import
import Color from '../../utils/Color'
import { vh ,vw,normalize} from '../../utils/dimensions'
import { IsvalidEmail } from '../../utils/Functions'
//assets import
import Backicon from '../../assets/Images/Backicon.svg'
//compomnet import
import TextInputComponent from '../../Components/TextInputComponent'
import Login from '../../Components/Login'
import HeadingComponent from '../../Components/HeadingComponent'
const ForgetPassword = () => {
    const [email,setEmail]=useState("");
    const [isreset,setisReset]=useState(false)
    const [password,setpassword]=useState("");
    const [newpassword,setnewpassword]=useState("")
    const [error,seterror] =useState("")
    const handlepress=()=>{
        if(isreset){
                if(password===newpassword){
                    console.log("You have succesfully reset your password")
                    
                }
                else{
                        seterror("new password and confirm password are not matching")
                }
        }
        else{
        if(IsvalidEmail(email)){
            setisReset(true)
        }
    }

    }
  return (
    <View style={styles.maincomp}>
        <Backicon style={styles.backicon}/>
        
        <HeadingComponent
        text1={isreset?"Reset Password":"Forgot Password"}
        text2={isreset? "Your new password must be different to previous password":"A reset link will be sent to you on your email"}
        style={{marginTop:vw(16)}}
        />
       <TextInputComponent
    text={isreset ? "New Password*" : "Email*"}
    placeholder={isreset ? "Enter new password" : "Enter your email"}
    stylemain={{
        marginLeft: vh(20),
        marginTop: vh(32),
    }}
    pass={isreset} 
    value={isreset ? password : email} 
    onChange={(data) => (isreset ? setpassword(data) : setEmail(data))} 
/>

            {isreset? <TextInputComponent
             text="Confirm Password*"
             placeholder='confirm password'
            stylemain={{
            marginLeft: vh(20),
            marginTop:vh(32)
            }}
            pass={true}
            value={newpassword}
            onChange={(newpass) => setnewpassword(newpass)}
            />:null}
            <Login
            backgroundcolor={Color.Neutral_Black}
            color={Color.Neutral_White}
            text="Submit"
            onPress={handlepress}
            style={{marginLeft:vw(16),marginTop:vh(32)}}
            />
        
    </View>
  )
}
const styles=StyleSheet.create({
    maincomp:{
        marginTop:Platform.OS==='ios'?vh(65):vh(20)

    },
    backicon:{
        marginLeft:vw(16)
    }
})
export default ForgetPassword