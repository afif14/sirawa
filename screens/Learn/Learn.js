import React from 'react';
import { globalStyles } from '../../styles/global';
import { View, Text, StyleSheet } from 'react-native';
import { FlatButton } from '../../components/button';
import CircleIcon from '../../components/circleIcon';

const Menu = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.textMenu}>Sampeyan pengin sinau opo?</Text>
      <View style={styles.heightMenu}>
        <FlatButton
          text='Aksara Jawi Lan Pasangan'
          onPress={() => navigation.push('AksaraLanPasangan')}
        />
        <FlatButton text='Sandangan' onPress={() => navigation.push('Sandangan')} />
        <FlatButton text='Aksara Swara' onPress={() =>  navigation.push('AksaraSwara')} />
      </View>
      <View style={styles.iconBottomContainer}>
        <CircleIcon name='arrow-left' onPress={() => navigation.push('Menu')} />
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
