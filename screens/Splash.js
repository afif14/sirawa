import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SplashImage from '../assets/images/splashImage.png';
import { globalStyles } from '../styles/global';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  });

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.centerContainer}>
        <Image style={styles.splashImage} source={SplashImage} />
        <Text style={styles.textMd2}>mangga sinau</Text>
        <Text style={styles.textSplash}> Aksara Jawi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashImage: {
    width: 200,
    height: 350,
    marginTop: 150,
  },
  textMd2: {
    marginTop: 8,
    fontSize: 18,
  },
  textSplash: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Splash;
