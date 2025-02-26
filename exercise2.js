import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

const Exercise2 = () => {
  const openURL = url => {
    Linking.openURL(url).catch(err =>
      console.error('Gagal membuka URL: ', err),
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://i1.sndcdn.com/artworks-lbEUeZGlHxX5wXIQ-b6q4Yw-t500x500.jpg',
          }}
          style={styles.profileImage}
        />
        <View style={styles.profil}>
          <Text style={styles.name}>Dave Bryan</Text>
          <Text style={styles.detail}>Umur: 20 Tahun</Text>
          <Text style={styles.detail}>Alamat: Jl. A.A. Maramis, Manado</Text>
          <Text style={styles.detail}>Email: davebryandave24@gmail.com</Text>
          <Text style={styles.detail}>No. HP: +62 123 4567 8901</Text>
        </View>
      </View>

      <View style={styles.isi}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pendidikan</Text>
          <Text style={styles.sectionPendidikan}>SMK Negeri 5 Manado</Text>
          <Text style={styles.sectionPendidikan}>
            Teknik Informatika, Universitas Klabat
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Portofolio</Text>
          <Text style={styles.sectionContent}>3D modeling</Text>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/drive-storage/AJQWtBPoTGvQWhcRbJgN0YG4rHP15FK_dUBXcvEbmHqDqdKOI9Z5an86qXsA2Dtyd780lRqiUlS6dZKyQltz1b5XqEcwyfKRGxQxG4DJR30QEcY7aQ=w1903-h957',
            }}
            style={styles.portofolioimg}
          />
          <Text style={styles.sectionContent}>Game Development</Text>
          <Image
            source={{
              uri: 'https://lh3.googleusercontent.com/drive-storage/AJQWtBOpIcZdZI5h9aqLX8KpoDUQqYBmCcvsnEPPtKtedCGP08x2QLexYptG-xiaLuKW8MhpqGmJJngHe2ovaVVAJgXDkm_SyuAAiTtdjKFQkT7tJA=w1903-h957',
            }}
            style={styles.portofolioimg}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Hubungi Saya:</Text>
          <View style={styles.socialLinks}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => openURL('https://web.facebook.com/dbryn24/')}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png',
                }}
                style={styles.sosmed}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => openURL('https://twitter.com')}>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1200px-X_logo.jpg',
                }}
                style={styles.sosmed}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => openURL('https://www.instagram.com/dbryn_24/')}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBRVddm-F0IYFawB8jjZe-28nMyFdUR5Siug&s',
                }}
                style={styles.sosmed}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222831',
  },
  profileContainer: {
    backgroundColor: '#393E46',
    paddingHorizontal: 20,
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  profil: {
    flex: 1,
  },
  isi: {
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFFFFF',
  },
  detail: {
    fontSize: 14,
    marginBottom: 3,
    color: '#EEEEEE',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  sectionPendidikan: {
    fontSize: 14,
    color: '#EEEEEE',
    textAlign: 'center',
  },
  sectionContent: {
    paddingTop: 15,
    fontSize: 14,
    color: '#EEEEEE',
    textAlign: 'center',
  },
  portofolioimg: {
    width: 350,
    height: 200,
    alignSelf: 'center',
  },
  footer: {
    marginTop: 20,
    paddingVertical: 20,
    backgroundColor: '#393E46',
    borderRadius: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  socialButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  socialButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  sosmed: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
});

export default Exercise2;
