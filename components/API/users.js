import axios from 'axios';

export const getUsers = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users?per_page=12');
    return response.data.data; // Mengembalikan daftar user
  } catch (error) {
    console.error('Error fetching users:', error);
    return []; // Mengembalikan array kosong jika ada error
  }
};
