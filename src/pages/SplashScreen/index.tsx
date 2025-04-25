import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Logo from '../../assets/pictures/logo.png';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('CheckoutScreen'), 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222831',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 32,
  },
});
