import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global'
import { normalize } from '../utils/normalize'


export const FlatButton = ({ text, onPress, style, disabled}) => {
  return (
    <TouchableOpacity disabled={disabled} style={style} onPress={onPress}>
      <View>
        <Text style={globalStyles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
