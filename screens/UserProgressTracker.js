import React from 'react';
import { View, Text, ProgressBarAndroid, StyleSheet } from 'react-native';

const UserProgressTracker = ({ views, followers, invites }) => {
  const viewProgress = Math.min(views / 500, 1);
  const followerProgress = Math.min(followers / 5000, 1);
  const inviteProgress = Math.min(invites / 1, 1);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎯 Your Monetization Progress</Text>

      <Text>👁️ Views: {views}/500</Text>
      <ProgressBarAndroid styleAttr="Horizontal" progress={viewProgress} color="#2196F3" />

      <Text style={{ marginTop: 10 }}>👥 Followers: {followers}/5000</Text>
      <ProgressBarAndroid styleAttr="Horizontal" progress={followerProgress} color="#4CAF50" />

      <Text style={{ marginTop: 10 }}>📨 Referrals: {invites}/1</Text>
      <ProgressBarAndroid styleAttr="Horizontal" progress={inviteProgress} color="#FF9800" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default UserProgressTracker;
