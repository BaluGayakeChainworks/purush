import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements';

export default function MyProfile({ navigation }) {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleLogout = () => {
    setLogoutModalVisible(false);
    navigation.replace('Login'); // Example: Navigate to login screen after logout
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#2260FF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Profile</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Avatar
          rounded
          size="large"
          source={require('../assets/avatar.png')}
        />
        <TouchableOpacity style={styles.editIcon}>
          <Icon name="edit" size={14} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      {/* Options Section */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <View style={styles.optionLeft}>
            <Icon name="person" size={20} color="#2260FF" />
            <Text style={styles.optionText}>Profile</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#2260FF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => setLogoutModalVisible(true)}
        >
          <View style={styles.optionLeft}>
            <Icon name="lock" size={20} color="#2260FF" />
            <Text style={styles.optionText}>Logout</Text>
          </View>
          <Icon name="chevron-right" size={24} color="#2260FF" />
        </TouchableOpacity>
      </View>

      {/* Logout Confirmation Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Confirm Logout</Text>
            <Text style={styles.modalMessage}>
              Are you sure you want to log out?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setLogoutModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleLogout}
              >
                <Text style={styles.confirmButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const { width } = Dimensions.get('window');

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
    width: 24,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: width * 0.28,
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
  optionsContainer: {
    marginTop: 20,
    padding: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#000000',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(34, 96, 255, 0.55)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2260FF',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#333333',
  },
  confirmButton: {
    backgroundColor: '#2260FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  confirmButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
