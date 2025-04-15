import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const AddPhoto = () => {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyaSM-BloRCSbngELWCA-Oua3GvSRX0s7zmQ&s',
          }}
          style={styles.avatar}
        />
      </View>
    </View>
  );
};

export default AddPhoto;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 130,
    height: 130,
  },
  border: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
    borderRadius: 65,
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1ABC9C',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
