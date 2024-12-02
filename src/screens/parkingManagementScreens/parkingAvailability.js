import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ParkingAvailability({navigation}) {
  const [selectedVehicle, setSelectedVehicle] = useState('Car');

  // Data for Car and Bike Parking
  const carParkingData = [
    {
      id: '1',
      name: 'Fort Parking - 1',
      availability: '15 Parking Spots Available',
      distance: '990m From Your Location',
      peakPrice: 'INR 200',
      offPeakPrice: 'INR 150',
      status: 'Available',
    },
    {
      id: '2',
      name: 'Fort Parking - 2',
      availability: 'No Parking Spots Available',
      distance: '500m From Your Location',
      peakPrice: 'INR 200',
      offPeakPrice: 'INR 150',
      status: 'Full',
    },
  ];

  const bikeParkingData = [
    {
      id: '1',
      name: 'Fort Parking - 1',
      availability: '10 Parking Spots Available',
      distance: '800m From Your Location',
      peakPrice: 'INR 100',
      offPeakPrice: 'INR 80',
      status: 'Available',
    },
    {
      id: '2',
      name: 'Fort Parking - 2',
      availability: 'No Parking Spots Available',
      distance: '600m From Your Location',
      peakPrice: 'INR 100',
      offPeakPrice: 'INR 80',
      status: 'Full',
    },
  ];

  const parkingData =
    selectedVehicle === 'Car' ? carParkingData : bikeParkingData;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon
            name="arrow-back"
            size={24}
            color="#2260FF"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Parking Management</Text>
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

      {/* Toggle Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedVehicle === 'Car' ? styles.selectedTab : null,
          ]}
          onPress={() => setSelectedVehicle('Car')}>
          <Icon
            name="car-repair"
            size={24}
            color={selectedVehicle === 'Car' ? '#fff' : '#000'}
          />
          <Text
            style={[
              styles.tabText,
              selectedVehicle === 'Car' ? styles.selectedTabText : null,
            ]}>
            Car
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedVehicle === 'Bike' ? styles.selectedTab : null,
          ]}
          onPress={() => setSelectedVehicle('Bike')}>
          <Icon
            name="motorcycle"
            size={24}
            color={selectedVehicle === 'Bike' ? '#fff' : '#000'}
          />
          <Text
            style={[
              styles.tabText,
              selectedVehicle === 'Bike' ? styles.selectedTabText : null,
            ]}>
            Bike
          </Text>
        </TouchableOpacity>
      </View>

      {/* Parking List */}
      <FlatList
        data={parkingData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.strip} />
            <View style={styles.cardContent}>
              <View>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text
                  style={[
                    styles.cardAvailability,
                    item.status === 'Available'
                      ? styles.available
                      : styles.full,
                  ]}>
                  {item.availability}
                </Text>
                <Text style={styles.cardDistance}>{item.distance}</Text>
                <Text style={styles.pricingText}>
                  Peak Hour Pricing:{' '}
                  <Text style={styles.boldText}>{item.peakPrice}</Text>
                </Text>
                <Text style={styles.pricingText}>
                  Off-Peak Pricing:{' '}
                  <Text style={styles.boldText}>{item.offPeakPrice}</Text>
                </Text>
              </View>
              <TouchableOpacity
                style={styles.seeSpotsButton}
                onPress={() =>
                  navigation.navigate('ParkingSpots', {
                    selectedSpot: item,
                    vehicleType: selectedVehicle,
                  })
                }>
                <Text style={styles.seeSpotsText}>See Spots</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#2260FF',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#1E90FF',
    backgroundColor: '#fff',
    marginRight: 10,
  },
  selectedTab: {
    backgroundColor: '#2260FF',
  },
  tabText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  selectedTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000000',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  strip: {
    width: 5,
    backgroundColor: '#2260FF',
    marginLeft: 15,
    marginTop: 10,
    marginBottom: 10,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  cardAvailability: {
    fontSize: 16,
    marginVertical: 5,
  },
  available: {
    color: 'green',
  },
  full: {
    color: 'red',
  },
  cardDistance: {
    fontSize: 14,
    color: '#555',
  },
  pricingText: {
    fontSize: 14,
    color: '#555',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
  seeSpotsButton: {
    backgroundColor: '#2260FF',
    marginTop: 80,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 16,
  },
  seeSpotsText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
