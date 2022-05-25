import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CircleIcon from '../../components/circleIcon';
import { globalStyles } from '../../styles/global';

const Story = ({ navigation }) => {

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.centerContainer}>
        <Text style={styles.headingText}>niki lo sejarah aksara Jawi</Text>
        <View style={styles.historyContainer}>
          <ScrollView>
            <Text style={styles.historyText}>
              Kawitan ana siji nom-noman kaaran Ajisaka lan loro punggawane kaaran Dhora lan Sembadha kang arep lunga ngumbara. 
              Pas tekan ing Pulo Majethi, Ajisaka titip siji keris marang Sembadha karo amanat ora oleh menehake Keris Pusaka kasebut menyang wong liya saliyane Ajisaka dhewe kang sing jupuk. 
              Sawise iku, Ajisaka lan Dhora lanjut ngumbara menyang Nagara Madhangkamulan. ing Nagara kasebut ana siji prabu kang remen mangan daging manungsa nganti diwedeni dening masarakat kang kaaran Prabu Dewata Cengkar. 
              Sawise Ajisaka menang nglawan Prabu Dewata Cengkar, Ajisaka dadi raja ing nagara kasebut. Ora suwe sawise kuwi, Ajisaka kelingan keris pusaka kang digawa dening Sembadha lan banjur ngutus Dhora kanggo jupuk keris. 
              Nanging, Dhora lan Sembadha ora tau bali amarga wis tarung dhuwuring kekuwatan pendapat dhewe-dhewe kang diwenehake dening Ajisaka. Nganti dheweke kabeh tiwas dhuwur pertempuran kasebut. Ajisaka lunga menyang Pulo Majethi kaping loro punggawane tempur lan piyambake uga nyesel banget dhuwur ketledhorane.
              Prastawa kasebut nggawe Ajisaka nyiptakake aksara kang muni : {"\n"}
              <Text style={styles.bold}>- Ha Na Ca Ra Ka</Text>  yang berarti kang ateges ana loro utusan.{"\n"}
              <Text style={styles.bold}>- Da Ta Sa Wa La</Text> kang ateges dheweke kabeh seje pendapat utawa padha - padha gelut.{"\n"}
              <Text style={styles.bold}>- Ma Ga Ba Tha Nga</Text> kang ateges dheweke kabeh berdua padha kuwate utawa saktine.{"\n"}
              <Text style={styles.bold}>- Pa Dha Ja Ya Nya</Text> kang ateges padha-padha berpangku wektu pralaya.{"\n"}
            </Text>
          
          </ScrollView>
        </View>
      </View>
      <View style={styles.arrowRight}>
        <CircleIcon name='arrow-left' onPress={() => navigation.push('Menu')} />
      </View>
    </View>
  );
};

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
    fontFamily: 'poppins-bold',
    lineHeight: 42,
    marginVertical: 30,
    width: 272,
  },
  historyText: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '500',
    padding: 10,
    fontFamily: 'poppins-reguler',
  },
  bold: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  arrowRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    textAlign: 'right',
    marginLeft: 10
  }
});

export default Story;
