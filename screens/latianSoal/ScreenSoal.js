import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, Icon } from 'react-native'
import Slick from 'react-native-slick'
import CircleIcon from '../../components/circleIcon'
import { globalStyles } from '../../styles/global'
import { normalize } from '../../utils/normalize'
import RadioButtonRN from 'radio-buttons-react-native-expo'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ScreenSoal = ({ route, navigation }) => {
   const { soal, level } = route.params
   const [isianUser, setIsianUser] = useState([])

   const jawaban = async (value) => {
      const isAnswer = await AsyncStorage.getItem('jawaban')
      if (isAnswer) {
         const replace = JSON.parse(isAnswer).filter((el) => !(level == el.level && value.id == el.id))
         const answer = replace.concat([{ level, id: value.id, jawabanUser: value.isian }])
         await AsyncStorage.setItem('jawaban', JSON.stringify(answer))
      } else {
         await AsyncStorage.setItem('jawaban',
            JSON.stringify([{ level, id: value.id, jawabanUser: value.isian }]))
      }
   }

   const cekJawaban = async () => {
      const isAnswer = await AsyncStorage.getItem('jawaban')
      if (isAnswer) {
         JSON.parse(isAnswer).map((el) => {
            if (el.level == level) {
               setIsianUser(prevState => {
                  return [...prevState, {jawabanUser: el.jawabanUser, id: el.id}]
               })
            }
         })
      }
   }
   useEffect(() => {
         cekJawaban()
   }, [])

   const pilihanUser = (id, pilihanSoal, tebakanUser) => {
      let idJawaban = 0
      tebakanUser.map((value, index) => {
         if(id == value.id) {
            pilihanSoal.map((el, i) => {
               if(value.jawabanUser == el) {
                  idJawaban =  i + 1
               }
            })
         }
      })
      return idJawaban
   }

   const initialLevel = async (tingkat) => {
      const isLevel = await AsyncStorage.getItem('level')
      if (isLevel) {
         const updateLevel = JSON.parse(isLevel)
         if (tingkat <= 3) {
            updateLevel[`tingkat${tingkat + 1}`] = true
            await AsyncStorage.setItem('level', JSON.stringify(updateLevel))
         }
      } else {
         await AsyncStorage.setItem('level', JSON.stringify({
            tingkat1: true,
            tingkat2: false,
            tingkat3: false,
            tingkat4: false,
         }))
      }
   }

   const pilihan = (index) => {
      if (index == 0) {
         return 'a'
      } else if (index == 1) {
         return 'b'
      } else if (index == 2) {
         return 'c'
      } else if (index == 3) {
         return 'd'
      }
   }

   const kumpulanSoal = () => {
      return soal.map((value, index) => {
         return (
            <View style={ styles.container } key={ level + index }>
               <View style={ styles.aksaraBox }>
                  <Text style={ styles.textContoh }>{ value.arti }</Text>
               </View>
               <Text style={ styles.textSoal }>{ value.soal }</Text>
               <View>
                  {/* {value.pilihan.map((value, index) => {
                     return ( */}
                  <RadioButtonRN initial={pilihanUser(value.id, value.pilihan, isianUser)} box={ false } boxStyle={ styles.boxRadio } textStyle={ styles.textHitam }
                     data={ value.pilihan.map((element, i) => {
                        return {
                           isian: element,
                           label: `${pilihan(i)}. ${element}`,
                           id: value.id
                        }
                     }) } selectedBtn={ (e) => jawaban(e) } />
                  {/* )
                  })} */}
               </View>
            </View>
         )
      })
   }

   return (
      <View style={ globalStyles.container }>
         <View style={ { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' } }>
            <CircleIcon name='home' onPress={ () => navigation.navigate('Menu') } />
            { level == 4 &&
               <CircleIcon name='trophy' onPress={ () => {navigation.navigate('ScreenNilai') }} />
            }
         </View>
         <View style={ globalStyles.centerContainer }>
            <Text style={ styles.headingText }>Latihan Soal</Text>
            <View style={ styles.historyContainer }>
               <Slick loop={ false }>
                  { kumpulanSoal() }
               </Slick>
            </View>
         </View>
         <View style={ { marginTop: 30, marginLeft: 250 } }>
            <CircleIcon name='arrow-left' onPress={() => {
               initialLevel(level)
               return navigation.navigate('LatihanSoal')
            } } />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   headingText: {
      fontSize: normalize(28),
      fontFamily: 'roboto-bold',
      lineHeight: 42,
      width: 272,
      textAlign: 'center',
   },
   historyContainer: {
      width: 320,
      height: 520,
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      paddingHorizontal: 15,
   },
   container: {
      marginTop: 10,
      margin: 5,
      alignItems: 'center',
   },
   aksaraBox: {
      backgroundColor: '#FFA1A1',
      borderRadius: 18,
      display: 'flex',
      justifyContent: 'center',
      height: '20%',
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
   },
   textContoh: {
      fontSize: normalize(30),
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 10
   },
   textHitam: {
      color: 'black',
      fontSize: 21,
      fontWeight: '700',
      paddingBottom: 20
   },
   textSoal: {
      fontSize: 18,
   },
   boxRadio: {
      width: 260,
   }
})

export default ScreenSoal