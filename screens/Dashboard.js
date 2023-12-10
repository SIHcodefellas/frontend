import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Calendar, LocaleConfig } from "react-native-calendars";
// import { LinearGradient } from 'expo-linear-gradient';
import { Bullet } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import HomeNgo from "./HomeNgo";
import Homepage from "./Homepage";
import Wellbeing from "./Wellbeing";
import Study from "./Study";
import Menu from "./Menu";
import NotificationPage from "./NotificationPage";

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

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [uploadedDocument, setUploadedDocument] = useState(null);
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const onDayPress = (day) => {
    // Handle the selected date
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

  return (
    <View style={styles.container}>
      {/* Top bar with icons */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Ionicons
            onPress={toggleMenu}
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

      <Text style={styles.Dashboard}>Dashboard</Text>

      <Text style={styles.caseid}>Case ID: 208</Text>

      {/* ScrollView with white background */}
      <ScrollView style={styles.scrollView}>
        {/* First view with Calendar */}
        <View>
          <View style={styles.calendarView}>
            <Text style={styles.courtScheduleText}>Court Schedule</Text>
            <Calendar
              style={styles.calendar}
              onDayPress={onDayPress}
              markedDates={{ [selectedDate]: { selected: true, marked: true } }}
            />
          </View>
        </View>

        {/* Second view with Overview */}
        <View style={styles.overviewView}>
          <Text style={styles.overviewHeader}>Overview</Text>
          <Text style={styles.normalText}>
            <Text style={styles.boldText}>Custody Date:</Text> October 15, 2022
          </Text>
          <Text style={styles.normalText}>
            <Text style={styles.boldText}>Days in Detention:</Text> 60 Days
          </Text>
          <Text style={styles.normalText}>
            <Text style={styles.boldText}>Next Court Date:</Text> December 19,
            2022
          </Text>
          <Text style={styles.normalText}>
            <Text style={styles.boldText}>Court Status:</Text> Under Review
          </Text>
        </View>

        {/* Third view for Upload Legal Documents */}
        <View style={styles.uploadDocumentsView}>
          <Text style={styles.uploadDocumentsHeader}>
            Upload Legal Documents
          </Text>
          <TouchableOpacity onPress={handleUploadDocument}>
            <View style={styles.uploadButton}>
              <Text style={styles.uploadButtonText}>
                Click to Upload Document
              </Text>
            </View>
          </TouchableOpacity>
          {uploadedDocument && (
            <View style={styles.uploadedDocumentView}>
              <Text style={styles.uploadedDocumentText}>
                {uploadedDocument}
              </Text>
              {/* You can add an icon or additional styling here */}
            </View>
          )}
        </View>

        {/* Fourth view with Lawyer & Court Details */}
        <View style={styles.lawyerCourtDetailsView}>
          <Text style={styles.sectionHeader}>Lawyer & Court Details</Text>
          <Text style={styles.normalText}>
            <Text style={styles.boldText}>Assigned Lawyer:</Text> Ram Jethmalani
          </Text>
          <Text style={styles.normalText}>
            <Text style={styles.boldText}>Court:</Text> Supreme Court Of India
          </Text>
          <Text style={styles.normalText}>
            <Text style={styles.boldText}>Judge:</Text> Hon'ble Justice Ashok
            Bhushan
          </Text>
        </View>

        {/* Fifth view with Case History */}
        <View style={styles.caseHistoryView}>
          <Text style={styles.sectionHeader}>Case History</Text>
          <Bullet text="Nov 5, 2022: Case Registration" />
          <Bullet text="Nov 20, 2022: First Hearing" />
          <Bullet text="Dec 5, 2022: Evidence Submission" />
        </View>
      </ScrollView>

      {/* Navigation bar */}
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
            <View style={styles.navIconWrapper}>
              <View style={styles.lineAboveIcon} />
              <Ionicons
                onPress={() => navigation.navigate(Dashboard)}
                name="apps"
                size={25}
                color="#1A3567"
                style={styles.navIcon}
              />
              <Text style={styles.navLabel}>Profile</Text>
            </View>
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
      {menuVisible && <Menu navigation={<Dashboard />} onClose={toggleMenu} />}
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
  caseid: {
    textAlign: "right",
    marginRight: 20,
    fontSize: 20,
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
    borderWidth: 1,
    borderColor: "Lightskyblue",
    borderStyle: "solid",
    // backgroundColor: "transparent",
    overflow: "hidden",
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
    borderWidth: 1,
    borderColor: "Lightskyblue",
    borderStyle: "solid",
    // backgroundColor: "transparent",
    overflow: "hidden",
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
    fontFamily: "interSemiBold",
  },

  normalText: {
    fontSize: 17,
    fontFamily: "interMedium",
  },

  uploadDocumentsView: {
    padding: 16,
    backgroundColor: "#E4EEFF",
    borderRadius: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "Lightskyblue",
    borderStyle: "solid",
    // backgroundColor: "transparent",
    overflow: "hidden",
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
    borderWidth: 1,
    borderColor: "Lightskyblue",
    borderStyle: "solid",
    // backgroundColor: "transparent",
    overflow: "hidden",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "interMedium",
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
    borderWidth: 1,
    borderColor: "Lightskyblue",
    borderStyle: "solid",
    // backgroundColor: "transparent",
    overflow: "hidden",
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
export default Dashboard;
