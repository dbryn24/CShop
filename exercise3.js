import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Input from './components/Input';
import Button from './components/Button';
import Welcome from './components/Welcome';

const Signin = () => {
  const [title, setTitle] = useState('Welcome'); // State untuk judul
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    setTitle('Selamat Datang');
    console.log(username, password);
  };

  return (
    <View style={styles.container}>
      <Welcome label={title} />
      <Input
        label="Username"
        placeholder="Masukkan username anda"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        label="Password"
        placeholder="Masukkan password anda"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button label="Sign in" onPress={onSubmit} />
      <Button label="Sign in with Google" color="red" />
      <Button label="Sign in with Facebook" color="blue" />
      <Button label="Sign in with Apple" color="black" />
    </View>
  );
};

const Exercise3 = () => {
  return <Signin />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default Exercise3;
