import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PaymentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment</Text>
      </View>

      {/* Amount Section */}
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>₹ 500</Text>
      </View>

      {/* User Info Section */}
      <View style={styles.userInfoContainer}>
        <Image
          source={require('../../assets/avatar.png')}
          style={styles.avatar}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>johndoe@xyz.com</Text>
        </View>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Date / Hour:</Text>
          <Text style={styles.detailValue}>March 24, Year • 10:00 AM</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Booking for:</Text>
          <Text style={styles.detailValue}>Sinhagad Fort Tour</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Total:</Text>
          <Text style={styles.detailValue}>₹ 500</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Payment Method:</Text>
          <View style={styles.paymentRow}>
            <Text style={[styles.detailValue, styles.blueText]}>Card</Text>
            <TouchableOpacity>
              <Text style={styles.changeText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Pay Now Button */}
      <TouchableOpacity style={styles.payNowButton}>
        <Text style={styles.payNowButtonText} onPress={()=> navigation.navigate('PaymentMethod')}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2260FF',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  headerText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  amountContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  amountText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2260FF',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Push elements to edges
    marginBottom: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userDetails: {
    flex: 1,
    marginLeft: 15,
    alignItems: 'flex-end', // Align text to the right
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  userEmail: {
    fontSize: 14,
    color: '#666666',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2260ff',
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    color: '#333333',
    flex: 1,
    textAlign: 'right',
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1, // Ensure it stretches
  },
  blueText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  changeText: {
    fontSize: 14,
    marginLeft: 10,
    color:'#2260ff'
  },
  payNowButton: {
    backgroundColor: '#2260FF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  payNowButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
