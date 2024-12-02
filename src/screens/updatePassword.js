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
import Dialog from 'react-native-dialog';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

export default function UpdatePassword() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const navigation = useNavigation();

  const handleCreatePassword = () => {
    setDialogVisible(true); // Show the dialog
  };

  const handleClose = () => {
    setDialogVisible(false); // Hide the dialog
    navigation.navigate('Profile'); // Navigate to the Home screen
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
       <View style={styles.header}>
        <TouchableOpacity>
          <Icon
            name="arrow-back"
            size={24}
            color="#2260FF"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Update Password</Text>
        <View style={styles.headerSpacer} />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Current Password</Text>
          <TextInput
            style={styles.input}
            placeholder="**********"
            placeholderTextColor="#B0C4DE"
          />
           <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

          <Text style={styles.label}>New Password</Text>
          <TextInput
            style={styles.input}
            placeholder="**********"
            placeholderTextColor="#B0C4DE"
            secureTextEntry
          />

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="**********"
            placeholderTextColor="#B0C4DE"
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleCreatePassword}
        >
          <Text style={styles.loginButtonText}>Update Password</Text>
        </TouchableOpacity>
      </ScrollView>

      <Dialog.Container visible={dialogVisible}>
        <View style={styles.iconContainer}>
          <Icon name="check-circle" size={40} color="#4BB543" />
        </View>
        <Dialog.Title>Password Changed Successfully</Dialog.Title>
        <Dialog.Button label="Close" onPress={handleClose} />
      </Dialog.Container>
    </KeyboardAvoidingView>
  );
}

const {width} = Dimensions.get('window');

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
    width: 24, // Placeholder for right-aligned header icon spacing
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  inputContainer: {
    marginBottom:25,
    width: '100%',
    marginTop: 20,
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
    width: '100%',
    borderColor: '#B0C4DE',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    backgroundColor: '#ECF1FF',
    marginBottom:15,
    fontFamily: 'LeagueSpartan-bold',
    color: '#000000',
  },
  loginButton: {
    backgroundColor: '#2260FF',
    paddingVertical: 15,
    borderRadius: 35,
    alignItems: 'center',
    marginTop: 10,
    width: '70%',
    marginLeft: '15%',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  forgotPasswordText: {
    color: '#2260FF',
    fontSize: 14,
  },
});
