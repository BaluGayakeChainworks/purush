import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';

export default function GuideBooking({navigation}) {
  const guides = [
    {
      id: '1',
      name: 'Ramesh Patil',
      languages: 'English, Hindi, Marathi',
      rating: 4.8,
    },
    {
      id: '2',
      name: 'Sunita Kulkarni',
      languages: 'Marathi, Hindi',
      rating: 4.6,
    },
    {
      id: '3',
      name: 'Arjun Deshmukh',
      languages: 'English, Marathi',
      rating: 4.9,
    },
    {
      id: '4',
      name: 'Arjun Patil',
      languages: 'English, Marathi, Hindi',
      rating: 4.9,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon
            name="arrow-back"
            size={24}
            color="#2260FF"
            onPress={() => navigation.goBack()}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Tour Guide List</Text>
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

      {guides.map(guide => (
        <View style={styles.card} key={guide.id}>
          <Image
            source={require('../../assets/avatar.png')}
            style={styles.image}
          />
          <View style={styles.details}>
            <Text style={styles.name}>{guide.name}</Text>
            <Text style={styles.languages}>Languages: {guide.languages}</Text>
            <Text style={styles.rating}>Rating: {guide.rating} ★</Text>
            <TouchableOpacity
              style={styles.bookButton}
              onPress={() =>
                navigation.navigate('BookGuide', {
                  guideId: guide.id,
                  guideName: guide.name,
                })
              }>
              <Text style={styles.bookButtonText}>Book Guide</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#2260FF',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  languages: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
  bookButton: {
    marginTop: 8,
    backgroundColor: '#2260ff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
