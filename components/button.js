import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export const FlatButton = ({ text, onPress }) => {
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
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    marginTop: 8,
    backgroundColor: '#8E806A',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'poppins-bold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
