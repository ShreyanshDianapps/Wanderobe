import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../Frames/Screen/AfterLogin/Homepage';
import Browse from '../Frames/Screen/AfterLogin/Browse';
import Mycloset from '../Frames/Screen/AfterLogin/Mycloset';
import Bag from '../Frames/Screen/AfterLogin/Bag';
import Profile from '../Frames/Screen/AfterLogin/Profile';
import { HomeIcon, BagIcon, BrowseIcon, ProfileIcon, MyclosetIcon } from '../utils/Svgicons';

const Bottombarcomponent = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown:false
        }}>
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <HomeIcon />
                    ),
                }}
                name="Home" component={Homepage} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <BrowseIcon />
                    ),
                }} name="browse" component={Browse} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <BagIcon />
                        
                    ),
                }} name="mycloset" component={Mycloset} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MyclosetIcon />
                    ),
                }} name="Bag" component={Bag} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                       <ProfileIcon/>
                    ),
                }} name="profile" component={Profile} />

        </Tab.Navigator>
    )
}
export default Bottombarcomponent
