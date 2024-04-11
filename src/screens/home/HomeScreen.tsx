import {View, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../../constant/Constant';

export default function HomeScreen() {
  return (
    <View style={{backgroundColor: COLORS.primary, flex: 1}}>
      <Text>HomeScreen</Text>
    </View>
  );
}
