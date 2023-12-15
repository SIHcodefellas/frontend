// Import necessary React and React Native components
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
// import { auth } from "../firebase.js";
import axios from "axios";

const SignupPage = ({ route }) => {
  // Extracting user type from route.params
  //     const { userType } = route.params;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation(); // Use the useNavigation hook here

  // Function to handle signup
  const handleSignup = async () => {
    try {
      // Send a POST request to signup
      const response = await axios.post("http://192.168.215:3001/signup", {
        email,
        password,
      });
      console.log("Signup successful:", response.data);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleSignUpNavigation = () => {
    navigation.navigate("StartingPage");
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
        <TouchableOpacity onPress={handleSignup} style={styles.button}>
          <Text style={styles.buttonText}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUpNavigation}
          style={[styles.button, styles.signUpButton]}
        >
          <Text style={styles.signUpButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Text */}
      <Text style={styles.signUpText}>
        Don't have an account?{" "}
        <TouchableOpacity onPress={handleSignUpNavigation}>
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

// Styles
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
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A3567",
    marginBottom: 20,
    textAlign: "center",
    padding: 10,
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

export default SignupPage;
