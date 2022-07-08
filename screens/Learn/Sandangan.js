import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { FlatButton } from '../../components/button';
import CircleIcon from '../../components/circleIcon';
import { globalStyles } from '../../styles/global';
import data from '../../json/sandangan.json';
import { normalize } from '../../utils/normalize';

const Sandangan = ({ navigation }) => {
  const sandangan = data.sandangan;

  const list = () => {
    return sandangan.map((value, index) => {
      return (
        <View style={styles.buttonContainer} key={index + 1}>
          <FlatButton text={ value.nama } style={ styles.sandanganButton } onPress={() => navigation.navigate('DetailSandangan', value)}/>
        </View>
      );
    });
  };

  return (
    <ImageBackground source={ require('../../assets/images/BG-1.png') } style={ { width: '100%', height: '100%' } }>
    <View style={globalStyles.container}>
      <CircleIcon name='home' onPress={() => navigation.navigate('Menu') } />
      <View style={globalStyles.centerContainer}>
        <Text style={styles.textMenu}>Sandangan</Text>
        <Text style={styles.textMenuSecond}>Aksara Jawa</Text>
        <View style={styles.historyContainer}>{list()}</View>
      </View>
      <View style={{ marginTop: 30, marginLeft: 250 }}>
        <CircleIcon name='arrow-left' onPress={() => navigation.navigate('Learn') } />
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    width: 273,
    height: 455 ,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  headingText: {
    fontSize: 28,
    fontFamily: 'roboto-bold',
    width: 272,
    textAlign: 'center',
    color: '#EAC28F'
  },
  historyText: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '500',
    padding: 1,
    fontFamily: 'roboto-reguler',
  },
  buttonContainer: {
    paddingHorizontal: 15,
  },
  sandanganButton:{
    borderRadius: 20,
    paddingVertical: 9,
    paddingHorizontal: 34,
    marginTop: 8,
    backgroundColor: '#8E806A',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textMenu: {
    fontSize: normalize(40),
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 20,
    color: '#EA855B',
    fontFamily: 'serif'
  },
  textMenuSecond: {
    fontSize: normalize(25),
    color: '#EAC28F',
    marginBottom: 20,
    marginLeft: 100,
    marginTop: -8,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'serif'
  },
});

export default Sandangan;
