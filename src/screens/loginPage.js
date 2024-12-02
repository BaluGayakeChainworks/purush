import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import {Avatar} from 'react-native-elements';

const users = [
  {
    username: 'admin',
    password: 'admin@123',
    role: 'Admin',
    screen: 'AdminScreen',
  },
  {
    username: 'fieldOfficer',
    password: 'field@123',
    role: 'Field Officer',
    screen: 'FieldOfficer',
  },
  {
    username: 'forestAdmin',
    password: 'forest@123',
    role: 'Forest Admin',
    screen: 'ForestAdmin',
  },
  {
    username: 'tourist',
    password: 'tourist@123',
    role: 'Tourist',
    screen: 'TouristLogin',
  },
];

const LoginPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const user = users.find(
      user => user.username === username && user.password === password,
    );

    if (user) {
      setErrorMessage('');
      navigation.navigate(user.screen); // Navigate to the corresponding screen
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.mainHeader}>Log In</Text>
      </View>

      <KeyboardAvoidingView
        style={styles.flexContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scrollContentContainer}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag">
          <Text style={styles.header}>Welcome</Text>
          <Text style={styles.subheader}>
            Welcome to Sinhagad Fort App! Please login
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              placeholderTextColor="#B0C4DE"
              value={username}
              onChangeText={setUsername}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#B0C4DE"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}

          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          {/* <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('AdminScreen')}> */}
            <Text style={styles.loginButtonText}>Log In</Text>
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
              onPress={() => navigation.navigate('SignUpScreen')}>
              Sign Up
            </Text>
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  flexContainer: {flex: 1},
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    zIndex: 10,
  },
  mainHeader: {
    fontSize: width * 0.08,
    fontWeight: '600',
    color: '#2260FF',
  },
  scrollContentContainer: {
    flexGrow: 1,
    paddingTop: 80,
    paddingHorizontal: '10%',
  },
  header: {fontSize: 22, color: '#2260FF', marginBottom: 10},
  subheader: {fontSize: 14, color: '#7A7A7A', marginBottom: 20},
  inputContainer: {marginBottom: 15},
  label: {fontSize: 18, color: 'black', marginBottom: 5},
  input: {
    height: 45,
    borderColor: '#B0C4DE',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#ECF1FF',
  },
  errorText: {color: 'red', textAlign: 'center', marginBottom: 10},
  forgotPasswordButton: {alignItems: 'center', marginTop: 10},
  forgotPasswordText: {color: '#2260FF', fontSize: 16, fontWeight: '500'},
  loginButton: {
    backgroundColor: '#2260FF',
    paddingVertical: 15,
    borderRadius: 35,
    alignItems: 'center',
    marginTop: 10,
    width: '70%',
    marginLeft: '15%',
  },
  loginButtonText: {color: '#FFFFFF', fontSize: 18, fontWeight: 'bold'},
  orText: {
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 16,
    color: '#7A7A7A',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  signUpText: {textAlign: 'center', marginTop: 20, fontSize: 16},
  signUpLink: {color: '#2260FF', fontWeight: 'bold'},
});

export default LoginPage;
