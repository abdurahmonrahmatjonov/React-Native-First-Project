import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';

import Profile from '../screens/Profile';
import Home from '../screens/Home';
import SvgComponent from '../assets/icons/HomeIcon';
import ProfileIcon from '../assets/icons/ProfileIcon';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#1e3a8a',
        // tabBarBackground: 'blue',
        headerShown: false,
      })}>
      <Tab.Screen
        name="Menu"
        component={Home}
        options={{
          tabBarVisible: false,
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <SvgComponent color="#1e3a8a" />
            ) : (
              <SvgComponent color="black" />
            ),
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                color: focused ? 'blue' : 'gray',
              }}>
              Menu
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarVisible: false,
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <ProfileIcon color="#1e3a8a" />
            ) : (
              <ProfileIcon color="black" />
            ),
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                color: focused ? 'blue' : 'gray',
              }}>
              Profile
            </Text>
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
