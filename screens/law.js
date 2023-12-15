import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Back = require("./Back.png");
import Role from "../screens/Role";
const MyComponent = () => {
  const phoneNumber = "9136279324";
  const emailAddress = "arnavlegalaid@yahoo.com";
  const locationAddress = "Kolkata, India";
  const navigation = useNavigation();
  const handleCallPress = () => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${emailAddress}`);
  };

  const handleLocationPress = () => {
    // Open Google Maps with the specified address
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        locationAddress
      )}`
    );
  };

  const handleAuthenticPress = () => {
    // Open the Bar Council of India website
    Linking.openURL("https://main.sci.gov.in/advocates#");
  };

  const handleMeetSchedule = () => {
    Linking.openURL("https://calendly.com/miss-riyajaiswal251003/30min");
  };

  const handleAddRolePress = () => {
    // Navigate to the "Role" screen
    navigation.navigate("Role");
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={[styles.profileContainer, styles.curveBackground]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Back} style={styles.backButton}></Image>
          </TouchableOpacity>

          <Image
            style={styles.profileImage}
            source={{
              uri: "https://th.bing.com/th/id/OIP.usYnwXgh7l4OZf2TED0vFAHaE8?rs=1&pid=ImgDetMain",
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.profileText}>Arnav khochare</Text>
            <View></View>
            <Text style={styles.experienceText}>Years of Experience: 5</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Criminal Case</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Corporate Law</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={[styles.button, styles.centerButton]}>
                <Text style={styles.buttonText}>Corporate Law</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.button, styles.centerButton]}
                onPress={handleMeetSchedule}
              >
                <Text style={styles.buttonText}>Schedule Meet</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[styles.button, styles.roleButton]}
              onPress={handleAddRolePress}
            >
              <Text style={styles.buttonText}>Add role</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.locationContainer}>
          <TouchableOpacity
            style={styles.callContainer}
            onPress={handleLocationPress}
          >
            <MaterialIcons name="location-on" size={40} color="red" />
            <Text style={styles.locationText}>Kolkata, India</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.ConHeader}>Contact Details</Text>
          <View style={styles.subdiv}>
            <TouchableOpacity
              style={styles.callContainer}
              onPress={handleCallPress}
            >
              <MaterialIcons name="call" size={22} color="black" />
              <Text style={styles.CallText}>9136279324 / 92300987***</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.callContainer}
              onPress={handleEmailPress}
            >
              <MaterialIcons name="mail" size={22} color="black" />
              <Text style={styles.CallText}>arnavlegalaid@yahhoo.com</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.ConHeader}>Association</Text>
          <TouchableOpacity style={styles.Barbutton}>
            <Text style={styles.barbuttonText} onPress={handleAuthenticPress}>
              Bar Council of India
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.ConHeader}>User reviews</Text>
        <View style={styles.subdiv2}>
          <View style={styles.callContainer}>
            <MaterialIcons name="account-circle" size={22} color="black" />
            <Text style={styles.CallText}>
              I hired Claire Wysocki to help out with a pretty scary issue where
              my family was being sued.............
            </Text>
          </View>
          <View style={styles.callContainer}>
            <MaterialIcons name="account-circle" size={22} color="black" />
            <Text style={styles.CallText}>
              I hired Claire Wysocki to help out with a pretty scary issue where
              my family was being sued.............
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 16,
    paddingTop: 0,
    marginTop: -30,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginRight: 16,
    marginTop: 10,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: 10,
    color: "#044AC8",
  },
  profileText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  experienceText: {
    fontSize: 16,
    color: "#1A3567",
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  backButton: {
    width: 25,
    height: 25,
    padding: 2,
  },
  button: {
    backgroundColor: "#044AC8",
    paddingVertical: 2,
    paddingHorizontal: 2,
    marginHorizontal: 2,
    borderRadius: 30,
    marginTop: 10,
  },
  centerButton: {
    backgroundColor: "#044AC8",
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 30,
    marginTop: 10,
  },
  roleButton: {
    backgroundColor: "#CC7722",
    paddingVertical: 4,
    paddingHorizontal: 4,
    borderRadius: 30,
    marginTop: 10,
    left: 120,
    top: -35,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "regular",
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 50,
  },
  locationText: {
    marginLeft: 8,
    fontSize: 30,
    color: "#044AC8",
  },
  subdiv: {
    width: 300, // Set the width as needed
    height: 70, // Set the height as needed
    borderWidth: 2,
    borderColor: "#1A3567", // Set the color of the outline
    paddingLeft: 12,
    paddingTop: 10,
  },
  subdiv2: {
    width: "90%", // Set the width as needed
    height: "20%", // Set the height as needed
    borderWidth: 2,
    borderColor: "#1A3567", // Set the color of the outline
    paddingLeft: "4%",
    paddingTop: "4%",
  },
  ConHeader: {
    fontSize: 20,
    color: "#1A3567",
    fontWeight: "semibold",
    paddingTop: "6%",
  },
  CallText: {
    fontSize: 15,
    color: "black",
  },
  callContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "1%",
    marginTop: "1%",
  },
  Barbutton: {
    padding: "4%",
    marginRight: 140,
    backgroundColor: "#B0CCFF",
    borderRadius: 30,
    marginTop: "4%",
    borderWidth: 1,
    borderColor: "#1A3567",
  },
  barbuttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  curveBackground: {
    backgroundColor: "#B0CCFF",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingHorizontal: 0,
    paddingVertical: 0,
    height: "30%",
    width: "103.5%",
    marginLeft: "-4%",
    paddingTop: 0,
    marginTop: 0,
  },
});

export default MyComponent;
