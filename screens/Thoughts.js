import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Menu from "./Menu";
import Wellbeing from "./Wellbeing";
import Homepage from "./Homepage";
import NotificationPage from "./NotificationPage";
import Dashboard from "./Dashboard";
import Study from "./Study";
import CaseId from "./CaseId";

const facts = [
  "Writing down thoughts enhances mental clarity and helps organize ideas.",
  "Regular journaling is linked to reduced stress levels and improved overall well-being.",
  "Putting thoughts on paper can facilitate problem-solving by providing a clearer perspective.",
  "Journaling serves as a healthy outlet for expressing and managing emotions.",
  "The act of writing aids memory retention and recall of important details.",
  "Keeping a thought journal can stimulate creativity and innovative thinking.",
  "Writing allows for self-reflection, fostering personal growth and self-awareness.",
  "Documenting aspirations and goals increases the likelihood of achieving them.",
  "Journals act as a personal time capsule, capturing moments and experiences.",
  "Writing down thoughts has therapeutic effects, promoting mental and emotional healing.",
];

const getRandomFact = () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  return facts[randomIndex];
};
const JournalBox = ({ onSave }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");

  const handleJournalPress = () => {
    setModalVisible(true);
  };

  const handleSave = () => {
    onSave({ date, topic, content });
    setModalVisible(false);
    setDate("");
    setTopic("");
    setContent("");
  };
  return (
    <View>
      <TouchableOpacity style={styles.journalBox} onPress={handleJournalPress}>
        <Text style={styles.journalText}>+</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Journal Entry</Text>
          <TextInput
            style={styles.modalInput}
            placeholder="Date"
            value={date}
            onChangeText={(text) => setDate(text)}
          />
          <TextInput
            style={styles.modalInput}
            placeholder="Topic/Subject"
            value={topic}
            onChangeText={(text) => setTopic(text)}
          />
          <TextInput
            style={styles.largerModalInput}
            placeholder="Write your thoughts here..."
            multiline
            textAlignVertical="top"
            value={content}
            onChangeText={(text) => setContent(text)}
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const Thoughts = () => {
  const [randomFact, setRandomFact] = useState("");
  const [journalEntries, setJournalEntries] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleSaveEntry = (entry) => {
    setJournalEntries([...journalEntries, entry]);
  };

  const handleDeleteEntry = (index) => {
    const updatedEntries = [...journalEntries];
    updatedEntries.splice(index, 1);
    setJournalEntries(updatedEntries);
  };

  const handleEditEntry = (index) => {
    // Implement edit functionality if needed
    // You might want to open the modal with the selected entry's data for editing
  };

  const onCancelEdit = () => {
    setEditIndex(undefined);
  };

  useEffect(() => {
    const fact = getRandomFact();
    setRandomFact(fact);
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons
            name="menu-outline"
            size={30}
            color="black"
            style={[styles.icon, { marginTop: 30 }]}
          />
        </TouchableOpacity>

        <Ionicons
          onPress={() => navigation.navigate(NotificationPage)}
          name="notifications-outline"
          size={30}
          color="black"
          style={[styles.icon, { marginTop: 30 }]}
        />
      </View>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Did you know?</Text>
        <Text style={styles.randomFact}>{randomFact}</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.scrollViewcontainer}>
          <JournalBox onSave={handleSaveEntry} />
          {journalEntries.map((entry, index) => (
            <View key={index} style={styles.savedEntry}>
              <Text>Date: {entry.date}</Text>
              <Text>Topic/Subject: {entry.topic}</Text>
              <Text>Thoughts: {entry.content}</Text>

              <View style={styles.entryButtons}>
                <TouchableOpacity
                  style={[
                    styles.editDeleteButton,
                    { backgroundColor: "green" },
                  ]}
                  onPress={() => handleEditEntry(index)}
                >
                  <Text style={styles.editDeleteButtonText}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.editDeleteButton, { backgroundColor: "red" }]}
                  onPress={() => handleDeleteEntry(index)}
                >
                  <Text style={styles.editDeleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.navigationBar}>
        {/* Navigation icons */}
        <View style={styles.navIconsContainer}>
          <TouchableOpacity>
            <Ionicons
              onPress={() => navigation.navigate(Homepage)} // Navigate to Thoughts screen
              name="home"
              size={25}
              color="#1A3567"
              style={styles.navIcon}
            />
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
            <Ionicons
              onPress={() => navigation.navigate(Study)} // Navigate to Thoughts screen
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
                onPress={() => navigation.navigate(Wellbeing)} // Navigate to Thoughts screen
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
  randomFact: {
    marginHorizontal: 18,
    fontSize: 15,
    marginVertical: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: "#044AFF",
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
    backgroundColor: "#0461FF",
    borderColor: "#0461FF",
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 0,
    padding: 10,
    width: 50,
    marginTop: 10,
  },

  journalText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },

  modalInput: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    borderColor: "#1A3567",
    borderWidth: 3,
    borderRadius: 8,
    marginBottom: 16,
    padding: 10,
  },

  largerModalInput: {
    width: "80%",
    height: 120, // Updated height for larger textbox
    backgroundColor: "white",
    borderColor: "#1A3567",
    borderWidth: 3,
    borderRadius: 8,
    marginBottom: 16,
    padding: 10,
  },

  saveButton: {
    backgroundColor: "#1A3567",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },

  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  closeButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 8,
  },

  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  savedEntry: {
    backgroundColor: "white",
    borderColor: "#1A3567",
    borderWidth: 3,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  entryButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 5,
  },

  editDeleteButton: {
    padding: 8,
    borderRadius: 8,
    marginLeft: 10,
  },

  editDeleteButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Thoughts;
