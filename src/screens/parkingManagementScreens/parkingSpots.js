import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import {Avatar, Icon} from 'react-native-elements';

// Set the Mapbox Access Token
MapboxGL.setAccessToken(
  'sk.eyJ1IjoicHVydXNoMTgiLCJhIjoiY20ybHZsc2ZjMGY3ZDJwczdnbW4zcjk4cCJ9.sl5UstfyIMtF6G3D8e7wvw',
);

const ParkingSpots = ({route, navigation}) => {
  const {vehicleType} = route.params; // Get the vehicleType from route params
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(17);

  // Sample parking spots data for Car and Bike
  const carSpots = [
    {
      id: '1',
      title: 'Fort Parking - Slot #5 (Car)',
      coordinates: [73.761637, 18.364598],
      amount: 'INR 100',
      availability: 'Available',
    },
    {
      id: '2',
      title: 'Fort Parking - Slot #10 (Car)',
      coordinates: [73.76129, 18.3644],
      amount: 'Full',
      availability: 'Full',
    },
  ];

  const bikeSpots = [
    {
      id: '1',
      title: 'Fort Parking - Slot #7 (Bike)',
      coordinates: [73.7607222, 18.3645833],
      amount: 'INR 50',
      availability: 'Available',
    },
    {
      id: '2',
      title: 'Fort Parking - Slot #8 (Bike)',
      coordinates: [73.7607852, 18.3643833],
      amount: 'Full',
      availability: 'Full',
    },
  ];

  // Filter the spots based on the selected vehicle type
  const parkingSpots = vehicleType === 'Car' ? carSpots : bikeSpots;

  const handleZoomIn = () => {
    if (zoomLevel < 22) setZoomLevel(zoomLevel + 1);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 0) setZoomLevel(zoomLevel - 1);
  };

  const handleSelectSpot = () => {
    if (selectedSpot.availability === 'Full') {
      alert('This spot is full. Please select an available spot.');
    } else {
      setModalVisible(false);
      navigation.navigate('ParkingDetails', {selectedSpot});
    }
  };

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

      {/* Map Frame */}
      <View style={styles.mapFrame}>
        <MapboxGL.MapView
          style={styles.map}
          styleURL={MapboxGL.StyleURL.SatelliteStreet}>
          <MapboxGL.Camera
            zoomLevel={zoomLevel}
            centerCoordinate={[73.76102, 18.36468]} 
          />
          {parkingSpots.map(spot => (
            <MapboxGL.PointAnnotation
              key={spot.id}
              id={spot.id}
              coordinate={spot.coordinates}
              onSelected={() => {
                setSelectedSpot(spot);
                setModalVisible(true);
              }}>
              <View style={styles.markerContainer}>
                <View
                  style={[
                    styles.marker,
                    {
                      backgroundColor:
                        spot.availability === 'Full' ? '#FF0000' : '#00ff00',
                    },
                  ]}
                />
              </View>
            </MapboxGL.PointAnnotation>
          ))}
        </MapboxGL.MapView>
      </View>

      {/* Zoom Controls */}
      <View style={styles.zoomControls}>
        <TouchableOpacity
          style={[styles.zoomButton, styles.zoomIn]}
          onPress={handleZoomIn}>
          <Text style={styles.zoomText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.zoomButton, styles.zoomOut]}
          onPress={handleZoomOut}>
          <Text style={styles.zoomText}>-</Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      {selectedSpot && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.infoText}>
                Parking Spot: {selectedSpot.title}
              </Text>
              <Text style={styles.infoText}>
                Amount: {selectedSpot.amount}
              </Text>
              <Text style={styles.infoText}>
                Availability: {selectedSpot.availability}
              </Text>
              <Text style={styles.redText}>
                Subject to Realtime Availability*
              </Text>
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.selectButton}
                  onPress={handleSelectSpot}>
                  <Text style={styles.selectButtonText}>Select Spot</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default ParkingSpots;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    padding: 10,
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
  mapFrame: {
    flex: 1,
    margin: 10,
    borderWidth: 5,
    borderColor: '#000000',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#1E90FF',
    borderColor: '#fff',
    borderWidth: 2,
  },
  zoomControls: {
    position: 'absolute',
    bottom: 30,
    right: 10,
    flexDirection: 'column',
  },
  zoomButton: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  zoomIn: {
    backgroundColor: '#1E90FF',
  },
  zoomOut: {
    backgroundColor: '#FF6347',
  },
  zoomText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
  redText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'light',
    color: 'red',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  closeButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectButton: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
  },
  selectButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
