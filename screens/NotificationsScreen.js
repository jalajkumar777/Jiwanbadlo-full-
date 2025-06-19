import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const notifications = [
  { id: '1', message: '🎉 You earned ₹3 for uploading a long video!' },
  { id: '2', message: '🔥 Your short video got 10,000 views!' },
  { id: '3', message: '💸 ₹50 referral bonus credited to your wallet.' },
  { id: '4', message: '📥 New message from @influencer_jalaj' },
];

const NotificationsScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationBox}>
      <Text style={styles.message}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🔔 Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  notificationBox: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  message: {
    fontSize: 16,
    color: '#333',
  },
});

export default NotificationsScreen;
