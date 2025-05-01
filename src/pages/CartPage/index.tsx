import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  Gap,
  PMButton,
  BackButton,
  COButton,
} from '../../components/atoms/';
import {Header, TextInput, SearchInput} from '../../components/molecules/';
import ProfilePict from '../../assets/pictures/fotoprofile.png';
import DANA from '../../assets/pictures/david/DANA.png';
import GOPAY from '../../assets/pictures/david/GOPAY.png';
import OVO from '../../assets/pictures/david/OVO.png';
import BNI from '../../assets/pictures/david/BNI.png';
import BRI from '../../assets/pictures/david/BRI.png';
import BackIcon from '../../assets/pictures/david/backIcon.png';
import HDMI from '../../assets/pictures/david/hdmi.png';
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
import TrashIcon from '../../assets/pictures/trash.svg';
import StickPS from '../../assets/pictures/david/StickPS.png';
import Spatu from '../../assets/pictures/david/sepatu.png';
const ChartPage = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Profile');
  return (
    <View style={styles.container}>
      <Gap height={10} />
      <View style={styles.header}>
        <BackButton
          imageSource={BackIcon}
          width={50} // Atur lebar sesuai kebutuhan
          height={45} // Atur tinggi sesuai kebutuhan
        />
        <SearchInput placeholder="Search" />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.contentInside}>
          <Gap height={10} />
          <Text style={styles.rusdi}>Rusdi</Text>
          <Gap height={10} />
          <View style={styles.testing}>
            <COButton
              imageSource={StickPS}
              label="plastation 1 controller"
              textColor="#FFFFFF"
              subText="X1 Rp. 70.000"
            />
            <TrashIcon width={40} height={40} marginLeft={-30} marginTop={40} />
          </View>
          <View style={styles.testing}>
            <Gap height={20} />
            <COButton
              imageSource={Spatu}
              label="sepatu pria"
              textColor="#FFFFFF"
              subText="X1 Rp. 690.000"
            />
            <TrashIcon width={40} height={40} marginLeft={65} marginTop={40} />
          </View>
        </View>
      </View>
      <Gap height={15} />
      <View style={styles.contentContainer2}>
        <View style={styles.contentInside}>
          <Gap height={10} />
          <Text style={styles.rusdi}>Fuad</Text>
          <Gap height={10} />
          <View style={styles.testing}>
            <COButton
              imageSource={HDMI}
              label="Connector HDMI"
              textColor="#FFFFFF"
              subText="X1 Rp. 70.000"
            />
            <TrashIcon width={40} height={40} marginLeft={15} marginTop={40} />
          </View>
        </View>
      </View>
      <Gap height={111} />
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
          <TouchableOpacity onPress={() => {setActiveTab('Cart'); navigation.navigate('CartPage');}}>
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
          <TouchableOpacity
            onPress={() => {
              setActiveTab('Profile');
              navigation.navigate('Profile');
            }}>
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

export default ChartPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222831',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
  },
  contentContainer: {
    backgroundColor: '#50577A',
    marginTop: 20,
    width: 360,
    height: 350,
    borderRadius: 10,
    marginHorizontal: 25,
    flexDirection: 'row',
    gap: 10,
  },
  contentContainer2: {
    backgroundColor: '#50577A',
    marginTop: 20,
    width: 360,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 25,
    flexDirection: 'row',
    gap: 10,
  },
  contentInside: {
    flexDirection: 'column',
  },
  rusdi: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#FD7014',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  testing: {
    flexDirection: 'row',
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
    paddingTop: -15,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
