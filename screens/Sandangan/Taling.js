import React from 'react'
import { Text, View } from 'react-native'
import Slick from 'react-native-slick'
import { globalStyles } from '../../styles/global';
import CircleIcon from '../../components/circleIcon';

var styles = {

   headingText: {
      fontSize: 28,
      fontFamily: 'poppins-bold',
      lineHeight: 42,
      width: 272,
      textAlign: 'center',
   },
   buttonStyle: {
      fontSize: 'bold'
   },
   slide1: {
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
   text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
   }
}

const Taling = ({ navigation }) => (
      <View style={globalStyles.container}>
         <CircleIcon name='home' onPress={() => navigation.push('Menu')} />
            <View style={globalStyles.centerContainer}>
               <Text style={styles.headingText}>Sandangan Aksara Swara</Text>
            </View>
      
       <Slick style={styles.wrapper} showsPagination={false} buttonWrapperStyle={styles.buttonStyle} loop={false}>
         <View testID="Hello" style={styles.slide1}>
            <View>
               <Text>Ini Text</Text>
            </View>
         </View>
         <View testID="Beautiful" style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
         </View>
         <View testID="Simple" style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
         </View>
      </Slick>
            <View style={{ marginTop: 30, marginLeft: 250 }}>
        <CircleIcon name='arrow-left' onPress={() => navigation.push('Learn')} />
      </View>
   </View>

)

export default Taling