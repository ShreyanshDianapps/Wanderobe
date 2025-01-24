import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Loginnavigation from './Loginnavigation';
import Bottombarcomponent from '../Components/Bottombarcomponent';
import { getAuthStatus } from '../utils/Is_Auth';

const Rootnavigation = () => {
  
    // const isAuth = getAuthStatus(); 
//   useEffect(() => { 
//     // const authStatus = getAuthStatus();
//     // if (!authStatus) {
        
//     //   }
//     console.log("isAuth", isAuth)
//   }, [isAuth]); 


  return (
    <NavigationContainer>
       <Loginnavigation />
    </NavigationContainer>
  );
};

export default Rootnavigation;
