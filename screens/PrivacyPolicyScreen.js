import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>🔒 Privacy Policy</Text>
      <Text style={styles.paragraph}>
        Jiwan Badlo respects your privacy. We do not sell, trade, or share your personal information
        with third parties without your consent, except as necessary to operate the app.
      </Text>
      <Text style={styles.paragraph}>
        Information we collect includes your name, email, uploaded content, and app usage statistics. 
        This is used to enhance your experience and offer personalized content.
      </Text>
      <Text style={styles.paragraph}>
        By using our app, you agree to our privacy practices as described here. We may update this policy occasionally.
      </Text>
      <Text style={styles.paragraph}>
        For any concerns, contact us at support@jiwanbadlo.com
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

export default PrivacyPolicyScreen;
