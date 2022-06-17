import React, {useEffect, useState} from 'react';
import { Text, View, TextInput, StyleSheet, Alert, ImageBackground } from 'react-native';
import { FlatButton } from '../components/button';
import { globalStyles } from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [absen, setAbsen] = useState("")

  const setData = async () => {
    if(name.length == 0 && absen.length == 0){
      Alert.alert('Mirengan!', 'tulung isi data riyen')
    } else {
      try {
        await AsyncStorage.setItem('userName', name)
        await AsyncStorage.setItem('absensi', absen)
        navigation.navigate('Menu')
      } catch (error) {
        console.log(error)
      }
    }
  }

  const pressHandler = () => {
    setData()
  };

  return (
    <ImageBackground source={require('../assets/images/BG-1.png')} style={{width: '100%', height: '100%'}}>
    <View style={globalStyles.container}>
      <Text style={globalStyles.textMd}>Mlebet riyen</Text>
      <View>
        <TextInput
          placeholder='Nami Pepak'
          value={name}
          style={styles.input}
          onChangeText={value => setName(value)}
        />
        <TextInput
          keyboard='number'
          placeholder='Absen'
          value={absen}
          style={styles.input}
          onChangeText={value => setAbsen(value)}
        />
      </View>
        <FlatButton text='mlebet' style={ styles.buttonLogin } onPress={ pressHandler } />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  marginTop: {
    marginTop: 20
  },
  textBottom: {
    flex: 1,
    marginTop: 20,
    textAlign: 'center'
  },
  buttonLogin: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 40,
    backgroundColor: '#8E806A',
    marginVertical: 10,
    color: 'white'
  }
})