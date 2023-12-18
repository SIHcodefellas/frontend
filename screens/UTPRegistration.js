// Import necessary React and React Native components
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
// import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Homepage from "./Homepage";

const UTPRegistration = () => {
  const [caseId, setCaseId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("");
  const [lawyerName, setLawyerName] = useState("");
  const [offence, setOffence] = useState("");
  const navigation = useNavigation();
  const handleSignUp = () => {
    // Check if the password matches the confirmed password
    if (password !== confirmPassword) {
      Alert.alert("Error", "Password and Confirm Papussword do not match");
      return;
    }
    axios
      .get("http://192.168.143.88:3001/utpProfile")
      .then((res) => console.log(res))
      .catch((err) => console.log("error", err));
    axios
      .post("http://192.168.143.88:3001/utpProfile", {
        caseID: caseId,
        name,
        setPassword: password,
        confirmPassWord: confirmPassword, // Match the backend field name
        email,
        contactNumber,
        location,
        lawyerName,
        offence,
      })
      .then(() => {
        alert("Successful signup!");
        navigation.navigate("Homepage");
      })
      .catch((err) => console.log("Error", err));
    // Implement your sign-up logic here
    // Validate inputs, make API calls, etc.
  };

  // const navigation = useNavigation();

  // const handleLoginNavigation = () => {
  //     // Navigate back to the login page with the user type
  //     navigation.navigate('LoginPage', { userType: 'UndertrialPrisoners' });
  // };

  const [lawyerOptions, setLawyerOptions] = useState([
    { label: "Lawyer 1", value: "Lawyer 1" },
    { label: "Lawyer 2", value: "Lawyer 2" },
    // Add more lawyer options as needed
  ]);
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Undertrial Prisoner Registration</Text>

        {/* Case ID Input */}
        <TextInput
          style={styles.input}
          placeholder="Case ID or FIR ID"
          value={caseId}
          onChangeText={(text) => setCaseId(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Set Password"
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

        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />

        {/* Lawyer Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Lawyer Name"
          value={lawyerName}
          onChangeText={(text) => setLawyerName(text)}
        />

        {/* Offence Input */}
        <TextInput
          style={styles.input}
          placeholder="Offence"
          value={offence}
          onChangeText={(text) => setOffence(text)}
        />

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.alreadytext}>
          Already have an account?
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.login}> Log In</Text>
          </TouchableOpacity>
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

export default UTPRegistration;
