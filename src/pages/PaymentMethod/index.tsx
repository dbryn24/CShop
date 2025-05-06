import {StyleSheet, Text, View, TouchableOpacity, Image, Alert, Linking} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, Gap, PMButton, BackButton} from '../../components/atoms/';
import {firestore, auth} from '../../config/Firebase';
import {doc, getDoc} from 'firebase/firestore';
import ProfilePict from '../../assets/pictures/fotoprofile.png';
import DANA from '../../assets/pictures/david/DANA.png';
import GOPAY from '../../assets/pictures/david/GOPAY.png';
import OVO from '../../assets/pictures/david/OVO.png';
import BNI from '../../assets/pictures/david/BNI.png';
import BRI from '../../assets/pictures/david/BRI.png';
import BackIcon from '../../assets/pictures/david/backIcon.png';
import telephoneIcon from '../../assets/pictures/telephoneIcon.png';
import emailIcon from '../../assets/pictures/emailIcon.png';

const PaymentMethod = () => {
  const [profileData, setProfileData] = useState({
    email: '',
    phoneNumber: '',
    photoUrl: null,
  });

  // Ambil data profil dari Firestore
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          Alert.alert('Error', 'No user is currently logged in');
          return;
        }

        const userDocRef = doc(firestore, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setProfileData({
            email: userData.email || '',
            phoneNumber: userData.phoneNumber || '',
            photoUrl: userData.photoBase64
              ? `data:image/jpeg;base64,${userData.photoBase64}`
              : null,
          });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  // Fungsi untuk menangani pemilihan metode pembayaran
  const handlePaymentMethodSelect = async method => {
    try {
      if (method === 'DANA') {
        const danaUrl = 'dana://scan'; // URL scheme untuk aplikasi DANA
        const supported = await Linking.canOpenURL(danaUrl);

        if (supported) {
          await Linking.openURL(danaUrl); // Buka aplikasi DANA
        } else {
          Alert.alert('Error', 'Aplikasi DANA tidak ditemukan di perangkat Anda.');
        }
      } else {
        console.log('Payment method selected:', method);
        Alert.alert('Info', `Metode pembayaran ${method} dipilih.`);
        // Tambahkan logika untuk metode pembayaran lainnya jika diperlukan
      }
    } catch (error) {
      console.error('Error opening payment method:', error);
      Alert.alert('Error', 'Gagal membuka metode pembayaran.');
    }
  };

  return (
    <View style={styles.container}>
      <BackButton
        imageSource={BackIcon}
        width={50}
        height={45}
      />
      <View style={styles.ContentContainer}>
        <View style={styles.userInfo}>
          <Image
            source={
              profileData.photoUrl
                ? {uri: profileData.photoUrl}
                : ProfilePict
            }
            style={styles.profileImage}
          />
          <View style={styles.PersonalInfo}>
            <Gap height={25} />
            <View style={styles.number}>
              <Image source={telephoneIcon} style={styles.phoneIcon} />
              <Text style={styles.emailandnumber}>
                {profileData.phoneNumber || 'No Phone Number'}
              </Text>
            </View>
            <View style={styles.number}>
              <Image source={emailIcon} style={styles.phoneIcon} />
              <Text style={styles.emailandnumber}>
                {profileData.email || 'No Email'}
              </Text>
            </View>
          </View>
        </View>
        <Gap height={50} />
        <View style={styles.Method}>
          <Gap height={30} />
          <PMButton
            imageSource={DANA}
            label="DANA"
            textColor="#FFFFFF"
            onPress={() => handlePaymentMethodSelect('DANA')}
          />
          <Gap height={20} />
          <PMButton
            imageSource={GOPAY}
            label="Gopay"
            textColor="#FFFFFF"
            onPress={() => handlePaymentMethodSelect('Gopay')}
          />
          <Gap height={20} />
          <PMButton
            imageSource={OVO}
            label="OVO"
            textColor="#FFFFFF"
            onPress={() => handlePaymentMethodSelect('OVO')}
          />
          <Gap height={20} />
          <PMButton
            imageSource={BNI}
            label="Bank BNI"
            textColor="#FFFFFF"
            onPress={() => handlePaymentMethodSelect('Bank BNI')}
          />
          <Gap height={20} />
          <PMButton
            imageSource={BRI}
            label="Bank BRI"
            textColor="#FFFFFF"
            onPress={() => handlePaymentMethodSelect('Bank BRI')}
          />
        </View>
      </View>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  emailandnumber: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  PersonalInfo: {
    gap: 10,
  },
  number: {
    flexDirection: 'row',
    gap: 10,
  },
  phoneIcon: {
    width: 20,
    height: 20,
  },
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
    flexDirection: 'row',
    gap: 4,
  },
  Method: {
    backgroundColor: '#50577A',
    width: 360,
    height: 500,
    borderRadius: 15,
    marginHorizontal: 27,
  },
  profileImage: {
    marginTop: 5,
    marginLeft: 10,
    width: 110,
    height: 110,
    borderRadius: 55,
  },
});