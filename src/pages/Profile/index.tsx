import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import Gap from '../../components/atoms/Gap';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {auth, firestore} from '../../config/Firebase';
import {doc, getDoc, updateDoc} from 'firebase/firestore';
import RNFS from 'react-native-fs'; // Untuk konversi ke Base64
import Fotoprofile from '../../assets/pictures/fotoprofile.png';
import IconEdit from '../../assets/pictures/Vector.svg';
import BackIcon from '../../assets/pictures/backIcon.svg';
import CameraIcon from '../../assets/pictures/camera.svg';
import {useFocusEffect} from '@react-navigation/native';

const Profile = ({navigation}) => {
  const [photoUrl, setPhotoUrl] = useState(null); // URL foto default
  const [username, setUsername] = useState('Unknown');
  const [email, setEmail] = useState('No Email');
  const [phoneNumber, setPhoneNumber] = useState(''); // Kosong saat halaman dimuat
  const [isEditing, setIsEditing] = useState({
    username: false,
    email: false,
    phoneNumber: false,
  });

  // Fungsi untuk mengambil data pengguna dari Firebase Authentication dan Firestore
  const fetchUserData = async () => {
    try {
      const user = auth.currentUser; // Ambil pengguna yang sedang login
      if (user) {
        setEmail(user.email || 'No Email'); // Ambil email dari Firebase Authentication

        // Ambil username, foto, dan phone number dari Firestore
        const userDocRef = doc(firestore, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUsername(userData.username || 'Unknown'); // Ambil username dari Firestore
          setPhoneNumber(userData.phoneNumber || ''); // Ambil phone number dari Firestore
          setPhotoUrl(userData.photoBase64 ? `data:image/jpeg;base64,${userData.photoBase64}` : null); // Ambil foto dari Firestore
        } else {
          console.log('No such document!');
        }
      } else {
        Alert.alert('Error', 'No user is currently logged in');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      Alert.alert('Error', 'Failed to fetch user data');
    }
  };

  // Panggil fetchUserData setiap kali halaman profil menjadi aktif
  useFocusEffect(
    React.useCallback(() => {
      fetchUserData();
    }, [])
  );

  // Fungsi untuk mengonversi gambar ke Base64
  const convertToBase64 = async uri => {
    try {
      const base64String = await RNFS.readFile(uri, 'base64');
      return base64String;
    } catch (error) {
      console.error('Error converting to Base64:', error);
      throw error;
    }
  };

  // Fungsi untuk menyimpan foto ke Firestore
  const savePhotoToFirestore = async base64String => {
    try {
      const user = auth.currentUser;
      if (!user) {
        Alert.alert('Error', 'No user is currently logged in');
        return;
      }

      const userDocRef = doc(firestore, 'users', user.uid);
      await updateDoc(userDocRef, {photoBase64: base64String});
      console.log('Photo saved to Firestore');
    } catch (error) {
      console.error('Error saving photo to Firestore:', error);
      Alert.alert('Error', 'Failed to save photo');
    }
  };

  // Fungsi untuk memilih foto
  const handleChoosePhoto = () => {
    Alert.alert('Pilih Gambar', 'Ambil gambar dari?', [
      {
        text: 'Kamera',
        onPress: () => {
          launchCamera({mediaType: 'photo'}, async res => {
            if (!res.didCancel && !res.errorCode) {
              const uri = res.assets[0].uri;

              try {
                const base64String = await convertToBase64(uri);
                setPhotoUrl(`data:image/jpeg;base64,${base64String}`); // Perbarui foto di UI
                await savePhotoToFirestore(base64String);
                Alert.alert('Success', 'Photo uploaded successfully!');
              } catch (error) {
                Alert.alert('Error', 'Failed to upload photo');
              }
            }
          });
        },
      },
      {
        text: 'Galeri',
        onPress: () => {
          launchImageLibrary({mediaType: 'photo'}, async res => {
            if (!res.didCancel && !res.errorCode) {
              const uri = res.assets[0].uri;

              try {
                const base64String = await convertToBase64(uri);
                setPhotoUrl(`data:image/jpeg;base64,${base64String}`); // Perbarui foto di UI
                await savePhotoToFirestore(base64String);
                Alert.alert('Success', 'Photo uploaded successfully!');
              } catch (error) {
                Alert.alert('Error', 'Failed to upload photo');
              }
            }
          });
        },
      },
      {text: 'Batal', style: 'cancel'},
    ]);
  };

  // Fungsi untuk menyimpan perubahan ke Firestore
  const handleSaveChanges = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        Alert.alert('Error', 'No user is currently logged in');
        return;
      }

      const userDocRef = doc(firestore, 'users', user.uid);
      await updateDoc(userDocRef, {
        username,
        phoneNumber,
      });
      Alert.alert('Success', 'Profile updated successfully!');
      setIsEditing({username: false, email: false, phoneNumber: false});
    } catch (error) {
      console.error('Error saving changes:', error);
      Alert.alert('Error', 'Failed to save changes');
    }
  };

  return (
    <View style={styles.container}>
      {/* Tombol kembali */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack(); // Kembali ke halaman sebelumnya
        }}>
        <BackIcon width={30} height={30} />
      </TouchableOpacity>

      {/* Konten Utama */}
      <View style={styles.contentContainer}>
        {/* Foto dan tombol kamera */}
        <View style={styles.profileSection}>
          <Image
            source={photoUrl ? {uri: photoUrl} : Fotoprofile} // Tampilkan foto lokal atau default
            style={styles.profileImage}
          />
          <TouchableOpacity
            style={styles.cameraButton}
            onPress={handleChoosePhoto}>
            <CameraIcon width={24} height={24} />
          </TouchableOpacity>
        </View>

        {/* Info Akun */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.infoRow}>
            {isEditing.username ? (
              <TextInput
                style={styles.infoTextInput}
                value={username}
                onChangeText={setUsername}
              />
            ) : (
              <Text style={styles.infoTextLarge}>{username}</Text>
            )}
            <TouchableOpacity
              onPress={() =>
                setIsEditing(prev => ({...prev, username: !prev.username}))
              }>
              <IconEdit width={20} height={20} style={{marginLeft: 10}} />
            </TouchableOpacity>
          </View>

          <Gap height={25} />

          <Text style={styles.label}>Email</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoTextLarge}>{email}</Text>
          </View>

          <Gap height={25} />

          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.infoRow}>
            {isEditing.phoneNumber ? (
              <TextInput
                style={styles.infoTextInput}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
              />
            ) : (
              <Text style={styles.infoTextLarge}>{phoneNumber}</Text>
            )}
            <TouchableOpacity
              onPress={() =>
                setIsEditing(prev => ({...prev, phoneNumber: !prev.phoneNumber}))
              }>
              <IconEdit width={20} height={20} style={{marginLeft: 10}} />
            </TouchableOpacity>
          </View>

          {/* Tombol Simpan */}
          <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
            <Text style={styles.saveButtonText}>Simpan</Text>
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
    borderRadius: 90,
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
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
  },
  infoTextInput: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Medium',
    borderBottomWidth: 1,
    borderBottomColor: '#FD7014',
    flex: 1,
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
});