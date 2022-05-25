import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatButton } from '../../components/button';
import CircleIcon from '../../components/circleIcon';
import { globalStyles } from '../../styles/global';
import data from '../../json/sandangan.json';
import {ratioHeight, ratioWidth} from '../../styles/metric'

const Sandangan = ({ navigation }) => {
  const sandangan = data.sandangan;

  const backToMenu = () => {
    navigation.push('Menu');
  };
  const learnScreens = () => {
    navigation.push('Learn');
  };

  const list = () => {
    return sandangan.map(value => {
      return (
        <View style={styles.buttonContainer} key={value.id}>
          <FlatButton text={value.nama} />
        </View>
      );
    });
  };

  return (
    <View style={globalStyles.container}>
      <CircleIcon name='home' onPress={backToMenu} />
      <View style={globalStyles.centerContainer}>
        <Text style={styles.headingText}>Sandangan Aksara Jawa</Text>
        <View style={styles.historyContainer}>{list()}</View>
      </View>
      <View style={{ marginTop: 30, marginLeft: 250 }}>
        <CircleIcon name='arrow-left' onPress={learnScreens} />
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
    fontFamily: 'poppins-bold',
    lineHeight: 42,
    width: 272 + ratioWidth,
    textAlign: 'center',
  },
  historyText: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '500',
    padding: 1,
    fontFamily: 'poppins-reguler',
  },
  buttonContainer: {
    paddingHorizontal: 15,
  },
});

export default Sandangan;
