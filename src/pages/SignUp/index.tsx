import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import AddPhoto from '../../components/atoms/AddPhoto';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign Up" onBack={() => console.log('Go back')} />
      <View style={styles.contentContainer}>
        <View style={styles.photoContainer}>
          <AddPhoto />
        </View>

        <Gap height={24} />

        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 152,
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
  photoContainer: {
    alignItems: 'center',
    marginTop: -115,
  },
});
