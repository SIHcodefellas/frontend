import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

const CourseDetails = ({ route }) => {
  const { courseName, videoUrl } = route.params;
  const videoRef = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [currentView, setCurrentView] = React.useState("playlist");
  const sampleDescription = {
    overview:
      "This course covers the basics of mathematics, starting with an introduction...",
    targetAudience:
      "This course is suitable for beginners and anyone interested in building a strong foundation in mathematics.",
    prerequisites:
      "No specific prerequisites are required. Enthusiasm to learn is all you need!",
  };
  const playlistTopics = [
    {
      id: 1,
      name: "Introduction",
      timeToComplete: "5 mins",
    },
    {
      id: 2,
      name: "Real Number System",
      timeToComplete: "10 mins",
    },
    // Add more topics as needed
  ];

  const toggleView = (view) => {
    setCurrentView(view);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.courseName}>{courseName}</Text>
      {/* Video with rounded corners and gradient overlay */}
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          style={styles.video}
          source={videoUrl}
          useNativeControls // Enable native controls
          resizeMode="contain"
          isLooping
          shouldPlay
          onPlaybackStatusUpdate={(newStatus) => {
            console.log("New Playback Status: ", newStatus);
            setStatus(() => newStatus);
          }}
        />
      </View>

      {/* Course Name at the top */}

      {/* Content container with subtle border */}
      <View style={styles.contentContainer}>
        {/* Toggle buttons for Playlist and Description */}
        <View style={styles.toggleButtonsContainer}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              currentView === "playlist" && styles.activeButton,
            ]}
            onPress={() => toggleView("playlist")}
          >
            <Text
              style={[
                styles.toggleButtonText,
                currentView === "playlist" && styles.activeButtonText,
              ]}
            >
              Playlist
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.toggleButton,
              currentView === "description" && styles.activeButton,
            ]}
            onPress={() => toggleView("description")}
          >
            <Text
              style={[
                styles.toggleButtonText,
                currentView === "description" && styles.activeButtonText,
              ]}
            >
              Description
            </Text>
          </TouchableOpacity>
        </View>

        {/* Display Playlist or Description based on the current view */}
        <ScrollView style={styles.contentScrollView}>
          {currentView === "playlist" ? (
            <View style={styles.playlistContainer}>
              {playlistTopics.map((topic) => (
                <TouchableOpacity key={topic.id} style={styles.topicContainer}>
                  <View style={styles.topicCard}>
                    <Ionicons name="play" size={30} color="#fff" />
                    <View style={styles.topicDetails}>
                      <Text style={styles.topicName}>{topic.name}</Text>
                      <Text style={styles.timeToComplete}>
                        {topic.timeToComplete}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>
                {sampleDescription.overview}
                {"\n\n"}
                Target Audience: {sampleDescription.targetAudience}
                {"\n\n"}
                Prerequisites: {sampleDescription.prerequisites}
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  videoContainer: {
    borderRadius: 5,
    // overflow: "hidden",
    width: "100%",
    marginBottom: 20,
    // height: 200,
  },
  video: {
    alignSelf: "stretch",
    height: 200,
    borderRadius: 30,
  },
  courseName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    width: "100%", // Set the width explicitly
    marginTop: 20,
    marginBottom: 10,
    color: "#1A3567", // Primary color
  },

  contentContainer: {
    flex: 1,
    padding: 16,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderColor: "#B0CCFF", // Primary color
    borderWidth: 1,
    backgroundColor: "#f7f9fa", // Very Light Gray
    width: "100%",
  },
  toggleButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1A3567",
  },
  toggleButtonText: {
    fontSize: 16,
    color: "#1A3567",
  },
  activeButton: {
    backgroundColor: "#B0CCFF",
  },
  activeButtonText: {
    color: "#1A3567",
  },
  contentScrollView: {
    flex: 1,
  },
  playlistContainer: {
    marginTop: 20,
  },
  topicContainer: {
    marginBottom: 10,
  },
  topicCard: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#B0CCFF",
    padding: 15,
  },
  topicDetails: {
    marginLeft: 10,
  },
  topicName: {
    fontSize: 18,
    color: "#1A3567",
  },
  timeToComplete: {
    fontSize: 14,
    color: "#1A3567",
    marginTop: 5,
  },
  descriptionContainer: {
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: "#454545",
  },
});

export default CourseDetails;
