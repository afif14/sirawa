import React from 'react';
import { View, Text, StyleSheet, ImageBackground} from 'react-native';
import CircleIcon from '../../components/circleIcon';
import { globalStyles } from '../../styles/global';

const Guide = ({ navigation }) => {
  const backToMenu = () => {
    navigation.navigate('Menu');
  };

  return (
    <ImageBackground source={ require('../../assets/images/BG-1.png') } style={ styles.styleBackground}>
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
    </ImageBackground>
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
    color: '#EAC28F'
  },
  historyText: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '500',
    padding: 10,
    fontFamily: 'roboto-reguler',
  },
  styleBackground: {
    display: 'flex',
    flex: 1
  },
});

export default Guide;
