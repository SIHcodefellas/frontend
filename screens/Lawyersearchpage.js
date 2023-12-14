import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo for vector icons
import LawyerHomepage from './LawyerHomepage';
import { useNavigation } from '@react-navigation/native';
import LawyerDashboard from './LawyerDashboard';

const Lawyersearchpage = ({ route }) => {
    const { params } = route;
    const searchQuery = params ? params.searchQuery : '';
    const navigation = useNavigation();

    const [filterModalVisible, setFilterModalVisible] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filterOptions, setFilterOptions] = useState([]);

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

    const prisonersData = [
        { id: '1', name: 'John Doe', offence: 'Robbery', fees: '5000' },
        { id: '2', name: 'Jane Smith', offence: 'Burglary', fees: '7000' },
        { id: '3', name: 'Bob Johnson', offence: 'Assault', fees: '6000' },
        { id: '4', name: 'Mary White', offence: 'Fraud', fees: '8000' },
        { id: '5', name: 'Tom Brown', offence: 'Drug Possession', fees: '5500' },
        { id: '6', name: 'Alice Green', offence: 'Vandalism', fees: '7200' },
        { id: '7', name: 'Sam Wilson', offence: 'Forgery', fees: '6500' },
        { id: '8', name: 'Eva Davis', offence: 'Kidnapping', fees: '9000' },
        { id: '9', name: 'Chris Miller', offence: 'Embezzlement', fees: '7500' },
        { id: '10', name: 'Linda Turner', offence: 'Arson', fees: '8200' },
        { id: '11', name: 'Mike Adams', offence: 'Identity Theft', fees: '5800' },
        { id: '12', name: 'Grace Martinez', offence: 'Assault', fees: '7000' },
        { id: '13', name: 'Alex Parker', offence: 'Burglary', fees: '6700' },
        { id: '14', name: 'Sophie White', offence: 'Robbery', fees: '7200' },
        { id: '15', name: 'Jake Smith', offence: 'Drug Trafficking', fees: '8500' },
        { id: '16', name: 'Olivia Brown', offence: 'Vandalism', fees: '6900' },
        { id: '17', name: 'Max Turner', offence: 'Forgery', fees: '7800' },
        { id: '18', name: 'Emma Davis', offence: 'Fraud', fees: '7700' },
        { id: '19', name: 'Daniel Wilson', offence: 'Kidnapping', fees: '9200' },
        { id: '20', name: 'Ava Miller', offence: 'Embezzlement', fees: '8000' },
        // Add more prisoners as needed
    ];



    // Filter prisoners based on the search query
    const filteredPrisoners = prisonersData.filter((prisoner) => {
        // Check if the search query matches the name, offence, or fees
        return (
            prisoner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prisoner.offence.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prisoner.fees.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });

    const handleSearchPress = () => {
        // Navigate to the page of prisoners or perform any other action
        // navigation.navigate('PrisonersPage'); // Replace 'PrisonersPage' with the actual name of your page
    };

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
                    <Text style={styles.prisonerstext}>Prisoners</Text>

                    {/* Grid layout with two columns */}
                    <View style={styles.squareSectionsContainer}>
                        {filteredPrisoners.map((prisoner) => (
                            <View style={styles.squareSection} key={prisoner.id}>
                                {/* Replace 'placeholderImage' with the actual image source */}
                                <Image source={require('./download.png')} style={styles.squareSectionImage} />
                                <Text style={styles.squareSectionTitle}>{prisoner.name}</Text>
                                <Text>{`Offence: ${prisoner.offence}`}</Text>
                                <Text>{`Fees: ${prisoner.fees}`}</Text>
                                <TouchableOpacity style={styles.checkDetailsButton}>
                                    <Text style={styles.checkDetailsText}>Check Details</Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
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
                                <Ionicons name="home" size={25} color="#1A3567" style={styles.navIcon} onPress={() => navigation.navigate(LawyerHomepage)} />
                                <Text style={styles.navLabel}>Home</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate(LawyerDashboard)}>
                            <Ionicons name="apps" size={25} color="#1A3567" style={styles.navIcon} />
                        </TouchableOpacity>
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

export default Lawyersearchpage;

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
    content: {
        padding: 16,
    },
    prisonerstext: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1A3567',
        marginTop: 5,
        marginBottom: 10,
    },
    squareSectionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    squareSection: {
        width: '48%',
        aspectRatio: 0.7,
        backgroundColor: 'white',
        borderColor: '#1A3567',
        borderWidth: 2,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        overflow: 'hidden',
        // paddingBottom: 10,
        marginBottom: 10,
    },
    squareSectionImage: {
        width: '40%',
        height: '40%',  // Adjust the height based on your design
        borderRadius: 50,
        aspectRatio: 1,
        overflow: 'hidden',
        // marginTop: 15,  // Adjust the marginTop based on your design
    },
    squareSectionTitle: {
        color: '#1A3567',
        fontSize: 16,  // Adjust the fontSize based on your design
        marginTop: 10,  // Adjust the marginTop based on your design
    },
    sectionText: {
        fontSize: 12,  // Adjust the fontSize based on your design
        color: '#555',  // Adjust the color based on your design
    },
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
    navigationBar: {
        backgroundColor: '#B0CCFF',
        padding: 7,
    },
    navIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    lineAboveIcon: {
        backgroundColor: '#1A3567',
        height: 2,
        width: 30,
        marginBottom: 5,
    },
    navIcon: {
        marginBottom: 0,
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
