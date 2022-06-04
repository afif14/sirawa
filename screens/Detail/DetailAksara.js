import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/global'
import CircleIcon from '../../components/circleIcon'
import { normalize } from '../../utils/normalize'

const DetailAksara = ({ route, navigation }) => {
   const data = route.params

   return (
      <View style={globalStyles.container}>
         <CircleIcon name='home' onPress={() => navigation.push('Menu')} />
         <View style={globalStyles.centerContainer}>
            <Text style={styles.headingText}>Aksara Jawa Lan Pasangan</Text>
            <View style={styles.historyContainer}>
               <View style={styles.aksaraBox}>
                  <Text adjustsFontSizeToFit style={styles.textContoh}>{data.aksara}</Text>
                  <Text adjustsFontSizeToFit style={styles.textArti}>{data.nama}</Text>
               </View>
               <Text adjustsFontSizeToFit style={styles.textTuladha}>Tuladha panganggone aksara `{data.nama}` lan pasangane</Text>
               <View style={styles.containerContoh}>
                  <View style={styles.boxContoh}>
                     <Text adjustsFontSizeToFit style={styles.textContoh}>{data.contoh1}</Text>
                     <Text adjustsFontSizeToFit style={styles.textArti}>{data.arti1}</Text>
                  </View>
                  <View style={styles.boxContoh}>
                     <Text adjustsFontSizeToFit style={styles.textContoh}>{data.contoh2}</Text>
                     <Text numberOfLines={1} adjustsFontSizeToFit style={styles.textArti}>{data.arti2}</Text>
                  </View>
               </View>
            </View>
         </View>
         <View style={{ marginTop: 30, marginLeft: 250 }}>
            <CircleIcon name='arrow-left' onPress={() => navigation.push('AksaraLanPasangan')} />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   headingText: {
      fontSize: normalize(28),
      fontFamily: 'poppins-bold',
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
      backgroundColor: '#FFA1A1',
      borderRadius: 7,
      display: 'flex',
      justifyContent: 'center',
      height: '25%',
      width: '70%',
      marginTop: 15,
      marginLeft: 'auto',
      marginRight: 'auto',
   },
   textTuladha: {
      marginVertical: 10,
      fontSize: normalize(15)
   },
   containerContoh: {
      maxHeight: 170,
      maxWidth: 260
   },
   textContoh: {
      fontSize: normalize(25),
      fontWeight: '600',
      textAlign: 'center'
   },
   textArti: {
      fontSize: normalize(20),
      fontWeight: 'bold',
      textAlign: 'center'
   }
})

export default DetailAksara