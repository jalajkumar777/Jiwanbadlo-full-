import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ReportProblemScreen = () => {
  const [issue, setIssue] = useState('');

  const submitIssue = () => {
    if (issue.trim() === '') {
      Alert.alert('Error', 'Please describe the issue.');
      return;
    }
    // Normally here you'd send it to a backend or Firebase
    Alert.alert('Thank You!', 'Your issue has been reported.');
    setIssue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>⚠️ Report a Problem</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe the issue..."
        value={issue}
        onChangeText={setIssue}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={submitIssue}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
    color: '#d9534f',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 15,
    borderRadius: 10,
    textAlignVertical: 'top',
    backgroundColor: '#f9f9f9',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ReportProblemScreen;
