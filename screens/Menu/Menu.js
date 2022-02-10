import React from 'react';
import { globalStyles } from '../../styles/global';
import { View, Text, StyleSheet, BackHandler, Alert } from 'react-native';
import { FlatButton } from '../../components/button';
import CircleIcon from '../../components/circleIcon';

const Menu = ({ navigation }) => {
  const StoryScreen = () => {
    navigation.push('Story');
  };
  const LearnScreen = () => {
    navigation.push('Learn');
  };
  const InformationScreen = () => {
    navigation.push('Information');
  };
  const GuideScreen = () => {
    navigation.push('Guide');
  };

  const Exit = () => {
    Alert.alert('Metu', 'Yakin metu saka Aplikasi?', [
      { text: 'Iyo', onPress: () => BackHandler.exitApp() },
      {
        text: 'Ora',
        onPress: () => null,
        style: 'cancel',
      },
    ]);
    return true;
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.iconContainer}>
        <CircleIcon name='exclamation' onPress={InformationScreen} />
        <CircleIcon name='question' onPress={GuideScreen} />
        <CircleIcon name='trophy' />
      </View>
      <Text style={styles.textMenu}>Sugeng Rawuh,</Text>
      <View style={styles.heightMenu}>
        <FlatButton text='Sejarah Aksara Jawi' onPress={StoryScreen} />
        <FlatButton text='Sinau Aksara Jawi' onPress={LearnScreen} />
        <FlatButton text='apalan gelis ala bu lilik' />
        <FlatButton text='latian aksara Jawi' />
      </View>
      <View style={styles.iconBottomContainer}>
        <CircleIcon name='volume-up' />
        <CircleIcon name='sign-out' onPress={Exit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heightMenu: {
    height: 70,
  },
  textMenu: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 100,
  },
  iconContainer: {
    flexDirection: 'row-reverse',
  },
  iconBottomContainer: {
    marginTop: 280,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Alert: {
    backgroundColor: 'black',
  },
});

export default Menu;
