import React, {useState, useEffect} from 'react';
import { globalStyles } from '../../styles/global';
import { View, Text, StyleSheet, BackHandler, Alert } from 'react-native';
import { FlatButton } from '../../components/button';
import CircleIcon from '../../components/circleIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { normalize } from '../../utils/normalize'

const Menu = ({ navigation }) => {
  const [name, setName] = useState('')

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
    <View style={globalStyles.container}>
      <View style={styles.iconContainer}>
        <CircleIcon name='exclamation' onPress={() => navigation.push('Information')} />
        <CircleIcon name='question' onPress={() => navigation.push('Guide')} />
        <CircleIcon name='trophy' />
      </View>
      <Text style={styles.textMenu}>Sugeng Rawuh, {name}</Text>
      <View style={styles.heightMenu}>
        <FlatButton text='Sejarah Aksara Jawi' onPress={() => navigation.push('Story')} />
        <FlatButton text='Sinau Aksara Jawi' onPress={() => navigation.push('Learn')} />
        <FlatButton text='apalan gelis ala bu lilik' onPress={() => navigation.push('ApalanCepet')}/>
        <FlatButton text='latian aksara Jawi' />
      </View>
      <View style={styles.iconBottomContainer}>
        <CircleIcon name='volume-up' />
        <CircleIcon name='sign-out' onPress={Exit} />
      </View>
    </View>
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
