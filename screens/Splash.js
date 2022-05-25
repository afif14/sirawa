import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import SplashImage from '../assets/images/splashImage.png';
import splashTop from '../assets/images/splash-top.png'
import splashBottom from '../assets/images/splash-bottom.png'
import { globalStyles } from '../styles/global';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  });

  let dimensions = Dimensions.get("window")
  let imageHeight = Math.round((dimensions.width * 9) / 16)
  let imageWidth = dimensions.width;

  return (
    <View style={styles.splashScreen}>
      <View style={globalStyles.centerContainer}>
        <View style={styles.borderView}>
          <Image style={styles.splashTop} source={splashTop} />
          <Image style={styles.splashBottom} source={splashBottom} />
        </View>
      </View>
    </View>
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
    position: 'absolute',
    top: 0,
    left: -35
  },
  splashBottom: {
    marginTop: 'auto',
    width: 337,
    height: 187
  },
  borderView: {
    marginVertical: 30,
    width: 350,
    height: 690,
    borderColor: 'white',
    borderWidth: 5,
    justifyContent: 'center',
    borderRadius: 10
  },
  textSplash: {
    color: 'white',
    position: 'absolute',
    fontSize: 20,
    right: 100
  }
});

export default Splash;
