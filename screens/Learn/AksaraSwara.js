import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { AksaraButton } from '../../components/aksaraButton';
import CircleIcon from '../../components/circleIcon';
import { globalStyles } from '../../styles/global';
import data from '../../json/aksaraSwara.json';
import { normalize } from '../../utils/normalize';

const AksaraSwara = ({ navigation }) => {
  const aksara = data.aksaraSwara;

  const list = () => {
    return aksara.map((value, index) => {
      return (
        <View style={styles.container} key={index + 1}>
          <AksaraButton text={value.nama} onPress={() => navigation.navigate('DetailSwara', value)}/>
        </View>
      );
    });
  };

  return (
    <ImageBackground source={ require('../../assets/images/BG-1.png') } style={ { width: '100%', height: '100%' } }>
    <View style={globalStyles.container}>
      <CircleIcon name='home' onPress={() => navigation.navigate('Menu')} />
      <View style={globalStyles.centerContainer}>
        <Text style={styles.textMenu}>Aksara </Text>
        <Text style={styles.textMenuSecond}>Swara</Text>
        <View style={styles.historyContainer}>
          <View style={styles.row}>{list()}</View>
          <View style={styles.keterangan}>
            <Text>Katerangan:</Text>
            <Text>
              Aksara swara mung digunakake kanggo nulis aksara swara sing dadi
              suku kata. Aksara Swara ora bisa digunakake minangka aksara
              pasangan
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 30, marginLeft: 250 }}>
        <CircleIcon name='arrow-left' onPress={() => navigation.navigate('Learn')} />
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 28 ,
    fontFamily: 'roboto-bold',
    lineHeight: 42,
    width: 272,
    textAlign: 'center',
  },
  historyContainer: {
    width: 273,
    height: 407,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    textAlign: 'center',
    marginTop: 40,
    justifyContent: 'space-evenly',
  },
  container: {
    marginTop: 10,
    margin: 5,
    alignItems: 'center',
  },
  keterangan: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 21,
    marginBottom: 10,
  },
  textMenu: {
    fontSize: normalize(40),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginLeft: -100,
    color: '#EA855B',
    fontFamily: 'serif'
  },
  textMenuSecond: {
    fontSize: normalize(35),
    color: '#EAC28F',
    marginBottom: 20,
    marginLeft: 130,
    marginTop: -20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'serif'
  },
});

export default AksaraSwara;
