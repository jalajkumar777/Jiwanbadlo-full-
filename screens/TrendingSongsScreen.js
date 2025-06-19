import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const trendingSongs = [
  { id: '1', title: 'Let Me Love You', artist: 'DJ Snake ft. Justin Bieber' },
  { id: '2', title: 'Kesariya', artist: 'Arijit Singh' },
  { id: '3', title: 'Blinding Lights', artist: 'The Weeknd' },
  { id: '4', title: 'Tum Hi Ho', artist: 'Arijit Singh' },
  { id: '5', title: 'Stay', artist: 'The Kid LAROI & Justin Bieber' },
];

const TrendingSongsScreen = () => {
  const handleSongSelect = (song) => {
    alert(`🎵 Selected: ${song.title} by ${song.artist}`);
  };

  return (
    <View style={{ flex: 1, paddingTop: 40, paddingHorizontal: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>
        🎶 Trending Songs
      </Text>
      <FlatList
        data={trendingSongs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: '#f2f2f2',
              borderRadius: 10,
              marginBottom: 10,
            }}
            onPress={() => handleSongSelect(item)}
          >
            <Text style={{ fontSize: 16 }}>{item.title}</Text>
            <Text style={{ color: 'gray' }}>{item.artist}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TrendingSongsScreen;
