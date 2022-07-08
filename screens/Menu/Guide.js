import React from 'react'
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native'
import CircleIcon from '../../components/circleIcon'
import { globalStyles } from '../../styles/global'
import { normalize } from '../../utils/normalize'

const Guide = ({ navigation }) => {

  return (
    <ImageBackground source={ require('../../assets/images/BG-1.png') } style={ styles.styleBackground }>
      <View style={ globalStyles.container }>
      <Text style={ styles.textMenu }>Petunjuk</Text>
          <Text style={styles.textMenuSecond}>Nggunakake Aplikasi</Text>
        <View style={ globalStyles.centerContainer }>
          <View style={ styles.historyContainer }>
            <ScrollView>
              <Text style={ styles.historyText }>
                Sadurunge migunakake medhia pasinaon iki, kowe kabeh kudu mangerteni pirang-pirang fungsi tombol ing jerone.
                { "\n" }Gatekake andharan fungsi tombol iki:
              </Text>
              <View style={ styles.boxGuide }>
                <CircleIcon size={ 15 } name="star" />
                <Text style={ styles.textGuide }>Tombol bintang, kanggo{ "\n" }nampilake biji latian</Text>
              </View>
              <View style={ styles.boxGuide }>
                <CircleIcon size={ 15 } name="info" />
                <Text>Tombol i, kanggo nampilake { "\n" } informasi ngenani aplikasi</Text>
              </View>
              <View style={ styles.boxGuide }>
                <CircleIcon size={ 15 } name="question" />
                <Text>Tombol takon, kanggo nampilake { "\n" } informasi ngenani panggunaan{ "\n" } aplikasi</Text>
              </View>
              <View style={ styles.boxGuide }>
                <CircleIcon size={ 15 } name="volume-up" />
                <Text style={ styles.textGuide }>Tombol speaker, kanggo ngatur{ "\n" } suara latar</Text>
              </View>
              <View style={ styles.boxGuide }>
                <CircleIcon size={ 15 } name="arrow-left" />
                <Text style={ styles.textGuide }>Tombol balik, kanggo balik{ "\n" } menyang halaman sadurunge</Text>
              </View>
              <View style={ styles.boxGuide }>
                <CircleIcon size={ 15 } name="home" />
                <Text style={ styles.textGuide }>Tombol omah, kanggo nampilake halaman utama</Text>
              </View>
              <View style={ styles.boxGuide }>
                <CircleIcon size={ 15 } name="sign-out" />
                <Text style={ styles.textGuide }>Tombol metu, kanggo metu saka{ "\n" } aplikasi</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={ { marginTop: 30, marginLeft: 250 } }>
          <CircleIcon name='arrow-left' onPress={() => navigation.navigate('Menu') } />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  historyContainer: {
    width: 276,
    height: 400,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
  },
  headingText: {
    fontSize: 25,
    fontFamily: 'roboto-bold',
    lineHeight: 42,
    marginVertical: 30,
    width: 272,
    color: '#EAC28F'
  },
  historyText: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '500',
    padding: 10,
    fontFamily: 'roboto-reguler',
  },
  styleBackground: {
    display: 'flex',
    flex: 1
  },
  boxGuide: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 3,
  },
  textGuide: {
    textAlign: 'left',
    paddingTop: 7
  },
  textMenu: {
    fontSize: normalize(42),
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 70,
    marginLeft: 35,
    color: '#EA855B',
    fontFamily: 'serif'
  },
  textMenuSecond: {
    fontSize: normalize(25),
    color: '#EAC28F',
    marginBottom: 20,
    marginLeft: 35,
    marginTop: -8,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'serif'
  },
})

export default Guide
