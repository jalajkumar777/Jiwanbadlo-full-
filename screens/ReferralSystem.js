import React from 'react';
import { View, Text } from 'react-native';

const ReferralSystem = ({ totalReferrals, verifiedReferrals }) => {
  const bonusPerReferral = 50;
  const totalBonus = verifiedReferrals * bonusPerReferral;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>🔗 Referral System</Text>
      <Text>Total Invites: {totalReferrals}</Text>
      <Text>Verified Referrals: {verifiedReferrals}</Text>
      <Text style={{ marginTop: 10, fontWeight: 'bold' }}>
        ₹{bonusPerReferral} per verified referral
      </Text>
      <Text style={{ color: 'green', marginTop: 10 }}>
        Your total referral bonus: ₹{totalBonus}
      </Text>
    </View>
  );
};

export default ReferralSystem;
