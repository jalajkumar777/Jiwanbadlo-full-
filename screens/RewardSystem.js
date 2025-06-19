import React from 'react';
import { View, Text } from 'react-native';

const RewardSystem = ({ user }) => {
  const shortVideoReward = 1;
  const longVideoReward = 3;
  const signUpBonus = 10;
  const referralBonus = 50;

  const isWithdrawable = user.daysActive >= 7 && user.totalViews >= 500 && user.invites >= 1;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>🎁 Reward System</Text>
      <Text>• ₹{longVideoReward} for each long video uploaded</Text>
      <Text>• ₹{shortVideoReward} for each short video</Text>
      <Text>• ₹{signUpBonus} signup bonus (in stages)</Text>
      <Text>• ₹{referralBonus} per successful referral</Text>
      <Text style={{ marginTop: 10 }}>
        {isWithdrawable ? "✅ Eligible for withdrawal" : "⏳ Keep watching/uploading to unlock withdrawal"}
      </Text>
    </View>
  );
};

export default RewardSystem;
