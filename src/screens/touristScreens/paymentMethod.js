import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PaymentMethod({navigation}) {
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
        <Text style={styles.headerText}>Payment Method</Text>
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

      <Text style={styles.sectionTitle}>Credit & Debit Card</Text>
      <TouchableOpacity
        style={styles.cardOption}
        onPress={() => navigation.navigate('AddCard')}>
        <Text style={styles.optionText}>Add New Card</Text>
        <Icon name="radio-button-unchecked" size={24} color="#2260FF" />
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>More Payment Option</Text>
      <TouchableOpacity
        style={styles.cardOption}
        onPress={() => navigation.navigate('PaymentConfirmation')}>
        <View style={styles.iconAndText}>
          <Image
            source={require('../../assets/cred.png')}
            style={styles.paymentIcon}
          />
          <Text style={styles.optionText}>Cred Pay</Text>
        </View>
        <Icon name="arrow-forward-ios" size={20} color="#2260FF" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardOption}
        onPress={() => navigation.navigate('ParkingConfirmation')}>
        <View style={styles.iconAndText}>
          <Image
            source={require('../../assets/googlePay.png')}
            style={styles.paymentIcon}
          />
          <Text style={styles.optionText}>Google Pay</Text>
        </View>
        <Icon name="arrow-forward-ios" size={20} color="#2260FF" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardOption}
        onPress={() => navigation.navigate('PaymentConfirmation')}>
        <View style={styles.iconAndText}>
          <Image
            source={require('../../assets/phonePe.png')}
            style={styles.paymentIcon}
          />
          <Text style={styles.optionText}>PhonePe</Text>
        </View>
        <Icon name="arrow-forward-ios" size={20} color="#2260FF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#2260FF',
  },
  cardOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#2260FF',
    borderRadius: 8,
  },
  iconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#2260FF',
  },
});
