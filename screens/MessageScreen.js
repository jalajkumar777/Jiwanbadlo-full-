import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const dummyMessages = [
  { id: '1', name: 'Ravi Kumar', lastMessage: 'Hey, what\'s up?' },
  { id: '2', name: 'Anjali Verma', lastMessage: 'Let\'s collab today!' },
  { id: '3', name: 'Amit Singh', lastMessage: 'Check my new reel!' },
];

const MessageScreen = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.lastMessage}</Text>
      </View>
      <Ionicons name="videocam" size={24} color="green" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>💬 Messages</Text>
      <FlatList
        data={dummyMessages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <Text style={styles.note}>Tap a user to chat or video call 📞</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  list: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: 'gray',
    marginTop: 5,
  },
  note: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 13,
  },
});

export default MessageScreen;
