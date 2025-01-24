import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Login from '../Components/Login'
import { createStackNavigator } from '@react-navigation/stack'
import LoginSignup from '../Frames/Screen/LoginSignup'
import Tutorial from '../Frames/Screen/Tutorial'
import CreateAccount from '../Frames/Screen/CreateAccount'
import Createprofile1 from '../Frames/Screen/Createprofile1'
import ForgetPassword from '../Frames/Screen/ForgetPassword'
import Bottombarcomponent from '../Components/Bottombarcomponent'



const Loginnavigation = () => {
  const Stack=createStackNavigator()
    return (


  <Stack.Navigator screenOptions={{
    headerShown:false
  }}>
    
  <Stack.Screen name ='tutorial' component={Tutorial}/>
  <Stack.Screen name="login" component={LoginSignup} />
  <Stack.Screen name="createaccount" component={CreateAccount} />
  <Stack.Screen name='createprofile' component={Createprofile1}/>
  <Stack.Screen name='forgetpassword' component={ForgetPassword}/>
  <Stack.Screen name='bottomcomponent' component={Bottombarcomponent}/>
  
  
 

  
  </Stack.Navigator>

  )
}
export default Loginnavigation
