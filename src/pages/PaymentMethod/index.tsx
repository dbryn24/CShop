import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components/atoms/';
import {Header, TextInput} from '../../components/molecules/';
import Logo from '../../assets/pictures/logo.png';
import TxtButton from '../../components/atoms/TxtButton';

const PaymentMethod = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ContentContainer}>
        <View style={styles.userInfo}></View>
        <Gap height={50} />
        <View style={styles.Method}></View>
      </View>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222831',
    flex: 1,
  },
  userInfo: {
    backgroundColor: '#50577A',
    marginTop: 80,
    width: 345,
    height: 130,
    borderRadius: 20,
    marginHorizontal: 27,
  },
  Method: {
    backgroundColor: '#50577A',
    width: 345,
    height: 500,
    borderRadius: 20,
    marginHorizontal: 27,
  },
});
