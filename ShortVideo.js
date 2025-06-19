import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ShortVideo = () => {
  const [video, setVideo] = useState(null);

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
    });

    if (!result.cancelled) {
      setVideo(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 Upload Short Reel</Text>

      <TouchableOpacity style={styles.button} onPress={pickVideo}>
        <Text style={styles.buttonText}>🎞️ Choose from Gallery</Text>
      </TouchableOpacity>

      {video && (
        <View style={styles.preview}>
          <Text style={styles.previewText}>✅ Video Selected:</Text>
          <Text style={{ color: 'white' }}>{video}</Text>
        </View>
      )}
    </View>
  );
};

export default ShortVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  preview: {
    marginTop: 20,
  },
  previewText: {
    color: 'lightgreen',
    fontSize: 16,
  },
});
