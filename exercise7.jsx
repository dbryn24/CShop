import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getUsers} from './components/API/users';

const RestAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers();
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.userContainer}>
            <Image source={{uri: item.avatar}} style={styles.avatar} />
            <View>
              <Text style={styles.name}>
                <Text style={styles.firstName}>{item.first_name} </Text>
                <Text style={styles.lastName}>{item.last_name}</Text>
              </Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default RestAPI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
  },
  firstName: {
    fontWeight: 'bold', // Nama depan bold
  },
  lastName: {
    fontWeight: 'normal', // Nama belakang normal
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
});
