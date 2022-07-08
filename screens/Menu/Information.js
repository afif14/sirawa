import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import CircleIcon from '../../components/circleIcon';
import { globalStyles } from '../../styles/global';
import { normalize } from '../../utils/normalize';

const Information = ({ navigation }) => {
  const backToMenu = () => {
    navigation.navigate('Menu');
  };

  return (
    <ImageBackground source={ require('../../assets/images/BG-1.png') } style={ { width: '100%', height: '100%' } }>
    <View style={globalStyles.container}>
    <Text style={styles.textMenu}>Informasi</Text>
        <Text style={styles.textMenuSecond}>Babagan Aplikasi</Text>
      <View style={globalStyles.centerContainer}>
        <View style={styles.historyContainer}>
          <Text style={styles.historyText}>
            Aplikasi SiRaWa utawa Sinau Aksara Jawa ya iku medhia pasinaon interaktif adhedhasar android kang fungsi kanggo nggampangake 
            para siswa jroning proses ngapal lan kenal materi aksara jawa.{ "\n" }
            { "\n" }Karo anane medhia pasinaon iki, muga-muga manfaat lan bisa ngrewangi guru lan siswa jroning proses belajar-mengajar.
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
    fontSize: 28,
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
  textMenu: {
    fontSize: normalize(42),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 70,
    marginLeft: 35,
    color: '#EA855B',
    fontFamily: 'serif'
  },
  textMenuSecond: {
    fontSize: normalize(25),
    color: '#EAC28F',
    marginBottom: 20,
    marginLeft: 35,
    marginTop: -8,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'serif'
  },
});

export default Information;
