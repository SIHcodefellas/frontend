import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const NotificationPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image source={require("./Back.png")} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications</Text>
      </View>

      {/* Today Button and Reminder Text */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.todayButton}>
          <Text style={styles.buttonText}>Today</Text>
        </TouchableOpacity>
        {/* Horizontal Line */}

        <Text style={styles.heading}>
          Great News! Fali Sam Nariman has Accepted Your Reqest. Schedule a
          Consultation
        </Text>
        <Image
          source={require("./vector1.png")}
          style={styles.horizontalLine}
        />
      </View>

      {/* Yesterday Button and Reminder Text */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.yesterdayButton}>
          <Text style={styles.buttonText}>Yesterday</Text>
        </TouchableOpacity>
        {/* Horizontal Line */}

        <Text style={styles.heading}>
          Reminder: UTRC Meeting Tomorrow at 8:00pm
        </Text>
        <Image
          source={require("./vector1.png")}
          style={styles.horizontalLine}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#B0CCFF",
    padding: 10,
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A3567",
  },
  buttonContainer: {
    padding: 10,
    alignItems: "center",
  },
  todayButton: {
    width: 120,
    height: 40,
    backgroundColor: "#42ADE2",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  yesterdayButton: {
    width: 120,
    height: 40,
    backgroundColor: "#42ADE2",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  horizontalLine: {
    width: 298.5,
    height: 1,
    marginVertical: 5,
  },
});

export default NotificationPage;
