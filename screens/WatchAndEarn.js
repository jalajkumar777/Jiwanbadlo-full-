import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const WatchAndEarn = () => {
  const [videosWatched, setVideosWatched] = useState(0);
  const [earning, setEarning] = useState(0);

  const db = getFirestore();
  const user = getAuth().currentUser;

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const q = query(collection(db, 'watchHistory'), where('userId', '==', user.uid));
        const snapshot = await getDocs(q);
        const count = snapshot.size;
        setVideosWatched(count);
        setEarning(count * 0.10); // ₹0.10 per video
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎥 Watch & Earn</Text>
      <Text style={styles.info}>Videos Watched: {videosWatched}</Text>
      <Text style={styles.earn}>Total Earned: ₹{earning.toFixed(2)}</Text>
      <Text style={styles.note}>Note: ₹10 unlocks after 500 videos watched</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
    marginVertical: 10,
  },
  earn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  note: {
    marginTop: 10,
    color: 'gray',
  },
});

export default WatchAndEarn;
