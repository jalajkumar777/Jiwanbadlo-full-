import React from 'react';
import { View, Text } from 'react-native';

const WithdrawAds = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>💸 Watch Ads to Withdraw</Text>
      <Text style={{ marginTop: 10, color: 'gray' }}>
        To withdraw your earnings, please watch 2 ads as verification.
      </Text>
    </View>
  );
};

export default WithdrawAds;
