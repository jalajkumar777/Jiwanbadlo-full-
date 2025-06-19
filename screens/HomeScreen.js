import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 50 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
        {/* Status (left icon) */}
        <TouchableOpacity onPress={() => navigation.navigate('StatusUpload')}>
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }}
            style={{ width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: 'blue' }}
          />
        </TouchableOpacity>

        {/* Search + Message + Settings */}
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{ marginHorizontal: 10 }}>
            <Feather name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Messages')} style={{ marginHorizontal: 10 }}>
            <Ionicons name="chatbubble-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ marginHorizontal: 10 }}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Feed Text */}
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 18 }}>Welcome to Jiwan Badlo</Text>
        <Text style={{ color: 'gray' }}>Watch videos and earn rewards</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
