import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const Button = ({ label, color = '#02CF8E', textColor = '#020202', imageSource}) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
      {imageSource && (
        <Image 
          source={imageSource} 
          style={styles.image} 
          resizeMode="contain" // Mengatur mode tampilan gambar
        />
      )}
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderBottomColor: '#A1A1A1', // Warna border bawah
    borderBottomWidth: 2, // Ketebalan border bawah
    borderTopWidth: 0, // Menghilangkan border atas
    borderLeftWidth: 0, // Menghilangkan border kiri
    borderRightWidth: 0, // Menghilangkan border kanan
    marginHorizontal: 20,
    alignItems: 'center', 
    flexDirection: 'row',
    gap: 50,// Menyelaraskan konten di tengah
  },
  image: {
    width: 40, // Atur lebar gambar sesuai kebutuhan
    height: 40, // Atur tinggi gambar sesuai kebutuhan
    marginBottom: 5, // Jarak antara gambar dan teks
  },
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 23,
    color: textColor,
    fontWeight: 'bold',
  }),
});