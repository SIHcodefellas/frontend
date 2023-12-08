// Menu.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Menu = ({ navigation, onClose }) => {
    const menuItems = [
        { label: "ePay", link: "https://paytm.com/" },
        { label: "Virtual courts", link: "https://vcourts.gov.in/virtualcourt/" },
        { label: "eFiling", link: "https://www.incometax.gov.in/iec/foportal/" },
        { label: "eCommittee", link: "https://ecommitteesci.gov.in/" },
        { label: "Forms for Advocate", link: "https://www.latestlaws.com/library/legal-documents/legal-forms-for-advocates" },
        { label: "Bail Application", link: "https://www.advocatekhoj.com/library/agreements/criminallaw/2.php" },
        { label: "Complaints" },
        { label: "Donate Us" },
        { label: "Apply for Govt. Lawyer" },
        // Add more menu items with corresponding links
    ];

    const handleMenuItemPress = (item) => {
        if (item.link) {
            // Open the URL using Linking module
            Linking.openURL(item.link);
        } else {
            // Handle other menu items as needed
            // For example, navigate to a specific screen
            // navigation.navigate('Homepage', { screen: item.label });
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Ionicons name="close" size={30} color="black" />
            </TouchableOpacity>
            <View style={styles.menuItemsContainer}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.menuItem}
                        onPress={() => handleMenuItemPress(item)}
                    >
                        <Text style={styles.menuItemText}>{item.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={styles.settingsButton} >
                <Ionicons name="settings" size={25} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#B0CCFF',
        padding: 16,
    },
    closeButton: {
        position: 'absolute',
        top: 45,
        left: 16,
    },
    menuItemsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuItem: {
        marginBottom: 30,
    },
    menuItemText: {
        fontSize: 18,
        color: '#044AC8', // Adjust color to match your design
    },
    settingsButton: {
        position: 'absolute',
        top: 60,
        right: 20,
    },
});

export default Menu;
