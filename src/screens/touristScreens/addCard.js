import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AddCard({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#2260FF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Card</Text>
      </View>

      <View style={styles.cardPreview}>
        <Text style={styles.cardNumber}>1234 5678 9001 2345</Text>
        <Text style={styles.cardDetails}>
          Card Holder Name: XYZ | Expiry Date: MM/YY
        </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Card Holder Name"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        placeholderTextColor="#A9A9A9"
        keyboardType="numeric"
      />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, { flex: 1, marginRight: 10 }]}
          placeholder="Expiry Date"
          placeholderTextColor="#A9A9A9"
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="CVV"
          placeholderTextColor="#A9A9A9"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2260FF',
    marginLeft: 10,
  },
  cardPreview: {
    backgroundColor: '#2260FF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  cardDetails: {
    color: '#fff',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#2260FF',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  saveButton: {
    backgroundColor: '#2260FF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
