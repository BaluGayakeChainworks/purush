import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { Avatar } from 'react-native-elements';


export default function UserManagement({navigation}) {
  const users = [
    { id: '1', name: 'Rohan', role: 'Forest Admin' },
    { id: '2', name: 'Rahul', role: 'Field Officer' },
    { id: '3', name: 'Anmol', role: 'Forest Admin' },
    { id: '4', name: 'Siddharth', role: 'Field Officer' },
    { id: '5', name: 'Ayush', role: 'Field Officer' },
  ];

  const renderUser = ({ item }) => (
    <View style={styles.userRow}>
      <Text style={styles.userText}>{item.name}</Text>
      <Text style={[styles.userText, styles.userRole]}>{item.role}</Text>
      <View style={styles.actionIcons}>
        <TouchableOpacity>
          <Icon name="edit" size={20} color="#2260FF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="delete" size={20} color="#FF0000" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#2260FF" onPress={() => navigation.goBack()} />
        </TouchableOpacity>
        <Text style={styles.headerText}>User Management</Text>
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

      {/* Search and Add User */}
      <View style={styles.searchAddContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#B0C4DE"
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText} onPress={() => navigation.navigate('AddUser')}>+ Add User</Text>
        </TouchableOpacity>
      </View>

      {/* User List */}
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Name</Text>
        <Text style={styles.tableHeaderText}>Role</Text>
        <Text style={styles.tableHeaderText}>Action</Text>
      </View>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.userList}
      />
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
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
  searchAddContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#B0C4DE',
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#F6F8FD',
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#2260FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: '#F6F8FD',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  tableHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    flex: 1,
    textAlign: 'left',
  },
  userList: {
    marginTop: 10,
  },
  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    paddingHorizontal: 10,
  },
  userText: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  userRole: {
    color: '#2260FF',
  },
  actionIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
});
