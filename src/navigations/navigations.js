import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import TabNavigation from './tab-navigators';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FinishedSales from '../screens/Whs-Manager/Sales/FinishedSales';
import SalesScreen from '../screens/SalesMain/index';
import StockTransferlinesScreen from '../screens/Whs-Manager/StockTransferlines';
import DashboardReportScreen from '../screens/DashboardReports';
import MySales from '../screens/Whs-Manager/Sales/My-Sales/index';
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
  }, [token]);

  return (
    <Stack.Navigator initialRouteName={token !== '' ? 'Tabs' : 'Login'}>
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
      <Stack.Screen
        name="SalesScreen"
        component={SalesScreen}
        options={{tabBarVisible: false}}
      />

      <Stack.Screen
        name="StockTransferlinesScreen"
        component={StockTransferlinesScreen}
        options={{tabBarVisible: false}}
      />

      <Stack.Screen
        name="DashboardReportScreen"
        component={DashboardReportScreen}
        options={{tabBarVisible: false}}
      />
      <Stack.Screen
        name="MySales"
        component={MySales}
        options={{tabBarVisible: false}}
      />
      <Stack.Screen
        name="FinishedSales"
        component={FinishedSales}
        options={{headerShown: false, tabBarVisible: false}}
      />
    </Stack.Navigator>
  );
}
