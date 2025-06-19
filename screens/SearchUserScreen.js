import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const dummyUsers = [
  { id: '1', name: 'Jalaj Kumar' },
  { id: '2', name: 'Ravi Sharma' },
  { id: '3', name: 'Ayesha Khan' },
  { id: '4', name: 'Rohan Mehta' },
  { id: '5', name: 'Sneha Roy' },
];

const SearchUserScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (text) => {
    setQuery(text);
    const filtered = dummyUsers.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
    setResults(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🔍 Search Users</Text>
      <TextInput
        placeholder="Enter username..."
        value={query}
        onChangeText={handleSearch}
        style={styles.input}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem}>
            <Text style={styles.resultText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No user found.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },
  resultItem: {
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  resultText: {
    fontSize: 16,
  },
  emptyText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default SearchUserScreen;
