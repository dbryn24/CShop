import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Input from './components/Input';
import Button from './components/Button';
import Welcome from './components/Welcome';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [noTelp, setNoTelp] = useState('');

  const onSubmit = () => {
    console.log('hello world');
    console.log('Nama:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Alamat:', address);
    console.log('No. Telepon:', noTelp);
  };

  return (
    <View style={styles.container}>
      <Welcome label="Registration" />
      <Input
        label="Name"
        placeholder="Masukkan nama lengkap anda"
        value={name}
        onChangeText={setName}
      />
      <Input
        label="Username"
        placeholder="Masukkan username anda"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        label="Email"
        placeholder="Masukkan email anda"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        label="Address"
        placeholder="Masukkan alamat anda"
        value={address}
        onChangeText={setAddress}
      />
      <Input
        label="Phone Number"
        placeholder="Masukkan Nomor telepon anda"
        value={noTelp}
        keyboardType="number-pad"
        onChangeText={setNoTelp}
      />
      <Button label="Register" onPress={onSubmit} color="purple" />
    </View>
  );
};

const Exercise3 = () => {
  return <Register />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default Exercise3;
