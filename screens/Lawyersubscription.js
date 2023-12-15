import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
//import Carousel, { Pagination } from "react-native-snap-carousel";
import LawyerHomepage from "./LawyerHomepage";
import LawyerDashboard from "./LawyerDashboard";
import { ScrollView } from "react-native";

const Lawyersubscription = () => {
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = useState(0);

  const subscriptionData = [
    {
      price: "Rs. 0",
      features: [
        "Easy access to our wide range of database",
        "Chatbot to help you understand laws deeply",
        "Gain detailed knowledge on your cases",
      ],
      style: styles.carouselItemBlue,
      buttonLabel: "Go to Homepage",
      destination: "LawyerHomepage",
    },
    {
      price: "Rs. 200",
      features: [
        "Easy access to our wide range of database",
        "Chatbot to help you understand laws deeply",
        "Gain detailed knowledge on your cases",
        "A wide range of paid clients",
      ],
      style: styles.carouselItemYellow,
      buttonLabel: "Subscribe Now",
      link: "https://paytm.com/",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={[styles.carouselItem, item.style]}>
      <Text style={styles.planPrice}>{item.price}</Text>
      <View style={styles.line} />
      <Text style={styles.featuresTitle}>What you get:</Text>
      {item.features.map((feature, index) => (
        <Text key={index} style={styles.feature}>
          ➢ {feature}
        </Text>
      ))}
      <TouchableOpacity
        style={styles.subscribeButton}
        onPress={() => {
          if (item.link) {
            // If a link is provided, open it
            Linking.openURL(item.link);
          } else if (item.destination) {
            // If a destination is provided, navigate within the app
            navigation.navigate(item.destination);
          }
        }}
      >
        <Text style={styles.buttonText}>{item.buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topBar}>
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={30} color="#1A3567" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={30} color="#1A3567" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headertext}>
          Subscribe to get acess to our premium features
        </Text>
      </View>

      <ScrollView style={styles.scrollview}>
        <Carousel
          data={subscriptionData}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={300}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <Pagination
          dotsLength={subscriptionData.length}
          activeDotIndex={activeSlide}
          dotStyle={styles.dotStyle}
          containerStyle={styles.paginationContainer}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </ScrollView>

      {/* Fixed navigation bar at the bottom */}
      <View style={styles.navigationBar}>
        <View style={styles.navIconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate(LawyerHomepage)}>
            <View style={styles.navIconWrapper}>
              <View />
              <Ionicons
                name="home"
                size={25}
                color="#1A3567"
                style={styles.navIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(LawyerDashboard)}
          >
            <Ionicons
              name="apps"
              size={25}
              color="#1A3567"
              style={styles.navIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.navIconWrapper}>
              <View style={styles.lineAboveIcon} />
              <Ionicons
                name="card-outline"
                size={25}
                color="#1A3567"
                style={styles.diamondIcon}
              />
              <Text style={styles.navLabel}>Subscribe</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
  },
  scrollview: {
    backgroundColor: "white",
  },
  headertext: {
    fontSize: 20,
    color: "#044AC8",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  carouselItem: {
    width: "83%",
    height: "96%",
    padding: 20,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#1A3567",
    marginLeft: 50,
    marginRight: 0,
    marginBottom: 50,
  },
  carouselItemBlue: {
    backgroundColor: "#F9F9F9",
    shadowColor: "#1A3567",
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 8,
    borderWidth: 3,
    borderColor: "#1A3567",
  },
  carouselItemYellow: {
    backgroundColor: "#edce82",
    shadowColor: "#FFD700",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 8,
    borderWidth: 3,
    borderColor: "#1A3567",
  },
  planPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A3567",
    marginBottom: 10,
    textAlign: "center",
    top: "5%",
  },
  line: {
    height: 2,
    backgroundColor: "#1A3567",
    marginBottom: 10,
    marginTop: 30,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A3567",
    marginTop: 10,
    textAlign: "center",
  },
  feature: {
    fontSize: 16,
    color: "#1A3567",
    marginBottom: 5,
    textAlign: "justify",
    marginTop: 20,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#1A3567",
  },
  paginationContainer: {
    marginTop: -20,
  },
  navigationBar: {
    backgroundColor: "#B0CCFF",
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
    alignItems: "center",
  },
  navIcon: {
    marginBottom: 0,
  },
  navLabel: {
    color: "#1A3567",
    marginTop: 3,
  },
  subscribeButton: {
    backgroundColor: "#1A3567",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: "center",
    display: "flex",
    position: "absolute",
    bottom: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Lawyersubscription;
