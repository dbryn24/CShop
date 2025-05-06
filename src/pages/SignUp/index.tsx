import React, {useState} from 'react';
import {StyleSheet, View, Image, Alert} from 'react-native';
import {Button, Gap} from '../../components/atoms/';
import {Header, TextInput} from '../../components/molecules/';
import Logo from '../../assets/pictures/logo.png';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!username || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Logika untuk mendaftarkan pengguna baru
    console.log('SignUp data:', {username, email, password});
    Alert.alert('Success', 'Account created successfully!');
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.contentContainer}>
      <Header title="Sign Up" />
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <TextInput
        label="Username"
        placeholder="Type your username"
        value={username}
        onChangeText={setUsername}
      />
      <Gap height={28} />
      <TextInput
        label="Email"
        placeholder="Type your email"
        value={email}
        onChangeText={setEmail}
      />
      <Gap height={28} />
      <TextInput
        label="Password"
        placeholder="Type your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Gap height={32} />
      <Button
        label="Sign Up"
        color="#FD7014"
        textColor="#000000"
        onPress={handleSignUp}
      />
      <Gap height={32} />
      <Button
        label="Back to Sign In"
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