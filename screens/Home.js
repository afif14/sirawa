import React from 'react';
import { Text, View, ImageBackground, Image, StyleSheet } from 'react-native';
import { FlatButton } from '../components/button';
import { globalStyles } from '../styles/global';
import onPressHandler from '../utils/onPressHandler'
import splashTop from '../assets/images/splash-top.png'

export default function Home({ navigation }) {
  return (
    <ImageBackground source={ require('../assets/images/BG-1.png') } style={ { width: '100%', height: '100%' } }>
    <View style={globalStyles.container}>
      <View style={globalStyles.centerContainer}>
          <Image style={styles.splashTop} source={splashTop}></Image>
          <FlatButton text='awiti' style={ styles.buttonHome } onPress={() => onPressHandler(navigation, 'Login')}></FlatButton>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashTop: {
    width: 414,
    height: 293,
    marginTop: 200,
    display: 'flex',
    alignItems: 'center'
  },
  buttonHome: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 34,
    marginTop: 8,
    backgroundColor: '#8E806A',
    marginVertical: 20,
    color: 'white'
  }
})