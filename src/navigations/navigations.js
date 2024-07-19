import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import TabNavigation from './tab-navigators';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeStack() {
  const Stack = createNativeStackNavigator();
  const [token, setToken] = useState('');

  useEffect(() => {
    const fetchFromStorage = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('@token');

        setToken(accessToken);
        console.log('token:', token);
      } catch (error) {
        console.error('Error fetching from storage', error);
      }
    };

    fetchFromStorage();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={token !== '' ? 'Tabs' : 'Login'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{headerShown: false, tabBarVisible: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false, tabBarVisible: false}}
      />
    </Stack.Navigator>
  );
}
