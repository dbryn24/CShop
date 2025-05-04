import React, { useState } from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import Gap from "../../components/atoms/Gap";
import Button from "../../components/atoms/Button";
import Header from "../../components/molecules/Header";
import TextInput from "../../components/molecules/TextInput";
import Logo from "../../assets/pictures/logo.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../../config/Firebase";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = async () => {
    if (!email || !password || !username) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    try {
      // Buat akun pengguna dengan Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;

      // Simpan data pengguna ke Firestore (termasuk password untuk pengujian)
      await setDoc(doc(firestore, "users", userId), {
        username,
        email,
        password, // Simpan password (hanya untuk pengujian)
      });

      Alert.alert("Success", "User registered successfully!");
      navigation.navigate("SignIn");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.contentContainer}>
      <Header title="Sign Up" />
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <TextInput
        label="Username"
        placeholder="Type your username"
        value={username}
        onChangeText={setUsername}
      />
      <Gap height={28} />
      <TextInput
        label="Email"
        placeholder="Type your email"
        value={email}
        onChangeText={setEmail}
      />
      <Gap height={28} />
      <TextInput
        label="Password"
        placeholder="Type your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Gap height={32} />
      <Button
        label="Register"
        color="#FD7014"
        textColor="#000000"
        onPress={handleSignUp}
      />
      <Gap height={32} />
      <Button
        label="Login"
        color="#50577A"
        textColor="#FFFFFF"
        onPress={() => navigation.navigate("SignIn")}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
  },
  contentContainer: {
    backgroundColor: "#222831",
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
});