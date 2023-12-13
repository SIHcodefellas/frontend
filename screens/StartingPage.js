// Import necessary React and React Native components
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import LoginPage from "./LoginPage";
const StartingPage = ({ navigation }) => {
  // Function to navigate to the selected user type screen
  const navigateToUserType = (userType) => {
    navigation.navigate("LoginPage", { userType });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Your Role:</Text>

      {/* Undertrial Prisoners */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToUserType("UndertrialPrisoners")}
      >
        <Text style={styles.buttonText}>Undertrial Prisoner</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToUserType("ProBonoLawyers")}
      >
        <Text style={styles.buttonText}>ProBono Lawyer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToUserType("Lawyers")}
      >
        <Text style={styles.buttonText}>Lawyer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToUserType("Counsellors")}
      >
        <Text style={styles.buttonText}>Counsellor</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToUserType("NGOs")}
      >
        <Text style={styles.buttonText}>NGO</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToUserType("UndertrialReviewCommittee")}
      >
        <Text style={styles.buttonText}>Undertrial Review Committee</Text>
      </TouchableOpacity>
    </View>
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
  },
  button: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#1A3567",
  },
  buttonText: {
    color: "#1A3567",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default StartingPage;
