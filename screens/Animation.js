import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import StartingPage from "./StartingPage";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";
const Animation = () => {
  const [currentImage, setCurrentImage] = useState(require("./img.png"));
  const navigation = useNavigation();
  const [displayText, setDisplayText] = useState(
    "Empowering You for a Better Tomorrow..."
  );
  const fadeAnimation = new Animated.Value(1);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const changeImageTimeout = setTimeout(() => {
      let nextImage, nextText;

      if (currentImage === require("./img.png")) {
        nextImage = require("./img2.png");
        nextText = "Empowering You for a Better Tomorrow...";
      } else if (currentImage === require("./img2.png")) {
        nextImage = require("./img3.png");
        nextText = "Reuniting Hearts, One Moment at a Time...";
      } else if (currentImage === require("./img3.png")) {
        nextImage = require("./img4.png");
        nextText = "Each Moment is a Step Toward Renewal...";
      } else {
        // Display the button after the fourth image
        setShowButton(true);
        return;
      }

      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 50, // Faster fade-out animation (adjust as needed)
        useNativeDriver: false,
      }).start(() => {
        setCurrentImage(nextImage);
        setDisplayText(nextText);

        Animated.timing(fadeAnimation, {
          toValue: 1,
          duration: 550, // Faster fade-in animation (adjust as needed)
          useNativeDriver: false,
        }).start();
      });
    }, 500); // Change image every 8 seconds (adjust as needed)

    return () => clearTimeout(changeImageTimeout); // Clear the timeout on component unmount
  }, [currentImage, fadeAnimation]);

  const handleButtonClick = () => {
    // Add logic for what happens when the button is clicked
    // For example, you can reset the component state or navigate to a new screen
    console.log("Button Clicked");
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={currentImage}
        style={[styles.image, { opacity: fadeAnimation }]}
      />
      <Animated.Text style={[styles.description, { opacity: fadeAnimation }]}>
        {displayText}
      </Animated.Text>

      {showButton && (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#B0CCFF" }]}
          onPress={() => navigation.navigate(ProfilePage)}
        >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B0CCFF",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 373,
    height: 311,
    resizeMode: "contain",
  },
  description: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "700",
    color: "#044AC8",
  },
  button: {
    position: "absolute",
    bottom: 80,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    Color: "#42ADE2",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "1A3567",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A3567",
  },
});

export default Animation;
