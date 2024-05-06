import {View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, ICONS, NAME_ICONS, SCREENS} from '../constant/Constant';
import HomeScreen from '../screens/home/HomeScreen';
import SearchScreen from '../screens/search/SearchScreen';
import BookMarkScreen from '../screens/bookmark/BookMarkScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {style} from './Style';
import TabIcon from '../components/TabIcon';
import {AppDispatch} from '../redux/Store';
import {useDispatch} from 'react-redux';
import {bookmarkMeal} from '../screens/bookmark/BookmarkReducer';

const Tab = createBottomTabNavigator();
export default function MainScreen() {
  const dispatch: AppDispatch = useDispatch();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 56,
        },
      }}>
      <Tab.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabIcon
              name={NAME_ICONS.home}
              size={size}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.SEARCH}
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabIcon
              name={NAME_ICONS.search}
              focused={focused}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.BOOKMARK}
        component={BookMarkScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabIcon
              name={NAME_ICONS.bookMark}
              size={size}
              focused={focused}
              color={color}
            />
          ),
        }}
        listeners={{
          tabPress: ({defaultPrevented}) => {
            defaultPrevented;
            dispatch(bookmarkMeal());
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.SETTINGS}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabIcon
              name={NAME_ICONS.settings}
              size={size}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
