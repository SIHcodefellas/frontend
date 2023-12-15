// Import necessary React and React Native components
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import UTPRegistration from "./UTPRegistration";
import ProBonoRegistration from "./ProBonoRegistration";
import LawyerRegistration from "./LawyerRegistration";
import CounsellorRegistration from "./CounsellorRegistration";
import NGORegistration from "./NGORegistration";
import Homepage from "./Homepage";
import LawyerHomepage from "./LawyerHomepage";
import CounsellorHomepage from "./CounsellorHomepage";
import NgoHomepage from "./NgoHomepage";
const LoginPage = ({ route, navigation }) => {
  // Extracting user type from route.params
  const { userType } = route.params;

  // Function to handle login
  const handleLogin = () => {
    // Implement your login logic here
    switch (userType) {
      case "UndertrialPrisoners":
        navigation.navigate(Homepage);
      case "ProBonoLawyers":
        navigation.navigate(LawyerHomepage);
      case "Lawyers":
        navigation.navigate(LawyerHomepage);
      case "Counsellors":
        navigation.navigate(CounsellorHomepage);
      case "NGOs":
        navigation.navigate(NgoHomepage);
      // case "UndertrialReviewCommittee":
      //   return "Welcome, Advocate for Fairness!";
      default:
        return "Welcome!";
    }
  };

  // Dynamic welcome text based on user type
  const getWelcomeText = () => {
    switch (userType) {
      case "UndertrialPrisoners":
        return "Hey there, Brave Soul Seeking Justice!";
      case "ProBonoLawyers":
        return "Welcome, Legal Superhero!";
      case "Lawyers":
        return "Hello, Champion of Justice!";
      case "Counsellors":
        return "Hey, Empathetic Listener!";
      case "NGOs":
        return "Hi, Social Change Catalyst!";
      case "UndertrialReviewCommittee":
        return "Welcome, Advocate for Fairness!";
      default:
        return "Welcome!";
    }
  };

  // Function to handle SignUp navigation based on user type
  const handleSignUpNavigation = () => {
    // Navigate to the respective SignUp page based on user type
    switch (userType) {
      case "UndertrialPrisoners":
        navigation.navigate("UTPRegistration");
        break;
      case "ProBonoLawyers":
        navigation.navigate("ProBonoRegistration");
        break;
      case "Lawyers":
        navigation.navigate("LawyerRegistration");
        break;
      case "Counsellors":
        navigation.navigate("CounsellorRegistration");
        break;
      case "NGOs":
        navigation.navigate("NGORegistration");
        break; // Add break for each case
      // Add cases for other user types as needed
      default:
        // Navigate to a default SignUp page or handle accordingly
        // For example, you can navigate to a generic registration page
        navigation.navigate("GenericRegistration");
    }
  };

  return (
    <View style={styles.container}>
      {/* Dynamic Welcome Text */}
      <Text style={styles.welcomeText}>{getWelcomeText()}</Text>

      {/* Unique ID Input */}
      <TextInput
        style={styles.input}
        placeholder="Unique ID"
        // Add any additional props you need (e.g., onChangeText, value)
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        // Add any additional props you need (e.g., onChangeText, value)
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Text */}
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
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A3567",
    marginBottom: 20,
    textAlign: "center",
    padding: 10,
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
  signUpText: {
    color: "#1A3567",
    fontSize: 14,
    marginBottom: 20,
  },
  signUpLink: {
    color: "#1A3567", // Use the color of your choice
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#1A3567", // Use the color of your choice
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default LoginPage;
