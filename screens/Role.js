// Role.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Back = require("./Back.png");
import utpData from './utpData';
import ngoData from './ngoData';
import counsellorData from './counsellorData';
import probonoData from './probonoData';
const Role = () => {
  const navigation = useNavigation();

  const handleButtonPress = (buttonText) => {
    switch (buttonText) {
      case "utpData":
        // Navigate to Undertrial Prisoner screen
        navigation.navigate("utpData");
        break;
      case "ngoData":
        // Navigate to NGO screen
        navigation.navigate("ngoData");
        break;
      case "counsellorData":
        // Navigate to Counsellor screen
        navigation.navigate("counsellorData");
        break;
      case "probonoData":
        // Navigate to ProBono Lawyer screen
        navigation.navigate("probonoData");
        break;
      default:
        console.log(`Unknown button pressed: ${buttonText}`);
    }
  };
  

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Back} style={styles.backButton} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
      <TouchableOpacity
      style={styles.button}
      onPress={() => handleButtonPress("utpData")}
    >
          <Text style={styles.buttonText}>Undertrial Prisoner</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("ngoData")}
        >
          <Text style={styles.buttonText}>NGO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("counsellorData")}
        >
          <Text style={styles.buttonText}>Counsellor</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress("probonoData")}
        >
          <Text style={styles.buttonText}>ProBono Lawyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B0CCFF",
  },
  header: {
    padding: 1,
  },
  backButton: {
    width: 25,
    height: 25,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#044AC8",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    height: 80,
    width: 400, // Adjust the width as needed
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default Role;
