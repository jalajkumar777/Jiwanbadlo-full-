import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const ReferralReward = () => {
  const [referrals, setReferrals] = useState([]);
  const [bonus, setBonus] = useState(0);

  const db = getFirestore();
  const user = getAuth().currentUser;

  useEffect(() => {
    const fetchReferrals = async () => {
      if (user) {
        const q = query(collection(db, 'users'), where('referredBy', '==', user.uid));
        const snapshot = await getDocs(q);
        const referredUsers = snapshot.docs.map(doc => doc.data());
        setReferrals(referredUsers);
        setBonus(referredUsers.length * 50); // ₹50 per successful referral
      }
    };

    fetchReferrals();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👥 Referral Bonus</Text>
      <Text style={styles.subtitle}>Total Bonus: ₹{bonus}</Text>
      <Text style={styles.note}>You get ₹50 when your friend signs up and verifies.</Text>

      <FlatList
        data={referrals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.referralItem}>
            <Text>👤 {item.name || 'User'} - Joined</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 50, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold' },
  subtitle: { fontSize: 18, marginVertical: 10, color: 'green' },
  note: { color: 'gray', marginBottom: 10 },
  referralItem: { paddingVertical: 8, borderBottomWidth: 1, borderColor: '#ddd' },
});

export default ReferralReward;
