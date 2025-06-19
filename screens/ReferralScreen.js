import React from 'react';
import { View, Text, TouchableOpacity, Share, StyleSheet } from 'react-native';

const ReferralScreen = () => {
  const referralCode = "JIWAN123"; // आप चाहें तो इसे dynamic कर सकते हैं

  const shareReferral = async () => {
    try {
      await Share.share({
        message: `Join Jiwan Badlo and earn rewards! Use my referral code: ${referralCode}`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎁 Referral Bonus</Text>
      <Text style={styles.text}>Your Referral Code:</Text>
      <Text style={styles.code}>{referralCode}</Text>
      <TouchableOpacity onPress={shareReferral} style={styles.button}>
        <Text style={styles.buttonText}>📤 Share Now</Text>
      </TouchableOpacity>
      <Text style={styles.note}>Earn ₹50 when your friend signs up & verifies!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
  },
  code: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e86de',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 6,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  note: {
    marginTop: 20,
    color: '#555',
    textAlign: 'center',
  },
});

export default ReferralScreen;
