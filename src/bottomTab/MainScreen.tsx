import {View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, ICONS, SCREENS} from '../constant/Constant';
import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import BookMarkScreen from '../screens/bookmark/BookMarkScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {style} from './Style';

const Tab = createBottomTabNavigator();
export default function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused, color, position}) => {
            return focused ? (
              <View style={[style.underLine, {borderColor: color}]} />
            ) : null;
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.SEARCH}
        component={SearchScreen}
        options={{
          tabBarLabel: ({focused, color, position}) => {
            return focused ? (
              <View style={[style.underLine, {borderColor: color}]} />
            ) : null;
          },

          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.BOOKMARK}
        component={BookMarkScreen}
        options={{
          tabBarLabel: ({focused, color, position}) => {
            return focused ? (
              <View style={[style.underLine, {borderColor: color}]} />
            ) : null;
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="bookmark-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.SETTINGS}
        component={SettingsScreen}
        options={{
          tabBarLabel: ({focused, color, position}) => {
            return focused ? (
              <View style={[style.underLine, {borderColor: color}]} />
            ) : null;
          },
          tabBarIcon: ({color, size}) => (
            <Icon name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
