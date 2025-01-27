import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { normalize, vh, vw } from '../../../utils/dimensions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Fonts from '../../../utils/Fonts';
import { HeartICon, ShopbagIcon } from '../../../utils/Svgicons';
import Color from '../../../utils/Color';
import axios from 'axios';

const Browse = () => {
  const [token, setToken] = useState<string | null>(null);
  const [data1, setData1] = useState<Array<any>>([]);
  console.log("render");
  const updateddata={
    price:"67777",
    title:"Hello"
  }
  
  useEffect(()=>{
    const fetchToken = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accesstoken');
        setToken(accessToken);

        if (token) {
          const response = await axios.get('https://dummyjson.com/products').then(response => {
            setData1(response.data.products);
          })
          
          // setData1(response.products); 
        }
      } catch (error) {
        console.error("Error fetching token or data:", error);
      }
    };

   
    fetchToken();

  },[token])

  const deleteItem=()=>{
     
  }

  return (
    <SafeAreaView style={{backgroundColor:Color.Neutral_White}}>
      <ScrollView>
        
        <View style={styles.maincomp}>
          {data1?.map((item) => (
            <View style={styles.mainproductcomp} key={item.id}>
              <View style={{ position: "absolute", top: vh(0), left: vw(0), right: vw(0), bottom: vh(0), backgroundColor: "rgba(0,0,0,0.5" }}>
                <ImageBackground source={{ uri: item.thumbnail }} style={styles.background}>
                  <View style={styles.hearticon}>
                   <TouchableOpacity 
                   onPress={async () => {
                   
                      const response = await axios.put(
                        `https://dummyjson.com/products/${item.id}`,
                        updateddata, 
                       
                      );
                      console.log("Updated product:", response.data);
                     
                  }}
                   > <HeartICon /></TouchableOpacity> 
                  </View>

                </ImageBackground>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text1}>{item.category}</Text>
                <View style={styles.price}>
                <Text style={styles.text2}>${item.price}</Text>
                

                  <View style={styles.bagicon}>
                    <ShopbagIcon />
                    
                </View>
                </View>

              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  maincomp: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: vw(343),
    marginLeft: vw(16)

  },
  mainproductcomp: {
    height: vh(306),
    width: vw(164),
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',

  },
  background: {
    height: vh(210),
    width: vw(164),

  },
  title: {
    fontSize: normalize(18),
    fontFamily: Fonts.Belleza,
    lineHeight: normalize(20.74)
  },
  text1: {
    fontFamily: Fonts.Lexend,
    fontSize: normalize(12),
    lineHeight: normalize(15),
    marginTop: vh(4)
  },
  text2: {

    fontSize: normalize(14),
    fontFamily: Fonts.Lexend,
    lineHeight: normalize(17.5),
  },
  hearticon: {
    width: vw(32),
    height: vh(32),
    borderRadius: normalize(40),
    backgroundColor: Color.Neutral_White,
    justifyContent: "center",
    alignItems: "center",
    marginTop: vh(12),
    marginLeft: vw(120)
  },
  price: {
    
    flexDirection: "row",
    
    position:"absolute",
    top:vh(290)

    
  },
  bagicon: {
    alignSelf:"flex-end",
   
    width: vw(32),
    height: vh(32),
    borderRadius: normalize(40),
    backgroundColor: Color.Brand_Beige,
    justifyContent: "center",
    alignItems: "center",
    marginTop:vh(-15)

  },
});

export default Browse;
