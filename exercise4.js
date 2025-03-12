import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const exercise4 = () => {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.blackContainer}></View>
        <View style={styles.yellowContainer}></View>
        <View style={styles.blackContainer}></View>
      </View>
      <View style={styles.imgcontainer}>
        <Image style={styles.img} source={require('./assets/logo2.png')} />
      </View>
      <View style={styles.footer}>
        <View style={styles.blackContainer}></View>
        <View style={styles.yellowContainer}></View>
        <View style={styles.blackContainer}></View>
      </View>
    </>
  );
};

export default exercise4;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    flexDirection: 'row',
    padding: 10,
    // justifyContent: 'space-between', //posisi vertikal
    // alignItems: 'center', //posisi horizontal
  },
  blackContainer: {
    backgroundColor: 'black',
    margin: 10,
    height: 80,
    width: 80,
  },
  yellowContainer: {
    backgroundColor: 'yellow',
    margin: 10,
    height: 80,
    width: 80,
  },
  imgcontainer: {
    justifyContent: 'center', //posisi vertikal
    alignItems: 'center', //posisi horizontal
    flex: 1,
  },
  img: {
    width: 400,
    height: 100,
    resizeMode: 'contain',
  },
  footer: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between', //posisi vertikal
    // alignItems: 'center', //posisi horizontal
  },
});
