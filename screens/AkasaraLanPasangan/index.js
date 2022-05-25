import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/global'
import CircleIcon from '../../components/circleIcon'
import { moderateScale, verticalScale, scale } from '../../utils/normalize'

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
      fontSize: moderateScale(28),
      fontFamily: 'poppins-bold',
      lineHeight: 42,
      width: moderateScale(272),
      textAlign: 'center',
   },
   historyContainer: {
      width: moderateScale(273),
      height: verticalScale(407),
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      paddingHorizontal: scale(15),
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
      fontSize: moderateScale(14),
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
      height: '20%',
      width: '70%',
      marginTop: moderateScale(25),
      marginLeft: 'auto',
      marginRight: 'auto',
   },
   textTuladha: {
      marginVertical: 20,
      fontSize: moderateScale(16)
   },
   containerContoh: {
      marginVertical: 10,
      maxHeight: moderateScale(170),
      maxWidth: moderateScale(265)
   },
   boxContoh: {
      padding: scale(10)
   },
   textContoh: {
      fontSize: moderateScale(25),
      fontWeight: '600',
      padding: scale(10),
      textAlign: 'center'
   },
   textArti: {
      fontSize: moderateScale(20),
      fontWeight: 'bold',
      textAlign: 'center'
   }
})

export default DetailAksara