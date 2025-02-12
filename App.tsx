import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View>
      <View style={style.container}>
        <Text style={style.title}>Basic React Native</Text>
      </View>
      <Text style={style.subTitle}>Image from URL</Text>
      <Image
        style={style.img1}
        source={{ uri: 'https://i1.sndcdn.com/artworks-lbEUeZGlHxX5wXIQ-b6q4Yw-t500x500.jpg' }}
      />
      <Text style={style.subTitle}>Image from Local Directory</Text>
      <Image
        style={style.img2}
        source={require('./assets/image2.jpg')}
      />
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 10,
    margin: 30,
    borderRadius: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: 'yellow',
    textAlign: 'center',
    margin: 50,
  },
  subTitle: {
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  img1: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  img2: {
    height: 200,
    width: 350,
    alignSelf: 'center',
  },
});
