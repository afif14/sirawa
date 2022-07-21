import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { globalStyles } from '../../styles/global'
import CircleIcon from '../../components/circleIcon'
import { normalize } from '../../utils/normalize'

const DetailAksara = ({ route, navigation }) => {
   const data = route.params

   return (
      <ImageBackground source={ require('../../assets/images/BG-1.png') } style={ { width: '100%', height: '100%' } }>
         <View style={ globalStyles.container }>
            <CircleIcon name='home' onPress={ () => navigation.navigate('Menu') } />
            <View style={ globalStyles.centerContainer }>
            <Text style={ styles.textMenu }>Aksara Jawa</Text>
            <Text style={styles.textMenuSecond}>Lan Pasangan</Text>
               <View style={ styles.historyContainer }>
                  <View style={ styles.aksaraBox }>
                     <Text adjustsFontSizeToFit style={ styles.textArtiContoh }>{ data.nama }</Text>
                     <Text adjustsFontSizeToFit style={ styles.textContoh }>{ data.aksara }</Text>
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
               <CircleIcon name='arrow-left' onPress={ () => navigation.navigate('AksaraLanPasangan') } />
            </View>
         </View>
      </ImageBackground>
   )
}

const styles = StyleSheet.create({
   headingText: {
      fontSize: normalize(28),
      fontFamily: 'roboto-bold',
      width: 272,
      textAlign: 'center',
   },
   historyContainer: {
      width: 273,
      height: 407,
      backgroundColor: '#f7dfc4',
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
      margin: 5,
      alignItems: 'center',
   },
   keterangan: {
      fontSize: normalize(14),
      fontWeight: '600',
      lineHeight: 21,
   },
   buttonWrapper: {
      color: 'black',
   },
   aksaraBox: {
      backgroundColor: '#e28164',
      borderRadius: 7,
      display: 'flex',
      justifyContent: 'center',
      height: '25%',
      width: '70%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 10
   },
   textTuladha: {
      marginVertical: 10,
      fontSize: normalize(20)
   },
   containerContoh: {
      maxHeight: 170,
      maxWidth: 260
   },
   textContoh: {
      fontSize: normalize(30),
      fontWeight: '600',
      textAlign: 'center',
      paddingBottom: 29,
   },
   textArti: {
      fontSize: normalize(20),
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 8,
   },
   textBoxContoh: {
      fontSize: normalize(30),
      fontWeight: '600',
      textAlign: 'center'
   },
   textArtiContoh: {
      fontSize: normalize(23),
      fontWeight: 'bold',
      textAlign: 'center',
      textTransform: 'uppercase',
   },
   textMenu: {
      fontSize: normalize(40),
      fontWeight: 'bold',
      textAlign: 'left',
      marginTop: 20,
      marginLeft: 20,
      color: '#EA855B',
      fontFamily: 'serif'
    },
    textMenuSecond: {
      fontSize: normalize(25),
      color: '#EAC28F',
      marginBottom: 20,
      marginLeft: 100,
      marginTop: -8,
      fontWeight: 'bold',
      textAlign: 'left',
      fontFamily: 'serif'
    },
})

export default DetailAksara