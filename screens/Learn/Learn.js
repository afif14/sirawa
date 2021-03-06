import React from 'react';
import { globalStyles } from '../../styles/global';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { FlatButton } from '../../components/button';
import CircleIcon from '../../components/circleIcon';
import { normalize } from '../../utils/normalize'

const Menu = ({ navigation }) => {
  return (
    <ImageBackground source={ require('../../assets/images/BG-1.png') } style={ { width: '100%', height: '100%' } }>
    <View style={globalStyles.container}>
      <Text style={styles.textMenu}>Kowe pingin</Text>
      <Text style={styles.textMenuSecond}>Sinau apa?</Text>
      <View style={styles.heightMenu}>
        <FlatButton
          style={ globalStyles.button }
          text='Aksara Jawa Lan Pasangan'
          onPress={() => navigation.navigate('AksaraLanPasangan')}
        />
        <FlatButton text='Sandangan' style={ globalStyles.button } onPress={() => navigation.navigate('Sandangan')} />
        <FlatButton text='Aksara Swara' style={ globalStyles.button } onPress={() =>  navigation.navigate('AksaraSwara')} />
      </View>
      <View style={styles.iconBottomContainer}>
        <CircleIcon name='arrow-left' onPress={() => navigation.navigate('Menu')} />
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  heightMenu: {
    height: 80,
  },
  textMenu: {
    fontSize: normalize(30),
    fontWeight: 'bold',
    marginBottom: 60,
    marginTop: 100,
    color: '#EAC28F'
  },
  iconBottomContainer: {
    marginTop: 250,
    marginLeft: 250,
  },
  marginTop: {
    marginTop: 10
  },
  textMenu: {
    fontSize: normalize(30),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 120,
    color: '#EA855B',
    fontFamily: 'serif'
  },
  textMenuSecond: {
    fontSize: normalize(35),
    color: '#EAC28F',
    marginBottom: 50,
    marginTop: -8,
    marginRight: 30,
    fontWeight: 'bold',
    textAlign: 'right',
    fontFamily: 'serif'
  },
});

export default Menu;
