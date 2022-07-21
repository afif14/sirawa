import React, { useState, useRef } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import Slick from 'react-native-slick'
import { globalStyles } from '../../styles/global'
import CircleIcon from '../../components/circleIcon'
import { Video, Audio } from 'expo-av'
import { normalize } from '../../utils/normalize'

var styles = {

   headingText: {
      fontSize: 28,
      fontFamily: 'roboto-bold',
      lineHeight: 42,
      width: 272,
      textAlign: 'center',
      color: '#EAC28F'
   },
   buttonStyle: {
      fontSize: 'bold'
   },
   slide1: {
      width: 273,
      height: 325,
      backgroundColor: 'black',
      display: 'flex',
      flex:1,
      borderRadius: 10,
      borderWidth: 1,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto'
   },
   slide2: {
      width: 273,
      height: 407,
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      paddingHorizontal: 15,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto'
   },
   slide3: {
      width: 273,
      height: 450,
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto'
   },
   text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
   }, 
   textMenu: {
      fontSize: normalize(32),
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
      color: '#EA855B',
      fontFamily: 'serif'
    },
    textMenuSecond: {
      fontSize: normalize(25),
      color: '#EAC28F',
      marginBottom: 20,
      marginTop: -5,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'serif'
    },
}

const Taling = ({ navigation }) => {
   const video = useRef(null)
   const [status, setStatus] = useState({})

   return (
      <ImageBackground source={ require('../../assets/images/BG-1.png') } style={ { width: '100%', height: '100%' } }>
         <View style={ globalStyles.container }>
            <CircleIcon name='home' onPress={ () => navigation.navigate('Menu') } />
            <View style={ globalStyles.centerContainer }>
               <Text style={ styles.textMenu }>Cara ngapalake Aksara Jawa</Text>
               <Text style={styles.textMenuSecond}>ala Bu Lilik</Text>
            </View>

            <Slick loop={ false } showsButtons showsPagination={false}>
               <Video
                  ref={ video }
                  style={ styles.slide1 }
                  source={ require('../../assets/video/RevHALANAKADA.mp4') }
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                  onPlaybackStatusUpdate={ status => setStatus(() => status) }
               />
               <Video
                  ref={ video }
                  style={ styles.slide1 }
                  source={ require('../../assets/video/RevCASAWADHA.mp4') }
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                  onPlaybackStatusUpdate={ status => setStatus(() => status) }
               />
               <Video
                  ref={ video }
                  style={ styles.slide1 }
                  source={ require('../../assets/video/Ragapaya.mp4') }
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                  onPlaybackStatusUpdate={ status => setStatus(() => status) }
               />
               <Video
                  ref={ video }
                  style={ styles.slide1 }
                  source={ require('../../assets/video/Ngabanyatha.mp4') }
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                  onPlaybackStatusUpdate={ status => setStatus(() => status) }
               />
               <Video
                  ref={ video }
                  style={ styles.slide1 }
                  source={ require('../../assets/video/RevTAJAMA.mp4') }
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                  onPlaybackStatusUpdate={ status => setStatus(() => status) }
               />
            </Slick>
         </View>
      </ImageBackground>
   )

}

export default Taling