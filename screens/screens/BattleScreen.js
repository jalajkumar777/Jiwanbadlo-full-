import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BattleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 Jiwan Battle</Text>
      <Text style={styles.subtitle}>Participate in quizzes and win rewards</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
});

export default BattleScreen;
