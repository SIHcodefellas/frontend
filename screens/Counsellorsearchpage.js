import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you are using Expo for vector icons
import CounsellorHomepage from "./CounsellorHomepage";
import { useNavigation } from "@react-navigation/native";
import CounsellorDashboard from "./CounsellorDashboard";
const profileimage = require("./download.png");

import axios from "axios";

const Counsellorsearchpage = ({ route }) => {
  const { params } = route;
  const searchQuery = params ? params.searchQuery : "";
  const navigation = useNavigation();

  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterOptions, setFilterOptions] = useState([]);

  const [utps, setutps] = useState([]);
  useEffect(() => {
    const fetchutps = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.215:3001/utpProfile"
        );
        setutps(response.data);
      } catch (error) {
        console.error("Error fetching utps:", error);
      }
    };

    fetchutps();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={30} color="#1A3567" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={30} color="#1A3567" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search prisoners..."
          placeholderTextColor="gray"
        />
        <TouchableOpacity>
          <Ionicons name="search" size={30} style={styles.searchIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.prisonerstext}>Prisoners</Text>

          <View style={styles.squareSectionsContainer}>
            {utps.map((utp) => (
              <TouchableOpacity
                key={utp._id}
                style={styles.squareSection}
                onPress={() => {
                  navigation.navigate({ utpData: utp });
                  console.log(utp);
                }}
              >
                <Image
                  style={styles.squareSectionImage}
                  source={profileimage}
                  alt="Image placeholder"
                />
                <Text style={styles.name}>{`Name: ${utp.name}`}</Text>
                <Text>{`Offence: ${utp.offence}`}</Text>

                <TouchableOpacity style={styles.checkDetailsButton}>
                  <Text style={styles.checkDetailsText}>Check Details</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Fixed navigation bar at the bottom */}
      <View style={styles.navigationBar}>
        <View style={styles.navigationBar}>
          {/* Navigation icons */}
          <View style={styles.navIconsContainer}>
            <TouchableOpacity>
              <View
                style={styles.navIconWrapper}
                onPress={() => navigation.navigate(CounsellorHomepage)}
              >
                <View style={styles.lineAboveIcon} />
                <Ionicons
                  name="home"
                  size={25}
                  color="#1A3567"
                  style={styles.navIcon}
                />

                <Text style={styles.navLabel}>Home</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(CounsellorDashboard)}
            >
              <Ionicons
                name="apps"
                size={25}
                color="#1A3567"
                style={styles.navIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Add your navigation bar items here */}
      </View>
    </View>
  );
};

export default Counsellorsearchpage;

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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    marginTop: 0,
  },
  searchInput: {
    // flex: 1,
    height: 40,
    width: 235,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingHorizontal: 12,
    marginRight: 0,
    borderWidth: 1,
    borderColor: "#044AC8",
  },
  searchIcon: {
    backgroundColor: "white",
    borderLeftWidth: 0,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    fontSize: 35,
    borderRightColor: "#044AC8",
    borderTopColor: "#044AC8",
    borderBottomColor: "#044AC8",
    color: "#1A3567",
  },

  filterButton: {
    backgroundColor: "#044AC8",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 5, // Adjust the marginLeft based on your design
    width: 55,
    height: 35,
    alignItems: "center",
    justifyContent: "center", // Center vertically
  },
  filterText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center", // Center horizontally
  },

  scrollView: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 20,
  },
  content: {
    padding: 16,
  },
  prisonerstext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A3567",
    marginTop: 5,
    marginBottom: 10,
  },
  squareSectionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 5,
  },
  squareSection: {
    width: "48%",
    aspectRatio: 0.7,
    backgroundColor: "white",
    borderColor: "#1A3567",
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    overflow: "hidden",
    // paddingBottom: 10,
    marginBottom: 10,
  },
  squareSectionImage: {
    width: "40%",
    height: "40%", // Adjust the height based on your design
    borderRadius: 50,
    aspectRatio: 1,
    overflow: "hidden",
    marginTop: 15, // Adjust the marginTop based on your design
  },
  name: {
    marginTop: 10,
  },
  squareSectionTitle: {
    color: "#1A3567",
    fontSize: 16, // Adjust the fontSize based on your design
    marginTop: 10, // Adjust the marginTop based on your design
  },
  sectionText: {
    fontSize: 12, // Adjust the fontSize based on your design
    color: "#555", // Adjust the color based on your design
  },
  checkDetailsButton: {
    marginTop: 10,
    backgroundColor: "#044AC8",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: "stretch",
    alignItems: "center",
  },
  checkDetailsText: {
    color: "white",
    fontWeight: "bold",
  },
  navigationBar: {
    backgroundColor: "#B0CCFF",
    padding: 7,
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
    marginBottom: 0,
  },
  navLabel: {
    color: "#1A3567",
    marginRight: 0,
  },
  filterModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  filterModalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
