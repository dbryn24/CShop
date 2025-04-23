import React, {useEffect} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Button, Gap} from '../../components/atoms/';
import {Header, TextInput} from '../../components/molecules/';
import Logo from '../../assets/pictures/logo.png';
import TxtButton from '../../components/atoms/TxtButton';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.contentContainer}>
      <Header title="Sign In" />
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <TextInput label="Username" placeholder="Type your email address" />
      <Gap height={28} />
      <TextInput label="Password" placeholder="Type your password" />
      <Gap height={28} />
      <TxtButton
        label="Lupa password?"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
      <Gap height={32} />
      <Button label="Sign In" color="#FD7014" textColor="#000000" />
      <Gap height={32} />
      <Button
        label="Create New Account"
        color="#50577A"
        textColor="#FFFFFF"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default SignIn;

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
