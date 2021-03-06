import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { normalize } from '../utils/normalize'

export const AksaraButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 7,
    width: 65,
    height: 60,
    marginTop: 8,
    backgroundColor: '#c4c4c4',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: normalize(30),
    fontFamily: 'roboto-bold',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
});
