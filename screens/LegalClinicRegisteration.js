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

const LegalClinicRegistration = () => {
  const [name, setName] = useState("");
  const [operationalHours, setOperationalHours] = useState("");
  const [location, setLocation] = useState("");
  const [ID, setID] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    axios
      .get("http://192.168.1.215:3001/legalProfile")
      .then((res) => console.log(res))
      .catch((err) => console.log("error", err));
    axios
      .post("http://192.168.1.215:3001/legalProfile", {
        name: name,
        operationalHours: operationalHours,
        location: location,
        ID: ID,
      })
      .then(() => alert("Successful signup!"))
      .catch((err) => console.log("Error", err));

    // Implement your sign-up logic here
    // Validate inputs, make API calls, etc.
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Legal Clinic Registration</Text>

        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="ID"
          value={ID}
          onChangeText={(text) => setID(text)}
        />

        {/* Operational Hours Input */}
        <TextInput
          style={styles.input}
          placeholder="Operational Hours"
          value={operationalHours}
          onChangeText={(text) => setOperationalHours(text)}
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

export default LegalClinicRegistration;
