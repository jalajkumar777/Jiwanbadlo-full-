import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UploadOptions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Content</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ShortVideo')}>
        <Text style={styles.text}>📷 Upload Short Video</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LongVideo')}>
        <Text style={styles.text}>🎬 Upload Long Video</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LiveStream')}>
        <Text style={styles.text}>🔴 Go Live</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
