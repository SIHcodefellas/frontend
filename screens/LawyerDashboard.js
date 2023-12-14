import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, LocaleConfig } from 'react-native-calendars';

const LawyerDashboard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <TouchableOpacity><Ionicons name="menu-outline" size={30} color='#1A3567' /></TouchableOpacity>
                <TouchableOpacity><Ionicons name="notifications-outline" size={30} color='#1A3567' /></TouchableOpacity>
            </View>

            <Text style={styles.Dashboard}>Dashboard</Text>

        </View>
    )
};

export default LawyerDashboard;

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
    Dashboard: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
});