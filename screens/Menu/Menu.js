import React, {useState, useEffect} from 'react';
import { globalStyles } from '../../styles/global';
import { View, Text, StyleSheet, BackHandler, Alert, ImageBackground } from 'react-native';
import { FlatButton } from '../../components/button';
import CircleIcon from '../../components/circleIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { normalize } from '../../utils/normalize'
import { Audio } from 'expo-av';

const Menu = ({ navigation }) => {
  const [name, setName] = useState('')
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/song/backsound.mpeg')
    )
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound')
        sound.unloadAsync()
      }
      : undefined
  }, [sound]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      AsyncStorage.getItem('userName').then(value => {
        if(value != null) {
          setName(value)
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const Exit = () => {
    Alert.alert('Metu', 'Yakin metu saka Aplikasi?', [
      { text: 'Iyo', onPress: () => BackHandler.exitApp() },
      {
        text: 'Ora',
        onPress: () => null,
        style: 'cancel',
      },
    ]);
    return true;
  };

  return (
    <ImageBackground source={ require('../../assets/images/BG-1.png') } style={ { width: '100%', height: '100%' } }>
    <View style={globalStyles.container}>
      <View style={styles.iconContainer}>
        <CircleIcon name='exclamation' onPress={() => navigation.navigate('Information')} />
        <CircleIcon name='question' onPress={() => navigation.navigate('Guide')} />
        <CircleIcon name='trophy' onPress={() => navigation.navigate('ScreenNilai')} />
      </View>
      <Text style={styles.textMenu}>Sugeng Rawuh, {name}</Text>
      <View style={styles.heightMenu}>
        <FlatButton text='Sejarah Aksara Jawi' style={globalStyles.button} onPress={() => navigation.navigate('Story')} />
          <FlatButton text='Sinau Aksara Jawi' style={ globalStyles.button } onPress={() => navigation.navigate('Learn')} />
          <FlatButton text='apalan gelis ala bu lilik' style={ globalStyles.button } onPress={() => navigation.navigate('ApalanCepet')}/>
          <FlatButton text='latian aksara Jawi' style={ globalStyles.button } onPress={() => navigation.navigate('LatihanSoal')}/>
      </View>
      <View style={styles.iconBottomContainer}>
        <CircleIcon name='volume-up' onPress={playSound}/>
        <CircleIcon name='sign-out' onPress={Exit} />
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  heightMenu: {
    height: 70,
  },
  textMenu: {
    fontSize: normalize(30),
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 100,
  },
  iconContainer: {
    flexDirection: 'row-reverse',
  },
  iconBottomContainer: {
    marginTop: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Alert: {
    backgroundColor: 'black',
  },
});

export default Menu;
