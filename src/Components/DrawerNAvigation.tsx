import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import Homepage from '../Frames/Screen/AfterLogin/Homepage';
import Browse from '../Frames/Screen/AfterLogin/Browse';
import Bag from '../Frames/Screen/AfterLogin/Bag';
import Mycloset from '../Frames/Screen/AfterLogin/Mycloset';
import Profile from '../Frames/Screen/AfterLogin/Profile';


export const DrawerNAvigation = () => {
    const navigation=useNavigation();
    const Drawer=createDrawerNavigator();
  return (
   <>
   <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Homepage}/>
    <Drawer.Screen name="browse" component={Browse}/>
    <Drawer.Screen name="mycloset" component={Mycloset}/>
    <Drawer.Screen name="Bag" component={Bag}/>
    <Drawer.Screen name="profile" component={Profile}/>

   </Drawer.Navigator>
   </>
  )
}
