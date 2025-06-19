import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const StatusUpload = () => {
  const [statusUri, setStatusUri] = useState(null);

  const pickStatus = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
    });

    if (!result.cancelled) {
      setStatusUri(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📤 Upload Your Status</Text>
      <TouchableOpacity style={styles.button} onPress={pickStatus}>
        <Text style={styles.buttonText}>Choose from Gallery</Text>
      </TouchableOpacity>

      {statusUri && (
        <Image
          source={{ uri: statusUri }}
          style={styles.preview}
        />
      )}

      {statusUri && (
        <Text style={styles.info}>✅ Status ready to post (auto deletes in 24 hrs)</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007aff',
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
  preview: {
    width: 200,
    height: 300,
    marginTop: 20,
    borderRadius: 15,
  },
  info: {
    marginTop: 10,
    color: 'gray',
  },
});

export default StatusUpload;
