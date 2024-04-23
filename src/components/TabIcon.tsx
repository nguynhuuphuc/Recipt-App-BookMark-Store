import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../constant/Constant';
import {style} from './Style';

type Props = {
  name: string;
  size?: number;
  color?: string;
  focused?: boolean;
};

export default function TabIcon({name, size, color, focused}: Props) {
  return (
    <View style={[style.tabIconContainer]}>
      <Icon name={name} color={color} size={size} />
      {focused ? <View style={[style.tabButtonLine]} /> : null}
    </View>
  );
}
