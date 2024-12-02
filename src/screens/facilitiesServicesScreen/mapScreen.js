import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Icon } from 'react-native-elements';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';

// Set the Mapbox access token
MapboxGL.setAccessToken(
  'sk.eyJ1IjoicHVydXNoMTgiLCJhIjoiY20ybHZsc2ZjMGY3ZDJwczdnbW4zcjk4cCJ9.sl5UstfyIMtF6G3D8e7wvw',
);
const FacilitiesMap = ({route}) => {
  const {facility} = route.params;
  const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(14);
  const [userLocation, setUserLocation] = useState(null);


  // Facility Data
  const facilityData = [
    {
      id: 1,
      type: 'Restrooms',
      coordinates: [73.7607222, 18.3645833],
      name: 'Restroom 1',
      details: 'Clean restroom near Gate A. Available 24/7.',
      icon: 'wc',
    },
    {
      id: 2,
      type: 'Restrooms',
      coordinates: [73.7607852, 18.3643833],
      name: 'Restroom 2',
      details: 'Restroom located next to the main parking lot.',
      icon: 'wc',
    },
    {
      id: 3,
      type: 'Drinking Water',
      coordinates: [73.76025, 18.36511],
      name: 'Water Point 1',
      details: 'Free drinking water station available.',
      icon: 'local-drink',
    },
    {
      id: 4,
      type: 'Food',
      coordinates:[73.75858, 18.36581],
      name: 'Food Stall 1',
      details: 'Delicious local food including snacks and beverages.',
      icon: 'fastfood',
    },
    {
      id: 5,
      type: 'First Aid',
      coordinates: [73.757639, 18.365472],
      name: 'First Aid Station',
      details: 'Emergency medical help available at all times.',
      icon: 'medical-services',
    },
    {
      id: 6,
      type: 'Emergency/Help',
      coordinates: [73.757917, 18.365083],
      name: 'Emergency/Help',
      details: 'Emergency help available at all times.',
      icon: 'help',
    },
    {
      id: 7,
      type: 'Food Stalls',
      coordinates: [73.756250, 18.365250],
      name: 'Food Stalls',
      details: 'Food stalls for snacks and beverages.',
      icon: 'food-bank',
    },
    {
      id: 8,
      type: 'Local Vendor',
      coordinates: [73.755528, 18.364806],
      name: 'Local Vendor',
      details: 'Local vendors selling local products.',
      icon: 'shopping-bag',
    },
    {
      id: 9,
      type: 'EV Charge',
      coordinates: [73.761778, 18.364667],
      name: 'Charging Station',
      details: 'EV charging available at all times.',
      icon: 'charging-station',
    },
    {
      id: 10,
      type: 'Hotel/Stays',
      coordinates: [73.7546944, 18.3641111],
      name: 'Hotel',
      details: 'Hotels available for overnight stays.',
      icon: 'hotel',
    },
    {
      id: 11,
      type: 'Public Transport',
      coordinates: [73.7613333, 18.3648333],
      name: 'Public Transport',
      details: 'Public transportation available.',
      icon: 'directions-bus',
    },
  ];


  const requestLocationPermission = async () => {
    try {
      const result = await request(
        Platform.OS === 'android'
          ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
          : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      );

      if (result === RESULTS.GRANTED) {
        getUserLocation();
      } else {
        Alert.alert('Permission Denied', 'Location permission is required to use this feature.');
      }
    } catch (error) {
      console.error('Permission request error:', error);
    }
  };

  // Get the user's current location
  const getUserLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setUserLocation([longitude, latitude]);
      },
      error => {
        Alert.alert('Error', 'Unable to fetch your location.');
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };


  // Update markers whenever the facility type changes
  useEffect(() => {
    setMarkers(facilityData.filter(marker => marker.type === facility));
  }, [facility]);

  const handleZoomIn = () => {
    if (zoomLevel < 22) setZoomLevel(zoomLevel + 1);
  };

  const handleZoomOut = () => {
    if (zoomLevel > 0) setZoomLevel(zoomLevel - 1);
  };

  return (
    <View style={styles.container}>
      {/* Map View */}
      <MapboxGL.MapView style={styles.map} styleURL={MapboxGL.StyleURL.SatelliteStreet}>
        <MapboxGL.Camera
          zoomLevel={zoomLevel}
          centerCoordinate={[73.7607222, 18.3645833]} // Adjust to focus on your map area
        />
        {markers.map(marker => (
          <MapboxGL.PointAnnotation
            key={marker.id.toString()}
            id={marker.id.toString()}
            coordinate={marker.coordinates}
            onSelected={() => setSelectedMarker(marker)}>
            <View style={styles.iconWrapper}>
              <Icon
                name={marker.icon}
                size={30}
                color="#007AFF" // Adjust color as needed
              />
            </View>
          </MapboxGL.PointAnnotation>
        ))}
      </MapboxGL.MapView>

      {/* Zoom Controls */}
      <View style={styles.zoomControls}>
        <TouchableOpacity style={styles.zoomButton} onPress={handleZoomIn}>
          <Text style={styles.zoomText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.zoomButton} onPress={handleZoomOut}>
          <Text style={styles.zoomText}>-</Text>
        </TouchableOpacity>
      </View>


       {/* Current Location Button */}
       <TouchableOpacity
        style={styles.currentLocationButton}
        onPress={requestLocationPermission}>
        <MaterialIcons name="my-location" size={24} color="#007AFF" />
      </TouchableOpacity>

      {/* Marker Info Modal */}
      {selectedMarker && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={!!selectedMarker}
          onRequestClose={() => setSelectedMarker(null)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.markerTitle}>{selectedMarker.name}</Text>
              <Text style={styles.markerDetails}>{selectedMarker.details}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setSelectedMarker(null)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export default FacilitiesMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  iconWrapper: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  zoomControls: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'column',
  },
  zoomButton: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 5,
  },
  zoomText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
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
  },
  markerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  markerDetails: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  currentLocationButton: {
    position: 'absolute',
    bottom: 140,
    right: 15,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
