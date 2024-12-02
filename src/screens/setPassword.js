import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Dialog from 'react-native-dialog';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function SetPassword() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const navigation = useNavigation();

  const handleCreatePassword = () => {
    setDialogVisible(true); 
  };

  const handleClose = () => {
    setDialogVisible(false); 
    navigation.navigate('Home'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#2260FF" />
        </TouchableOpacity>
        <Text style={styles.mainHeader}>Set Password</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="*******"
          placeholderTextColor="#B0C4DE"
          secureTextEntry
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="*******"
          placeholderTextColor="#B0C4DE"
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleCreatePassword}>
        <Text style={styles.loginButtonText}>Create New Password</Text>
      </TouchableOpacity>

      <Dialog.Container visible={dialogVisible}>
        <View style={styles.iconContainer}>
          <Icon name="check-circle" size={40} color="#4BB543" />
        </View>
        <Dialog.Title>Account Created Successfully</Dialog.Title>
        <Dialog.Description>
          Your account has been created. You can now login to the app.
        </Dialog.Description>
        <Dialog.Button label="Close" onPress={handleClose} />
      </Dialog.Container>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  mainHeader: {
    fontSize:24,
    fontWeight: 'semibold',
    color: '#2260FF',
    fontFamily: 'LeagueSpartan-semibold',
    marginLeft: '22%',
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
    marginTop: '-50%',
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
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#ECF1FF',
    fontFamily: 'LeagueSpartan-medium',
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
});
