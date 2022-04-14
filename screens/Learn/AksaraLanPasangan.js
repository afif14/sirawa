import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AksaraButton } from '../../components/aksaraButton';
import CircleIcon from '../../components/circleIcon';
import { globalStyles } from '../../styles/global';
import data from '../../json/aksaraPasangan.json';

const AksaraSwara = ({ navigation }) => {
  const aksara = data.AksaraPasangan;

  const backToMenu = () => {
    navigation.push('Menu');
  };
  const learnScreens = () => {
    navigation.push('Learn');
  };

  const list = () => {
    return aksara.map(value => {
      return (
        <View style={styles.container} key={value.id}>
          <AksaraButton text={value.nama} />
        </View>
      );
    });
  };

  return (
    <View style={globalStyles.container}>
      <CircleIcon name='home' onPress={backToMenu} />
      <View style={globalStyles.centerContainer}>
        <Text style={styles.headingText}>Aksara Swara</Text>
        <View style={styles.historyContainer}>
          <View style={styles.row}>{list()}</View>
          <View style={styles.keterangan}>
            <Text>Katerangan:</Text>
            <Text>
              Aksara pasangan fungsine kanggo nyambungake konsonan gatra tutup
              karo gatra sabanjure, kajaba aksara 'r', aksara 'h', lan aksara
              'ng'.gan
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 30, marginLeft: 250 }}>
        <CircleIcon name='arrow-left' onPress={learnScreens} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 28,
    fontFamily: 'poppins-bold',
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
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    marginBottom: 10,
  },
});

export default AksaraSwara;
