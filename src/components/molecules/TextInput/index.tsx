import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, value, onChangeText, secureTextEntry}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#888"
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins Medium',
    fontSize: 16,
    marginBottom: 6,
    color: '#FFFFFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    padding: 10,
    color: '#000000',
    backgroundColor: '#D9D9D9',
  },
});
