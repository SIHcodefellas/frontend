import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native"; // Import the navigation hook
import { Bullet } from "react-native-elements";
import SchedulePage from "./SchedulePage";
import axios from "axios";
import CounsellorHomepage from "./CounsellorHomepage";
const profileimage = require("./download.png");

LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
};

LocaleConfig.defaultLocale = "en";

const CounsellorDashboard = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [uploadedDocument, setUploadedDocument] = useState(null);
  const navigation = useNavigation();

  const onDayPress = (day) => {
    // Handle the selected date
    navigation.navigate("SchedulePage", { selectedDate: day.dateString });
    setSelectedDate(day.dateString);
  };

  const handleUploadDocument = async () => {
    // Implement document upload logic here
    // You can use libraries like DocumentPicker or react-native-document-picker
    // to allow users to pick documents from their device
    // For simplicity, I'm setting a dummy document name here
    const documentName = "LegalDocument.pdf";
    setUploadedDocument(documentName);
  };

  const Bullet = ({ text }) => (
    <View style={{ flexDirection: "row", marginBottom: 5 }}>
      <Text style={styles.bulletPoint}>•</Text>
      <Text style={styles.boldText}>{text}</Text>
    </View>
  );

  const [utps, setutps] = useState([]);
  useEffect(() => {
    const fetchutps = async () => {
      try {
        const response = await axios.get(
          "http://192.168.0.104:3001/utpProfile"
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
      {/* Top bar with icons */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons
            name="menu-outline"
            size={30}
            color="black"
            style={[styles.icon, { marginTop: 30 }]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="notifications-outline"
            size={30}
            color="black"
            style={[styles.icon, { marginTop: 30 }]}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.Dashboard}>Dashboard</Text>

      {/* ScrollView with white background */}
      <ScrollView style={styles.scrollView}>
        {/* First view with Calendar */}
        <View>
          <View style={styles.calendarView}>
            <Text style={styles.courtScheduleText}>Your Schedule</Text>
            <Calendar
              style={styles.calendar}
              onDayPress={onDayPress}
              markedDates={{ [selectedDate]: { selected: true, marked: true } }}
            />
          </View>
        </View>

        {/* Second view with Overview */}
        <View style={styles.overviewView}>
          <Text style={styles.overviewHeader}>Your current clients</Text>
          <View style={styles.squareSectionsContainer}>
            {utps.slice(0, 5).map((utp) => (
              <TouchableOpacity
                key={utp._id}
                style={styles.squareSection}
                onPress={() => {
                  navigation.navigate({ utpData: utp });
                  // console.log(utp);
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

      {/* Navigation bar */}
      <View style={styles.navigationBar}>
        {/* Navigation icons */}
        <View style={styles.navIconsContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(CounsellorHomepage)}
          >
            <Ionicons
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
                name="apps"
                size={25}
                color="#1A3567"
                style={styles.navIcon}
              />
              <Text style={styles.navLabel}>Dashboard</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <SchedulePage selectedDate={selectedDate} /> */}
      </View>
      {/* Add your navigation bar items here */}
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
  Dashboard: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  scrollView: {
    flex: 1,
    backgroundColor: "#B0CCFF",
  },
  calendarView: {
    padding: 16,
    backgroundColor: "#E4EEFF",
    borderRadius: 20,
    marginVertical: 10,
  },
  courtScheduleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  calendar: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 13,
  },
  overviewView: {
    padding: 16,
    backgroundColor: "#E4EEFF",
    borderRadius: 20,
    marginVertical: 10,
  },
  overviewHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  boldText: {
    fontWeight: "bold",
    fontSize: 17,
  },

  normalText: {
    fontSize: 17,
  },

  uploadDocumentsView: {
    padding: 16,
    backgroundColor: "#E4EEFF",
    borderRadius: 20,
    marginVertical: 10,
  },
  uploadDocumentsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  uploadButton: {
    backgroundColor: "#B0CC30",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  uploadButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  uploadedDocumentView: {
    flexDirection: "row",
    alignItems: "center",
  },
  uploadedDocumentText: {
    marginLeft: 10,
  },

  lawyerCourtDetailsView: {
    padding: 16,
    backgroundColor: "#E4EEFF",
    borderRadius: 20,
    marginVertical: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  bulletPoint: {
    marginRight: 5,
    fontSize: 20,
  },

  caseHistoryView: {
    padding: 16,
    backgroundColor: "#E4EEFF",
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 60,
  },

  squareSectionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    marginTop: 15,
    marginBottom: 90,
  },
  squareSection: {
    width: "45%",
    aspectRatio: 1,
    backgroundColor: "white",
    borderColor: "#1A3567",
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    overflow: "hidden", // Add this line
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 15,
  },

  squareSectionImage: {
    width: "50%",
    height: "50%",
    borderRadius: 80, // Use borderRadius: 50 for a circular image
    overflow: "hidden", // Add this line
    marginTop: 15,
  },

  squareSectionTitle: {
    color: "#1A3567",
  },

  // Add these styles to your existing styles object
  checkDetailsButton: {
    marginTop: 5,
    backgroundColor: "#044AC8",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: "stretch",
    alignItems: "center",
    marginBottom: 5,
  },
  checkDetailsText: {
    color: "white",
    fontWeight: "bold",
  },

  navigationBar: {
    backgroundColor: "#B0CCFF", // Change this to your preferred color
    padding: 7,
    borderWidth: 0.5,
    borderColor: "#1A3567",
  },
  navIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navIconWrapper: {
    alignItems: "center",
  },
  lineAboveIcon: {
    backgroundColor: "#1A3567",
    height: 2,
    width: 25,
    marginBottom: 5,
  },
  navIcon: {
    marginBottom: 0, // Adjust the margin as needed
  },
  navLabel: {
    color: "#1A3567",
    textAlign: "center",
  },
});

export default CounsellorDashboard;
