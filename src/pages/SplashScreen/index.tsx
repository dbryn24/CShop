import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Logo from '../../assets/pictures/logo.png';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
<<<<<<< HEAD
    setTimeout(() => navigation.replace('Profile'), 3000);
=======
    setTimeout(() => navigation.replace('PaymentMethod'), 3000);
>>>>>>> 3fb0b09bc734d824e146dad618fc8bedb621309f
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
