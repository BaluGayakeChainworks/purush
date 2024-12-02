import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

export default function PatrolSchedule({navigation}) {
  const patrolData = [
    {
      location: 'Zone B - Western Region',
      time: '09:00 AM',
      duration: '2 hours',
      priority: 'High',
      priorityColor: '#FF0000', // Red
    //   image: require('../assets/zone_b_western.png'), // Replace with actual image
    },
    {
      location: 'Zone B - Southern Region',
      time: '11:30 AM',
      duration: '2 hours',
      priority: 'High',
      priorityColor: '#FF0000', // Red
    //   image: require('../assets/zone_b_southern.png'), // Replace with actual image
    },
    {
      location: 'Zone A - Eastern Region',
      time: '01:00 PM',
      duration: '2 hours',
      priority: 'Medium',
      priorityColor: '#FFA500', // Orange
    //   image: require('../assets/zone_a_eastern.png'), // Replace with actual image
    },
    {
      location: 'Zone B - Northern Region',
      time: '03:00 PM',
      duration: '2 hours',
      priority: 'Low',
      priorityColor: '#008000', // Green
    //   image: require('../assets/zone_b_northern.png'), // Replace with actual image
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon
            name="arrow-back"
            size={24}
            color="#2260FF"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hello Forest Admin!</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
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

      <Text style={styles.overviewText}>Patrol Schedule</Text>

      {/* Patrol List */}
      <ScrollView style={styles.scrollView}>
        {patrolData.map((item, index) => (
          <View key={index} style={styles.card}>
            {/* Image Section */}
            <Image source={item.image} style={styles.image} />

            {/* Card Details */}
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.location}>{item.location}</Text>
                <View
                  style={[
                    styles.priorityTag,
                    { backgroundColor: item.priorityColor },
                  ]}
                >
                  <Text style={styles.priorityText}>{item.priority}</Text>
                </View>
              </View>
              <Text style={styles.details}>{`Time Start: ${item.time}`}</Text>
              <Text style={styles.details}>{`Duration: ${item.duration}`}</Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>View More</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2260FF',
    justifyContent: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10,
  },
  overviewText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 10,
  },
  image: {
    width: '100%',
    height: 120,
  },
  cardContent: {
    padding: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    flex: 1,
  },
  priorityTag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  priorityText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#2260FF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
