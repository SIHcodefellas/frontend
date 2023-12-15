import React from "react";
import { useState, useEffect } from "react";
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
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you are using Expo for vector icons
import axios from "axios";
import Counsellorsearchpage from "./Counsellorsearchpage";
import { useNavigation } from "@react-navigation/native";
import CounsellorDashboard from "./CounsellorDashboard";
const section1Image = require("./download.png");
const profileimage = require("./download.png");

const handleMenuItemPress = () => {
  Linking.openURL(
    "https://mediafiles.botpress.cloud/de6bea04-ef7b-4815-8a03-6ff0f3753757/webchat/bot.html"
  );
};

const SquareSection = ({ image, text, onDetailsUpdatePress }) => {
  const handleSquarePress = () => {
    // Handle the press event, e.g., navigate to details page
    console.log(`This should navigate to the profile page of ${text}`);
    onDetailsUpdatePress(text); // Pass the name to the parent component
  };

  return (
    <TouchableOpacity style={styles.squareSection} onPress={handleSquarePress}>
      <Image source={image} style={styles.squareSectionImage} />
      <Text style={styles.squareSectionTitle}>{text}</Text>
      <TouchableOpacity
        style={styles.checkDetailsButton}
        onPress={onDetailsUpdatePress}
      >
        <Text style={styles.checkDetailsText}>Update Details</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const RectangularSection = ({ title, imageUrl, link }) => {
  const handleRectangularPress = () => {
    // Handle navigation logic here, e.g., open the link
    Linking.openURL(link);
  };

  return (
    <TouchableOpacity
      style={styles.rectangularSection}
      onPress={handleRectangularPress}
    >
      <View style={styles.rectangularContainer}>
        <Image source={{ uri: imageUrl }} style={styles.rectangularImage} />
        <View style={styles.textContainer}>
          <Text style={styles.rectangularText}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CounsellorHomepage = ({ route }) => {
  const { params } = route;
  const searchQuery = params ? params.searchQuery : "";
  const navigation = useNavigation();

  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterOptions, setFilterOptions] = useState([]);

  const [updateDetailsModalVisible, setUpdateDetailsModalVisible] =
    useState(false);
  const [nextCourtDate, setNextCourtDate] = useState("");
  const [court, setCourt] = useState("");
  const [judgeName, setJudgeName] = useState("");

  const handleUpdateDetailsPress = (squareName) => {
    setUpdateDetailsModalVisible(true);
    console.log(`Updating details for ${squareName}`);
  };

  const handleSendUpdateDetails = (squareSectionName) => {
    // Handle sending details to the respective square section
    console.log("Sending details:", {
      nextCourtDate,
      court,
      judgeName,
    });

    // Reset state values
    setNextCourtDate("");
    setCourt("");
    setJudgeName("");

    setUpdateDetailsModalVisible(false);
  };
  const handleCancelUpdateDetails = () => {
    setNextCourtDate("");
    setCourt("");
    setJudgeName("");

    setUpdateDetailsModalVisible(false);
  };

  const handleSearchPress = () => {
    // Navigate to the page of prisoners or perform any other action
    navigation.navigate(Counsellorsearchpage);
  };

  const handleFilterPress = () => {
    setFilterModalVisible(true);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFilterModalVisible(false);

    // Set filter options based on the selected category
    switch (category) {
      case "Lawyer":
        setFilterOptions(["Name", "Location", "Expertise", "Fees"]);
        break;
      case "ProBonoLawyer":
        setFilterOptions(["Name", "Location", "Expertise"]);
        break;
      case "Counsellors":
        setFilterOptions(["Name", "Location", "Gender"]);
        break;
      case "NGOs":
        setFilterOptions(["Name", "Location", "Services"]);
        break;
      case "UTCs":
        setFilterOptions(["Name", "Location"]);
        break;
      default:
        setFilterOptions([]);
    }
  };

  const rectangularSectionsData = [
    {
      id: "1",
      title: "Producing Undertrials To Court Physically...",
      imageUrl:
        "https://www.livelaw.in/h-upload/2023/10/26/750x450_500339-justice-bharati-dangre-and-bombay-hc.webp",
      link: "https://www.livelaw.in/high-court/bombay-high-court/bombay-high-court-undertrials-court-physically-cumbersome-vc-facility-presence-243535",
    },
    {
      id: "2",
      title: "Delhi High Court Upholds Restriction On MCOCA...",
      imageUrl:
        "https://www.livelaw.in/h-upload/2023/07/17/500x300_481540-mcoca-inmates-restricted-to-meet-family-members-only-delhi-high-court-upholds-authoritys-verdict.webp",
      link: "https://www.livelaw.in/high-court/delhi-high-court/delhi-high-court-restriction-mcoca-inmates-family-members-238895",
    },
    {
      id: "3",
      title: "Three Undertrial Prisoners Kept Together In Single...",
      imageUrl:
        "https://www.livelaw.in/h-upload/2021/07/18/500x300_396897-balancing-religious-freedoms-with-fundamental-right-to-electricity-calcutta-hc-approves-high-tension-transmission-line-above-the-christian-minority-land.jpeg",
      link: "https://www.livelaw.in/high-court/calcutta-high-court/calcutta-high-court-solitary-confinement-supreme-court-guidelines-untertrial-prisoners-235010",
    },
    {
      id: "4",
      title: '"Issues Of Undertrials Standing Stubborn Against..."',
      imageUrl:
        "https://www.livelaw.in/h-upload/2022/11/11/500x300_443732-justice-farjand-ali-rajasthan-high-court.jpg",
      link: "https://www.livelaw.in/news-updates/issues-undertrials-standing-stubborn-against-face-democracy-rajasthan-hc-grants-bail-ndpsaccused-jail-6yrs-213854",
    },
    {
      id: "5",
      title: "UAPA- Period Of Deprivation Of Personal Liberty...",
      imageUrl:
        "https://www.livelaw.in/h-upload/2021/09/10/500x300_400334-justice-ajay-rastogi-and-justice-abhay-s.jpg",
      link: "https://www.livelaw.in/top-stories/supreme-court-bail-uapa-deprivation-personal-liberty-186727",
    },
    {
      id: "6",
      title: "'There Is No End To These Demands': Delhi High...",
      imageUrl:
        "https://www.livelaw.in/h-upload/2020/05/11/500x300_374596-prison-jail-prisoner.jpg",
      link: "https://www.livelaw.in/news-updates/delhi-high-court-not-inclined-to-increase-mulaqaat-days-of-jail-inmates-delhi-prison-rule-185077",
    },
    {
      id: "7",
      title: "Delhi High Court Issues Directions To Ensure That...",
      imageUrl:
        "https://www.livelaw.in/h-upload/2021/08/20/500x300_398964-drt-and-delhi-hc.jpg",
      link: "https://www.livelaw.in/news-updates/delhi-high-court-directions-custody-undertrial-prisoner-not-extended-mechanically-183895",
    },
    {
      id: "8",
      title:
        "Denial Of Voting Rights To Undertrial Prisoners: An Unreasonable And...",
      imageUrl: "https://www.livelaw.in/h-upload/images/500x300_election.jpg",
      link: "https://www.livelaw.in/law-firms/law-firm-articles-/voting-rights-undertrial-prisoners-black-robes-legal-183859",
    },
    {
      id: "9",
      title: '"Whether Guidelines Can Be Extended To UTPs Facing Trial...',
      imageUrl: "https://www.livelaw.in/h-upload/images/500x300_jails.jpg",
      link: "https://www.livelaw.in/news-updates/whether-guidelines-extended-utps-facing-trial-offences-not-included-exclusion-clause-delhi-hc-180656",
    },
    {
      id: "10",
      title: "Undertrial Prisoners Don't Have Right To Dictate Choice Of ...",
      imageUrl:
        "https://www.livelaw.in/h-upload/2021/04/15/500x300_391910-nothing-but-a-clear-abuse-of-process-of-law-supreme-court-quashed-fir.jpg",
      link: "https://www.livelaw.in/news-updates/jk-hc-undertrial-prisoner-no-right-to-choose-prison-of-choice-177629",
    },
    {
      id: "11",
      title: "Undertrial Prisoners Charged With Riot Cases, UAPA, PMLA, Etc...",
      imageUrl:
        "https://www.livelaw.in/h-upload/2020/07/24/500x300_378817-chattisgarh-high-court.jpg",
      link: "https://www.livelaw.in/news-updates/chhattisgarh-high-court-no-interim-bail-undertrial-prisoners-riots-uapa-anti-national-activities-177248",
    },
    {
      id: "12",
      title: "Convict Awarded Sentence Lesser Than His Period Of...",
      imageUrl:
        "https://www.livelaw.in/h-upload/2020/05/11/500x300_374596-prison-jail-prisoner.jpg",
      link: "https://www.livelaw.in/news-updates/chhattisgarh-high-court-right-to-speedy-trial-convict-sentence-lesser-than-detention-as-undertrial-175964",
    },

    // Add more sections as needed
  ];

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
        <TouchableOpacity onPress={handleSearchPress}>
          <Ionicons name="search" size={30} style={styles.searchIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={handleFilterPress}
        >
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View>
            <Text style={styles.welcomeText}>
              Welcome, Counsellor! Explore your clients and notifications here.
            </Text>
          </View>
          <View style={styles.resourcesHeader}>
            <Text style={styles.smallheaders2}>Recent Clients</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.squareSectionsContainer}>
            {utps.slice(0, 2).map((utp) => (
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

                <TouchableOpacity
                  style={styles.checkDetailsButton}
                  onPress={handleUpdateDetailsPress}
                >
                  <Text style={styles.checkDetailsText}>Update Details</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>

          {/* Header for Chatbot */}
          <TouchableOpacity
            style={styles.chatbotHeader}
            onPress={() => handleMenuItemPress()}
          >
            <Text style={styles.knowYourRightsText}>
              Understand and Empathize with your clients with a smart Chatbot
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
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.livelaw.in/tags/undertrial-prisoners"
                )
              }
            >
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={rectangularSectionsData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <RectangularSection
                title={item.title}
                imageUrl={item.imageUrl}
                link={item.link}
              />
            )}
          />
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

      {/* // Update Details Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={updateDetailsModalVisible}
        onRequestClose={() => {
          setUpdateDetailsModalVisible(false);
        }}
      >
        <View style={styles.updateDetailsModalContainer}>
          <View style={styles.updateDetailsModalContent}>
            <Text style={styles.modalTitle}>Update Details</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Date"
              value={nextCourtDate}
              onChangeText={(text) => setNextCourtDate(text)}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Advice"
              value={court}
              onChangeText={(text) => setCourt(text)}
            />
            <TextInput
              style={styles.textbox}
              placeholder="Message"
              value={judgeName}
              onChangeText={(text) => setJudgeName(text)}
            />
            <View style={styles.updateDetailsButtonsContainer}>
              <TouchableOpacity
                style={styles.updateDetailsButton}
                onPress={handleSendUpdateDetails}
              >
                <Text style={styles.updateDetailsButtonText}>Send</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelUpdateDetailsButton}
                onPress={handleCancelUpdateDetails}
              >
                <Text style={styles.cancelUpdateDetailsButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CounsellorHomepage;

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
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    color: "#1A3567", // Adjust the color as needed
  },
  content: {
    padding: 16,
  },

  smallheaders2: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#044AC8",
    marginTop: 15,
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
  },
  squareSectionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    marginTop: 15,
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
    paddingBottom: 5,
  },

  squareSectionImage: {
    width: "60%",
    height: "60%",
    borderRadius: 80, // Use borderRadius: 50 for a circular image
    overflow: "hidden", // Add this line
    marginTop: 15,
  },

  squareSectionTitle: {
    color: "#1A3567",
  },

  // Add these styles to your existing styles object
  checkDetailsButton: {
    marginTop: 10,
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

  knowYourRightsText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#044AC8",
    marginTop: 25,
  },
  chatbotHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  chatbotIcon: {
    marginHorizontal: 10,
    marginTop: 20,
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
    marginVertical: 10,
  },
  rectangularContainer: {
    flex: 1,
    borderColor: "#1A3567",
    borderWidth: 2,
    flexDirection: "column", // Stack image and text vertically
    backgroundColor: "rgba(4, 74, 200, 0.7)", // Adjust the alpha channel (0.7 for 70% transparency)
  },
  rectangularImage: {
    flex: 1,
    width: "100%",
    height: "50%", // Adjust the height based on your design
    resizeMode: "cover",
  },
  textContainer: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20%",
  },
  rectangularText: {
    fontSize: 16,
    fontWeight: "normal",
    color: "#fff",
  },
  randomOneLiner: {
    fontSize: 14,
    color: "#6B6B6B",
    marginTop: 8,
  },

  navigationBar: {
    backgroundColor: "#B0CCFF", // Change this to your preferred color
    padding: 7,
  },
  navIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
  lineAboveIcon: {
    backgroundColor: "#1A3567",
    height: 2,
    width: 30,
    marginBottom: 5,
  },
  navIconWrapper: {
    alignItems: "center", // Add this line to center the icon and text vertically
  },
  navIcon: {
    marginBottom: 0,
  },
  navLabel: {
    color: "#1A3567",
    marginTop: 3, // Adjust the marginTop to vertically align the text with the icon
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

  // Styles for the Update Details Modal
  updateDetailsModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  updateDetailsModalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  textbox: {
    height: 80, // Adjust the height as needed
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  updateDetailsButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  updateDetailsButton: {
    backgroundColor: "#1A3567",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
  },
  updateDetailsButtonText: {
    color: "white",
    textAlign: "center",
  },
  cancelUpdateDetailsButton: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
  },
  cancelUpdateDetailsButtonText: {
    color: "white",
    textAlign: "center",
  },
});
