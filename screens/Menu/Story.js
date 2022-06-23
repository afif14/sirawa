import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import CircleIcon from '../../components/circleIcon';
import { globalStyles } from '../../styles/global';

const Story = ({ navigation }) => {

  return (
    <ImageBackground source={ require('../../assets/images/BG-1.png') } style={ { width: '100%', height: '100%' } }>
    <View style={globalStyles.container}>
      <View style={globalStyles.centerContainer}>
        <Text style={styles.headingText}>niki lo sejarah aksara Jawi</Text>
        <View style={styles.historyContainer}>
          <ScrollView>
              <Text style={ styles.historyText }>
                Kawitan ana siji nom-noman kaaran Ajisaka lan loro punggawane kaaran Dhora lan Sembadha kang arep lunga ngumbara. { "\n" }{ "\n" }
                Pas tekan ing Pulo Majethi, Ajisaka titip siji keris marang Sembadha karo amanat ora oleh menehake Keris Pusaka kasebut menyang wong liya saliyane Ajisaka dhewe kang sing jupuk. { "\n" }{ "\n" }
                Sawise iku, Ajisaka lan Dhora lanjut ngumbara menyang Nagara Madhangkamulan. ing Nagara kasebut ana siji prabu kang remen mangan daging manungsa nganti diwedeni dening masarakat kang kaaran Prabu Dewata Cengkar. { "\n" }{ "\n" }
                Sawise Ajisaka menang nglawan Prabu Dewata Cengkar, Ajisaka dadi raja ing nagara kasebut. Ora suwe sawise kuwi, Ajisaka kelingan keris pusaka kang digawa dening Sembadha lan banjur ngutus Dhora kanggo jupuk keris. { "\n" }{ "\n" }
                Nanging, Dhora lan Sembadha ora tau bali amarga wis tarung dhuwuring kekuwatan pendapat dhewe-dhewe kang diwenehake dening Ajisaka. Nganti dheweke kabeh tiwas dhuwur pertempuran kasebut. { "\n" }{ "\n" }
                Ajisaka lunga menyang Pulo Majethi kaping loro punggawane tempur lan piyambake uga nyesel banget dhuwur ketledhorane.{ "\n" }{ "\n" }
                Prastawa kasebut nggawe Ajisaka nyiptakake aksara kang muni : { "\n" }
                <Text style={ styles.bold }>- Ha Na Ca Ra Ka</Text>  yang berarti kang ateges ana loro utusan.{ "\n" }
                <Text style={ styles.bold }>- Da Ta Sa Wa La</Text> kang ateges dheweke kabeh seje pendapat utawa padha - padha gelut.{ "\n" }
                <Text style={ styles.bold }>- Ma Ga Ba Tha Nga</Text> kang ateges dheweke kabeh berdua padha kuwate utawa saktine.{ "\n" }
                <Text style={ styles.bold }>- Pa Dha Ja Ya Nya</Text> kang ateges padha-padha berpangku wektu pralaya.{ "\n" }
              </Text>
          
          </ScrollView>
        </View>
      </View>
        <View style={ { marginTop: 30, marginLeft: 250 } }>
        <CircleIcon name='arrow-left' onPress={() => navigation.navigate('Menu')} />
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    width: 300,
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
    color: '#EAC28F'
  },
  historyText: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
    padding: 10,
    fontFamily: 'roboto-reguler',
  },
  bold: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  arrowRight: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
});

export default Story;
