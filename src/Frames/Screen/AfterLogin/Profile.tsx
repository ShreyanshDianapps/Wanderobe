import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import GuestComponent from '../../../Components/HomeupperComponent/GuestComponet';

const Profile = () => {
  const [token, setToken] = useState<string | null>(null); 
  const [data1, setData1] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accesstoken');
        setToken(accessToken);

        if (accessToken) {
          const response = await fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
         
          setData1([data]); // Ensure data1 is always an array
          console.log("log data1",[data])
        } else {
          console.log("Token is null");
        }
      } catch (error) {
        console.error("Error fetching token or data:", error);
      }
    };

    fetchToken();
  }, []);

  if (token === null) {
    console.log("Token is null");
  }

  return (
    <SafeAreaView>
      {token === null ? (
        <GuestComponent />
      ) : (
        <View style={{justifyContent:"center",alignItems:"center"}}>
          {
            
            data1.map((item, index) => (
              <View key={index}>
                <Text>{item.email} {typeof data1}</Text>
              </View>
              
            ))
          
          }
          
        </View>
      )}
    </SafeAreaView>
  );
};

export default Profile;
