import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React, {useState, useRef} from 'react';
import {Gap, BackButton, COButton} from '../../components/atoms/';
import SearchInput from '../../components/molecules/SearchInput';
import BackIcon from '../../assets/pictures/david/backIcon.png';
import HomeIcon from '../../assets/pictures/home.svg';
import SearchIcon from '../../assets/pictures/search.svg';
import CartIcon from '../../assets/pictures/cart.svg';
import HistoryIcon from '../../assets/pictures/history.svg';
import ProfileIcon from '../../assets/pictures/profile.svg';
import HomeIconFill from '../../assets/pictures/home_fill.svg';
import SearchIconFill from '../../assets/pictures/search_fill.svg';
import CartIconFill from '../../assets/pictures/cart_fill.svg';
import ProfileIconFill from '../../assets/pictures/profile_fill.svg';
import TrashIcon from '../../assets/pictures/trash.svg';
import StickPS from '../../assets/pictures/david/StickPS.png';
import Spatu from '../../assets/pictures/david/sepatu.png';
import HDMI from '../../assets/pictures/david/hdmi.png';
import {useNavigation} from '@react-navigation/native';

const ChartPage = () => {
  const [activeTab, setActiveTab] = useState('Cart');
  const searchInputRef = useRef(null);
  const navigation = useNavigation();

  const handleSearchFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleProductPress = product => {
    navigation.navigate('CheckoutScreen', {product});
  };

  const handleDeleteItem = productId => {
    console.log(`Item with ID ${productId} deleted`);
  };

  return (
    <View style={styles.container}>
      <Gap height={10} />
      <View style={styles.header}>
        <BackButton imageSource={BackIcon} width={50} height={45} />
        <SearchInput ref={searchInputRef} placeholder="Search" />
      </View>

      {/* RUSDI SECTION */}
      <View style={styles.contentContainer}>
        <View style={[styles.contentInside, {flex: 1}]}>
          <Gap height={10} />
          <Text style={styles.rusdi}>Rusdi</Text>
          <Gap height={10} />
          <TouchableOpacity
            style={styles.testing}
            onPress={() =>
              handleProductPress({
                name: 'plastation 1 controller',
                price: 70000,
                image: StickPS,
              })
            }>
            <COButton
              imageSource={StickPS}
              label="plastation 1 controller"
              textColor="#FFFFFF"
              subText="X1 Rp. 70.000"
            />
            <TouchableOpacity
              style={styles.testing}
              onPress={() => handleDeleteItem('id-stickps')}>
              <TrashIcon
                width={40}
                height={40}
                marginLeft={-30}
                marginTop={40}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.testing}
            onPress={() =>
              handleProductPress({
                name: 'sepatu pria',
                price: 690000,
                image: Spatu,
              })
            }>
            <Gap height={20} />
            <COButton
              imageSource={Spatu}
              label="sepatu pria"
              textColor="#FFFFFF"
              subText="X1 Rp. 690.000"
            />
            <TouchableOpacity
              style={styles.testing}
              onPress={() => handleDeleteItem('id-spatu')}>
              <TrashIcon
                width={40}
                height={40}
                marginLeft={65}
                marginTop={40}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>

      {/* FUAD SECTION */}
      <View style={styles.contentContainer2}>
        <View style={[styles.contentInside, {flex: 1}]}>
          <Gap height={10} />
          <Text style={styles.rusdi}>Fuad</Text>
          <Gap height={10} />
          <TouchableOpacity
            style={styles.testing}
            onPress={() =>
              handleProductPress({
                name: 'Connector HDMI',
                price: 70000,
                image: HDMI,
              })
            }>
            <COButton
              imageSource={HDMI}
              label="Connector HDMI"
              textColor="#FFFFFF"
              subText="X1 Rp. 70.000"
            />
            <TouchableOpacity
              style={styles.testing}
              onPress={() => handleDeleteItem('id-hdmi')}>
              <TrashIcon
                width={40}
                height={40}
                marginLeft={15}
                marginTop={40}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>

      {/* BOTTOM NAV */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.navRow}>
          <TouchableOpacity
            onPress={() => {
              setActiveTab('Home');
              navigation.navigate('Home');
            }}>
            {activeTab === 'Home' ? (
              <HomeIconFill width={25} height={25} />
            ) : (
              <HomeIcon width={25} height={25} />
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSearchFocus}>
            {activeTab === 'Search' ? (
              <SearchIconFill width={25} height={25} />
            ) : (
              <SearchIcon width={25} height={25} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setActiveTab('Cart');
              navigation.navigate('CartPage');
            }}>
            {activeTab === 'Cart' ? (
              <CartIconFill width={25} height={25} />
            ) : (
              <CartIcon width={25} height={25} />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setActiveTab('History');
              navigation.navigate('History');
            }}>
            <HistoryIcon width={25} height={25} />
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
    paddingBottom: 70, // To avoid bottom nav overlap
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  contentContainer: {
    backgroundColor: '#50577A',
    marginTop: 20,
    width: 360,
    height: 350,
    borderRadius: 10,
    marginHorizontal: 25,
    padding: 10,
  },
  contentContainer2: {
    backgroundColor: '#50577A',
    marginTop: 20,
    width: 360,
    height: 200,
    borderRadius: 10,
    marginHorizontal: 25,
    padding: 10,
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
    alignItems: 'center',
    marginVertical: 5,
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
    position: 'absolute', // Fixed positioning
    bottom: 0, // Always at the bottom
    left: 0,
    right: 0,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
