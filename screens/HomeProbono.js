// HomeProbono.js
import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import profileimage from "./profileimage.png";
import IndiraJaising from "./circleimage1.png";
import NotificationPage from "./NotificationPage";
import { useNavigation } from "@react-navigation/native";
import Menu from "./Menu";
import Study from "./Study";
import Wellbeing from "./Wellbeing";
import Dashboard from "./Dashboard";
import MyComponent from "./law";
import HomeNgo from "./HomeNgo";
import CaseId from "./CaseId";
import Homepage from "./Homepage";
import axios from "axios";

const CategorySelector = ({
    categories,
    selectedCategory,
    onPressCategory,
}) => {
    return (
        <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={[
                        styles.categoryContainer,
                        selectedCategory === item.id && styles.selectedCategory,
                    ]}
                    onPress={() => onPressCategory(item)}
                >
                    <Text style={styles.categoryText}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />
    );
};

const HomeProbono = ({ route }) => {
    console.log(lawyers);
    const navigation = useNavigation();
    const [menuVisible, setMenuVisible] = useState(false);
    const [lawyers, setLawyers] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const fetchLawyers = async () => {
            try {
                const response = await axios.get(
                    "http://192.168.56.1:3001/userProfile"
                );
                setLawyers(response.data);
            } catch (error) {
                console.error("Error fetching lawyers:", error);
            }
        };

        fetchLawyers();
    }, []);

    const handleCategoryPress = (item) => {
        setSelectedCategory(item.id);
        if (item.page) {
            navigation.navigate(item.page);
        } else {
            // Handle other logic if needed
        }
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const categories = [
        { id: 1, name: "ProBono", page: "HomeProbono" },
        { id: 2, name: "Lawyers", page: "HomeLawyer" },
        { id: 3, name: "Legal Clinics", page: "Homelegalclinics" },
        { id: 4, name: "UTRC's", page: "HomeUTRC" },
        { id: 5, name: "Counselors" },
        { id: 6, name: "NGO's", page: "HomeNgo" },
    ];

    // Extracting parameters passed from LawyerRegistration
    const { name, expertise, experience, email } = route.params || {};

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

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="gray"
                />
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterButtonText}>Filters</Text>
                </TouchableOpacity>
            </View>

            <View>
                <CategorySelector
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onPressCategory={handleCategoryPress}
                />
            </View>

            <ScrollView style={styles.scrollView}>
                <View style={styles.content}>
                    <View style={styles.profileCardContainer}>
                        {lawyers.map((lawyer) => (
                            <TouchableOpacity
                                key={lawyer._id}
                                style={styles.profileCard}
                                onPress={() => {
                                    console.log("Lawyer ID:", lawyer._id); // Add this line for debugging
                                    navigation.navigate("MyComponent", {
                                        lawyerId: lawyer._id,
                                    });
                                }}
                            >
                                <Text style={styles.lawyername}>
                                    {lawyer.name}
                                </Text>
                                <Image
                                    style={styles.profileCardImage}
                                    source={profileimage}
                                    alt="Image placeholder"
                                />
                                <View style={styles.buttonContainer}>
                                    <Text
                                        style={[
                                            styles.boldText,
                                            styles.lawyerText,
                                        ]}
                                    >
                                        Years of Experience:
                                    </Text>
                                    <Text style={styles.semiBoldText}>
                                        {lawyer.experience}
                                    </Text>
                                    <Text
                                        style={[
                                            styles.boldText,
                                            styles.lawyerText,
                                        ]}
                                    >
                                        Subject Matter Expertise:
                                    </Text>
                                    <Text style={styles.semiBoldText}>
                                        {lawyer.specialization}
                                    </Text>
                                    <Text
                                        style={[
                                            styles.boldText,
                                            styles.lawyerText,
                                        ]}
                                    >
                                        Email:
                                    </Text>
                                    <Text style={styles.semiBoldText}>
                                        {lawyer.email}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>

            <View style={styles.navigationBar}>
                <View style={styles.navIconsContainer}>
                    <TouchableOpacity>
                        <View style={styles.navIconWrapper}>
                            <View style={styles.lineAboveIcon} />
                            <Ionicons
                                onPress={() => navigation.navigate(Homepage)}
                                name="home"
                                size={25}
                                color="#1A3567"
                                style={styles.navIcon}
                            />
                            <Text style={styles.navLabel}>Home</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Add other navigation icons here */}
                </View>
            </View>

            {menuVisible && (
                <Menu navigation={<HomeProbono />} onClose={toggleMenu} />
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#B0CCFF",
    },
    boldText: {
        fontWeight: "bold",
        // Any other styles you want for the bold text
    },
    semiBoldText: {
        fontWeight: "500", // '500' is often used for semi-bold
        // Any other styles you want for the semi-bold text
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
        paddingHorizontal: 16,
        marginTop: 0,
    },
    searchInput: {
        flex: 1,
        height: 40,
        backgroundColor: "white",
        borderRadius: 15,
        paddingHorizontal: 12,
        marginRight: 8,
    },
    filterButton: {
        backgroundColor: "blue", // Change this to your preferred color
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    filterButtonText: {
        color: "white",
        fontWeight: "bold",
    },
    scrollView: {
        flex: 1,
        backgroundColor: "white",
        marginTop: 20,
    },

    content: {
        padding: 16,
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
    lineAboveIcon: {
        backgroundColor: "#1A3567",
        height: 2,
        width: 30,
        marginBottom: 5,
    },
    navIcon: {
        marginBottom: 0, // Adjust the margin as needed
    },
    navLabel: {
        color: "#1A3567",
        marginRight: 0,
        textAlign: "center",
    },

    categoryContainer: {
        paddingHorizontal: 5,
        paddingVertical: 20,
        marginRight: 15,
        paddingBottom: 0,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    selectedCategory: {
        borderBottomWidth: 2,
        borderBottomColor: "blue",
        paddingBottom: 5,
    },
    profileCardContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    profileCard: {
        width: "47.5%",
        padding: 5,
        borderWidth: 2,
        borderColor: "#1A3567",
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 5,
        marginTop: 5,
    },
    profileCardImage: {
        width: 90,
        height: 90,
        alignSelf: "center",
        borderRadius: 50,
    },
    lawyername: {
        fontWeight: "bold",
        padding: 5,
    },
    lawyerText: {
        padding: 2,
    },
});

export default HomeProbono;
