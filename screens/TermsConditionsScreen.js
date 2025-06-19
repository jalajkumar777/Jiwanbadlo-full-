import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const TermsConditionsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>📜 Terms and Conditions</Text>
      <Text style={styles.paragraph}>
        By using Jiwan Badlo, you agree to follow our community guidelines and terms of use. 
        You must not post or promote any offensive, illegal, or copyrighted content.
      </Text>
      <Text style={styles.paragraph}>
        We reserve the right to remove any content that violates our policies or is reported by users. 
        Repeated violations may lead to account suspension or permanent ban.
      </Text>
      <Text style={styles.paragraph}>
        Any earnings, rewards, or bonuses are subject to verification and eligibility as per the platform rules.
      </Text>
      <Text style={styles.paragraph}>
        Jiwan Badlo is not responsible for user content. All users are responsible for what they upload and share.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: '#333',
  },
});

export default TermsConditionsScreen;
