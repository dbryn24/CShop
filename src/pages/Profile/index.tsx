import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Gap} from '../../components/atoms/';
import Fotoprofile from '../../assets/pictures/fotoprofile.png';
import IconEdit from '../../assets/pictures/Vector.svg';
import BackIcon from '../../assets/pictures/backIcon.svg';
import CameraIcon from '../../assets/pictures/camera.svg'; // Kamera ditambahkan

// Icon navigasi bawah
import HomeIcon from '../../assets/pictures/home.svg';
import SearchIcon from '../../assets/pictures/search.svg';
import CartIcon from '../../assets/pictures/cart.svg';
import HistoryIcon from '../../assets/pictures/history.svg';
import ProfileIcon from '../../assets/pictures/profile.svg';

// Icon aktif (fill)
import HomeIconFill from '../../assets/pictures/home_fill.svg';
import SearchIconFill from '../../assets/pictures/search_fill.svg';
import CartIconFill from '../../assets/pictures/cart_fill.svg';
import ProfileIconFill from '../../assets/pictures/profile_fill.svg';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <View style={styles.container}>
      {/* Tombol kembali */}
      <TouchableOpacity style={styles.backButton}>
        <BackIcon width={30} height={30} />
      </TouchableOpacity>

      {/* Konten Utama */}
      <View style={styles.contentContainer}>
        {/* Foto dan tombol kamera */}
        <View style={styles.profileSection}>
          <Image source={Fotoprofile} style={styles.profileImage} />
          <TouchableOpacity style={styles.cameraButton}>
            <CameraIcon width={24} height={24} />
          </TouchableOpacity>
        </View>

        {/* Info Akun */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoTextLarge}>AmeLike04</Text>
            <IconEdit width={20} height={20} style={{marginLeft: 10}} />
          </View>

          <Gap height={25} />

          <Text style={styles.label}>Email</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoTextLarge}>Ochibana@gmail.com</Text>
            <IconEdit width={20} height={20} style={{marginLeft: 10}} />
          </View>

          <Gap height={25} />

          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoTextLarge}>+62 - 8136 - 8307 - 342</Text>
            <IconEdit width={20} height={20} style={{marginLeft: 10}} />
          </View>

          {/* Tombol Simpan */}
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom navigation */}
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
            <HistoryIcon width={25} height={25} />
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

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    paddingTop: 20,
  },
  backButton: {
    marginLeft: 25,
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 25,
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 70,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 10,
    right: 100,
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 12,
  },
  infoSection: {
    marginTop: 40,
  },
  label: {
    color: 'orange',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222831',
    borderBottomWidth: 1,
    borderBottomColor: '#393E46',
    paddingVertical: 10,
  },
  infoTextLarge: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  saveButton: {
    backgroundColor: 'orange',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 40,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
});
