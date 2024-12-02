import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Alerts({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 15,
      height: 50,
      position: 'absolute', 
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10, 
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#2260FF',
    },
    headerRight: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconButton: {
      marginRight: 15,
    },
    content: {
      padding: 25,
      paddingTop: 80, // Adds spacing to prevent overlap with the fixed header
    },
    alertTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FF4C4C',
      marginBottom: 5,
    },
    alertSeverity: {
      fontSize: 14,
      color: 'red',
      marginBottom: 15,
    },
    card: {
      backgroundColor: '#F8D7DA', // Light red background
      borderRadius: 8,
      padding: 15,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#721C24',
      marginBottom: 5,
    },
    cardDescription: {
      fontSize: 14,
      color: '#721C24',
    },
    emergencyButton: {
      backgroundColor: '#2260FF',
      borderRadius: 25,
      paddingVertical: 12,
      alignItems: 'center',
      marginTop: 20,
    },
    emergencyButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#2260FF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Alerts & Notifications</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="notifications-none" size={24} color="#2260FF" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.avatar}>
          <Avatar
            rounded
            size="small"
            source={require('../../assets/avatar.png')}
          />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.alertTitle}>Alert</Text>
        <Text style={styles.alertSeverity}>High (Based on Severity)</Text>

        {/* Cards */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>⚠️ Landslide Warning</Text>
          <Text style={styles.cardDescription}>
            There are potential increasing landslide risks in this region.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🚨 Evacuation Guidelines</Text>
          <Text style={styles.cardDescription}>
            🚩 Move to higher places{'\n'}
            🚩 Take shelter{'\n'}
            🚩 Listen to alerts
          </Text>
        </View>

        {/* Emergency Contact Button */}
        <TouchableOpacity
          style={styles.emergencyButton}
          onPress={() => navigation.navigate('EmergencyContacts')}>
          <Text style={styles.emergencyButtonText}>Emergency Contact</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
