import React from 'react';
import { Text, View } from 'react-native';
import { FlatButton } from '../components/button';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const onPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.centerContainer}>
        <Text style={globalStyles.textLg}>Si Rawa</Text>
        <Text style={globalStyles.textSm}>Sinau Aksoro Jowo</Text>
        <FlatButton text='awiti' onPress={onPress}></FlatButton>
      </View>
    </View>
  );
}
