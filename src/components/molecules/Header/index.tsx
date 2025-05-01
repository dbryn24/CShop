import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({title, onBack, leftIcon, color = '#FD7014'}) => {
  return (
    <View style={styles.container}>
      {/* Optional back button */}
      {/* {onBack && (
        <TouchableOpacity onPress={onBack} style={styles.iconContainer}>
          <Icon name={leftIcon || 'arrow-back'} size={24} color={color} />
        </TouchableOpacity>
      )} */}
      <Text style={[styles.title, {color}]}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
  },
});
