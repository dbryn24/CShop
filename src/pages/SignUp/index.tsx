import React, {useEffect} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Button, Gap} from '../../components/atoms/';
import {Header, TextInput} from '../../components/molecules/';
import Logo from '../../assets/pictures/logo.png';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.contentContainer}>
      <Header title="Sign Up" />
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <TextInput label="Username" placeholder="Type your email address" />
      <Gap height={28} />
      <TextInput label="Email" placeholder="Type your email" />
      <Gap height={28} />
      <TextInput label="Password" placeholder="Type your password" />
      <Gap height={32} />
      <Button label="Register" color="#FD7014" textColor="#000000" />
      <Gap height={32} />
      <Button
        label="Login"
        color="#50577A"
        textColor="#FFFFFF"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  contentContainer: {
    backgroundColor: '#222831',
    flex: 1,
    paddingHorizontal: 24,
  },
});
