import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const VideoUploadScreen = () => {
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setVideo(result.uri);
    }
  };

  const pickThumbnail = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      setThumbnail(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>
      <TouchableOpacity onPress={pickVideo} style={{ marginBottom: 20 }}>
        <Text style={{ color: 'blue' }}>📹 Choose Video</Text>
      </TouchableOpacity>
      {video && <Text>Selected Video: {video}</Text>}

      <TouchableOpacity onPress={pickThumbnail} style={{ marginTop: 30 }}>
        <Text style={{ color: 'green' }}>🖼️ Choose Thumbnail</Text>
      </TouchableOpacity>
      {thumbnail && <Image source={{ uri: thumbnail }} style={{ width: 120, height: 120, marginTop: 10 }} />}
    </View>
  );
};

export default VideoUploadScreen;
