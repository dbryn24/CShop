import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Button, Gap, COButton, BackButton} from '../../components/atoms';
import StickPS from '../../assets/pictures/david/StickPS.png';
import Spatu from '../../assets/pictures/david/sepatu.png';
import {Header, TextInput} from '../../components/molecules';
import ProfilePict from '../../assets/pictures/fotoprofile.png';
import DANA from '../../assets/pictures/david/DANA.png';
import GOPAY from '../../assets/pictures/david/GOPAY.png';
import OVO from '../../assets/pictures/david/OVO.png';
import BNI from '../../assets/pictures/david/BNI.png';
import BRI from '../../assets/pictures/david/BRI.png';
import BackIcon from '../../assets/pictures/david/backIcon.png';
import TrashIcon from '../../assets/pictures/trash.svg';
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
import {useRoute, useNavigation} from '@react-navigation/native';
import {firestore} from '../../config/Firebase';
import {collection, addDoc} from 'firebase/firestore';

const addToFirebase = async product => {
  try {
    const docRef = await addDoc(
      collection(firestore, 'checkoutItems'),
      product,
    );
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const handleCheckout = async product => {
  await addToFirebase(product); // Add to Firebase
  console.log('Product added to checkout:', product);
};

const CheckoutScreen = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const route = useRoute();
  const navigation = useNavigation();
  const {product} = route.params || {}; // Ambil data produk dari route params

  const [totalHarga, setTotalHarga] = useState(0);

  useEffect(() => {
    // Hitung total harga berdasarkan produk yang diterima
    if (product) {
      setTotalHarga(product.price);
    } else {
      setTotalHarga(0);
    }
  }, [product]);

  return (
    <View style={styles.container}>
      <BackButton
        imageSource={BackIcon}
        width={50} // Atur lebar sesuai kebutuhan
        height={45} // Atur tinggi sesuai kebutuhan
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.contentInside}>
            <Gap height={10} />
            <Text style={styles.rusdi}>Rusdi</Text>
            <Gap height={10} />
            {product ? (
              <View style={styles.testing}>
                <COButton
                  imageSource={product.image}
                  label={product.name}
                  textColor="#FFFFFF"
                  subText={`X1 Rp. ${product.price}`}
                />
                <TrashIcon
                  width={40}
                  height={40}
                  marginLeft={-30}
                  marginTop={40}
                />
              </View>
            ) : (
              <Text style={{color: '#fff'}}>Tidak ada produk yang dipilih</Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={styles.chatButton}
          onPress={() => navigation.navigate('ChatPage')}>
          <Text style={styles.chatButtonText}>Chat penjual</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.totalHarga}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.priceText}>Rp. {totalHarga}</Text>
      </View>
      <View style={styles.bottomNavContainer}>
        <Text style={styles.paymentText}>Payment Method</Text>
      </View>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  testing: {
    flexDirection: 'row',
  },
  contentInside: {
    flexDirection: 'column',
  },
  container: {
    backgroundColor: '#222831',
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 100, // Beri ruang untuk elemen fixed
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
  rusdi: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#FD7014',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  bottomNavContainer: {
    marginTop: 0,
    height: 70,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: -15,
  },
  paymentText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 40,
    fontWeight: 'bold',
  },
  totalText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  priceText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
  },
  totalHarga: {
    position: 'absolute',
    bottom: 90, // Menempatkan total di bagian bawah
    left: 15,
    right: 15,
  },
  chatButton: {
    backgroundColor: '#FD7014',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 20,
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});
