import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircleIcon from '../../components/circleIcon';
import { globalStyles } from '../../styles/global';

const Guide = ({ navigation }) => {
  const backToMenu = () => {
    navigation.push('Menu');
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.centerContainer}>
        <Text style={styles.headingText}>Petunjuk Nggunaake Aplikasi</Text>
        <View style={styles.historyContainer}>
          <Text style={styles.historyText}>
            cara panggunan aplikasi iki yaiku, kanggo sinau
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 30, marginLeft: 250 }}>
        <CircleIcon name='arrow-left' onPress={backToMenu} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    width: 273,
    height: 400,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
  },
  headingText: {
    fontSize: 25,
    fontFamily: 'roboto-bold',
    lineHeight: 42,
    marginVertical: 30,
    width: 272,
  },
  historyText: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '500',
    padding: 10,
    fontFamily: 'roboto-reguler',
  },
});

export default Guide;
