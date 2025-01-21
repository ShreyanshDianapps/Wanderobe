import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Login from '../Components/Login'
import { createStackNavigator } from '@react-navigation/stack'
import LoginSignup from '../Frames/Screen/LoginSignup'
import Tutorial from '../Frames/Screen/Tutorial'
import CreateAccount from '../Frames/Screen/CreateAccount'


const Loginnavigation = () => {
  const Stack=createStackNavigator()
    return (

<NavigationContainer>
  <Stack.Navigator screenOptions={{
    headerShown:false
  }}>
  <Stack.Screen name ='tutorial' component={Tutorial}/>
  <Stack.Screen name="login" component={LoginSignup} />
  <Stack.Screen name="createaccount" component={CreateAccount} />
  
  </Stack.Navigator>

</NavigationContainer>
  )
}
export default Loginnavigation
