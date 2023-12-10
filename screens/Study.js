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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CourseDetails from "../components/CourseDetails";
import Homepage from "./Homepage";
import Wellbeing from "./Wellbeing";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import CaseId from "./CaseId";

const Study = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  // Function to toggle the visibility of the menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const popularCoursesData = [
    {
      id: 1,
      name: "Basic Numeracy",
      modules: 6,
      certificate: true,
      image: require("../assets/math.png"),
      videoUrl: require("../assets/video.mp4"),
    },
    {
      id: 2,
      name: "Carpentry Simulation",
      tasks: 5,
      certificate: true,
      image: require("../assets/carpenter.png"),
    },
    {
      id: 3,
      name: "Embroidery Course",
      tasks: 5,
      certificate: true,
      image: require("../assets/embroidery.png"),
    },
    {
      id: 4,
      name: "Computer Course",
      modules: 6,
      certificate: true,
      image: require("../assets/computer.png"),
    },
    // Add more courses as needed
  ];
  const recommendedCoursesData = [
    {
      id: 1,
      name: "Carpentry Simulation",
      tasks: 5,
      certificate: true,
      progress: 30,
    },
    { id: 2, name: "Computer Basics", certificate: true, progress: 50 },
    // Add more recommended courses as needed
  ];
  const leaderboardData = [
    {
      id: 1,
      backgroundColor: "#fdd951",
      profilePicture: require("../assets/man.jpg"), // Replace with the actual image source
      name: "John Doe",
      points: 1000,
    },
    {
      id: 2,
      backgroundColor: "#d5d6c5",
      profilePicture: require("../assets/man.jpg"), // Replace with the actual image source
      name: "Jane Doe",
      points: 800,
    },
    // Add more leaderboard entries as needed
  ];
  const navigateToCourseDetails = (course) => {
    navigation.navigate("CourseDetails", {
      courseName: course.name,
      certificate: course.certificate,
      videoUrl: course.videoUrl,
    });
  };
  return (
    <View style={styles.container}>
      {/* Top bar with icons */}
      <View style={styles.topBar}>
        <Ionicons
          onPress={toggleMenu}
          name="menu-outline"
          size={30}
          color="black"
          style={[styles.icon, { marginTop: 30 }]}
        />
        <Ionicons
          name="trophy-outline"
          size={30}
          color="black"
          style={[styles.icon, { marginTop: 30 }]}
        />
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
        <View style={styles.content}>
          {/* Section: Popular Courses */}
          <View style={styles.courseSection}>
            <Text style={styles.sectionTitle}>Popular Courses</Text>
            <View style={styles.courseContainer}>
              {popularCoursesData.map((course) => (
                <TouchableOpacity
                  key={course.id}
                  style={{
                    width: "48%",
                    height: 159,
                    flexShrink: 0,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: "#B0CCFF",
                    backgroundColor: "#C9D2F2",
                    marginVertical: 10,
                    padding: 10,
                  }}
                  onPress={() =>
                    navigation.navigate("CourseDetails", {
                      courseName: course.name,
                      certificate: course.certificate,
                      videoUrl: course.videoUrl,
                    })
                  }
                >
                  <View style={styles.popularCourses}>
                    <Image source={course.image} style={styles.courseImage} />
                    <Text style={styles.courseName}>{course.name}</Text>
                    {course.modules && (
                      <Text
                        style={styles.courseDetails}
                      >{`${course.modules} Modules`}</Text>
                    )}
                    {course.tasks && (
                      <Text
                        style={styles.courseDetails}
                      >{`${course.tasks} Tasks`}</Text>
                    )}
                    {course.certificate && (
                      <Text style={styles.courseDetails}>
                        Certificate of completion
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Section: Recommended Courses */}
          <View style={styles.courseSection}>
            <Text style={styles.sectionTitle}>Recommended Courses</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.recommendedCoursesContainer}>
                {recommendedCoursesData.map((course) => (
                  <TouchableOpacity
                    key={course.id}
                    onPress={() => navigateToCourseDetails(course)}
                  >
                    <View style={styles.recommendedCourseCard}>
                      <Text style={styles.courseName}>{course.name}</Text>
                      {course.tasks && (
                        <Text
                          style={styles.courseDetails}
                        >{`${course.tasks} Tasks`}</Text>
                      )}
                      {course.certificate && (
                        <Text style={styles.courseDetails}>
                          Certificate of completion
                        </Text>
                      )}
                      {course.progress && (
                        <TouchableOpacity style={styles.continueLearningButton}>
                          <Text style={styles.continueLearningText}>
                            Continue Learning >>
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
          <View style={styles.courseSection}>
            <Text style={styles.sectionTitle}>Leaderboard</Text>
            {leaderboardData.map((winner) => (
              <View
                key={winner.id}
                style={[
                  styles.leaderboardCard,
                  { backgroundColor: winner.backgroundColor },
                ]}
              >
                <Image
                  source={winner.profilePicture}
                  style={styles.profilePicture}
                />
                <View style={styles.winnerDetails}>
                  <Text style={styles.winnerName}>{winner.name}</Text>
                  <Text style={styles.winnerPoints}>
                    {winner.points} Points
                  </Text>
                </View>
              </View>
            ))}
          </View>
          {/* Your remaining content */}
        </View>
      </ScrollView>

      {/* Fixed navigation bar at the bottom */}
      <View style={styles.navigationBar}>
        <View style={styles.navIconsContainer}>
          <TouchableOpacity>
            <View style={styles.navIconWrapper}>
              <View />
              <Ionicons
                onPress={() => navigation.navigate(Homepage)}
                name="home"
                size={25}
                color="#1A3567"
                style={styles.navIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              onPress={() => navigation.navigate(CaseId)} // Navigate to Thoughts screen
              name="apps"
              size={25}
              color="#1A3567"
              style={styles.navIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.lineAboveIcon}></View>
            <Ionicons
              onPress={() => navigation.navigate(Study)}
              name="book"
              size={25}
              color="#1A3567"
              style={styles.navIcon}
            />
            <Text style={styles.navLabel}>Book</Text>
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
      {menuVisible && <Menu navigation={<Study />} onClose={toggleMenu} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B0CCFF",
    width: "100%",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#B0CCFF", // Add the background color
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
    backgroundColor: "blue",
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
    marginBottom: 0,
  },
  navLabel: {
    color: "#1A3567",
    marginRight: 0,
    textAlign: "center",
  },
  courseSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#044AC8",
  },
  courseContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingRight: 12,
    marginTop: 5,
  },
  content: {
    marginLeft: 12,
  },
  popularCourses: {
    display: "flex",
    alignContent: "center",
  },
  courseCard: {
    width: "48%", // Change this to "48%" from "48.5%"
    height: 159,
    flexShrink: 0,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#B0CCFF",
    backgroundColor: "#C9D2F2",
    marginVertical: 10,
    padding: 10,
    display: "flex",
    alignItems: "center",
  },
  courseName: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 12,
    fontWeight: "700",
  },
  courseDetails: {
    color: "#000",
    textAlign: "center",
    //fontFamily: "Inter",
    fontSize: 9,
    fontWeight: "300",
  },
  progressTracker: {
    marginTop: 8,
  },
  courseImage: {
    width: "70%",
    // alignContent: "center",
    display: "flex",
    height: 70,
  },
  progressText: {
    color: "#106327",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 8,
    fontWeight: "300",
  },
  continueLearningText: {
    color: "#106327",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 8,
    fontStyle: "normal",
    fontWeight: "300",
  },
  recommendedCoursesContainer: {
    flexDirection: "row",
    // paddingLeft: ,
    paddingRight: 16,
  },
  recommendedCourseCard: {
    width: 205,
    height: 67,
    marginRight: 10,
    flexShrink: 0,
    borderRadius: 20,
    borderColor: "#FBD776",
    borderWidth: 1,
    backgroundColor: "rgba(251, 215, 118, 0.20)",
    padding: 10,
  },
  leaderboardCard: {
    width: "90%",
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 14,
    marginTop: 5,
  },
  profilePicture: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 10,
  },
  winnerDetails: {
    flex: 1,
  },
  winnerName: {
    color: "black",
    fontWeight: "bold",
    fontSize: 12,
  },
  winnerPoints: {
    color: "black",
    fontSize: 10,
  },
});

export default Study;
