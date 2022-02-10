import React from 'react';
import { Text, View } from 'react-native';
import { FlatButton } from '../components/button';
import Input from '../components/input';
import { globalStyles } from '../styles/global';

export default function Login({ navigation }) {
  const pressHandler = () => {
    navigation.push('Menu');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.textMd}>Absen riyen</Text>
      <View>
        <Input
          keyboardType='default'
          placeholder='Nami Pepak'
          style={globalStyles.input}
        />
        <Input
          placeholderTextColor='black'
          keyboardType='numeric'
          placeholder='No.Absen'
          style={globalStyles.input}
        />
        <Input
          placeholderTextColor='black'
          keyboardType='default'
          placeholder='Kelas'
          style={globalStyles.input}
        />
      </View>
      <View style={globalStyles.centerContainer}>
        <FlatButton text='mlebet' onPress={pressHandler} />
      </View>
    </View>
  );
}
