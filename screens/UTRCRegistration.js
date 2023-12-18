import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const UTRCRegistration = () => {
  const [courtId, setCourtId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("");

  const navigation = useNavigation();
  const handleSignUp = () => {
    // Check if the password matches the confirmed password
    if (password !== confirmPassword) {
      Alert.alert("Error", "Password and Confirm Password do not match");
      return;
    }

    axios
      .post("http://192.168.143.88:3001/utrcsProfile", {
        courtId: courtId,
        name: name,
        password: password,
        confirmPassword: confirmPassword,
        email: email,
        contactNumber: contactNumber,
        location: location,
      })
      .then(() => alert("Successful signup!"))
      .catch((err) => console.log("Error", err));

    // Implement your sign-up logic here
    // Validate inputs, make API calls, etc.
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>UTRC Registration</Text>

        {/* Court ID Input */}
        <TextInput
          style={styles.input}
          placeholder="Court ID"
          value={courtId}
          onChangeText={(text) => setCourtId(text)}
        />

        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        {/* Password Input
        <TextInput
          style={styles.input}
          placeholder="Set Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        {/* Confirm Password Input */}
        {/* <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        /> */}

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email (optional)"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        {/* Contact Number Input */}
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          value={contactNumber}
          onChangeText={(text) => setContactNumber(text)}
        />

        {/* Location Input */}
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.alreadytext}>
          Already have an account?
          {/* Add navigation to the login screen */}
          {/* <TouchableOpacity onPress={handleLoginNavigation}>
            <Text style={styles.login}> Log In</Text>
          </TouchableOpacity> */}
        </Text>
      </View>
    </ScrollView>
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
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1A3567",
    marginTop: 50,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#1A3567",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  alreadytext: {
    color: "#1A3567",
    marginBottom: 40,
  },
  login: {
    color: "#1A3567",
  },
});

export default UTRCRegistration;
