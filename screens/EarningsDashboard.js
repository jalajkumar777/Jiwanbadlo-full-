import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase'; // Make sure the path is correct

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const EarningsDashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [watchPayout, setWatchPayout] = useState(0);
  const [uploadPayout, setUploadPayout] = useState(0);
  const [referralPayout, setReferralPayout] = useState(0);
  const [estimatedRevenue, setEstimatedRevenue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, 'users'));
      setTotalUsers(snapshot.size);

      let watch = 0, upload = 0, referral = 0;

      snapshot.forEach(doc => {
        const data = doc.data();
        watch += data.watchEarning || 0;
        upload += data.uploadEarning || 0;
        referral += data.referralEarning || 0;
      });

      setWatchPayout(watch);
      setUploadPayout(upload);
      setReferralPayout(referral);

      const revenue = (watch / 0.10) * 0.20;
      setEstimatedRevenue(revenue);
    };

    fetchData();
  }, []);

  const totalPayout = watchPayout + uploadPayout + referralPayout;
  const profit = estimatedRevenue - totalPayout;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📊 Admin Profit Dashboard</Text>
      <Text>Total Users: {totalUsers}</Text>
      <Text>Watch Earnings: ₹{watchPayout.toFixed(2)}</Text>
      <Text>Upload Earnings: ₹{uploadPayout.toFixed(2)}</Text>
      <Text>Referral Earnings: ₹{referralPayout.toFixed(2)}</Text>
      <Text style={styles.separator}>------------------------</Text>
      <Text>Estimated Ad Revenue: ₹{estimatedRevenue.toFixed(2)}</Text>
      <Text>Total Payout: ₹{totalPayout.toFixed(2)}</Text>
      <Text style={{ color: profit >= 0 ? 'green' : 'red' }}>
        Net Profit: ₹{profit.toFixed(2)}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  separator: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default EarningsDashboard;
