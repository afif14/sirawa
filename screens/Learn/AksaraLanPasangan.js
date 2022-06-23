import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { AksaraButton } from '../../components/aksaraButton';
import Slick from 'react-native-slick';
import CircleIcon from '../../components/circleIcon';
import { globalStyles } from '../../styles/global';
import data from '../../json/aksaraPasangan.json';
import { normalize } from '../../utils/normalize'

const AksaraLanPasangan = ({ navigation }) => {
  const aksaraHanacaraka = data.AksaraPasangan[0].hanacaraka
  const askaraDatasawala = data.AksaraPasangan[0].datasawala
  const askaraPadhajayanya = data.AksaraPasangan[0].padhajayanya
  const askaraMagabathanga = data.AksaraPasangan[0].magabathanga

  const hanacaraka = () => {
    return aksaraHanacaraka.map((value, index) => {
      return (
        <View style={styles.container} key={index + 1}>
          <AksaraButton text={value.nama} onPress={() => navigation.navigate('DetailAksara', value)}/>
        </View>
      );
    });
  };
  const datasawala = () => {
    return askaraDatasawala.map((value, index) => {
      return (
        <View style={styles.container} key={index + 1}>
          <AksaraButton text={value.nama} onPress={() => navigation.navigate('DetailAksara', value)}/>
        </View>
      )
    })
  };
  const padhajayanya = () => {
    return askaraPadhajayanya.map((value, index) => {
      return (
        <View style={styles.container} key={index + 1}>
          <AksaraButton text={value.nama} onPress={() => navigation.navigate('DetailAksara', value)}/>
        </View>
      )
    })
  };
  const magabathanga = () => {
    return askaraMagabathanga.map((value, index) => {
      return (
        <View style={styles.container} key={index + 1}>
          <AksaraButton text={value.nama} onPress={() => navigation.navigate('DetailAksara', value)}/>
        </View>
      )
    })
  };
  

  return (
    <ImageBackground source={ require('../../assets/images/BG-1.png') } style={ { width: '100%', height: '100%' } }>
    <View style={globalStyles.container}>
      <CircleIcon name='home' onPress={() => navigation.navigate('Menu')} />
      <View style={globalStyles.centerContainer}>
        <Text style={styles.headingText}>Aksara Jawa Lan Pasangan</Text>
        <View style={styles.historyContainer}>
          <Slick showsPagination={false} loop={false} buttonWrapperStyle={styles.buttonWrapper}>
            <View style={styles.row}>{hanacaraka()}</View>
            <View style={styles.row}>{datasawala()}</View>
            <View style={styles.row}>{padhajayanya()}</View>
            <View style={styles.row}>{magabathanga()}</View>
          </Slick>
          
          <View style={styles.keterangan}>
            <Text style={ styles.textKeterangan}>Katerangan:</Text>
            <Text style={ styles.textKeterangan}>
              Aksara pasangan fungsine kanggo nyambungake konsonan gatra tutup
              karo gatra sabanjure, kajaba aksara 'r', aksara 'h', lan aksara
              'ng'.
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
    fontSize: normalize(28),
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
    lineHeight: 21,
    marginBottom: 10,
  },
  textKeterangan: {
    fontSize: normalize(17),
    fontWeight: '600'
  },
  buttonWrapper: {
    color: 'black',
  }
});

export default AksaraLanPasangan;
