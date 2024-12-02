import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Modal,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements';

export default function Reports({ navigation }) {
  const [selectedReport, setSelectedReport] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const reports = [
    {
      id: '1',
      type: 'Wildfire Incident',
      date: '2024-11-10',
      status: 'In Progress',
      description: 'A wildfire incident reported in the northern zone.',
      image: require('../assets/fire.png'),
    },
    {
      id: '2',
      type: 'Trespassing Activity',
      date: '2024-11-11',
      status: 'Resolved',
      description: 'Unauthorized entry detected in the eastern section.',
      // image: require('../assets/trespassing.jpg'),
    },
    {
      id: '3',
      type: 'Landslide Incident',
      date: '2024-11-09',
      status: 'In Progress',
      description: 'Landslide reported near the southern cliff.',
      image: require('../assets/landslide.png'),
    },
    {
      id: '4',
      type: 'Patrol Log',
      date: '2024-11-08',
      status: 'Pending',
      description: 'Daily patrol log for the central forest area.',
      // image: require('../assets/patrol.jpg'),
    },
    {
      id: '5',
      type: 'Emergency',
      date: '2024-11-07',
      status: 'Resolved',
      description: 'Emergency reported and resolved near the base camp.',
      // image: require('../assets/emergency.jpg'),
    },
  ];

  const openModal = (report) => {
    setSelectedReport(report);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedReport(null);
  };

  const renderReport = ({ item }) => (
    <View style={styles.reportRow}>
      <Text style={styles.reportText}>{item.type}</Text>
      <Text style={styles.reportText}>{item.date}</Text>
      <Text style={[styles.reportText, styles.statusText(item.status)]}>
        {item.status}
      </Text>
      <TouchableOpacity style={styles.detailsButton} onPress={() => openModal(item)}>
        <Text style={styles.detailsButtonText}>View</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#2260FF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Reports</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Icon name="notifications-none" size={32} color="#2260FF" />
          </TouchableOpacity>
          <Avatar
            rounded
            size="small"
            source={require('../assets/avatar.png')}
          />
        </View>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search reports..."
          placeholderTextColor="#B0C4DE"
        />
      </View>

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Report Type</Text>
        <Text style={styles.tableHeaderText}>Date</Text>
        <Text style={styles.tableHeaderText}>Status</Text>
        <Text style={styles.tableHeaderText}>Details</Text>
      </View>

      {/* Reports List */}
      <FlatList
        data={reports}
        renderItem={renderReport}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.reportList}
      />

      {/* Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <ScrollView>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Icon name="close" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              {selectedReport && (
                <>
                  <Image source={selectedReport.image} style={styles.modalImage} />
                  <Text style={styles.modalTitle}>{selectedReport.type}</Text>
                  <Text style={styles.modalDate}>Date: {selectedReport.date}</Text>
                  <Text style={styles.modalStatus}>Status: {selectedReport.status}</Text>
                  <Text style={styles.modalDescription}>{selectedReport.description}</Text>
                </>
              )}
            </ScrollView>
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
    padding: 15,
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
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    height: 45,
    borderWidth: 1,
    borderColor: '#B0C4DE',
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#F6F8FD',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: '#F0F4FF',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  tableHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    flex: 1,
  },
  reportList: {
    marginTop: 10,
  },
  reportRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    paddingHorizontal: 10,
  },
  reportText: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
    flex: 1,
  },
  statusText: (status) => ({
    color:
      status === 'Resolved'
        ? '#28A745'
        : status === 'In Progress'
        ? '#FFC107'
        : '#DC3545',
  }),
  detailsButton: {
    backgroundColor: '#2260FF',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  detailsButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
  },
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#2260FF',
    borderRadius: 20,
    padding: 5,
    marginBottom:15,
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  modalDate: {
    fontSize: 14,
    marginBottom: 5,
    color: '#555555',
  },
  modalStatus: {
    fontSize: 14,
    marginBottom: 15,
    color: '#555555',
  },
  modalDescription: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'justify',
  },
});
