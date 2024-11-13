// CustomTextInput.js
import React from 'react';
import { TextInput,StyleSheet } from 'react-native';

const CustomTextInput = ({ value, onChangeText, placeholder, keyboardType,error }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText} 
      value={value} 
      keyboardType={keyboardType} 
      style={[styles.TextInput, { borderColor: error ? "#ff0000" : "#d2d2d2" }]}
      />
  );
};


const styles = StyleSheet.create({
    TextInput: {
        height: 40,
        width: 100,
        borderColor: '#d2d2d2',
        borderWidth: 2,
        marginBottom: 20,
        marginTop: 20,
        paddingLeft: 8,
        borderRadius:5
        },
  });

export default CustomTextInput;
