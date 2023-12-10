import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CommentScreen from "./CommentScreen";
const Back = require("./Back.png");
const Ngo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const phoneNumber = "9136279324";
  const emailAddress = "arnavlegalaid@yahoo.com";
  const locationAddress = "Bengaluru, India";

  const handleCallPress = () => {
    Linking.openURL("tel:${phoneNumber}");
  };
  const handlelinkPress = () => {
    Linking.openURL("http://www.prayas-india.org/");
  };

  const handleLocationPress = () => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        locationAddress
      )}`
    );
  };

  const handleMeetSchedule = () => {
    Linking.openURL("https://calendly.com/miss-riyajaiswal251003/30min");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.profileContainer, styles.curveBackground]}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => navigation.goBack()}
          >
            <Image source={Back} style={styles.backButton}></Image>
          </TouchableOpacity>
          <Image
            style={styles.profileImage}
            source={{
              uri: "https://th.bing.com/th/id/OIP.c0f0j4XqES4hqpOQG9XgcAHaHb?rs=1&pid=ImgDetMain",
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.profileText}>Pragyas NGO</Text>
            <TouchableOpacity
              style={styles.callContainer}
              onPress={handleCallPress}
            >
              <MaterialIcons name="call" size={22} color="black" />
              <Text style={styles.CallText}>9136279324</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.callContainer}
              onPress={handlelinkPress}
            >
              <MaterialIcons name="link" size={22} color="black" />
              <Text style={styles.CallText} numberOfLines={1}>
                http://www.prayas-india.org/
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.callContainer}
              // onPress={handleCallPress}
            >
              <MaterialIcons name="access-time" size={22} color="black" />
              <Text style={styles.CallText}>8.00 am- 10.00 pm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.callContainer}
              onPress={handleLocationPress}
            >
              <MaterialIcons name="location-on" size={22} color="black" />
              <Text style={styles.CallText}>Bengaluru</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.centerButton]}
              onPress={handleMeetSchedule}
            >
              <Text style={styles.buttonText}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.bigText}>
            Non-Government Organization that is considerably financed directly
            or indirectly by government funding generally falls within the
            regime of “public authority” under the Right to Information (RTI)
            Act, 2005.
          </Text>
        </View>
        <Text style={styles.ConHeader}>Past Works</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.workContainer}>
            <View style={styles.workC}>
              <Image
                style={styles.workImage}
                source={{
                  uri: "https://th.bing.com/th/id/OIP.37Iq6eMGbG3v0jCU3TLqbgHaEK?rs=1&pid=ImgDetMain",
                }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.workC}>
              <Image
                style={styles.workImage}
                source={{
                  uri: "https://cpd.org.bd/wp-content/uploads/2018/04/NGO2-1024x597.jpg",
                }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.workC}>
              <Image
                style={styles.workImage}
                source={{
                  uri: "https://th.bing.com/th/id/R.b6b7014f92b27891ad04df1615f1478c?rik=KTeG09ylxAe2Jg&riu=http%3a%2f%2fprayaseducation.in%2fwp-content%2fuploads%2f2019%2f09%2fwhy-prayas-profile-1568x791.jpg&ehk=VhHjrHvBzn5eCiUCawtoIIS2U8%2fA08Pq%2fUU0SobKy2s%3d&risl=&pid=ImgRaw&r=0",
                }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.workC}></View>
          </View>
        </ScrollView>
        <Text style={styles.ConHeader}>User reviews</Text>
        <TouchableOpacity
          style={[styles.submitButton, styles.centerButton]}
          onPress={() => navigation.navigate(CommentScreen)}
        >
          <Text style={styles.submitButtonText}>Add Review</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: -30,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  back: {
    position: "absolute",
    left: 20,
    top: 10,
  },
  backButton: {
    width: 25,
    height: 25,
    padding: 1,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
    marginLeft: -5,
    marginTop: 25,
  },
  profileText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#044AC8",
  },
  callContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  CallText: {
    fontSize: 15,
    color: "black",
    marginLeft: 8,
  },
  button: {
    backgroundColor: "#044AC8",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 10,
    marginRight: 30,
  },
  centerButton: {
    backgroundColor: "#044AC8",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  bigText: {
    fontSize: 16,
    color: "#1A3567",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  ConHeader: {
    fontSize: 20,
    color: "#1A3567",
    fontWeight: "bold",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  workContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  workC: {
    width: 200,
    height: 180,
    borderRadius: 8,
    borderWidth: 2,
    marginRight: 10,
    overflow: "hidden",
  },
  workImage: {
    flex: 1,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: "#B0CCFF",
    padding: 5,
    borderRadius: 4,
    alignItems: "center",
    marginTop: 16,
    marginRight: 100,
    marginLeft: 100,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
  },
  curveBackground: {
    backgroundColor: "#B0CCFF",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    paddingBottom: 16,
  },
});

export default Ngo;
