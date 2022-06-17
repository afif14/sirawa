import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import splashTop from '../assets/images/splash-top.png'
import { globalStyles } from '../styles/global';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  });

  return (
    <ImageBackground source={ require('../assets/images/BG-1.png') } style={ { width: '100%', height: '100%' } }>
    <View style={styles.splashScreen}>
      <View style={globalStyles.centerContainer}>
          <Image style={styles.splashTop} source={splashTop} />
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  splashScreen: {
    height: 'auto',
    backgroundColor: '#2C1E10',
    borderColor: 'white',
    flex: 1,
    justifyContent: 'center'
  },
  splashTop: {
    width: 414,
    height: 293,
  },
  splashBottom: {
    marginTop: 'auto',
    width: 337,
    height: 187
  },
  textSplash: {
    color: 'white',
    position: 'absolute',
    fontSize: 20,
    right: 100
  }
});

export default Splash;
