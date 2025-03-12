import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';

const Button = ({label, color = 'orange', onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
