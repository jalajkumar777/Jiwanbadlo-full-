import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const EarningRules = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>💸 Jiwan Badlo Earning Rules</Text>

      <View style={styles.ruleBox}>
        <Text style={styles.rule}>📺 Watch 500 videos = ₹10</Text>
        <Text style={styles.rule}>🎥 Upload Short Video = ₹1</Text>
        <Text style={styles.rule}>📽 Upload Long Video = ₹3</Text>
        <Text style={styles.rule}>📢 Refer 1 Friend = ₹50 (after verification)</Text>
        <Text style={styles.rule}>🧾 Add 2 Status = ₹1</Text>
        <Text style={styles.rule}>🔓 Bonus becomes withdrawable after:</Text>
        <Text style={styles.subRule}>✔ 7 Days Account Age</Text>
        <Text style={styles.subRule}>✔ 1 Referral</Text>
        <Text style={styles.subRule}>✔ 500 Video Views</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  ruleBox: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
  },
  rule: {
    fontSize: 16,
    marginBottom: 10,
  },
  subRule: {
    fontSize: 14,
    marginLeft: 10,
    color: '#666',
  },
});

export default EarningRules;
