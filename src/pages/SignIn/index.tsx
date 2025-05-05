import React, {useState} from 'react';
import {StyleSheet, View, Image, Alert} from 'react-native';
import {Button, Gap} from '../../components/atoms/';
import {Header, TextInput} from '../../components/molecules/';
import Logo from '../../assets/pictures/logo.png';
import TxtButton from '../../components/atoms/TxtButton';
import {auth, firestore} from '../../config/Firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {collection, query, where, getDocs} from 'firebase/firestore';

const SignIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in both username and password');
      return;
    }

    try {
      // Cari pengguna berdasarkan username di Firestore
      const usersRef = collection(firestore, 'users');
      const q = query(usersRef, where('username', '==', username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        Alert.alert('Error', 'Username not found');
        return;
      }

      // Ambil email dari dokumen pengguna
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      console.log('User Data:', userData); // Debugging log

      // Login menggunakan email dan password
      await signInWithEmailAndPassword(auth, userData.email, password);

      Alert.alert('Success', 'You are now signed in!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Sign-in error:', error); // Debugging log
      Alert.alert('Error', 'Username or Password is incorrect');
    }
  };

  return (
    <View style={styles.contentContainer}>
      <Header title="Sign In" />
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
        label="Password"
        placeholder="Type your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Gap height={28} />
      <TxtButton
        label="Forgot password?"
        onPress={() => navigation.navigate('ForgotPassword')}
      />
      <Gap height={32} />
      <Button
        label="Sign In"
        color="#FD7014"
        textColor="#000000"
        onPress={handleSignIn}
      />
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
