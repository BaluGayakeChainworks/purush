import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PaymentConfirmation({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('TouristLogin')}>
          <Icon name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Content */}

      <View style={styles.content}>
        <Icon name="check-circle" size={100} color="green" />
        <Text style={styles.successText}>Congratulations!</Text>
        <Text style={styles.subText}>Payment is Successfully Completed</Text>
        <Image
          style={styles.qrCode}
          source={require('../../assets/qrcode.png')}
        />
        <Text style={styles.footerText}>
          You have successfully booked your tour for Sinhagad Fort.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
  },
  header: {
    padding: 15,
    backgroundColor: '#1E90FF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  subText: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
  },
  qrCode: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
