import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const LongVideo = () => {
  const [video, setVideo] = useState(null);

  const pickLongVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setVideo(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎥 Upload Long Video</Text>

      <TouchableOpacity style={styles.button} onPress={pickLongVideo}>
        <Text style={styles.buttonText}>📁 Select from Gallery</Text>
      </TouchableOpacity>

      {video && (
        <View style={styles.preview}>
          <Text style={styles.previewText}>✅ Selected Video:</Text>
          <Text style={{ color: '#ccc' }}>{video}</Text>
        </View>
      )}
    </View>
  );
};

export default LongVideo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1f1f1f',
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  preview: {
    marginTop: 25,
  },
  previewText: {
    color: 'lightgreen',
    fontSize: 15,
    marginBottom: 10,
  },
});
