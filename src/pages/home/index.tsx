import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import SVG icons for bottom navigation
import HomeIcon from '../../assets/pictures/home.svg';
import SearchIcon from '../../assets/pictures/search.svg';
import CartIcon from '../../assets/pictures/cart.svg';
import HistoryIcon from '../../assets/pictures/history.svg';
import ProfileIcon from '../../assets/pictures/profile.svg';
import products from '../../assets/Products/index';
import HomeIconFill from '../../assets/pictures/home_fill.svg';
import SearchIconFill from '../../assets/pictures/search_fill.svg';
import CartIconFill from '../../assets/pictures/cart_fill.svg';
import ProfileIconFill from '../../assets/pictures/profile_fill.svg';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#A5A5A5"
        />
        <Icon
          name="magnify"
          size={24}
          color="#A5A5A5"
          style={styles.searchIcon}
        />
      </View>
      <ScrollView>
        {/* Promo Banner */}
        <Image
          source={require('../../assets/pictures/carousel1.png')}
          style={styles.promoBanner}
        />

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <View style={styles.category}>
            <Icon name="food" size={54} color="#FFFFFF" />
            <Text style={styles.categoryText}>Food</Text>
          </View>
          <View style={styles.category}>
            <Icon name="laptop" size={54} color="#FFFFFF" />
            <Text style={styles.categoryText}>Electronics</Text>
          </View>
          <View style={styles.category}>
            <Icon name="tshirt-crew" size={54} color="#FFFFFF" />
            <Text style={styles.categoryText}>Clothings</Text>
          </View>
          <View style={styles.category}>
            <Icon name="headphones" size={54} color="#FFFFFF" />
            <Text style={styles.categoryText}>Accessories</Text>
          </View>
        </View>

        {/* Product List */}
        <View style={styles.productList}>
          {products.map(product => (
            <View key={product.id} style={styles.productCard}>
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    paddingHorizontal: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginVertical: 16,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 8,
  },
  promoBanner: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  category: {
    alignItems: 'center',
  },
  categoryText: {
    color: '#FFFFFF',
    marginTop: 8,
    fontSize: 12,
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#393E46',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 4,
  },
  productPrice: {
    color: '#FD7014',
    fontSize: 14,
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
