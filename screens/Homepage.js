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
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you are using Expo for vector icons
import Menu from "./Menu"; // Import the MenuBar component
import { useNavigation } from "@react-navigation/native";
import Wellbeing from "./Wellbeing";
import NotificationPage from "./NotificationPage";
const section1Image = require("./section1.jpg");
import HomeProbono from "./HomeProbono";
import Homelegalclinics from "./Homelegalclinics";
import CourseDetails from "../components/CourseDetails";
import Study from "./Study";
import Dashboard from "./Dashboard";
import CaseId from "./CaseId";

const handleMenuItemPress = () => {
  Linking.openURL(
    "https://mediafiles.botpress.cloud/de6bea04-ef7b-4815-8a03-6ff0f3753757/webchat/bot.html"
  );
};

const SquareSection = ({ image, text }) => {
  return (
    <TouchableOpacity style={styles.squareSection}>
      <Image source={image} style={styles.squareSectionImage} />
      <Text style={styles.squareSectionTitle}>{text}</Text>
    </TouchableOpacity>
  );
};

const RectangularSection = ({ title, imageUrl, text }) => {
  return (
    <View style={styles.rectangularSection}>
      <View style={styles.rectangularImageContainer}>
        <Image source={{ imageUrl }} style={styles.rectangularImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.rectangularText}>{title}</Text>
        <Text style={styles.randomOneLiner}>{text}</Text>
      </View>
    </View>
  );
};

const Homepage = () => {
  const navigation = useNavigation();

  const circlesData = [
    {
      id: "1",
      image: require("./circleimage1.png"),
      name: "ProBono",
      page: "HomeProbono",
    },
    {
      id: "2",
      image: require("./circleimage2.png"),
      name: "Lawyers",
      page: "HomeLawyer",
    },
    {
      id: "3",
      image: require("./circleimage3.png"),
      name: "Legal \nClinics",
      page: "Homelegalclinics",
    },
    {
      id: "4",
      image: require("./circleimage4.png"),
      name: "UTRC's",
      page: "HomeUTRC",
    },
    {
      id: "5",
      image: require("./circleimage5.png"),
      name: "Counselors",
      page: "",
    },
    {
      id: "6",
      image: require("./circleimage6.png"),
      name: "NGO's",
      page: "HomeNgo",
    },
    // Add more as needed
  ];
  const handleCirclePress = (page) => {
    navigation.navigate(page);
  };
  const rectangularSectionsData = [
    {
      id: "1",
      title: "Undertrials in jail",
      imageUrl: "./section1.jpg",
      text: "A random one-liner for Section 1",
    },
    {
      id: "2",
      title: "Section 2",
      imageUrl: "URL_TO_IMAGE_2",
      text: "A witty remark for Section 2",
    },
    {
      id: "3",
      title: "Section 3",
      imageUrl: "URL_TO_IMAGE_3",
      text: "Some clever text for Section 3",
    },
    // Add more sections as needed
  ];

  const [menuVisible, setMenuVisible] = useState(false);

  // Function to toggle the visibility of the menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.container}>
      {/* Top bar with icons */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons
            name="menu-outline"
            size={30}
            color="black"
            style={[styles.icon, { marginTop: 30 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            onPress={() => navigation.navigate(NotificationPage)}
            name="notifications-outline"
            size={30}
            color="black"
            style={[styles.icon, { marginTop: 30 }]}
          />
        </TouchableOpacity>
      </View>

      {/* Search bar and filter button */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="gray"
        />
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filters</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable content area */}
      <ScrollView style={styles.scrollView}>
        {/* Your content goes here */}
        <View style={styles.content}>
          {/* Categories text */}
          <Text style={styles.smallheaders}>Categories</Text>

          {/* Horizontal scrollable view for circles */}
          <FlatList
            data={circlesData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.circleContainer}>
                <TouchableOpacity onPress={() => handleCirclePress(item.page)}>
                  <Image
                    source={item.image}
                    style={styles.circleImage}
                    resizeMode="cover"
                  />
                  <Text style={styles.circleName}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <View style={styles.resourcesHeader}>
            <Text style={styles.smallheaders2}>Resources</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          {/* 4 square sections in two columns */}
          <View style={styles.squareSectionsContainer}>
            <SquareSection image={section1Image} />
            <SquareSection image={section1Image} />
            <SquareSection image={section1Image} />
            <SquareSection image={section1Image} />
          </View>

          {/* Header for Chatbot */}
          <TouchableOpacity
            style={styles.chatbotHeader}
            onPress={() => handleMenuItemPress()}
          >
            <Text style={styles.knowYourRightsText}>
              Know Your Rights! Access our chatbot feature
            </Text>
            <Ionicons
              name="chatbox-ellipses-outline"
              size={25}
              color="#1A3567"
              style={styles.chatbotIcon}
            />
          </TouchableOpacity>

          <View style={styles.latestnewsHeader}>
            <Text style={styles.smallheaders2}>Latest News</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          {/* Horizontal scrollable view for rectangular sections */}
          <FlatList
            data={rectangularSectionsData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <RectangularSection
                title={item.title}
                imageUrl={item.imageUrl}
                text={item.text}
              />
            )}
          />

          {/* Rest of your content */}
          {/* ... */}
        </View>
      </ScrollView>

      {/* Fixed navigation bar at the bottom */}
      <View style={styles.navigationBar}>
        <View style={styles.navigationBar}>
          {/* Navigation icons */}
          <View style={styles.navIconsContainer}>
            <TouchableOpacity>
              <View style={styles.navIconWrapper}>
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
            <TouchableOpacity>
              <Ionicons
                onPress={() => navigation.navigate(CaseId)}
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
        {/* Add your navigation bar items here */}
      </View>
      {/* MenuBar component */}
      {menuVisible && <Menu navigation={<Homepage />} onClose={toggleMenu} />}
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 0,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal: 12,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#044AC8",
  },
  filterButton: {
    backgroundColor: "blue", // Change this to your preferred color
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  filterButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 20,
  },
  circleContainer: {
    alignItems: "center",
    marginRight: 10,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginHorizontal: 5,
    marginTop: 8,
  },
  circleName: {
    marginTop: 5,
    fontSize: 12,
    alignSelf: "center",
    color: "#044AC8",
  },
  circleImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginHorizontal: 5,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#044AC8",
  },

  smallheaders: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#044AC8",
  },
  smallheaders2: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#044AC8",
    marginTop: 15,
    marginBottom: 10,
  },
  resourcesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
    paddingHorizontal: 0,
  },
  viewAllText: {
    color: "#1A3567",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  content: {
    padding: 16,
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
  squareSectionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    marginTop: 15,
  },
  squareSection: {
    width: "48%", // Adjust as needed
    height: 0,
    aspectRatio: 1,
    backgroundColor: "white", // Change this to your preferred color
    borderWidth: 2,
    borderColor: "#1A3567",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  squareSectionImage: {
    width: "70%",
    height: "70%",
    borderRadius: 8,
  },
  knowYourRightsText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#044AC8",
    marginTop: 15,
  },
  chatbotHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  chatbotIcon: {
    marginLeft: 5,
  },
  latestnewsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
    paddingHorizontal: 0,
  },
  rectangularSection: {
    width: 200,
    aspectRatio: 5 / 4, // 80% height for image, 20% for text
    marginRight: 16,
    borderRadius: 5,
    overflow: "hidden",
  },
  rectangularImageContainer: {
    flex: 1,
    borderColor: "#1A3567",
    borderWidth: 2,
  },
  rectangularImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: 'rgba(255, 255, 255)',
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  rectangularText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#044AC8",
  },
  randomOneLiner: {
    fontSize: 14,
    color: "#6B6B6B",
    marginTop: 8,
  },
});

export default Homepage;
