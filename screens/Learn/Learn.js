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

  return (
    <View style={globalStyles.container}>
      <Text style={styles.textMenu}>Sampeyan pengin sinau opo?</Text>
      <View style={styles.heightMenu}>
        <FlatButton text='Aksara Jawi Lan Pasangan' />
        <FlatButton text='Sandangan' onPress={sandanganScreen} />
        <FlatButton text='Aksara Swara' />
      </View>
      <View style={styles.iconBottomContainer}>
        <CircleIcon name='arrow-left' onPress={backToMenu} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heightMenu: {
    height: 70,
  },
  textMenu: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 100,
  },
  iconContainer: {
    flexDirection: 'row-reverse',
  },
  iconBottomContainer: {
    marginTop: 300,
    marginLeft: 250,
  },
});

export default Menu;
