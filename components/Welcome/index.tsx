import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Welcome = ({label}) => {
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    marginBottom: 20,
    marginTop: 20,
  },
});
