import React, {forwardRef} from 'react';
import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import SearchIcon from '../../../assets/pictures/search.svg';

const SearchInput = forwardRef(({label, placeholder}, ref) => {
  return (
    <View style={styles.header}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <Input
          ref={ref} // Hubungkan ref ke TextInput
          placeholder={placeholder}
          placeholderTextColor="#888"
          style={styles.input}
        />
        <View style={styles.iconContainer}>
          <SearchIcon width={30} height={30} />
        </View>
      </View>
    </View>
  );
});

export default SearchInput;

const styles = StyleSheet.create({
  header: {
    marginTop: -10,
  },
  label: {
    fontFamily: 'Poppins Medium',
    fontSize: 16,
    marginBottom: 6,
    color: '#FFFFFF',
  },
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    padding: 10,
    paddingRight: 40, // beri ruang untuk icon
    color: '#000000',
    backgroundColor: '#D9D9D9',
    width: 310,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    top: '40%',
    transform: [{translateY: -10}],
  },
});
