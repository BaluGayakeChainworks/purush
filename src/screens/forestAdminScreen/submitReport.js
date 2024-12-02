import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import { Avatar } from 'react-native-elements';

export default function SubmitReports({ navigation }) {
  const [reportType, setReportType] = useState('');
  const [reportTitle, setReportTitle] = useState('');
  const [description, setDescription] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const handleLogout = () => {
    setSuccessModalVisible(false);
    navigation.replace('ForestAdmin'); 
  };

  const handleAttachment = () => {
    setModalVisible(true);
  };

  const closeAttachmentModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = () => {
    setSuccessModalVisible(true);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#2260FF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Submit Report</Text>
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

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Report Title</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.input}
              placeholder="Report Title"
              value={reportTitle}
              onChangeText={setReportTitle}
            />
            <Icon name="edit" size={20} color="#B0C4DE" />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Report Type</Text>
          <View style={styles.dropdown}>
            <Picker
              selectedValue={reportType}
              onValueChange={(itemValue) => setReportType(itemValue)}
            >
              <Picker.Item label="Report Type" value="" />
              <Picker.Item label="Supervision Report" value="supervisionReport" />
              <Picker.Item label="Patrol Report" value="patrolReport" />
            </Picker>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Description of Report..."
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>

        <View style={styles.attachmentSection}>
          <TouchableOpacity style={styles.attachmentButton} onPress={handleAttachment}>
            <Icon name="add-a-photo" size={34} color="#2260FF" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit} 
        >
          <Text style={styles.buttonText}>Submit Report</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeAttachmentModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Attachment</Text>
            <TouchableOpacity style={styles.modalButton}>
              <Icon name="photo-camera" size={28} color="#FFFFFF" />
              <Text style={styles.modalButtonText}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <Icon name="upload-file" size={28} color="#FFFFFF" />
              <Text style={styles.modalButtonText}>Upload File</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={closeAttachmentModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={successModalVisible}
        onRequestClose={() => setSuccessModalVisible(false)}
      >
        <View style={styles.successModalContainer}>
          <View style={styles.successModalContent}>
            <Text style={styles.successModalTitle}>Report Submitted Successfully</Text>
            <TouchableOpacity style={styles.successModalButton} onPress={handleLogout}>
              <Text style={styles.successModalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
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
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333333',
  },
  input: {
    borderColor: '#B0C4DE',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#F6F8FD',
    color: '#333333',
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B0C4DE',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#F6F8FD',
    justifyContent: 'space-between',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#B0C4DE',
    borderRadius: 8,
    backgroundColor: '#F6F8FD',
    justifyContent: 'center',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  attachmentSection: {
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  attachmentButton: {
    backgroundColor: '#EAF0FF',
    padding: 10,
    borderRadius: 50,
  },
  submitButton: {
    backgroundColor: '#2260FF',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: width * 0.8,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2260FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 10,
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: '#2260FF',
    fontSize: 16,
  },

  // Success modal styles
  successModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  successModalContent: {
    width: width * 0.8,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  successModalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    color: '#2260FF',
  },
  successModalButton: {
    backgroundColor: '#2260FF',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  successModalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
