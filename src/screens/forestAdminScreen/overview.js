import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {Avatar} from 'react-native-elements';

export default function ForestAdminOverview({navigation}) {

    const cardsData = [
        {
          id: 1,
          title: 'Tasks Submitted',
          value: 1,
          subtitle: 'Yesterday',
          icon: 'check-circle',
          iconColor: '#4CAF50', 
        },
        {
          id: 2,
          title: 'Tasks Pending',
          value: 2,
          subtitle: 'Due Soon',
          icon: 'pending-actions',
          iconColor: '#FF9800', 
        },
        {
          id: 3,
          title: 'Reports Submitted',
          value: 2,
          subtitle: 'Yesterday',
          icon: 'file-copy',
          iconColor: '#2196F3', 
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
        <Text style={styles.headerText}>Dashboard</Text>
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
      <View style={styles.cardContainer}>
        {/* Map through cardsData array to generate cards */}
        {cardsData.map((card) => (
          <View key={card.id} style={styles.card}>
            <Icon name={card.icon} size={40} color={card.iconColor} />
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardValue}>{card.value}</Text>
            <Text style={styles.cardSubtitle}>{card.subtitle}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const {width} = Dimensions.get('window');

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
    marginBottom: 20,
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
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#FFFFFF',
    width: width * 0.42, // Adjust size for responsiveness
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
    textAlign: 'center',
  },
});
