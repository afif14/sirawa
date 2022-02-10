import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ placeholder, keyboardType, style }) => {
  return (
    <TextInput
      keyboardType={keyboardType}
      placeholder={placeholder}
      maxLength={40}
      placeholderTextColor='#c4c4bc'
      style={style}
      numberOfLines={1}
      blurOnSubmit={true}
    />
  );
};

export default Input;
