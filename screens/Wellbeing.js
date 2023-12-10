import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you are using Expo for vector icons
import { LineChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";
import Thoughts from "./Thoughts";
import Menu from "./Menu";
const meditate1 = require("./meditate1.png");
const meditate2 = require("./meditate2.png");
import Homepage from "./Homepage";
import Study from "./Study";
import Dashboard from "./Dashboard";

const SquareSection = ({ image, text }) => {
  return (
    <TouchableOpacity style={styles.squareSection}>
      <Image source={image} style={styles.squareSectionImage} />
      <Text style={styles.squareSectionTitle}>{text}</Text>
    </TouchableOpacity>
  );
};

const HorizontalLine = () => {
  return <View style={styles.horizontalLine} />;
};

const MoodTracking = () => {
  // Mock data for the line chart
  const data = {
    labels: ["1", "6", "11", "16", "21", "26", "31"],
    datasets: [
      {
        data: [1.2, 2.5, 3, 3.25, 4, 3.35, 5], // Example mood values (1 to 5)
      },
    ],
  };

  const yAxisLabels = ["😥", "🙁", "😐", "🙂", "😇"];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View>
        <Text style={styles.charttitle}>Mood chart of this month</Text>
        <LineChart
          data={data}
          width={350} // Adjust as needed
          height={220} // Adjust as needed
          formatYLabel={(value) => {
            const roundedValue = Math.round(value);
            const lowerLimit = (roundedValue - 1).toFixed(2);
            const upperLimit = roundedValue.toFixed(2);
            return `${lowerLimit} - ${upperLimit} - ${
              yAxisLabels[roundedValue - 1]
            }`;
          }}
          chartConfig={{
            backgroundGradientFrom: "#FFF",
            backgroundGradientTo: "#B0CCFF",
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
};

const Wellbeing = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Ionicons
          onPress={toggleMenu}
          name="menu-outline"
          size={30}
          color="black"
          style={[styles.icon, { marginTop: 30 }]}
        />
        <Ionicons
          name="notifications-outline"
          size={30}
          color="black"
          style={[styles.icon, { marginTop: 30 }]}
        />
      </View>

      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Hi, Riya! How are you feeling today?
        </Text>
      </View>

      {/* Emojis */}
      <View style={styles.emojiContainer}>
        <TouchableOpacity>
          <Text style={[{ fontSize: 25 }]}>😥</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[{ fontSize: 25 }]}>🙁</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[{ fontSize: 25 }]}>😐</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[{ fontSize: 25 }]}>🙂</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[{ fontSize: 25 }]}>😇</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.scrollViewcontainer}>
          <View style={styles.meditationHeader}>
            <Text style={styles.smallheaders}>Let's Meditate!</Text>
          </View>
          <View style={styles.squareSectionsContainer}>
            <SquareSection image={meditate1} text={"Yoga Session"} />
            <SquareSection image={meditate2} text={"Mental Health Games"} />
          </View>
          <View>
            <Text style={styles.smallheaders}>
              Feel like journaling your thoughts? 📝
            </Text>
            <TouchableOpacity
              style={styles.journalBox}
              onPress={() => navigation.navigate(Thoughts)} // Navigate to Thoughts screen
            >
              <Text style={styles.journalText}>Writing helps!</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.smallheaders}>
              Seek Professional Help! Connect
            </Text>
            <Text style={styles.withcouncellors}>with Councellors</Text>
            <TouchableOpacity style={styles.professionalHelpButton}>
              <Ionicons
                name="call-outline"
                size={25}
                color="#1A3567"
                style={styles.helpIcon}
              />
            </TouchableOpacity>
          </View>
          <HorizontalLine />
          <View>
            <Text style={styles.smallheaders}>Mood Tracking</Text>
            <MoodTracking />
          </View>
        </View>
      </ScrollView>

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
            <Ionicons
              onPress={() => navigation.navigate(Dashboard)}
              name="apps"
              size={25}
              color="#1A3567"
              style={styles.navIcon}
            />
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
            <View style={styles.navIconWrapper}>
              <View style={styles.lineAboveIcon} />
              <Ionicons
                onPress={() => navigation.navigate(Wellbeing)}
                name="heart"
                size={25}
                color="#1A3567"
                style={styles.navIcon}
              />

              <Text style={styles.navLabel}>Care</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {menuVisible && <Menu navigation={<Wellbeing />} onClose={toggleMenu} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B0CCFF",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  icon: {
    marginRight: 0,
  },
  headerContainer: {
    marginTop: 0,
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#044AC8",
  },
  emojiContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginRight: 15,
    marginLeft: 15,
  },
  emojiText: {
    fontSize: 30,
  },

  scrollView: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 20,
  },
  scrollViewcontainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  smallheaders: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#044AC8",
    marginTop: 10,
  },
  withcouncellors: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#044AC8",
  },

  squareSection: {
    width: "48%", // Adjust as needed
    height: 0,
    aspectRatio: 1,
    backgroundColor: "white", // Change this to your preferred color
    borderColor: "#1A3567",
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  squareSectionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    marginTop: 15,
  },

  squareSectionImage: {
    width: "70%",
    height: "70%",
    borderRadius: 8,
  },

  navigationBar: {
    backgroundColor: "#B0CCFF", // Change this to your preferred color
    padding: 7,
  },
  navIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navIcon: {
    marginBottom: 0, // Adjust the margin as needed
  },
  navLabel: {
    color: "#1A3567",
    marginRight: 0,
    textAlign: "center",
  },
  lineAboveIcon: {
    backgroundColor: "#1A3567",
    height: 2,
    width: 30,
    marginBottom: 5,
  },
  journalBox: {
    backgroundColor: "white",
    borderColor: "#1A3567",
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    marginTop: 10,
  },

  journalText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#044AC8",
  },
  professionalHelpButton: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
  },

  helpIcon: {
    marginBottom: 0,
  },
  horizontalLine: {
    borderBottomColor: "rgba(169, 169, 169, 0.3)", // Change color as needed
    borderBottomWidth: 1, // Change thickness as needed
    marginVertical: 10, // Adjust spacing as needed
    marginTop: 20,
    width: "80%",
    alignSelf: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2, // Adjust opacity as needed
    shadowRadius: 1, // Adjust shadow radius as needed
    elevation: 1, // Android shadow
  },

  chart: {
    marginVertical: 8,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#044AC8",
  },

  charttitle: {
    alignSelf: "center",
    marginVertical: 5,
  },
});

export default Wellbeing;
