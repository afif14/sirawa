import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { globalStyles } from '../../styles/global'
import CircleIcon from '../../components/circleIcon'
import { normalize } from '../../utils/normalize'

const DetailSandangan = ({ route, navigation }) => {
   const data = route.params

   return (
      <ImageBackground source={ require('../../assets/images/BG-1.png') } style={ { width: '100%', height: '100%' } }>
         <View style={ globalStyles.container }>
            <CircleIcon name='home' onPress={ () => navigation.navigate('Menu') } />
            <View style={ globalStyles.centerContainer }>
               <Text style={ styles.headingText }>Sandangan Aksara Jawa</Text>
               <View style={ styles.historyContainer }>
                  <View style={ styles.aksaraBox }>
                     <Text adjustsFontSizeToFit style={ styles.textHeading }>{ data.aksara }</Text>
                     <Text adjustsFontSizeToFit style={ styles.textArti }>{ data.nama }</Text>
                  </View>
                  <Text adjustsFontSizeToFit style={ styles.textTuladha }>Tuladha panganggone aksara `{ data.nama }` lan pasangane</Text>
                  <View style={ styles.containerContoh }>
                     <View style={ styles.boxContoh }>
                        <Text adjustsFontSizeToFit style={ styles.textArti }>{ data.arti1 }</Text>
                        <Text adjustsFontSizeToFit style={ styles.textContoh }>{ data.contoh1 }</Text>
                     </View>
                     <View style={ styles.boxContoh }>
                        <Text numberOfLines={ 1 } adjustsFontSizeToFit style={ styles.textArti }>{ data.arti2 }</Text>
                        <Text adjustsFontSizeToFit style={ styles.textContoh }>{ data.contoh2 }</Text>
                     </View>
                  </View>
               </View>
            </View>
            <View style={ { marginTop: 30, marginLeft: 250 } }>
               <CircleIcon name='arrow-left' onPress={ () => navigation.navigate('Sandangan') } />
            </View>
         </View>
      </ImageBackground>
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
      width: 273,
      height: 407,
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      paddingHorizontal: 15,
   },
   row: {
      flexDirection: 'row',
      flex: 1,
      flexWrap: 'wrap',
      textAlign: 'center',
      marginTop: 40,
      justifyContent: 'space-evenly',
   },
   container: {
      marginTop: 10,
      margin: 5,
      alignItems: 'center',
   },
   keterangan: {
      fontSize: normalize(14),
      fontWeight: '600',
      lineHeight: 21,
      marginBottom: 10,
   },
   buttonWrapper: {
      color: 'black',
   },
   aksaraBox: {
      backgroundColor: '#FFA1A1',
      borderRadius: 7,
      display: 'flex',
      justifyContent: 'center',
      height: '30%',
      width: '65%',
      marginTop: 15,
      marginLeft: 'auto',
      marginRight: 'auto',
   },
   textTuladha: {
      marginVertical: 10,
      fontSize: normalize(16)
   },
   containerContoh: {
      marginVertical: 5,
      height: 170,
      width: 260
   },
   boxContoh: {
      padding: 10
   },
   textHeading: {
      fontSize: normalize(45),
      fontWeight: '600',
      padding: 5,
      textAlign: 'center'
   },
   textContoh: {
      fontSize: normalize(30),
      fontWeight: '600',
      padding: 5,
      textAlign: 'center'
   },
   textArti: {
      fontSize: normalize(20),
      fontWeight: 'bold',
      textAlign: 'center'
   }
})

export default DetailSandangan