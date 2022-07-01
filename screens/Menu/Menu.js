import React, { useState, useEffect } from 'react'
import { globalStyles } from '../../styles/global'
import { View, Text, StyleSheet, BackHandler, Alert, ImageBackground } from 'react-native'
import { FlatButton } from '../../components/button'
import CircleIcon from '../../components/circleIcon'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { normalize } from '../../utils/normalize'
import { Audio } from 'expo-av'

const audio = {
  filename: 'Backsong Gamelan',
  uri: require('../../assets/song/backsound.mp3'),
}

const Menu = ({ navigation }) => {
  const [name, setName] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [playbackObject, setPlaybackObject] = useState(null)
  const [playbackStatus, setPlaybackStatus] = useState(null)

  const handleAudioPlayPause = async () => {
    try {
      if (playbackObject !== null && playbackStatus === null) {
        console.log('the sound is play')
        const status = await playbackObject.loadAsync(
          audio.uri,
          { shouldPlay: true }
        )
        setIsPlaying(true)
        return setPlaybackStatus(status)
      }

      // It will pause our audio
      if (playbackStatus.isPlaying) {
        console.log('the sound is pause')
        const status = await playbackObject.pauseAsync()
        setIsPlaying(false)
        return setPlaybackStatus(status)
      }

      // It will resume our audio
      if (!playbackStatus.isPlaying) {
        console.log('the sound is resume')
        const status = await playbackObject.playAsync()
        setIsPlaying(true)
        return setPlaybackStatus(status)
      }
    } catch (error) {
      console.log('ini sound error', error)
    }
  }

  useEffect(() => {
    if (playbackObject === null) {
      setPlaybackObject(new Audio.Sound())
    }
  }, [])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      AsyncStorage.getItem('userName').then(value => {
        if (value != null) {
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
    ])
    return true
  }

  return (
    <ImageBackground source={ require('../../assets/images/BG-1.png') } style={ styles.styleBackground }>
      <View style={ globalStyles.container }>
        <View style={ styles.iconContainer }>
          <CircleIcon name='star' onPress={ () => navigation.navigate('ScreenNilai') } />
          <CircleIcon name='info' onPress={ () => navigation.navigate('Information') } />
          <CircleIcon name='question' onPress={ () => navigation.navigate('Guide') } />
        </View>
        <Text style={ styles.textMenu }>Sugeng Rawuh, { name }</Text>
        <View style={ styles.heightMenu }>
          <FlatButton text='Sejarah Aksara Jawa' style={ globalStyles.button } onPress={ () => navigation.navigate('Story') } />
          <FlatButton text='Sinau Aksara Jawa' style={ globalStyles.button } onPress={ () => navigation.navigate('Learn') } />
          <FlatButton text='apalan gelis ala bu lilik' style={ globalStyles.button } onPress={ () => navigation.navigate('ApalanCepet') } />
          <FlatButton text='latian aksara Jawi' style={ globalStyles.button } onPress={ () => navigation.navigate('LatihanSoal') } />
        </View>
        <View style={ styles.iconBottomContainer }>
          <CircleIcon name={ isPlaying ? 'volume-up' : 'volume-off' } onPress={ handleAudioPlayPause } />
          <CircleIcon name='sign-out' onPress={ Exit } />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  styleBackground: {
    display: 'flex',
    flex: 1
  },
  heightMenu: {
    height: 70,
  },
  textMenu: {
    fontSize: normalize(30),
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 100,
    color: '#EAC28F'
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  iconBottomContainer: {
    marginTop: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Alert: {
    backgroundColor: 'black',
  },
})

export default Menu
