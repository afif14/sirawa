import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/global'
import CircleIcon from '../../components/circleIcon'
import { normalize } from '../../utils/normalize'

const DetailSwara = ({ route, navigation }) => {
   const data = route.params

   return (
      <View style={globalStyles.container}>
         <CircleIcon name='home' onPress={() => navigation.navigate('Menu')} />
         <View style={globalStyles.centerContainer}>
            <Text style={styles.headingText}>Aksara Swara</Text>
            <View style={styles.historyContainer}>
               <View style={styles.aksaraBox}>
                  <Text adjustsFontSizeToFit style={styles.textContoh}>{data.aksara}</Text>
                  <Text adjustsFontSizeToFit style={styles.textArti}>{data.nama}</Text>
               </View>
               <Text adjustsFontSizeToFit style={styles.textTuladha}>Tuladha panganggone aksara swara `{data.nama}`</Text>
               <View style={styles.containerContoh}>
                  <View style={styles.boxContoh}>
                     <Text adjustsFontSizeToFit style={styles.textArti}>{data.arti1}:</Text>
                     <Text adjustsFontSizeToFit style={styles.textContoh}>{data.contoh1}</Text>
                  </View>
                  <View style={styles.boxContoh}>
                     <Text numberOfLines={1} adjustsFontSizeToFit style={styles.textArti}>{data.arti2}:</Text>
                     <Text adjustsFontSizeToFit style={styles.textContoh}>{data.contoh2}</Text>
                  </View>
               </View>
            </View>
         </View>
         <View style={ { marginTop: 30, marginLeft: 250 } }>
            <CircleIcon name='arrow-left' onPress={ () => navigation.navigate('Learn') } />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   headingText: {
      fontSize: 28,
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
      fontSize: 14,
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
      marginTop: 25,
      marginLeft: 'auto',
      marginRight: 'auto',
   },
   textTuladha: {
      marginVertical: 20,
      fontSize: 16
   },
   containerContoh: {
      marginVertical: 10,
      maxHeight: 17,
      maxWidth: 26
   },
   boxContoh: {
      padding: 10
   },
   textContoh: {
      fontSize: 25,
      fontWeight: '600',
      padding: 10,
      textAlign: 'center'
   },
   textArti: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
   }
})

export default DetailSwara