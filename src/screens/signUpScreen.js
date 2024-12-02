import React, { useState } from 'react';
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
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';

const SignUpScreen = ({ navigation }) => {
  const [roleType, setRoleType] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <Text style={styles.mainHeader}>New Account</Text>

      <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Fullname</Text>
          <TextInput
            style={styles.input}
            placeholder="John Doe"
            placeholderTextColor="#B0C4DE"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="*******"
            placeholderTextColor="#B0C4DE"
            secureTextEntry={isPasswordSecure}
            onChangeText={(text) => setPassword(text)}
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
            keyboardType="phone-pad"
            placeholderTextColor="#B0C4DE"

          />

          <Text style={styles.label}>Role Type</Text>
          <Picker
            style={styles.picker}
            selectedValue={roleType}
            onValueChange={(itemValue) => setRoleType(itemValue)}
          >
            <Picker.Item label="Select Role Type" value="" style={{ color: '#000000' }} />
            <Picker.Item label="Field Officer" value="roleType1" />
            <Picker.Item label="Forest Officer" value="roleType2" />
            <Picker.Item label="Admin" value="roleType3" />
          </Picker>
        </View>

        <Text style={styles.orText}>
          By continuing, you agree to Terms of Use and Privacy Policy.
        </Text>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('SetPassword')}
        >
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or sign up with</Text>
        <View style={styles.socialIconsContainer}>
            <Avatar
              rounded
              size="small"
              source={require('../assets/image.png')}
            />
          </View>

        <Text style={styles.signUpText}>
          Don’t have an account?{' '}
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate('LoginPage')}
          >
            Log In
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  mainHeader: {
    fontSize: width * 0.08,
    fontWeight: 'semibold',
    color: '#2260FF',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'LeagueSpartan-semibold',
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
    fontWeight: '500',
    color: 'black',
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

export default SignUpScreen;
