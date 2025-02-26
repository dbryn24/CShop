import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Exercise3 = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headertxt}>Welcome</Text>
      </View>
      <View style={styles.login}>
        <Text style={styles.logintxt}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan username anda"></TextInput>
        <Text style={styles.logintxt}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan password anda"></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontxt}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  headertxt: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  login: {
    margin: 10,
  },
  logintxt: {
    fontSize: 20,
    fontWeight: 500,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#FFA500',
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 15,
    borderRadius: 10,
  },
  buttontxt: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 500,
    fontSize: 15,
  },
});

export default Exercise3;
