import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Study from "./Study";
import Wellbeing from "./Wellbeing";
import Homepage from "./Homepage";
import Dashboard from "./Dashboard";

const CaseId = () => {
  const navigation = useNavigation();
  const [showCaseIdWindow, setShowCaseIdWindow] = useState(false);
  const [caseIdInput, setCaseIdInput] = useState("");

  const openCaseIdWindow = () => {
    setShowCaseIdWindow(true);
  };

  const closeCaseIdWindow = () => {
    setShowCaseIdWindow(false);
  };

  const submitCaseId = async () => {
    try {
      // Check if the CaseID exists
      const response = await fetch("http://192.168.1.215:3001/checkCaseID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ caseID: caseIdInput }),
      });

      const result = await response.json();

      if (result.exists) {
        // CaseID exists, navigate to the Dashboard
        console.log("CaseID exists. Navigating to Dashboard.");
        navigation.navigate("Dashboard", { params: { caseID: caseIdInput } });
      } else {
        // CaseID does not exist, show an alert or handle accordingly
        alert("Case ID not found. Please check and try again.");
      }
    } catch (error) {
      console.error("Error checking CaseID:", error);
      // Handle errors
    }
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.enterTheCaseIdfirIdParent, styles.wrapperShadowBox]}>
        <Text style={[styles.enterTheCase, styles.caseTypo]}>
          Enter the Case ID/FIR ID
        </Text>

        {/* Input Field */}
        <TextInput
          style={styles.inputField}
          placeholder="Enter Case ID"
          value={caseIdInput}
          onChangeText={(text) => setCaseIdInput(text)}
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={submitCaseId}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

        <Text style={[styles.oopsidNotFound, styles.text32Typo]}>
          Oops..ID not found
        </Text>
        <Text style={[styles.caseIdAnd, styles.caseTypo]}>
          Case ID and FIR ID are asked to maintain the privacy of our users.
          Read T&C
        </Text>
      </View>
      <View style={styles.navigationBar}>
        {/* Navigation icons */}
        <View style={styles.navIconsContainer}>
          <TouchableOpacity>
            <Ionicons
              onPress={() => navigation.navigate(Homepage)}
              name="home"
              size={25}
              color="#1A3567"
              style={styles.navIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.navIconWrapper}>
              <View style={styles.lineAboveIcon} />
              <Ionicons
                onPress={() => navigation.navigate(Dashboard)}
                name="apps"
                size={25}
                color="#1A3567"
                style={styles.navIcon}
              />
              <Text style={styles.navLabel}>Profile</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              onPress={() => navigation.navigate(Study)}
              name="book"
              size={25}
              color="#1A3567"
              style={styles.navIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              onPress={() => navigation.navigate(Wellbeing)}
              name="heart"
              size={25}
              color="#1A3567"
              style={styles.navIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#B0CCFF", // Replace with your background color
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  wrapperShadowBox: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 10,
    position: "absolute",
    overflow: "hidden",
  },

  button: {
    backgroundColor: "#B0CCFF", // Replace with your button color
    padding: 15,
    borderRadius: 8,
    top: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff", // Replace with your text color
    fontSize: 20,
    fontWeight: "bold",
  },
  errorText: {
    color: "red", // Replace with your error text color
    fontSize: 16,
    marginBottom: 10,
  },
  infoText: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
    color: "#555", // Replace with your text color
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  caseTypo: {
    fontFamily: "sans-serif", // Replace with your desired font family
    fontWeight: "900",
    textAlign: "left",
    // Add any additional styling properties you need
  },

  enterTheCaseIdfirIdParent: {
    top: 99,
    left: 34,
    borderRadius: 20,
    backgroundColor: "#FFFFFF", // Use the desired background color
    shadowColor: "#999",
    shadowRadius: 10,
    elevation: 10,
    width: 277,
    height: 190,
    padding: 20, // Add padding if needed
  },
  enterTheCase: {
    left: 17,
    color: "#110F15",
    top: 19,
    fontWeight: "500",
    textAlign: "left",
    fontSize: 16, // Adjust the font size as needed
    position: "absolute",
  },
  wrapper: {
    top: 34,
    left: -3,
    backgroundColor: "#BBD3FF", // Use the desired background color
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 243,
    height: 43,
    borderRadius: 20, // Adjust the border radius as needed
    justifyContent: "center",
    alignItems: "center",
  },
  text32: {
    top: 3,
    fontSize: 20,
    color: "#022D7D",
    fontWeight: "500",
  },
  oopsidNotFound: {
    top: 44,
    color: "#D70000",
    fontSize: 12, // Adjust the font size as needed
  },
  caseIdAnd: {
    top: 164,
    left: 17,
    fontSize: 7,
    color: "#022D7D",
    width: 255,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon: {
    top: 158,
    left: 228,
    height: 1, // Set the height as needed
  },
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    marginTop: 35,
    paddingLeft: 10,
  },
  submitButton: {
    backgroundColor: "#B0CCFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: -1,
    borderWidth: 0.8,
    borderColor: "#044AC8",
  },
  submitButtonText: {
    color: "#044AC8",
    fontSize: 16,
    fontWeight: "bold",
  },

  navigationBar: {
    backgroundColor: "#B0CCFF",
    padding: 7,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },

  navIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  lineAboveIcon: {
    backgroundColor: "#1A3567",
    height: 2,
    width: 30,
    marginBottom: 5,
  },
  navIcon: {
    marginBottom: 0, // Adjust the margin as needed
  },
  navLabel: {
    color: "#1A3567",
    marginRight: 0,
    textAlign: "center",
  },
});
export default CaseId;
