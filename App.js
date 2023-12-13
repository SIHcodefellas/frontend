import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Homepage from "./screens/Homepage";
import Study from "./screens/Study";
//import Menu from "./screens/Menu";
//import Thoughts from "./screens/Thoughts";
//import Wellbeing from "./screens/Wellbeing";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Wellbeing from "./screens/Wellbeing";
import Thoughts from "./screens/Thoughts";
import HomeProbono from "./screens/HomeProbono";
import HomeLawyer from "./screens/HomeLawyer";
import HomeNgo from "./screens/HomeNgo";
import Homelegalclinics from "./screens/Homelegalclinics";
import NotificationPage from "./screens/NotificationPage";
import MyComponent from "./screens/law";
import CourseDetails from "./components/CourseDetails";
import Dashboard from "./screens/Dashboard";
import HomeUTRC from "./screens/HomeUTRC";
import StartingPage from "./screens/StartingPage";
import Ngo from "./screens/Ngo";
import CommentScreen from "./screens/CommentScreen";
import CaseId from "./screens/CaseId";
import LawyerRegistration from "./screens/LawyerRegistration";
import NGORegistration from "./screens/LawyerRegistration";
import LoginPage from "./screens/LoginPage";
import ProBonoRegistration from "./screens/ProBonoRegistration";
import UTPRegistration from "./screens/UTPRegistration";

import CounsellorRegistration from "./screens/CounsellorRegistration";
import Animation from "./screens/Animation";
const Stack = createStackNavigator();

//mport CourseDetails from "./components/CourseDetails";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Animation" component={Animation} />
        <Stack.Screen name="StartingPage" component={StartingPage} />
        <Stack.Screen
          name="LawyerRegistration"
          component={LawyerRegistration}
        />
        <Stack.Screen
          name="CounsellorRegistration"
          component={CounsellorRegistration}
        />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="NgoRegistration" component={NGORegistration} />
        <Stack.Screen name="UTPRegistration" component={UTPRegistration} />

        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Wellbeing" component={Wellbeing} />
        <Stack.Screen name="Thoughts" component={Thoughts} />
        <Stack.Screen name="HomeProbono" component={HomeProbono} />
        <Stack.Screen name="HomeLawyer" component={HomeLawyer} />
        <Stack.Screen name="HomeNgo" component={HomeNgo} />
        <Stack.Screen name="Homelegalclinics" component={Homelegalclinics} />
        <Stack.Screen name="NotificationPage" component={NotificationPage} />
        <Stack.Screen name="MyComponent" component={MyComponent} />
        <Stack.Screen name="Study" component={Study} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
        <Stack.Screen name="CaseId" component={CaseId} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="HomeUTRC" component={HomeUTRC} />
        <Stack.Screen name="Ngo" component={Ngo} />
        <Stack.Screen name="CommentScreen" component={CommentScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    // <MyComponent />
    //<Ngo />
    // <Study />
    // <Menu />
    // <Thoughts />
    // <Wellbeing />
    //<CourseDetails />
    // <Homepage />
    // <NotificationPage />
    // <HomeProbono />
  );
};

export default App;
