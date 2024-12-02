import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Avatar, Icon, Image } from 'react-native-elements';

export default function GuidedTours({navigation}) {
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
        <Text style={styles.headerText}>Guided Tours & Information</Text>
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

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../../assets/guidedToursImages/audioVideo.png')}
            style={styles.cardImage}
          />
          <View style={styles.textContainer}>
            <Text
              style={styles.cardText}
              onPress={() => navigation.navigate('AudioVideoGuide')}>
              Audio/Video Guides
            </Text>
          </View>
        </TouchableOpacity>

        {/* Card 2 */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../../assets/guidedToursImages/tour.png')}
            style={styles.cardImage}
          />
          <View style={styles.textContainer}>
            <Text
              style={styles.cardText}
              onPress={() => navigation.navigate('GuideBooking')}>
              Tour Guide Booking
            </Text>
          </View>
        </TouchableOpacity>

        {/* Card 3 */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../../assets/guidedToursImages/POI.png')}
            style={styles.cardImage}
          />
          <View style={styles.textContainer}>
            <Text
              style={styles.cardText}
              onPress={() => navigation.navigate('Facilities')}>
              Points of Interests
            </Text>
          </View>
        </TouchableOpacity>

        {/* Card 4 */}
        <TouchableOpacity style={styles.card}>
          <Image
            source={require('../../assets/guidedToursImages/ecoFriendly.png')}
            style={styles.cardImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.cardText}>Eco Friendly Travel Guidelines</Text>
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
    fontSize: 16,
    color: '#000000',
    fontWeight: 'medium',
    textAlign: 'center',
    // textShadowColor: '#000',
    // textShadowOffset: {width: 1, height: 1},
    // textShadowRadius: 4,
  },
});
