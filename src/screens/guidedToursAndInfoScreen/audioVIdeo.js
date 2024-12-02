import React,{useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Avatar, Icon, Image } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';

export default function AudioVideoGuide({navigation}) {
    const [language, setLanguage] = useState(null);
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
      { label: 'English', value: 'english' },
      { label: 'Hindi', value: 'hindi' },
      { label: 'Marathi', value: 'marathi' },
    ]);
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon
            name="arrow-back"
            size={24}
            color="#2260FF"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Audio/Video Guides</Text>
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

      <View style={styles.dropdownContainer}>
        <Text>
          Select Language
        </Text>
        <DropDownPicker
          open={open}
          value={language}
          items={items}
          setOpen={setOpen}
          setValue={setLanguage}
          setItems={setItems}
          placeholder="English"
          containerStyle={styles.dropdown}
          style={styles.dropdown}
          dropDownStyle={styles.dropdown}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../../assets/guidedToursImages/history.png')}
            style={styles.cardImage}
          />
          <View style={styles.textContainer}>
            <Text
              style={styles.cardText}
            //   onPress={() => navigation.navigate('GuideBooking')}
              >
             History
            </Text>
          </View>
        </TouchableOpacity>

        {/* Card 2 */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../../assets/guidedToursImages/flora.png')}
            style={styles.cardImage}
          />
          <View style={styles.textContainer}>
            <Text
              style={styles.cardText}
              onPress={() => navigation.navigate('ParkingAvailability')}>
              Flora
            </Text>
          </View>
        </TouchableOpacity>

        {/* Card 3 */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../../assets/guidedToursImages/fauna.png')}
            style={styles.cardImage}
          />
          <View style={styles.textContainer}>
            <Text
              style={styles.cardText}
              onPress={() => navigation.navigate('Facilities')}>
              Fauna
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const cardHeight = 140;
const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = height * 0.15; // Adjust percentage as needed
const CARD_WIDTH = width * 0.9; // 90% of screen width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'semibold',
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
  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  card: {
    width: '90%',
    height: Dimensions.get('window').height * 0.18,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

  dropdownContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  dropdown: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: '600',
    textAlign: 'center',
    // textShadowColor: '#000',
    // textShadowOffset: {width: 1, height: 1},
    // textShadowRadius: 4,
  },
});
