import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UploadScreen = () => {
  const [thumbnail, setThumbnail] = useState(null);

  const pickThumbnail = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setThumbnail(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'white', fontSize: 20, marginBottom: 20 }}>📷 Camera + Gallery</Text>

      <TouchableOpacity onPress={pickThumbnail} style={{ marginBottom: 20 }}>
        <Text style={{ color: 'skyblue' }}>Choose Thumbnail from Gallery</Text>
      </TouchableOpacity>

      {thumbnail && <Image source={{ uri: thumbnail }} style={{ width: 200, height: 200 }} />}

      <Text style={{ color: 'gray', marginTop: 20 }}>Filters | Music | Text | Gallery</Text>
      <Text style={{ color: 'yellow', marginTop: 10 }}>Select: Long | Short | Live</Text>
    </View>
  );
};

export default UploadScreen;
