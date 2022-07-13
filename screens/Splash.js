import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import splashBackground from '../assets/images/splashBackground.png'
import splashTop from "../assets/images/splash-top.png";

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 3000);
  });
  return (
    <ImageBackground source={splashBackground} style={{width: '100%', height: '100%'}}>
      <View style={styles.splashScreen}>
        <Image style={styles.splashTop} source={splashTop}/>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  splashScreen: {
    height: "auto",
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: "center",
  },
  splashTop: {
    marginBottom: 100,
    width: 279,
    height: 293,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
})

export default Splash