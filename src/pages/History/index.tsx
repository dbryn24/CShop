import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {firestore} from '../../config/Firebase';
import {collection, addDoc} from 'firebase/firestore';

// Gambar produk
import StikPS from '../../assets/pictures/stik.png';
import Sepatu from '../../assets/pictures/spatu.png';

// Icon navigasi
import BackIcon from '../../assets/pictures/backIcon.svg';
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
import {useNavigation} from '@react-navigation/native'; // Import useNavigation

const addToFirebase = async historyItem => {
  try {
    const docRef = await addDoc(
      collection(firestore, 'historyItems'),
      historyItem,
    );
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const handleHistorySave = async historyItem => {
  await addToFirebase(historyItem); // Add to Firebase
  console.log('History item saved:', historyItem);
};

const History = () => {
  const [activeTab, setActiveTab] = useState('History');
  const navigation = useNavigation(); // Inisialisasi navigation

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            setActiveTab('Home'); // Set activeTab ke 'Home'
            navigation.goBack(); // Kembali ke halaman sebelumnya
          }}>
          <BackIcon width={40} height={40} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>History</Text>
        <View style={{width: 30}} />
      </View>

      {/* Konten History */}
      <View style={styles.historyCard}>
        <Text style={styles.buyerName}>Rusdi</Text>

        {/* Produk 1 */}
        <View style={styles.itemRow}>
          <Image source={StikPS} style={styles.productImage} />
          <View>
            <Text style={styles.productName}>Plastation 1 controller</Text>
            <Text style={styles.productPrice}>x 1 Rp. 70.000</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Produk 2 */}
        <View style={styles.itemRow}>
          <Image source={Sepatu} style={styles.productImage} />
          <View>
            <Text style={styles.productName}>sepatu pria</Text>
            <Text style={styles.productPrice}>x 1 Rp. 690.000</Text>
          </View>
        </View>

        {/* Total */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalPrice}>Rp. 760.000</Text>
        </View>
      </View>

      {/* Bottom Navigation */}
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
          <TouchableOpacity
            onPress={() => {
              setActiveTab('Search');
              navigation.navigate('Search');
            }}>
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

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    paddingTop: 20,
    paddingBottom: 80, // Untuk memberi ruang agar tidak tertutup nav
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  historyCard: {
    marginHorizontal: 20,
    backgroundColor: '#3A4750',
    borderRadius: 10,
    padding: 15,
  },
  buyerName: {
    color: 'orange',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 6,
  },
  productName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  productPrice: {
    color: 'orange',
    fontSize: 18,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#999',
    marginVertical: 8,
  },
  totalContainer: {
    backgroundColor: '#EEEEEE',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  totalPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
