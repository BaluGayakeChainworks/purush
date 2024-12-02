import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Avatar} from 'react-native-elements';


export default function EditProfile({navigation}) {
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
        <Text style={styles.headerText}>Edit Profile</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Avatar rounded size="large" source={require('../assets/avatar.png')} />
        <TouchableOpacity style={styles.editIcon}>
          <Icon name="edit" size={14} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      <View style={styles.inputContainer}>
          <Text style={styles.label}>Fullname</Text>
          <TextInput
            style={styles.input}
            placeholder="John Doe"
            placeholderTextColor="#B0C4DE"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="johndoe@example.com"
            placeholderTextColor="#B0C4DE"
          />

          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="9875641230"
            placeholderTextColor="#B0C4DE"
            keyboardType="phone-pad"
          />

<TouchableOpacity style={styles.updateProfileButton}>
            <Text
              style={styles.updateProfileButtonText}
              onPress={() => navigation.navigate('Profile')}>
             Update Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.changePasswordButton}>
            <Text
              style={styles.changePasswordButtonText}
              onPress={() => navigation.navigate('UpdatePassword')}>
              Change Password
            </Text>
          </TouchableOpacity>

        </View>



    </View>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#2260FF',
  },
  headerSpacer: {
    width: 24, // Placeholder for right-aligned header icon spacing
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#E8E8E8',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: width * 0.28, // Adjust placement relative to profileImage
    backgroundColor: '#2260FF',
    borderRadius: 12,
    padding: 4,
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  inputContainer: {
    marginBottom: 15,
    padding:25,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
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
    color:'#000000',
    backgroundColor: '#ECF1FF',
    fontFamily: 'LeagueSpartan-medium',
    marginBottom: 15,
  },
  updateProfileButton: {
    backgroundColor: '#2260FF',
    paddingVertical: 15,
    borderRadius: 35,
    alignItems: 'center',
    marginTop: 20,
    marginBottom:10,
    width: '70%',
    marginLeft: '15%',
  },
  updateProfileButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  changePasswordButton: {
    backgroundColor: '#2260FF',
    paddingVertical: 15,
    borderRadius: 35,
    alignItems: 'center',
    marginTop: 10,
    width: '70%',
    marginLeft: '15%',
  },
  changePasswordButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
