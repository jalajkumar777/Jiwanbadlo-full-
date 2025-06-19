import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const MillionTool = () => {
  const [eligible, setEligible] = useState(false);
  const [data, setData] = useState(null);

  const db = getFirestore();
  const user = getAuth().currentUser;

  useEffect(() => {
    const checkEligibility = async () => {
      if (user) {
        const ref = doc(db, 'users', user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const userData = snap.data();
          const followers = userData.followers || 0;
          const views = userData.totalViews || 0;
          setEligible(followers >= 5000 && views >= 100000);
          setData(userData);
        }
      }
    };
    checkEligibility();
  }, []);

  if (!eligible) {
    return (
      <View style={styles.center}>
        <Text style={styles.warning}>
          ❌ You are not eligible for the Million Tool yet.
        </Text>
        <Text>Required: 5K+ followers & 100K+ views</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>💰 Million Tool</Text>
      <Text>Followers: {data?.followers}</Text>
      <Text>Total Views: {data?.totalViews}</Text>
      <Text>Total Earned: ₹{data?.totalEarning || 0}</Text>
      <Text>Status: {data?.kycVerified ? '✅ Verified' : '🔒 Not Verified'}</Text>

      {!data?.kycVerified && <Button title="Submit KYC" onPress={() => alert("KYC Form")} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  warning: {
    color: 'red',
    fontSize: 16,
    marginBottom: 10,
  },
  center: {
    marginTop: 60,
    alignItems: 'center',
  },
});

export default MillionTool;
