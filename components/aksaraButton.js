import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

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
    display: 'flex',
  },
  buttonText: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'poppins-bold',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
});
