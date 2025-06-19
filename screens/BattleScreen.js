import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BattleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 Jiwan Battle</Text>
      <Text style={styles.subtitle}>Participate in Quizzes & Win Rewards</Text>
      <Text style={styles.info}>Entry Fee: ₹49 | Win up to ₹50,000</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 6,
    color: '#555',
  },
  info: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
});

export default BattleScreen;
