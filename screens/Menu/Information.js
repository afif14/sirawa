import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircleIcon from '../../components/circleIcon';
import { globalStyles } from '../../styles/global';

const Information = ({ navigation }) => {
  const backToMenu = () => {
    navigation.push('Menu');
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.centerContainer}>
        <Text style={styles.headingText}>Informasi Babagan Aplikasi</Text>
        <View style={styles.historyContainer}>
          <Text style={styles.historyText}>
            Aplikasi ini dibuat dengan berlatar belakang, ingin memudahkan para
            siswa dalam menghafal dan mengenal materi Aksara Jawa.
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

export default Information;
