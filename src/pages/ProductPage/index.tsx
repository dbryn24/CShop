import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  Gap,
  PMButton,
  BackButton,
  COButton,
} from '../../components/atoms/';
import {Header, SearchInput} from '../../components/molecules/';
import ProfilePict from '../../assets/pictures/fotoprofile.png';
import DANA from '../../assets/pictures/david/DANA.png';
import GOPAY from '../../assets/pictures/david/GOPAY.png';
import OVO from '../../assets/pictures/david/OVO.png';
import BNI from '../../assets/pictures/david/BNI.png';
import BRI from '../../assets/pictures/david/BRI.png';
import BackIcon from '../../assets/pictures/david/backIcon.png';
import KaosHitam from '../../assets/pictures/david/KaosDesign.png';
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
import {useNavigation} from '@react-navigation/native'; // Import useNavigation
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState('Home'); // Inisialisasi activeTab
  const navigation = useNavigation(); // Inisialisasi navigation
  const searchInputRef = useRef(null); // Inisialisasi ref

  const handleSearchPress = () => {
    setActiveTab('Search');
    searchInputRef.current?.focus(); // Fokuskan ke search bar
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <BackButton
          imageSource={BackIcon}
          width={50}
          height={45}
        />
        <View style={styles.searchContainer}>
          <TextInput
            ref={searchInputRef} // Hubungkan ref ke TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#A5A5A5"
          />
          <TouchableOpacity onPress={handleSearchPress}>
            <Icon
              name="magnify"
              size={24}
              color="#A5A5A5"
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Gap height={20} />

      {/* Konten scrollable */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.GambarContainer}>
          <Image source={KaosHitam} style={styles.gambarKaos} />
        </View>
        <Gap height={15} />
        <View style={styles.containerTulisan}>
          <Text style={styles.tulisanProduk}>Kaos Hitam Legam</Text>
          <Text style={styles.tulisanHarga}>Rp. 50.000</Text>
          <View style={styles.tulisanContainer}></View>
          <Gap height={35} />
          <Text style={styles.tulisanHarga}>
            Kaos Hitam lengan pendek dengan ukuran XL, bisa di pria dan di
            wanita
          </Text>
          <Text style={styles.tulisanHarga}>
            Kaos Hitam lengan pendek dengan ukuran XL, bisa di pria dan di
            wanita
          </Text>
          <Text style={styles.tulisanHarga}>
            Kaos Hitam lengan pendek dengan ukuran XL, bisa di pria dan di
            wanita
          </Text>
          <Text style={styles.tulisanHarga}>
            Kaos Hitam lengan pendek dengan ukuran XL, bisa di pria dan di
            wanita
          </Text>
          <Text style={styles.tulisanHarga}>
            Kaos Hitam lengan pendek dengan ukuran XL, bisa di pria dan di
            wanita
          </Text>
        </View>
        <Gap height={20} />
        {/* Tambahkan konten lainnya di sini */}
      </ScrollView>

      {/* Bottom Navbar */}
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
          <TouchableOpacity onPress={handleSearchPress}>
            {activeTab === 'Search' ? (
              <SearchIconFill width={25} height={25} />
            ) : (
              <SearchIcon width={25} height={25} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActiveTab('CartPage');
              navigation.navigate('CartPage');
            }}>
            {activeTab === 'CartPage' ? (
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

export default ProductPage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222831',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContent: {
    paddingBottom: 100, // Tambahan agar tidak ketutupan navbar
  },
  GambarContainer: {
    width: '100%',
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gambarKaos: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  tulisanProduk: {
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerTulisan: {
    marginLeft: 30,
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
    position: 'absolute', // <---- Fix: navbar diposisikan absolute
    bottom: 0,
    left: 0,
    right: 0,
  },
  navRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tulisanHarga: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 12,
    flex: 1,
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 8,
  },
});