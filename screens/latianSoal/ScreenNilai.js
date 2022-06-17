import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import CircleIcon from '../../components/circleIcon'
import { globalStyles } from '../../styles/global'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { tingkat1, tingkat2, tingkat3, tingkat4 } from '../../utils/soal'

const ScreenNilai = ({ navigation }) => {
   const [hasil, setHasil] = useState({score: 0, benar: 0, salah: 0})

   const historyScore = async () => {
      const scoreQuiz = await AsyncStorage.getItem('score')
      console.log(scoreQuiz)
      if(scoreQuiz) {
         setHasil(JSON.parse(scoreQuiz))
      }
   }

   const hasilJawab = async () => {
      const readJawaban = await AsyncStorage.getItem('jawaban')
      if(readJawaban){
         let scoreAkhir = {}
         const jawab = JSON.parse(readJawaban)
         jawab.map((value, index) => {
         if(value.level == 1){
            tingkat1.map((el) => {
               if(el.id == value.id){
                  if (el.jawaban == value.jawabanUser){
                    
                     setHasil(prevState => {
                        scoreAkhir = { ...prevState, benar: prevState.benar + 1 }
                        return {...prevState, benar: prevState.benar + 1}
                     })
                  }
                  else {
                     setHasil(prevState => {
                        scoreAkhir = { ...prevState, salah: prevState.salah + 1 }
                        return {...prevState, salah: prevState.salah + 1 }
                     })
                  }
               }
            })
         }
            else if (value.level == 2) {
               tingkat2.map((el) => {
                  if (el.id == value.id) {
                     if (el.jawaban == value.jawabanUser) {

                        setHasil(prevState => {
                           scoreAkhir = { ...prevState, benar: prevState.benar + 1 }
                           return { ...prevState, benar: prevState.benar + 1 }
                        })
                     }
                     else {
                        setHasil(prevState => {
                           scoreAkhir = { ...prevState, salah: prevState.salah + 1 }
                           return { ...prevState, salah: prevState.salah + 1 }
                        })
                     }
                  }
               })
            }
            else if (value.level == 3) {
               tingkat3.map((el) => {
                  if (el.id == value.id) {
                     if (el.jawaban == value.jawabanUser) {

                        setHasil(prevState => {
                           scoreAkhir = { ...prevState, benar: prevState.benar + 1 }
                           return { ...prevState, benar: prevState.benar + 1 }
                        })
                     }
                     else {
                        setHasil(prevState => {
                           scoreAkhir = { ...prevState, salah: prevState.salah + 1 }
                           return { ...prevState, salah: prevState.salah + 1 }
                        })
                     }
                  }
               })
            }
            else if (value.level == 4) {
               tingkat4.map((el) => {
                  if (el.id == value.id) {
                     if (el.jawaban == value.jawabanUser) {

                        setHasil(prevState => {
                           scoreAkhir = { ...prevState, benar: prevState.benar + 1 }
                           return { ...prevState, benar: prevState.benar + 1 }
                        })
                     }
                     else {
                        setHasil(prevState => {
                           scoreAkhir = { ...prevState, salah: prevState.salah + 1 }
                           return { ...prevState, salah: prevState.salah + 1 }
                        })
                     }
                  }
               })
            }
            const writeScore = async () => await AsyncStorage.setItem('score', JSON.stringify(scoreAkhir))
            writeScore()
      })  

      }
      
   }
   useEffect(() => {
      const readJawaban = async () => {
         const bacaJawaban =  await AsyncStorage.getItem('jawaban')
         if (bacaJawaban) {
            console.log('ini jawaban', bacaJawaban)
            hasilJawab()
         } else {
            console.log('ini score')
            historyScore()
         }
      }
      readJawaban()
   },[])
   useEffect(() => {

   }, [hasil])
   

   return (
      <ImageBackground source={ require('../../assets/images/BG-1.png') } style={ { width: '100%', height: '100%' } }>
         <View style={ globalStyles.container }>
            <View style={ globalStyles.centerContainer }>
               <Text style={ styles.headingText }>Nilai Pungkasan</Text>
               <View style={ styles.historyContainer }>
                  <Text style={styles.textScore}>{hasil.benar * 5}</Text>
                  <Text style={ styles.historyText }>Jawaban Bener: {hasil?.benar}</Text>
                  <Text style={ styles.historyText }>Jawaban Salah: {hasil?.salah}</Text>
               </View>
            </View>
            <View style={ { marginTop: 30, marginLeft: 250 } }>
               <CircleIcon name='arrow-left' onPress={async () => {
                  await AsyncStorage.removeItem('jawaban')
                  return navigation.navigate('Menu')}} />
            </View>
         </View>
      </ImageBackground>
   )
}

const styles = StyleSheet.create({
   historyContainer: {
      width: 273,
      height: 400,
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
   },
   headingText: {
      fontSize: 28,
      fontFamily: 'roboto-bold',
      lineHeight: 42,
      marginVertical: 30,
      width: 272,
   },
   historyText: {
      fontSize: 14,
      lineHeight: 19,
      fontWeight: '500',
      padding: 10,
      fontFamily: 'roboto-reguler',
   },
   textScore:{
      fontSize: 144,
      textAlign: 'center'
   }
})

export default ScreenNilai
