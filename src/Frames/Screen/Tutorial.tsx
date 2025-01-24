import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { data } from "../../utils/Constraints";
import Carousel from 'react-native-reanimated-carousel';
import Fonts from '../../utils/Fonts';
import { normalize, vh, vw } from '../../utils/dimensions';
import Color from '../../utils/Color';
import Wanderobe from '../../assets/Images/Wanderobe.svg';
import Login from '../../Components/Login';  // Import your Login component
import ContinueasGuest from '../../Components/ContinueasGuest'; // Assuming this is another component
import { useNavigation } from '@react-navigation/native';

const Tutorial = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleLoginPress = () => {
    // Send the active image to the 'login' screen
    console.log(activeIndex)
    navigation.navigate('login', {
      image: data[activeIndex].image,  // Pass the active image
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={height}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ index }) => (
          <View style={styles.loopcont}>
            <ImageBackground style={styles.image} source={data[index].image} resizeMode='cover'>
              <View style={styles.overlay} />
              <Wanderobe style={styles.wanderobe} />
              <View style={styles.midframe}>
                <Text style={styles.uppertext}>{data[index].title}</Text>
                <Text style={index === 0 ? styles.uppertext : styles.lowertext}>{data[index].title2}</Text>
              </View>
            </ImageBackground>
          </View>
        )}
      />

      <View style={styles.compcont}>
        <View style={styles.indicatorContainer}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                activeIndex === index && styles.activeIndicator,
                { paddingLeft: Math.floor(activeIndex + vw(38.5)) },
              ]}
            />
          ))}
        </View>

        <Login
        text="Login"
          style={{
            textstyle:{
              color:Color.Neutral_Black
            },
            viewstyle:{
              backgroundColor:Color.Neutral_White
            }
          }}
          onPress={handleLoginPress} 
        />

        <ContinueasGuest />
        
        <TouchableOpacity>
          <Text style={styles.newuser}>New user?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wanderobe: {
    top: vh(76),
    left: vw(103),
    color: Color.Neutral_White,
    opacity: 1,
    gap: 15,
  },
  loopcont: {
    flex: 1,
  },
  midframe: {
    width: vw(335),
    height: vh(87),
    top: vh(278),
    left: vw(16),
    backgroundColor: "transparent",
  },
  uppertext: {
    fontFamily: Fonts.Lexend,
    fontSize: normalize(32),
    textAlign: "left",
    color: Color.Neutral_White,
    opacity: 0.9,
  },
  lowertext: {
    fontFamily: Fonts.Belleza,
    fontSize: normalize(32),
    color: Color.Neutral_White,
    opacity: 0.9,
  },
  image: {
    flex: 1,
  },
  compcont: {
    position: "absolute",
    width: vw(343),
    height: vh(166),
    top: vh(606),
    left: vw(16),
    gap: 16,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  newuser: {
    fontFamily: Fonts.Lexend,
    fontSize: normalize(16),
    textAlign: "left",
    textDecorationLine: "underline",
    color: Color.Neutral_White,
    opacity: 0.9,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  indicatorContainer: {
    flexDirection: "row",
    width: vw(165),
    height: vh(2),
    backgroundColor: "transparent",
    borderWidth: 1,
  },
  activeIndicator: {
    height: vh(2),
    width: vw(41),
    backgroundColor: Color.Neutral_White,
  },
  login: {
    marginTop: normalize(16),  // Adjust the margin as needed
  },
});

export default Tutorial;
