import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const AdsScreen = () => {
  const [adStatus, setAdStatus] = useState("Loading...");
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    // Future Ad integration logic
    setTimeout(() => {
      setAdStatus("Ads are running successfully!");
      setEarnings(1240.50); // Sample earning data
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📢 Advertisement Status</Text>
      <Text style={styles.status}>{adStatus}</Text>

      {adStatus === "Loading..." ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : (
        <>
          <Text style={styles.earningLabel}>💰 Earnings from Ads:</Text>
          <Text style={styles.earning}>₹{earnings.toFixed(2)}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  status: {
    fontSize: 18,
    color: '#444',
    marginBottom: 20,
  },
  earningLabel: {
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
  earning: {
    fontSize: 22,
    color: '#27ae60',
    fontWeight: 'bold',
  },
});

export default AdsScreen;
