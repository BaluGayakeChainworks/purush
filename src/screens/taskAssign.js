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
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';
import { Avatar } from 'react-native-elements';

export default function TaskAssign({ navigation }) {
  const [officer, setOfficer] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [taskLocation, setTaskLocation] = useState('');
  const [description, setDescription] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Fixed Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#2260FF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Assign Task</Text>
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

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Task Title */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Task Title</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.input}
              placeholder="Task Title"
              placeholderTextColor="#B0C4DE"
              value={taskTitle}
              onChangeText={setTaskTitle}
            />
            <Icon name="edit" size={20} color="#B0C4DE" />
          </View>
        </View>

        {/* Assign to Officer */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}           placeholderTextColor="#B0C4DE"
>Assign to Officer</Text>
          <View style={styles.dropdown}>
            <Picker
              selectedValue={officer}
              placeholderTextColor="#B0C4DE"

              onValueChange={(itemValue) => setOfficer(itemValue)}
            >
              <Picker.Item label="Officers List" value="" />
              <Picker.Item label="Officer 1" value="officer1" />
              <Picker.Item label="Officer 2" value="officer2" />
            </Picker>
          </View>
        </View>

        {/* Task Location */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Task Location</Text>
          <View style={styles.inputWithIcon}>
            <TextInput
              style={styles.input}
              placeholder="Location of Task"
              placeholderTextColor="#B0C4DE"

              value={taskLocation}
              onChangeText={setTaskLocation}
            />
            <Icon name="location-on" size={20} color="#B0C4DE" />
          </View>
        </View>

        {/* Task Description */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description of Task</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Description of Task..."
            placeholderTextColor="#B0C4DE"

            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>

        {/* Add/Assign Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add/Assign</Text>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    zIndex: 10, // Make sure the header stays on top of content
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
    backgroundColor: '#ECF1FF',
    color:'#000000',
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B0C4DE',
    borderRadius: 8,
    paddingHorizontal: 1,
    backgroundColor: '#F6F8FD',
    justifyContent: 'space-between',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#B0C4DE',
    color: '#000000',
    borderRadius: 8,
    backgroundColor: '#F6F8FD',
    justifyContent: 'center',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  button: {
    backgroundColor: '#2260FF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
