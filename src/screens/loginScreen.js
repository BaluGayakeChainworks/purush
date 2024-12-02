import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Add an image */}
      <Image
        source={require('../assets/forestDept.png')} // Replace with your image path
        style={styles.image}
        resizeMode="cover"
      />

      <TouchableOpacity
        style={styles.blueButton}
        onPress={() => navigation.navigate('LoginPage')}>
        <Text style={styles.blueButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.whiteButton}
        onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.whiteButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  image: {
    position: 'absolute', 
    top: 30,
    borderRadius:10,
    width: '90%',
    height: '60%', 
  },
  blueButton: {
    backgroundColor: '#2260FF',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 45,
    alignItems: 'center',
    marginBottom: 20,
  },
  blueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  whiteButton: {
    backgroundColor: '#CAD6FF',
    width: '80%',
    paddingVertical: 15,
    borderRadius: 45,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2260FF',
  },
  whiteButtonText: {
    color: '#2260FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
