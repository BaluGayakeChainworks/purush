import React, {useState} from 'react';
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
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Avatar} from 'react-native-elements';

export default function RegisterTour({navigation}) {
  const [roleType, setRoleType] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [password, setPassword] = useState('');

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
        <Text style={styles.headerText}>Hello User</Text>
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
            placeholder="John Doe"
            placeholderTextColor="#B0C4DE"
            keyboardType="default"
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="johndoe@example.com"
            placeholderTextColor="#B0C4DE"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="9875641230"
            keyboardType="phone-pad"
            placeholderTextColor="#B0C4DE"
          />

          <Text style={styles.label}>Date of Visit</Text>
          <TextInput
            style={styles.input}
            placeholder="01-11-2024"
            keyboardType="number-pad"
            placeholderTextColor="#B0C4DE"
          />

          <Text style={styles.label}>Number of Visitors</Text>
          <TextInput
            style={styles.input}
            placeholder="05"
            keyboardType="number-pad"
            placeholderTextColor="#B0C4DE"
          />
          <Text style={styles.label}>Total Price</Text>
          <TextInput
            style={styles.input}
            placeholder="500"
            keyboardType="number-pad"
            placeholderTextColor="#B0C4DE"
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('PaymentScreen')}>
          <Text style={styles.loginButtonText}>Proceed</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const {width, height} = Dimensions.get('window');

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
    marginBottom: 20,
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
  picker: {
    borderRadius: 25,
    height: 55,
    width: '100%',
    fontSize: 16,
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
  orText: {
    textAlign: 'center',
    color: '#2260FF',
    fontFamily: 'LeagueSpartan',
    fontWeight: 'semibold',
    fontSize: 14,
    marginVertical: 10,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    width: '100%',
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
