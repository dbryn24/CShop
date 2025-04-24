import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, PMButton, BackButton} from '../../components/atoms/';
import {Header, TextInput} from '../../components/molecules/';
import ProfilePict from '../../assets/pictures/fotoprofile.png';
import DANA from '../../assets/pictures/david/DANA.png';
import GOPAY from '../../assets/pictures/david/GOPAY.png';
import OVO from '../../assets/pictures/david/OVO.png';
import BNI from '../../assets/pictures/david/BNI.png';
import BRI from '../../assets/pictures/david/BRI.png';
import BackIcon from '../../assets/pictures/david/backIcon.png';
import TxtButton from '../../components/atoms/TxtButton';
import HomeIcon from '../../assets/pictures/home.svg';
import SearchIcon from '../../assets/pictures/search.svg';
import CartIcon from '../../assets/pictures/cart.svg';
import HistoryIcon from '../../assets/pictures/history.svg';
import ProfileIcon from '../../assets/pictures/profile.svg';
import HomeIconFill from '../../assets/pictures/home_fill.svg';
import SearchIconFill from '../../assets/pictures/search_fill.svg';
import CartIconFill from '../../assets/pictures/cart_fill.svg';
import ProfileIconFill from '../../assets/pictures/profile_fill.svg';
import telephoneIcon from '../../assets/pictures/telephoneIcon.png';
import emailIcon from '../../assets/pictures/emailIcon.png';

const PaymentMethod = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  return (
    <View style={styles.container}>
      <BackButton
        imageSource={BackIcon}
        width={50} // Atur lebar sesuai kebutuhan
        height={45} // Atur tinggi sesuai kebutuhan
      />
      <View style={styles.ContentContainer}>
        <View style={styles.userInfo}>
          <Image source={ProfilePict} style={styles.profileImage} />
          <View style={styles.PersonalInfo}>
          <Gap height={20} />
            <View style={styles.number}>
              <Image source={telephoneIcon} style={styles.phoneIcon} />
              <Text style={styles.emailandnumber}>+62 - 8136 - 8307 - 342</Text>
            </View>
            <View style={styles.number}>
              <Image source={emailIcon} style={styles.phoneIcon} />
              <Text style={styles.emailandnumber}>Ochibana@gmail.com</Text>
            </View>
          </View>
        </View>
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
      <Gap height={21} />
      <View style={styles.bottomNavContainer}>
        <View style={styles.navRow}>
          <TouchableOpacity onPress={() => setActiveTab('Home')}>
            {activeTab === 'Home' ? (
              <HomeIconFill width={25} height={25} />
            ) : (
              <HomeIcon width={25} height={25} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Search')}>
            {activeTab === 'Search' ? (
              <SearchIconFill width={25} height={25} />
            ) : (
              <SearchIcon width={25} height={25} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Cart')}>
            {activeTab === 'Cart' ? (
              <CartIconFill width={25} height={25} />
            ) : (
              <CartIcon width={25} height={25} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('History')}>
            {activeTab === 'History' ? (
              <HistoryIconFill width={25} height={25} />
            ) : (
              <HistoryIcon width={25} height={25} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Profile')}>
            {activeTab === 'Profile' ? (
              <ProfileIconFill width={25} height={25} />
            ) : (
              <ProfileIcon width={25} height={25} />
            )}
          </TouchableOpacity>
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
    fontWeight: 'bold'
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
    gap: 10,
  },
  Method: {
    backgroundColor: '#50577A',
    width: 360,
    height: 500,
    borderRadius: 15,
    marginHorizontal: 27,
  },
  bottomNavContainer: {
    height: 70,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: -2},
    shadowRadius: 8,
    elevation: 5,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImage: {
    marginTop: 5,
    marginLeft: 10,
    width: 110,
    height: 110,
  },
});
