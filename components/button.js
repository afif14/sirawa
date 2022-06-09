import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { normalize } from '../utils/normalize'

export const FlatButton = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
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
    paddingHorizontal: 34,
    backgroundColor: 'white',
    marginTop: 8,
    backgroundColor: '#8E806A',
  },
  buttonText: {
    color: 'white',
    fontSize: normalize(16),
    fontFamily: 'roboto-bold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
