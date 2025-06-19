import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LiveStream = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🔴 Live Streaming</Text>
      <Text style={styles.info}>This feature is under development.</Text>
      <Text style={styles.sub}>You will soon be able to go live with your followers!</Text>
    </View>
  );
};

export default LiveStream;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 15,
  },
  info: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
  },
  sub: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
});
