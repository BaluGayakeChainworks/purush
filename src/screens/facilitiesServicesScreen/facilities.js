import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements';

const Facilities = ({ navigation }) => {
  const facilities = [
    { name: 'Restrooms', icon: 'room' },
    { name: 'Drinking Water', icon: 'water-drop' },
    { name: 'Food', icon: 'fastfood' },
    { name: 'First Aid', icon: 'medical-services' },
    { name: 'Emergency/Help', icon: 'help' },
    { name: 'Food Stalls', icon: 'food-bank' },
    { name: 'Local Vendor', icon: 'shopping-bag' },
    { name: 'EV Charge', icon: 'charging-station' },
    { name: 'Hotel/Stays', icon: 'hotel' },
    { name: 'Public Transport', icon: 'directions-bus' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#2260FF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Facilities & Services</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Icon name="notifications-none" size={32} color="#2260FF" />
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

      {/* Facilities Grid */}
      <View style={styles.gridContainer}>
        {facilities.map((facility, index) => (
          <TouchableOpacity
            key={index}
            style={styles.gridItem}
            onPress={() => navigation.navigate('MapScreen', { facility: facility.name })}
          >
            <Icon name={facility.icon} size={40} color="#2260FF" />
            <Text style={styles.gridText}>{facility.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2260FF',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginLeft: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridItem: {
    width: width * 0.3, // Each item takes 40% of screen width
    alignItems: 'center',
    marginVertical: 30,
  },
  gridText: {
    fontSize: 14,
    color: '#2260FF',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default Facilities;
