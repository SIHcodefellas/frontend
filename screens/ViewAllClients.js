import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo for vector icons
import { useNavigation } from '@react-navigation/native';
import LawyerHomepage from './LawyerHomepage';
import LawyerDashboard from './LawyerDashboard';
import Lawyersubscription from './Lawyersubscription';
import Lawyersearchpage from './Lawyersearchpage';

const ViewAllClients = () => {
    const navigation = useNavigation();
    const data = [
        {
            id: '1',
            image: require('./download.png'),
            name: 'ABCD EFG',
            offence: 'Theft',
            courtDate: '2023-01-01',
        },
        {
            id: '2',
            image: require('./download.png'),
            name: 'PQRS XYZ',
            offence: 'Fraud',
            courtDate: '2023-02-15',
        },
        {
            id: '3',
            image: require('./download.png'),
            name: 'Arnav Khochare',
            offence: 'Is an Idiot',
            courtDate: 'Kal jana hai sir ji',
        },
        {
            id: '4',
            image: require('./download.png'),
            name: 'John Doe',
            offence: 'Assault',
            courtDate: '2023-03-10',
        },
        {
            id: '5',
            image: require('./download.png'),
            name: 'Jane Smith',
            offence: 'Forgery',
            courtDate: '2023-04-20',
        },

        // Add more data items as needed
    ];


    const ListItem = ({ item, onPress }) => (
        <TouchableOpacity style={styles.listItem} onPress={onPress}>
            <Image source={item.image} style={styles.listItemImage} />
            <View style={styles.listItemTextContainer}>
                <Text style={styles.listItemText}>{item.name}</Text>
                <Text style={styles.listItemText}>{`Offence: ${item.offence}`}</Text>
                <Text style={styles.listItemText}>{`Court Date: ${item.courtDate}`}</Text>
            </View>
            <TouchableOpacity style={styles.checkProfileButton} onPress={onPress}>
                <Text style={styles.checkProfileButtonText}>Check Profile</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <ListItem
            item={item}
            onPress={() => {
                // Handle onPress action (e.g., navigate to profile)
            }}
        />
    );


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
                <TouchableOpacity onPress={() => navigation.navigate(Lawyersearchpage)}>
                    <Ionicons name="search" size={30} style={styles.searchIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.filterText}>Filter</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                style={styles.flatList}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />





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
                        <TouchableOpacity onPress={() => navigation.navigate(Lawyersubscription)}><View style={styles.navIconWrapper}><Ionicons name="card-outline" size={25} color="#1A3567" style={styles.diamondIcon} /></View></TouchableOpacity>

                    </View>
                </View>
                {/* Add your navigation bar items here */}
            </View>
        </View>
    );
}

export default ViewAllClients;

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

    flatList: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 10,
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        borderWidth: 2,
        borderColor: '#1A3567',
        marginHorizontal: 10,
    },
    listItemImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    listItemTextContainer: {
        flex: 1,
        marginRight: 10,
    },
    listItemText: {
        fontSize: 16,
    },
    checkProfileButton: {
        backgroundColor: '#044AC8',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkProfileButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
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
})