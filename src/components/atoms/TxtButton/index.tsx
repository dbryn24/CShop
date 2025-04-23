import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const TxtButton = ({onPress, label}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TxtButton;

const styles = StyleSheet.create({
  label: {
    color: '#94BDFF',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    textAlign: 'left',
    marginTop: 10,
  },
});
