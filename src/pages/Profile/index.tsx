import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components/atoms/';
import {Header, TextInput} from '../../components/molecules/';
import TxtButton from '../../components/atoms/TxtButton';

const Profile = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#222831'}}>
      <View style={styles.ContentContainer}></View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  ContentContainer: {
    flex: 1,
    padding: 20,
  },
});
