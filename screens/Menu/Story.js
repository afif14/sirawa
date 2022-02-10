import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircleIcon from '../../components/circleIcon';
import { globalStyles } from '../../styles/global';

const Story = ({ navigation }) => {
  const backToMenu = () => {
    navigation.push('Menu');
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.centerContainer}>
        <Text style={styles.headingText}>niki lo sejarah aksara Jawi</Text>
        <View style={styles.historyContainer}>
          <Text style={styles.historyText}>
            Asal mula aksara jawa erat kaitannya dengan Legenda Ajisaka, seorang
            pemuda sakti dari Majethi bersama dua orang punggawa (abdi) setianya
            yaitu Dora dan Sembada. Kedua abdi ini sama-sama setia dan sakti.
            Satu saat Ajisaka ingin pergi meninggalkan pulau Majethi. Dia
            menunjuk Dora untuk menemaninya mengembara. Sedangkan Sembada,
            disuruh tetap tinggal di pulau Majethi. Ajisaka menitipkan pusaka
            andalannya untuk dijaga oleh Sembada. Dia berpesan supaya jangan
            menyerahkan pusaka itu kepada siapa pun, kecuali pada Ajisaka
            sendiri.
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
    fontSize: 28,
    fontFamily: 'poppins-bold',
    lineHeight: 42,
    marginVertical: 30,
    width: 272,
  },
  historyText: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '500',
    padding: 10,
    fontFamily: 'poppins-reguler',
  },
});

export default Story;
