// StatusCamera.js (Jiwan Badlo - Snap Style Status Recorder)

import React, { useState, useEffect, useRef } from 'react'; import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'; import { Camera } from 'expo-camera'; import * as MediaLibrary from 'expo-media-library'; import { Ionicons, Feather } from '@expo/vector-icons'; import { useNavigation } from '@react-navigation/native';

export default function StatusCamera() { const [hasPermission, setHasPermission] = useState(null); const [type, setType] = useState(Camera.Constants.Type.back); const cameraRef = useRef(null); const navigation = useNavigation();

useEffect(() => { (async () => { const cameraStatus = await Camera.requestCameraPermissionsAsync(); const mediaStatus = await MediaLibrary.requestPermissionsAsync(); setHasPermission(cameraStatus.status === 'granted'); })(); }, []);

const takePicture = async () => { if (cameraRef.current) { const photo = await cameraRef.current.takePictureAsync(); console.log('Photo taken:', photo.uri); // Navigate to preview/upload navigation.navigate('StatusUpload', { image: photo.uri }); } };

if (hasPermission === null) { return <View />; } if (hasPermission === false) { return <Text>No access to camera</Text>; }

return ( <View style={{ flex: 1 }}> <Camera style={{ flex: 1 }} type={type} ref={cameraRef}> <View style={styles.topControls}> <TouchableOpacity onPress={() => setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}> <Ionicons name="camera-reverse" size={28} color="white" /> </TouchableOpacity> </View> <View style={styles.bottomControls}> <TouchableOpacity onPress={takePicture}> <View style={styles.captureBtn} /> </TouchableOpacity> </View> </Camera> </View> ); }

const styles = StyleSheet.create({ topControls: { position: 'absolute', top: 40, right: 20, }, bottomControls: { flex: 1, backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 25, }, captureBtn: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#fff', borderWidth: 5, borderColor: '#888', }, });

