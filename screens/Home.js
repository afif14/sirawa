import React from 'react';
import { Text, View } from 'react-native';
import { FlatButton } from '../components/button';
import { globalStyles } from '../styles/global';
import onPressHandler from '../utils/onPressHandler'

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.centerContainer}>
        <Text style={globalStyles.textLg}>Si Rawa</Text>
        <Text style={globalStyles.textSm}>Sinau Aksara Jawa</Text>
        <FlatButton text='awiti' onPress={() => onPressHandler(navigation, 'Login')}></FlatButton>
      </View>
    </View>
  );
}
