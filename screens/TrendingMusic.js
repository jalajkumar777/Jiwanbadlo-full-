import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TrendingMusic = () => {
  const [search, setSearch] = useState('');
  const [songs, setSongs] = useState([
    { id: '1', title: 'Kesariya', artist: 'Arijit Singh' },
    { id: '2', title: 'Natu Natu', artist: 'Rahul Sipligunj' },
    { id: '3', title: 'Calm Down', artist: 'Rema' },
    { id: '4', title: 'Let Me Love You', artist: 'Justin Bieber' },
    { id: '5', title: 'Zinda', artist: 'Shankar Mahadevan' },
  ]);

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(search.toLowerCase()) ||
    song.artist.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎵 Trending Music</Text>

      <TextInput
        style={styles.searchBox}
        placeholder="Search music..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredSongs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.songItem}>
            <Ionicons name="musical-notes" size={20} color="#fff" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.songArtist}>{item.artist}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TrendingMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  header: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  searchBox: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  songTitle: {
    color: '#fff',
    fontSize: 16,
  },
  songArtist: {
    color: '#aaa',
    fontSize: 12,
  },
});
