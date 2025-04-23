import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const BackButton = ({ imageSource, width = 40, height = 40 }) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
      {imageSource && (
        <Image 
          source={imageSource} 
          style={[styles.image, { width, height }]} // Mengatur lebar dan tinggi dari props
          resizeMode="contain" // Mengatur mode tampilan gambar
        />
      )}
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    marginLeft: 27,
    marginTop: 20,
    margin: 10, // Menambahkan padding untuk area sentuh
  },
  image: {
    // Anda bisa menambahkan gaya tambahan untuk gambar di sini jika diperlukan
  },
});