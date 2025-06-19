import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const followers = 5300;
  const views = 120000;
  const isMonetized = followers >= 5000 && views >= 100000;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 My Profile</Text>
      <Text style={styles.stat}>Followers: {followers}</Text>
      <Text style={styles.stat}>Total Views: {views}</Text>

      {isMonetized ? (
        <TouchableOpacity style={styles.toolButton}>
          <Text style={styles.toolText}>💰 Open Million Tool</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.note}>🔒 Get 5K Followers & 100K Views to Unlock Million Tool</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  stat: {
    fontSize: 16,
    marginBottom: 10,
  },
  toolButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 15,
  },
  toolText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  note: {
    color: 'red',
    marginTop: 15,
    fontSize: 13,
    textAlign: 'center',
  },
});

export default ProfileScreen;
