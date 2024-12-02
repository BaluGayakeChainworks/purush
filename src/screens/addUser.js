import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements';

const AddUser = ({navigation}) => {
  const [roleType, setRoleType] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [password, setPassword] = useState('');

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
        <Text style={styles.headerText}>Add New User</Text>
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

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fullname</Text>
        <TextInput
          style={styles.input}
          placeholder="example"
          placeholderTextColor="#B0C4DE"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="*******"
          placeholderTextColor="#B0C4DE"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          placeholderTextColor="#B0C4DE"
        />

        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="9875641230"
          placeholderTextColor="#B0C4DE"
        />

        <Text style={styles.label}>Role Type</Text>
        <Picker
          style={styles.picker}
          placeholder="Select Role Type"
          selectedValue={roleType}
          onValueChange={(itemValue, itemIndex) => setRoleType(itemValue)}>
          <Picker.Item
            label="Select Role Type"
            value=""
            style={{color: '#B0C4DE'}}
          />
          <Picker.Item label="Field Officer" value="roleType1" />
          <Picker.Item label="Forest Officer" value="roleType2" />
          <Picker.Item label="Admin" value="roleType3" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text
          style={styles.loginButtonText}
          onPress={() => navigation.navigate('UserManagement')}>
          Done
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

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

  inputContainer: {
    marginBottom: 15,
    width: '100%', 
    justifyContent:'space-between',
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
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
    marginBottom:15,
    backgroundColor: '#ECF1FF',
    color:'#000000',
    fontFamily: 'LeagueSpartan-medium',
  },
  picker: {
    borderRadius: 25,
    height: 55,
    width: '100%', 
    fontSize: 16,
    backgroundColor: '#ECF1FF',
    color:'#000000',

    fontFamily: 'LeagueSpartan-medium',
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
  orText: {
    textAlign: 'center',
    color: '#2260FF',
    fontFamily: 'LeagueSpartan',
    fontWeight: 'semibold',
    fontSize: 14,
    marginVertical: 20,
  },
  
 
  signUpText: {
    textAlign: 'center',
    color: '#7A7A7A',
    fontSize: 14,
  },
  signUpLink: {
    color: '#2260FF',
    fontWeight: 'bold',
  },
});

export default AddUser;
