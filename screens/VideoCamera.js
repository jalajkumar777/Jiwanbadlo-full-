import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

const VideoCamera = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [recording, setRecording] = useState(false);
  const cameraRef = useRef(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleRecord = async () => {
    if (recording) {
      cameraRef.current.stopRecording();
      setRecording(false);
    } else {
      setRecording(true);
      const video = await cameraRef.current.recordAsync();
      console.log('🎥 Video recorded:', video.uri);
    }
  };

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.controlBar}>
          <TouchableOpacity
            style={styles.icon}
            onPress={() =>
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              )
            }>
            <Ionicons name="camera-reverse" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.icon, styles.record]}
            onPress={handleRecord}>
            <Ionicons
              name={recording ? 'stop-circle' : 'radio-button-on'}
              size={50}
              color={recording ? 'red' : 'white'}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  controlBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  icon: {
    alignItems: 'center',
    marginHorizontal: 30,
  },
  record: {
    alignSelf: 'center',
  },
});

export default VideoCamera;
