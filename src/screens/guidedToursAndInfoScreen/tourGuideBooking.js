import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';

export default function BookGuide({route, navigation}) {
  // Retrieve guide name from the passed params
  const {guideName} = route.params;

  // States for form fields
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [dateOfVisit, setDateOfVisit] = useState('');
  const [numberOfVisitors, setNumberOfVisitors] = useState('');

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
        <Text style={styles.headerText}>Tour Guide Booking</Text>
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

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="John Doe"
            placeholderTextColor="#B0C4DE"
            value={name}
            onChangeText={setName}
            keyboardType="default"
          />

          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="9875641230"
            placeholderTextColor="#B0C4DE"
            value={mobile}
            onChangeText={setMobile}
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Guide Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Guide Name"
            value={guideName} // Pre-fill the guide name
            editable={false}
          />

          <Text style={styles.label}>Date of Visit</Text>
          <TextInput
            style={styles.input}
            placeholder="DD-MM-YYYY"
            placeholderTextColor="#B0C4DE"
            value={dateOfVisit}
            onChangeText={setDateOfVisit}
            keyboardType="default"
          />

          <Text style={styles.label}>Number of Visitors</Text>
          <TextInput
            style={styles.input}
            placeholder="5"
            placeholderTextColor="#B0C4DE"
            value={numberOfVisitors}
            onChangeText={setNumberOfVisitors}
            keyboardType="number-pad"
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            // Handle booking action, e.g., save data or navigate to payment
            console.log(
              'Guide booked:',
              name,
              mobile,
              guideName,
              dateOfVisit,
              numberOfVisitors,
            );
            navigation.goBack(); // or navigate to a confirmation screen
          }}>
          <Text style={styles.loginButtonText}>Book Guide</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

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
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
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
});
