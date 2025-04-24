import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Button, Gap, PMButton, BackButton} from '../../components/atoms/';
import {Header, TextInput} from '../../components/molecules/';
import DANA from '../../assets/pictures/david/DANA.png';
import GOPAY from '../../assets/pictures/david/GOPAY.png';
import OVO from '../../assets/pictures/david/OVO.png';
import BNI from '../../assets/pictures/david/BNI.png';
import BRI from '../../assets/pictures/david/BRI.png';
import BackIcon from '../../assets/pictures/david/backIcon.png';
import TxtButton from '../../components/atoms/TxtButton';

const PaymentMethod = () => {
  return (
    <View style={styles.container}>
      <BackButton
        imageSource={BackIcon}
        width={50} // Atur lebar sesuai kebutuhan
        height={45} // Atur tinggi sesuai kebutuhan
      />
      <View style={styles.ContentContainer}>
        <View style={styles.userInfo}></View>
        <Gap height={50} />
        <View style={styles.Method}>
          <Gap height={30} />
          <PMButton imageSource={DANA} label="DANA" textColor="#FFFFFF" />
          <Gap height={20} />
          <PMButton imageSource={GOPAY} label="Gopay" textColor="#FFFFFF" />
          <Gap height={20} />
          <PMButton imageSource={OVO} label="OVO" textColor="#FFFFFF" />
          <Gap height={20} />
          <PMButton imageSource={BNI} label="Bank BNI" textColor="#FFFFFF" />
          <Gap height={20} />
          <PMButton imageSource={BRI} label="Bank BRI" textColor="#FFFFFF" />
        </View>
      </View>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222831',
    flex: 1,
  },
  userInfo: {
    backgroundColor: '#50577A',
    marginTop: 20,
    width: 360,
    height: 130,
    borderRadius: 15,
    marginHorizontal: 27,
  },
  Method: {
    backgroundColor: '#50577A',
    width: 360,
    height: 500,
    borderRadius: 15,
    marginHorizontal: 27,
  },
});
