import React from 'react';
import { globalStyles } from '../../styles/global';
import { View, Text, StyleSheet } from 'react-native';
import { FlatButton } from '../../components/button';
import CircleIcon from '../../components/circleIcon';

const Menu = ({ navigation }) => {
  const backToMenu = () => {
    navigation.push('Menu');
  };
  const sandanganScreen = () => {
    navigation.push('Sandangan');
  };
  const aksaraSwaraScreen = () => {
    navigation.push('AksaraSwara');
  };
  const aksaraLanPasanganScreen = () => {
    navigation.push('AksaraLanPasangan');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={styles.textMenu}>Sampeyan pengin sinau opo?</Text>
      <View style={styles.heightMenu}>
        <FlatButton
          text='Aksara Jawi Lan Pasangan'
          onPress={aksaraLanPasanganScreen}
        />
        <FlatButton text='Sandangan' onPress={sandanganScreen} />
        <FlatButton text='Aksara Swara' onPress={aksaraSwaraScreen} />
      </View>
      <View style={styles.iconBottomContainer}>
        <CircleIcon name='arrow-left' onPress={backToMenu} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heightMenu: {
    height: 80,
  },
  textMenu: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 60,
    marginTop: 100,
  },
  iconBottomContainer: {
    marginTop: 250,
    marginLeft: 250,
  },
  marginTop: {
    marginTop: 10
  }
});

export default Menu;
