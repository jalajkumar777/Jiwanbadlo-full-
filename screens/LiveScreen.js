import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

const LiveScreen = () => {
  const handleStartLive = () => {
    Alert.alert('🔴 Live Started', 'You are now live streaming!');
  };

  return (
    <View style={{ flex: 1, padding: 30, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>🔴 Start Live Broadcast</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#ff4444',
          paddingVertical: 15,
          paddingHorizontal: 40,
          borderRadius: 10,
        }}
        onPress={handleStartLive}
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>Go Live</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LiveScreen;
