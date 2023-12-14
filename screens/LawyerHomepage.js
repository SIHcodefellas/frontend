import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList, Image, Linking, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo for vector icons
import Lawyersearchpage from './Lawyersearchpage'
import { useNavigation } from '@react-navigation/native';
import LawyerDashboard from './LawyerDashboard';
const section1Image = require('./download.png');
const rectimage = require('./images.png');

const handleMenuItemPress = () => {
    Linking.openURL('https://mediafiles.botpress.cloud/de6bea04-ef7b-4815-8a03-6ff0f3753757/webchat/bot.html');
};

const SquareSection = ({ image, text }) => {
    const handleSquarePress = () => {
        // Handle the press event, e.g., navigate to details page
        console.log("Square pressed. Add your logic here.");
    };

    return (
        <TouchableOpacity style={styles.squareSection} onPress={handleSquarePress}>
            <Image source={image} style={styles.squareSectionImage} />
            <Text style={styles.squareSectionTitle}>{text}</Text>
            <TouchableOpacity style={styles.checkDetailsButton} onPress={handleSquarePress}>
                <Text style={styles.checkDetailsText}>Check Details</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

const RectangularSection = ({ title, imageUrl, text }) => {

    return (
        <View style={styles.rectangularSection}>
            <View style={styles.rectangularImageContainer}>
                <Image source={{ imageUrl }} style={styles.rectangularImage} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.rectangularText}>{title}</Text>
                <Text style={styles.randomOneLiner}>{text}</Text>
            </View>
        </View>
    );
};




const LawyerHomepage = ({ route }) => {
    const { params } = route;
    const searchQuery = params ? params.searchQuery : '';
    const navigation = useNavigation();

    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filterOptions, setFilterOptions] = useState([]);

    const handleSearchPress = () => {
        // Navigate to the page of prisoners or perform any other action
        navigation.navigate('Lawyersearchpage', { searchQuery });
    };

    const handleFilterPress = () => {
        setFilterModalVisible(true);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setFilterModalVisible(false);

        // Set filter options based on the selected category
        switch (category) {
            case 'Lawyer':
                setFilterOptions(['Name', 'Location', 'Expertise', 'Fees']);
                break;
            case 'ProBonoLawyer':
                setFilterOptions(['Name', 'Location', 'Expertise']);
                break;
            case 'Counsellors':
                setFilterOptions(['Name', 'Location', 'Gender']);
                break;
            case 'NGOs':
                setFilterOptions(['Name', 'Location', 'Services']);
                break;
            case 'UTCs':
                setFilterOptions(['Name', 'Location']);
                break;
            default:
                setFilterOptions([]);
        }
    };


    const rectangularSectionsData = [
        { id: '1', title: 'Undertrials in jail', imageUrl: { rectimage }, text: 'A random one-liner for Section 1' },
        { id: '2', title: 'Section 2', imageUrl: { rectimage }, text: 'A witty remark for Section 2' },
        { id: '3', title: 'Section 3', imageUrl: { rectimage }, text: 'Some clever text for Section 3' },
        // Add more sections as needed
    ];
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity><Ionicons name="menu-outline" size={30} color='#1A3567' /></TouchableOpacity>
                <TouchableOpacity><Ionicons name="notifications-outline" size={30} color='#1A3567' /></TouchableOpacity>
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
                <TouchableOpacity style={styles.filterButton} onPress={handleFilterPress}>
                    <Text style={styles.filterText}>Filter</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView}>
                <View style={styles.content}>
                    <View>
                        <Text style={styles.welcomeText}>
                            Welcome, Lawyer! Explore your cases and notifications here.
                        </Text>
                    </View>
                    <View style={styles.resourcesHeader}>
                        <Text style={styles.smallheaders2}>Upcoming hearings</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.squareSectionsContainer}>
                        <SquareSection image={section1Image} text={"Name: ABCD EFG"} />
                        <SquareSection image={section1Image} text={"Name: PQRS XYZ"} />
                    </View>

                    {/* Header for Chatbot */}
                    <TouchableOpacity style={styles.chatbotHeader} onPress={() => handleMenuItemPress()}>
                        <Text style={styles.knowYourRightsText}>Learn about undertrial prisoner's rights with our chatbot!</Text>
                        <Ionicons name="chatbox-ellipses-outline" size={25} color="#1A3567" style={styles.chatbotIcon} />
                    </TouchableOpacity>


                    <View style={styles.latestnewsHeader}>
                        <Text style={styles.smallheaders2}>Latest News</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewAllText}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Horizontal scrollable view for rectangular sections */}
                    <FlatList
                        data={rectangularSectionsData}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <RectangularSection title={item.title} imageUrl={rectimage} text={item.text} />
                        )}
                    />


                </View>
            </ScrollView>


            {/* Fixed navigation bar at the bottom */}
            <View style={styles.navigationBar}>
                <View style={styles.navigationBar}>
                    {/* Navigation icons */}
                    <View style={styles.navIconsContainer}>
                        <TouchableOpacity><View style={styles.navIconWrapper}>
                            <View style={styles.lineAboveIcon} />
                            <Ionicons name="home" size={25} color="#1A3567" style={styles.navIcon} />

                            <Text style={styles.navLabel}>Home</Text>
                        </View></TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate(LawyerDashboard)}><Ionicons name="apps" size={25} color="#1A3567" style={styles.navIcon} /></TouchableOpacity>


                    </View>
                </View>
                {/* Add your navigation bar items here */}
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={filterModalVisible}
                onRequestClose={() => {
                    setFilterModalVisible(false);
                }}
            >
                <View style={styles.filterModalContainer}>
                    <View style={styles.filterModalContent}>
                        <Text style={styles.modalTitle}>Select Category</Text>
                        <ScrollView>
                            {['Lawyer', 'ProBonoLawyer', 'Counsellors', 'NGOs', 'UTCs'].map((category) => (
                                <TouchableOpacity
                                    key={category}
                                    style={styles.modalOption}
                                    onPress={() => handleCategorySelect(category)}
                                >
                                    <Text>{category}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </Modal>

        </View>
    );
};

export default LawyerHomepage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B0CCFF',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    icon: {
        marginRight: 0,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        marginTop: 0,
    },
    searchInput: {
        // flex: 1,
        height: 40,
        width: 235,
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        paddingHorizontal: 12,
        marginRight: 0,
        borderWidth: 1,
        borderColor: '#044AC8',
    },
    searchIcon: {
        backgroundColor: 'white',
        borderLeftWidth: 0,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        fontSize: 35,
        borderRightColor: '#044AC8',
        borderTopColor: '#044AC8',
        borderBottomColor: '#044AC8',
        color: '#1A3567',
    },

    filterButton: {
        backgroundColor: '#044AC8',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginLeft: 5, // Adjust the marginLeft based on your design
        width: 55,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center', // Center vertically
    },
    filterText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center', // Center horizontally
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        color: '#1A3567', // Adjust the color as needed
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,
        paddingHorizontal: 0,
    },
    viewAllText: {
        color: '#1A3567',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20,

    },
    squareSectionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 0,
        marginTop: 15,

    },
    squareSection: {
        width: '45%',
        aspectRatio: 1,
        backgroundColor: 'white',
        borderColor: '#1A3567',
        borderWidth: 2,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        overflow: 'hidden', // Add this line
        paddingTop: 15,
        paddingBottom: 5,
    },

    squareSectionImage: {
        width: '70%',
        height: '70%',
        borderRadius: 80, // Use borderRadius: 50 for a circular image
        overflow: 'hidden', // Add this line
    },

    squareSectionTitle: {
        color: '#1A3567',
    },

    // Add these styles to your existing styles object
    checkDetailsButton: {
        marginTop: 10,
        backgroundColor: '#044AC8',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    checkDetailsText: {
        color: 'white',
        fontWeight: 'bold',
    },

    knowYourRightsText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#044AC8',
        marginTop: 15,
    },
    chatbotHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    chatbotIcon: {
        marginRight: 10,
    },

    latestnewsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,
        paddingHorizontal: 0,
    },
    rectangularSection: {
        width: 200,
        aspectRatio: 5 / 4, // 80% height for image, 20% for text
        marginRight: 16,
        borderRadius: 5,
        overflow: 'hidden',
        marginVertical: 10,
    },
    rectangularImageContainer: {
        flex: 1,
        borderColor: '#1A3567',
        borderWidth: 2,
    },
    rectangularImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    textContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        // backgroundColor: 'rgba(255, 255, 255)',
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rectangularText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: '#044AC8',
    },
    randomOneLiner: {
        fontSize: 14,
        color: '#6B6B6B',
        marginTop: 8,
    },


    navigationBar: {
        backgroundColor: '#B0CCFF', // Change this to your preferred color
        padding: 7,
    },
    navIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center'
    },
    lineAboveIcon: {
        backgroundColor: '#1A3567',
        height: 2,
        width: 30,
        marginBottom: 5,
    },
    navIcon: {
        marginBottom: 0, // Adjust the margin as needed
    },
    navLabel: {
        color: '#1A3567',
        marginRight: 0,

    },

    filterModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    filterModalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        maxHeight: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalOption: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});