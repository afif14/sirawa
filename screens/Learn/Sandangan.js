import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatButton } from '../../components/button';
import CircleIcon from '../../components/circleIcon';
import { globalStyles } from '../../styles/global';
import data from '../../json/sandangan.json';
import {ratioHeight, ratioWidth} from '../../styles/metric'

const Sandangan = ({ navigation }) => {
  const sandangan = data.sandangan;

  const list = () => {
    return sandangan.map((value, index) => {
      return (
        <View style={styles.buttonContainer} key={index + 1}>
          <FlatButton text={value.nama} onPress={() => navigation.push('DetailSandangan', value)}/>
        </View>
      );
    });
  };

  return (
    <View style={globalStyles.container}>
      <CircleIcon name='home' onPress={() => navigation.push('Menu') } />
      <View style={globalStyles.centerContainer}>
        <Text style={styles.headingText}>Sandangan Aksara Jawa</Text>
        <View style={styles.historyContainer}>{list()}</View>
      </View>
      <View style={{ marginTop: 30, marginLeft: 250 }}>
        <CircleIcon name='arrow-left' onPress={() => navigation.push('Learn') } />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    width: 273 + ratioWidth,
    height: 455 + ratioHeight,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
  },
  headingText: {
    fontSize: 28,
    fontFamily: 'roboto-bold',
    lineHeight: 42,
    width: 272 + ratioWidth,
    textAlign: 'center',
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
});

export default Sandangan;
