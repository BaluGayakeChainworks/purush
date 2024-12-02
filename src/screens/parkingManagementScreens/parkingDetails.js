import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Avatar, Icon } from 'react-native-elements';

export default function ParkingDetails({ route, navigation }) {
  const { selectedSpot } = route.params; // Retrieve the selected spot from the route params

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [date, setDate] = useState('');

  // Set the default vehicleType based on the selected spot
 useEffect(() => {
    if (selectedSpot) {
      // Check the title or any other property of selectedSpot to determine vehicle type
      if (selectedSpot.title.toLowerCase().includes('bike')) {
        setVehicleType('Bike');
      } else if (selectedSpot.title.toLowerCase().includes('car')) {
        setVehicleType('Car');
      }
    }
  }, [selectedSpot]); 

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
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
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#B0C4DE"
            value={name}
            onChangeText={text => setName(text)}
          />

          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your mobile number"
            keyboardType="phone-pad"
            placeholderTextColor="#B0C4DE"
            value={number}
            onChangeText={text => setNumber(text)}
          />

          <Text style={styles.label}>Vehicle Type</Text>
          <Picker
            style={styles.picker}
            selectedValue={vehicleType}
            onValueChange={itemValue => setVehicleType(itemValue)}>
            <Picker.Item
              label="Select Vehicle Type"
              value=""
              style={{ color: '#000000' }}
            />
           <Picker.Item label="Bike" value="Bike" />
            <Picker.Item label="Car" value="Car" />
          </Picker>

          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YYYY"
            placeholderTextColor="#B0C4DE"
            value={date}
            onChangeText={text => setDate(text)}
          />

          <Text style={styles.label}>Selected Spot</Text>
          <TextInput
            style={[styles.input, styles.disabledInput]}
            value={selectedSpot?.title || ''}
            editable={false}
            placeholderTextColor="#B0C4DE"
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('PaymentMethod')}>
          <Text style={styles.loginButtonText}>Confirm Booking</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
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
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginBottom: 5,
    fontFamily: 'LeagueSpartan-medium',
  },
  input: {
    height: 45,
    width: '100%',
    borderColor: '#B0C4DE',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#ECF1FF',
    fontFamily: 'LeagueSpartan-medium',
    marginBottom: 15,
  },
  picker: {
    borderRadius: 25,
    height: 55,
    width: '100%',
    fontSize: 16,
    backgroundColor: '#ECF1FF',
    fontFamily: 'LeagueSpartan-medium',
    marginBottom: 15,
    color: 'black'
  },
  loginButton: {
    backgroundColor: '#2260FF',
    paddingVertical: 15,
    borderRadius: 35,
    alignItems: 'center',
    marginTop: 10,
    width: '50%',
    marginLeft: '25%',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledInput: {
    backgroundColor: '#E0E0E0',
    color: '#7A7A7A',
  },
});
