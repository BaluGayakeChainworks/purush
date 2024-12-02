import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function EmergencyContacts({ navigation }) {
  const contacts = [
    {
      name: 'Forest Department',
      phone: '123 456 7890',
      email: 'Forest@Help.Com',
    },
    {
      name: 'Police Department',
      phone: '123 456 7891',
      email: 'Police@Help.Com',
    },
    {
      name: 'Ambulance Services',
      phone: '123 456 7891',
      email: 'Ambulance@Help.Com',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#2260FF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Emergency Contacts</Text>
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
      <View style={styles.content}>
        <Text style={styles.subHeader}>Emergency Contacts</Text>

        {contacts.map((contact, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.contactName}>{contact.name}</Text>

            {/* Phone Row */}
            <View style={styles.row}>
              <Icon name="phone" size={20} color="#2260FF" style={styles.icon} />
              <Text style={styles.contactDetail}>{contact.phone}</Text>
            </View>

            {/* Email Row */}
            <View style={styles.row}>
              <Icon name="email" size={20} color="#2260FF" style={styles.icon} />
              <Text style={styles.contactDetail}>{contact.email}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
 
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
    marginRight: 10,
  },
  content: {
    padding: 20,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#F8F9FA',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E9ECEF',
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  contactDetail: {
    fontSize: 14,
    color: '#555555',
  },
  icon: {
    marginRight: 10,
  },
});
