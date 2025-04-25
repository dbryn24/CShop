import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';

const Button = ({ label, color = '#02CF8E', textColor = '#020202', imageSource, subText }) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.5}>
      <View style={styles.topRow}>
        <Image 
          source={imageSource} 
          style={styles.image} 
          resizeMode="contain"
        />
        <Text style={styles.label(textColor)}>{label}</Text>
      </View>

      {subText && (
        <View style={styles.bottomRow}>
          <Text style={styles.subLabel}>{subText}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingBottom: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    borderBottomColor: '#FD7014', // Warna border bawah
    borderBottomWidth: 2, // Ketebalan border bawah
    borderTopWidth: 0, // Menghilangkan border atas
    borderLeftWidth: 0, // Menghilangkan border kiri
    borderRightWidth: 0, // Menghilangkan border kanan
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  bottomRow: {
    marginLeft: 5, // biar sejajar dengan gambar
    marginTop: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  label: (textColor) => ({
    marginTop: -45,
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: textColor,
    flexShrink: 1, // biar teks putih gak mepet keluar
  }),
  subLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#FD7014',
    fontWeight: 'bold',
  },
});
