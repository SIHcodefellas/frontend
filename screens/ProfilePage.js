import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import axios from "axios";
import React, { useState } from "react";
import SignupPage from "./SignupPage";

const ProfilePage = ({ navigation, route }) => {
  // const { userType } = route.params;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.1.215:3001/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
      // Navigate to the desired screen upon successful login
      navigation.navigate("Homepage"); // Change this to your target screen
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  const handleSignUpNavigation = () => {
    navigation.navigate("SignupPage", { userType: "someUserType" });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUpNavigation}
          style={[styles.button, styles.signUpButton]}
        >
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Text */}
      <Text style={styles.signUpText}>
        Don't have an account?{" "}
        <TouchableOpacity onPress={() => navigation.navigate(SignupPage)}>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </Text>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#B0CCFF",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#1A3567",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpButton: {
    backgroundColor: "white",
    borderColor: "#1A3567",
    borderWidth: 2,
  },
  signUpButtonText: {
    color: "#1A3567",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpText: {
    color: "#1A3567",
    fontSize: 14,
    marginBottom: 20,
  },
  signUpLink: {
    color: "#1A3567",
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#1A3567",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default ProfilePage;
