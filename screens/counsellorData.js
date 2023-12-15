import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const counsellorData = () => {
  const [ncsId, setNcsId] = useState("");
  const [experience, setExperience] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const [location, setLocation] = useState("");

  const handleSignUp = () => {
    // Check if the password matches the confirmed password
    if (password !== confirmPassword) {
      Alert.alert("Error", "Password and Confirm Password do not match");
      return;
    }
    axios
      .get("http://192.168.1.215:3001/counselorProfile")
      .then((res) => console.log(res))
      .catch((err) => console.log("Error", err));

    axios
      .post("http://192.168.1.215:3001/counselorProfile", {
        ncsID: ncsId,
        experience: experience,
        email: email,
        passWord: password,
        confirmpassWord: confirmPassword,
        contactNumber: contactNumber,
        location: location,
      })
      .then(() => alert("Successful signup!"))
      .catch((err) => console.log("Error", err));
  };

  const navigation = useNavigation();

  const handleLoginNavigation = () => {
    // Navigate back to the login page with the user type
    navigation.navigate("LoginPage", { userType: "Counsellors" });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Counsellor Registration</Text>
        {/* NCS ID Input */}
        <TextInput
          style={styles.input}
          placeholder="NCS ID"
          value={ncsId}
          onChangeText={(text) => setNcsId(text)}
        />

        {/* Years of Experience Input */}
        <TextInput
          style={styles.input}
          placeholder="Years of Experience"
          value={experience}
          onChangeText={(text) => setExperience(text)}
        />

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        {/* Set a Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Set a Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        {/* Confirm Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Contact number"
          secureTextEntry={true}
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
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
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
    marginTop: 40,
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
    marginBottom: 20,
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

export default counsellorData;
