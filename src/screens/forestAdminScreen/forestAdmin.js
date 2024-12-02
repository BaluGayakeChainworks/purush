import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import {Avatar} from 'react-native-elements';

export default function ForestAdmin({navigation}) {
  const MenuItem = ({icon, label, onPress}) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Icon name={icon} size={24} color="#2260FF" />
      <Text style={styles.menuText}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon
            name="arrow-back"
            size={24}
            color="#2260FF"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hello Forest Admin!</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
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
      {/* Menu List */}
      <View style={styles.menuContainer}>
        <MenuItem
          icon="dashboard"
          label="Dashboard"
          onPress={() => navigation.navigate('ForestAdminOverview')}
        />
        <MenuItem
          icon="task"
          label="Patrol Schedule"
          onPress={() => navigation.navigate('PatrolSchedule')}
        />
        <MenuItem
          icon="receipt-long"
          label="Submit Report"
          onPress={() => navigation.navigate('SubmitReports')}
        />
        <MenuItem
          icon="notifications"
          label="Alerts"
          onPress={() => navigation.navigate('Alerts')}
        />
      </View>
    </View>
  );
}

const {width} = Dimensions.get('window');

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
    marginBottom: 10,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2260FF',
    justifyContent: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10,
  },
  menuContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECF1FF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 25,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginLeft: 20,
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%', // take full width
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 5,
    fontFamily: 'LeagueSpartan-medium',
  },
  input: {
    height: 45,
    width: '100%', // take full width
    borderColor: '#B0C4DE',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#ECF1FF',
    fontFamily: 'LeagueSpartan-medium',
  },
  picker: {
    borderRadius: 25,
    height: 45,
    width: '100%', // take full width
    fontSize: 16,
    backgroundColor: '#ECF1FF',
    fontFamily: 'LeagueSpartan-medium',
  },
});
