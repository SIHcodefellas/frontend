// HomeLawyer.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import profileimage from "./profileimage.png";
import NotificationPage from "./NotificationPage";
import Menu from "./Menu";
import { useNavigation } from "@react-navigation/native";
import MyComponent from "./law";
import Wellbeing from "./Wellbeing";
import Homepage from "./Homepage";
import Dashboard from "./Dashboard";
import Study from "./Study";
import CaseId from "./CaseId";
const CategorySelector = ({ categories, onPressCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.categoryContainer,
            selectedCategory === item.id && styles.selectedCategory,
          ]}
          onPress={() => onPressCategory(item)}
        >
          <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};
const HomeLawyer = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleCategoryPress = (item) => {
    // Check if the item has a page property
    if (item.page) {
      // Navigate to the specified page
      navigation.navigate(item.page);
    } else {
      // Handle other logic if needed
    }
  };
  // Function to toggle the visibility of the menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const categories = [
    { id: 1, name: "ProBono", page: "HomeProbono" },
    { id: 2, name: "Lawyers", page: "HomeLawyer" },
    { id: 3, name: "Legal Clinics", page: "Homelegalclinics" },
    { id: 4, name: "UTRC's", page: "HomeUTRC" },
    { id: 5, name: "Counselors" },
    { id: 6, name: "NGO's", page: "HomeNgo" },
  ];

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

      {/* Category Selector moved to a new parent View */}
      <View>
        {/* Category Selector */}
        <CategorySelector
          categories={categories}
          onPressCategory={handleCategoryPress}
        />
      </View>

      {/* Scrollable content area */}
      <ScrollView style={styles.scrollView}>
        {/* Your content goes here */}
        <View style={styles.content}>
          <View style={styles.profileCardContainer}>
            {/* Profile Card 1 */}
            <View style={styles.profileCard}>
              <Text style={styles.lawyername}>Arnav Khochare</Text>
              <Image
                style={styles.profileCardImage}
                source={profileimage}
                alt="Image placeholder"
              />

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate(MyComponent)}
                >
                  <Text style={[styles.boldText, styles.lawyerText]}>
                    Years of Experience:
                  </Text>
                  <Text style={styles.semiBoldText}>22</Text>
                  <Text style={[styles.boldText, styles.lawyerText]}>
                    Subject Matter Expertise:
                  </Text>
                  <Text style={styles.semiBoldText}>Criminal Cases</Text>
                  <Text style={[styles.boldText, styles.lawyerText]}>
                    Sucess Rate:
                  </Text>
                  <Text style={styles.semiBoldText}>70%</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* Rest of your content */}
            {/* ... */}
          </View>
        </View>
      </ScrollView>

      {/* Fixed navigation bar at the bottom */}
      <View style={styles.navigationBar}>
        {/* Navigation icons */}
        <View style={styles.navIconsContainer}>
          <TouchableOpacity>
            <View style={styles.navIconWrapper}>
              <View style={styles.lineAboveIcon} />
              <Ionicons
                onPress={() => navigation.navigate(Homepage)}
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
      {menuVisible && <Menu navigation={<HomeLawyer />} onClose={toggleMenu} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B0CCFF",
  },
  boldText: {
    fontWeight: "bold",
    // Any other styles you want for the bold text
  },
  semiBoldText: {
    fontWeight: "500", // '500' is often used for semi-bold
    // Any other styles you want for the semi-bold text
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

  squareSection: {
    width: "48%", // Adjust as needed
    height: 0,
    aspectRatio: 1,
    backgroundColor: "#B0CCFF", // Change this to your preferred color
    borderColor: "#1A3567",
    borderWidth: 3,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  categoryContainer: {
    paddingHorizontal: 5,
    paddingVertical: 20,
    marginRight: 15,
    paddingBottom: 0,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  selectedCategory: {
    borderBottomWidth: 2,
    borderBottomColor: "blue",
    paddingBottom: 5,
  },
  profileCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  profileCard: {
    width: "47.5%",
    padding: 5,
    borderWidth: 2,
    borderColor: "#1A3567",
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 5,
    marginTop: 5,
  },
  profileCardImage: {
    width: 90,
    height: 90,
    alignSelf: "center",
    borderRadius: 50,
  },
  lawyername: {
    fontWeight: "bold",
    padding: 5,
  },
  lawyerText: {
    padding: 2,
  },
});

export default HomeLawyer;
