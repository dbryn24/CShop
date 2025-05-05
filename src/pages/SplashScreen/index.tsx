import {StyleSheet, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native'; // Tambahkan ini
import Logo from '../../assets/pictures/logo.png';

const SplashScreen = ({navigation}) => {
  const isFocused = useIsFocused(); // Periksa apakah komponen aktif

  useEffect(() => {
    if (isFocused) {
      const timer = setTimeout(() => navigation.replace('SignUp'), 3000);
      return () => clearTimeout(timer); // Bersihkan timer saat komponen unmount
    }
  }, [isFocused]);

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
});