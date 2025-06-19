// screens/ShortsSwipeScreen.js
import React, { useRef } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import { Video } from 'expo-av';

const { height } = Dimensions.get('window');

const videos = [
  { id: '1', uri: 'https://www.w3schools.com/html/mov_bbb.mp4' },
  { id: '2', uri: 'https://www.w3schools.com/html/movie.mp4' },
  // यहाँ अपने Firebase या backend के video URLs जोड़ें
];

const ShortsSwipeScreen = () => {
  const videoRefs = useRef([]);

  const renderItem = ({ item, index }) => (
    <View style={{ height }}>
      <Video
        ref={(ref) => (videoRefs.current[index] = ref)}
        source={{ uri: item.uri }}
        resizeMode="cover"
        shouldPlay={index === 0}
        isLooping
        style={{ height: '100%', width: '100%' }}
      />
    </View>
  );

  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      pagingEnabled
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ShortsSwipeScreen;
