import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker, TextInput } from 'react-native';

const SettingsScreen = () => {
  const [language, setLanguage] = useState('en');
  const [category, setCategory] = useState('entertainment');

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>⚙️ Settings</Text>

      <Text style={styles.label}>🌐 Select Language</Text>
      <Picker
        selectedValue={language}
        style={styles.picker}
        onValueChange={(itemValue) => setLanguage(itemValue)}
      >
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Hindi" value="hi" />
        <Picker.Item label="Spanish" value="es" />
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="Arabic" value="ar" />
      </Picker>

      <Text style={styles.label}>🎯 Choose Category</Text>
      <Picker
        selectedValue={category}
        style={styles.picker}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Entertainment" value="entertainment" />
        <Picker.Item label="Education" value="education" />
        <Picker.Item label="News" value="news" />
        <Picker.Item label="Motivation" value="motivation" />
        <Picker.Item label="Fitness" value="fitness" />
      </Picker>

      <Text style={styles.note}>✅ These settings help customize your feed and monetization category.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginTop: 15,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  note: {
    marginTop: 20,
    fontSize: 13,
    color: 'gray',
  },
});

export default SettingsScreen;
