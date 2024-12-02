// src/screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/sinhagad_background.jpg')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 0.85,
  },
  overlay: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  topText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  centerText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
