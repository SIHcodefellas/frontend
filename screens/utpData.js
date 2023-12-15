import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    StyleSheet,
    ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const UTPData = () => {
    const [caseId, setCaseId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [location, setLocation] = useState("");
    const [lawyerName, setLawyerName] = useState("");
    const [offence, setOffence] = useState("");

    const navigation = useNavigation();

    const handleSignUp = () => {
        if (password !== confirmPassword) {
            Alert.alert("Error", "Password and Confirm Password do not match");
            return;
        }
        axios
            .get("http://192.168.118.242:3001/utpProfile")
            .then((res) => console.log(res))
            .catch((err) => console.log("error", err));
        axios
            .post("http://192.168.118.242:3001/utpProfile", {
                caseID: caseId,
                name,
                setPassword: password,
                confirmPassWord: confirmPassword,
                email,
                contactNumber,
                location,
                lawyerName,
                offence,
            })
            .then(() => {
                alert("Successful signup!");
                navigation.navigate("Homepage");
            })
            .catch((err) => console.log("Error", err));
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>
                    Undertrial Prisoner Registration
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Case ID or FIR ID"
                    value={caseId}
                    onChangeText={(text) => setCaseId(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Set Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email (optional)"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChangeText={(text) => setContactNumber(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Location"
                    secureTextEntry={true}
                    value={location}
                    onChangeText={(text) => setLocation(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Lawyer Name"
                    value={lawyerName}
                    onChangeText={(text) => setLawyerName(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Offence"
                    value={offence}
                    onChangeText={(text) => setOffence(text)}
                />

                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#B0CCFF",
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#1A3567",
        marginTop: 50,
    },
    input: {
        width: "80%",
        height: 50,
        backgroundColor: "white",
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    button: {
        width: "80%",
        height: 50,
        backgroundColor: "#1A3567",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    alreadytext: {
        color: "#1A3567",
        marginBottom: 40,
    },
    login: {
        color: "#1A3567",
        fontWeight: "bold",
    },
});

export default UTPData;